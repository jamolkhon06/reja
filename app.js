const express = require('express');
const app = express();
const fs = require("fs");

// Calling MongoDB
const db = require("./server").db(); // Bu yerda server.js'ning ichidan kelayotgan client.db() module'ni import qilayapti
const mongodb = require("mongodb");

let user;
// database folder'ini ichidagi user.json faylini o'qishda ushbu external/maqsadli module ishlatiladi. 
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.error(`ERROR: ${err}`);
    } else {
        user = JSON.parse(data);
        // user.json faylini json ko'rinishidan object/string ko'rinishiga o'tkazib beradi
    }
})

// 1: Kirish code
app.use(express.static("public")); // Frontend public folder'ni hammaga visible qilib qo'yadi
app.use(express.json()); // ExpressJS bizga JSON format'da ma'lumot qaytaradi
app.use(express.urlencoded({extended: true})); // Form'da Backend'ga ma'lumot yuborishini osonlashtiradi

// 2: Session code

// 3: Views code
app.set('views', 'views'); // Views folder'ini ichidagi file'larni Frontend'ga yuklab beradi
app.set('view engine', 'ejs'); // Bu loyihamizda BSSR ishlatganimiz uchun ejs formatidagi file'lar Frontend'da o'qiladi
// BSSR => Backend server side rendering

// 4: Routing code
// Odatda API'lar yaratayotgan paytimizda POST method'lar GET method'lardan oldin ishlatiladi
app.post("/create-item", (req, res) => {
    const new_reja = req.body.reja; // Bu yerda database'dan kelayotgan reja nomli ma'lumotni new_reja nomli o'zgaruvchiga tenglab olinayapti
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        res.json(data.ops[0])
    }); // Bu yerda database'dagi plans nomli collection ichiga new_reja nomli ma'lumotni insert qilayapti
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id; // Database'dan har bir ma'lumot uchun kelayotgan id qaytaryapti
    db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, (err, data) => {
        res.json({state: "success"});
        // Agar hamma narsa to'g'ri bo'lsa, API'ga tepadagi json ko'rinishida state qaytaradi
    })
    // Agar bir o'chirmoqchi bo'lgan ma'lumotning id'si plans nomli collection ichidagi ma'lumot id'siga to'g'ri bo'lsa, Backend'ga POST method yuborilib, o'sha ma'lumot o'chiriladi
});

app.post("/edit-item", (req, res) => {
    // Agar biror bir ma'lumotni edit qilmoqchi bo'lsak, Backend'ga /edit-item nomli POST method/so'rov yuboradi
    const data = req.body; // Request body'ni ichidan kelayotgan ma'lumotni data nomli variable'ga to'g'irlab oldik
    db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, {$set: {reja: data.new_input}}, (err, data) => {
        // Foydalanuvchi yangi kiritgan qiymat req.body'ning ichidagi new_input shaklida saqlanadi 
        res.json({state: "success"});
        // Agar hamma narsa to'g'ri bo'lsa, API'ga tepadagi json ko'rinishida state qaytaradi
    });
    // Database'ni ichidagi plans nomli collection ichidagi ma'lumotning id'si bir-biriga to'g'ri kelsa, $set method'i orqali yangi ma'lumotga o'zgartirib, Backend'ga yuboryapti
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(() => {
            res.json({state: "hamma rejalar o'chirildi"})
        })
    }
})

app.get("/author", (req, res) => {
    res.render("author", {user: user});
})

app.get('/', (req, res) => {
    console.log('User entered /')
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.error(err);
            res.end("Something went wrong")
        } else {
            res.render('reja', {items: data});
        }
    })
});

module.exports = app;
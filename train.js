console.log('Jack Ma maslahatlari');
const list = [
    "yaxshi talaba bo'ling", // 0-20
    "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
    "o'zingizga ishlashingizni boshlang", // 30-40
    "siz kuchli bo'lgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yo'q endi", // 60
];

// Asynchronous functions lesson
async function maslahatBering(a) {
    if(typeof a !== "number") throw new Error("Insert a number");
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return list[1]
    else if(a > 30 && a <= 40) return list[2]
    else if(a > 40 && a <= 50) return list[3]
    else if(a > 50 && a <= 60) return list[4]
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000)
        }) 
    }
}

// call via then/catch
/* console.log('Passed here 0');
maslahatBering(20)
                  .then(data => {
                    console.log('JAVOB:', data)
                })
                  .catch(err => {
                    console.error("ERROR:", err)
                });
console.log('Passed here 1') */

// call via async await
async function run() {
    let javob = await maslahatBering(65);
    console.log(javob);

    javob = await maslahatBering(31);
    console.log(javob);

    javob = await maslahatBering(41);
    console.log(javob);
}
run()


// NodeJS event loop and Callback functions lesson
/* function maslahatBering(a, callback) {
    if(typeof a !== "number") callback("please, insert number", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(() => {
            callback(null, list[5]);
        }, 5000)
    }
}

console.log("Passed here 0")
maslahatBering(10, (err, data) => {
    if(err) console.error('ERROR', err);
    else {
        console.log('JAVOB:', data);
    }
})
console.log("Passed here 1") */
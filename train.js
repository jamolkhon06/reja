// C-Task
// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin. MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

const moment = require("moment");
const now = new Date();
const date = moment(now).format("HH:mm");
class Shop {
    constructor(bread, sausage, butter) {
        this.bread = bread;
        this.sausage = sausage;
        this.butter = butter;
    }

    qoldiq() {
        console.log(`At current hour: ${date}, there are ${this.bread}s bread, ${this.sausage}s sausages and ${this.butter}s butter available.`);
    }

    sotish(product, quantity) {
        if(product === "bread") {
            this.bread -= quantity;
        } else if(product === "sausage") {
            this.sausage -= quantity;
        } else if(product === "butter") {
            this.butter -= quantity;
        } else {
            console.log('There is no such kind of a product');
        }
        console.log(`At ${date}, Sold items are: ${quantity} ${product}.`);
    }

    qabul(product, quantity) {
        if(product === "bread") {
            this.bread += quantity;
        } else if(product === "sausage") {
            this.sausage += quantity;
        } else if(product === "butter") {
            this.butter += quantity;
        } else {
            console.log('There is no such kind of a product');
        }
        console.log(`At ${date}, Received items are: ${quantity} ${product}.`);
    }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();

// B-Task
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin. MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

/* function countDigits(arg) {
    let number = 0;
    for(let num of arg) {
        if(num == 0 || num == 1 || num == 2 || num == 3 || num == 4 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9) {
            number++;
        }
    }
    return number;
}

const natija = countDigits("ad2a54y79wet0sfgb9");
console.log(natija); */

// A-Task
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi. MASALAN countLetter("e", "engineer") 3ni return qiladi.
/* function countLetter(str1, str2) {
    let count = 0;
    for(let letter of str2) {
        if(str1 === letter) {
            count++;
        }
    }
    return count;
}

const result = countLetter("e", "engineer");
console.log(result) */
// B-Task
// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin. MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

function countDigits(arg) {
    let number = 0;
    for(let num of arg) {
        if(num == 0 || num == 1 || num == 2 || num == 3 || num == 4 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9) {
            number++;
        }
    }
    return number;
}

const natija = countDigits("ad2a54y79wet0sfgb9");
console.log(natija);

// A-Task
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi. MASALAN countLetter("e", "engineer") 3ni return qiladi.
function countLetter(str1, str2) {
    let count = 0;
    for(let letter of str2) {
        if(str1 === letter) {
            count++;
        }
    }
    return count;
}

const result = countLetter("e", "engineer");
console.log(result)
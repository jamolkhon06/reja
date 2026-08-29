// A-Task
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi. MASALAN countLetter("e", "engineer") 3ni return qiladi.
function countLetter(str1, str2) {
    let count = 0;
    for(let letter of str2) {
        if(str1 === letter) {
            count++
        }
    }
    return count;
}
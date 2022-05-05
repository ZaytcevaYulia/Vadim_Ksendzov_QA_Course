// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

let string = 'yoloChka@23';
let array = [];
function checkType(string) {
    if (typeof string === "string") {
        return true;
    } else {
        array.push("This is not the string");
        return false;
    }
}

function lenght(string) {
    if (string != undefined){
        if (String(string.length) >= 5 && String(string.length) <= 64) {
            return true;
        } else {
            array.push("The string must contain from 5 to 64 characters"); 
            return false;
        }
    } else {
        array.push("The string must contain from 5 to 64 characters");
        return false;
}
}

function letters(string) {
    if (string != undefined){
        if (/[a-zA-Z]/.test(string)) {
            return true;
        } else {
            array.push("The string must contain the letters"); 
            return false;
        }
    } else {
        array.push("The string must contain the letters");
        return false;
}
}

function uppercaseLetter(string) {
    if (/[A-Z]/.test(string)) {
        return true;
    } else {
        array.push("The string must contain at least one uppercase letter"); 
        return false;
    } 
} 

function number(string) {
    if (/[0-9]/.test(string)) {
        return true;
    } else {
        array.push("The string must contain at least one number");
        return false;
    } 
} 

function symbol(string) {
    if (/@/.test(string)) {
        return true;
    } else {
        array.push("The string must contain at least one @");
        return false;
    } 
} 

function empty(string) {
    if (string != undefined){
        if (string.length != 0) {
            return true;
        } else {
            array.push("The string must not be empty");
            return false;
        }
    } else {
        array.push("The string must not be empty");
        return false;
}
} 

function validation (string) {
if (typeof string === 'undefined'){
    console.log("Your string has no value");
} else if ([checkType(string), lenght(string), letters(string),
    uppercaseLetter(string), number(string), symbol(string), 
    empty(string)].includes(false)) {
    console.log("The string doesn't meet the requirements:");
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    } 
} else {
console.log("The string is valid");
}
} 
validation(string); 
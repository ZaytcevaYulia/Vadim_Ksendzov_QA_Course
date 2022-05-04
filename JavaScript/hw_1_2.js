//Задание 1*
// Преобразовать написанный код в 26-33 hw_1 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

let age_2 = 18;
let age_3 = 60;
const checkAge = function(age){
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + " It's less then 18")
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome!")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
    }
checkAge(17);
checkAge(18);
checkAge(61);

//Задание 2*
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных.
// И если он не Number - кидалась ошибка.

const checkAgeNumber = function(age){
    if (typeof(age) === "number"){
        if (age < age_2) {
            console.log("You don't have access cause your age is " + age + " It's less than")
        } else if (age >= age_2 && age < age_3) {
            console.log("Welcome!")
        } else if (age > age_3) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    } else {
        console.log("Type of age isn't a number")
    }
}    
checkAgeNumber("cvcxv");

//Задание 3**
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) 
// пропускалось, преобразовываясь в number

const checkAgeChange = function(age){
    if (Number(age)){
        if (age < age_2) {
            console.log("You don't have access cause your age is " + age + " It's less than")
        } else if (age >= age_2 && age < age_3) {
            console.log("Welcome!")
        } else if (age > age_3) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    } else {
        console.log("You have a mistake!")
    }
}    
checkAgeChange("22");

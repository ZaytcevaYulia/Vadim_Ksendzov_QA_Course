let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
const checkAge = function(age){
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + " It's less than")
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome!")
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
    }
checkAge('17');
checkAge('18');
checkAge('61');

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

const checkAgePrompt = function(age){
    if (Number(age)){
        if (age < age_2) {
            alert("You don't have access cause your age is " + age + " It's less than")
        } else if (age >= age_2 && age < age_3) {
            alert("Welcome!")
        } else if (age > age_3) {
            alert("Keep calm and look Culture channel")
        } else {
            alert("Technical work")
        }
    } else {
        alert("You have a mistake!")
    }
}    
let userAge = prompt("Enter user's age");
checkAgePrompt(userAge);



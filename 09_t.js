console.log("Age-based Pricing");

const name1 = prompt("enter your name");
let age1 = prompt("enter your age");
age1 = Number.parseFloat(age1);
console.log(typeof age1);
let year = (age1<=10)? "Child" : (age1<=18)? "teenager": (age1 <=25)? "youth" : (age1<=60)? "middle-aged person": "old person";


let final = (year == "Child")? "Rs 100" : (year == "teenager")? "Rs 150": (year == "youth")? "Rs 200" : (year == "middle-aged person")? "Rs 250" : (year == "old person")? "free": "invalid";

alert(`${name1} you are ${year}. So your price is ${final}`);
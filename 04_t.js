console.log("Simple E-commerce Discount Calculator")
let discount;
let total;
const name1 = prompt("enter your first name")
const name2 = prompt("enter your surname")
let a = prompt("enter your total cash price");
let b = prompt("do you want premium or not");
let costumer = (b==="yes")?"premium customer": "regular customer";
let c = (b === "yes")? "you got 20% discount" : "you will only get 5% discount"
alert(c);
let _disamount = (b==="yes")? (20/100 * a) : (5/100 * a);
discount = alert(`the discount amount you have got as a ${costumer} is ${_disamount}.`)

total = a - _disamount;
alert(`${name1} ${name2} has got total discount Rs ${_disamount} and the total price after the discount is Rs${total}`)

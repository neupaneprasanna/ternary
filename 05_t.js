console.log("Bank Balance Check")

let total = parseInt(prompt("enter your total balance account"));
let purchase = parseInt(prompt("enter your purchasing amount"));

let final = (purchase<=total)? "you can purchase": "you can not purchase";
alert(final);
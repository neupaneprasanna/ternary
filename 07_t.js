console.log("Grade Calculator");
let name1 = prompt("enter your name");
let surname = prompt("enter your surname");
let rollno = prompt("enter your roll no.");
let marks = parseFloat(prompt("enter the marks you have earned"));

let result = (marks >= 90)? "A+" :(marks>=80)? "A": (marks>=70)? "B+" : (marks>=60)? "B" : (marks>=50)? "C+": (marks>=40)? "C":"Fail";
console.log(result);
alert(`${name1} ${surname} whose roll no is ${rollno} got ${result} grade.`)
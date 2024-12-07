console.log("Quiz Application");

let name1 = prompt("enter your name");
let name2 = prompt("enter your surname");
alert(`${name1} ${name2} you are welcome to our game.`)
alert("there are total 1 questions you can solve");
let questions = "what is the capital city of Nepal";
let ans = ["Kathmandu", "kathmandu"];

let final = prompt(questions);
let result = (final === ans[0] || ans[1])? "your ans is correct": "your ans is incorrect";
let a = alert(result);
let b = (final === ans)? "your score is 1 out of 1" : "your score is 0 out of 1";
alert(b);

// there is not any complex quiz program here ase it only uses ternary operator for the 1 question.
console.log("Simple Voting System")
alert("lets start the voting")
let a = prompt("Firstly, enter your age for voting")
a = Number.parseInt(a)

let result = (a>=18)? "your are eligible to vote": "yor are not eligible to vote";

console.log(result)
alert(result);

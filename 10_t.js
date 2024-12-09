console.log("Simple Alarm System")
let security;
let time = parseInt(prompt("enter your time"));
let alarm = parseInt(prompt("enter the time for alarm that you want to set"));

security = true;

let final = (time>=alarm || !security)? "Alarm is ON": "Alarm is OFF";
alert(final)
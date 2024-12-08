console.log("Light or Dark Mode Toggle")

let mode = prompt("enter the mode(dark or light) of website");
let conditin = (mode === "light")? true : false;
let fianl = (conditin === true)? "light mode": "dark mode";
console.log(fianl)
alert(`your website is in ${fianl}`);
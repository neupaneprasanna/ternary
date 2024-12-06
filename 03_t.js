console.log("Temperature Conversion (Celsius to Fahrenheit)")
let final;
let temp = prompt("enter celcius(c) or farenheit(f)")
let temperature = parseFloat(prompt("enter the temperature"))

let a = (temp == "c")? (temperature * 9/5) + 32 : (temperature - 32) * 5/9;
final = console.log(a)

alert (`the ${temperature} ${temp} is converted to ${a}`)
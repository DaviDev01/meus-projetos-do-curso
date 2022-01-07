let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let resultSpan = document.getElementById("sum-el")

function addFct() {
    let calculation = num1 + num2
    resultSpan.textContent = "Sum: " + calculation
}

function subtractFct() {
    let calculation = num1 - num2
    resultSpan.textContent = "Subtraction: " + calculation
}

function divideFct() {
    let calculation = num1 / num2
    resultSpan.textContent = "Division: " + calculation
}

function multiplyFct() {
    num1 * num2
    let calculation = num1 * num2
    resultSpan.textContent = "Mutiplication: " + calculation
}
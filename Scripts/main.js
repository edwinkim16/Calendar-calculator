function add(){
    var num1 = parseFloat(document.getElementById("num1")).valueOf;
    var num2 = parseFloat(document.getElementsById("num2")).valueOf;
    document.getElementById("result").textContent = num1 + num2;
}

function subtract(){
    var num1 = parseFloat(document.getElementById("num1")).valueOf;
    var num2 = parseFloat(document.getElementsById("num2")).valueOf;
    document.getElementById("result").textContent = num1 - num2;
}

function multiply(){
    var num1 = parseFloat(document.getElementById("num1")).valueOf;
    var num2 = parseFloat(document.getElementsById("num2")).valueOf;
    document.getElementById("result").textContent = num1 * num2;
}

function divide(){
    var num1 = parseFloat(document.getElementById("num1")).valueOf;
    var num2 = parseFloat(document.getElementsById("num2")).valueOf;
    document.getElementById("result").textContent = num1 / num2;
}
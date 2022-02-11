// Area of trap

document.getElementById("btn").addEventListener("click", calculate)


function calculate() {

//i

let num1 = +document.getElementById("n1").value;
let num2 = +document.getElementById("n2").value;
let num3 = +document.getElementById("n3").value;

//p

let area = ((num1 + num2) * num3 / 2 );

//o
document.getElementById("output").innerHTML= area
}

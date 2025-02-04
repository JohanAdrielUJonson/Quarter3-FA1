var first = prompt("Enter your first name: ");
var last = prompt("Enter your last name: ");
var age = prompt("Enter your birth year: ");
var age = 2025 - age;
document.getElementById("display").innerHTML = "Hello " + first + " " + last + "! How does it feel to be " + age + " years old?";
let taker = document.getElementById("header");
let alreadyAvailable = document.getElementById("first")
let newAdder = document.createElement("p")
newAdder.innerText = "This is the magic"
let creater = document.createElement("p")
taker.innerText = "This is the second heading";

creater.innerText = "This is the para"
alreadyAvailable.appendChild(newAdder)
document.body.appendChild(creater)
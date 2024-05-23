let heading = document.getElementById("main-heading");
heading.textContent = "Fruit World";
heading.style.color = "orange";
let header = document.getElementById("header");
header.style.backgroundColor = "green";
header.style.borderBottom = "3px solid orange"
let basket = document.getElementById("basket-heading");
basket.style.color = "green";
let footerDiv = document.getElementById("thanks");
let para = document.createElement('p');
let paraText = document.createTextNode("Please visit us again");
para.appendChild(paraText);
footerDiv.appendChild(para); 

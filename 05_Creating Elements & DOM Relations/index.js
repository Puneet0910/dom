const headerDiv = document.getElementById("header");
const subHeading = document.createElement("h3");
const subHeadingText = document.createTextNode("Buy high quality organic fruits online")
subHeading.appendChild(subHeadingText);
subHeading.style.fontStyle = "italic";
headerDiv.appendChild(subHeading);

const divs = document.querySelectorAll("div");
const secondDiv = divs[1];

const list = document.querySelector(".fruits");
const paraToadd = document.createElement("p");
const paraText = document.createTextNode("Total fruits: 4");
paraToadd.appendChild(paraText);
paraToadd.id = "fruits-total";
secondDiv.insertBefore(paraToadd, list);
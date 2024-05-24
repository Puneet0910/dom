const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";
const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyleType = "none";

let fruitItems = document.querySelectorAll(".fruit");
for (let i=0; i<fruitItems.length; i++){
    fruitItems[i].style.padding = "10px";
    fruitItems[i].style.margin = "10px";
    fruitItems[i].style.borderRadius = "5px";
    fruitItems[i].style.backgroundColor = "lightgray";
}
for (let i=0; i<fruitItems.length; i++){
    if (i % 2 == 1){
    fruitItems[i].style.backgroundColor = "brown";
    fruitItems[i].style.color = "white";
    }
    else{
        fruitItems[i].style.backgroundColor = "lightgray"; 
    }
}
const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.marginLeft = "30px"
basketHeading.style.color="brown";


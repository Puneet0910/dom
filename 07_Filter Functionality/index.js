const listItems = document.querySelectorAll('.fruit');
for (let i=0; i<listItems.length; i++){
    const edit = document.createElement('button');
    const buttonText = document.createTextNode('Edit');
    edit.appendChild(buttonText);
    edit.className = 'edit-btn';
    listItems[i].appendChild(edit);
}

const formSubmit = document.querySelector('form');
const fruitItems = document.querySelector('.fruits');

const description = document.createElement('input');
description.type = "text";
description.id ="description";
const formButton = document.querySelector('button');
formSubmit.insertBefore(description, formButton);

formSubmit.addEventListener('submit', function(event){
    event.preventDefault();
    const fruitToAdd = document.getElementById("fruit-to-add");
    const newList = document.createElement('li');
    const liText = document.createTextNode(fruitToAdd.value);
    newList.appendChild(liText);
    newList.className = 'fruit';

    const descriptionText = document.querySelector('#description').value;
    const para = document.createElement('p');
    const paraText = document.createTextNode(descriptionText);
    para.appendChild(paraText);
    para.style.fontStyle = 'italic';
    para.className = "description-text";
    if (paraText === ''){
        return;
    }
    
    newList.appendChild(para);
    fruitItems.appendChild(newList);
    
})
fruitItems.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete = event.target.parentElement;
        fruitItems.removeChild(fruitToDelete);
    };
});

// filter functionality

const filter = document.getElementById('filter');
filter.addEventListener('keyup', function(event){
    const listItems = document.querySelectorAll('.fruit');
    const searchText = event.target.value.toLowerCase();
    for(let i=0; i<listItems.length; i++){
        const fruit = listItems[i].firstChild.textContent.toLowerCase();
        const description = listItems[i].lastChild.textContent.toLowerCase();
        if (fruit.indexOf(searchText) !== -1 || description.indexOf(searchText) !== -1){
            listItems[i].style.display = 'flex';
        }
        else{
            listItems[i].style.display = 'none';
        }
    }

})

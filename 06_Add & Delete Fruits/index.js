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
formSubmit.addEventListener('submit', function(event){
    event.preventDefault();
    const fruitToAdd = document.getElementById("fruit-to-add");
    const newList = document.createElement('li');
    const liText = document.createTextNode(fruitToAdd.value);
    newList.appendChild(liText);
    newList.className = 'fruit';

    const deleteBtn = document.createElement('button');
    const deleteBtnText = document.createTextNode('x');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className = 'delete-btn';

    const edit = document.createElement('button');
    const buttonText = document.createTextNode('Edit');
    edit.appendChild(buttonText);
    edit.className = 'edit-btn';

    newList.appendChild(deleteBtn);
    newList.appendChild(edit)
    fruitItems.appendChild(newList);
    
})
fruitItems.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete = event.target.parentElement;
        fruitItems.removeChild(fruitToDelete);
    };
});
function handleFormSubmit(event){
    let username = event.target.username.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;

    let userDetails ={
        username:username,
        email:email,
        phone:phone,
    }
    localStorage.setItem(email, JSON.stringify(userDetails));
    displayUser();
}

function displayUser(){
    let keys = Object.keys(localStorage);
    let userList = document.querySelector("ul");
    userList.innerHTML = '';

    for (let i=0; i<keys.length; i++){
        let user = JSON.parse(localStorage.getItem(keys[i]));
        let listItem = document.createElement('li');
        listItem.textContent = `Name: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', function(event){
            localStorage.removeItem(user.email);
            listItem.remove();
        })
        listItem.appendChild(deleteBtn);
        userList.appendChild(listItem);

    }
}
document.addEventListener("DOMContentLoaded", displayUser)
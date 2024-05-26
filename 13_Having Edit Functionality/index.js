
function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const userDetails = {
        username: username,
        email: email,
        phone: phone,
    }
    localStorage.setItem(email, JSON.stringify(userDetails));
    displayUser();
}

function displayUser() {
    let userList = document.querySelector("ul");
    userList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));
        let listItem = document.createElement('li');
        listItem.textContent = `Name: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;


        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function () {
            localStorage.removeItem(user.email);
            listItem.remove();

            document.getElementById('username').value = user.username;
            document.getElementById('email').value = user.email;
            document.getElementById('phone').value = user.phone;
        })
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            localStorage.removeItem(user.email);
            listItem.remove();
        })
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);

        userList.appendChild(listItem);
    }
}
document.addEventListener("DOMContentLoaded", displayUser);
module.exports = handleFormSubmit;
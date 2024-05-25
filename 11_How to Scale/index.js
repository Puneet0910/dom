function handleFormSubmit(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const userDetails = {
        username:name,
        email:email,
        phone:phone,
    }

    localStorage.setItem(email, JSON.stringify(userDetails));
    displayUsers();
}
function displayUsers(){
    let keys = Object.keys(localStorage);
    let userList = document.querySelector('ul');
    userList.innerHTML = '';

for (let i=0; i<keys.length; i++){
    let user = JSON.parse(localStorage.getItem(keys[i]));
    let listItem = document.createElement('li');
    listItem.textContent = `Name: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
    userList.appendChild(listItem);
}
}
document.addEventListener("DOMContentLoaded", displayUsers);
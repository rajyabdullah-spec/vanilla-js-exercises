const textDiv = document.getElementById('textContainer');
const changeTextBtn = document.getElementById('changeTextBtn');

changeTextBtn.addEventListener('click', function() {
    textDiv.textContent = "The text has been changed by JavaScript! ✨";
});


const todoList = document.getElementById('todoList');
const addTodoBtn = document.getElementById('addTodoBtn');

addTodoBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = "New Task " + (todoList.children.length + 1);
    todoList.appendChild(newItem);
});


const myImage = document.getElementById('myImage');
const changeImageBtn = document.getElementById('changeImageBtn');

changeImageBtn.addEventListener('click', function() {
    myImage.setAttribute('src', 'images/jackson-sophat-_t-l5FFH8VA-unsplash.jpg');
});


const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;


    if (usernameInput === "Raji" && passwordInput === "123") {
        loginMessage.textContent = "Login Successful! Welcome back.";
        loginMessage.className = "success";
    } else {
        loginMessage.textContent = "Login Failed. Please check your credentials.";
        loginMessage.className = "error";
    }
});
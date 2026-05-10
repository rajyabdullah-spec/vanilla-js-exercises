const myForm = document.querySelector('#my-form');
const itemsList = document.querySelector('.items');

myForm.addEventListener('submit', function(e) {
    e.preventDefault();


    myForm.style.background = 'red';


    document.body.classList.add('bg-dark');

    itemsList.lastElementChild.innerHTML = '<h1>Hello</h1>';
});
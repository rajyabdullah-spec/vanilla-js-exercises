const alertButton = document.getElementById('alertBtn');

alertButton.addEventListener('click', function() {
    window.alert("Hello Raji! This is a message of my choice.");
});

function askAndGreet() {
    
    const userName = window.prompt("Please enter your name:");
    
   
    if (userName) {
        window.alert("Hello, " + userName + "! Nice to meet you.");
    } else {
        window.alert("Hello Stranger!");
    }
}


const greetButton = document.getElementById('greetBtn');
greetButton.addEventListener('click', askAndGreet);
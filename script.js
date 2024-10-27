// Adding rotation effect
document.getElementById('card').addEventListener('click', function () {
    this.classList.toggle('is-flipped');
});

// Storing card value in localStorage
let cardNumber = '1234 5678 9012 3456';
localStorage.setItem('debitCardNumber', cardNumber);

// Retrieve stored value
let storedCardNumber = localStorage.getItem('debitCardNumber');
console.log('Stored Card Number:', storedCardNumber);
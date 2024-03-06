/* Cosa ci serve: chilometri e età del passeggero*/

// Quando l'utente clicca sul bottone dobbiamo leggereìne i dati
const priceBtn = document.querySelector('#price-btn');
priceBtn.addEventListener('click', function () {

    const userKm = parseInt(document.querySelector('#km').value);
    const userAge = parseInt(document.querySelector('#age').value);
    console.log(userKm);
    console.log(userAge);
});

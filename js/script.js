/* Funzionalità Biglietto*/
// Quando l'utente clicca sul bottone calcola dobbiamo leggerne i dati
const priceBtn = document.querySelector('#price-btn');
priceBtn.addEventListener('click', function () {
    const userKm = parseInt(document.querySelector('#km').value);
    const userAge = parseInt(document.querySelector('#age').value);
    // - Calcolo il prezzo del biglietto
    const price = 0.21;
    const ticketPrice = userKm * price;
    // - Applico lo sconto
    let discount = 0;
    if (userAge < 18) {
        discount = ticketPrice * 20 / 100;
    } else if (userAge > 65) {
        discount = ticketPrice * 40 / 100;
    }
    // - Calcolo il prezzo finale
    const finalPrice = ticketPrice - discount;
    // - Stampo il prezzo all'utente
    const userMessage = document.querySelector('#message');
    userMessage.append(finalPrice.toFixed(2) + '€');
});

// Quando l'utente clicca sul bottone pulisci dobbiamo cancellare tutti i dati inseriti
const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', function () {
    const userKm = document.querySelector('#km').value = '';
    const userAge = document.querySelector('#age').value = '';
    const userMessage = document.querySelector('#message').innerHTML = 'Il costo del biglietto è: ';
});

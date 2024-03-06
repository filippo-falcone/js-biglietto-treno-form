/* Cosa ci serve: chilometri e età del passeggero*/

// Quando l'utente clicca sul bottone dobbiamo leggereìne i dati
const priceBtn = document.querySelector('#price-btn');
priceBtn.addEventListener('click', function () {

    const userKm = parseInt(document.querySelector('#km').value);
    const userAge = parseInt(document.querySelector('#age').value);
    console.log('km', userKm);
    console.log('età', userAge);

    // - Calcolo il prezzo del biglietto
    const price = 0.21;
    const ticketPrice = userKm * price;
    console.log('prezzo del biglietto', ticketPrice);

    // - Applico lo sconto
    let discount = 0;
    if (userAge < 18) {
        discount = ticketPrice * 20 / 100;
    } else if (userAge > 65) {
        discount = ticketPrice * 40 / 100;
    }
    console.log('sconto', discount);

    // - Calcolo il prezzo finale
    const finalPrice = ticketPrice - discount;
    console.log('prezzo finale', finalPrice);

    // - Stampo il prezzo all'utente
    const userMessage = document.querySelector('#message');
    userMessage.append(finalPrice.toFixed(2) + '€');
});

// VARIABILI E COSTANTI

let età = prompt("Salve, prego inserire l'età per favorire della promozione");
let kmtr = prompt("Inserisca i chilometri della tratta");
const sc1 = 0.80;
const sc2 = 0.60;
const price = 0.21;

console.log(parseInt(età), parseInt(kmtr), price)

// PRIMA OPERAZIONE

let start = price * kmtr

console.log( `Il prezzo base é ${start.toFixed(2)}€` )

// CONDIZIONI

if ( età < 18 ){

    let final = start * sc1;

    console.log ( `Il prezzo per la tua età é ${final.toFixed(2)}€` )

}

if ( età > 65 ) {

    let final = start * sc2

    console.log ( `Il prezzo per la tua età é ${final.toFixed(2)}€` )

}








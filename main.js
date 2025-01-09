let età = prompt("Salve, prego inserire l'età per favorire della promozione");
let kmtr = prompt("Inserisca i chilometri della tratta");
const sc1 = 0.80;
const sc2 = 0.60;
const price = 0.21;

console.log(parseInt(età), parseInt(kmtr), price)

let start = price * kmtr

console.log( start )

if ( età < 18 ){

    let sconto1 = start * sc1;

    console.log ( sconto1 )

}


if ( età > 65 ) {

    let sconto2 = start * sc2

    console.log ( sconto2 )

}






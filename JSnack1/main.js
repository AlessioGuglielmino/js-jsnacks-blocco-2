// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// chiedo all'utente di inserire un numero
let number = prompt("inserisci un numero da 1 a 10 ");

// scrivo che il numero inserito deve essere un numero intero
number = parseInt(number);

// se l'user non inserisce un numero mando un alert
if (isNaN(number)) {
  alert("inserisci un numero");
}
// imposto la condizione, se il numero è paro lo stampo
else if (number % 2 == 0) {
  console.log(number);
}
// altrimenti se è disparo al numero aggiungo +1
else {
  console.log(number + 1);
}

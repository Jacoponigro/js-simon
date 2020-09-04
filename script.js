// dichiaro variabili
var numeriRandom = 0;
var listaRandom = [];
var lunghezzaRandom = 5;
// creo allert con 5 numeri random
for (var i = 0; i < lunghezzaRandom; i++) {
  numeriRandom = Math.floor(Math.random() * 100) +1;
  listaRandom.push(numeriRandom);
}
 alert(listaRandom);
 // chiedo 5 numeri all'utente, quelli indovinati li salvo in un array
 // dichiaro variabili
var listaUtente = [];
setTimeout(function(){


for (var i = 0; i < lunghezzaRandom; i++) {
  var numeriUtente = parseInt(prompt("inserisci un numero uguale a quelli precedenti"));
if (listaUtente.indexOf(numeriUtente) > -1) {
  listaUtente.push(numeriUtente);
}
}

console.log("hai indovinato " + listaUtente.lenght + "numeri");
console.log("hai indovinato i seguenti numeri : " + listaUtente);
}, 5000);

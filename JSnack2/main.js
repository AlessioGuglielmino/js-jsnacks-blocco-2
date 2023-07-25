// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi,
//  e da queste vuole generare una falsa lista di invitati con nome e cognome.

const nome = ["alessio", "luigi", "marco", "giovanni", "maria"];
const cognome = ["rossi", "bianchi", "esposito", "fedeli", "terra"];

for (let i = 0; i < nome.length; i++) {
  const nomeRandom = nome[Math.floor(Math.random() * nome.length)];
  const cognomeRandom = cognome[Math.floor(Math.random() * cognome.length)];
  console.log(nomeRandom + " " + cognomeRandom);
}

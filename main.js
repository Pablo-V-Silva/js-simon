// Dichiarazione dell'array vuoto da riempire a ogni ciclo
let numbersArray = [];

genNumbersArray()

let disclaimer = alert([...numbersArray])

let clock = setTimeout(askNumberToUser, 2000);

// Funzione che genera dei numeri casuali da 1 a 100
function randomNumbers() {
  return Math.floor(Math.random() * 100);
}

// Generazione dei numeri da inserire all'interno dell'array
function genNumbersArray() {
  for (let i = 0; numbersArray.length < 5; i++) {
    numbersArray.push(randomNumbers())
  }
}

// Richiesta da parte nostra all'utente di ricordare i numeri
function askNumberToUser() {
  prompt('Vediamo se ti ricordi i numeri! scrivi qui i numeri che erano scritti prima!')
}
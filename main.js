// Dichiarazione dell'array vuoto da riempire a ogni ciclo
let numbersArray = [];

genNumbersArray()

let disclaimer = alert([...numbersArray])

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
// Dichiarazione dell'array vuoto da riempire a ogni ciclo
let numbersArray = [];
genNumbersArray();

// Dichiarazione dell'array dove verrà contenuto la risposta al prompt
let numberOfPrompt = [];
/* console.log(numberOfPrompt); */

// Array contenente i numeri giusti inseriti dall'utente
let rightNumber = [];

// Disclaimer dei numeri da ricordare
let disclaimer = alert([...numbersArray]);

// Timer di n secondi dopo l'alert per la richiesta dei numeri 
let clock = setTimeout(askNumberToUser, 30000);

// Funzione che genera dei numeri casuali da 1 a 10
function randomNumbers(min, max) {
  return Math.floor(Math.random() * 10 + 1);
}

// Generazione dei numeri da inserire all'interno dell'array
function genNumbersArray() {
  while (numbersArray.length < 5) {
    let number = randomNumbers();
    if (!numbersArray.includes(number)) {
      numbersArray.push(number);
    }
  }

}

// Richiesta da parte nostra all'utente di ricordare i numeri
function askNumberToUser() {

  // Ciclo che riempie le mie array
  while (numberOfPrompt.length < numbersArray.length) {
    let promptNumbers = Number(prompt('Vediamo se ti ricordi i numeri! scrivi qui i numeri che erano scritti prima!'));

    // SE i miei numeri generati randomicamente sono uguali, non li pushare all'interno dell'array dei numeri inseriti dal'utente e continua a chiedere i numeri da inserire finchè i numeri non saranno diversi
    if (!numberOfPrompt.includes(promptNumbers)) {
      numberOfPrompt.push(promptNumbers);
      // SE i numeri che io inserisco equivalgono ai numeri generati randomicamente allora li pushero all'interno dell'array dei numeri corretti, nonchè il nostro effettivo punteggio
      if (numbersArray.includes(promptNumbers)) {
        rightNumber.push(promptNumbers)
      }
    }
  }
  document.querySelector('.risposta').innerHTML = elementHTML();
}

// Elemento dell'HTML che verrà inserito dentro al conteiner della risposta
function elementHTML() {
  return `<h1>Hai Indovinato i Seguenti Numeri: ${[rightNumber]}, il tuo punteggio è di ${rightNumber.length}</h1>`
}

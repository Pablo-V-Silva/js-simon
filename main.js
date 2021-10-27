// Dichiarazione dell'array vuoto da riempire a ogni ciclo
let numbersArray = [];
genNumbersArray();

// Dichiarazione dell'array dove verrà contenuto la risposta al prompt
let numberOfPrompt = [];

// Disclaimer dei numeri da ricordare
let disclaimer = alert([...numbersArray]);

// Timer di n secondi dopo l'alert per la richiesta dei numeri 
let clock = setTimeout(askNumberToUser, 2000);

// Funzione che genera dei numeri casuali da 1 a 100
function randomNumbers(min, max) {
  return Math.floor(Math.random() * 10 + 1);
}

// Generazione dei numeri da inserire all'interno dell'array
function genNumbersArray() {
  /* for (let i = 0; numbersArray.length < 5; i++) {
    numbersArray.push(randomNumbers());
  } */
  while (numbersArray.length < 5) {
    let number = randomNumbers();
    if (!numbersArray.includes(number)) {
      numbersArray.push(number);
    }
  }

}

// Richiesta da parte nostra all'utente di ricordare i numeri
function askNumberToUser() {
  let i = 0;
  while (numberOfPrompt.length < 5) {
    let number = [i];
    if (!numberOfPrompt.includes(number)) {
      let promptNumbers = Number(prompt('Vediamo se ti ricordi i numeri! scrivi qui i numeri che erano scritti prima!'));
      numberOfPrompt.push(promptNumbers);
    }
  }
}
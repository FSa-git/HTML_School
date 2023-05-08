// Hier testen wir funktiontsdeklaration und funktionsausdruck
// starten einfach über console

//Funktionsdeklaration

let val1 = 200, val2 = 100
let gesamt = summe(val1, val2) //Funktionsaufruf
console.log("Ergebnis =" + gesamt)

function summe (parameter1, parameter2) {
     return parameter1 + parameter2
}


//Funktionsausdruck

// let summe1 = function(parameter1, parameter2) { //Funktionsausdruck
//     return parameter1 + parameter2
// }
// let val3 = 100, val4 = 200
// let gesamt1 = summe1(val3, val4) //Funktionsaufruf
// console.log("Ergebnis =" + gesamt1)

// -> Funktionsausdruck muss vor Funktionsaufruf stehen!!
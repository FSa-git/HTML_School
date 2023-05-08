//"use strict"
let iVal = 111; // Globale Variable

function simple(param1){
    if (param1){
        //var sVal = 222;
        sVal = 222;
        //let sVal = 222;
        console.log(sVal);
    }
    return sVal + iVal; // Okay, dank Variablen-Hosting
}

let sumUp = simple(true);
//console.log(sumUp);
console.log(sVal+ iVal); //Fehler: sVal hier unbekannt

// A Merken: Variablen mit let und const definieren
// B mit var definierte Variablen haben funktions-Scope (Gültigkeit), aber keinen Block Scope

// C bitte Variablen nie ohne Schlüsselwörter verwenden; Scope ist global!

// mit "use strict" um C zu vermeiden
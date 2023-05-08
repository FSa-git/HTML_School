// 1. Beispiel

function summeAlle(){
    let summe = 0;
    if (arguments.length === 0) { // Wurden keine Argumente übergeben? 
    return 0; // ... dann Funktion mit 0 beenden 
}
for(let i = 0; i < arguments.length; i++){
    summe += arguments[i];
}
return summe;
}
let sum = summeAlle(100, 200, 123, 300, 55);
console.log("Ergebnis = " + sum); // Ausgabe: Ergebnis=778 

// 2. Beispiel

function summeAlle2(iVal, ...myargs){
let summe2 = iVal;
myargs.forEach(function(val){
summe2 += val;
});
return summe2;
}
console.log("Ausgabe: " + summeAlle(100,200,300,400)); // Ausgabe: 100
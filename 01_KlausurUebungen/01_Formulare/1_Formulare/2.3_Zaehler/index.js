// Wir haben hier die Variablen deklariert die zur ID im HTML Elemenet zugreifen sollen
let plusOne = document.getElementById('upward');
let minusOne = document.getElementById('downward');

// 2. Schritt, wir haben für die jeweilige Variable die EventListener-
// Funktion angegeben, in der zum 'click' eine Funktion stattfinden soll, 
// bei dieser Funktion deklarieren wir die Variable chifreOutput die das HTML-
// Element zugreifen soll, die die ID 'counter' hat. 

// Die Variable 'zahl' soll dann durch die Funktion parseInt(), die Zeichenkette 
// in der Variable chifreOutput in eine ganze Zahl umwandeln. (Inhalt von Counter)

// Als letztes geben wir der Funktion ihren Sinn bzw., sie soll die Variable zahl, die von 
// 'chifreOutput' stammt, um den Wert 1 erhöhen.

plusOne.addEventListener('click', ()=>{

    let chifreOutput = document.getElementById('counter');

    let zahl = parseInt(chifreOutput.innerText);

    chifreOutput.innerText = zahl + 1; 

});

minusOne.addEventListener('click', ()=>{

    let chifreOutput = document.getElementById('counter');

    let zahl = parseInt(chifreOutput.innerText);

    chifreOutput.innerText = zahl - 1; 

});
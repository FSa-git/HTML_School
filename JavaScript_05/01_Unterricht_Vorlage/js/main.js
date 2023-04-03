"use strict"

document.addEventListener("DOMContentLoaded", () => {
    // Nachdem DOM geladen, kann die Id welcome gefunden und angesprochen werden
    const welcomeHere = document.getElementById("welcome")
    //Unterschied
    console.log(welcomeHere)
    console.log(welcomeHere.innerText)

    welcomeHere.addEventListener("click", welcome)

    function welcome() {
        welcomeHere.innerHTML = "Willkommen <strong>Klasse I13</strong>";
    }

    // Zum Vergleich:

    /* welcomeHere.addEventListener("click", () => {
     welcomeHere.innerHTML = "Willkommen <strong>Klasse I13!!!!!</strong>";
     })*/

    let Headings = document.getElementsByClassName("ueberschriften")
     // Aufgabe: die Texte unter den Überschriften sollen als erstes ausgeblendet werden (progressive Enhancement)

})
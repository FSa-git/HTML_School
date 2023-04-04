"use strict"

document.addEventListener("DOMContentLoaded", () => {
    // Nachdem DOM geladen, kann die Id welcome gefunden und angesprochen werden
    const welcomeHere = document.getElementById("welcome")
    //Unterschied
    console.log(welcomeHere)
    console.log(welcomeHere.innerText)

    // Version 1
    welcomeHere.addEventListener("click", welcome)
    function welcome() {
        welcomeHere.innerHTML = "Willkommen <strong>Klasse I13</strong>";
    }

    // Zum Vergleich:

    // Version 2
    /* welcomeHere.addEventListener("click", () => {
     welcomeHere.innerHTML = "Willkommen <strong>Klasse I13!!!!!</strong>";
     })*/

    let Headings = document.getElementsByClassName("ueberschriften")
     // Aufgabe: die Texte unter den Überschriften sollen als erstes ausgeblendet werden (progressive Enhancement)

     // Vergleich 
    //  let Ueberschrift = document.querySelectorAll("ueberschriften")
    //  console.log(Ueberschrift)

    for (const Heading of Headings){
        // console.log(Heading)
        Heading.getElementsByClassName.backgroundColor = "transparent"

        // Dern neuen Variable inhaltParagraph wird das nachfolgende Element zugewiesen 
        let inhaltParagraph = Heading.nextElementSibling; // wir nehmen alle, greifen auf das nachvollgende Kind zu und geben dem eine Variable zugegeben 
        inhaltParagraph.classList.add("invisible"); // es wird hier die Klasse invisible zu einer Klasse hinzugefügen

        Heading.addEventListener("click", ()=> {

            // Jetzt soll 

            inhaltParagraph.classList.toggle("invisible");
            // allert 
            if(Heading.style.backgroundColor === "transparent"){
                Heading.style.backgroundColor = "#610909";
                Heading.style.color = "white";
            }else{
                Heading.style.backgroundColor = "transparent"
            }
        })   
    }

})
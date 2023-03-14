/* Hier können die JS Anweisungen formuliert werden*/

let hoch = document.getElementById("up");
let runter = document.getElementById("down")

hoch.addEventListener("click", () => {

    // Originalelement zaehler holen und in Variable schreiben
    zaehlerausgabe = document.getElementById("zaehler");

    // console.log(zaehlerausgabe)
    // Text entnehmen und parsen
    let zahl = parseInt(zaehlerausgabe.innerText);

    // zurückschreiben
    zaehlerausgabe.innerText = zahl + 1;

    // Erweiterung: Zugriff auf die zwei "Dinge", auf die ich zugreifen kann. 
    if(zahl + 1 >= 10){
        //alert("Hallo")

    }
});

runter.addEventListener("click", () => {

    // Originalelement zaehler holen und in Variable schreiben
    zaehlerausgabe = document.getElementById("zaehler");

    // console.log(zaehlerausgabe)
    // Text entnehmen und parsen
    let zahl = parseInt(zaehlerausgabe.innerText);

    // zurückschreiben
    zaehlerausgabe.innerText = zahl - 1;

    // Erweiterung: Zugriff auf die zwei "Dinge", auf die ich zugreifen kann. 
    if(zahl - 1 >= -1){
        //alert("Hallo")

        // HTML-Objekt Zugriff
        runter.disabled = true;

        // HTML DOM Zugriff
        runter.style.color

    }
});

    document.getElementById("up").innerHTML
    // Text entnehmen und als Zahl parsen
                     = parseInt
                    
                    //zurückschreiben
    
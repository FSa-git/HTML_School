"use strict"
document.addEventListener("DOMContentLoaded",()=>{

    // Variablen definieren 

    let los = document.getElementById('button3');

    let zahl1 = document.getElementById('zahl1');
    let zahl2 = document.getElementById('zahl2');

    let add = document.getElementById('addition');
    let subt = document.getElementById('subtraktion');
    let multip = document.getElementById('multiplikation');
    let divis = document.getElementById('division'); 


    los.addEventListener('click', ()=>{

        if(add.checked){

            let input = document.getElementById('zaehler');

            let inputZahl = parseInt(input.innerText);

            let wert = parseInt(zahl1.innerText + zahl2.innerText);

            inputZahl.innerText = wert;
        }


    });

});
let hoch = document.getElementById("up");
let runter = document.getElementById("down");

hoch.addEventListener("click", ()=>{
    zahlausgabe = document.getElementById("zaehler");

    let zahl = parseInt(zahlausgabe.innerText);

    zahlausgabe.innerText = zahl + 1;
});

runter.addEventListener("click", ()=>{
    zahlausgabe = document.getElementById("zaehler");

    let zahl = parseInt(zahlausgabe.innerText);

    zahlausgabe.innerText = zahl - 1;
});
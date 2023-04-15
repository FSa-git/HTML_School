let hoch = document.getElementById("up")
let runter = document.getElementById("down")

hoch.addEventListener("click", ()=> {
    let counterOutPut = document.getElementById("counter");

    let numbr = parseInt(counterOutPut.innerText);

    counterOutPut.innerText = numbr + 1;
});

runter.addEventListener("click", ()=> {

counterOutPut = document.getElementById("counter");

let numbr = parseInt(counterOutPut.innerText);

counterOutPut.innerText = numbr - 2;

});
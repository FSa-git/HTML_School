let clickButton = document.querySelector('#click-button');
clickButton.addEventListener('click', eingabe);

function eingabe(){
    let input = document.querySelector('#input');
    let output = document.querySelector('#output');

    let newDiv = document.createElement('div'); // Neues Html Element erzeugen 
    let newContent = document.createTextNode(input.value);

    newDiv.appendChild(newContent);
    output.appendChild(newDiv);

    input.value = "";

}
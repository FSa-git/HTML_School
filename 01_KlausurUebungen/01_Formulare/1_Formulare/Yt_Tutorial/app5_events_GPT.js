let clickButton = document.querySelector('#click-button');
let input = document.querySelector('#input');
let output = document.querySelector('#output');

clickButton.addEventListener('click', eingabe);
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    eingabe();
  }
});

function eingabe(){
    let newDiv = document.createElement('div');
    let newContent = document.createTextNode(input.value);

    newDiv.appendChild(newContent);
    output.appendChild(newDiv);

    input.value = "";
}
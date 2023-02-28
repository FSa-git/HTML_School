document.addEventListener("DOMContentLoaded", ()=>{ // Erst laden und dann ladet JavaScript
 console.log("Hello World again");
//  console.log(document.getElementById("a1").innerHTML);
let ausgabe = document.getElementById("a1"); // Deklaration der Variabel "ausgabe"
console.log(ausgabe);
console.log(ausgabe.innerHTML);
ausgabe.innerHTML += "<br> und das finde ich toll"; // Deklaration mit hinzufügen von html 
console.log(ausgabe.innerHTML);

let container = document.getElementsByTagName("div"); // Alle Elemente mit div 
console.log(container);
alert(container[0].id); 
alert(container[0].innerHTML); 
alert(container[0].innerText); 

for(let i = 0; i < container.length; i++){

}

})
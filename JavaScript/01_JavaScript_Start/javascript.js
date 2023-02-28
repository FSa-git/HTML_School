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
    ausgabe.innerHTML += "<br>Das "  + (i+1)  + "te Element hat die id " + container[i].id  
    console.log(ausgabe.innerHTML);
}
let x1=document.getElementById("a2"); 
let y1=x1.childNodes[1].childNodes[0];
    y1.nodeValue="Versuch"; // Umändern auf "Versuch"

    x1.style.fontSize="1.8em"; 
    x1.style.color = "#b80926";

/* auf das Element mit der id=b1 zugreifen*/
let b1 = document.getElementById("b1");

/* wir erstellen einen Text(knoten) mit dem Inhalt "Hier steht.." und schreiben diesen in die Variable content */
let content = document.createTextNode("Hier steht der Inhalt von B1"); 

/* Wir erstellen ein leeres p-Element */
let paragraph = document.createElement("p"); // Ich mach ein Text dann ein p und dann tuhe ich das in b1 div rein, erst das, weil sonst entstehen iwo Lücken, wenn wenn wir ein div und dann ein Bild tun. Er erkennt die Größe nicht

/*der content wird dem Element paragraph als Kind hinzugefügt*/
paragraph.appendChild(content);

/* der Paragraph (mit Text) wird als Kind dem Element mit der Id b1 hinzugefügt */
b1.appendChild(paragraph);



})
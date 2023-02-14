document.addEventListener("DOMContentLoaded", ()=>{
 console.log("Hello World again");
//  console.log(document.getElementById("a1").innerHTML);
let ausgabe = document.getElementById("a1");
console.log(ausgabe);
console.log(ausgabe.innerHTML);
ausgabe.innerHTML += "<br> und das finde ich toll";
console.log(ausgabe.innerHTML);

let container = document.getElementsByTagName("div");
console.log(container);
})
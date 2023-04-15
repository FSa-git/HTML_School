let obstliste = ['Banane', 'Apfel', 'Erdbeer'];

// Arrays sind in JS Listenähnliche Objekte

console.log(obstliste[1]); // Elemente ausgeben 

console.log(obstliste.length)

obstliste.push('Heidelbeere'); // Hinzufügen an das Ende des Arrays 

// Entfernen des letzten Elementes 
obstliste.pop();

// Hinzufügen am Anfang des Arrays
obstliste.unshift('Kiwi');

// Entfernen des ersten Elements 
obstliste.shift();

// Entfernen der x-ten Position
obstliste.splice(1, 1);

// Entfernen auf Position 1 löschen und auf 0 'Melone' hinzufügen
obstliste.splice(1, 0, 'Melone');
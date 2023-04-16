let obstliste = ['Banane', 'Apfel', 'Erdbeere'];

// Es empfielt sich let zu nehmen, bei var ist die Variable
// auch nach der Schleife verfügbar

// Schleife 1
for(let i = 0; i < 10; i++) {
    console.log(i);
}

// Schleife 2
for(let i = 0; i < obstliste.length; i++) {
    console.log(obstliste[i]);
}

// Das Gleiche wie Schleife 2
for(let i in obstliste.length) {
    console.log(obstliste[i]);
}

obstliste.forEach(function(value) {
    console.log(value)
});

// Schleife 3
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

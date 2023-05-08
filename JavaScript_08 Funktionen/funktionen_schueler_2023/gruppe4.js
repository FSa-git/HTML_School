// NORMAL

function add(a, b) {
    return a + b;
}

// ARROW FUNCTIONS

const add = (a, b) => a + b;

// die curly brackets und das Return statement sind bei einzeiligen Funktionen nicht nötig

// Mehr als eine Anweisung
const sum = (a, b) => {
    const result = a + b;
    return result;
};


// this bei arrow functions 

const person = {
    name: 'Max',
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    },
    greetArrow: () => {
      console.log(`Hello, my name is ${this.name}`);
    }
  };

 
  person.greet(); // Ausgabe: Hello, my name is Max
  person.greetArrow(); // Ausgabe: Hello, my name is undefined => windows.name = undefined

   //  Im Gegensatz zu traditionellen Funktionen verwendet "this" in Arrow Functions das umgebende Objekt und nicht das aktuelle Objekt.
   // => Arrow functions sind nicht functionsscoped.


   // Spread Operator
   // Er wird verwendet, um eine beliebige Anzahl von Argumenten als Array an eine Funktion zu übergeben.

   const sum2 = (...args) => {
    let total = 0;
    for (let arg of args) {
      total += arg;
    }
    return total;
  };
  
  console.log(sum2(1, 2, 3, 4)); // Ausgabe: 10
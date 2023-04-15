// Objekte 

let Mario = {
    groeße: 180,
    alter: 25,
    augen: {
        farbe: 'blau', 
        offen: false
            },
    geburtstag: function(){
        this.alter += 1;
    }
};

Mario.geburtstag();

console.log(Mario.alter);
console.log(Mario.augen.farbe);
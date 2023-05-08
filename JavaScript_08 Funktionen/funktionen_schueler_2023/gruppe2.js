//arguments-object

function summeAlle(){
    let summe = 0;
    //arguments [] = (100, 200, 123, 300, 55)
    if(arguments.length === 0){
        return 0;
    }
    for(let i = 0; i<arguments.length; i++){
        summe += arguments[i];
    }
    return summe;
}
let sum = summeAlle(100, 200, 123, 300, 55);
console.log("Ergebnis=" + sum);




//Rest-Parameter

function summeAlle(iVal, ...myargs){
    let summe = iVal;
    // iVal = 100    myargs = 200, 300, 400
    myargs.forEach(function(val){
        summe += val;
    });
    return summe
}
console.log(summeAlle(100,200,300,400));




//Das "argument-Objekt" ist kein echter Array, während Rest-Parameter Arrays sind.
//Folglich kann man bestimmte Methoden, wie sort(), forEach(), ... verwenden.
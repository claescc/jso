'use strict';

function fie1(){
    console.log("fie1 wordt uitgevoerd");
}

function fie2(){
    console.log("nu wordt fie2 gedaan");
}

fie1();
// f();  // fout bij uitvoering; want f is nog niet gekend

// een function kan toegekend worden aan een var:
var f = fie1;
f();

f = function(){ // f is functie Fie --> maar nu nieuwe functie hieronder OVERWRITE 
    console.log("sorry... geen inspiratie voor deze anonieme fie")
};

f();

function fieMetFunctionAlsParameter(eenFunctie){  // bv setInterval(functie, timer)
    console.log("zo meteen wordt een doorgegeven functie uitgevoerd");
    eenFunctie();
}

// een function kan gebruikt worden als argument:
fieMetFunctionAlsParameter(fie2);
fieMetFunctionAlsParameter(f);
fieMetFunctionAlsParameter( function(){ // anoniem doorgeven kan ook
    console.log("een anonieme functie als argument van een function")
});

// het resultaat/de uitkomst van een function kan een function zijn
function fieMetFunctionAlsUitkomst(){
    var getal = Math.random();
    if(getal < 0.5){
        return fie2; // uitkomst functie A
    }
    return function(){ // uitkomst functie B
        console.log("gelukkig is dit de laatste anonieme functie");
    };
}

var resultFie = fieMetFunctionAlsUitkomst(); // hier komt A of B in
resultFie(); // voert A of B uit
console.log( fieMetFunctionAlsUitkomst()() ); 
fieMetFunctionAlsUitkomst()(); // korter - functie runnen = uitkomst A of B 
                                // geeft ineens de functie A of B terug 

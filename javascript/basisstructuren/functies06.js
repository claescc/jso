'use strict';
// functie F
function f(p1, p2, p3){
    console.log("p1 is %s", p1);
    console.log("p2 is %s", p2);
    console.log("p3 is %s", p3);
}

var v1=1, v2 = 2, v3 = 3, v4 = 4;       // GLOBAAL values toekennen!
// aantal argumenten = aantal parameters
f(v1,v2,v3);    // 1ste oproep leest p1=1 , p2=2, p3=3
// output: 1 2 3


//-----------SPECIALE GEVALLEN------------------

// MINDER aantal argumenten < aantal parameters            // javascript zet altijd 3 vakjes klaar!!!!
f(v1,v2);   // 1ste oproep leest p1=v1 , p2=v2, p3= undefined
// output: 1 2 undefined

//  MEER aantal argumenten > aantal parameters           // javascript zet weer 3 vakjes klaar!!!!
f(v1,v2,v3,v4); // 1ste oproep leest p1=v1 , p2=v2, p3=v3 ,NOT READ v4 forgotten
// output: 1 2 3 (geen 4de)

// VOLGORDE belangrijk bij oproep--> f(a,b,c)       f(b,a,c)   PAS OP !
'use strict';

var i;                  // DO WHILE - Until - voert 1 keer uit 
i = 1;
do {
    console.log(i); // schrijf 10
    ++i; // telt 11 // als ++i of i++ enige gebeurt op lijn maakt positie niet uit !
} while (i <= 10); //loop stopt             // als true blijft het herhaald worden
                                // als false dan stop het na 1 keer 
                                // uitkomst = 1,2,3,4,5,6,7,8,9,10



/*_________________________________________________________________
 ONGEVALSTATESTIEKEN
 _________________________________________________________________*/

 'use strict';
 
 var i;                  
 i = 1;
 do {
     console.log(i);   // PREFIX ++i (2) - (11)   NEE 
                        //of POSTFIX i++ (1) -  (10) wel correct                  
 } while (i <= 10);
                                
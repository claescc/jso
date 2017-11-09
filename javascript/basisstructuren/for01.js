'use strict';                                           // for ( beginstatement; 1
                                                        // voorwaarde : 2 
var i;                                                  // laatstesatement ) 3 ; { 4}
// i = 1                                            
for (i = 1; i <= 10; i++)   // prefix of postfix maakt ni uit in laatste statement 
{
    // i = i ; i <= 10 ; i =2
    console.log(i);
    // = 1,2,3,4,5,6,7,8,9,10     // 11 wordt niet meer getoond

}                                                       // zolang het waar is blijf het herhalen zoals while

// _________________________________________________________________________



'use strict';                                           
var i;                                                                                           
for (i = 0; i < 10; i+= 1)  
{                               // i = 9 ; 9< 10 ; NU KLOP 2 NOG dus + 3 volgende KLOPT 2 dus 4
console.log(i);                 // 0,1,2,3,4,5,6,7,8,9
}  

// _________________________________________________________________________

'use strict';                                           
var i;                                                                                           
for (i = 0; i < 10; i+= 1)  
{                               // 
console.log(i + 1);             // 1,2,3,4,5,6,7,8,9,10
}  
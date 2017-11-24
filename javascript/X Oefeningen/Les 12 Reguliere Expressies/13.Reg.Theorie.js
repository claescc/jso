'use strict';

function changeAllspaties(zin){
    return zin.replace(/ +/g,' ');
}

console.log(changeAllspaties("Een   twee    drie    ."));

// reguliere Expre zijn "greedy":
// er cordt ee zo lang mogelijk substring gezocht
// die opgebouwd is volgens het patroon van reg expres  {2, } = minsten 2 tot oneindig max

//greeedy neemt alles = ***
console.log( "banaaaaaaaan".replace(/a{2,}/g, "***"));

// neemt nu minder met ? Not greedy !
console.log( "banaaaaaaaan".replace(/a{2,}?/g, "***"));
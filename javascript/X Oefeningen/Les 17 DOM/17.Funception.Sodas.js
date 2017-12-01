/*
Oefening  (functies als argument)
Gegeven een array met objecten met volgende properties:  name, calories, color, sold.  (zie sodas00.js)
De array moet zo eenvoudig mogelijk op elk van de properties gesorteerd kunnen worden.  Als er later nog een property bijkomt, moet het mogelijk zijn om daar ook op te sorteren zonder de sorteerfunctie aan te passen.
Tip: voor arrays is functie sort gedefinieerd.
*/
'use strict'

var products = [{ name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
{ name: "Diet Cola", calories: 15, color: "caramel", sold: 43922 },
{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
{ name: "Water", calories: 0, color: "clear", sold: 62123 }
];

//console.log("__________NAME__________")
products.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
 // console.log(products.sort()); // sorteert enkel op naam nu.

//console.log("__________SOLD__________")
products.sort(function (sodaA, sodaB){
    var sodaA = sodaA.sold;
    var sodaB = sodaB.sold;
    if (sodaA > sodaB) {
        return -1;
    } else if (sodaA === sodaB) {
        return 0;
    } else {
        return 1;
    }
});
//console.log(products.sort()); 

//console.log("__________CALORIES__________")
products.sort(function (sodaA, sodaB){
    var sodaA = sodaA.calories;
    var sodaB = sodaB.calories;
    if (sodaA > sodaB) {
        return -1;
    } else if (sodaA === sodaB) {
        return 0;
    } else {
        return 1;
    }
});
//console.log(products.sort()); 

//console.log("__________COLOR__________")
products.sort(function(a, b) {
    var colorA = a.color.toUpperCase(); // ignore upper and lowercase
    var colorB = b.color.toUpperCase(); // ignore upper and lowercase
    if (colorA < colorB) {
      return -1;
    }
    if (colorA > colorB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
 // console.log(products.sort()); // sorteert enkel op naam nu.

//__________________________________________________________________________________


function getProperties(array, property) {
    var output = [];
    for (var i=0; i < array.length ; ++i)
        output.push(array[i][property]);
    return output;
}
console.log("__________NAME__________\n")
var propertyList = getProperties(products, "name"); 
console.log(propertyList);


console.log("__________SOLD__________\n")
var propertyList = getProperties(products, "sold"); 
console.log(propertyList);


console.log("__________COLOR__________\n")
var propertyList = getProperties(products, "color"); 
console.log(propertyList);


console.log("__________CALORIES__________\n")
var propertyList = getProperties(products, "calories"); 
console.log(propertyList);
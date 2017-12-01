/* inner function met closure */

function outer(){
    var naam = "Joske"; // lokaal
    function inner(){           // funtion in a function 
        console.log(naam);      // inner kan ook aan alle lokale variabelen 
    }
    return inner;
}

var test = outer(); // you can not get inner() only through outer()
test();
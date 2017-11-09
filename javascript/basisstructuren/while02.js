
// plus plus ERACHTER ++
'use strict';                  uitkomst : 1-2-3-4-5-6-7-8-9-10
var i = 0;
while( i++ < 10){               // ++ is = +1           eeerst de voorwaarde nakijken en dan de ++
    console.log(i);             // 10 wordt nog getoond ++ maar niet meer 11
}


// plus plus ++ EVOOR 
'use strict';                uitkomst : 1-2-3-4-5-6-7-8-9
var i = 0;
while( ++i < 10){               // ++ is = +1           eeerst de voorwaarde nakijken en dan de ++
    console.log(i);             // 9 wordt nog getoond ++ maar niet meer 10
}
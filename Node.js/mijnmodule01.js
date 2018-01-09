// zie ook https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/*  In NodeJs bestaat impliciet een leeg object  exports
    module.exports is initieel een andere naam voor dat object
    (exports en module.exports verwijzen initieel naar hetzelfde object)
   
    NODE JS DENKT DIT BIJ ELK DING BIJ:
    var exports = module.exports = {} // leeg object
*/

'use strict';

var v1 = 0;
exports.v2 = 0;

// exports => functie ter beschikking stellen van andere mijnmodule01
// !!! geen var of let voor exports
exports.helloInEnglish = function () {
    console.log("hello ... ");
    hello("hello again");
    v1++;
}

var hello = function (greeting) {
    console.log(greeting);
    exports.v2++;
}

exports.helloInDutch = function (aanspreking) {
    console.log("Dag,", aanspreking);
}
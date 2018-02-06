"use strict";
/* gebruik van modules */
/* wat een module exporteert, kan een andere module importeren om het te gebruiken */
exports.__esModule = true;
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var myStringValidator; // import nodig
myStringValidator = new ZipCodeValidator_1.ZipCodeValidator(); // import nodig
var zipCode = "2660";
console.log("%s is%s a valid Belgian zipcode", zipCode, myStringValidator.isAcceptable(zipCode) ? "" : " not");
zipCode = "abcd";
console.log("%s is%s a valid Belgian zipcode", zipCode, myStringValidator.isAcceptable(zipCode) ? "" : " not");

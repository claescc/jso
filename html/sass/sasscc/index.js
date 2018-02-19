'use strict';

var sass = require("node-sass");
var fs = require("fs");

console.log("Ik wacht op wijzigingen ...");
fs.watch('scss/style.scss', null, (event, filename) => {
   if (event == 'change') {
       sass.render({
           file: "scss/style.scss",
           outputStyle: "expanded",
           sourceComments: true,
       }, (error, result) => {
           if (!error) {
               fs.writeFile("css/style.css", result.css, (error) => {
                   if (!error) {
                       console.log("Klaar!");
                       console.log("Dit duurde " + result.stats.duration + 'miliseconden');
                   } else {
                       console.log('Fout bij scrijven: ' + error);
                   }
               });
           } else {
               console.log("Er was een fout bij het lezen van het scss bestand: " + error);
           }
       });
   }
});
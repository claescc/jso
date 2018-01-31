// DATA AGGREGATION 
//-------------------------------------------------------------- 
// 1) SINGLE PURPOSE AGG. FUNCTIONS
//      count() 
        db.publis.find().count(); // 100.000
        
//      distinct()
        db.restos.distinct('cuisine').length;
        db.restos.distinct('cuisine',{'address.zipcode':'10462'});

//      group()
        // aantal restaurants PER cuisine 
        db.restos.group({ // 3 properties
            'key': {'cuisine':1},
            'initial': {'xyz':0}, //  naam zelf te kiezen
            'reduce': function (current, result){
                            result.xyz += 1;} 
            });
            
        // aantal restaurants uit buurt BRONX - PER cuisine 
        db.restos.group({ // 3 properties
            'key': {'cuisine':1},
            'initial': {'inBronx':0, 'buiten':0}, // add extra values
            'reduce': function (current, result){
                if (current.borough == 'Bronx'){
                     result.inBronx++;
                    }else {
                       result.buiten++; }
                   } 
                });
 //-- OR 
        // aantal restaurants uit buurt BRONX - PER cuisine 
        db.restos.group({ // 3 properties
            'key': {'cuisine':1},
            'initial': {'inBronx':0}, // add extra values
            'reduce': function (current, result){
                     result.inBronx++;
                     },
            'cond': { 'borough':'Bronx'} 
                });
                
// sorteren op functie 
 db.restos.group({ 
     'keyf': function (doc) {
                return  { 'eersteLetter': doc.name.charAt(0)}
                },
     'initial': {'aantal':0},
     'reduce': function (cur, res){
         res.aantal++;
         }
     });
        
        
//--------------------------------------------------------------         
// 2) AGGREGAAT - AGG. PIPELINE
// -->  db.restos.aggregate([{}]) Array [] met objecten {} in !

// Give all resto's in the Bronx: 
   db.restos.aggregate([{$match: {"borough": "Bronx"}}]);

// All resto's in the Bronx and zelfde cuisine in groep en hoeveel aantal cuisine ?
     db.restos.aggregate([{$match: {"borough": "Bronx"}}, 
                        {$group: { "_id": "$cuisine", "aantal": {$sum:1} }}
                        ]); // field path access $ + veldnaam
                        
// Sorteer deze lijst dan nog eens op grootste aantal eerst.    
     db.restos.aggregate([{$match: {"borough": "Bronx"}}, 
                        {$group: { "_id": "$cuisine", "aantal": {$sum:1} }},
                        {$sort: {"aantal": -1}}
                        ]); //sorteer van grootste naar kleinste -1
                        
// Nu niet op het scherm tonen maar een NEW COLLECTION MAKEN !!!
     db.restos.aggregate([{$match: {"borough": "Bronx"}}, 
                        {$group: { "_id": "$cuisine", "aantal": {$sum:1} }},
                        {$sort: {"aantal": -1}}, {$out: "bronx_collection" }
                        ]); //OUTPUT WEGSCHRIJVEN IN NEW VARIABLE  
                        
// -- nu aparte collection .find() 
  db.bronx_collection.find();                     
                        
// IPV find().count() --> $match & $group + $sum
   db.restos.aggregate([{$match: {"borough": "Bronx"}},
                        {$group: {"_id": "", "aantal": {$sum:1} }} // 1 groep met alle documenten in   
                        ]);   // tel alle document met lege string ""      
           
// groepjes maken waarvan de eerste letter hetzelfde is:  
db.restos.aggregate([{$group: {"_id": {$substr: ["$name", 0, 1]}, // 0 positie substring/ 1 length
                                 "aantal": {$sum: 1} } }, 
                                 {$sort: {"aantal": -1}}
                        ]);   
// AVERAGE BEREKENEN:                                
db.restos.aggregate([{$unwind: "$grades"},
                     {$group: {"_id": {$substr: ["$name", 0, 1]}, // 0 positie substring/ 1 length
                               "gemiddelde": {$avg: "$grades.score"} } }, 
                        ]);     
                                
// 1 array met multi grade objecten ---> 1 object van maken  = avg ?                              
   db.restos.aggregate([{$match: {"restaurant_id": "30112340"}},
                        {$unwind: "$grades"}, // nu alles 1 obect --> group voor berekening*
                        {$group: {"_id": "", "avg_score": {$avg: "$grades.score"}}}
                        ]);  /// GROUP --> CALCULATION $gt $lt $sum $avg             
              
// alle restaurants hun grades score avg                         
 db.restos.aggregate([  {$unwind: "$grades"}, 
                        {$group: {"_id": "", "avg_score": {$avg: "$grades.score"}}}
                        ]); 
// overzicht PER buurt weten wat is de namen van alle restos in die buurt   
// maak array --> .push()                     
 db.restos.aggregate([ {$group: {"_id": "$borough", "all_restonames": {$push: "$name"}}}
                        ]);              
                        
// GEMIDDELDE SCORE VAN RESO met ZELFDE NAAM
// AVERAGE BEREKENEN + SORTEREN + 1ste score:                                
db.restos.aggregate([{$unwind: "$grades"},
                     {$group: {"_id": "$name",  // op naam , op gemiddelde
                               "gemiddelde": {$avg: "$grades.score"}}}, 
                                 {$sort: {"gemiddelde": -1}},
                                   {$group: {"_id": "", "best_score": {$first: "$gemiddelde"}}}
                        ]);     
                                
// AVERAGE BEREKENEN score + give HOOGSTE score:  MAX                                
db.restos.aggregate([{$unwind: "$grades"},
                     {$group: {"_id": "$name","gemiddelde": {$avg: "$grades.score"}}},
                     {$group: {"_id": "", "best_score": {$max: "$gemiddelde"}}}
                        ]); 
      
//--------------------------------------------------------------                       
// 3) mapReduce
// Twee phases: MAP PHASE - REDUCE PAHSE
// je moet een key value maken ! map gives key -> reduce takes key 

db.restos.mapReduce(
                     function (){emit (this.cuisine, 1);}, // 1st 
                     function (key, values){return Array.sum(values);}, // 2de 
                     {out: "resto_per_cuisine", // opties opgeven = waar komt het result
                         query: {"name": /^A/}} // zoek cuisine naam start A
                     );
                     
db.resto_per_cuisine.find().count();                   
                     
                  
__________________________________________________________________________________________________
use test;

db.restos.find().count(); // 25.356
db.publis.find().count(); // 100.000
_________________________________________________
// OEFENINGEN mongoDB 2
// schrijf commando’s voor volgende zoekopdrachten:

// 1. Lijst met alle boeken (type “Book”) ;
db.publis.find( {'type': 'Book'}).count();

// 2. Lijst met alle publicaties sinds 2011 (year groter of gelijk aan 2011);
db.publis.find( {'year': {$gte: 2011}}).count();

// 3. Lijst met alle boeken gepubliceerd sinds 2014 ;
db.publis.find( {'type': 'Book', 'year': {$gte: 2014}}).count();

// 4. Lijst met alle publicaties van de auteur “Toru Ishida” ;
db.publis.find({'authors': 'Toru Ishida'}).count();

// 5. Lijst met alle uitgevers  (“publisher”), zonder dubbels ;
db.publis.distinct('publisher').length;
// 6. Lijst met alle auteurs, zonder dubbels;
db.publis.distinct('authors').length;

// 7. Lijst met alle publicaties van de auteur “Toru Ishida” , 
// gesorteerd op boektitel en  startpagina;
db.publis.find({'authors': 'Toru Ishida'}, 
               {'booktitle':1, 'pages.start':1} ).count();
               
// 8. Titel (van de publicatie) en de pagina’s van alle publicaties
// van de auteur “Toru Ishida” , gesorteerd op boektitel en  startpagina;               
db.publis.find({ 'type': 'Article','authors': 'Toru Ishida'}, 
               {'booktitle':1, 'pages.start':1} ).count();
// ----- OR
db.publis.aggregate([{$match:{authors : "Toru Ishida"}}, 
                    {$sort : { booktitle : 1, "pages.start" : 1 }}, 
                    {$project : {title : 1, pages : 1}}]);            
               
               

// 9. Aantal publicaties van de auteur “Toru Ishida”;
db.publis.find({'authors': 'Toru Ishida'}).count();
// ----- OR
db.publis.aggregate([{$match:{authors : "Toru Ishida"}}, 
                     {$group:{_id:null, total : { $sum : 1}}}]);


// 10. Voor alle publicaties uitgegeven sinds 2011 : type en aantal per type;
// db.publis.find({'year': {$gte: 2011}});
db.publis.group({
                  "key": { "type": 1 },
                  "initial": { "aantal": 0 },
                  "reduce": function (current, result) {result.aantal++}
               });
               
db.publis.group({
                'key':{type:1},
                'reduce':function(cur, result){ result.aantal += 1;}, 
                'initial': {aantal : 0}, 
                'cond':{year:{$gte:2011}}});
// ----- OR
db.publis.aggregate([{$match:{year : {$gte : 2011}}},
                     {$group:{_id:"$type", total : { $sum : 1}}}]
                     );


// 11. Per auteur :  auteur en aantal publicaties, dalend gesorteerd op aantal publicaties;
// db.publis.find();
db.publis.aggregate([{$unwind: "$authors"},
                     {$group: {"_id": "$authors", "aantal_per_type": {$sum: 1} }},
                     {$sort: {"aantal_per_type":-1}}
                     ]).toArray().length; // niet length() is geen functie




























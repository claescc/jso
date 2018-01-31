// ROBO 3T NOSQL BASICS

use beta // use database

db.cursisten.insertOne({voornaam: 'Belkin',  // insert tabel-collectie
    naam: 'Fahri', 
    adres: {straat: 'Bist 13',
        gemeente: 'Gent Dampoort'}});
        
db.cursisten.insertOne({name: 'Cindy',  // insert tabel-collectie
    naam: 'Huon', 
    phone: '123456789',
    zip: 3373});
    
db.cursisten.insertMany([ {'naam': 'Rose', 'voornaam': 'Becka'},
                        {'naam': 'Claes', 'voornaam': 'Chloé'},
                        {'naam': 'Lex', 'firstname': 'Kristof'}]);
        
db.cursisten.find(); // database.tabel.find

db.cursisten.drop();
                    
db.dropDatabase();


_____________________________________________________
use test;

db.restos.find();

// speciefiek zoeken in tabel op keuken
db.restos.find( {'cuisine': 'Italian'} );

// voorwaarde voor veld street dat in Adres zit
// objects in objects = object1.obj2
db.restos.find( {'address.street': '2 Avenue'} );

// array met grades = array met objecten in 
// grades[].score  -->  grades.score  [geen haken] !db.restos.find({'grades.score': 20});

// VOORWAARDEN  !=  <  > 
// voorwaarden een object dat voorwaarde beschrijft
db.restos.find({'grades.score': {$gt: 20});
// $gt = GreaterThan      > 20    =    {$gt: 20}
// $lt = LessThan         < 20    =    {$lt: 20} 
// $ne = NotEqual        != 20    =    {$ne: 20} 

// REGULIER EXPRESIE  - hoofdlettergevoelig
db.restos.find({'name': /^B/}); // ignore caps '/^B/i'

// Alle cuisines italiaans + chinees + french
// SQL -> WHERE cuisine IN ( 'IT', 'CH', 'FR')
// IN = $in
db.restos.find( {'cuisine': {$in: 'Italian', 'Chinese', 'French'}} );

// OR = $or [array {objects}]
db.restos.find( {$or: [  {'cuisine': 'Italian'},  // object per object
                        {'cuisine': 'Chinese'},
                       {'cuisine': 'French'}  
                    ]});

// italian OR met zipcode 
db.restos.find( {$or: [  {'cuisine': 'Italian'},
                        {'address.zipcode': '10075'}
                        ]});
// AND 
db.restos.find( {$and: [  {'cuisine': 'Italian'},
                        {'address.zipcode': '10075'}
                        ]});
                        
// italian AND met zipcode  !! SHORTHAND !! 
db.restos.find( {'cuisine': 'Italian', 'address.zipcode': '10075'});

// SORTEREN 
// sorteren op find + sort ( {name})
db.restos.find().sort( {'name':1 } ); // 1 = ASCE // -1 = DESC 
                        
// cuissine Pizza sort op borough/buurt         
db.restos.find({'cuisine': 'Pizza'}).sort( {'borough':1, 'name':1 } );          
                        
// opsomming van alles wat je WEL wil zien  :1
// opsomming van alles wat je NIET wil zien :0
// db.restos.find( {}, {} )
db.restos.find( {}, {'name':1, 'address':1, '_id':0 ); // wel zien 
db.restos.find( {}, {'name':0, 'address':0} ); // niet zien                   

// VOORWAARDE + :1 :0                      
db.restos.find( {'cuisine':'Chinese'}, {'name':0, 'address':0} );                    

// LIMIT max aantal document terugkrijgen                       
db.restos.find( {'cuisine':'Chinese'}).limit(5);

// OEFENINGEN TESTEN
// oef: vind alfabetisch het 1ste resto
db.restos.find().sort( {'name': 1}).limit(1);
// findOne = limit(1)
db.restos.findOne( {'cuisine': 'Italian'} ); 
// skip 
db.restos.find().skip(20000);

// resto met naam Juni
// UPDATE --> UPDATEone UPDATEmany
db.restos.find( {'name':'Juni'});
//update {$set {} }
db.restos.updateOne( {'name':'Juni'} ,  // VOORWAARDEN
                {$set: {'cuisine': 'Belgian'}}); // UPDATE
                
db.restos.updateMany( {'cuisine':'American '} ,  // VOORWAARDEN
                {$set: {'cuisine': 'Murica'}}); // UPDATE
// GEEN AMERICAN RESTOS GEVONDEN               
db.restos.find({'cuisine':'American '}); 
db.restos.find({'cuisine': 'Murica'}); 
// CHANGE AGAIN
db.restos.updateMany( {'cuisine':'Murica'} ,  // VOORWAARDEN
                {$set: {'cuisine': 'American'}}); // UPDATE
                
db.restos.find( {'cuisine':'American'}); 

// zoek in address.building: 1470
db.restos.find( {'address.building': '1470'});

// DELETE -> deleteONE, deleteMANY                
db.restos.deleteOne( {'address.building': '1470'}); // maar 1
db.restos.deleteMany( {'address.building': '1470'}); // alles docu weg 
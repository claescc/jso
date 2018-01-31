use test;

// Write a MongoDB query to display all the documents in the collection restaurants. 
db.restos.find();

// 2. Write a MongoDB query to display the fields restaurant_id, name, 
// borough and cuisine for all the documents in the collection restaurant. 
db.restos.find( {}, {'name':1, 'restaurant_id':1, 'borough':1, 'cuisine':1});

// 3. Write a MongoDB query to display the fields 
// restaurant_id, name, borough and cuisine, but 
// exclude the field _id for all the documents in the collection restaurant. 
db.restos.find( {}, {'name':1, 'restaurant_id':1, 'borough':1, 'cuisine':1, '_id':0});

// 4. Write a MongoDB query to display the fields 
// restaurant_id, name, borough and zipcode, but 
// exclude the field _id for all the documents in the collection restaurant. 
db.restos.find( {}, {'restaurant_id':1, 'name':1, 'borough':1, 'zipcode':1, '_id':0});

// 5. Write a MongoDB query to display all the restaurants which are in the borough Bronx. 
db.restos.find( {'borough':'Bronx'});

// 6. Write a MongoDB query to display the first 5 restaurants which are in the borough Bronx.
db.restos.find( {'borough':'Bronx'}).limit(5);

// 7.Write a MongoDB query to display the next 5 restaurants 
// after skipping first 5 which are in the borough Bronx. 
db.restos.find( {'borough':'Bronx'}).skip(5).limit(5);

// 8. Write a MongoDB query to find the restaurants that achieved a score more than 90. 
// db.restos.find({'grades.score': {$gt: 20});
db.restos.find( {'grades.score': {$gt: 90}});

//9. Write a MongoDB query to find the restaurants that achieved a score, 
// more than 80 but less than 100. 
db.restos.find( {'grades.score': {$gt: 80, $lt: 100}}).count();

// 10. Write a MongoDB query to find the restaurants which 
//locates in latitude value less than -95.754168.  (coord < -95.754168)
// OR = $or [array {objects}]
db.restos.find({ 'address.coord.0': {$lt: -95.754168}}).count();
                 
// 11. Write a MongoDB query to find the restaurants 
// that don’t prepare any cuisine of 'American'. 
db.restos.find( {'cuisine': {$ne:'American'}}).count();

// 12. Write a MongoDB query to find the restaurants 
// that don’t prepare any cuisine of 'American' and 
// achieved a score more than 70 and have a lattitude less than -65.754168. 
db.restos.find( {'cuisine': {$ne:'American'}, 
                'grades.score': {$gt: 70},
                 'address.coord.0': {$lt: -65.754168} 
                 });


// 13. Write a MongoDB query to find the restaurants which 
// don’t prepare any cuisine of 'American ' and 
// achieved a grade point 'A' and do not belong to the borough Brooklyn. 
// The documents must be displayed according to the cuisine in descending order. 
 db.restos.find( {'cuisine': {$ne:'American'}, 
                'grades.grade': 'A',
                 'borough': {$ne: 'Brooklyn'} 
                 }).sort({'cuisine':-1});               
                 
// 14. Write a MongoDB query to find the restaurant 
// id, name, borough and cuisine for those restaurants which 
//contain 'Wil' as first three letters for its name. 
 db.restos.find( {'name': /^Wil*/}, 
                  {'_id':1}, {'name':1}, {'borough':1}, {'cuisine':1}).count();
               
// 15. Write a MongoDB query to find the restaurant 
// id, name, borough and cuisine for those restaurants which
// contain 'ces' as last three letters for its name. 
 db.restos.find( {'name': /ces$/ }, 
                  {'_id':1}, {'name':1}, {'borough':1}, {'cuisine':1}).count();

// 16. Write a MongoDB query to find the restaurant 
// id, name, borough and cuisine for those restaurants which contain 
// 'Reg' as three letters somewhere in its name. 
  db.restos.find( {'name': /Reg/i }, 
                  {'_id':1}, {'name':1}, {'borough':1}, {'cuisine':1}).count();                 
                  
// 17. Write a MongoDB query to find the restaurants which belong 
// to the borough Bronx and prepare either American or Chinese dishes. 
  db.restos.find( {'borough': 'Bronx', 'cuisine': {$in: ['American', 'Chinese']}}).count();                 
                      
// 18. Write a MongoDB query to find the restaurant 
// id, name, borough and cuisine for those restaurants which belong to the 
// borough Staten Island or Queens or Bronx or Brooklyn. 
   db.restos.find( {'borough': {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] }}, 
                  {'_id':1}, {'name':1}, {'borough':1}, {'cuisine':1}).count(); 
  
// 19. Write a MongoDB query to find the restaurant 
// id, name, borough and cuisine for those restaurants which are 
// not belonging to the borough Staten Island or Queens or Bronx or Brooklyn. 
    db.restos.find( {'borough': {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] }}, 
                  {'_id':1}, {'name':1}, {'borough':1}, {'cuisine':1}).count();                
                                   
// 20. Write a MongoDB query to find the restaurant 
// id, name, borough and cuisine for those restaurants which 
// achieved a score which is not more than 10. 
       db.restos.find( {'grades.score': {$lt: 11}}, 
                  {'_id':1,'name':1, 'borough':1,'cuisine':1}).count();                 
                                   
// 21. Write a MongoDB query to find the restaurant 
// id, name, borough and cuisine for those restaurants which prepare 
// dishes except 'American' and 'Chinese' or restaurants whose name begins with 'Wil'. 
   db.restos.find( {$or:[ {'cuisine': {$nin: ['American', 'Chinese']}}, 
                              {'name': /^Wil/}]}, 
                              {'_id':1, 'name':1, 'borough':1, 'cuisine':1}).count(); 
                  
// 22. Write a MongoDB query to find the restaurant id, 
// name and grades for those restaurants which have a 
// grade of "A" with score 11 and ISODate "2014-08-11T00:00:00Z".
   db.restos.find( { 'grades': {$elemMatch : {'grade': 'A', 
                                              'score': 11, 
                                              'date': ISODate('2014-08-11T00:00:00Z')}}},
                    {'_id':1, 'name':1, 'grades':1}).count(); 
                                   
                  
// 23. Write a MongoDB query to find the restaurant 
// id, name and grades for those restaurants where the 
// 2nd element of the grades array contains a grade of "A" 
// and score 9 on an ISODate "2014-08-11T00:00:00Z". 
   db.restos.find( { 'grades.1.grade': 'A', 
                     'grades.1.score': 9, 
                     'grades.1.date': ISODate('2014-08-11T00:00:00Z')},
                    {'_id':1, 'name':1, 'grades':1}).count();                    
                                    
// 24. Write a MongoDB query to find the restaurant 
// id, name, address and geographical location for those restaurants where the 
// 2nd element of coord array contains a value which is more than 42 and upto 52.
   db.restos.find( {'address.coord.1': {$gt: 42, $lte: 52}},
                    {'_id':1, 'name':1, 'address':1,}).count();               
                    
// 25. Write a MongoDB query to arrange the name of the restaurants in ascending order. 
    db.restos.find().sort( {'name':1 } );            
                    
// 26. Write a MongoDB query to arrange the name of the restaurants in descending order.
    db.restos.find().sort( {'name':-1 } );  

// 27. Write a MongoDB query to arrange the restaurants along cuisine in ascending order.  
// Restaurants with the same cuisine should be ordered on descending borough.
    db.restos.find().sort( {'name':1, 'cuisine':-1 } );            
                    
// 28. Write a MongoDB query to find the restaurants where the 
// address contains the field street. ({ $exists : true })
     db.restos.find( {'address':{ $exists : true }} ).count(); 
    
// 29. Write a MongoDB query which will select all documents in the 
// restaurants collection where the coord field value is a Double. ({$type:1})
     db.restos.find({'address.coord': {$type:1}  }).count(); 
     
// 30. Write a MongoDB query which will select the restaurant 
// id, name and grades for those restaurants which have a score that 
// returns 0 as a remainder after dividing the score by 7. 
// { field: { $mod: [ divisor, remainder ] } }
     db.restos.find( {'grades.score': { $mod: [ 7, 0 ] } }, 
                    {'_id':1, 'name':1, 'grades':1}).count(); 
     
     
// 31. Write a MongoDB query to find the restaurant 
// name, borough, longitude and attitude and cuisine for those restaurants 
// which contain 'mon' (case insensitive) somewhere in their name. 
     db.restos.find( {'name': /mon/i }, 
                    {'name':1, 'borough':1, 'address.coord':1, 'cuisine':1}).count();                  
                    
// 32. Write a MongoDB query to find the restaurant 
// name, borough, longitude and latitude and cuisine for those restaurants 
// which contain 'Mad' (case insensitive) as first three letters of their name.  
     db.restos.find( {'name': /^Mad/i }, 
                    {'name':1, 'borough':1, 'address.coord':1, 'cuisine':1}).count();

















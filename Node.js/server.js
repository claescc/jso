var http = require('http'); // MUST TO START !!
var fs = require('fs'); // voor files te lezen op eigen machine
var url = require('url');  // to get path !! 


// Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name 
   // GET PATH (request.url)= heel de url http://172.0.0.1/ect...
   var pathname = url.parse(request.url).pathname; // PATH = /ect..
   
   // Print the name of the file for which request is made. (CHECK)
   console.log("Request for " + pathname + " received.");
   
   // Read the requested file content from file system 
   //fs.readfile om files te lezen op eigen machine 
   fs.readFile(pathname.substr(1), function (err, data) { // substring -> slash moet weg /
    // als gelezen is doe functie (r,d)
      if (err) { 
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/plain'});
      }else{	
         // Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // WRITE = STUKJES RESPOND KLAARZETTEN
         // Write the content of the file to response body
         response.write(data.toString());		
      }
      // END = ALLE STUKJES STUREN NAAR CLIENT 
      // Send the response body 
      response.end();
   });   
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
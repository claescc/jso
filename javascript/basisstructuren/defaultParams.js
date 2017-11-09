// bron: https://egghead.io/lessons/ecmascript-6-default-values-for-function-parameters?course=learn-es6-ecmascript-2015

function greet(message, name){		//param aanduiden in functie aantal!!
	console.log(message +", " + name);
}
greet();  // undefined, undefined  = oproep zonder parameters ingeven geeft undef/undef

// default params worden pas ondersteund vanaf Node 6
// (zie http://node.green om te weten welke versie van NodeJS welke zaken van es6 ondersteunt)
function greet2(message, name="Baptist"){		// waarde // geen waarde voor name = "Bap"
	console.log(message +", " + name);


	// links rechts--- volgorde belangrijk laatste enkel een vervangwaarde toekennen

	// geen waarde, geen waarde, vervang waarde 		OK
	// geen waarde, vervang waarde, vervang waarde 		OK
	// vervang waarde, geen waarde, vervang waarde 		NEE !

}
//DEFUALT PARAMETER

greet2();  // undefined, Baptist					=zonder argumenten		
greet2("Hello");  // Hello, Baptist					=1 arg, geen arg	
greet2("Hello", "Roeland");  // Hello, Roeland		=wel argumenten	
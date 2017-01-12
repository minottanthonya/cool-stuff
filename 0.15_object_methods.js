//Object literals with methods
//functions insiade of an object.

var player = {
	//propersties
	name : "",
	life : 100,
	damage : 0,
	//at the end of the properties and there are NO methods,
	// do not have a ","
	//if there are methods after YOU MUST HAVE A ","
	//Methods
	challenge : function(){
		console.log(this.name +" says: FIGHT ME IRL");
	}, //need "," between methods for them to work
	battlecry : function(){
		console.log(this.name +" screams: ATREYU!!");
	},
	shrillScream : function(){
		console.log(this.name +" says: I CAME IN LIKE A WRECKING BALL");	
	}
}

var melkor = Object.create(player);
melkor.name = "Melkor: Champion of the Realm and Defender of Our Time";
var miley = Object.create(player);
miley.name = "Basket-case";

//console.log(melkor.name);
//console.log(miley.name);

//Access methods
melkor.challenge();
melkor.battlecry();
miley.shrillScream();
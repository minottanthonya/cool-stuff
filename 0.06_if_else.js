//if/else

var elevatorUp = true;
var elevatorDown = true;
var elevatorOpen = true;
var elevatorBroken = true;
var elevatorStuckAndWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true) {
	console.log("Going up");
}else{
	console.log("Going down");
}

// Write one for elevator broken:

if (elevatorBroken) {
	console.log("Its BROKE");
}else{
	console.log("Its NOT BROKE");
}

// Write one for elevator stuck: 

if (!elevatorStuckAndWeAreOnIt) {
	console.log("WELL SHIT");
}else{
	console.log("Where too boys!?");
}

//Challenge
//WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND LOGICAL OPERATORS.
//Come up with a simple example

var awake= true
var notAwake = true
var getUp = true
var stayInBed = true

if (!getUp) {
	console.log("RISE AND SHINE!");
}else{
	console.log("5 More Minutes");
}
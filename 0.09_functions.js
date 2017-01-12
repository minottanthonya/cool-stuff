//Simple example of a function
//**KEEP FUNCTIONS AT THE TOP OF YOUR CODE**
function heyMatt(name) {
	console.log("Hey " + name);
}

heyMatt("Matt");

// adding numbers to functions

function printNumber() {
	console.log(1);
}
printNumber();

// equations in functions
//you can do any basic maths in a function

function sumElements(fire, water) {
	console.log(fire + water);
}
sumElements("FIYAH ", "WATAH");

function subNum(num1, num2) {
	console.log(num1 - num2);
}
subNum(4,1);

function sumNum(num1, num2) {
	console.log(num1 + num2);
}
sumNum(14,22);

function multiNum(num1, num2) {
	console.log(num1 * num2);
}
multiNum(14,6);

function divNum(num1, num2) {
	console.log(num1 / num2);
}
divNum(12,2);

//Return Statements
function greeting(name) {
	return "Greetings " +name;
}
var addGreeting = greeting("Dave") + ", I can't let you do that.";
console.log(addGreeting);

//Another Return Function

function checkOdd(num) {
	if (num % 2 === 0) {
		return "Yo dude, " + num + " is even "
	} else {
		return "Woh dude, " + num + " is odd"
	}
}
console.log(checkOdd(13))

function checkDiv3(num2) {
	if (num2 % 3 === 0) {
		return "Yo dude, " + num2 + " is divisible by 3 "
	} else {
		return "No dude, " + num2 + " is not divisible by 3"
	}
}
console.log(checkDiv3(45))

//Challenge, creat a personalized greting for 2 names usaing a function and a if statement.

function personalGreeting(name) {
	if (name == "Dave") {
		return "Sorry Dave, You know I can't let you do that"
	} else if (name == "Steven") {
		return "EY STEVEN"
	} else {
		return " DON'T TALK TO ME MORTAL"
	}
} 
var addGreeting2 = personalGreeting("Dave");

//Challenge
//Bronze
function greeting2(name) {
	return "SUH DUDE! " +name;
}
var addGreeting = greeting2("Broheim") + ", what you been up to?";
console.log(addGreeting);
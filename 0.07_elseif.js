
var age = 26;

if (age >= 21 && age < 25){
	console.log("You can vote for alchohol");
} else if (age >= 18 && age < 21) {
	console.log("You can vote");
} else if (age >= 25) {
	console.log("You can rent a car");
} else {
	console.log("You can not vote for alchohol");
}

//Challenege
//My attempt
//expand upon our a simple login.
// create 2 variables 1 for your users username, 2 for the boolean condition then another to check if the user is an admin
// If login is true then print "You're Logged In!"
// If login is true and the user is a admin, print "This is the dashboard for your employee records you have master control"
// If Login is true and the user is a manager, print "This is the dashboard for your employee records, you can only read but not create users"
// If login is true and the user is a employee, print "clock in and clockout please" 
//Else if login is false then print "Please Sign In"

var login = true;
var admin = true;
var firstUser = "employee"
var secondUser = "manager"
var firstUser = true
var secondUser = true


if (login & firstUser){
	console.log("You're Logged In");
} else if (login && admin) {
	console.log("This is the dashboard for your employee records you have master control");
} else if (login && firstUser) {
	console.log("This is the dashboard for your employee records, you can only read but not create users ");
} else if (login && secondUser) {
	console.log("clock in and clock out please");
} else {
	console.log("Please Sign In");
}

//Challenge
//The Real Answer

var isLoggedIn = true;
var isAdmin = true;
var isManager = false;
var isEmployee =true;

if (isLoggedIn){
	console.log("You're Logged In");
	if(isAdmin) {
		console.log("This is the dashboard for your employee records you have master control")
	}
		} else if (isManager) {
			console.log("This is the dashboard for your employee records, you can only read but not create users ");
		} else if (isEmployee) {
			console.log("clock in and clock out please");
} else {
	console.log("Please Sign In");
}

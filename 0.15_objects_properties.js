//empty Object
var emptyObject = {};
//object with properties
var facebookFriend = {
	name 	: "",
	age 	: 0,
	vocation: "",
	inRelationship : true
};

facebookFriend.name = "Jonas";
console.log(facebookFriend.name);

facebookFriend.age = 33;
console.log(facebookFriend.age); 
console.log(facebookFriend.name + " just turned " + 
facebookFriend.age + ".");
facebookFriend.inRelationship = true;
if(facebookFriend.inRelationship){
console.log(facebookFriend.name + " in a realtionship");
}

//challenge make your own thing

var personIKnow =  {
	name : "Paul",
	occupation: " teacher/coder",
	location: " right here",
	actualPerson : true
};

personIKnow.actualPerson = true;
if(personIKnow.actualPerson){
console.log(personIKnow.name + " is a real person");
}
console.log(personIKnow.name + " is a" + personIKnow.occupation + 
" who is existing" + personIKnow.location);

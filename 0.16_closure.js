//Closure

//1. A closure gives you access to the variable set in a fucntion
// after a funciton has completed and returned

//2. Help keep variables from getting pushed in the global scope.

//3. Degree of protection. Variable can't be overwritten unless we deliberately do so.

var james = {};

var setAge = function(myAge) {
	var birthday = "7/13/1980";

	return {
		getAge : function() {
			return myAge;
		}, 
		getBirthday : function() {
			return birthday;		}
	}
}
james.age = setAge(36);
console.log(james.age);
console.log(james.age.getAge());
console.log(james.age.getBirthday());
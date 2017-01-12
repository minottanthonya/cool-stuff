var footballTeam = "Packers";
//for (i = 0; i < footballteam.length; i++)
for (var letter in footballTeam) {
	console.log(footballTeam[letter])
}

//create a for in loop for your favorite food
//then can you count each vowel that occurs in that food?

var vowelCount = 0;
var favFood = "Pizza";
console.log(favFood.length);
for (letter in favFood) {
    if (favFood[letter].toLowerCase() === "a" || favFood[letter].toLowerCase() === "e" || favFood[letter].toLowerCase() === "i" || favFood[letter].toLowerCase() === "o" || favFood[letter].toLowerCase() === "u") {
        vowelCount++
    }
}
console.log("There are " + vowelCount + " vowels in " + favFood);
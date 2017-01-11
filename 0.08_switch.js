// switch Cases

var superBowlWins = 8
var result

switch (superBowlWins) {
	case 3:
		result = "Cool, that will be good";
		break;
	case 7:
		result = "I like it!";
		break;
	case 10:
		result = "Party time!";
		break;
	case 17:
		result = "Sweet we are awesome";
		break;
	default:
		result = "Not good enough"
}
console.log("Switch Result: " + result)
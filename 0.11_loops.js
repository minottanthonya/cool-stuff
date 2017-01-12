//indexing 0123456
//To acces the index we use [] and the index number inside of them.
//DRY = "Don't Repeat Yourself"
//WET = "Write Everything"

var name= "Tony M";
console.log(name.length);
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])


var lcv =0;
while(lcv <10) {
	console.log(name.toUpperCase());
	lcv+= 1;
}

var count = 0

while(count < 10) {
	console.log(count);
	count ++ //++ is equal to count +=1
}

console.log("--------------");
	var num = 10; //lcv but we named it num
	while (num > 0) {
		console.log(num);
		num -= 1; //num--
	}
console.log("--------------");

var evenCount = 1;
while (evenCount < 20) {
	if (evenCount % 2 == 0) {
			console.log(evenCount + " is even");
	} else {
		console.log(evenCount + " is odd");
	}
	evenCount++;
}

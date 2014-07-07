//https://github.com/nothingrandom/project_euler.js

var square = 0;
var sum = 0;
var answer = 0;
var number2 = 0;

for (var i = 0; i <= 100; i++) {
	var number = Math.pow(i, 2);
	square += number;
}

for (var i = 0; i <= 100; i++) {
	number2 += i;
	sum = Math.pow(number2, 2);
}

var answer = sum - square;

console.log(answer);
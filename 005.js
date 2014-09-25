//https://github.com/nothingrandom/project_euler.js

var timeStart = performance.now();

function great(a, b) {
	var x = a;
	var y = b;
	var result;

	while (y !== 0) {
		result = x % y;
		x = y;
		y = result;
	}

	return x;

}

function low(a, b) {
	return (a * b) / great(a, b);
}

var max = 20;
var min = 11;
var number = min;

for (var i = min; i <= max; i++) {
	number = low(number, i);
}

console.log(number);

var timeEnd = performance.now();
var totalTime = (timeEnd - timeStart);
console.log(totalTime + " ms");
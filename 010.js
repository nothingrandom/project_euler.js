//https://github.com/nothingrandom/project_euler.js

var timeStart = performance.now();

var answer = 2;
var mil = 2000000;

for (var i = 2; i < mil; i++) {
	if (i % 2 != 1) {
		continue;
	}
	var a = 3;
	var b = Math.sqrt(i);
	while ((i % a !== 0) && a < b) {
		a += 2;
	}
	if (((i % a === 0 && i != a) * 1) === 0) {
		answer += i;
	}
}

console.log(answer);

var timeEnd = performance.now();
var totalTime = (timeEnd - timeStart);
console.log(totalTime + " ms");
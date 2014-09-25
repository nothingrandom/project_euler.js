//https://github.com/nothingrandom/project_euler.js

var timeStart = performance.now();

function highprime(x) {
	var max = Math.round(Math.sqrt(x));

	for (var i = max; i >= 2; i--) {
		if (x % i === 0 && highprime(i) === 1) {
			return i;
		}
	}
	return 1;
}

console.log(highprime(600851475143));

var timeEnd = performance.now();
var totalTime = (timeEnd - timeStart);
console.log(totalTime + " ms");
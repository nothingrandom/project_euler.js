//https://github.com/nothingrandom/project_euler.js

var timeStart = performance.now();

var number;
var pal = 0;
var str1 = '';
var str2 = '';

function reverse(n) {
  return n.split('').reverse().join('');
}

for (i = 1; i <= 999; i++) {
	for (j = 1; j <= 999; j++) {
		number = i * j;
		str1 = number.toString();
		str2 = reverse(str1);
		if (str1 === str2) {
			if (number > pal) {
				pal = number;
			}
		}
	}
}

console.log(pal);

var timeEnd = performance.now();
var totalTime = (timeEnd - timeStart);
console.log(totalTime + " ms");

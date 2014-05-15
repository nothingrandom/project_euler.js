//https://github.com/nothingrandom/project_euler.js

var answer = 0;

loop:
for (var i = 2; ; i++) {
	for (var j = 1; j < i; j++) {
		var a = (i * i) - (j * j);
		var b = 2 * i * j;
		var c = (i * i) + (j * j);
		if (a + b + c == 1000) {
			answer = a * b * c;
			break loop;
		}
	}
}

console.log(answer);
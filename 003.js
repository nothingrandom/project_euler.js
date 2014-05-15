//https://github.com/nothingrandom/project_euler.js

function highprime(x) {
	var max = Math.round(Math.sqrt(x));

	for(var i = max; i >= 2; i--) {
		if(x % i === 0 && highprime(i) === 1) {
			return i;
		}
	}
	return 1;
}

console.log(highprime(600851475143));
//https://github.com/nothingrandom/project_euler.js

function isPrime(number) {
	var prime = true;
	var max = Math.round(Math.sqrt(number));
	for (i = max; i >= 2; i--) {
		if (number % i === 0) {
			prime = false;
		}
	}
	return prime;
}

function primeCount(prime) {
	var count = 1;
	var answer = 0;
	var i = 2;
	while (count <= prime) {
		if (isPrime(i) === true) {
			answer = i;
			count++;
			i++;
		}
		else {
			i++;
		}
	}
	console.log(answer);
}

primeCount(10001);
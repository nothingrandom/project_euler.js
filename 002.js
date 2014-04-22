function fib(total, x) {

	if(x === 0) {
		return 1;
	}

	if(x === 1) {
		return 2;
	}

	return total[x - 1] + total[x - 2];
}

var answer = 0;
var total = [];

for (var i = 0; i < 4000000; i++) {
	total[i] = fib(total,i);

	if(total[i] > 4000000) {
		break;
	}

	if(total[i] % 2 === 0) {
		answer += total[i];
	}

}

console.log(answer);
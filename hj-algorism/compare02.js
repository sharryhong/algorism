var a0 = 5;
var a1 = 6;
var a2 = 7;
var b0 = 3;
var b1 = 6;
var b2 = 10;

var check = function(a, b, result) {
	if(a > b) {
		result.a++;
	} else if(a < b) {
		result.b++;
	}
}


function main() {

	result = {
		'a': 0,
		'b': 0
	};

	check(a0, b0, result);
	check(a1, b1, result);
	check(a2, b2, result);

	console.log(`${result.a} ${result.b}`);

}

main();
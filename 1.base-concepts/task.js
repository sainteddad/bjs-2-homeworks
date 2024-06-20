"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d < 0) {
		return arr;
	} else if (d === 0) {
		arr = [-b / (2 * a)];
	} else if (d > 0) {
		arr = [(-b + Math.sqrt(b) / (2 * a))];
	} else if (d > 0) {
		arr = [(-b - Math.sqrt(b) / (2 * a))];
	}
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = percent / 100 / 12;
	let s = amount - contribution;
	let monthlyPayment = s * (p + (p / (((1 + p))) ** countMonths - 1));
	let totalAmount = monthlyPayment * countMonths;
	return +totalAmount.toFixed(2);
}

100, 0, 50000, 12
10, 1000, 50000,12
10, 0, 20000, 24
10, 1000, 20000, 24
10, 20000, 20000, 24
10, 0, 10000, 36
15, 0, 10000, 36

"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	length = Math.sqrt(d);
	if (d < 0) return false; 
	if (d > 0) return true;
	if (d === 0) {
		arr = [a, b, c];
	}
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthPercent = (percent / 100) / 12;
	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
	let totalAmount = percentages((monthlyPayment * countMonths).toFixed(2));
	return +totalAmount;
}



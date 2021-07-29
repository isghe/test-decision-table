import assert from 'node:assert';

const testIfThenElse = (a, b) => {
	assert(a >= 1 && a <= 4);
	assert(b >= 1 && b <= 4);
	let returnValue;
	if (a === 1) {
		if (b === 1) {
			returnValue = 10;
		} else if (b === 2) {
			returnValue = 20;
		} else if (b === 3) {
			returnValue = 30;
		} else if (b === 4) {
			returnValue = 40;
		}
	} else if (a === 2) {
		if (b === 1) {
			returnValue = 50;
		} else if (b === 2) {
			returnValue = 60;
		} else if (b === 3) {
			returnValue = 70;
		} else if (b === 4) {
			returnValue = 80;
		}
	} else if (a === 3) {
		if (b === 1) {
			returnValue = 90;
		} else if (b === 2) {
			returnValue = 100;
		} else if (b === 3) {
			returnValue = 110;
		} else if (b === 4) {
			returnValue = 120;
		}
	} else if (a === 4) {
		if (b === 1) {
			returnValue = 130;
		} else if (b === 2) {
			returnValue = 140;
		} else if (b === 3) {
			returnValue = 150;
		} else if (b === 4) {
			returnValue = 160;
		}
	}

	return returnValue;
};

const testDecisionTable = (a, b) => {
	assert(a >= 1 && a <= 4);
	assert(b >= 1 && b <= 4);
	const decisionTable = [
		[10, 20, 30, 40],
		[50, 60, 70, 80],
		[90, 100, 110, 120],
		[130, 140, 150, 160],
	];
	return decisionTable[a - 1][b - 1];
};

const main = () => {
	for (let a = 1; a <= 4; ++a) {
		for (let b = 1; b <= 4; ++b) {
			const resultIfThenElse = testIfThenElse(a, b);
			const resultDecisionTable = testDecisionTable(a, b);
			console.log({resultIfThenElse, resultDecisionTable});
			assert(resultIfThenElse === resultDecisionTable);
		}
	}
};

main();

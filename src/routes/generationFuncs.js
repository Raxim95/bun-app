import katex from "katex";

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toKatex(text) {
	return katex.renderToString(text, {
		output: "mathml",
	});
}

export function generate1() {
	let A = getRndInteger(1, 10);
	let B = getRndInteger(-10, -1);

	let question = toKatex(`${A}+(${B})=${A}${B}=`);
	let answer = toKatex(A + B + "");

	return { question, answer };
}

export function generate2() {
	let A = getRndInteger(1, 10);
	let B = getRndInteger(-10, -1);

	let question = toKatex(`${A}-(${B})=${A}+${-1 * B}=`);
	let answer = toKatex(A - B + "");

	return { question, answer };
}

export function generate3() {
	let A = getRndInteger(-10, -1);
	let B = getRndInteger(1, 10);

	let question = toKatex(`${A}+${B}=`);
	let answer = toKatex(A + B + "");

	return { question, answer };
}

export function generate4() {
	let A = getRndInteger(-10, -1);
	let B = getRndInteger(1, 10);

	let question = toKatex(`${A}-${B}=`);
	let answer = toKatex(A - B + "");

	return { question, answer };
}

export function generate5() {
	let A = getRndInteger(-10, -1);
	let B = getRndInteger(-10, -1);

	let question = toKatex(`${A}+(${B})=${A}${B}=`);
	let answer = toKatex(A + B + "");

	return { question, answer };
}
export function generate6() {
	let A = getRndInteger(-10, -1);
	let B = getRndInteger(-10, -1);

	let question = toKatex(`${A}-(${B})=${A}+${-1 * B}=`);
	let answer = toKatex(A - B + "");

	return { question, answer };
}

const userInput = document.getElementById("");
const addBtn = document.getElementById("");
const subtractBtn = document.getElementById("");
const multiplyBtn = document.getElementById("");
const divideBtn = document.getElementById("");

const currentResultOutput = document.getElementById("");
const currentCalculateOutput = document.getElementById("");

function outputResult(result, text) {
	currentResultOutput.textContent = result;
	currentCalculateOutput.textContent = text;
}

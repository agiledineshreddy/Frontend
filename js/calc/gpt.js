function Display(value) {
	// Append the button value to the display
	document.getElementById("display").value += value;
}

function clearDisplay() {
	// Clear the display
	document.getElementById("display").value = "";
}

function calculate() {
	// Evaluate the expression in the display
	
	// Display the result
	document.getElementById("display").value = eval(display.value);
}
function del() {
	document.getElementById("display").value= display.value.slice(0,-1);

}


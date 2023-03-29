function Display(value) {
	// Append the button value to the display
	document.getElementById("display").value += value;
}
function calculate() {
	// Evaluate the expression in the display
	
	// Display the result
	document.getElementById("display").value = eval(display.value);
}
function dd() {
	document.getElementById("display").value= '';//display.value.slice(0,-1);

}
function del() {
	document.getElementById("display").value= display.value.slice(0,-1);

}

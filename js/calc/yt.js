function Clear(value){

	document.getElementById("display").value="";
}
function Display(value){
document.getElementById("display").value+=value;
}
function calculate(){
	document.getElementById("display").value=eval(display.value);
}
function delet(){
document.getElementById("display").value=display.value.slice(0,-1);
}

function clear(value){

	document.getElementById("clear").value="";
}
function Display(value){
document.getElementById("display").value+=value;
}
function calculate(){
	document.getElementById("display").value=eval(display.value);
}
function delet(){
doc=toString(display.value);
document.getElementById(display)=doc.value.slice(0,-1);
}

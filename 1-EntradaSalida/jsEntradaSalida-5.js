/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
var dato1;
var dato2;
dato1 = document.getElementById('elNombre').value;
dato2 = document.getElementById("laEdad").value;

alert("Usted se llama "+dato1 + " y tiene "+dato2 + " años");
//Para poder concatenar, se tiene que utlizar el signo suma para unir las variables



}


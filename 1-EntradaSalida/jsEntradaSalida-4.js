/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
var dato; //NO TE OLVIDES DEL ";"


var nombre = prompt("Por favor ingresa tu nombre","Su nombre es...");
//<variable que recibe el dato>=prompt(<mensaje a mostrar en la ventana>,<valor inicial a mostrar en la ventana
//La función prompt tiene dos parámetros: uno es el mensaje y el otro el valor inicial a mostrar.

dato = document.getElementById('elNombre').value;	
//Dicho método nos permite obtener la referencia a un elemento de la página mediante el id de dicho elemento.


alert("Su nombre es "+nombre);
//Me muestra mediante una pantalla del navegador un mensaje...

}


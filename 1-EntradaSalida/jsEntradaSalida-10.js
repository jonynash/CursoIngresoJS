/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	//Primer ejercicio que realizo con el enunciado "mostrar en el cuadro de texto" 

	var Ingreseimp; // tomo la variable ingreso que es lo que el cliente va a utilizar
	var resultadoDes; // variable resultadoDes, esto es la operacion qe el enunciado pide 25% de descuento
	var resultadoPan; // Esta variable resultadoPan, la creo para que me muestre el resultado en el cuadro de texto pedido

	Ingreseimp = document.getElementById('importe').value;
	Ingreseimp = parseInt(Ingreseimp);// transformo el valor en un numero entero

	resultadoDes = Ingreseimp * 0.75;// ejecuto la operacion pedida

	resultadoPan = document.getElementById('resultado').value = resultadoDes;
	// le asigno un valor a la variable resultadoPan tomando el ID del HTML igualandolo al resultado de la operacion
	
}

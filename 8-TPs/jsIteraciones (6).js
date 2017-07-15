function Mostrar()
{
	//Creo las variables
	var contador=0;//inicio el contador
	var acumulador=0;//Inicio el acumulador
	var numero;

	while(contador<5)
	{
		contador = contador + 1//Valor literal
		numero = prompt("Ingrese el numero " + contador + "º:");//Genero la variable numero, y lo tomo por prompt
		numero = parseInt(numero);
		acumulador = acumulador + numero;//variable

	}

		
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN

	/*var salir

	while(salir != "Si") //(true)hace un while "infinito"
	{
		console.log("Hola");
		
		salir="Si";

								//break;
		console.log("Chau");
								//console.log("Chau"); nunca aparece porque el break corta la interacion
	}
*/
function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10."); 

	while (!(numero >-1 && numero<10))//niengo la condicion de esta manera

	{
		
		alert("no sos un genio");//alerta para cuando ingresa algo incorrecto
		numero = prompt("ingrese un número entre 0 y 10.");//Tomo de nuevo el prompt para que vuelva a pedirme el numero

	}


	alert("Bienvenido");//alerta para cuando ingreso lo pedido
	




}//FIN DE LA FUNCIÓN
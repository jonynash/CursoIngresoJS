function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	/*ejemplo de obtencion, validacion y extraccion de informacion 
	de esta encuesta se debe informar, 
	1-cuantas mujeres y cuantos hombre fueron entrevistados?, 
	2- la persona de mayor edad.
	3- el promedio de edad.
	4- quien ganara las elecciones
	5- informar cuantas mujeres mayores de edad hay
	6- informar cuantos hombres menores a 30 años hay
	7- informar la altura del hombre que menos edad tiene
	8- informar cuantos hombres votaron a otros
	-9 de las mujeres informar. cuantas votaron a aoposicion
	10-cuantas personas de 50 años votaron
	11- cuantas personas de 50 años mujeres votaron
	12- cuantas mujeres de 50 años de mas de un 1 mtro votaron al gobierno

	



		*/
	var sexo
	var edad
	var edadmayor;


	while(respuesta!="no")
	{
		sexo=prompt("sexo");
		while(sexo!="f" &&sexo!="m")
		{
			sexo=prompt("sexo");

		}
		if(sexo==m)
		{
			contadormasc = contadormasc + 1
		}
		else
		{
			contadorFem = contadorFem + 1
		}

		edad=prompt("edad")
		while(!(edad>-1&&edad<101))
		{
			edad=prompt("edad")

		}
		if(contador == 0)
		{
			edadmayor = edad;
		}
		else
		{
			if(edad>edadmayor)
			{
				edadmayor=edad;
			}
		}


		promedio=prompt("Promedio de edad");
		while()










	}



}//FIN DE LA FUNCIÓN
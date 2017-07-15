/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var legajo;
	var nacionalidad;
	/*var soltero;
	var casado;
	var divorciado;
	var viudo;*/
	

	edad = prompt("Ingrese su Edad por favor");
	sexo = prompt("Ingrese su sexo por favor");
	// estadoCivil = prompt("Ingrese su estado civil: 1=soltero, 2=casado, 3=divorciado, 4=viudo");
	sueldoBruto = prompt("Ingrese su sueldo, no debe ser menor a $8000");
	legajo = prompt("Ingrese su numero de legajo");
	estadoCivil=prompt("Indique Estado Civil “1” para soltero, “2” para casado, “3” para divorciado y “4” para viudo");
	nacionalidad=prompt("Ingrese nacionalidad");
	
	
	while(!(edad>17 && edad <91))
	{
		alert("Re ingrese su edad");
		edad = prompt("Ingrese su Edad por favor");
	}

	
	while(sexo!= "f" && sexo!="m")
	{
		alert("sexo invalido, reingrese su sexo");
		sexo = prompt("Ingrese su sexo por favor");
	}

	
	while(estadoCivil!="1"&&estadoCivil!="2"&&estadoCivil!="3"&&estadoCivil!="4")
	{
  		alert("Estado Civil Invalido");
  		estadoCivil=prompt("Indique Estado Civil “1” para soltero, “2” para casado, “3” para divorciado y “4” para viudo");
  	}
	  	switch(estadoCivil)
	  	{
	  		case "1":
	  		estadoCivil="Soltero";
		  	break;
		  	case "2":
		  	estadoCivil="Casado";
		  	break;
		  	case "3":
		  	estadoCivil="Divorciado";
		  	break;
		  	case "4":
		  	estadoCivil="Viudo";
		  	break;
		} 	
	
	
	while(sueldoBruto<7990)
	{
		alert("El sueldo bruto debe ser mayor a $8000");
		sueldoBruto = prompt("Ingrese su sueldo, no debe ser menor a $8000");
	}

	
	while(!(legajo>999 && legajo <10000))
	{
		alert("Numero de legajo inexistente");
		legajo = prompt("Ingrese su numero de legajo");
	}

	
	while(nacionalidad!="a" && nacionalidad!="e" && nacionalidad!="n");
	{
		alert("Dato invalido");
		nacionalidad=prompt("Reingrese nacionalidad");

		switch(nacionalidad)
		{
			case"a":
			nacionalidad = "Argentina";
			break;

			case "e":
			nacionalidad = "Extranjero";
			break;

			case"n":
			nacionalidad = "Nacionalizado";
			break;

		}
	}




	document.getElementById('Edad').value = edad;//Lo muestro en el cuadro de texto
	document.getElementById('Sexo').value = sexo;
	document.getElementById('EstadoCivil').value = estadoCivil;
	document.getElementById('Sueldo').value = sueldoBruto;
	document.getElementById('Legajo').value = legajo;
	document.getElementById('Nacionalidad').value = nacionalidad;



	
}

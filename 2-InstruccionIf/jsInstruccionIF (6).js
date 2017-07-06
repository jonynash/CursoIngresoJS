function Mostrar()
{
//tomo la edad  
var edad

edad = document.getElementById('edad').value;


if(edad > 17)
	{
		alert("Sos mayor de edad");
	}
	else if(edad>13)
	{
	 	alert("Sos un adolescente")
	}
	else
	{
		alert("Sos un niño")
	}



}


/*//ES UNA MANERA DE REALIZAR EL EJERCICIO PERO MAS LARGA Y POSIBLE ERROR
//*var edad;
//edad = document.getElementById('edad').value;

//if(edad > 17)
	{
		alert("Sos mayor de edad");
	}
//if(edad > 12 && edad < 18)
	{
		alert("Sos adolescente");
	}
//if(edad < 13)
	{
		alert("Sos un niño");
	}	*/



//FIN DE LA FUNCIÓN*/
function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
//Tomo la variable
var nota;
//utlizo la funcion para el numero random dandole un valor a la variable
nota = Math.floor((Math.random() * 10) + 1);

//Implemento la condicion mediante un if
if(nota > 8)
	{
		alert(nota + " Exelente");//Primer alert
	}	
else if(nota > 4)//pongo un else if para contrarestar el primer if
	{
		alert(nota + " aprobo");//segundo alert
	}
	else//utilizo un nuevo else para contradecir la segunda condicion que puse
		{
			alert(nota + " Vamos, la proxima se puede");
		}

//Hay otra manera de escribirlo pero por ahora no lo estoy encontrando


}//FIN DE LA FUNCIÓN
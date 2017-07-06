function Mostrar()
{
//tomo la edad  

var edad;
var estadocivil;
edad = document.getElementById('edad').value;
estadtocivil = document.getElementById('estadoCivil').value;

if(estadocivil!= "Soltero" && edad < 18)
	{
	alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN
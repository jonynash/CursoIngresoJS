function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

//Forma mas sencilla de realizar la condicion
while(sexo != "f" && sexo!="m")//siempre hay que pensar en el error para plantear la condicion
{
	alert("No sos un genio");
	sexo = prompt("ingrese f ó m .");
}


/*while(!(sexo=="f" || sexo=="m"))
{
	alert("No sos un genio");
	sexo = prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value=sexo;*/

}//FIN DE LA FUNCIÓN
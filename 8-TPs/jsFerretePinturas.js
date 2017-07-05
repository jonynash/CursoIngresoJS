/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
var temp;
var Fahrenheit;

temp = document.getElementById('Temperatura').value;

temp = parseInt(temp);

Fahrenheit = [(temp - 32) * (5/9)];


alert(temp + " fahrenheit son "+ Fahrenheit + " Centigrados");

}

function CentigradosFahrenheit () 
{

var temp;
var centígrados;

temp = document.getElementById('Temperatura').value;

temp = parseInt(temp);

centígrados = [(9/5)* temp + 32];

alert(temp + " Centigrados son " + centígrados + " Fahrenheit");

}

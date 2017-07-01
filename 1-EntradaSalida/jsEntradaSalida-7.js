/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var Numero1;// Creo la variable
var Numero2;
//EJEMPLO
//puedo ahorrar linea poniendo var Numero1 = document.getElementById("numeroUno").value;

Numero1 = document.getElementById('numeroUno').value;// tomo los datos del ID del HTML
Numero2 = document.getElementById('numeroDos').value;
Numero1 = parseInt(Numero1);//Transformo ese valor en un numero entero
Numero2 = parseInt(Numero2);	
resultado = Numero1 + Numero2;// realiza la operacion
alert("La suma es "+ resultado);//muestro el mensaje
// y todo salio de 10 ;)
}



function restar()
{
var Numero1;
var Numero2;
Numero1 = document.getElementById('numeroUno').value;
Numero2 = document.getElementById('numeroDos').value;
Numero1 = parseInt(Numero1);
//Solamente necesito usar el parseInt en la operacion
// de suma tanto en la division, multiplicacion y resta la operacion funciona de igual manera
Numero2 = parseInt(Numero2);
resultado = Numero1 - Numero2;
alert("La resta es "+ resultado);
}



function multiplicar()
{ 
var Numero1;
var Numero2;
Numero1 = document.getElementById('numeroUno').value;
Numero2 = document.getElementById('numeroDos').value;

resultado = Numero1 * Numero2;
alert("La multiplicacion es "+ resultado);	
}



function dividir()
{
var Numero1;
var Numero2;
Numero1 = document.getElementById('numeroUno').value;
Numero2 = document.getElementById('numeroDos').value;

resultado = Numero1 / Numero2;
alert("La division es "+ resultado);	
}




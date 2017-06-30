/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var dato1;
var dato2;
dato1 = document.getElementById('numeroUno').value;
dato2 = document.getElementById('numeroDos').value;
dato1 = parseInt(dato1);
dato2 = parseInt(dato2);	
resultado = dato1 + dato2;
alert("La suma es "+ resultado);
}



function restar()
{
var dato1;
var dato2;
dato1 = document.getElementById('numeroUno').value;
dato2 = document.getElementById('numeroDos').value;
dato1 = parseInt(dato1);
dato2 = parseInt(dato2);
resultado = dato1 - dato2;
alert("La resta es "+ resultado);
}



function multiplicar()
{ 
var dato1;
var dato2;
dato1 = document.getElementById('numeroUno').value;
dato2 = document.getElementById('numeroDos').value;
dato1 = parseInt(dato1);
dato2 = parseInt(dato2);
resultado = dato1 * dato2;
alert("La multiplicacion es "+ resultado);	
}



function dividir()
{
var dato1;
var dato2;
dato1 = document.getElementById('numeroUno').value;
dato2 = document.getElementById('numeroDos').value;
dato1 = parseInt(dato1);
dato2 = parseInt(dato2);
resultado = dato1 / dato2;
alert("La division es "+ resultado);	
}




/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

var precio1 
var precio2 
var precio3 
var resultado;
precio1 = document.getElementById('PrecioUno').value;
precio2 = document.getElementById('PrecioDos').value;
precio3 = document.getElementById('PrecioTres').value;
precio1 = parseInt(precio1);
precio2 = parseInt(precio2);
precio3 = parseInt(precio3);

resultado = precio1 + precio2 + precio3;

alert("El total de la suma es "+resultado);
}


function Promedio () 
{

var precio1 
var precio2 
var precio3 
var resultado;
precio1 = document.getElementById('PrecioUno').value;
precio2 = document.getElementById('PrecioDos').value;
precio3 = document.getElementById('PrecioTres').value;
precio1 = parseInt(precio1);
precio2 = parseInt(precio2);
precio3 = parseInt(precio3);
resultado = (precio1+precio2+precio3)/3;

alert("El promedio es "+ resultado);

	
}
function PrecioFinal () 
{

var precio1;
var precio2;
var precio3;
var resultado;

precio1 = document.getElementById('PrecioUno').value;
precio2 = document.getElementById('PrecioDos').value;
precio3 = document.getElementById('PrecioTres').value;
//dado a que en todos los puntos es necesario realizar una suma tengo que utilizar el parseInt
//Porque de esa forma el programa sabe que quiero realizar una suma y no concatenar variables
precio1 = parseInt(precio1);
precio2 = parseInt(precio2);
precio3 = parseInt(precio3);

resultado = (precio1+precio2+precio3)*1.21

alert("El precio final es "+ resultado);



	
}
/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var cantidadAlambre;
var perimetro;
largo = document.getElementById('Largo').value;
ancho = document.getElementById('Ancho').value;
largo = parseInt(largo);
ancho = parseInt(ancho);

perimetro = [(largo + ancho)*2] * 3;


alert("Debe comprar "+perimetro+ " metros");


}
function Circulo () 
{

var radio;
var radioTotal;

radio = document.getElementById('Radio').value;

radioTotal = [3.1415 * (radio*radio)] * 3 ;

alert("Debe comprar "+radioTotal + " metros");

}



function Materiales () 
{

var largo;
var ancho;
var resultadoCem;
var resultadoCal;

largo = document.getElementById('Largo').value;
ancho = document.getElementById('Ancho').value;
largo = parseInt(largo);
ancho = parseInt(ancho);

resultadoCem = (largo*ancho)*2;
resultadoCal = (largo*ancho)*3;

alert("Necesito bolsas "+ resultadoCem + " de cemento"+ " y "+ resultadoCal + " bolsas de cal");



	
}
/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
//Ejercicio copiado de un compañero, no entendia como hacer que el resultado me aparesca en el recuadro correspondiente...

// toma 3 variables
var importe;
var resultado1;
var resultado;

importe= document.getElementById('sueldo').value;// Determina a la variable "importe" con el get.ElementByID Sueldo
importe= parseInt(importe);//Utiliza el parseInt para convertir el valor en un numero entero
resultado1= importe*1.1;//Realiza la operacion que pide el ejercicio(mostrar el resultado con un 10% mas)
resultado1= parseInt(resultado1);// esta linea no me resulta necesaria, dado a que si la elimino el programa ejecuta correctamente porque el importe ya fue modificado con el parseInt

resultado= document.getElementById('resultado').value=resultado1;
// para poder plasmar el dato en el cuadro de texto de la pantalla 
//le doy el valor a la variable en este caso "resultado1" mediante el getElementByID(resultado) 
//agregandole con el "=" el resultado de la operacion
//de esta manera al ejecutar el programa lo que me pide el enunciado va a funcionar correctamente


}

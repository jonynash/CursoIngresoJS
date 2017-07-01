/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

//Crear variables
var Dividendo;
var Divisor;

//tomar los datos del ID del archivo HTML
Dividendo = document.getElementById('numeroDividendo').value;
Divisor = document.getElementById('numeroDivisor').value;

//transforma a numero entero
Dividendo = parseInt(Dividendo);
Divisor = parseInt(Divisor);//transforma a numero entero	

//Realizo la operacion

resto = Dividendo % Divisor;// consultar si esta bien???

//muestro el mensaje
alert("El resto es "+ resto);


}

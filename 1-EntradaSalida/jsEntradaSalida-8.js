/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
var dato1;
var dato2;
dato1 = document.getElementById('numeroDividendo').value;
dato2 = document.getElementById('numeroDivisor').value;
dato1 = parseInt(dato1);//transforma a numero entero
dato2 = parseInt(dato2);//transforma a numero entero	
resultado = dato1 / dato2;
resto = dato1 % dato2;
alert("El reso es "+ resto);

}

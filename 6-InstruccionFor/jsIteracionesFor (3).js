function Mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");

var cantidad=10000;
var numero;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;
var cont5=0;
var cont6=0;
var cont7=0;
var cont8=0;
var cont9=0;

for(contador=0;contador<cantidad;contador++)
{
	numero=Math.floor((Math.random() * 10) + 1);

	//console.log(numero);

	switch(numero)
	{
		case 1:
		cont1++;
		break;

		case 2:
		cont2++;
		break;

		case 3:
		cont3++;
		break;

		case 4:
		cont4++;
		break;

		case 5:
		cont5++;
		break;

		case 6:
		cont6++;
		break;

		case 7:
		if(contador==10)
			{
				{continue}
			}
		cont7++;
		break;

		case 8:
		cont8++;
		break;

		case 9:
		cont9++;
		break;

	}
	
}
	console.log("El numero 1 salio " + cont1);
	console.log("El numero 2 salio " + cont2);
	console.log("El numero 3 salio " + cont3);
	console.log("El numero 4 salio " + cont4);
	console.log("El numero 5 salio " + cont5);
	console.log("El numero 6 salio " + cont6);
	console.log("El numero 7 salio " + cont7);
	console.log("El numero 8 salio " + cont8);
	console.log("El numero 9 salio " + cont9);
	




}//FIN DE LA FUNCIÓN
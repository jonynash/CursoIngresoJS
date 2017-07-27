function Mostrar()
{
	contador=0
	respuesta = "si";


	for(;respuesta=="si";)
	{
	console.log("HOLA "+contador);

		if(contador==10)
		{
			break;
		}

	contador++
	respuesta=prompt("Continuar?");
	}


}
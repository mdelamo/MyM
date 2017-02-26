



 function lee_config() {
 //Retrieving data:
	         
        
 }




/* --- Control de versión  ---*/

function control_version() {
	
	var version="0.0";
	var salida="Version 0.0";
	  
	 salida="Version: "+Version;

	// Escribirmos la versión en la entrada.
	document.getElementById("Logo_Version").innerHTML=salida;
	
	
	
}


/* --- Función que espera el número de segundos que recibe como parámetro --- */
function redirecciona() {
/*	document.getElementById("Logo_Version").style.visibility = "hidden";
	document.getElementById("Logo_Version_Label").style.visibility = "hidden";
	document.getElementById("Logo_Version_Imagen").style.visibility = "hidden";
	
	var body = document.getElementsByTagName('body')[0];
	body.style.background = "#fff";
*/
	location.href = "app.html"

}

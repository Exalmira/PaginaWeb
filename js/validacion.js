// JavaScript Document
function valida(f) {
	var expreNombre  = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
	var expreTelefono  = /^[0-9]{9}$/;
	var ok = true;
	var msg = "Debes ingresar informacion en los siguientes campos:\n";
	if(f.elements[0].value == "" || !expreNombre.test(f.elements[0].value) )
	{
	  msg += "- Nombre\n";
	  ok = false;
	}

	if(f.elements["telefono"].value == "" ||  !expreTelefono.test(f.elements[1].value) )
	{
	  msg += "- telefono \n";
	  ok = false;
	}

	if(f.correo.value == "" )
	{
	  msg += "- correo\n";
	  ok = false;
	}

	
	if(ok == false)
	  alert(msg);
	return ok;
  }
<?php
echo "<h1>Hola, aquí llegará el form</h1>";
if ($_POST) {
	echo "Llegan variables por post:<br>";
	echo $_POST['nombreApellidos'];
	echo "<br>";
	echo $_POST['email'];
	echo "<br>";
	echo $_POST['mensaje'];
	
	$nombre = $_POST['nombreApellidos'];
	$email = $_POST['email'];
	$mensaje = $_POST['mensaje'];
	
	$mysqli = new mysqli('127.0.0.1', 'root', '', 'takeaway'); 
	
	mysqli_set_charset($mysqli, "utf8");
	
	if ($mysqli){
		$sql="INSERT INTO contactform (nombreApellidos, email, mensaje) VALUES ('$nombre', '$email', '$mensaje');";
		$query=$mysqli->query($sql);
		if ($query) {
			echo "Se ha grabado correctamente la información";
		}
		else 
		{
			echo "Ha habido un problema con el registro del formulario";
		}
		$mysqli->close();
	}
}
else {
	echo "No llega nada por post";
}
?>
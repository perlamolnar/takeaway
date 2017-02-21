<?php
echo "<h1>Hola, aquí llegará el form</h1>";
if ($_POST) {
	echo "Llegan variables por post: <br>"; 
	echo $_POST  [ 'nombreApellidos' ];
	echo "<br>";
	echo $_POST [ 'email' ];
	echo "<br>";
	echo $_POST [ 'mensaje' ];
	define("DB_SERVER", "localhost");
	define("DB_USER", "root");
	define("DB_PASSWORD", "");
	define("DB_DATABASE", "takeaway");

$connect = mysqli_connect(DB_SERVER , DB_USER, DB_PASSWORD, DB_DATABASE);

}
else {
	echo "No llega nada por post";
	}
?>

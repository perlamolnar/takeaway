<?php
$test=4;
//para comprobar si se recibe un post desde un ajax:
if ($_SERVER['REQUEST_METHOD']==='GET'){
	$sql = "SELECT id,nombre FROM categoria";
	$mysqli=new mysqli ("localhost","root","","takeaway"); // esta linea hace una coneccion a los date de bases.
	//(server, username, password, databasename)
	mysqli_set_charset($mysqli,"utf8");
	
	if ($mysqli){
		$query = $mysqli->query($sql); // Esto envia la informacion a base de datos. query = enviar
		$mysqli->close(); //Esto cierra la conneccion con la base de datos. 
		$rows = $query->fetch_all(MYSQLI_ASSOC);
	}
	
	if ($query){
	echo json_encode([
		"query" 	=>$rows,
		"error" 	=> 0,
		"resultado" =>"Se ha grabado la información."
	]);
	} else {
	echo json_encode([
		"query" 	=>$query,
		"error" 	=> 1,
		"resultado" =>"No se ha grabado la información",
	]);
	}
}
	else {
		echo json_encode([
		"query" 	=>KO,
		"error" 	=> 1,
		"resultado" =>"No hay",
		]);
		}
?>
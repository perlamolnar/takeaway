<?php
$test=4;
//para comprobar si se recibe un post desde un ajax:
if ($_SERVER['REQUEST_METHOD']==='POST'){
	//para almacenar (temporarlmente) los inputs (de usuario) que reciba JSON.
	//Para almacenar los datos JSON recibidos en una variable
	$request=file_get_contents('php://input');
	//para convertir un Json en un array de php
	$datos = json_decode($request,true); 		//"true" es para que vaya directamente
	//en php en vez de "var" ponemos signo de dollar$. declara variables
	$ids='';
	$cantidades="";
	$importe=0;
	

	foreach ($datos as $value){       
		$ids .= $value['id'].',';      //El .= hace que guarde la informacion anterior + añade el siguiente
		$cantidades.= $value['cantidad'].',';
		$importe=$importe+$value['precio']*$value['cantidad'];
	}

	$ids = substr($ids,0, -1);
	$cantidades = substr($cantidades,0, -1);
	
	$sqlPedido = "INSERT INTO pedidos (id_cliente,importe) VALUES (1,200);";

	$sql = "INSERT INTO detalle_pedido (id_plato,cantidad,id_pedido) VALUES ('$ids','$cantidades'); SELECT_LAST_INSERT_ID()";
	//almacenamos la informacion en esta misma variable (sql)
	
	$mysqli= new mysqli ("localhost","root","","takeaway")  
	//hace una coneccion a los date de bases.
	//(server, username, password, databasename)

	mysqli_set_charset($mysqli,"utf8");
	
	if ($mysqli){
		$query = $mysqli->query($sqlPedido);       
		// Esto envia la informacion a base de datos. query = enviar
		$lastID=$mysqli->insert_id;	
	}

	if ($query){
	echo json_encode([
		"ids" 	=> $ids,
		"error"		=> 0,
		"sqlpedido"	=> $sqlPedido,
		"lastid"		=> $lastID,
		"resultado" => "se ha grabado"
		]);
	} 
	else {
		$lastID="No se encuentra último id";
		echo json_encode([
		"ids" 	=> $ids,
		"error"		=> 0,
		"sqlpedido"	=> $sqlPedido,
		"sql"		=> $lastID,
		"resultado" => "NO se ha grabado!!"
		]);	
	}
}
else {
echo json_encode([
		"campos" => "KO",
		"error"		=> 1,
		"valores"	=> "no hay"
	]);

}
$mysqli->close(); //cerrar conneccion con la base de datos
?>
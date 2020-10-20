<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");


if ( isset($_GET['id']) ) {
	$id = $_GET['id'];

	if( is_numeric( $id ) ){
    	$sql = "SELECT * FROM alumnos WHERE id = $id";
	}else{
		$respuesta = array(
			'error' => true, 
			'mensaje' => "El parametro enviado no es valido"
			);
		echo json_encode($respuesta);
		die;
	}

}else{
    $sql = "SELECT * FROM alumnos ORDER BY nombre ASC";
}



$alumnos = Database::get_arreglo( $sql );


$respuesta = array(
			'error' => false,
			'alumnos' => $alumnos 
		);


echo json_encode( $respuesta );


?>
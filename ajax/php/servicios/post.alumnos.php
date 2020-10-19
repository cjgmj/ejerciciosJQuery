<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Obtiene los valores que vienen de la petición
$nombre = $_POST['txtNombre'];
$estado = $_POST['cmbEstado'];

$sql = "INSERT INTO alumnos (nombre) VALUES ('$nombre')";

$hecho = Database::ejecutar_idu($sql);

if($hecho) {
	$respuesta = json_encode( 
		array('err' => false, 
			'mensaje' => "Creado correctamente" )
	);
} else {
	$respuesta = json_encode( 
		array('err' => false, 
			  'mensaje' => $hecho )
	);
}


echo $respuesta;
?>
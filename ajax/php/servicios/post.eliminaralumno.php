<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

$id = $_POST['id'];

$sql = "DELETE FROM alumnos WHERE id=$id";

$hecho = Database::ejecutar_idu( $sql );

if( $hecho ){
	$respuesta = json_encode( 
				array('err' => false, 
					  'mensaje'=>"Eliminado correctamente"
					  )
			);
}else{
	$respuesta = json_encode( 

				array('err' => true, 
					  'mensaje'=> $hecho
					  )
			);
}

echo $respuesta;
?>
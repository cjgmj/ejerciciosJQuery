<?php

// Aquí recibimos el archivo de una carga regular, y luego imprimimos el nombre:
echo 'Subiste un archivo: '.$_FILES['file']['name'];

// La siguiente línea, es potencialmente insegura y debe ser usada únicamente
// con fines experimentales. Usuarios maliciosos pueden subir cualquier archivo
// incluyendo scripts PHP que pueden hacer mucho daño en la aplicación.
move_uploaded_file($_FILES['file']['tmmp_name'], 'cargas/'.$_FILES['file']['name']);
<?php

$host="aps.pregps.cl";
$usuario="fastfood";
$password="fastfood2024";
$db="fastfood";


// if (!function_exists('mysqli_init') && !extension_loaded('mysqli')) {
//     echo 'We don\'t have mysqli!!!';
// } else {
//     echo 'Phew we have it!';
// }
$conexion= new mysqli($host, $usuario, $password,  $db);

if($conexion->connect_error){
    die("Error en la conexion" . $conexion->connect_error);
}




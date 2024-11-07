<?php

$host="kddp.cl";
$usuario="ckd7887_kddpdos";
$password="iPmWyBUmstmpBb6FWx";
$db="ckd7887_kddpdos";


// if (!function_exists('mysqli_init') && !extension_loaded('mysqli')) {
//     echo 'We don\'t have mysqli!!!';
// } else {
//     echo 'Phew we have it!';
// }
$conexion= new mysqli($host, $usuario, $password,  $db);

if($conexion->connect_error){
    die("Error en la conexion" . $conexion->connect_error);
}




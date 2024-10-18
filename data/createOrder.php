<?php 
include "connection.php";


$json = file_get_contents('php://input'); 
$orderData = json_decode($json);

$sql="INSERT INTO `orders` (`id`, `client_name`, `rut`, `address`, `phone_number`, `product_name`, `price`, `product_description`, `created_date`, `updated_date`, `status`) 
VALUES (NULL, '{$orderData->name}', '{$orderData->rut}', '{$orderData->address}', '{$orderData->phone_number}', '{$orderData->product_name}', '{$orderData->price}', '{$orderData->product_description}', current_timestamp(), current_timestamp(), 'Abierto')";
$result = $conexion->query($sql);

if($result == true){
    $last_id = $conexion->insert_id;

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['id' => $last_id]);


}




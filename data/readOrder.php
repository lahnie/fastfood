<?php

include "connection.php";
$orderNumber = $_GET['orderNumber'];
$sql = "select * from orders where id={$orderNumber}";

$result = $conexion->query($sql);

$rows = array();

if ($result->num_rows > 0) {
    // var_dump($result->fetch_assoc());
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($rows[0]);
}

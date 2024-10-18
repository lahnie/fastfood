<?php

include "connection.php";

$dateFilter = $_GET['dateFilter'];

if (empty($dateFilter)){
  $sql = "Select * FROM orders";
}
else{
  $sql = " Select * FROM orders where (updated_date BETWEEN '{$dateFilter} 00:00:00' AND  '{$dateFilter} 23:59:59');";
}

$result = $conexion->query($sql);

$rows = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
  }

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($rows);
  
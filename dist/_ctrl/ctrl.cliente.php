<?php
header('Content-Type: text/html; charset=utf-8');
session_start();
require_once('../_class/class.cliente.php');
$obj = new Cliente();

switch($_REQUEST['exec']){
  case "save":
    $request = $_REQUEST['data'];
    print_r($request);
    $obj->set_servicio($request['servicio'])
                   ->set_precio($request['precio'])
                   ->set_descripcion($request['descripcion'])
                   ->set_status(1)
                   ->db('insert');
    $result = NULL;
    $result['status'] = 200;
    echo json_encode($result);
  break;
  case "getList":
    $buffer = $obj->getCliente();
    $result = NULL;
    $result['json'] = $buffer;
    $result['status'] = 200;
    echo json_encode($result);
  break;
}



?>

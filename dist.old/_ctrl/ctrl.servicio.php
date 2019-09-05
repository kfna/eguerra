<?php
header('Content-Type: text/html; charset=utf-8');
session_start();
require_once('../_class/class.servicio.php');
$obj = new Servicio();

switch($_REQUEST['exec']){
  case "save":
    $request = $_POST['data'];
    $obj->set_nombre($request['nombre'])
                   ->set_costo($request['costo'])
                   ->set_descripcion($request['descripcion'])
                   ->set_status(1)
                   ->db('insert');
    $result = NULL;
    $result['lid'] = $obj->lastInserted;
    $result['status'] = 202;
    echo json_encode($result);
  break;
  case "getClientes":
    $temp = $obj->set_status(1)->getCliente();
    for($i=0;$i<count($temp);$i++){
      $clientes[$i] = $temp[$i];
      $datos = json_decode($clientes[$i]["datos"],true);
      $clientes[$i]["movil"] = $datos["movil"];
      $clientes[$i]["correo"] = $datos["correo"];

    }

    $json["data"] = $clientes;
    $result = NULL;
    $result['json'] = $json;
    $result['status'] = 202;
    echo json_encode($result);
  break;
}



?>

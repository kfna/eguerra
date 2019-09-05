<?php
header('Content-Type: text/html; charset=utf-8');
session_start();
require_once('../_class/class.cliente.php');
$obj = new cliente();

switch($_REQUEST['exec']){
  case "save":
    $request = $_POST['data'];
    $datos["telefono"] = $request['telefono'];
    $datos["movil"] = $request['movil'];
    $datos["correo"] = $request['correo'];
    $datos["cp"] = $request['cp'];
    $datos["direccion"] = $request['direccion'];
    $datos["observaciones"] = $request['observaciones'];
    $obj->set_nombre($request['nombre'])
                   ->set_datos(json_encode($datos,JSON_UNESCAPED_UNICODE))
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

<?php
header('Content-Type: text/html; charset=utf-8');
session_start();
require_once('../_class/class.servicio.php');
$obj = new Servicio();

switch($_REQUEST['exec']){
  case "save":
    $request = $_POST['data'];
    $obj->set_tipo(1)
        ->set_servicio($request['servicio'])
      ->set_costo($request['costo'])
      ->set_status(1)
               ->db('insert');
    $result = NULL;
    $result['lid'] = $obj->lastInserted;
    $result['status'] = 200;
    echo json_encode($result);
  break;
  case "savePaquete":
    $request = $_POST['data'];
    $servicios = $request['servicios'];
    $total = 0.0;
    for($i=0;$i<count($servicios);$i++){
       $total += $servicios[$i]['costo'];
    }
    $obj->set_tipo(2)->set_servicio($request['paquete'])->set_descripcion($request['descripcion'])->set_costo(number_format($total,2))->set_status(1)->db('insert');
    $obj->set_id_servicio($obj->lastInserted)->set_paquete(json_encode($servicios))->db('insertPaquete');
    $result = NULL;
    $result['lid'] =
    $result['status'] = 200;
    echo json_encode($result);
  break;
  case "getServicios":
    $data = $obj->set_status(1)->getServicios();
    $json["data"] = $data;
    $result = NULL;
    $result['json'] = $json;
    $result['status'] = 200;
    echo json_encode($result);
  break;
}



?>

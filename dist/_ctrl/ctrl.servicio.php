<?php
header('Content-Type: text/html; charset=utf-8');
session_start();
require_once('../_class/class.servicio.php');
$obj = new Servicio();

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
    $result['status'] = 202;
    echo json_encode($result);
  break;
  case "getMovimientos":
    $buffer = array();
    $fileHandle = fopen("archivo.csv", "r");
    $i = 0;
    while (($row = fgetcsv($fileHandle, 0, ",")) !== FALSE) {
      if($i>0){
        $aux['descripcion'] = $row[8];
        $aux['ref_cliente'] = $row[9];
        $aux['tipo_tran'] = $row[10];
        $aux['importe_abono'] = $row[11];
        $aux['importe_cargo'] = abs(str_replace(",","",$row[12]));
        $aux['fecha'] = $row[14];
        $aux['json'] = $row;
        array_push($buffer,$aux);
      }
      $i++;
    }


    $result = NULL;
    $result['json'] = $buffer;
    $result['status'] = 202;
    echo json_encode($result);
  break;
  case "auth":
    $data = $_REQUEST['data'];
    $isRegistered = $obj->set_email($data['email'])->set_contrasena($data['pass'])->verify();
    if($isRegistered){
      $result = NULL;
      $result['redirect'] = 'home.html';
      $result['status'] = 200;
    }else{
      $result = NULL;
      $result['status'] = 404;
    }
    echo json_encode($result);
  break;
}



?>

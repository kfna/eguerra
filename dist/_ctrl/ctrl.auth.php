<?php
header('Content-Type: text/html; charset=utf-8');
session_start();
require_once('../_class/class.usuario.php');
$obj = new Usuario();

switch($_REQUEST['exec']){
  case "import_trans":
    $request = $_GET['data'];
    $csv = array_map('str_getcsv', file('archivo.csv'));
    for($i=1;$i<count($csv);$i++){
      //if($csv[''])
      # HSBC
      $objTransaccion->set_id_cuenta($request['data'])
                     ->set_descripcion($csv[8])
                     ->set_importe($csv[12])
                     ->set_fecha($csv[14])
                     ->set_json(json_encode($csv))
                     ->set_status(1)
                     ->db('insert');
    }
    # EOF HSBC
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

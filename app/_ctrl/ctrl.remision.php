<?php
session_start();
require_once('../_class/class.remision.php');
$obj = new Remision();

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
  case "getRemisiones":

    $data = $obj->set_status(1)->getData();
    for($i=0;$i<count($data);$i++){

      $data[$i]["iva"] = number_format(($data[$i]["iva"]/100)*($data[$i]["subtotal"]),2);
      $data[$i]["total"] = number_format(($data[$i]["subtotal"])*(($data[$i]["iva"]/100)+1),2);
      $data[$i]["subtotal"] = number_format($data[$i]["subtotal"],2);
    }
    $result = NULL;
    $result['json']['data'] = $data;
    $result['status'] = 202;
    echo json_encode($result);
  break;
}



?>

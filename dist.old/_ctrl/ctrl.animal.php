<?php
header('Content-Type: text/html; charset=utf-8');
session_start();
require_once('../_class/class.animal.php');
$obj = new Animal();

switch($_REQUEST['exec']){
  case "save":
    $request = $_POST['data'];
    $obj->set_rfid($request['rfid'])
                   ->set_alias($request['alias'])
                   ->set_status(1)
                   ->db('insert');
    $result = NULL;
    $result['lid'] = $obj->lastInserted;
    $result['status'] = 202;
    echo json_encode($result);
  break;
  case "getMovimientos":
    $buffer = array();
    $fileHandle = fopen("archivo.csv", "r");
    $i = 0;
    $totals["abonos"] = 0.00;
    $totals["cargos"] = 0.00;
    while (($row = fgetcsv($fileHandle, 0, ",")) !== FALSE) {
      if($i>0){
        $aux['descripcion'] = $row[8];
        $aux['ref_cliente'] = $row[9];
        $aux['tipo_tran'] = $row[10];
        $aux['importe_abono'] = abs(str_replace(",","",$row[11]));
        $aux['importe_cargo'] = abs(str_replace(",","",$row[12]));
        $aux['fecha'] = $row[14];
        $aux['json'] = $row;
        if($aux['importe_abono']!=NULL){ $totals["abonos"] += $aux['importe_abono']; }
        if($aux['importe_cargo']!=NULL){ $totals["cargos"] += $aux['importe_cargo']; }
        array_push($buffer,$aux);
      }
      $i++;
    }
    $totals['IVA_cargos'] = abs(($totals["cargos"]/1.16)-$totals["cargos"]);
    $totals['IVA_abonos'] = abs(($totals["abonos"]/1.16)-$totals["abonos"]);
    $totals['ISR'] = (($totals["abonos"])-$totals["cargos"])*.30;

    $json["data"] = $buffer;
    $json["totals"] = $totals;
    $result = NULL;
    $result['json'] = $json;
    $result['status'] = 202;
    echo json_encode($result);
  break;
}



?>

<?php
header('Content-Type: text/html; charset=utf-8');
session_start();
//require_once('../_class/class.transaccion.php');
//$obj = new Transaccion();

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
    echo json_encode($result,JSON_NUMERIC_CHECK);
  break;
}



?>

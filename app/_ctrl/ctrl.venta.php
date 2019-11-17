<?php
header('Content-Type: text/html; charset=utf-8');
session_start();
require_once('../_class/class.venta.php');
$obj = new Venta();

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
  # ABONO
  case "abono":
    $request = $_POST['data'];
    $obj->set_id_venta($request['id_venta'])
        ->set_id_usuario(1)
        ->set_monto($request['monto'])
        ->set_tipo($request['tipo'])
        ->set_fecha(Date("Y-m-d H:i:s"))
        ->set_medio($request['medio'])
        ->set_status(1)
        ->db('abono');
    $result = NULL;
    $result['lid'] = $obj->lastInserted;
    $result['status'] = 202;
    echo json_encode($result);
  break;
  case "getVentas":
    $temp = $obj->set_status(1)->getVentas();
    $ventas = NULL;
    for($i=0;$i<count($temp);$i++){
      $ventas[$i] = $temp[$i];
      $ventas[$i]["total"] = number_format($temp[$i]["total"],2);
      $ventas[$i]["fecha_evt"] = $obj->formatDateTime($temp[$i]["fecha_evt"],"min");

      $ventas[$i]["abonado"] = $obj->getSaldoByID($ventas[$i]['id']);
      if($ventas[$i]["abonado"]==NULL){ $ventas[$i]["abonado"] = 0.0; }
      $ventas[$i]["saldo"] = ($temp[$i]["total"]-$ventas[$i]["abonado"]);
      $class = '';

      if($temp[$i]["fecha_resta"]<=45){
        $class = 'yellow';
      }

      if($temp[$i]["fecha_resta"]<=15){
        $class = 'red';
        if($ventas[$i]["saldo"]<=0){ $class = 'green'; }
      }

      $ventas[$i]["class"] = $class;

      $ventas[$i]["saldo"] = number_format($ventas[$i]["saldo"],2);
      $ventas[$i]["abonado"] = number_format($ventas[$i]["abonado"],2);

    }
    $json["data"] = $ventas;
    $result = NULL;
    $result['json'] = $json;
    $result['status'] = 202;
    echo json_encode($result);
  break;
  case "getVenta":
    $request = $_POST['data'];
    $json["data"] = $obj->getVenta($request['id']);
    $result = NULL;
    $result['json'] = $json;
    $result['status'] = 202;
    echo json_encode($result);
  break;
}



?>

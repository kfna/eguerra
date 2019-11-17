<?php

require("../_class/class.cliente.php");
$objCliente = new Cliente();
# IMPORT VENTAS

require("../_class/class.venta.php");
$objVenta = new Venta();
$ventas = array_map('str_getcsv', file('../../import/ventas.csv'));
for($i=0;$i<count($ventas);$i++){
  $fecha = date_parse(str_replace("/","-",$ventas[$i][1]));
  $ventas[$i][1] = $fecha["year"].'-'.$fecha["month"].'-'.$fecha["day"].' '.$fecha["hour"].':'.$fecha["minute"].':'.$fecha["second"];
  $cliente = explode("-",trim($ventas[$i][2]));
  $id_cliente = $objCliente->getClienteByFolio($cliente[0]);
  $ventas[$i]['id_cliente'] = $id_cliente[0]['id'];
  $ventas[$i][3] = str_replace("$","",$ventas[$i][3]);
  $ventas[$i][3] = str_replace(",","",$ventas[$i][3]);
  if($ventas[$i][5]=="Venta" && $ventas[$i][3]!=NULL){
    //$objVenta->set_status(1)->set_id_cliente($ventas[$i]["id_cliente"])->set_id_usuario(1)->set_folio($ventas[$i][0])->set_fecha($ventas[$i][1])->set_total($ventas[$i][3])->db('insert');
  }
  if($ventas[$i][5]=="Abono" && $ventas[$i][3]!=NULL){
    $ventas[$i][4] = str_replace("$","",$ventas[$i][3]);
    $ventas[$i][4] = str_replace(",","",$ventas[$i][3]);
    $id_venta = $objVenta->getVentaIDByFolio($ventas[$i][0]);
    if($id_venta!=NULL){
      $objVenta->set_status(1)->set_id_venta($id_venta)->set_id_usuario(1)->set_monto($ventas[$i][4])->set_fecha($ventas[$i][1])->db('insert_abono');
    }
  }
}
echo '<pre>';
print_r($ventas);
echo '</pre>';


# IMPORT CLIENTES

die();

$csv = array_map('str_getcsv', file('../../import/clientes.csv'));
for($i=0;$i<count($csv);$i++){
  $datos["telefono"] = $csv[$i][2];
  $datos["movil"] =  $csv[$i][3];
  $datos["email"] = "";
  if($csv[$i][0]==NULL){ $csv[$i][0] = 1;  }
  $objCliente->set_status(1)->set_folio($csv[$i][0])->set_nombre($csv[$i][1])->set_datos(json_encode($datos))->db('insert');

}


 ?>

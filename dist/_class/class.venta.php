<?php
require_once("class.helper.php");

class Venta extends Helper {
  var $id;
  var $id_venta;
  var $id_cliente;
  var $id_usuario;
  var $folio;
  var $tipo;
  var $medio;
  var $monto;
  var $total;
  var $fecha;
  var $status;

  public function __construct(){ $this->sql = new dbo(); }

  public function db($key){
    switch($key){
      case "insert":
      $query = "INSERT INTO venta (folio,id_cliente,id_usuario,total,fecha,status) VALUES ('".$this->folio."','".$this->id_cliente."','".$this->id_usuario."','".$this->total."','".$this->fecha."','".$this->status."')";
      break;
      case "abono":
      $query = "INSERT INTO venta_abono (id_venta,id_usuario,monto,tipo,medio,fecha,status)
        VALUES ('".$this->id_venta."','".$this->id_usuario."','".$this->monto."','".$this->tipo."','".$this->medio."','".$this->fecha."','".$this->status."')";
      break;

    }
    $lid = false;
    if($key=="insert"){ $lid = true; }
    $this->execute($query,$lid);
  }

  public function getLastInserted(){ return $this->lastInserted; }


  public function getVentas($id = NULL){
    $query = 'SELECT venta.*, cliente.nombre AS cliente, usuario.nombre AS vendedor, DATEDIFF(fecha_evt,NOW()) AS fecha_resta
              FROM venta
              INNER JOIN cliente ON venta.id_cliente = cliente.id
              INNER JOIN usuario ON venta.id_usuario = usuario.id
              WHERE venta.id > 0';
    if($id!=NULL) $query.=" AND id=".$id."";
    if($this->status!=NULL) $query .= " AND venta.status=".$this->status;
	  if($this->search!=NULL) $query .= " AND ".$this->search_field." LIKE '".$this->search."%'";
	  if($this->order!=NULL) $query .= " ORDER BY ".$this->order;
	  if($this->limit!=NULL) $query .= " LIMIT ".$this->limit;
	  return $this->execute($query);
  }

  public function getVenta($id = NULL){
    $query = 'SELECT venta.*, cliente.nombre AS cliente, usuario.nombre AS vendedor FROM venta
              INNER JOIN cliente ON venta.id_cliente = cliente.id
              INNER JOIN usuario ON venta.id_usuario = usuario.id
              WHERE venta.id > 0 AND venta.id='.$id.' LIMIT 1';
	  $result =  $this->execute($query);
    return $result[0];
  }

  public function getSaldoByID($id = NULL){
    $query = 'SELECT SUM(monto) AS total FROM venta_abono  WHERE id_venta = '.$id.' LIMIT 1';
	  $result =  $this->execute($query);
    return $result[0]['total'];
  }



  public function getVentaIDByFolio($folio){
    $query = "SELECT id FROM venta WHERE folio='".$folio."'  LIMIT 1";
    $result = $this->execute($query);
	  return $result[0]['id'];
  }


}
?>

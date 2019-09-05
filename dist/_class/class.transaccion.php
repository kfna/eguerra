<?php
require_once("class.helper.php");

class Transaccion extends Helper {
  var $id;
  var $id_cuenta;
  var $descripcion;
  var $importe;
  var $fecha;
  var $json;
  var $status;

  public function __construct(){ $this->sql = new db(); }

  public function db($key){
    switch($key){
  	  case "insert":
	    $query = "INSERT INTO transaccion (id_cuenta,descripcion,importe,fecha,json,status)
		            VALUES ('".$this->id_cuenta."',
                        '".$this->id_cuenta."',
                        '".$this->descripcion."',
                        '".$this->importe."',
                        '".$this->fecha."',
                        '".$this->json."',
                        '".$this->status."')";
	  break;
	  case "update": $query = "UPDATE abono SET id_venta='".$this->id_venta."',
	                                            id_usuario='".$this->id_usuario."',
												fecha='".$this->fecha."',
												importe='".$this->importe."',
												comentario='".$this->comentario."'
		                       WHERE id=".$this->id;
      break;
      case "delete": $query = "DELETE FROM abono WHERE id='".$this->id."'";
      break;
      case "status": $query = "UPDATE abono SET status='".$this->status."' WHERE id='".$this->id."'";
      break;
    }
	$this->execute($query);
    if($key=="insert"){ $this->lastInserted = mysql_insert_id(); }
  }

   public function getAbono($id = NULL){
    $query = 'SELECT abono.* , usuario.nombre AS usuario, cliente.nombre AS cliente, medio_cobro.descripcion AS medio_cobro
              FROM abono
 			  INNER JOIN usuario ON (abono.id_usuario = usuario.id)
			  INNER JOIN medio_cobro ON (abono.id_medio_cobro = medio_cobro.id)
			  INNER JOIN venta ON (abono.id_venta = venta.id)
              INNER JOIN cliente ON (venta.id_cliente = cliente.id)
			  WHERE abono.id > 0';
    if($id!=NULL) $query.=" AND id=".$id."";
    if($this->status!=NULL) $query .= " AND status=".$this->status;
	if($this->search!=NULL) $query .= " AND ".$this->search_field." LIKE '%".$this->search."%'";
	if($this->order!=NULL) $query .= " ORDER BY ".$this->order;
	if($this->limit!=NULL) $query .= " LIMIT ".$this->limit;
	return $this->execute($query);
  }

  function search($string){
      $this->arrayCollection = NULL;
      $this->sql->CONNECT();
      $query = "SELECT id,nombre FROM usuario WHERE nombre LIKE '%".$string."%' AND status='1'";
      $result = mysql_query($query) or die(mysql_error());
      while($row = mysql_fetch_assoc($result)) { $this->arrayCollection[] = $row; }
      return $this->arrayCollection;
  }


}
?>

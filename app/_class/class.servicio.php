<?php
require_once("class.helper.php");

class Servicio extends Helper {
  var $id;
  var $id_servicio;
  var $servicio;
  var $costo;
  var $tipo;
  var $status;

  public function __construct(){ $this->sql = new dbo(); }

  public function db($key){
    switch($key){
      case "insert":
	      $query = "INSERT INTO servicio (tipo,servicio,costo,status) VALUES ('".$this->tipo."','".$this->servicio."','".$this->costo."','".$this->status."')";
      break;
      case "insertPaquete":
        $query = "INSERT INTO servicio_atributos (id_servicio,paquete) VALUES ('".$this->id_servicio."','".$this->paquete."')";
      break;
      case "update":
	    $query = "UPDATE proveedor SET
					almacen = '".$this->almacen."',
					descripcion = '".$this->descripcion."',
					fecha_reg = '".$this->fecha_reg."',
					status = '".$this->status."'
				  WHERE id='".$this->id."'";
      break;
      case "delete": $query = "UPDATE proveedor SET status = '0' WHERE id='".$this->id."'";
      break;
    }
	if($key=="insert"){ $lid = true; }
    $this->execute($query,$lid);
    if($lid){ return $lid; }
  }

  public function getServicios($id = NULL){
    $query = 'SELECT * FROM servicio WHERE id > 0';
    if($id!=NULL) $query.=" AND id=".$id."";
    if($this->status!=NULL) $query .= " AND status=".$this->status;
	  if($this->search!=NULL) $query .= " AND ".$this->search_field." LIKE '".$this->search."%'";
	  if($this->order!=NULL) $query .= " ORDER BY ".$this->order;
	  if($this->limit!=NULL) $query .= " LIMIT ".$this->limit;
	  return $this->execute($query);
  }

}
?>

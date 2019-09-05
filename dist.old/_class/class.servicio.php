<?php
require_once("class.helper.php");

class Servicio extends Helper {
  var $id;
  var $nombre;
  var $costo;
  var $descripcion;
  var $status;

  public function __construct(){ $this->sql = new dbo(); }

  public function db($key){
    switch($key){
      case "insert":
      $query = "INSERT INTO servicio (nombre,costo,descripcion,status)
                VALUES ('".$this->nombre."','".$this->costo."','".$this->descripcion."','".$this->status."')";
	    break;
      case "update": $query = "UPDATE usuario SET tipo_usuario = '".$this->tipo_usuario."',
		                                          nombre = '".$this->nombre."',
		                                          correo = '".$this->correo."',
		                                          contrasena = '".$this->contrasena."' WHERE id='".$this->id."'";
      break;
      case "delete": $query = "UPDATE usuario SET e = '".$this->e."' WHERE id='".$this->id."'";
      break;
      case "estatus": $query = "UPDATE usuario SET estatus = '".$this->estatus."' WHERE id='".$this->id."'";
      break;
    }
    $lid = false;
    if($key=="insert"){ $lid = true; }
    $this->execute($query,$lid);
  }

  public function getLastInserted(){ return $this->lastInserted; }



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

var Nertek = Nertek || {};

Nertek.Usuarios = function(data,wrapper,timeline){
  this.id;
  this.nombre;
  this.alias;
  this.email;
  this.collection;
  this.DAO = new Nertek.DAO();
  this.init();
};

Nertek.Usuarios.prototype = {
  init:function(){
    var _self = this;
  }
}
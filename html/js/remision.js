var Nertek = Nertek || {};
Nertek.Remision = function(data,wrapper,timeline){
	this.data = data;
	this.wrapperEl = wrapper;
	this.timeline = timeline;
	this.currEvent = 0;
	this.facturado;
	this.bullets = [];
	this.mX = this.mY = 0;
	this.ref = "remision";
	this.init();
};

Nertek.Remision.prototype = {
  init: function(){
    var _self = this;
  },
  save: function(){
    var _self = this;
	var data = { 
	  uid : 0,
	  atn : "Ing. Alfredo Campos",
	  fecha: "",
	  vigencia: "60",
	  cliente: { id: 0, alias: "Plata Forja", ubicacion: "Monterrey N.L," },
	  partidas: { } || [],
	  subtotal : 0.0,
	  iva : 0.16,
	  notas : " ",
	}
	_self.DAO.insert(function(){ 
	  // enviar PDF
	});
  }
}


/*
remision = function(){ 
  this.atn = "S/N";
  this.id_cliente;
  this.id;
  this.cuenta_no;
  this.fecha;
  this.id_usuario;
  this.vigencia;
  this.iva = .16;
  this.partidas = {} || [];
  this.status = 0;
}

var Nertek = Nertek || {};
Nertek.Remision = function(data,wrapper,timeline){
	this.data = data;
	this.wrapperEl = wrapper;
	this.timeline = timeline;
	this.currEvent = 0;
	this.bullets = [];
	this.mX = this.mY = 0;
	this.init();
};

Yakuza.Remision.prototype = {
}
*/
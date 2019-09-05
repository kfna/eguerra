/* KFNA - Web App */
var App = App || {};
App.Servicio = function(){
	this.data;
	this.DAO;
	this.ref = "servicio";
	this.init();
};

App.Servicio.prototype = {
  init: function(){
    var _self = this;
	  _self.DAO = new App.DAO();
	  _self.addEventListeners();
  },
  animations: function(){ },
	addEventListeners: function(file){
    var _self = this;
    $("section#servicio").on("click","a.onClick",function(){
      switch($(this).data("exec")){
        case "save": _self.save($(this)); break;
				case "savePaquete": _self.savePaquete($(this)); break;
      }
    });

	},
  save: function(e){
    var _self = this;
		var el = "#"+e.closest("form").attr("id");
    var objForm = new App.Forms();
    objForm.reset(el);
    if(!objForm.validate(el)) return;
    var data = _self.DAO.toObject($(el).serializeArray());
    var result = function(r){
      if(r.status==200){
        alert("elemento guardado");
      }else{
        $("#notice").addClass("show");
        setTimeout(function(){ $("#notice").removeClass("show");  },5000);
      }
    }
    _self.DAO.execute(_self.ref, { exec: "save", data: data},result);
  },
	savePaquete: function(e){

		var _self = this;
		var el = "#"+e.closest("form").attr("id");
    var objForm = new App.Forms();
    objForm.reset(el);
    if(!objForm.validate(el)) return;
    var data = _self.DAO.toObject($(el).serializeArray(),"text");
		var servicios = [];
		$('#tblSelServicios input[type=checkbox]:checked').each(function (index, value) {
			var idx = $(this).data("idx");
			  var articulo = { id : _self.data[idx].id, servicio : _self.data[idx].servicio, costo : _self.data[idx].costo };
				if($("#costo_"+idx).val()!=""){ articulo.costo =  $("#costo_"+idx).val(); }
				servicios.push(articulo);
		});

		data.servicios = servicios;


    var result = function(r){
      if(r.status==200){
        alert("elemento guardado");
      }else{
        $("#notice").addClass("show");
        setTimeout(function(){ $("#notice").removeClass("show");  },5000);
      }
    }
    _self.DAO.execute(_self.ref, { exec: "savePaquete", data: data},result);

  },
	setData: function(collection){
	  var _self = this;
		_self.data = collection;
	},
	getData: function(){
	  var _self = this;
		return _self.data;
	},
	datagrid: function(el){
		var result = function(r){
      if(r.status==200){
        alert("elemento guardado");
      }else{
        $("#notice").addClass("show");
        setTimeout(function(){ $("#notice").removeClass("show");  },5000);
      }
    }
    _self.DAO.execute(_self.ref, { exec: "save", data: data},result);

	},
}

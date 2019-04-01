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

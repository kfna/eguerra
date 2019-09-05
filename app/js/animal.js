/* KFNA - Web App */
var App = App || {};
App.Animal = function(){
	this.data;
	this.Datagrid;
	this.ref = "animal";
	this.init();
};

App.Animal.prototype = {
  init: function(){
    var _self = this;
	  _self.addEventListeners();
		if(DEBUG){ console.log("Animal Module is Ready..."); }
  },
  animations: function(){ },
	addEventListeners: function(file){
    var _self = this;
    $("section#animal").on("click","a.onClick",function(){
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
    var data = objDAO.DAO.toObject($(el).serializeArray());
    var result = function(r){
      if(r.status==200){
        alert("elemento guardado");
      }else{
        $("#notice").addClass("show");
        setTimeout(function(){ $("#notice").removeClass("show");  },5000);
      }
    }
    objDAO.execute(_self.ref, { exec: "save", data: data},result);
  },
	getList: function(map){
		var _self = this;
		var result = function(r){

      if(r.status==200){
        var data = r.json;
				var buffer = '';
				for(var i=0;i<data.length;i++){ buffer +='<option>'+data[i].cliente+'</option>'; }

				$("#lstClientes").html(buffer);
      }else{
        $("#notice").addClass("show");
        setTimeout(function(){ $("#notice").removeClass("show");  },5000);
      }
    }
    objDAO.execute(_self.ref, { exec: "getList", data: null},result);
	},
}

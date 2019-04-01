/* KFNA - Web App */
var App = App || {};
App.Cliente = function(){
	this.data;
	this.DAO;
	this.Datagrid;
	this.ref = "cliente";
	this.init();
};

App.Cliente.prototype = {
  init: function(){
    var _self = this;
	  _self.DAO = new App.DAO();
	  _self.addEventListeners();
  },
  animations: function(){ },
	addEventListeners: function(file){ },
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
    _self.DAO.execute(_self.ref, { exec: "getList", data: null},result);

	},
}

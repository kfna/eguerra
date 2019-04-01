/* KFNA - Web App */
var App = App || {};
App.Auth = function(){
	this.data;
	this.DAO;
	this.ref = "auth";
	this.init();
};

App.Auth.prototype = {
  init: function(){
    var _self = this;
	  _self.DAO = new App.DAO();
	  _self.addEventListeners();
    _self.animations();
  },
  animations: function(){
    $("#login form").removeClass("onReady");
  },
	addEventListeners: function(file){
    var _self = this;
    $("#formAuth").on("click","a.onClick",function(){
      switch($(this).data("exec")){
        case "auth": _self.auth(); break;
      }
    });
	},
  auth: function(){
    var _self = this;
    var objForm = new App.Forms();
    objForm.reset($("#formAuth"));
    if(!objForm.validate($("#formAuth"))) return;
    //form reset errors
    var data = _self.DAO.toObject($("#formAuth").serializeArray());

    var result = function(r){
      if(r.status==200){
        window.location = r.redirect;
      }else{
        $("#notice").addClass("show");
        setTimeout(function(){ $("#notice").removeClass("show");  },5000);
      }
    }

    _self.DAO.execute(_self.ref, { exec: "auth", data: data},result);
  },
}

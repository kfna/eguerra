/* FORMS */

var App = App || {};
App.Forms = function(){
	this.init();
	this.el;
};

App.Forms.prototype = {
  init : function(){
	var _self = this;
    _self.addEventListeners();
    if(DEBUG){ console.log("Forms Module is Ready..."); }
  },
  addEventListeners: function(file){
    var _self = this;
    $(document).on("click","form a.onClick",function(){

      switch($(this).data("exec")){
        case "save": _self.save($(this)); break;
				case "saveAbono": _self.saveAbono($(this)); break;
      }
    });
  },
  save: function(e){
    var _self = this;
	  var el = "#"+e.closest("form").attr("id");
	  var ctrl = e.closest("form").data("model");
    _self.reset(el);
    if(!_self.validate(el)) return;
    var data = objDAO.toObject($(el).serializeArray());
    var result = function(r){
      if(r.status==202){
        alert("elemento guardado");
      }else{
        $("#notice").addClass("show");
        setTimeout(function(){ $("#notice").removeClass("show");  },5000);
      }
    }
    objDAO.execute(ctrl, { exec: "save", data: data},result);
  },
	saveAbono: function(e){
    var _self = this;
	  var el = "#"+e.closest("form").attr("id");
	  var ctrl = e.closest("form").data("model");
    _self.reset(el);
    if(!_self.validate(el)) return;
    var data = objDAO.toObject($(el).serializeArray());
    var result = function(r){
      if(r.status==202){
        alert("elemento guardado");
      }else{
        $("#notice").addClass("show");
        setTimeout(function(){ $("#notice").removeClass("show");  },5000);
      }
    }
    objDAO.execute(ctrl, { exec: "abono", data: data},result);
  },
  validate : function(el){
    var flag = true;
    return flag;
  },
  reset : function(el){
    //remove all errors and notices
  }
};

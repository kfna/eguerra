/* DAO */

var App = App || {};
App.DAO = function(data){
	this.data = data;
	this.init();
};

App.DAO.prototype = {
  init : function(){ console.log("DAO is ready...");   },
	execute: function (ctrl, data, callback) {
		$.ajax({
			type: "POST",
			url: "_ctrl/ctrl."+ctrl+".php",
			data: data,
			dataType: "json",
			success: function (r) { callback(r); },
			error: function (r) { console.log(r); }
	  });
  },
  toObject : function(form,include){
    var data = {};
		console.log("asdasfasfasfafa");
    $.each(form, function(key,element){
			console.log("----");
			console.log("EL"+element);
			console.log($("#"+element.name).prop('nodeName');
			console.log("----");
			console.log("asdasfasfasfafa");
		  data[element.name] = element.value;
		});
	  return data;
  },
}

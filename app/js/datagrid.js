/* DAO */

var App = App || {};
App.Datagrid = function(data,wrapper,timeline){
	this.data = data;
	this.init();
};

App.Datagrid.prototype = {
  init : function(params){
		var _self = this;
	},
	execute: function (params) {
		$.ajax({
			type: "POST",
			url: "_ctrl/ctrl."+params.ctrl+".php",
			data: params.data,
			dataType: "json",
			success: function (r) { params.callback(r); },
			error: function (r) { console.log(r); }
	  });
  },
  toObject : function(form){
    var data = {};
    $.each(form, function(key,element){ data[element.name] = element.value; });
	  return data;
  },
}

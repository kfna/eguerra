/* DAO */

var App = App || {};
App.Datagrid = function(data,wrapper,timeline){
	this.data = data;
	this.init();
};

App.Datagrid.prototype = {
  init : function(params){
		var _self = this;
		_self.addEventListeners();
		if(DEBUG){ console.log("DATAGRID Module is Ready..."); }
	},
	addEventListeners: function(file){
		var _self = this;
		$(document).on("click",function(){
			//if($(".more ul").is(":visible")){ $()}
		});
		$(document).on("click","table a.onClick",function(){
      switch($(this).data("exec")){
        case "delete": _self.delete(this); break;
				case "update": _self.update(this); break;
				case "more": _self.openActions(this); break;
      }
    });

  },
	openActions : function (e){
		$("table .more ul").hide();
		$(e).next().toggle();
	},
	delete : function(e){
		var id = $(e).closest("tr").data("id");
		var ctrl = $(e).closest("table").data("ctrl");
		if(confirm("Confimrar")){
			objDAO.execute(ctrl,{ exec : "delete", id: id},function(r){
				console.log(r);
			});
		}
	},
	update : function(e){
		var id = $(e).closest("tr").data("id");
		var ctrl = $(e).closest("table").data("ctrl");
		var obj = _.findWhere(Page.data, { id : id.toString() });
		//asignar al form
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
	renderTable : function(data,el){
    var body = el.find("tbody").html();
		var columns = [];
		var regExp = /\{.*?\}/g;
		var fields = [];
		while (m = regExp.exec(body)){
			var tmp = { column : m[0].replace("{","").replace("}",""), str: m[0] };
			fields.push(tmp);
		}
		var buffer = '';
		for(var i=0;i<data.length;i++){
			var new_buffer = body;
			for(var j=0;j<fields.length;j++){
				var value = data[i][fields[j]["column"]];
				new_buffer = new_buffer.replace(fields[j].str,value);
			}
			buffer += new_buffer;
		};
		el.find("tbody").html(buffer);
		el.find("tbody").fadeIn();
	}
}

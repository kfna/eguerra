/* DAO */

var App = App || {};
App.Datagrid = function(data,wrapper,timeline){
	this.data = data;
	this.template;
	this.searchColumns;
	this.table;
	this.pagination = { limit: 15, index: 0, total:0, records: 0, offset:0, page: 0 }
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

		$(document).on("click","ul.pagination li a",function(){

			_self.pagination.page = $(this).data("idx");
			_self.pagination.offset = _self.pagination.page*_self.pagination.limit;
			_self.renderTable(Page.data);
    });


		$("#search").keyup(function(){
      var term = $(this).val();
			var result = [];
			if(term!=""){
				var tempResult = [];
				for(var i=0;i<_self.searchColumns.length;i++){
					result = _.filter(Page.data, function(obj){ return obj[_self.searchColumns[i]].toLowerCase().indexOf(term) > -1; });

				}

				_self.renderTable(result);
			}
			if(term.length==0){
				 _self.renderTable(Page.data);
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
	setTable : function(el){
		var _self = this;
		_self.table = el;
		var body = el.find("tbody").html();
		var columns = [];
		if(el.data("search")) var search = el.data("search").split(",");
		_self.searchColumns = search;
		var regExp = /\{.*?\}/g;
		var fields = [];
		while (m = regExp.exec(body)){
			var tmp = { column : m[0].replace("{","").replace("}",""), str: m[0] };
			fields.push(tmp);
		}
		_self.template = { body: body, fields: fields };



  },
	paginate : function(){
		var _self = this;
		var params = _self.pagination;
		var buffer = '';
		for(var i=0;i<params.total;i++){ buffer += '<li><a href="#" data-idx="'+i+'">'+(i+1)+'</a></li>'; }
		$("div.pagination").html('<ul class="pagination">'+buffer+'</ul>');
	},
	renderTable : function(data){
		var _self = this;
		var fields = _self.template.fields;
		var body = _self.template.body;
		var buffer = '';
		if(data==undefined){ _self.table.find("tbody").empty(); return; }


		_self.pagination.total = Math.ceil(data.length/_self.pagination.limit);
		_self.pagination.records = data.length;
		_self.paginate();

		var from = _self.pagination.offset;
		var to = (_self.pagination.offset+_self.pagination.limit);
		if(to>_self.pagination.records){ to = (_self.pagination.records-1); }
		if(data.length==1){ from = 0; to = 1; }



		console.log("TO:"+to+"FROM: "+from);

		for(var i=from;i<to;i++){
			var new_buffer = body;
			for(var j=0;j<fields.length;j++){
				var value = data[i][fields[j]["column"]];
				new_buffer = new_buffer.replace(fields[j].str,value);
			}
			buffer += new_buffer;
		};
		_self.table.find("tbody").empty().html(buffer);
		_self.table.find("tbody").fadeIn();
	}
}

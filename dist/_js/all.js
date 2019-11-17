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
  toObject : function(form){
    var data = {};
    $.each(form, function(key,element){ data[element.name] = element.value; });
	  return data;
  },
}

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

var DEBUG = true;

$(document).ready(function(e){
 objUI = new App.UI();
 objDAO = new App.DAO();
 objDatagrid = new App.Datagrid();
 objForms = new App.Forms();
 App.onReady();
});

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

/* KFNA - Web App */
var App = App || {};

App.UI = function(){
  this.modalParams = [];
  this.init();
};

App.UI.prototype = {
  init: function(){
    var _self = this;
	  _self.addEventListeners();
	  _self.nav();
    _self.dropdowns();
    //_self.autoComplete();
    if(DEBUG){ console.log("UIX Module is Ready..."); }
  },
  addEventListeners: function(){
    var _self = this;
    $(document).on("click","a.onClick",function(){
      switch($(this).data("exec")){
        case "modal": _self.modal(this,null); break;
        case "modalUpdate": _self.modalUpdate(this); break;
      }
    });
    $(document).on('keyup',function(evt) {
      if(evt.keyCode == 27) {
      if($("#modal").is(":visible")){ $("#modal").fadeOut(); }
      }
    });

  },
  modal:function(e,data){
    var _self = this;
    var src = $(e).data("src")+".html";
    var id = $(e).data("id");
    _self.modalParams = [];
    _self.modalParams.push(id);
    $('#modal .window').hide();
    var ts = Math.round((new Date()).getTime() / 1000);
    $('#modal .window').load(src+"?ts="+ts,function(){
      $("#modal").show();
      $("#modal .window").fadeIn();
      Form.init();
    });


  },
  getModalParams: function(){
    var _self = this;
    return _self.modalParams;
  },
  modalUpdate: function(e){
    var _self = this;
    var id = $(e).closest("tr").data("id");
    var src = $(e).data("src")+".html";
    var obj = _.findWhere(Page.data, { id: id.toString() });
    $('#modal .window').hide();
    $('#modal .window').load(src,function(){
      $("#modal .window form input").each(function(){
        var eid = $(this).attr("id");
        $(this).val(obj[eid]);

      });
      $("a#btnSave").html("Actualizar");
      $("a#btnSave").attr("data-exec","update");
      console.log($("a#btnSave"));
      $("#modal").show();
      $("#modal .window").fadeIn();
    });

  },
  nav: function(){
	  $("nav ul li a.onClickExpand").click(function(){
		$("nav ul li.sub").slideUp();
	    $(this).parent().next().slideToggle();
	  });

  },
  dropdowns: function(){
    $(".dropdown h5").click(function(){ $(this).parent().find(".option").slideToggle(); });
    $(document).on("click",".dropdown .option ul li",function(){
      var val = { value: $(this).val(),text: $(this).html() };
      $(this).parents().find(".option").slideUp();
      $(this).parents().find("input[type='hidden']").val(val.value);
      $(this).parents().find("h5").html(val.text);
    });
    /* RECUPERA DATOS */

    $(".dropdown").each( function() {
      var config = {} || [];
      config.source = $(this).data("source");
      config.search = $(this).data("search");
      config.exec = $(this).data("exec");
      config.el = $(this).find("ul");
      objDAO.execute(config.source, { exec: config.exec, data: null},
        function(r){
          if(r.status==202){
            var buffer = '';
            var data = r.json.data;
            for(var i=0;i<data.length;i++){
              buffer += '<li value="'+data[i].id+'">'+data[i].label+'</li>';
            }

            $(config.el).append(buffer);
          }else{
            // no hay datos que mostrar..
          }
        });
    });

  },
  autocomplete: function(){
    $(".dropdown h5").click(function(){ $(this).parent().find(".option").slideToggle(); });
    $(document).on("click",".dropdown .option ul li",function(){
      var val = { value: $(this).val(),text: $(this).html() };
      $(this).parents().find(".option").slideUp();
      $(this).parents().find("input[type='hidden']").val(val.value);
      $(this).parents().find("h5").html(val.text);
    });
    /* RECUPERA DATOS */

    $("input.isAutocomplete").each( function() {
      var config = {} || [];
      config.source = $(this).data("source");
      config.search = $(this).data("search");
      config.exec = $(this).data("exec");
      config.el = $(this).find("ul");
      objDAO.execute(config.source, { exec: config.exec, data: null},
        function(r){
          if(r.status==202){
            var buffer = '';
            var data = r.json.data;
            for(var i=0;i<data.length;i++){
              buffer += '<li value="'+data[i].id+'">'+data[i].label+'</li>';
            }

            $(config.el).append(buffer);
          }else{
            // no hay datos que mostrar..
          }
        });
    });

  },

}

var Nertek = Nertek || {};

Nertek.Usuarios = function(data,wrapper,timeline){
  this.id;
  this.nombre;
  this.alias;
  this.email;
  this.collection;
  this.DAO = new Nertek.DAO();
  this.init();
};

Nertek.Usuarios.prototype = {
  init:function(){
    var _self = this;
  }
}
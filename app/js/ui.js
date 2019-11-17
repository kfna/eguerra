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

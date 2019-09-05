/* KFNA - Web App */
var App = App || {};

App.UI = function(){ this.init(); };

App.UI.prototype = {
  init: function(){
    var _self = this;
	_self.addEventListeners();
	_self.nav();
    if(DEBUG){ console.log("UI Module is Ready..."); }
  },
  addEventListeners: function(file){
	  
  },
  nav: function(){ 
	  $("nav ul li a.onClickExpand").click(function(){ 
		$("nav ul li.sub").slideUp();
	    $(this).parent().next().slideToggle();
	  });
    
  },
	
}

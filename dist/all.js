var App,Forms,Notices,Nertek;(Nertek=Nertek||{}).DAO=function(t,i,e){this.data=t,this.wrapperEl=i,this.timeline=e,this.currEvent=0,this.bullets=[],this.mX=this.mY=0,this.init()},Nertek.DAO.prototype={init:function(){console.log("DAO is ready...")}},(Nertek=Nertek||{}).Remision=function(t,i,e){this.data=t,this.DAO,this.wrapperEl=i,this.timeline=e,this.currEvent=0,this.facturado,this.bullets=[],this.mX=this.mY=0,this.ref="remision",this.init()},Nertek.Remision.prototype={init:function(){this.DAO=new Nertek.DAO,console.log("Remision Ready")},save:function(){this.DAO.insert(function(){})}},(App=App||{}).Auth=function(){this.data,this.DAO,this.ref="auth",this.init()},App.Auth.prototype={init:function(){var t=this;t.DAO=new App.DAO,t.addEventListeners(),t.animations()},animations:function(){$("#login form").removeClass("onReady")},addEventListeners:function(t){var i=this;$("#formAuth").on("click","a.onClick",function(){switch($(this).data("exec")){case"auth":i.auth()}})},auth:function(){var t=this,i=new App.Forms;if(i.reset($("#formAuth")),i.validate($("#formAuth"))){var e=t.DAO.toObject($("#formAuth").serializeArray());t.DAO.execute(t.ref,{exec:"auth",data:e},function(t){200==t.status?window.location=t.redirect:($("#notice").addClass("show"),setTimeout(function(){$("#notice").removeClass("show")},5e3))})}}},(App=App||{}).DAO=function(t,i,e){this.data=t,this.init()},App.DAO.prototype={init:function(){console.log("DAO is ready...")},execute:function(t,i,e){$.ajax({type:"POST",url:"_ctrl/ctrl."+t+".php",data:i,dataType:"json",success:function(t){e(t)},error:function(t){console.log(t)}})},toObject:function(t){var e={};return $.each(t,function(t,i){e[i.name]=i.value}),e}},(App=App||{}).Forms=function(){this.init()},App.Forms.prototype={init:function(){},validate:function(t){return!0},reset:function(t){}},(Nertek=Nertek||{}).Remision=function(t,i,e){this.data=t,this.wrapperEl=i,this.timeline=e,this.currEvent=0,this.bullets=[],this.mX=this.mY=0,this.init()},Yakuza.Remision.prototype={},(Nertek=Nertek||{}).Remision=function(t,i,e){this.data=t,this.wrapperEl=i,this.timeline=e,this.currEvent=0,this.bullets=[],this.mX=this.mY=0,this.init()},Yakuza.Remision.prototype={},(Nertek=Nertek||{}).DAO=function(t,i,e){this.data=t,this.wrapperEl=i,this.timeline=e,this.currEvent=0,this.bullets=[],this.mX=this.mY=0,this.init()},Yakuza.DAO.prototype={},(Nertek=Nertek||{}).Remision=function(t,i,e){this.data=t,this.wrapperEl=i,this.timeline=e,this.currEvent=0,this.facturado,this.bullets=[],this.mX=this.mY=0,this.ref="remision",this.init()},Nertek.Remision.prototype={init:function(){},save:function(){this.DAO.insert(function(){})}},(Nertek=Nertek||{}).Usuarios=function(t,i,e){this.id,this.nombre,this.alias,this.email,this.collection,this.DAO=new Nertek.DAO,this.init()},Nertek.Usuarios.prototype={init:function(){}};
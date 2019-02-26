var Nertek = Nertek || {};
Nertek.Remision = function(data,wrapper,timeline){
	this.data = data;
	this.wrapperEl = wrapper;
	this.timeline = timeline;
	this.currEvent = 0;
	this.bullets = [];
	this.mX = this.mY = 0;
	this.init();
};

Yakuza.Remision.prototype = {
}
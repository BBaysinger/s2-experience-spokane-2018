import * as createjs from 'createjs-module';

export var CanvasAnimation = function(settings)
{
	window.createjs = createjs;
	var self = this;

	this.settings = settings;

	this.exportRootName = settings.exportRootName;
	this.exportRoot;

	this.animClassName = settings.animClass;

	this.canvas = settings.canvas;
	this.wrapper = settings.wrapper;
	this.anim_container = settings.anim_container;
	this.dom_overlay_container = (settings.dom_overlay_container) ? settings.dom_overlay_container : null;

	// console.info("this.canvas ", this.canvas)
	// console.info("this.wrapper ", this.wrapper)
	// console.info("this.anim_container ", this.anim_container)

	this.respDim = (settings.respDim) ? settings.respDim : "both";
	this.scaleType = (settings.scaleType) ? settings.scaleType : "1";
	this.scaleToWin = (settings.scaleToWin) ? settings.scaleToWin : false;
	this.scaleToWidth = (settings.scaleToWidth) ? settings.scaleToWidth : false;
	this.scaleToHeight = (settings.scaleToHeight) ? settings.scaleToHeight : false;
	this.scaleToContainer = (settings.scaleToContainer) ? settings.scaleToContainer : false;
	this.scaleToBounds = (settings.scaleToBounds) ? settings.scaleToBounds : false;

	this.anim = new settings.animClass({}, {}, createjs, {}, {});

	this.stage;
	var loader = new createjs.LoadQueue(true);
	loader.addEventListener("fileload", this.handleFileLoad.bind(this));
	loader.addEventListener("complete", this.handleComplete.bind(this));

	// loader.on("complete", function(event) {
  //  console.info("complete");
 	// }, this);
	// loader.on("fileload", function(event) {
  //  console.info("fileload");
 	// }, this);
	// loader.on("progress", function(event) {
  //  console.info("progress");
 	// }, this);
	// loader.on("error", function(event) {
  //  console.info("error");
 	// }, this);
	// loader.on("fileerror", function(event) {
  //  console.info("fileerror");
 	// }, this);
	//
	// console.info(this.anim.lib.properties.manifest);

	loader.loadManifest(this.anim.lib.properties.manifest);

}

CanvasAnimation.prototype.handleFileLoad = function(evt) {
	var self = this;
	if (evt.item.type == "image") { self.anim.img[evt.item.id] = evt.result; }
}
CanvasAnimation.prototype.handleComplete = function(evt) {
	var self = this;

	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = self.anim.lib.ssMetadata;
	for(var i=0; i<ssMetadata.length; i++)
	{
		self.anim.ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}

	self.exportRoot = new self.anim.lib[self.exportRootName]();
	this.stage = new createjs.Stage(self.canvas);
	this.stage.addChild(self.exportRoot);
	//Registers the "tick" event listener.
	this.anim.cjs.Ticker.setFPS(self.anim.lib.properties.fps);
	this.anim.cjs.Ticker.addEventListener("tick", this.stage);

	this.wrapper.className += " loaded";

	self.exportRoot.gotoAndStop(0);

	window.addEventListener('resize', this.resizeCanvas.bind(this));

	// DISPATCH EVENT FOR CANVAS LOADED
	// var event = document.createEvent("Event");
	// event.initEvent("loaded", true, true);
	// $(self.wrapper)[0].dispatchEvent(event);

	this.resizeCanvas();
}

CanvasAnimation.prototype.resizeCanvas = function()
{
	var self = this;
	var isResp = true;
	var respDim = self.respDim;
	var isScale = true;
	var scaleType = self.scaleType;

	var lastW, lastH, lastS=1;
	var w = self.anim.lib.properties.width, h = self.anim.lib.properties.height;
	var iw, ih;


	if (self.scaleToWin)
	{
		iw = window.innerWidth;
		ih = window.innerHeight;
		var pRatio = 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
		// console.info(this.exportRootName, " scale to fill window ", iw, ih);
		if(isResp)
		{
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
				sRatio = lastS;
			}
			else if(!isScale) {
				if(iw<w || ih<h)
					sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==1) {
				sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==2) {
				sRatio = Math.max(xRatio, yRatio);
			}
		}

		self.canvas.width = w*pRatio*sRatio;
		self.canvas.height = h*pRatio*sRatio;
		self.canvas.style.width = w*sRatio+'px';
		self.canvas.style.height = h*sRatio+'px';
	}
	else if (self.scaleToBounds)
	{
		iw = self.settings.scaleBoundsW;
		ih = self.settings.scaleBoundsH;
		var pRatio = 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
		console.info(this.exportRootName, " scale to fill bounds ", iw, ih);
		if(isResp)
		{
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
				sRatio = lastS;
			}
			else if(!isScale) {
				if(iw<w || ih<h)
					sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==1) {
				sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==2) {
				sRatio = Math.max(xRatio, yRatio);
			}
		}

		self.canvas.width = w*pRatio*sRatio;
		self.canvas.height = h*pRatio*sRatio;
		self.canvas.style.width = w*sRatio+'px';
		self.canvas.style.height = h*sRatio+'px';
	}
	else if (self.scaleToHeight)
	{
		// SCALE TO FIT HEIGHT
		iw = self.wrapper.width();
		ih = self.wrapper.height();
		console.info(this.exportRootName, " scale to height ", iw, ih);
		var pRatio = 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;

		if (lastH != ih)
			sRatio = yRatio;
		self.canvas.width = w*pRatio*sRatio;
		self.canvas.height = h*pRatio*sRatio;
		self.canvas.style.width = w*sRatio+'px';
		if (self.dom_overlay_container)
			self.dom_overlay_container.style.width = w*sRatio+'px';
		self.canvas.style.height = h*sRatio+'px';
		if (self.dom_overlay_container)
			self.dom_overlay_container.style.height = h*sRatio + "px";
	}
	else if (self.scaleToWidth)
	{
		// SCALE TO FIT WIDTH
		iw = self.wrapper.clientWidth;
		ih = self.wrapper.clientHeight;
		// console.info(this.exportRootName, " scale to width ", iw, ih);
		var pRatio = 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;

		if (lastW != iw)
			sRatio = xRatio;

		self.canvas.width = w*pRatio*sRatio;
		self.canvas.height = h*pRatio*sRatio;
		self.canvas.style.width = w*sRatio+'px';
		if (self.dom_overlay_container)
			self.dom_overlay_container.style.width = w*sRatio+'px';
		self.canvas.style.height = h*sRatio+'px';
		if (self.dom_overlay_container)
			self.dom_overlay_container.style.height = h*sRatio + "px";

		lastW = iw;
	}
	else if (self.scaleToContainer)
	{
		// SCALE TO FIT WIDTH
		iw = self.wrapper.width();
		ih = self.wrapper.height();
		// console.info(this.exportRootName, " scale to width ", iw, ih);
		var pRatio = 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;

		sRatio = Math.min(xRatio, yRatio);

		self.canvas.width = iw;
		self.canvas.height = ih;
		self.canvas.style.width = iw+'px';
		if (self.dom_overlay_container)
			self.dom_overlay_container.style.width = iw+'px';
		self.canvas.style.height = ih+'px';
		if (self.dom_overlay_container)
			self.dom_overlay_container.style.height = ih + "px";
	}
	else
	{
		iw = self.wrapper.width();
		ih = self.wrapper.height();
		// console.info(this.exportRootName, " scale custom ", w, h, iw, ih);
		var pRatio = 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;

		if((self.respDim=='width'&&lastW==iw) || (self.respDim=='height'&&lastH==ih)) {
			sRatio = lastS;
		}
		else if(!isScale) {
			if(iw<w || ih<h)
				sRatio = Math.min(xRatio, yRatio);
		}
		else if(self.scaleType==1) {
			sRatio = Math.min(xRatio, yRatio);
		}
		else if(self.scaleType==2) {
			sRatio = Math.max(xRatio, yRatio);
		}

		self.canvas.width = w*pRatio*sRatio;
		self.canvas.height = h*pRatio*sRatio;
		self.canvas.style.width = w*sRatio+'px';
		if (self.dom_overlay_container)
			self.dom_overlay_container.style.width = w*sRatio+'px';
		self.canvas.style.height = h*sRatio+'px';
		if (self.dom_overlay_container)
			self.dom_overlay_container.style.height = h*sRatio + "px";
	}

	// console.info("sRatio ", sRatio)

	this.stage.scaleX = pRatio*sRatio;
	this.stage.scaleY = pRatio*sRatio;
	lastW = iw; lastH = ih; lastS = sRatio;

	// console.info("final canvas size: ", self.canvas.width, self.canvas.height);
	// console.info("final stage scale: ", this.stage.scaleX, this.stage.scaleY);
	// console.info("-----------------------")

	this.stage.tickOnUpdate = false;
	this.stage.update();
	this.stage.tickOnUpdate = true;
}

CanvasAnimation.prototype.destroy = function()
{
	window.removeEventListener('resize', this.resizeCanvas.bind(this));
	this.wrapper.remove();
};

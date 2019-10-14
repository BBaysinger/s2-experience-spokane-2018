import * as createjs from 'createjs-module';

export var AnimHill = function(lib, img, cjs, ss, an) {
  this.lib = lib;
  this.img = img;
  this.cjs = cjs;
  this.ss = ss;
  this.an = an;
	var p;

	lib.ssMetadata = [
		{name:"experienceSpokane_nature_atlas_", frames: [[0,420,307,126],[0,0,1017,418],[309,420,117,315],[514,420,48,128],[428,420,84,227]]}
];


// symbols:



(lib.cloud = function() {
	this.spriteSheet = ss["experienceSpokane_nature_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.hill = function() {
	this.spriteSheet = ss["experienceSpokane_nature_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tree_1 = function() {
	this.spriteSheet = ss["experienceSpokane_nature_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.tree_2 = function() {
	this.spriteSheet = ss["experienceSpokane_nature_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.tree_3 = function() {
	this.spriteSheet = ss["experienceSpokane_nature_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tree_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tree_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tree_3_1, new cjs.Rectangle(0,0,84,227), null);


(lib.tree_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tree_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tree_2_1, new cjs.Rectangle(0,0,48,128), null);


(lib.tree_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tree_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tree_1_1, new cjs.Rectangle(0,0,117,315), null);


(lib.cloud_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.93,0.93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud_1, new cjs.Rectangle(0,0,285.5,117.2), null);


(lib.woods = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.hill();
	this.instance.parent = this;
	this.instance.setTransform(-833,-343,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.woods, new cjs.Rectangle(-833,-343,834,342.8), null);


(lib._3_nature = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.tree_3_1();
	this.instance.parent = this;
	this.instance.setTransform(604,241,1,1,0,0,0,42,227);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:0.9,x:604.1},74).to({skewX:0,x:604},76).to({skewX:0.9,x:604.1},56).to({skewX:0,x:604},73).wait(1));

	// Layer_3
	this.instance_1 = new lib.tree_2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(419.4,269,1,1.001,0,1.8,0,24,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1,skewX:0,x:419.3},71).to({scaleY:1,skewX:1.8,x:419.4},75).to({scaleY:1,skewX:0,x:419.3},71).to({scaleY:1,skewX:1.8,x:419.4},62).wait(1));

	// Layer_2
	this.instance_2 = new lib.tree_1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(497.5,335,1,1,0,-0.9,0,58.5,315);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:58.6,skewX:0,x:497.7,y:335.1},154).to({regX:58.5,skewX:-0.9,x:497.5,y:335},125).wait(1));

	// Layer_1
	this.instance_3 = new lib.woods();
	this.instance_3.parent = this;
	this.instance_3.setTransform(417,432.2,1,1.038,0,0,0,-417,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(280));

	// cloud
	this.instance_4 = new lib.cloud_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(665.1,32.2,0.571,0.494,0,0,180,142.6,58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:652.1},119).to({x:665.1},160).wait(1));

	// cloud
	this.instance_5 = new lib.cloud_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(350.6,118.6,0.736,0.736,0,0,0,142.8,58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:356.4},59,cjs.Ease.get(-1)).to({x:363.6},73,cjs.Ease.get(1)).to({x:357.4},70,cjs.Ease.get(-1)).to({x:350.6},77,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,3.2,834,428.6);


// stage content:
(lib.experienceSpokane_nature = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3_nature
	this.instance = new lib._3_nature();
	this.instance.parent = this;
	this.instance.setTransform(417,363.2,1,1,0,0,0,417,197);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(280));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(418,469.4,834,428.6);
// library properties:
lib.properties = {
	id: 'AC456CF807874CD2AE06DE15469D525C',
	width: 834,
	height: 600,
	fps: 60,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"assets/images/atlases/experienceSpokane_nature_atlas_.png?1531936890888", id:"experienceSpokane_nature_atlas_"}
	],
	preloads: []
};



	// bootstrap callback support:

	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();

	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}

	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};

	an.compositions = an.compositions || {};
	an.compositions['AC456CF807874CD2AE06DE15469D525C'] = {
		getStage: function() { return exportRoot.getStage(); },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};

	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}

	an.getComposition = function(id) {
		return an.compositions[id];
	}

}

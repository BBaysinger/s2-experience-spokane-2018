import * as createjs from 'createjs-module';

export var AnimPaddler = function(lib, img, cjs, ss, an) {
  this.lib = lib;
  this.img = img;
  this.cjs = cjs;
  this.ss = ss;
  this.an = an;
	var p;

	lib.ssMetadata = [
			{name:"experienceSpokane_paddleboarder_atlas_", frames: [[457,1223,233,227],[705,441,271,282],[692,1223,175,205],[692,1430,175,205],[651,932,240,289],[0,1109,214,279],[0,0,867,439],[893,932,99,648],[216,1190,239,224],[338,1580,188,170],[363,932,286,256],[0,1534,336,113],[528,1637,187,95],[368,1452,307,126],[0,1416,366,116],[869,116,126,38],[985,0,28,37],[0,747,361,360],[0,441,703,304],[363,747,624,183],[869,0,114,114]]}
	];


	// symbols:



	(lib.Asset10 = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.Asset11 = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.Asset12 = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.Asset13 = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.Asset14 = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.Asset15 = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.Asset16 = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.Asset6 = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.Asset7 = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();



	(lib.Asset8 = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();



	(lib.Asset9 = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();



	(lib.big_rock_base = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();



	(lib.big_rock_details = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();



	(lib.bush_front = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();



	(lib.rockbase_front = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();



	(lib.small_rock_base = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();



	(lib.small_rock_details = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();



	(lib.sun = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();



	(lib.water = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();



	(lib.water_cover = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();



	(lib.water_texture = function() {
		this.spriteSheet = ss["experienceSpokane_paddleboarder_atlas_"];
		this.gotoAndStop(20);
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


	(lib.water_texture_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.instance = new lib.water_texture();
		this.instance.parent = this;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.water_texture_1, new cjs.Rectangle(0,0,114,114), null);


	(lib.Water_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#B7E2D7").s().p("AkCCJQgJgRgDgXQgDgsAlgVQBfg3CmBKQAxAWArAZQgNgLgLgNQg/hKBbg+QBmhFC/B6QBAAoA2AvQgggigbglQhhiBBSg4QCXhmDBDhQBgBwBDCFI+JAVg");
		this.shape.setTransform(96.5,21.1);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Water_1, new cjs.Rectangle(0,0,193,42.3), null);


	(lib.water_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.instance = new lib.water();
		this.instance.parent = this;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.water_1, new cjs.Rectangle(0,0,703,304), null);


	(lib.torso = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_2
		this.instance = new lib.Asset11();
		this.instance.parent = this;
		this.instance.setTransform(-120,-19);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.torso, new cjs.Rectangle(-120,-19,271,282), null);


	(lib.sun_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.instance = new lib.sun();
		this.instance.parent = this;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.sun_1, new cjs.Rectangle(0,0,361,360), null);


	(lib.right_leg = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Asset 14.png
		this.instance = new lib.Asset14();
		this.instance.parent = this;
		this.instance.setTransform(-156,-138);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.right_leg, new cjs.Rectangle(-156,-138,240,289), null);


	(lib.right_forearm = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Asset 13.png
		this.instance = new lib.Asset13();
		this.instance.parent = this;
		this.instance.setTransform(-99,-48);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.right_forearm, new cjs.Rectangle(-99,-48,175,205), null);


	(lib.Paddle = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Asset 6.png
		this.instance = new lib.Asset6();
		this.instance.parent = this;
		this.instance.setTransform(-16,-1);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Paddle, new cjs.Rectangle(-16,-1,99,648), null);


	(lib.lower_bottom = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_2
		this.instance = new lib.Asset9();
		this.instance.parent = this;
		this.instance.setTransform(-114,-57);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.lower_bottom, new cjs.Rectangle(-114,-57,286,256), null);


	(lib.left_leg = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Asset 15.png
		this.instance = new lib.Asset15();
		this.instance.parent = this;
		this.instance.setTransform(-114,-102);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.left_leg, new cjs.Rectangle(-114,-102,214,279), null);


	(lib.left_forearm = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Asset 7.png
		this.instance = new lib.Asset7();
		this.instance.parent = this;
		this.instance.setTransform(-70,-27);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.left_forearm, new cjs.Rectangle(-70,-27,239,224), null);


	(lib.left_arm = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_2
		this.instance = new lib.Asset8();
		this.instance.parent = this;
		this.instance.setTransform(-88,-64);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.left_arm, new cjs.Rectangle(-88,-64,188,170), null);


	(lib.head = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Asset 10.png
		this.instance = new lib.Asset10();
		this.instance.parent = this;
		this.instance.setTransform(-88,-58);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-88,-58,233,227), null);


	(lib.Bush_small = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#ABAD4C").s().p("AgLAqIgng2QgGgIAKgGQAKgGAGAJIAfAtIAHgIIAKgPIAJgPQAFgLgCgGQgEgKAKgDQALgDAEAKQAEAKgGAQQgDAIgJAPIgPAWQgKAMgLADIgCAAQgFAAgFgFg");
		this.shape.setTransform(45,25.9);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#ABAD4C").s().p("AgLAqIgng2QgGgIAKgGQAKgGAGAJIAfAtIAHgIIAKgPIAJgPQAFgLgCgGQgEgKAKgDQALgDAEAKQAEAKgGAQQgDAIgJAPIgPAWQgKAMgLADIgCAAQgFAAgFgFg");
		this.shape_1.setTransform(69,25.9);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#ABAD4C").s().p("AgLAqIgng2QgGgIAKgGQAKgGAGAJIAfAtIAHgIIAKgPIAJgPQAFgLgCgGQgEgKAKgDQALgDAEAKQAEAKgGAQQgDAIgJAPIgPAWQgKAMgLADIgCAAQgFAAgFgFg");
		this.shape_2.setTransform(45,13.6);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#ABAD4C").s().p("AgLAqIgng2QgGgIAKgGQAKgGAGAJIAfAtIAHgIIAKgPIAJgPQAFgLgCgGQgEgKAKgDQALgDAEAKQAEAKgGAQQgDAIgJAPIgPAWQgKAMgLADIgCAAQgFAAgFgFg");
		this.shape_3.setTransform(25.8,23.1);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#625123").s().p("Al3DbQgsgCgZgsQgYgrAUgnQAUgnAygEQAygFAaAjQgCg2AGgiQAIgwAYggQAcglAvgIQAxgJAcAhQAYg7AHgLQAWgnAbAAQAuAAAgAwQAJAOAQAdQAPAaAOANQANgaAfgIQAegJAZAOQAZAPAHAfQAIAfgQAYQAYgXAjgDQAjgDAcASQAbATAMAgQALAigMAfQAQgTAcAKQAcALAEAZQAEAZgQAWQgQAWgZAJQgVAJgcABQgQAAgkgCQlKgVlIAqg");
		this.shape_4.setTransform(45.8,22.1);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Bush_small, new cjs.Rectangle(0,0,91.7,44.3), null);


	(lib.Bush_front = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#625123").s().p("AgLAeQgGAAgDgGIgRghQgFgLALgGQALgGAFALIAKASIAWgWQAJgIAJAJQAJAIgJAJIgjAiQgEADgFAAIgCAAg");
		this.shape.setTransform(269.1,110.7);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#625123").s().p("AgLAeQgGAAgDgGIgRghQgFgLALgGQALgGAFALIAKASIAWgWQAJgIAJAJQAJAIgJAJIgjAiQgEADgFAAIgCAAg");
		this.shape_1.setTransform(75.7,99);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#625123").s().p("AgLAeQgGAAgDgGIgRghQgFgLALgGQALgGAFALIAKASIAWgWQAJgIAJAJQAJAIgJAJIgjAiQgEADgFAAIgCAAg");
		this.shape_2.setTransform(235.8,93.6);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#625123").s().p("AgLAeQgGAAgDgGIgRghQgFgLALgGQALgGAFALIAKASIAWgWQAJgIAJAJQAJAIgJAJIgjAiQgEADgFAAIgCAAg");
		this.shape_3.setTransform(258.2,76.6);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#625123").s().p("AgLAeQgGAAgDgGIgRghQgFgLALgGQALgGAFALIAKASIAWgWQAJgIAJAJQAJAIgJAJIgjAiQgEADgFAAIgCAAg");
		this.shape_4.setTransform(243.7,49);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#625123").s().p("AgLAeQgGAAgDgGIgRghQgFgLALgGQALgGAFALIAKASIAWgWQAJgIAJAJQAJAIgJAJIgjAiQgEADgFAAIgCAAg");
		this.shape_5.setTransform(189.2,57);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#625123").s().p("AgLAeQgGAAgDgGIgRghQgFgLALgGQALgGAFALIAKASIAWgWQAJgIAJAJQAJAIgJAJIgjAiQgEADgFAAIgCAAg");
		this.shape_6.setTransform(106.7,46.8);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#625123").s().p("AgQA1QgggjgJgsQgDgMAMgEQANgDACAMQAGAcAPAWQAPgoAigdQAJgIAJAJQAJAJgKAIQglAhgNAwQgCAHgGACIgEABQgFAAgDgEg");
		this.shape_7.setTransform(27.3,104.7);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#625123").s().p("AgQA1QgggjgJgsQgDgMAMgEQANgDACAMQAGAcAPAWQAPgoAigdQAJgIAJAJQAJAJgKAIQglAhgNAwQgCAHgGACIgEABQgFAAgDgEg");
		this.shape_8.setTransform(134.8,104.7);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#625123").s().p("AgQA1QgggjgJgsQgDgMAMgEQANgDACAMQAGAcAPAWQAPgoAigdQAJgIAJAJQAJAJgKAIQglAhgNAwQgCAHgGACIgEABQgFAAgDgEg");
		this.shape_9.setTransform(69,64.6);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#625123").s().p("AgQA1QgggjgJgsQgDgMAMgEQANgDACAMQAGAcAPAWQAPgoAigdQAJgIAJAJQAJAJgKAIQglAhgNAwQgCAHgGACIgEABQgFAAgDgEg");
		this.shape_10.setTransform(100,78.9);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#625123").s().p("AgQA1QgggjgJgsQgDgMAMgEQANgDACAMQAGAcAPAWQAPgoAigdQAJgIAJAJQAJAJgKAIQglAhgNAwQgCAHgGACIgEABQgFAAgDgEg");
		this.shape_11.setTransform(175,31.5);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#625123").s().p("AgQA1QgggjgJgsQgDgMAMgEQANgDACAMQAGAcAPAWQAPgoAigdQAJgIAJAJQAJAJgKAIQglAhgNAwQgCAHgGACIgEABQgFAAgDgEg");
		this.shape_12.setTransform(132.5,57.5);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#625123").s().p("AgLAzIgjhIQgFgLALgGQAKgHAGALIAWAtQAKgfARgdQAGgLALAHQALAGgGALQgYApgMArQgCAHgJACIgCAAQgHAAgCgGg");
		this.shape_13.setTransform(199,96.4);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#625123").s().p("AgLAzIgjhIQgFgLALgGQAKgHAGALIAWAtQAKgfARgdQAGgLALAHQALAGgGALQgYApgMArQgCAHgJACIgCAAQgHAAgCgGg");
		this.shape_14.setTransform(164.2,78.9);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#625123").s().p("AgLAzIgjhIQgFgLALgGQAKgHAGALIAWAtQAKgfARgdQAGgLALAHQALAGgGALQgYApgMArQgCAHgJACIgCAAQgHAAgCgGg");
		this.shape_15.setTransform(231.8,73.9);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#625123").s().p("AgLAzIgjhIQgFgLALgGQAKgHAGALIAWAtQAKgfARgdQAGgLALAHQALAGgGALQgYApgMArQgCAHgJACIgCAAQgHAAgCgGg");
		this.shape_16.setTransform(208.8,40.4);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#625123").s().p("AgLAzIgjhIQgFgLALgGQAKgHAGALIAWAtQAKgfARgdQAGgLALAHQALAGgGALQgYApgMArQgCAHgJACIgCAAQgHAAgCgGg");
		this.shape_17.setTransform(135.8,29);

		this.instance = new lib.bush_front();
		this.instance.parent = this;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Bush_front, new cjs.Rectangle(0,0,307,126), null);


	(lib.arm_right = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Asset 12.png
		this.instance = new lib.Asset12();
		this.instance.parent = this;
		this.instance.setTransform(-29,-108);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.arm_right, new cjs.Rectangle(-29,-108,175,205), null);


	(lib.mc_paddleboarder = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_13
		this.instance = new lib.Water_1();
		this.instance.parent = this;
		this.instance.setTransform(577.6,609.4,0.5,0.5,0,0,0,96.7,42.4);
		this.instance.alpha = 0;
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(1).to({regX:96.5,regY:21.1,scaleX:0.54,scaleY:0.54,x:574.8,y:597.9,alpha:0.134},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:571.5,y:596.9,alpha:0.301},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:567.5,y:595.7,alpha:0.501},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:562.8,y:594.3,alpha:0.734},0).wait(1).to({regX:96.7,regY:42.4,scaleX:0.78,scaleY:0.78,x:557.7,y:609.4,alpha:1},0).wait(1).to({regX:96.5,regY:21.1,scaleX:0.79,scaleY:0.79,x:541.5,y:594.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:522.6,y:597.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:500.8,y:600.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:476.1,y:603.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:448.5,y:607.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:418,y:611.6},0).wait(1).to({regX:96.6,regY:42.4,scaleX:0.88,scaleY:0.88,x:384.7,y:634.8},0).to({x:145.6,y:631.8},13,cjs.Ease.get(1)).to({regX:96.8,regY:42.6,scaleX:0.78,scaleY:0.78,x:90.7,alpha:0},15).to({_off:true},1).wait(53));

		// water_cover.png
		this.instance_1 = new lib.water_cover();
		this.instance_1.parent = this;
		this.instance_1.setTransform(95,597,0.766,0.602);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

		// Paddle
		this.instance_2 = new lib.Paddle();
		this.instance_2.parent = this;
		this.instance_2.setTransform(441.9,275,1,1,-23.9,0,0,3,270.8);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:2.9,scaleX:1,scaleY:1.02,rotation:0,skewX:-24.7,skewY:-25.6,x:443.8,y:259.7},26,cjs.Ease.get(1)).to({regY:270.7,scaleX:1,scaleY:0.96,skewX:0,skewY:0,x:398.6,y:322.3},12,cjs.Ease.get(-1)).to({regX:3,regY:270.6,scaleY:1,rotation:28.9,x:318.5,y:319.5},13,cjs.Ease.get(1)).to({regX:3.1,regY:270.7,rotation:31.5,x:314,y:324.9},35).to({regX:3,regY:270.6,rotation:28.9,x:319,y:319.5},11).to({regX:2.9,scaleY:0.98,rotation:0,x:398.6,y:316.8},11).to({regX:3,regY:270.8,scaleY:1,rotation:-23.9,x:441.9,y:275},11,cjs.Ease.get(1)).wait(1));

		// left_arm
		this.instance_3 = new lib.left_arm();
		this.instance_3.parent = this;
		this.instance_3.setTransform(368.2,270,1.032,1.032,-19.2,0,0,2.1,14.2);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:2,regY:14.3,scaleX:1.03,scaleY:1.05,rotation:0,skewX:-22,skewY:-22.8,x:371.3,y:260.7},26,cjs.Ease.get(1)).to({regX:2.1,regY:14.1,scaleX:1,scaleY:0.96,skewX:0,skewY:0,x:341.8,y:300.6},12,cjs.Ease.get(-1)).to({regX:2.2,scaleY:1,rotation:1.2,x:267.3,y:299.9},13,cjs.Ease.get(1)).to({regX:2.4,regY:14.2,rotation:4.9,x:254.7,y:292.8},35).to({regX:2.2,regY:14.1,rotation:1.2,x:267.8,y:299.9},11).to({regX:2.1,regY:14,scaleY:0.98,rotation:0,x:341.8,y:294.5},11).to({regY:14.2,scaleX:1.03,scaleY:1.03,rotation:-19.2,x:368.2,y:270},11,cjs.Ease.get(1)).wait(1));

		// left_forearm
		this.instance_4 = new lib.left_forearm();
		this.instance_4.parent = this;
		this.instance_4.setTransform(293.2,205.9,1,1,-19.2,0,0,21.3,20.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:21.4,regY:20.5,scaleX:1,scaleY:1.02,rotation:0,skewX:-22,skewY:-22.8,x:293.1,y:199.6},26,cjs.Ease.get(1)).to({regX:21.2,regY:20.3,scaleX:1,scaleY:0.96,skewX:0,skewY:0,x:291.9,y:219.3},12,cjs.Ease.get(-1)).to({regX:21.4,regY:20.4,scaleY:1,rotation:49.2,x:297.2,y:205.4},13,cjs.Ease.get(1)).to({regY:20.3,rotation:59.4,x:300.9,y:205},35).to({regY:20.4,rotation:49.2,x:297.7,y:205.4},11).to({regX:21.2,regY:20.3,scaleY:0.98,rotation:0,x:291.9,y:211},11).to({regX:21.3,regY:20.4,scaleY:1,rotation:-19.2,x:293.2,y:205.9},11,cjs.Ease.get(1)).wait(1));

		// head
		this.instance_5 = new lib.head();
		this.instance_5.parent = this;
		this.instance_5.setTransform(303.5,154,1,1,-4.2,0,0,8.1,67);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:8.2,scaleY:1.02,rotation:0,skewX:-1.9,skewY:-2,x:302.1,y:146.4},26,cjs.Ease.get(1)).to({regX:8.1,scaleY:0.96,skewX:0,skewY:0,x:308.4,y:171.1},12,cjs.Ease.get(-1)).to({regX:8.2,scaleY:1,rotation:-1.3,x:322.7,y:161.5},13,cjs.Ease.get(1)).to({rotation:-2.2,x:326.9},35).to({rotation:-1.3,x:323.2},11).to({regX:8.1,scaleY:0.98,rotation:0,x:308.4},11).to({scaleY:1,rotation:-4.2,x:303.5,y:154},11,cjs.Ease.get(1)).wait(1));

		// right_leg
		this.instance_6 = new lib.right_leg();
		this.instance_6.parent = this;
		this.instance_6.setTransform(368.6,355.1,1,1,0,1.7,0,27.2,4.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:27.1,scaleY:1.02,skewX:2,x:369.5,y:351.7},26,cjs.Ease.get(1)).to({regX:27.2,scaleY:0.96,skewX:0,x:364.6,y:362.6},12,cjs.Ease.get(-1)).to({scaleY:0.94,skewX:1.3,x:366.5,y:363.1},13,cjs.Ease.get(1)).to({scaleY:0.93,skewX:2.7,x:367.8,y:364.9},35).to({scaleY:0.94,skewX:1.3,x:367,y:363.1},11).to({scaleY:0.98,skewX:0,x:364.6,y:358.2},11).to({scaleY:1,skewX:1.7,x:368.6,y:355.1},11,cjs.Ease.get(1)).wait(1));

		// left_leg
		this.instance_7 = new lib.left_leg();
		this.instance_7.parent = this;
		this.instance_7.setTransform(303.6,352.3,1,1,0,1.3,0,50.2,5.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:1.02,skewX:1.6,x:304.8,y:348.8},26,cjs.Ease.get(1)).to({regX:50.1,regY:5.5,scaleY:0.96,skewX:0,x:299.5,y:360},12,cjs.Ease.get(-1)).to({scaleY:0.97,skewX:1.2,x:301.4,y:357.7},13,cjs.Ease.get(1)).to({regX:50.2,skewX:1.9,x:304.6},35).to({regX:50.1,skewX:1.2,x:301.9},11).to({regY:5.4,scaleY:0.98,skewX:0,x:299.5,y:355.5},11).to({regX:50.2,scaleY:1,skewX:1.3,x:303.6,y:352.3},11,cjs.Ease.get(1)).wait(1));

		// lower_bottom
		this.instance_8 = new lib.lower_bottom();
		this.instance_8.parent = this;
		this.instance_8.setTransform(292.8,316.5,1,1,0,0,0,39.4,62.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:62.7,scaleY:1.02,x:293.8,y:312.4},26,cjs.Ease.get(1)).to({regY:62.8,scaleY:0.96,x:288.8,y:325.9},12,cjs.Ease.get(-1)).to({regX:39.5,regY:62.7,scaleY:1,rotation:2.9,x:292.8,y:321.8},13,cjs.Ease.get(1)).to({regY:62.8,rotation:4.2,x:295.3,y:322},35).to({regY:62.7,rotation:2.9,x:293.3,y:321.8},11).to({regX:39.4,scaleY:0.98,rotation:0,x:288.8,y:320.5},11).to({regY:62.6,scaleY:1,x:292.8,y:316.5},11,cjs.Ease.get(1)).wait(1));

		// torso
		this.instance_9 = new lib.torso();
		this.instance_9.parent = this;
		this.instance_9.setTransform(298.7,266.7,1,1,-4.2,0,0,43.6,135.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:135.7,scaleY:1.02,rotation:0,skewX:-5.3,skewY:-5.5,x:299.7,y:261.6},26,cjs.Ease.get(1)).to({scaleY:0.96,skewX:0,skewY:0,x:295.5,y:278.2},12,cjs.Ease.get(-1)).to({regX:43.7,regY:135.6,scaleY:1,rotation:4.7,x:300.6,y:272.2},13,cjs.Ease.get(1)).to({regX:43.8,rotation:5.5,x:303.4,y:271.9},35).to({regX:43.7,rotation:4.7,x:301.1,y:272.2},11).to({regX:43.6,scaleY:0.98,rotation:0,x:295.5,y:271.5},11).to({scaleY:1,rotation:-4.2,x:298.7,y:266.7},11,cjs.Ease.get(1)).wait(1));

		// right_forearm
		this.instance_10 = new lib.right_forearm();
		this.instance_10.parent = this;
		this.instance_10.setTransform(407.7,83.7,1,1,-33.2,0,0,25,75.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:75.7,scaleX:1,scaleY:1.02,rotation:0,skewX:-26.7,skewY:-27.6,x:402.3,y:69.7},26,cjs.Ease.get(1)).to({regY:75.4,scaleX:1,scaleY:0.96,skewX:0,skewY:0,x:433.1,y:149.4},12,cjs.Ease.get(-1)).to({regX:25.2,regY:75.6,scaleY:1,rotation:22.4,x:442.3,y:187.1},13,cjs.Ease.get(1)).to({regY:75.7,rotation:27.4,x:443.5,y:193.7},35).to({regY:75.6,rotation:22.4,x:442.8,y:187.1},11).to({regX:25,regY:75.4,scaleY:0.98,rotation:0,x:433.1,y:139.1},11).to({regY:75.5,scaleY:1,rotation:-33.2,x:407.7,y:83.7},11,cjs.Ease.get(1)).wait(1));

		// arm_right
		this.instance_11 = new lib.arm_right();
		this.instance_11.parent = this;
		this.instance_11.setTransform(351.6,132.2,1,1,-38.2,0,0,21,18.7);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:20.9,regY:18.8,scaleX:1.01,scaleY:1.01,rotation:0,skewX:-41.8,skewY:-43,x:349.7,y:123.2},26,cjs.Ease.get(1)).to({regX:21,regY:18.7,scaleX:1,scaleY:0.96,skewX:0,skewY:0,x:359,y:152.7},12,cjs.Ease.get(-1)).to({regX:21.2,regY:18.8,scaleY:1,rotation:27,x:374.7,y:156.6},13,cjs.Ease.get(1)).to({regY:18.7,rotation:32,x:378.9,y:157.3},35).to({regY:18.8,rotation:27,x:375.2,y:156.6},11).to({regX:21,regY:18.7,scaleY:0.98,rotation:0,x:359,y:142.6},11).to({scaleY:1,rotation:-38.2,x:351.6,y:132.2},11,cjs.Ease.get(1)).wait(1));

		// Water_1
		this.instance_12 = new lib.Water_1();
		this.instance_12.parent = this;
		this.instance_12.setTransform(218.9,566.9,0.59,0.59,0,0,0,96.5,42.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:96.7,regY:42.4,scaleX:0.64,scaleY:0.64,x:208.9,y:567.9},59).to({regX:96.5,regY:42.3,scaleX:0.59,scaleY:0.59,x:218.9,y:566.9},60).wait(1));

		// Asset 16.png
		this.instance_13 = new lib.Asset16();
		this.instance_13.parent = this;
		this.instance_13.setTransform(-84,262);

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120));

		// water_texture
		this.instance_14 = new lib.water_texture_1();
		this.instance_14.parent = this;
		this.instance_14.setTransform(131.5,519,1,1,0,0,0,57,57);

		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({regX:57.1,regY:57.1,scaleX:1.02,scaleY:1.02,x:128.5,y:523.4},12,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,x:125.1,y:528.1},46,cjs.Ease.get(1)).to({regX:57,regY:57,scaleX:1,scaleY:1,x:131.5,y:519},32).wait(1));

		// water_texture
		this.instance_15 = new lib.water_texture_1();
		this.instance_15.parent = this;
		this.instance_15.setTransform(250,524.5,1,1,0,0,0,57,57);

		this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(29).to({scaleX:1.04,y:526.2},12,cjs.Ease.get(-1)).to({scaleX:1.08,y:528},45,cjs.Ease.get(1)).to({scaleX:1,y:524.5},33).wait(1));

		// water_texture
		this.instance_16 = new lib.water_texture_1();
		this.instance_16.parent = this;
		this.instance_16.setTransform(302.1,527,1,1,180,0,0,57,57);

		this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(27).to({scaleX:1.06,y:529.4},12,cjs.Ease.get(-1)).to({scaleX:1.11,x:302,y:532},41,cjs.Ease.get(1)).to({scaleX:1,x:302.1,y:529},39).wait(1));

		// water_texture
		this.instance_17 = new lib.water_texture_1();
		this.instance_17.parent = this;
		this.instance_17.setTransform(435.1,552,0.877,0.877,0,0,0,57,57);

		this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(27).to({regX:57.1,regY:57.1,x:435.2,y:553.6},12,cjs.Ease.get(-1)).to({regX:57,regY:57,x:435.1,y:555},45,cjs.Ease.get(1)).to({y:552},35).wait(1));

		// water_texture
		this.instance_18 = new lib.water_texture_1();
		this.instance_18.parent = this;
		this.instance_18.setTransform(496.1,560,0.877,0.877,180,0,0,57,57);

		this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(28).to({scaleX:0.94,y:560.9},12,cjs.Ease.get(-1)).to({scaleX:1,x:496,y:562},49,cjs.Ease.get(1)).to({scaleX:0.88,x:496.1,y:560},30).wait(1));

		// water_texture
		this.instance_19 = new lib.water_texture_1();
		this.instance_19.parent = this;
		this.instance_19.setTransform(585.1,557.5,0.877,0.877,0,0,0,57,57);

		this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(28).to({regY:57.1,scaleX:0.91,x:587.1,y:559},12,cjs.Ease.get(-1)).to({regX:57.1,regY:57,scaleX:0.94,x:589.2,y:560.5},47,cjs.Ease.get(1)).to({regX:57,scaleX:0.88,x:585.1,y:557.5},32).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-84,-47.5,867,754.8);


	(lib._1_paddleBoarder = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.instance = new lib.mc_paddleboarder();
		this.instance.parent = this;
		this.instance.setTransform(46,-1,1,1.001);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({regX:349.5,regY:320.4,x:395.5,y:319.8},0).wait(2).to({y:319.9},0).wait(1).to({y:320},0).wait(1).to({y:320.1},0).wait(1).to({y:320.2},0).wait(1).to({y:320.4},0).wait(1).to({y:320.6},0).wait(1).to({y:320.8},0).wait(1).to({y:321},0).wait(1).to({y:321.3},0).wait(1).to({regX:0,regY:0,x:46,y:0.9},0).to({y:3},13,cjs.Ease.get(1)).wait(34).to({y:-1},33).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-38,-48.6,867,755.6);


	(lib.paddleboard_animation = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Water_1
		this.instance = new lib.Water_1();
		this.instance.parent = this;
		this.instance.setTransform(252.8,44.2,0.59,0.59,0,0,0,96.5,42.3);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:242.8},45).to({x:252.8},74).wait(1));

		// FlashAICB
		this.instance_1 = new lib.Bush_front();
		this.instance_1.parent = this;
		this.instance_1.setTransform(140.6,311,1,1.001,0,-3,0,153.6,126);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

		// FlashAICB
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#A55F2C").s().p("Ag5hfIgRhCQgDgPAPgFQAQgEAEAPIALAuQApCbBCCWIgjACQg7iIgniOg");
		this.shape.setTransform(-31.2,263.3);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#A55F2C").s().p("AAohbIAbgdQA0g4BFhDIASAJIAHANQhOBLg7BAIgaAcQiBCRheCWIgnADQBkipCYimg");
		this.shape_1.setTransform(-42,259.2);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#A55F2C").s().p("AgGADQBxl6AbhPIAdAOQgdBWhtFrQhSEVhFCnIgkACQBIisBUkYg");
		this.shape_2.setTransform(-114.5,241.6);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#A55F2C").s().p("AiVC9QgOgIAJgMIERlpIAnADIkbF2QgGAIgHAAQgFAAgGgEg");
		this.shape_3.setTransform(-138.7,210.4);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(120));

		// front_rock_shadow
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#625123").s().p("AxjDIIAUiiQLahYAegMQAYgKirm7QH0AbAQAGQATAHGrDWIGoDSID5HBMgjxAB2QABiAAUi8g");
		this.shape_4.setTransform(-109.6,241.1);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#625123").s().p("AxjDLIAAgCIAUihIAAgBQKJhQBggRQAMgDACgCQAOgGgwiPQgjhqhFiyIgIgTQG0AXBDAIIAOACQATAIGYDKIATAKIGSDIIAVAMID6HBMgjzAB1QACh/AUi6g");
		this.shape_5.setTransform(-109.7,241.1);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#625123").s().p("Ax5IEQACh/AUi6IAAgCIAUihIAAgBQKKhQBfgRQALgDAEgDQANgGgwiOQgjhshFiwIgGgTQG0AXBDAIQAKABADACQAVAIGWDKIATAKIGSDIIAWAMID4HAMgjyAB1g");
		this.shape_6.setTransform(-109.8,241.1);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#625123").s().p("AxjDLIAAgCIAUihIAAgBQKMhQBcgSQAMgCADgDQANgHgviOQgjhthEivIgHgSQG2AXBBAIQALABADACQAWAIGVDKIATAKIGSDIIAVAMID4HAMgjzAB1QACh/AUi6g");
		this.shape_7.setTransform(-109.8,241.1);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#625123").s().p("AxjDLIAAgDIAUihIAAAAQKNhQBbgSQAMgCADgDQANgIgviNQgkhuhCiuIgHgSQG3AYBAAHQALABADACQAXAKGUDIIATAKIGSDJIAVALID3HAMgjzAB1QABh/AVi6g");
		this.shape_8.setTransform(-109.9,241.1);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#625123").s().p("AxjDLIAAgDIAUihIAAgBQKOhPBbgSQALgDADgDQAMgJguiMQgjhuhDitIgGgSQG3AYBAAHQALABADACQAYAKGTDIIAUAKIGRDJIAVAMIDsGoIAKAXMgjzAB1QABh/AVi6g");
		this.shape_9.setTransform(-110,241.1);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#625123").s().p("Ax6IEQACh/AVi6IAAgDIAUihIAAgBQKQhPBZgSQALgCADgEQAMgKgtiLQgkhwhDirIgEgSQG3AYBAAHIANADQAZALGSDHIAUAKIGSDJIAVAMIDrGoIAJAXMgjzAB1g");
		this.shape_10.setTransform(-110,241.1);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#625123").s().p("AxkDLIAAgDIAVihIAAgBQKRhQBXgRQAMgDADgEQALgJgtiMQgjhwhCirIgFgRQG5AYA+AIQAKABAEACQAaALGRDHIATAJIGSDJIAVAMIDsGoIAJAXMgj0AB1QABh/AUi6g");
		this.shape_11.setTransform(-110.1,241.1);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#625123").s().p("AxjDLIAAgDIAUihIAAgBQKShQBXgRQALgCADgFQALgKgsiLQgkhyhBipIgFgRQG6AYA9AIQAKABAEACQAcAMGPDGIAUAKIGSDIIAUANIDsGoIAIAWMgj1AB1QACh/AVi6g");
		this.shape_12.setTransform(-110.2,241.1);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#625123").s().p("AxjDLIAAgDIAUihIAAgBQKUhRBVgQQALgDADgEQALgLgtiLQgihyhCipIgEgQQG8AYA7AIQAKABAEACQAdAMGPDGIASAKIGTDJIAUAMIDsGoIAHAWMgj1AB1QACh/AVi6g");
		this.shape_13.setTransform(-110.2,241.1);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#625123").s().p("Ax6IEQABh/AVi6IAAgDIAVihIAAgBQKVhRBUgQQALgDADgFQALgMgsiJQgjh0hBinIgEgQQG8AYA7AIQAKABAFACQAdANGNDFIAUAKIGSDJIAUAMIDsGpIAGAVMgj1AB1g");
		this.shape_14.setTransform(-110.3,241.1);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#625123").s().p("AxkDLIAAgDIAVihIAAgBQKWhRBTgQQALgDACgFQALgNgriIQgkh2hAilIgDgQQG9AYA6AIQAJABAGACQAeAOGMDEIAUAKIGSDJIAUANIDsGoIAFAVMgj1AB1QABh/AVi6g");
		this.shape_15.setTransform(-110.4,241.1);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#625123").s().p("AxkDLIAAgDIAVihIAAgBQKXhRBSgQQALgDADgFQAKgOgriIQgkh2g/ilIgDgPQG+AYA5AIQAJABAGACQAfAPGLDDIATAKIGTDJIATANIDsGpIAGAUMgj2AB1QABh/AVi6g");
		this.shape_16.setTransform(-110.4,241.1);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#625123").s().p("AxkDLIAAgDIAVihIAAgBQKZhRBQgQQALgDACgGQALgOgriHQgjh4hAijIgCgPQG/AYA4AIQAJABAGADQAgAOGKDEIAUAJIGSDJIAUANIDsGqIAEATMgj3AB1QACh/AVi6g");
		this.shape_17.setTransform(-110.5,241.1);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#625123").s().p("Ax7IEQACiAAVi6IAAgDIAVihIABgBQKZhRBQgQQAKgCADgHQAJgOgpiGQgkh5g/ijIgCgOQHAAYA3AHQAJABAGADQAiAPGJDEIATAKIGSDIIAUAOIDsGpIADATMgj2AB1g");
		this.shape_18.setTransform(-110.6,241.1);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#625123").s().p("AxkDKIAAgDIAVihIABgBQKbhRBOgQQAKgCACgHQAKgPgpiGQgkh6g+ihIgCgOQHBAYA2AHQAJABAGAEQAjAPGIDDIATAKIGSDIIAUAOIDsGpIACATMgj3AB1QACiAAVi6g");
		this.shape_19.setTransform(-110.7,241.1);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#625123").s().p("AxkDKIAAgDIAVihIAAgBQKdhRBMgQQALgDADgHQAIgPgpiFQgjh7g+ihIgBgNQHCAYA1AHQAIABAHAEQAkAQGHDCIATAKIGSDJIATANIDsGqIACASMgj3AB1QACiAAVi6g");
		this.shape_20.setTransform(-110.7,241.1);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#625123").s().p("Ax7IEQABiAAWi6IAAgDIAVihIABgBQKdhRBMgQQAKgDACgHQAJgQgoiEQgkh9g9ifIgBgNQHDAYA0AHQAIACAHADQAlARGGDBIATAKIGTDJIATAOIDsGpIAAASMgj3AB1g");
		this.shape_21.setTransform(-110.8,241.1);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#625123").s().p("Ax7IEQABiAAWi6IAAgDIAWihIAAgBQKehRBLgQQAKgDACgHQAJgRgoiEQgkh9g8ieIgBgNQHEAYAzAHQAJACAGADQAmARGFDCIAUAJIGSDJIATAOIDsGqIAAARMgj4AB1g");
		this.shape_22.setTransform(-110.9,241.1);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#625123").s().p("AxlDKIAAgDIAWihIAAgBQKhhSBIgQQAKgCADgIQAIgRgoiDQgjh/g8idIgBgMQHFAYAyAHQAIACAIADQAnASGEDBIATAJIGSDJIATAPIDsGpIgBARMgj4AB1QABiAAWi6g");
		this.shape_23.setTransform(-110.9,241.1);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#625123").s().p("Ax9IEQACiAAWi6IAAgDIAVihIABgBQKhhSBJgQQAJgCACgIQAIgSgmiCQgkiAg9icIABgMQHGAZAxAGQAIACAIADQAoATGCDAIATAKIGTDIIASAPIDsGqIgBAQMgj4AB1g");
		this.shape_24.setTransform(-110.9,241.1);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#625123").s().p("AxmDKIAAgDIAWihIABgBQKihSBHgQQAJgCADgJQAIgSgniCQgjiBg8iaIAAgMQHHAZAwAHQAIABAIAEQAqATGBC/IATAKIGTDJIASAOIDsGqIgCAQMgj5AB1QABiAAWi6g");
		this.shape_25.setTransform(-111,241.1);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#625123").s().p("Ax+IEQACiAAWi7IAAgCIAWihIAAgBQKkhSBGgQQAJgCACgJQAIgTgmiBQgjiCg8iaIABgLQHIAZAvAHQAIABAIAEQArATGAC/IATAKIGTDJIASAPIDsGpIgDAQMgj5AB1g");
		this.shape_26.setTransform(-111,241.1);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#625123").s().p("AxnDJIAAgCIAWihIABgBQKlhSBEgQQAJgCACgKQAIgUgmiAQgjiDg7iYIABgLQHJAZAuAHQAIABAJAEQArAUF/C/IATAJIGTDJIASAPIDsGqIgEAPMgj5AB1QABiAAWi7g");
		this.shape_27.setTransform(-111,241.1);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#625123").s().p("Ax/IEQACiAAWi7IAAgCIAWiiIABAAQKmhTBDgPQAJgCACgKQAHgVglh/QgjiEg7iXIACgLQHKAZAtAHQAIABAJAEQAsAVF+C+IATAJIGTDJIASAQIDsGpIgFAPMgj5AB1g");
		this.shape_28.setTransform(-111.1,241.1);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#625123").s().p("AxnDJIAAgCIAWiiIAAAAQKohTBBgPQAKgCABgKQAIgWglh+QgjiGg6iWIACgKQHLAZAsAHQAHABAJAEQAuAWF8C9IAUAJIGTDJIARAQIDsGqIgFAOMgj7AB1QACiAAXi7g");
		this.shape_29.setTransform(-111.1,241.1);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#625123").s().p("AxoDJIAAgCIAXiiIAAAAQKphTBAgPQAKgCACgLQAGgWgkh+QgkiGg5iVIACgKQHMAZArAHQAIABAJAFQAvAVF8C9IATAKIGSDJIASAPIDsGqIgGAOMgj7AB1QABiAAXi7g");
		this.shape_30.setTransform(-111.1,241.1);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#625123").s().p("AxpDJIAAgCIAXiiIABAAQKqhTA/gPQAJgCACgLQAGgXgkh9QgjiHg5iUIACgKQHOAZApAHQAIABAJAFQAxAWF6C8IATAKIGTDJIARAQIDtGqIgHANMgj8AB1QACiAAWi7g");
		this.shape_31.setTransform(-111.1,241.1);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#625123").s().p("AyBIEQABiAAXi7IAAgDIAXihIAAAAQKshTA+gPQAIgDACgLQAGgXgjh8QgjiJg5iTIADgJQHOAZApAHQAHABAKAFQAxAXF5C7IAUAKIGTDJIAQAQIDtGqIgIANMgj7AB1g");
		this.shape_32.setTransform(-111.2,241.1);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#625123").s().p("AyCIEQACiAAXi7IAAgDIAWihIABAAQKthUA9gOQAIgDACgLQAGgYgjh8QgjiJg5iSIAEgJQHPAZAoAHQAHABAKAFQAyAXF4C8IATAJIGUDJIAQARIDtGqIgJAMMgj7AB1g");
		this.shape_33.setTransform(-111.2,241.1);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#625123").s().p("AxqDJIAAgDIAXihIAAAAQKuhUA8gPQAIgCACgMQAGgYgjh7QgiiLg5iRIAEgIQHQAZAnAHQAHABAKAFQAzAYF4C7IATAJIGTDJIAQARIDuGqIgKAMMgj9AB1QACiAAXi7g");
		this.shape_34.setTransform(-111.2,241.1);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#625123").s().p("AxqDJIAAgDIAXihIABAAQKvhUA6gPQAJgCABgMQAGgZgih6QgkiMg4iQIAFgIQHSAZAlAHQAHABALAFQA0AZF1C6IAUAJIGTDKIAQAQIDtGrIgKALMgj9AB1QABiAAYi7g");
		this.shape_35.setTransform(-111.3,241.1);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#625123").s().p("AyEIEQACiAAXi7IAAgDIAXihIABgBQKwhTA6gPQAHgCACgMQAFgaghh6QgjiNg4iOIAFgIQHSAZAlAHQAHABALAGQA1AZF1C5IATAKIGTDJIAQARIDtGqIgLALMgj8AB1g");
		this.shape_36.setTransform(-111.3,241.1);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#625123").s().p("AyEIEQABiAAYi8IAAgCIAXihIAAgBQKyhTA4gPQAJgCAAgNQAFgaggh5QgkiOg2iOIAFgHQHTAZAkAHQAGABAMAGQA2AZF0C5IATAKIGUDJIAQARIDsGrIgLAKMgj9AB1g");
		this.shape_37.setTransform(-111.3,241.1);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#625123").s().p("AyFIEQACiAAXi8IAAgCIAYihIAAgBQKzhUA3gOQAIgCABgNQAFgbghh5QgjiPg2iMIAFgHQHUAZAjAHQAHABALAGQA4AaFzC5IATAJIGTDJIAQARIDtGrIgNAKMgj9AB1g");
		this.shape_38.setTransform(-111.4,241.1);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#625123").s().p("AxsDIIAAgCIAXihIABgBQK0hUA2gOQAIgCABgOQAEgbggh4QgjiQg2iLIAGgHQHUAaAjAGQAGABAMAGQA5AbFxC4IAUAJIGTDJIAQASIDsGqIgNAKMgj+AB1QABiAAYi8g");
		this.shape_39.setTransform(-111.4,241.1);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#625123").s().p("AxtDIIAAgCIAYihIAAgBQK2hUA0gOQAIgCABgOQAEgcgfh3QgjiSg2iKIAGgGQHWAaAhAGQAGABANAGQA5AcFxC3IATAJIGTDKIAQARIDtGrIgOAJMgj/AB1QACiAAXi8g");
		this.shape_40.setTransform(-111.4,241.1);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#625123").s().p("AyGIEQABiAAYi8IAAgCIAYihIAAgBQK3hUAzgOQAIgCABgPQAEgcgfh3QgjiSg1iJIAGgGQHWAaAhAGQAGABANAHQA6AbFwC3IATAJIGTDKIAPASIDtGqIgOAJMgj/AB1g");
		this.shape_41.setTransform(-111.5,241.1);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#625123").s().p("AxtDIIAAgCIAXiiIABAAQK4hUAygOQAHgCABgPQAEgdgfh2QgjiUg1iHIAHgGQHYAaAfAGQAHACAMAGQA8AcFuC2IAUAKIGTDJIAPASIDtGrIgPAIMgkAAB1QABiAAZi8g");
		this.shape_42.setTransform(-111.5,241.1);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#625123").s().p("AxuDIIAAgCIAYiiIABAAQK5hVAxgNQAHgDABgOQADgegeh1QgjiVg0iHIAIgFQHYAaAfAGIASAIQA9AdFtC1IATAKIGUDJIAPASIDtGrIgRAIMgkAAB1QACiAAYi8g");
		this.shape_43.setTransform(-111.5,241.1);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#625123").s().p("AxuDIIAAgCIAYiiIAAAAQK7hVAvgNQAHgDABgPQAEgegfh1QgiiWg0iFIAIgFQHZAaAeAGQAFACAOAGQA9AeFsC1IATAJIGUDJIAPATIDtGrIgRAHMgkAAB1QACiAAYi8g");
		this.shape_44.setTransform(-111.5,241.1);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#625123").s().p("AyJIDQACh/AYi9IAAgBIAYiiIABAAQK8hVAugOQAHgCABgPQADgggdhzQgkiYgziEIAIgDQHbAZAcAGIATAIQBAAeFrC0IATAKIGTDKIAOASIDuGrIgSAHMgkAAB0g");
		this.shape_45.setTransform(-111.6,241.2);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#625123").s().p("AxvDHIAAgBIAYiiIABAAQK9hVAtgOQAHgCAAgQQADgggdhyQgjiZgziDIAJgDQHbAZAcAGQAFACAOAGQBAAfFqC0IATAJIGUDKIAOASIDtGsIgTAGMgkAAB0QABh/AZi9g");
		this.shape_46.setTransform(-111.6,241.2);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#625123").s().p("AxwDHIAAgCIAZihIAAAAQK/hWArgNQAHgCABgQQACghgchyQgjiZgyiDIAJgCQHcAZAbAGIATAIQBBAfFpC0IATAJIGUDKIAOASIDtGsIgUAGMgkBAB0QACh/AYi9g");
		this.shape_47.setTransform(-111.7,241.2);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#625123").s().p("AyKIDQABh/AZi9IAAgCIAYihIABAAQLAhWAqgNQAHgCAAgQQACgigbhyQgkiagxiBIAJgCQHdAZAaAGIATAIQBDAgFnCzIATAKIGUDJIAOATIDtGsIgUAFMgkBAB0g");
		this.shape_48.setTransform(-111.7,241.2);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#625123").s().p("AxxDHIAAgCIAZihIABAAQLBhWApgNQAGgCABgRQACgigbhxQgkibgxiAIAKgCQHeAZAZAGIATAJQBDAgFnCzIATAJIGUDJIAOATIDtGsIgVAFMgkCAB0QACh/AYi9g");
		this.shape_49.setTransform(-111.7,241.2);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#625123").s().p("AxyDHIAAgCIAZihIABAAQLChXAogMQAHgCABgRQABgjgbhwQgjidgxh+IAKgCQHgAZAXAGIAUAJQBEAgFlCzIATAJIGUDKIAOATIDtGsIgVAEMgkDAB0QACh/AYi9g");
		this.shape_50.setTransform(-111.7,241.2);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#625123").s().p("AxxDHIAAgCIAYihIABAAQLEhXAngMQAGgDAAgRQACgjgbhwQgjidgxh+IALgBQHhAZAWAGIAUAJIGqDTIASAJIGVDKIANATIDtGsIgXAEMgkCAB0QABh/Aai9g");
		this.shape_51.setTransform(-111.8,241.2);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#625123").s().p("AxyDHIAAgCIAYihIACAAQLFhXAkgMQAHgCAAgSQABgkgahvQgiifgxh8IALgBQHhAZAWAGQAEACAQAHQBGAiFkCxIATAJIGUDKIANATIDuGsIgYAEMgkCAB0QABh/AZi9g");
		this.shape_52.setTransform(-111.8,241.2);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#625123").s().p("AxzDHIAAgCIAaihIAAAAQLGhXAlgMQAFgDABgSQABgkgZhuQgkiggvh7IALgBQHjAZAUAGIAUAJQBHAjFiCwIAUAJIGUDKIANAUIDtGsIgYADMgkDAB0QABh/AZi9g");
		this.shape_53.setTransform(-111.8,241.2);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#625123").s().p("AxzDHIAAgCIAZihIABgBQLHhWAjgMQAGgCAAgUQABgkgZhuQgjihgvh6IALAAQHkAZATAGIAVAKQBIAiFhCxIATAJIGVDJIAMAUIDuGsIgZADMgkEAB0QACh/AZi9g");
		this.shape_54.setTransform(-111.9,241.2);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#625123").s().p("AxzDHIAAgCIAZiiIABAAQLIhWAigMQAGgCAAgUQAAglgYhtQgjiigvh5IAMAAQHkAaATAFIAVAKQBJAjFgCwIATAJIGVDJIAMAVIDtGrMgkdAB3QABh/Aai9g");
		this.shape_55.setTransform(-111.9,241.2);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#625123").s().p("AyPIEQACiAAZi9IAAgCIAZiiIABAAQLKhWAggNQAGgCAAgTQAAgmgYhsQgjikguh4IAMABQHmAaARAGIAVAJQBLAkFfCvIATAJIGUDKIAMAUIDuGsMgkeAB3g");
		this.shape_56.setTransform(-111.9,241.1);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#625123").s().p("Ax0DHIAAgCIAZiiIABAAQLLhXAfgMQAGgCAAgTQAAgngYhrQgjilguh3IANABQHmAaARAGIAVAKQBMAkFdCuIATAJIGVDKIAMAVIDtGsMgkfAB2QABiAAai9g");
		this.shape_57.setTransform(-112,241.1);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#625123").s().p("Ax1DHIAaijQLNhYAegLQARgHgjiiQgjilgth2QH0AbAPAGQAUAHGrDWIGoDSID5HBMgkhAB2QACiAAZi9g");
		this.shape_58.setTransform(-112,241.1);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#625123").s().p("AyQIEQACiAAZi9IAAgCIAaiiIABAAQLLhXAfgMQAGgCAAgTQAAgngYhrQgjimguh2IANABQHnAaAQAGIAVAKQBMAkFdCuIATAJIGVDKIAMAVIDuGsMgkgAB2g");
		this.shape_59.setTransform(-112,241.1);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#625123").s().p("AyPIEQABiAAai9IAAgCIAZiiIABAAQLKhWAhgNQAFgCAAgTQAAgmgXhsQgjikgvh4IAMABQHnAaAQAGIAVAJIGqDTIATAJIGVDKIALAVIDuGrMgkeAB3g");
		this.shape_60.setTransform(-111.9,241.1);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#625123").s().p("Ax0DHIAAgCIAZiiIABAAQLKhWAhgNQAGgCAAgTQAAgmgYhsQgjijgvh4IAMAAQHlAaASAFIAVAKQBKAjFfCwIATAJIGVDJIAMAVIDuGsMgkfAB2QACh/AZi9g");
		this.shape_61.setTransform(-111.9,241.2);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#625123").s().p("AyOIDQACh/AYi9IAAgCIAZiiIABAAQLJhWAigMQAGgCAAgUQAAglgYhtQgjiigvh5IALAAQHlAaASAFIAVAKQBJAjFhCwIATAJIGUDJIANAUIDtGsMgkcAB3g");
		this.shape_62.setTransform(-111.9,241.2);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#625123").s().p("AxzDHIAAgCIAZihIABgBQLHhWAjgMQAGgDABgSQAAglgZhuQgjihgvh6IALAAQHkAZATAGIAVAJQBIAkFhCvIATAKIGVDJIAMAUIDuGsIgZADMgkEAB0QACh/AZi9g");
		this.shape_63.setTransform(-111.9,241.2);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#625123").s().p("AxyDHIAAgCIAZihIABAAQLFhXAlgMQAGgCAAgSQABglgZhuQgjiggwh7IAKgBQHiAZAVAGQAFACAPAHQBHAiFjCxIATAJIGUDKIANATIDuGtIgYADMgkDAB0QACh/AZi9g");
		this.shape_64.setTransform(-111.8,241.2);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#625123").s().p("AxyDHIAAgCIAZihIABAAQLEhXAmgMQAGgDABgRQABgjgahwQgjiegxh9IALgBQHgAZAXAGQAEACAQAHQBFAiFkCxIATAJIGVDKIANATIDtGsIgXAEMgkCAB0QABh/AZi9g");
		this.shape_65.setTransform(-111.8,241.2);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#625123").s().p("AxxDHIAAgCIAYihIABAAQLDhXAngMQAHgDAAgRQACgigbhxQgjidgxh+IAKgBQHgAZAXAGIAUAJQBFAhFlCyIATAJIGUDKIAOATIDtGsIgWAEMgkDAB0QACh/AZi9g");
		this.shape_66.setTransform(-111.8,241.2);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#625123").s().p("AyLIDQABh/AZi9IAAgCIAYihIABAAQLChXAogMQAHgDAAgQQACgjgbhwQgjidgxh+IAKgCQHfAZAYAGIAUAJQBEAgFlCzIATAJIGUDKIAOATIDtGrIgVAFMgkCAB0g");
		this.shape_67.setTransform(-111.7,241.2);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#625123").s().p("AyKIDQABh/AZi9IAAgCIAYihIABAAQLAhWAqgNQAHgCAAgRQACghgbhyQgkiagxiBIAJgCQHdAZAaAGIATAIQBDAgFnCzIATAKIGUDJIAOATIDtGsIgUAFMgkBAB0g");
		this.shape_68.setTransform(-111.7,241.2);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#625123").s().p("AxwDHIAAgCIAYihIABAAQK/hWArgNQAHgCABgQQACghgchyQgjiagyiCIAJgCQHcAZAbAGIATAIQBBAfFpC0IATAJIGUDKIAOATIDtGrIgUAGMgkBAB0QACh/AYi9g");
		this.shape_69.setTransform(-111.7,241.2);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#625123").s().p("AxvDHIAAgBIAYiiIAAAAQK+hVAsgOQAIgCAAgQQADgggdhzQgjiYgyiEIAIgCQHcAZAbAGQAGACAOAGQBAAfFpC0IATAJIGUDKIAPASIDsGsIgSAGMgkBAB0QABh/AZi9g");
		this.shape_70.setTransform(-111.6,241.2);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#625123").s().p("AxwDHIAAgBIAZiiIAAAAQK+hVAtgOQAGgCACgPQACgggchzQgkiZgziDIAIgDQHbAZAcAGIATAIQBAAfFrCzIATAKIGUDKIANASIDuGrIgSAHMgkBAB0QABh/AYi9g");
		this.shape_71.setTransform(-111.6,241.2);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#625123").s().p("AxvDHIAAgBIAYiiIABAAQK8hVAugOQAHgCABgPQADgfgdh0QgjiXg0iFIAIgDQHaAZAdAGIATAIQA/AeFrC0IAUAKIGTDKIAOASIDuGrIgSAHMgkBAB0QACh/AYi9g");
		this.shape_72.setTransform(-111.6,241.2);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#625123").s().p("AxuDIIAAgCIAYiiIAAAAQK6hVAwgNQAIgDAAgPQAEgegfh1QgiiWg0iFIAIgFQHZAaAeAGQAFACAOAGQA9AdFsC2IATAJIGUDJIAPATIDtGrIgRAHMgkAAB1QACiAAYi8g");
		this.shape_73.setTransform(-111.5,241.1);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#625123").s().p("AyHIEQABiAAZi8IAAgCIAXiiIAAAAQK5hVAxgNQAIgCABgPQAEgegfh1QgjiUg1iIIAHgFQHZAaAeAGQAHACAMAGQA8AcFvC2IATAKIGTDJIAPASIDtGrIgQAIMgj+AB1g");
		this.shape_74.setTransform(-111.5,241.1);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#625123").s().p("AxtDIIAAgCIAXiiIABAAQK4hUAygOQAHgCABgPQAEgdgfh2QgiiTg1iIIAGgGQHXAaAgAGQAHABAMAHQA7AcFvC2IATAJIGTDKIAQASIDsGrIgOAIMgj/AB1QABiAAYi8g");
		this.shape_75.setTransform(-111.5,241.1);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#625123").s().p("AxtDIIAAgCIAYihIABgBQK1hUA0gOQAIgCABgOQAEgdgfh2QgkiTg0iJIAGgGQHWAaAhAGQAGABAMAHQA6AbFwC3IATAJIGUDKIAPARIDtGrIgPAJMgj+AB1QABiAAYi8g");
		this.shape_76.setTransform(-111.4,241.1);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#625123").s().p("AxtDIIAAgCIAYihIABgBQK1hUA0gOQAIgCABgOQAFgcggh3QgjiSg2iKIAGgGQHVAaAiAGQAGABANAGQA5AbFxC4IATAJIGTDKIAQARIDtGrIgOAJMgj/AB1QACiAAXi8g");
		this.shape_77.setTransform(-111.4,241.1);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#625123").s().p("AyFIEQACiAAXi8IAAgCIAXihIABgBQK0hUA1gOQAJgCAAgOQAFgbggh4QgjiQg2iLIAGgHQHUAaAjAGQAGABAMAGQA5AbFxC4IAUAJIGSDJIAQASIDtGqIgNAKMgj+AB1g");
		this.shape_78.setTransform(-111.4,241.1);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#625123").s().p("AyEIEQACiAAWi8IAAgCIAYihIAAgBQKyhUA4gOQAIgCABgNQAFgaggh5QgkiPg2iNIAFgHQHTAZAkAHQAGABAMAGQA3AaFzC4IATAKIGUDJIAQARIDsGrIgLAKMgj9AB1g");
		this.shape_79.setTransform(-111.3,241.1);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#625123").s().p("AyEIEQACiAAXi7IAAgDIAXihIABgBQKxhTA4gPQAJgCABgNQAFgZghh6QgjiOg3iNIAFgIQHRAZAmAHQAGABALAGQA2AZF0C5IAUAKIGTDJIAQARIDtGqIgMALMgj8AB1g");
		this.shape_80.setTransform(-111.3,241.1);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#625123").s().p("AxqDJIAAgDIAXihIAAgBQKwhTA6gPQAIgCACgMQAFgagih6QgjiMg3iPIAEgIQHSAZAlAHQAHABALAGQA1AYF1C6IATAKIGUDJIAQARIDsGqIgKALMgj9AB1QABiAAYi7g");
		this.shape_81.setTransform(-111.3,241.1);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#625123").s().p("AxqDJIAAgDIAXihIAAAAQKvhUA7gPQAIgCACgMQAFgZgih6QgjiMg4iQIAFgIQHRAZAmAHQAGABALAFQA0AZF2C6IAUAJIGTDKIAQAQIDtGqIgKAMMgj9AB1QACiAAXi7g");
		this.shape_82.setTransform(-111.3,241.1);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#625123").s().p("AxqDJIAAgDIAXihIAAAAQKuhUA8gPQAIgCACgLQAGgZgjh7QgiiLg5iRIAEgIQHQAZAnAHQAHABAKAFQAzAYF4C7IATAJIGTDJIAQARIDuGqIgKAMMgj9AB1QACiAAXi7g");
		this.shape_83.setTransform(-111.2,241.1);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#625123").s().p("AyCIEQACiAAXi7IAAgDIAWihIABAAQKthUA8gOQAJgDACgLQAGgYgjh8QgjiKg5iRIAEgJQHPAZAoAHQAHABAKAFQAyAYF4C7IATAJIGUDJIAQARIDtGqIgJAMMgj7AB1g");
		this.shape_84.setTransform(-111.2,241.1);

		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("#625123").s().p("AyBIEQABiAAXi7IAAgDIAXihIAAAAQKshUA+gOQAIgDACgLQAGgXgjh8QgjiJg5iTIAEgJQHOAZApAHQAGABALAFQAwAXF5C7IAUAKIGTDJIARAQIDsGqIgIANMgj7AB1g");
		this.shape_85.setTransform(-111.2,241.1);

		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.f("#625123").s().p("AyBIEQACiAAWi7IAAgDIAXihIAAAAQKrhTA/gPQAJgDABgKQAHgXgkh9QgjiIg5iUIADgJQHOAZApAHQAHABAKAFQAwAWF6C8IATAKIGTDJIARAQIDtGqIgHANMgj7AB1g");
		this.shape_86.setTransform(-111.2,241.1);

		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.f("#625123").s().p("AxoDJIAAgCIAXiiIAAAAQKqhTA/gPQAJgCACgLQAHgWglh+QgjiHg5iUIACgKQHNAZAqAHQAHABAKAFQAvAWF8C8IATAKIGTDJIARAQIDtGqIgHANMgj8AB1QACiAAXi7g");
		this.shape_87.setTransform(-111.1,241.1);

		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.f("#625123").s().p("AxoDJIAAgCIAXiiIAAAAQKphTBBgPQAIgCACgLQAHgVgkh/QgkiGg5iVIACgKQHMAZArAHQAHABAKAFQAuAVF8C9IATAKIGTDIIARAQIDtGqIgGAOMgj7AB1QACiAAWi7g");
		this.shape_88.setTransform(-111.1,241.1);

		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.f("#625123").s().p("AxnDJIAAgCIAWiiIAAAAQKohTBCgPQAJgCABgKQAIgWglh+QgjiFg6iXIACgKQHKAZAtAHQAHABAJAEQAtAVF9C+IAUAJIGTDJIARAQIDsGqIgFAOMgj7AB1QACiAAXi7g");
		this.shape_89.setTransform(-111.1,241.1);

		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.f("#625123").s().p("Ax+IEQABiAAWi7IAAgCIAXihIAAgBQKmhSBEgQQAIgCADgKQAHgUgliAQgkiDg7iYIABgLQHKAZAtAHQAJABAIAEQAsAUF+C/IAUAJIGSDJIASAPIDtGqIgFAPMgj5AB1g");
		this.shape_90.setTransform(-111,241.1);

		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.f("#625123").s().p("AxmDJIAAgCIAVihIABgBQKkhSBFgQQAKgCABgJQAJgUgniAQgjiDg7iZIABgLQHJAZAuAHQAIABAIAEQArAUGAC+IATAKIGTDJIASAPIDsGqIgDAPMgj6AB1QABiAAXi7g");
		this.shape_91.setTransform(-111,241.1);

		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.f("#625123").s().p("Ax+IEQACiAAWi7IAAgCIAWihIAAgBQKkhSBGgQQAJgCADgJQAHgTgmiBQgjiBg8ibIABgLQHHAZAwAHQAHABAJAEQAqATGBC/IASAKIGUDJIASAPIDrGpIgCAQMgj5AB1g");
		this.shape_92.setTransform(-111,241.1);

		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.f("#625123").s().p("AxlDKIAAgDIAVihIABgBQKihSBHgQQAKgCACgJQAIgSgniCQgjiAg8ibIAAgMQHHAZAwAHQAIABAIAEQApASGCDAIATAKIGTDIIASAPIDsGqIgCAQMgj5AB1QABiAAXi6g");
		this.shape_93.setTransform(-111,241.1);

		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.f("#625123").s().p("Ax9IEQACiAAWi6IAAgDIAVihIABgBQKhhSBJgQQAJgCACgIQAIgSgmiCQgkiAg9icIABgMQHGAZAxAGQAIACAIADQAoATGCDAIATAKIGTDIIASAPIDsGpIgBARMgj4AB1g");
		this.shape_94.setTransform(-110.9,241.1);

		this.shape_95 = new cjs.Shape();
		this.shape_95.graphics.f("#625123").s().p("Ax8IEQABiAAWi6IAAgDIAWihIAAgBQKhhSBJgQQAJgCADgIQAIgRgniDQgkh/g8idIgBgMQHGAYAxAHQAJACAHADQAnASGEDBIATAJIGTDJIASAPIDsGpIgBARMgj4AB1g");
		this.shape_95.setTransform(-110.9,241.1);

		this.shape_96 = new cjs.Shape();
		this.shape_96.graphics.f("#625123").s().p("Ax7IEQABiAAWi6IAAgDIAWihIAAgBQKfhRBKgQQAKgDACgIQAJgRgoiDQgkh9g8ieIgBgNQHFAYAyAHQAJACAGADQAnASGEDBIAUAJIGSDJIATAOIDsGqIAAARMgj4AB1g");
		this.shape_96.setTransform(-110.9,241.1);

		this.shape_97 = new cjs.Shape();
		this.shape_97.graphics.f("#625123").s().p("Ax8IEQACiAAWi6IAAgDIAVihIAAgBQKfhRBLgQQAJgDADgHQAJgRgoiEQgkh8g9ifIgBgNQHEAYAzAHQAJACAHADIGqDSIATAKIGTDJIATAOIDsGpIAAASMgj3AB1g");
		this.shape_97.setTransform(-110.8,241.1);

		this.shape_98 = new cjs.Shape();
		this.shape_98.graphics.f("#625123").s().p("AxkDKIAAgDIAVihIAAgBQKehRBMgQQAKgDACgHQAJgQgoiEQgkh8g+igIgBgNQHDAYA0AHQAJACAHADQAkAQGGDCIAUAKIGSDJIATAOIDsGpIABASMgj3AB1QABiAAWi6g");
		this.shape_98.setTransform(-110.8,241.1);

		this.shape_99 = new cjs.Shape();
		this.shape_99.graphics.f("#625123").s().p("Ax7IEQABiAAWi6IAAgDIAVihIABgBQKchRBNgQQAKgDACgGQAKgQgpiFQgkh7g+igIgBgOQHBAYA2AHQAIABAHAEQAjAQGHDCIAUAKIGSDIIATAOIDsGqIACASMgj3AB1g");
		this.shape_99.setTransform(-110.7,241.1);

		this.shape_100 = new cjs.Shape();
		this.shape_100.graphics.f("#625123").s().p("Ax7IEQACiAAVi6IAAgDIAVihIABgBQKahRBPgQQAKgCADgHQAJgOgpiGQgkh5g/ijIgCgOQHAAYA3AHQAJABAGADQAiAQGJDDIATAKIGTDIIATAOIDsGpIADATMgj2AB1g");
		this.shape_100.setTransform(-110.6,241.1);

		this.shape_101 = new cjs.Shape();
		this.shape_101.graphics.f("#625123").s().p("AxkDLIAAgDIAVihIABgBQKYhRBQgQQALgDADgGQAKgOgriHQgjh4hAijIgCgPQHAAYA3AIQAKABAFADQAhAOGKDEIATAJIGTDJIATANIDsGqIAEATMgj2AB1QABh/AVi6g");
		this.shape_101.setTransform(-110.5,241.1);

		this.shape_102 = new cjs.Shape();
		this.shape_102.graphics.f("#625123").s().p("Ax7IEQACh/AWi6IAAgDIAUihIAAgBQKYhRBSgQQAKgDACgGQALgNgriIQgjh3g/ikIgEgPQG/AYA4AIQAKABAFADQAgANGLDFIAUAJIGRDJIAVANIDrGqIAEATMgj1AB1g");
		this.shape_102.setTransform(-110.5,241.1);

		this.shape_103 = new cjs.Shape();
		this.shape_103.graphics.f("#625123").s().p("AxkDLIAAgDIAVihIAAgBQKXhRBSgQQALgDACgFQALgNgriIQgjh3hAikIgDgQQG9AYA6AIQAJABAFACQAfAOGMDEIATAKIGSDJIAUANIDsGpIAFAUMgj1AB1QABh/AVi6g");
		this.shape_103.setTransform(-110.4,241.1);

		this.shape_104 = new cjs.Shape();
		this.shape_104.graphics.f("#625123").s().p("AxkDLIAAgDIAVihIAAgBQKWhRBTgQQALgDADgFQAKgNgriIQgjh1hBimIgDgQQG9AYA6AIQAJABAFACQAfAOGMDEIAUAKIGSDJIAUAMIDsGpIAFAVMgj1AB1QABh/AVi6g");
		this.shape_104.setTransform(-110.4,241.1);

		this.shape_105 = new cjs.Shape();
		this.shape_105.graphics.f("#625123").s().p("Ax6IEQABh/AVi6IAAgDIAVihIAAgBQKVhRBUgQQALgDADgEQALgNgsiJQgjh0hBinIgEgQQG8AYA7AIQAKABAFACQAdANGNDFIAUAKIGSDJIAUAMIDsGpIAGAVMgj1AB1g");
		this.shape_105.setTransform(-110.3,241.1);

		this.shape_106 = new cjs.Shape();
		this.shape_106.graphics.f("#625123").s().p("AxjDLIAAgDIAUihIAAgBQKUhRBVgQQALgDACgEQAMgLgtiLQgihyhCipIgEgQQG8AYA7AIQAKABAEACQAdAMGPDGIASAKIGTDJIAUAMIDsGoIAHAWMgj1AB1QACh/AVi6g");
		this.shape_106.setTransform(-110.2,241.1);

		this.shape_107 = new cjs.Shape();
		this.shape_107.graphics.f("#625123").s().p("AxjDLIAAgDIAUihIAAgBQKThQBWgRQALgCADgFQALgLgsiKQgkhzhBioIgEgRQG6AYA9AIQAKABAEACQAbAMGQDGIATAKIGSDIIAVANIDrGoIAIAWMgj1AB1QACh/AVi6g");
		this.shape_107.setTransform(-110.2,241.1);

		this.shape_108 = new cjs.Shape();
		this.shape_108.graphics.f("#625123").s().p("AxjDLIAAgDIAUihIAAgBQKShQBXgRQALgDADgEQAMgKgtiLQgkhxhCiqIgEgRQG6AYA9AIQAKABAEACQAaALGRDHIATAJIGSDJIAVANIDrGoIAJAWMgj1AB1QACh/AVi6g");
		this.shape_108.setTransform(-110.1,241.1);

		this.shape_109 = new cjs.Shape();
		this.shape_109.graphics.f("#625123").s().p("Ax5IEQABh/AVi6IAAgDIAUihIAAgBQKRhQBYgRQALgDADgEQAMgJguiMQgjhwhCirIgFgRQG5AYA+AHIAOADQAaALGRDHIATAKIGSDJIAVAMIDsGoIAJAXMgj0AB1g");
		this.shape_109.setTransform(-110.1,241.1);

		this.shape_110 = new cjs.Shape();
		this.shape_110.graphics.f("#625123").s().p("AxjDLIAAgDIAUihIAAgBQKPhPBagSQALgCADgEQAMgJguiMQgjhvhDisIgFgSQG4AYA/AHIAOADQAZALGSDHIATAKIGSDJIAVAMIDsGoIAJAXMgjzAB1QABh/AVi6g");
		this.shape_110.setTransform(-110,241.1);

		this.shape_111 = new cjs.Shape();
		this.shape_111.graphics.f("#625123").s().p("AxjDLIAAgDIAUihIAAAAQKNhQBbgSQAMgDADgDQAMgHguiNQgkhuhCiuIgHgSQG3AYBAAHQALABADACQAXAJGUDJIATAKIGSDJIAVALID3HAMgjzAB1QABh/AVi6g");
		this.shape_111.setTransform(-109.9,241.1);

		this.shape_112 = new cjs.Shape();
		this.shape_112.graphics.f("#625123").s().p("AxjDLIAAgCIAUihIAAgBQKMhQBcgSQAMgCAEgDQAMgHgviOQgjhthEivIgGgSQG1AXBCAIQALABACACQAXAJGUDJIAUAKIGRDIIAWAMID3HAMgjzAB1QABh/AVi6g");
		this.shape_112.setTransform(-109.8,241.1);

		this.shape_113 = new cjs.Shape();
		this.shape_113.graphics.f("#625123").s().p("AxjDLIAAgCIAUihIAAgBQKLhQBegRQALgDADgDQANgGgviPQgkhshDiwIgHgSQG1AXBCAIQALABADACQAUAIGWDKIAUAKIGSDIIAVAMID4HAMgjzAB1QACh/AUi6g");
		this.shape_113.setTransform(-109.8,241.1);

		this.shape_114 = new cjs.Shape();
		this.shape_114.graphics.f("#625123").s().p("AxjDLIAAgCIAUihIAAgBQKKhQBegRQANgDADgCQANgHgwiOQgkhrhEixIgGgTQGzAXBEAIQAKABACACQAVAHGXDLIATAKIGRDIIAXALID3HBMgjxAB1QABh/AUi6g");
		this.shape_114.setTransform(-109.7,241.1);

		this.shape_115 = new cjs.Shape();
		this.shape_115.graphics.f("#625123").s().p("AxjDLIAAgCIAUihIAAgBQKJhQBfgRQAMgDAEgCQANgGgwiPQgkhqhEiyIgIgTQGzAXBEAIIAOACQATAIGYDKIATAKIGSDIIAVAMID5HBMgjxAB1QABh/AUi6g");
		this.shape_115.setTransform(-109.7,241.1);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

		// rockbase_front.png
		this.instance_2 = new lib.rockbase_front();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-361,184);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

		// small_rock_details.png
		this.instance_3 = new lib.small_rock_details();
		this.instance_3.parent = this;
		this.instance_3.setTransform(260,0);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

		// small Rock cover
		this.shape_116 = new cjs.Shape();
		this.shape_116.graphics.f("#625123").s().p("AlIC+IBIjbIBhifID8gBIDsF7g");
		this.shape_116.setTransform(271.7,19);

		this.shape_117 = new cjs.Shape();
		this.shape_117.graphics.f("#625123").s().p("AlJC+IBJjbIBgieID+gCIDsF7g");
		this.shape_117.setTransform(271.6,19);
		this.shape_117._off = true;

		this.shape_118 = new cjs.Shape();
		this.shape_118.graphics.f("#625123").s().p("AlJC+IBIjbIBhieID+gCIDsF7g");
		this.shape_118.setTransform(271.6,19);

		this.shape_119 = new cjs.Shape();
		this.shape_119.graphics.f("#625123").s().p("AlKC+IBIjcIBiidID+gCIDsF7g");
		this.shape_119.setTransform(271.6,19);

		this.shape_120 = new cjs.Shape();
		this.shape_120.graphics.f("#625123").s().p("AlKC+IBIjcIBhidIEAgCIDsF7g");
		this.shape_120.setTransform(271.5,19);
		this.shape_120._off = true;

		this.shape_121 = new cjs.Shape();
		this.shape_121.graphics.f("#625123").s().p("AlKC+IBHjcIBiidIEAgCIDsF7g");
		this.shape_121.setTransform(271.5,19);
		this.shape_121._off = true;

		this.shape_122 = new cjs.Shape();
		this.shape_122.graphics.f("#625123").s().p("AlLC+IBHjcIBiidIECgCIDsF7g");
		this.shape_122.setTransform(271.4,19);
		this.shape_122._off = true;

		this.shape_123 = new cjs.Shape();
		this.shape_123.graphics.f("#625123").s().p("AlLC+IBGjcIBjidIECgCIDsF7g");
		this.shape_123.setTransform(271.4,19);

		this.shape_124 = new cjs.Shape();
		this.shape_124.graphics.f("#625123").s().p("AlLC+IBFjcIBjieIEDgBIDsF7g");
		this.shape_124.setTransform(271.4,19);

		this.shape_125 = new cjs.Shape();
		this.shape_125.graphics.f("#625123").s().p("AlMC+IBGjcIBjieIEEgBIDsF7g");
		this.shape_125.setTransform(271.3,19);
		this.shape_125._off = true;

		this.shape_126 = new cjs.Shape();
		this.shape_126.graphics.f("#625123").s().p("AlMC+IBFjcIBkieIEEgBIDsF7g");
		this.shape_126.setTransform(271.3,19);

		this.shape_127 = new cjs.Shape();
		this.shape_127.graphics.f("#625123").s().p("AlNC+IBGjcIBjieIEFgBIDsF7g");
		this.shape_127.setTransform(271.3,19);

		this.shape_128 = new cjs.Shape();
		this.shape_128.graphics.f("#625123").s().p("AlNC+IBFjcIBkieIEGgBIDsF7g");
		this.shape_128.setTransform(271.2,19);
		this.shape_128._off = true;

		this.shape_129 = new cjs.Shape();
		this.shape_129.graphics.f("#625123").s().p("AlOC+IBGjcIBkieIEGgBIDsF7g");
		this.shape_129.setTransform(271.2,19);

		this.shape_130 = new cjs.Shape();
		this.shape_130.graphics.f("#625123").s().p("AlOC+IBFjdIBlidIEGgBIDsF7g");
		this.shape_130.setTransform(271.2,19);

		this.shape_131 = new cjs.Shape();
		this.shape_131.graphics.f("#625123").s().p("AlOC+IBFjdIBkidIEIgBIDsF7g");
		this.shape_131.setTransform(271.1,19);

		this.shape_132 = new cjs.Shape();
		this.shape_132.graphics.f("#625123").s().p("AlOC+IBEjdIBlidIEIgBIDsF7g");
		this.shape_132.setTransform(271.1,19);
		this.shape_132._off = true;

		this.shape_133 = new cjs.Shape();
		this.shape_133.graphics.f("#625123").s().p("AlOC+IBDjdIBmidIEIgBIDsF7g");
		this.shape_133.setTransform(271.1,19);

		this.shape_134 = new cjs.Shape();
		this.shape_134.graphics.f("#625123").s().p("AlPC+IBEjdIBlidIEKgBIDsF7g");
		this.shape_134.setTransform(271,19);

		this.shape_135 = new cjs.Shape();
		this.shape_135.graphics.f("#625123").s().p("AlPC+IBDjdIBmidIEKgBIDsF7g");
		this.shape_135.setTransform(271,19);

		this.shape_136 = new cjs.Shape();
		this.shape_136.graphics.f("#625123").s().p("AlPC+IBCjdIBmidIELgBIDsF7g");
		this.shape_136.setTransform(271,19);

		this.shape_137 = new cjs.Shape();
		this.shape_137.graphics.f("#625123").s().p("AlQC+IBDjdIBmidIEMgBIDsF7g");
		this.shape_137.setTransform(270.9,19);

		this.shape_138 = new cjs.Shape();
		this.shape_138.graphics.f("#625123").s().p("AlQC+IBCjdIBnidIEMgBIDsF7g");
		this.shape_138.setTransform(270.9,19);
		this.shape_138._off = true;

		this.shape_139 = new cjs.Shape();
		this.shape_139.graphics.f("#625123").s().p("AlRC+IBDjdIBmidIENgBIDsF7g");
		this.shape_139.setTransform(270.9,19);

		this.shape_140 = new cjs.Shape();
		this.shape_140.graphics.f("#625123").s().p("AlRC+IBCjdIBnidIEOgBIDsF7g");
		this.shape_140.setTransform(270.8,19);

		this.shape_141 = new cjs.Shape();
		this.shape_141.graphics.f("#625123").s().p("AlRC+IBBjdIBoidIEOgBIDsF7g");
		this.shape_141.setTransform(270.8,19);

		this.shape_142 = new cjs.Shape();
		this.shape_142.graphics.f("#625123").s().p("AlSC+IBCjdIBoidIEOgBIDsF7g");
		this.shape_142.setTransform(270.8,19);

		this.shape_143 = new cjs.Shape();
		this.shape_143.graphics.f("#625123").s().p("AlSC9IBBjdIBoicIEQgBIDsF7g");
		this.shape_143.setTransform(270.7,19);
		this.shape_143._off = true;

		this.shape_144 = new cjs.Shape();
		this.shape_144.graphics.f("#625123").s().p("AlSC9IBAjdIBpicIEQgBIDsF7g");
		this.shape_144.setTransform(270.7,19);

		this.shape_145 = new cjs.Shape();
		this.shape_145.graphics.f("#625123").s().p("AlTC9IBBjdIBpicIEQgBIDsF7g");
		this.shape_145.setTransform(270.7,19);

		this.shape_146 = new cjs.Shape();
		this.shape_146.graphics.f("#625123").s().p("AlTC9IBBjdIBoicIESgBIDsF7g");
		this.shape_146.setTransform(270.6,19);

		this.shape_147 = new cjs.Shape();
		this.shape_147.graphics.f("#625123").s().p("AlTC9IBAjdIBpicIESgBIDsF7g");
		this.shape_147.setTransform(270.6,19);

		this.shape_148 = new cjs.Shape();
		this.shape_148.graphics.f("#625123").s().p("AlTC9IA/jdIBqicIESgBIDsF7g");
		this.shape_148.setTransform(270.6,19);
		this.shape_148._off = true;

		this.shape_149 = new cjs.Shape();
		this.shape_149.graphics.f("#625123").s().p("AlUC9IBAjdIBpicIEUgBIDsF7g");
		this.shape_149.setTransform(270.5,19);

		this.shape_150 = new cjs.Shape();
		this.shape_150.graphics.f("#625123").s().p("AlUC9IA/jdIBqicIEUgBIDsF7g");
		this.shape_150.setTransform(270.5,19);

		this.shape_151 = new cjs.Shape();
		this.shape_151.graphics.f("#625123").s().p("AlUC9IA+jdIBricIEUgBIDsF7g");
		this.shape_151.setTransform(270.5,19);

		this.shape_152 = new cjs.Shape();
		this.shape_152.graphics.f("#625123").s().p("AlUC9IA+jdIBqicIEVgBIDsF7g");
		this.shape_152.setTransform(270.5,19);

		this.shape_153 = new cjs.Shape();
		this.shape_153.graphics.f("#625123").s().p("AlSC+IBBjdIBpidIEOgBIDsF7g");
		this.shape_153.setTransform(270.8,19);

		this.shape_154 = new cjs.Shape();
		this.shape_154.graphics.f("#625123").s().p("AlNC+IBEjcIBlieIEGgBIDsF7g");
		this.shape_154.setTransform(271.2,19);

		this.shape_155 = new cjs.Shape();
		this.shape_155.graphics.f("#625123").s().p("AlNC+IBGjcIBjieIEGgBIDsF7g");
		this.shape_155.setTransform(271.2,19);

		this.shape_156 = new cjs.Shape();
		this.shape_156.graphics.f("#625123").s().p("AlMC+IBHjcIBiieIEEgBIDsF7g");
		this.shape_156.setTransform(271.3,19);

		this.shape_157 = new cjs.Shape();
		this.shape_157.graphics.f("#625123").s().p("AlLC+IBGjcIBiidIEDgCIDsF7g");
		this.shape_157.setTransform(271.4,19);

		this.shape_158 = new cjs.Shape();
		this.shape_158.graphics.f("#625123").s().p("AlKC+IBIjbIBiieID+gCIDsF7g");
		this.shape_158.setTransform(271.6,19);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_116}]}).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_116}]},1).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.shape_117).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(113).to({_off:false},0).wait(2).to({_off:true},1).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.shape_120).wait(6).to({_off:false},0).wait(2).to({_off:true},1).wait(103).to({_off:false},0).wait(1).to({_off:true},1).wait(6));
		this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(9).to({_off:false},0).wait(1).to({_off:true},1).wait(98).to({_off:false},0).wait(2).to({_off:true},1).wait(8));
		this.timeline.addTween(cjs.Tween.get(this.shape_122).wait(11).to({_off:false},0).wait(2).to({_off:true},1).wait(92).to({_off:false},0).wait(2).to({_off:true},1).wait(11));
		this.timeline.addTween(cjs.Tween.get(this.shape_125).wait(16).to({_off:false},0).wait(2).to({_off:true},1).wait(82).to({_off:false},0).wait(1).to({_off:true},1).wait(17));
		this.timeline.addTween(cjs.Tween.get(this.shape_128).wait(21).to({_off:false},0).wait(2).to({_off:true},1).wait(72).to({_off:false},0).wait(1).to({_off:true},1).wait(22));
		this.timeline.addTween(cjs.Tween.get(this.shape_132).wait(27).to({_off:false},0).wait(1).to({_off:true},1).wait(61).to({_off:false},0).wait(2).to({_off:true},1).wait(27));
		this.timeline.addTween(cjs.Tween.get(this.shape_138).wait(37).to({_off:false},0).wait(1).to({_off:true},1).wait(41).to({_off:false},0).wait(2).to({_off:true},1).wait(37));
		this.timeline.addTween(cjs.Tween.get(this.shape_143).wait(45).to({_off:false},0).wait(2).to({_off:true},1).wait(23).to({_off:false},0).wait(2).to({_off:true},1).wait(46));
		this.timeline.addTween(cjs.Tween.get(this.shape_148).wait(52).to({_off:false},0).wait(2).to({_off:true},1).wait(9).to({_off:false},0).wait(2).to({_off:true},1).wait(53));

		// small_rock_base.png
		this.instance_4 = new lib.small_rock_base();
		this.instance_4.parent = this;
		this.instance_4.setTransform(178,0);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

		// Water_1
		this.instance_5 = new lib.Water_1();
		this.instance_5.parent = this;
		this.instance_5.setTransform(-398.3,144.4,0.71,0.71,0,0,0,96.5,42.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-402.3},57).to({x:-398.3},62).wait(1));

		// 1_paddleBoarder
		this.instance_6 = new lib._1_paddleBoarder("synched",0,false);
		this.instance_6.parent = this;
		this.instance_6.setTransform(-452.4,-440.9);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120));

		// Water_1
		this.instance_7 = new lib.Water_1();
		this.instance_7.parent = this;
		this.instance_7.setTransform(247.8,133.4,0.71,0.71,0,0,0,96.5,42.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:96.6,scaleX:0.68,scaleY:0.68,x:240.9},63).to({regX:96.5,scaleX:0.71,scaleY:0.71,x:247.8},56).wait(1));

		// Water_1
		this.instance_8 = new lib.Water_1();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-31.4,-0.9,0.9,0.9,0,0,0,96.5,42.3);

		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:42.2,scaleX:1,scaleY:1,x:-51.3,y:-1},54).to({regY:42.3,scaleX:0.9,scaleY:0.9,x:-31.4,y:-0.9},65).wait(1));

		// water.png
		this.instance_9 = new lib.water_1();
		this.instance_9.parent = this;
		this.instance_9.setTransform(-56.4,132,1,1.002,0,-3.4,0,351.5,152);

		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:152.1,scaleY:0.99,skewX:0,x:-56.5,y:132.1},49).to({regY:152,scaleY:1,skewX:-3.4,x:-56.4,y:132},70).wait(1));

		// big_rock_details.png
		this.instance_10 = new lib.big_rock_details();
		this.instance_10.parent = this;
		this.instance_10.setTransform(-150,-96);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(120));

		// rock_cover
		this.shape_159 = new cjs.Shape();
		this.shape_159.graphics.f("#625123").s().p("AyCDJIAngKIAAAAIH/h+IAAifIAYgkIADgDIEOmMIBtgFIEWKkIAGgLIARgaIBDgEICLBkIFKAAIEgjsIAyAIIA9CmIARAjIAEAZIBgEIMggAABIg");
		this.shape_159.setTransform(-68.5,-54.5);

		this.shape_160 = new cjs.Shape();
		this.shape_160.graphics.f("#625123").s().p("AyCDJIAngKIAAAAIH/h+IAAifIEpmzIBtgFIEXKkIAFgLIARgaIAHAAIAigCIAagCIAIAGICDBeIFKAAIACgBIEejrIAyAIIA9CmIARAjIAEAZIBgEIMggBABIg");
		this.shape_160.setTransform(-68.5,-54.5);

		this.shape_161 = new cjs.Shape();
		this.shape_161.graphics.f("#625123").s().p("AyDDJIAngKIABAAIH/h+IAAifIEpmzIBtgFIEXKjIAFgKIASgaIAGAAIAigCIAagBIAIAGICDBeIFLAAIACgBIEdjsIAyAIIA9CmIASAiIAEAaIBgEIMggCABIg");
		this.shape_161.setTransform(-68.6,-54.5);

		this.shape_162 = new cjs.Shape();
		this.shape_162.graphics.f("#625123").s().p("AyDDJIAAAAIAngJIAAAAIH/h/IAAigIAQgYIALgOIEOmLIBugGIEXKjIAGgKIARgZIAHgBIAhgBIAagCIAIAGICEBeIFKAAIACgBIEdjsIAzAIIA9CmIARAiIAEAaIBgEIMggCABIg");
		this.shape_162.setTransform(-68.6,-54.5);

		this.shape_163 = new cjs.Shape();
		this.shape_163.graphics.f("#625123").s().p("AyDDJIAAAAIAngJIAAAAIH/h/IAAigIAQgYIALgOIEPmLIBtgGIEYKjIAFgKIARgZIAHgBIAigBIAagBIAIAFICDBeIAHABIFDAAIACgBIEejtIAxAIIAFAKIA8CkIAOAaIAEAaIBgEIIgDAAMggAABIg");
		this.shape_163.setTransform(-68.6,-54.5);

		this.shape_164 = new cjs.Shape();
		this.shape_164.graphics.f("#625123").s().p("AuIINIj8lEIAngJIABAAIAggIIAAAAIHfh3IAAigIAQgZIAIgKIADgDID/l4IAQgTIBtgGIAJAQIEPKTIAFgKIARgZIAHgBQAQgBASAAIAagBIAIAGICDBeIAHAAIFDAAIACgBIEejsIAMABIAmAGIAEAKIA5CbIARAjIAFAZIBgEJIgEAAMggAABIg");
		this.shape_164.setTransform(-68.7,-54.5);

		this.shape_165 = new cjs.Shape();
		this.shape_165.graphics.f("#625123").s().p("AuIINIj8lEIAngJIAAAAIIAh/IAAigIAQgZIAIgKIADgDID/l4IAQgTIBtgGIAIAQIEQKTIAFgJIASgaIAGgBQAQgBASAAIAaAAIAIAFICDBeIAHABIFDAAIADgBIEdjtIAMABIAmAGIAEAKIA5CbIASAjIAEAZIBgEJIgEAAMggAABIg");
		this.shape_165.setTransform(-68.7,-54.5);

		this.shape_166 = new cjs.Shape();
		this.shape_166.graphics.f("#625123").s().p("AuJINIj7lEIgBAAIAogJIAAAAIIAh/IAAigIAPgZIAJgKIADgDID/l5IAPgSIBugGIAJAPIEQKTIAEgJIASgZIAGgCQAQgBATABIAaAAIAIAFICCBeIAIABIFDAAIACgBIEdjtIAMAAIAmAGIAFAKIA4CcIASAjIAFAZIBfEJIgDAAMggBABIg");
		this.shape_166.setTransform(-68.7,-54.4);

		this.shape_167 = new cjs.Shape();
		this.shape_167.graphics.f("#625123").s().p("AuJINIj8lEIAngJIABAAIIAh/IAAigIAPgZIAMgNID+l5IAQgSIBugGIAJAPIEQKTIAFgJIARgZIAHgCQAQgBASABIAZAAIAIAGICEBeIAHAAIFDAAIACgBIEdjtIAMAAIAmAGIAFAKIA5CcIARAiIAFAZIBgEKIgEAAMggBABIg");
		this.shape_167.setTransform(-68.8,-54.4);

		this.shape_168 = new cjs.Shape();
		this.shape_168.graphics.f("#625123").s().p("AuKIOIj7lEIAAgBIAngJIABAAIH/h/IAAieIABgCIAOgaIARgSID6lzIAQgSIBugGIAJAPIEQKTIADgEIAGgLIAOgTIAFgCQARAAARABIAaAAIAIAFICEBeIAGABIFEAAIADgBIEcjuIAMAAIAmAGIAFAKIA5CcIASAiIAEAZIBgEKIgEAAMggCABIg");
		this.shape_168.setTransform(-68.8,-54.4);

		this.shape_169 = new cjs.Shape();
		this.shape_169.graphics.f("#625123").s().p("AuKIOIj7lEIAAgBIAngJIAAAAIIAh/IAAieIAAgCIAQgaIAQgSID6l0IAQgRIBugGIAJAOIERKUIACgEIACgEIARgaIAHgCQAQAAASABIAaAAIAIAGICDBdIAHABIFEAAIACgBIEdjuIALAAIAmAGIAGAKIA8CkIANAaIAGAZIBfEJIgCABMggDABIg");
		this.shape_169.setTransform(-68.8,-54.4);

		this.shape_170 = new cjs.Shape();
		this.shape_170.graphics.f("#625123").s().p("AuKIOIj8lEIAAgBIAngJIABAAIIAh/IAAieIAAgCIAPgaIARgSID5l0IARgRIBugGIAKAOIEQKUIADgEIACgEIARgaIAGgCQAQgBASACIAaABIAIAFICDBeIAHABIFEAAIACgBIEdjuIALgBIAmAGIAGAJIA8ClIAOAaIAFAZIBgEJIgDABMggEABIg");
		this.shape_170.setTransform(-68.9,-54.4);

		this.shape_171 = new cjs.Shape();
		this.shape_171.graphics.f("#625123").s().p("AuLIOIj7lEIAAgBIAngJIABAAIAfgHIABAAIHfh4IAAieIABgCIAPgaIAQgSID6l0IARgRIBugGIAKANIEQKVIADgEIACgEIARgaIAGgCQAQgBASACIAaABIAIAFICEBeIAGABIFEAAIADgBIEcjuIALgBIAmAGIAGAJIA8ClIAOAaIAFAZIBgEJIgDABMggFABIg");
		this.shape_171.setTransform(-68.9,-54.4);

		this.shape_172 = new cjs.Shape();
		this.shape_172.graphics.f("#625123").s().p("AuLIOIj7lEIAAgBIAngIIABAAIIAiAIAAieIAAgCIAPgaIAJgKIADgDIAFgFID5l0IARgQIBugHIAKANIEQKUIADgCIACgFIASgaIAGgCQAPAAATACIAaABIAIAFICDBeIAHABIFEAAIACgBIEcjvIAMgBIAmAGIAGAJIA4CcIASAjIAEAZIBgEJIgCABMggFABIg");
		this.shape_172.setTransform(-69,-54.4);

		this.shape_173 = new cjs.Shape();
		this.shape_173.graphics.f("#625123").s().p("AuLIPIj7lFIgBgBIIoiIIAAieIABgDIAOgZIAJgKIAEgDIAFgFID5l1IARgPIBugHIALAMIEPKVIAEgCIACgFIARgaIAGgCQAPAAATACIAZABIAJAFICDBeIAHACIFEAAIADgBIEbjwIALgBIAnAGIAGAJIA5CcIARAjIAEAZIBhEJIgDABMggGABIg");
		this.shape_173.setTransform(-69,-54.4);

		this.shape_174 = new cjs.Shape();
		this.shape_174.graphics.f("#625123").s().p("AuMIPIj7lFIAAAAIAngJIABAAIAggIIAAAAIHgh4IAAieIABgDIAOgZIAJgKIAEgDIAEgFID5l1IASgPIBugHIALAMIEQKVIADgCIACgFIARgZIAGgDQAPAAATACIAaACIAIAEICDBfIAHABIFEAAIACAAIEdjxIALgBIAmAGIAGAIIA5CdIARAiIAFAZIBgEKIgDABMggGABIg");
		this.shape_174.setTransform(-69,-54.4);

		this.shape_175 = new cjs.Shape();
		this.shape_175.graphics.f("#625123").s().p("AuMIPIj7lFIAAAAIAngJIABAAIAggIIAAAAIHgh4IAAieIABgDIAOgZIAJgKIAEgDIAFgFID4l2IASgOIBugHIALALIEQKWIADgCIACgFIARgZIAHgDQAPAAASACQAOACAMABIAIADICEBfIAGACIFFAAIACgBIEcjxIALgBIAmAGIAGAIIA9ClIANAaIAFAZIBgEKIgCABMggHABIg");
		this.shape_175.setTransform(-69.1,-54.4);

		this.shape_176 = new cjs.Shape();
		this.shape_176.graphics.f("#625123").s().p("AuMIPIj7lFIAAAAIIoiJIAAieIAAgDIAPgZIAJgKIADgDIAGgFID4l2IASgOIBugHIALALIEQKWIAEgCIACgEIARgaIAFgDQAPAAATADQAOACAMAAIAIAEICEBfIAGABIFFAAIACAAIEcjyIALgBIAmAGIAGAIIA6CcIAQAjIAFAZIBhEKIgDABMggHABIg");
		this.shape_176.setTransform(-69.1,-54.4);

		this.shape_177 = new cjs.Shape();
		this.shape_177.graphics.f("#625123").s().p("AuNIQIj7lGIAAAAIAngJIABAAIIBiAIAAieIAAgDIAOgZIASgSID4l2IATgOIBugHIALALIERKWIADgCIACgEIARgaIAGgDQAPAAATADIAZADIAIADICEBfIAHACIFEAAIACgBIEcjxIALgCIAmAGIAHAIIA8ClIAOAZIAFAaIBgEKIgCABMggJABIg");
		this.shape_177.setTransform(-69.1,-54.4);

		this.shape_178 = new cjs.Shape();
		this.shape_178.graphics.f("#625123").s().p("AuNIQIj7lGIAAgBIAngIIABAAIAggHIAAAAIHhh6IAAidIAAgDIAOgaIASgSID4l2IATgNIBugHIAMAKIEQKXIADgCIACgEIARgaIAGgDQAPAAATADIAaADIAIADICDBfIAHACIFFAAIACgBIEbjyIALgCIAmAHIAHAIIA9CkIANAaIAFAaIBgEJIgCACMggJABIg");
		this.shape_178.setTransform(-69.2,-54.4);

		this.shape_179 = new cjs.Shape();
		this.shape_179.graphics.f("#625123").s().p("AuOIQIj6lGIAAgBIIoiJIAAieIABgDIAOgZIASgSID4l2IASgNIBugHIANAKIEQKWIAEgBIAFgLIAOgTIAFgDQAPAAATADQAOADAMAAIAIAEICDBfIAHABIFFAAIACAAIEcjzIAKgCIAmAHIAHAHIA6CcIAQAjIAFAaIBhEJIgDACMggJABIg");
		this.shape_179.setTransform(-69.2,-54.4);

		this.shape_180 = new cjs.Shape();
		this.shape_180.graphics.f("#625123").s().p("AuNIQIj8lGIAAgBIAngIIABAAIIBiBIAAieIABgDIAOgZIAJgKIAEgCIAFgGID4l2IATgNIBugHIAMAKIERKWIACgBIAHgLIANgTIAGgDQAOAAAUAEQANACAMABIAIADICEBfIAHACIFFAAIABgBIEbjyIAMgDIAmAHIAHAHIA4CcIASAjIAHAhIBeECIgCACMggKABIg");
		this.shape_180.setTransform(-69.2,-54.4);

		this.shape_181 = new cjs.Shape();
		this.shape_181.graphics.f("#625123").s().p("AuOIRIj7lHIAAgBIAngIIABAAIAggHIAAAAIHhh6IAAieIABgDIAOgaIAJgJIAEgCIAFgGID3l2IAUgNIBtgHIANAJIERKXIADgBIACgEIARgaIAGgDQAOAAATAEQAOADAMAAIAIAEICEBeIAGACIFGAAIACAAIEbjzIAKgDIAmAHIAIAHIA8ClIAOAaIACAIIAFAZIBeECIgBACMggLABIg");
		this.shape_181.setTransform(-69.3,-54.4);

		this.shape_182 = new cjs.Shape();
		this.shape_182.graphics.f("#625123").s().p("AuPIRIj6lHIgBgBIBIgPIABAAIHhh6IAAieIABgDIANgaIAKgJIAEgCIAEgGID4l3IATgMIBugHIAOAJIEQKXIADgBIACgEIARgZIAGgEQAOAAATAEQAOADAMABIAIADICEBfIAGACIFGAAIACgBIEbjzIAKgDIAmAHIAIAHIA5CcIARAjIADAIIAEAZIBfECIgCACMggLABIg");
		this.shape_182.setTransform(-69.3,-54.4);

		this.shape_183 = new cjs.Shape();
		this.shape_183.graphics.f("#625123").s().p("AuOIRIj7lHIgBgBIAngIIABAAIICiBIAAieIAAgDIAOgaIAKgJIADgCIAGgGID2l3IAVgMIBugHIAMAJIESKXIACAAIACgEIARgaIAGgEQAPAAATAEQAOAEALAAIAIADICFBfIAGACIFGAAIABAAIEbj0IALgDIAmAHIAIAGIA8ClIAOAaIACAJIAFAZIBeECIgCACMggMABIg");
		this.shape_183.setTransform(-69.3,-54.4);

		this.shape_184 = new cjs.Shape();
		this.shape_184.graphics.f("#625123").s().p("AuPISIj7lHIAAgCIAngIIABAAIICiBIAAieIAAgDIAOgaIAKgJIADgDIAGgFID2l3IAUgMIBugHIAOAIIERKXIADAAIACgDIARgbIAFgCQAOgBAUAEQAOAEAMABIAIADICEBeIAGADIFGAAIACgBIEaj0IALgDIAmAHIAIAGIA8ClIAOAaIACAJIAFAZIBeEBIgBACMggNABJg");
		this.shape_184.setTransform(-69.4,-54.4);

		this.shape_185 = new cjs.Shape();
		this.shape_185.graphics.f("#625123").s().p("AuQISIj6lHIgBgCIBIgOIABAAIHhh8IAAieIABgDIANgaIATgQID3l4IAUgLIBugHIAOAHIERKYIADAAIAFgKIAOgUIAFgCQAOgCAUAGQAOADAMABIAIADICDBfIAHACIFFAAIACAAIEcj1IAKgDIAmAHIAIAGIA5CcIARAjIADAJIAEAZIBfEBIgCACMggOABJg");
		this.shape_185.setTransform(-69.4,-54.4);

		this.shape_186 = new cjs.Shape();
		this.shape_186.graphics.f("#625123").s().p("AuQISIj6lHIgBgCIAogIIAAAAIAhgGIHhh8IAAieIAAgDIAPgaIATgQID1l4IAVgLIBugHIAOAHIESKYIACABIAGgLIANgUIAGgCQAOgCATAGQAOADAMABIAIADICEBgIAHACIFFAAIACgBIEaj1IALgDIAmAHIAJAFIA8CmIAOAaIACAIIAFAZIBeECIgCACMggNABJg");
		this.shape_186.setTransform(-69.4,-54.4);

		this.shape_187 = new cjs.Shape();
		this.shape_187.graphics.f("#625123").s().p("AuQISIj7lHIAAgCIIqiKIAAieIAAgDIAOgaIATgQID2l4IAVgLIBugHIAOAHIESKYIADABIAFgLIAOgTIAFgDQANgBAVAFQAOAEALABIAIACICEBgIAHACIFFAAIACAAIEbj2IAKgDIAmAHIAJAFIA5CdIARAjIACAIIAFAZIBeECIgBACMggPABJg");
		this.shape_187.setTransform(-69.5,-54.4);

		this.shape_188 = new cjs.Shape();
		this.shape_188.graphics.f("#625123").s().p("AuQISIj7lHIAAgCIBIgOIAAAAIHhh8IAAieIABgDIANgaIAUgQID2l4IAVgLIBugHIAPAGIERKZIADABIAFgLIAOgTIAFgDQANgBAVAFQAOAFALAAIAIADICEBfIAGADIFGAAIACgBIEbj2IAKgDIAmAHIAIAFIA9ClIANAbIAEAIIAEAZIBfECIgBACMggQABJg");
		this.shape_188.setTransform(-69.5,-54.4);

		this.shape_189 = new cjs.Shape();
		this.shape_189.graphics.f("#625123").s().p("AuRISIj7lHIAAgCIAogHIAAAAIAggGIABAAIHih9IAAieIAAgDIANgaIAUgQID2l5IAVgKIBugHIAPAGIERKZIADABIACgEIARgaIAGgDQAMgCAVAHQAOAEALABIAIACICFBgIAGACIFGAAIACAAIEaj2IAKgEIAnAHIAIAFIA8ClIAOAaIADAJIAFAYIBeEDIgBACMggQABJg");
		this.shape_189.setTransform(-69.5,-54.4);

		this.shape_190 = new cjs.Shape();
		this.shape_190.graphics.f("#625123").s().p("AuRITIj7lIIAAgCIBIgNIHih9IAAieIABgDIANgaIAUgQID1l5IAWgKIBugHIAPAGIERKYIADACIAGgLIANgTIAFgDQAOgCAUAHQAOAEALABIAIADICFBfIAGACIFGAAIACAAIEaj2IAKgEIAmAHIAJAEIA5CdIARAjIADAJIAFAYIBeEDIgBACMggQABJg");
		this.shape_190.setTransform(-69.6,-54.4);

		this.shape_191 = new cjs.Shape();
		this.shape_191.graphics.f("#625123").s().p("AuRITIj7lIIgBgCIBJgOIAAAAIHih8IAAieIABgDIANgbIAUgPID1l6IAWgJIBugHIAPAFIESKZIADACIAFgLIAOgTIAFgEQANgBAUAHQAPAFALAAIAIADICEBfIAGADIFHAAIACgBIEZj2IALgFIAmAHIAJAFIA8ClIAOAbIADAIIAEAZIBfEDIgBACMggRABJg");
		this.shape_191.setTransform(-69.6,-54.4);

		this.shape_192 = new cjs.Shape();
		this.shape_192.graphics.f("#625123").s().p("AuSITIj7lIIAAgCIAngHIABAAIAggGIABAAIHih9IAAieIABgDIAMgbIAUgPID2l6IAVgIIBvgIIAPAFIESKZIADACIAGgKIANgUIAFgEQANgBAUAHQAPAFALABIAIACICEBgIAGACIFHAAIACAAIEZj3IAKgFIAnAHIAJAFIA8ClIAOAaIADAJIAFAZIBeEDIgBACMggSABJg");
		this.shape_192.setTransform(-69.6,-54.4);

		this.shape_193 = new cjs.Shape();
		this.shape_193.graphics.f("#625123").s().p("AuSITIj7lIIAAgCIBIgNIHjh9IAAieIAAgDIANgbIAUgPID1l6IAWgIIBvgIIAPAFIESKZIADADIAGgLIANgUIAFgEQANgBAVAIQAOAEALABIAIADICEBfIAHADIFGAAIACgBIEaj3IAKgFIAmAHIAJAFIA5CcIARAjIADAJIAFAZIBeEDIgBACMggSABJg");
		this.shape_193.setTransform(-69.7,-54.4);

		this.shape_194 = new cjs.Shape();
		this.shape_194.graphics.f("#625123").s().p("AuSIUIj7lJIgBgCIBJgNIHjh9IAAieIAAgDIANgbIAVgPID0l7IAXgHIBugIIAQAEIESKaIADADIAFgLIANgUIAFgEQANgBAVAIQAOAFALABIAIACICFBfIAGADIFHAAIACAAIEZj4IAKgFIAmAHIAJAFIA9ClIARAiIAEAaIBfECIgBADMggTABJg");
		this.shape_194.setTransform(-69.7,-54.4);

		this.shape_195 = new cjs.Shape();
		this.shape_195.graphics.f("#625123").s().p("AuTIUIj6lJIgBgBIAngIIABAAIAhgGIAAAAIHjh9IAAieIAAgDIANgbIAUgPID0l7IAXgHIBugIIARAEIESKaIADADIAGgLIAMgTIAGgFQAMgBAVAIQAOAFALABIAIACICFBgIAGADIFHAAIACgBIEZj3IAKgGIAmAHIAKAEIA8CmIAOAaIADAIIAFAZIBeEDIgBADMggUABJg");
		this.shape_195.setTransform(-69.7,-54.4);

		this.shape_196 = new cjs.Shape();
		this.shape_196.graphics.f("#625123").s().p("AuTIUIj7lJIAAgBIBIgOIABAAIHih9IAAifIABgDIANgaIAUgPID0l7IAXgHIBugIIARADIESKbIADADIAFgLIAOgTIAFgFQAMgBAVAIQAPAGAKABIAIACICFBfIAGADIFHAAIACAAIEZj4IAKgGIAmAHIAKAEIA8ClIARAjIAFAZIBeEDIAAADMggVABJg");
		this.shape_196.setTransform(-69.8,-54.4);

		this.shape_197 = new cjs.Shape();
		this.shape_197.graphics.f("#625123").s().p("AuTIVIj7lLIBJgOIHih9IAAifIABgDIANgaIAKgIIAFgCIAFgFID0l7IAYgHIBugIIAQADIETKaIADAEIAFgLIANgTIAFgFQAMAAAWAIQAPAFAKABIAIACICFBgIAGADIFJAAIEYj5IAKgGIAmAHIALAEIA8ClIAOAbIACAIIAFAZIBeEDIAAADMggVABJg");
		this.shape_197.setTransform(-69.8,-54.4);

		this.shape_198 = new cjs.Shape();
		this.shape_198.graphics.f("#625123").s().p("AuUIVIj7lLIBJgOIAAAAIHjh9IAAifIABgDIAMgbIALgHIAEgCIAGgFID0l8IAXgGIBvgIIARADIESKaIADAEIAFgLIAOgTIAEgFQANAAAVAIQAOAGALABIAIACICFBfIAGADIFJAAIEZj5IAJgGIAmAHIALAEIA8ClIAOAbIADAIIAEAZIBfEDIAAADMggWABJg");
		this.shape_198.setTransform(-69.9,-54.4);

		this.shape_199 = new cjs.Shape();
		this.shape_199.graphics.f("#625123").s().p("AuUIVIj7lKIAAgBIBIgNIABAAIHjh+IAAifIABgDIAMgbIALgHIAEgCIAGgFID0l8IAXgGIBvgIIARACIESKbIADAEIAFgLIAOgTIAEgFQANAAAVAIQAOAGALABIAIACICFBgIAGADIFJAAIEZj6IAKgGIAmAHIAKADIA5CdIARAjIADAJIAEAZIBfEDIAAADMggXABJg");
		this.shape_199.setTransform(-69.9,-54.4);

		this.shape_200 = new cjs.Shape();
		this.shape_200.graphics.f("#625123").s().p("AuVIVIj7lLIBJgNIABAAIHjh+IAAifIAAgDIANgbIALgHIAEgCIAGgFIDzl8IAYgGIBugIIASACIESKbIADAEIAGgKIANgUIAFgFQAMAAAVAIQAPAGAKACIAIABICFBgIAGADIFJAAIEZj6IAJgGIAmAHIALADIA8CmIARAiIAFAaIBeEDIABADMggYABJg");
		this.shape_200.setTransform(-69.9,-54.4);

		this.shape_201 = new cjs.Shape();
		this.shape_201.graphics.f("#625123").s().p("AuVIWIj6lKIgBgCIBIgNIABAAIHjh+IAAifIABgDIANgbIAUgOID0l9IAYgFIBugIIASACIETKbIADAFIAEgLIAOgUIAEgFQAMAAAWAJQAPAGAKABIAJACICEBfIAGAEIFKAAIEYj7IAJgGIAmAHIALADIA8CmIARAiIAFAaIBeEDIABADMggYABJg");
		this.shape_201.setTransform(-69.9,-54.4);

		this.shape_202 = new cjs.Shape();
		this.shape_202.graphics.f("#625123").s().p("AuVIWIj7lKIAAgCIBIgNIABAAIHjh+IAAifIABgDIAMgbIAVgOIDzl9IAZgEIBugJIASABIETKcIADAFIAFgLIANgUIAFgFQAMAAAVAJQAPAGAKACIAIABICFBgIAGADIFKAAIEYj6IAJgHIAmAHIALADIA9ClIARAjIAEAZIBfEEIAAADMggYABJg");
		this.shape_202.setTransform(-70,-54.4);

		this.shape_203 = new cjs.Shape();
		this.shape_203.graphics.f("#625123").s().p("AuWIWIj6lLIgBgCIBJgMIABAAIHjh+IAAifIABgEIAMgbIAVgNIDzl9IAZgFICBgIIESKdIADAEIAFgKIASgZQAMAAAWAJQAOAGALACQAEACAEgBICFBgIAGADIFJAAIEYj7IAKgHIAmAHIALAEIA8ClIARAjIAFAZIBeEEIABADMggZABIg");
		this.shape_203.setTransform(-70,-54.3);

		this.shape_204 = new cjs.Shape();
		this.shape_204.graphics.f("#625123").s().p("AuWIWIj6lLIgBgCIBJgMIHjh+IAAifIABgEIAMgbIAXgNIDyl9IAZgFICBgIIETKcIADAGIAEgLIASgZQAMAAAWAJQAPAHAKABIAIABICFBhIAGADIFKAAIEXj8IAJgHIAmAHIAMADIA8CmIARAjIAFAZIBeEEIABADMggZABIg");
		this.shape_204.setTransform(-70,-54.3);

		this.shape_205 = new cjs.Shape();
		this.shape_205.graphics.f("#625123").s().p("AyRDKIBJgMIAAAAIHjh/IAAifIACgDIAMgcIAVgNIDyl+ICbgMIESKcIADAGIAGgLIASgZQALAAAWAKQAPAHAKABIAIABICFBgIAGAEIFJAAIEYj8IAKgHIAmAGIAMADIA8CmIARAiIAEAaIBfEEIABADMggpABJg");
		this.shape_205.setTransform(-70.1,-54.4);

		this.shape_206 = new cjs.Shape();
		this.shape_206.graphics.f("#625123").s().p("AySDLIBJgNIABAAIHjh/IAAifIABgDIAMgbIAWgOIDyl+ICbgMIESKcIADAHIAGgMIANgTIAFgFQALgBAWAKQAPAHAKACIAIABICLBkIFJAAIEhkEIAyAJIA9CmIARAiIAEAaIBfEDIABAEMggqABJg");
		this.shape_206.setTransform(-70.1,-54.4);

		this.shape_207 = new cjs.Shape();
		this.shape_207.graphics.f("#625123").s().p("AyRDNIgBgCIBJgNIAAAAIHkh/IAAigIABgCIALgbIAXgOIDyl+ICbgMIETKcIADAHIAFgMIASgYQALgBAWALQAPAGAKADIAIAAICLBkIFKAAIEhkEIAxAJIA9CmIARAiIAEAaIBfEDIABAEMggqABKg");
		this.shape_207.setTransform(-70.1,-54.4);

		this.shape_208 = new cjs.Shape();
		this.shape_208.graphics.f("#625123").s().p("AySDNIgBgCIBJgNIABAAIHkh/IAAigIABgCIALgcIAXgNIDxl+ICcgMIEWKjIAFgLIASgZQALgBAWALQAPAHAKACIAIABICLBjIFKAAIEhkEIAyAJIA8ClIASAjIAEAZIBfEEIABAEMggsABKg");
		this.shape_208.setTransform(-70.2,-54.4);

		this.shape_209 = new cjs.Shape();
		this.shape_209.graphics.f("#625123").s().p("AyTDKIBJgLIAAAAIHkiAIAAifIANgfIAWgNIDyl+ICcgNIEWKkIAGgLIARgaQALAAAWALQAWALALgBICMBkIFJAAIEhkFIAyAJIA9ClIARAjIAEAaIBgEHMggsABKg");
		this.shape_209.setTransform(-70.2,-54.4);

		this.shape_210 = new cjs.Shape();
		this.shape_210.graphics.f("#625123").s().p("AySDMIgBgCIBJgMIABAAIHkh/IAAigIABgDIALgbIAXgNIDxl/ICcgMIEWKkIAFgLIASgaQALAAAWALQAPAHAKACIAIAAICLBkIFKAAIEhkEIAyAIIA8CmIASAjIAEAZIBfEEIABAEMggsABKg");
		this.shape_210.setTransform(-70.2,-54.4);

		this.shape_211 = new cjs.Shape();
		this.shape_211.graphics.f("#625123").s().p("AySDNIAAgCIBIgNIABAAIHkh/IAAigIABgCIALgcIAXgNIDyl+ICbgMIEWKjIAFgLIARgZQAMgBAWALQAPAHAKACIAIABICLBjIFIAAIACAAIEhkEIAxAJIA9ClIARAjIAFAZIBeEEIABAEMggqABKg");
		this.shape_211.setTransform(-70.1,-54.4);

		this.shape_212 = new cjs.Shape();
		this.shape_212.graphics.f("#625123").s().p("AyRDMIgBgCIBJgMIAAAAIHkh/IAAigIABgDIAMgbIAWgNIDyl+ICbgMIETKcIADAGIAFgLIASgZQALAAAWAKQAPAHAKACIAIABICLBkIFKAAIEhkEIAxAJIA9CmIARAiIAEAaIBfEDIABAEMggqABJg");
		this.shape_212.setTransform(-70.1,-54.4);

		this.shape_213 = new cjs.Shape();
		this.shape_213.graphics.f("#625123").s().p("AySDLIBJgNIABAAIHjh/IAAifIABgDIAMgbIAWgOIDyl+ICbgMIESKcIADAHIAGgMIANgTIAFgFQALgBAWAKQAPAIAKABIAIABICFBgIAGAEIFJAAIEhkEIAyAJIA9CmIARAiIAEAaIBfEDIABAEMggqABJg");
		this.shape_213.setTransform(-70.1,-54.4);

		this.shape_214 = new cjs.Shape();
		this.shape_214.graphics.f("#625123").s().p("AyRDKIBJgMIAAAAIHjh/IAAifIACgDIALgcIAWgNIDyl+ICbgMIESKcIADAGIAGgLIASgZQALAAAWAKQAPAHAKABQAFACADgBICFBgIAGAEIFJAAIEYj8IAKgHIAmAGIAMADIA8CmIARAiIAEAaIBfEEIABADMggqABJg");
		this.shape_214.setTransform(-70.1,-54.4);

		this.shape_215 = new cjs.Shape();
		this.shape_215.graphics.f("#625123").s().p("AyRDKIBJgMIAAAAIHkh/IAAifIAAgDIAMgcIAWgNIDzl+ICagMIETKcIADAGIAFgLIARgZQAMAAAWAKQAPAGAKACIAIABICLBkIFHAAIACgBIEikCIAmAGIALADIA9CmIARAjIAEAZIBfEEIAAADMggoABJg");
		this.shape_215.setTransform(-70.1,-54.4);

		this.shape_216 = new cjs.Shape();
		this.shape_216.graphics.f("#625123").s().p("AuWIWIj6lLIgBgCIBJgMIHkh+IAAifIABgEIAMgbIAVgNIDzl9IAZgFICBgIIESKdIADAEIAFgKIASgZQAMAAAWAJQAOAGALACIAIABICFBgIAGADIFJAAIEYj7IAKgHIAmAHIALAEIA8ClIARAjIAFAZIBeEEIABADMggZABIg");
		this.shape_216.setTransform(-70,-54.3);

		this.shape_217 = new cjs.Shape();
		this.shape_217.graphics.f("#625123").s().p("AuVIWIj6lKIgBgCIBIgNIABAAIHjh+IAAifIABgDIAMgbIAVgOIDzl9IAYgEIBvgJIASABIETKcIADAFIAFgLIANgUIAFgFQALAAAXAJQAOAGAKACIAIABICFBgIAHADIFJAAIEYj6IAKgHIAmAHIALADIA8ClIARAjIAEAZIBfEEIABADMggaABJg");
		this.shape_217.setTransform(-70,-54.4);

		this.shape_218 = new cjs.Shape();
		this.shape_218.graphics.f("#625123").s().p("AuVIWIj6lKIgBgCIBIgNIABAAIHjh+IAAifIABgDIAMgbIAWgOIDzl9IAYgEIBugJIASABIETKcIADAFIAFgLIANgUIAFgFQAMAAAVAJQAPAGAKACIAIABICFBgIAGADIFIAAIACAAIEYj6IAJgHIAmAHIALADIA9ClIARAjIAEAZIBfEEIAAADMggYABJg");
		this.shape_218.setTransform(-70,-54.4);

		this.shape_219 = new cjs.Shape();
		this.shape_219.graphics.f("#625123").s().p("AuVIVIj6lKIgBgBIAogIIAAAAIAhgFIAAAAIHjh+IAAifIABgDIAMgbIAMgHIAEgCIAGgFIDzl8IAYgGIBugIIASACIESKbIADAFIAGgLIANgUIAEgFQANAAAVAIQAPAHAKABIAIABICFBgIAGADIFJAAIEZj6IAJgGIAmAHIALADIA8CmIARAiIAFAaIBeEDIABADMggYABJg");
		this.shape_219.setTransform(-69.9,-54.4);

		this.shape_220 = new cjs.Shape();
		this.shape_220.graphics.f("#625123").s().p("AuUIVIj7lKIAAgBIAngIIABAAIAggFIABAAIHjh+IAAifIABgDIAMgbIAVgOIDzl8IAYgGIBvgIIARACIESKbIADAEIAGgKIANgUIAFgFQAMAAAVAIQAPAGAKACIAIABICFBgIAGADIFHAAIACAAIEZj6IAKgGIAmAHIAKADIA9CmIANAaIADAIIAFAaIBeEDIAAADMggWABJg");
		this.shape_220.setTransform(-69.9,-54.4);

		this.shape_221 = new cjs.Shape();
		this.shape_221.graphics.f("#625123").s().p("AuUIVIj7lKIAAgBIAngIIABAAIAggFIABAAIHjh+IAAifIABgDIAMgbIAVgOID0l8IAXgGIBvgIIARACIESKbIADAEIAFgLIAOgTIAEgFQANAAAVAIQAOAGALABIAIACICFBfIAGAEIFHAAIACgBIEZj5IAKgGIAmAHIAKADIA5CdIARAjIADAJIAEAZIBfEDIAAADMggWABJg");
		this.shape_221.setTransform(-69.9,-54.4);

		this.shape_222 = new cjs.Shape();
		this.shape_222.graphics.f("#625123").s().p("AuUIVIj6lKIgBgBIAogIIAAAAIAhgFIAAAAIHjh+IAAifIABgDIAMgbIALgHIAEgCIAGgFID0l8IAXgGIBvgIIARADIESKaIADAEIAFgLIAOgTIAEgFQANAAAVAIQAOAGALABIAIACICFBfIAGADIFJAAIEZj5IAJgGIAmAHIALAEIA8ClIAOAaIADAJIAEAZIBfEDIAAADMggWABJg");
		this.shape_222.setTransform(-69.9,-54.4);

		this.shape_223 = new cjs.Shape();
		this.shape_223.graphics.f("#625123").s().p("AuTIVIj7lKIAAgBIAngIIAAAAIAhgGIABAAIHih9IAAifIABgDIANgbIAKgHIAFgCIAFgFID0l8IAYgGIBtgIIARADIETKaIADAEIAFgLIANgTIAFgFQANAAAUAIQAPAFALACIAIABICFBgIAFADIFKAAIEYj5IAKgGIAmAHIALAEIA8ClIAOAbIACAIIAFAZIBeEDIAAADMggVABJg");
		this.shape_223.setTransform(-69.8,-54.4);

		this.shape_224 = new cjs.Shape();
		this.shape_224.graphics.f("#625123").s().p("AuTIUIj7lJIAAgBIAngIIABAAIAggGIABAAIHih9IAAifIABgDIANgaIALgIIADgCIAGgFID0l7IAXgHIBvgIIAQADIESKaIADAEIAGgLIANgTIAFgFQAMAAAWAIQAOAFALABIAIACICEBgIAHADIFGAAIACgBIEZj4IAKgGIAmAHIAKAEIA9ClIANAbIADAIIAFAZIBeEDIAAADMggVABJg");
		this.shape_224.setTransform(-69.8,-54.4);

		this.shape_225 = new cjs.Shape();
		this.shape_225.graphics.f("#625123").s().p("AuTIUIj6lJIgBgBIBJgOIAAAAIHjh9IAAifIAAgDIANgaIAUgPID0l7IAXgHIBugIIARAEIESKaIADADIAFgLIANgTIAGgFQAMgBAVAIQAOAFALACIAIACICFBfIAGADIFJAAIEZj4IAKgGIAmAHIAKAEIA8CmIAOAaIADAIIAFAZIBeEDIgBADMggUABJg");
		this.shape_225.setTransform(-69.7,-54.4);

		this.shape_226 = new cjs.Shape();
		this.shape_226.graphics.f("#625123").s().p("AuTIUIj6lJIgBgBIBJgOIAAAAIHih9IAAieIABgDIANgbIAUgPID1l7IAWgHIBvgIIAQAEIESKaIADADIAFgLIANgTIAFgFQANgBAVAIQAOAFALABIAIACICFBgIAGADIFGAAIACgBIEaj4IAKgFIAmAHIAJAEIA9CmIARAiIAEAaIBfECIgBADMggTABJg");
		this.shape_226.setTransform(-69.7,-54.4);

		this.shape_227 = new cjs.Shape();
		this.shape_227.graphics.f("#625123").s().p("AuTIUIj6lJIgBgCIBJgNIHih9IAAieIABgDIANgbIAVgPID0l6IAXgIIBugIIAQAEIERKaIADADIAGgLIANgUIAFgEQANgBAVAIQAOAFALABIAIACICEBfIAHADIFGAAIACAAIEaj4IAKgFIAmAHIAJAFIA9ClIARAiIAEAaIBfECIgBADMggTABJg");
		this.shape_227.setTransform(-69.7,-54.4);

		this.shape_228 = new cjs.Shape();
		this.shape_228.graphics.f("#625123").s().p("AuSITIj7lIIAAgCIBIgNIHjh9IAAieIAAgDIANgbIAUgPID1l6IAWgIIBvgIIAPAEIESKaIADADIAGgLIANgUIAFgEQANgBAVAIQAOAEALABIAIADICEBfIAHADIFGAAIACgBIEaj3IAKgFIAmAHIAJAFIA5CcIARAjIADAJIAFAZIBeEDIgBACMggSABJg");
		this.shape_228.setTransform(-69.7,-54.4);

		this.shape_229 = new cjs.Shape();
		this.shape_229.graphics.f("#625123").s().p("AuSITIj7lIIAAgCIBIgNIHjh9IAAieIABgDIAMgbIALgIIAEgCIAFgFID2l6IAVgIIBugIIAQAFIESKZIADACIAGgKIANgUIAFgEQANgBAUAHQAPAFALABIAIACICEBgIAGACIFJAAIEZj3IAKgFIAnAHIAJAFIA8ClIAOAaIADAJIAFAZIBeEDIgBACMggSABJg");
		this.shape_229.setTransform(-69.6,-54.4);

		this.shape_230 = new cjs.Shape();
		this.shape_230.graphics.f("#625123").s().p("AuSITIj6lIIgBgCIIriKIAAieIABgDIANgbIAUgPID1l6IAWgIIBugIIAPAFIESKZIADACIAFgLIAOgTIAFgEQANgBAUAHQAPAFALABIAIACICEBfIAGADIFHAAIACAAIEZj3IAKgFIAmAHIAKAFIA8ClIAOAbIADAIIAEAZIBfEDIgBACMggSABJg");
		this.shape_230.setTransform(-69.6,-54.4);

		this.shape_231 = new cjs.Shape();
		this.shape_231.graphics.f("#625123").s().p("AuRITIj7lIIAAgCIBIgOIHih8IAAieIAAgDIAOgbIATgPID2l6IAWgJIBugHIAPAFIERKZIADACIAGgLIAOgTIAEgEQAOgBAUAHQAOAEAMABIAIADICEBfIAGADIFGAAIACgBIEbj2IAKgFIAlAHIAJAFIA5CdIARAjIAEAIIAEAZIBfEDIgBACMggSABJg");
		this.shape_231.setTransform(-69.6,-54.4);

		this.shape_232 = new cjs.Shape();
		this.shape_232.graphics.f("#625123").s().p("AuRITIj7lIIAAgCIBIgNIAAAAIHih9IAAieIABgDIANgaIAUgQID1l5IAWgKIBugHIAPAGIERKYIADACIAGgLIANgTIAFgDQAOgCAUAHQAOAEALACIAIACICFBfIAGACIFGAAIACAAIEaj2IAKgEIAmAHIAJAEIA5CdIARAjIADAJIAFAYIBeEDIgBACMggRABJg");
		this.shape_232.setTransform(-69.6,-54.4);

		this.shape_233 = new cjs.Shape();
		this.shape_233.graphics.f("#625123").s().p("AuRISIj7lHIAAgCIBIgNIAAAAIHjh9IAAieIAAgDIANgaIALgJIADgCIAGgFID2l5IAUgKIBvgHIAOAGIESKYIADACIACgEIARgaIAFgDQANgCAVAHQAOAEALABIAIACICFBgIAGACIFIAAIEaj2IAKgEIAmAHIAJAFIA8ClIAOAaIADAJIAFAYIBeEDIgBACMggQABJg");
		this.shape_233.setTransform(-69.5,-54.4);

		this.shape_234 = new cjs.Shape();
		this.shape_234.graphics.f("#625123").s().p("AuRISIj6lHIgBgCIBIgNIABAAIHih9IAAieIAAgDIANgaIAUgQID2l5IAVgKIBugHIAPAGIERKZIADABIACgEIARgaIAFgDQAOgBAUAFQAOAFALABIAIACICEBgIAHACIFGAAIACAAIEaj2IAKgEIAmAHIAJAFIA8ClIAOAaIADAJIAEAYIBfEDIgBACMggQABJg");
		this.shape_234.setTransform(-69.5,-54.4);

		this.shape_235 = new cjs.Shape();
		this.shape_235.graphics.f("#625123").s().p("AuQISIj7lHIAAgCIBIgOIAAAAIHih8IAAieIAAgDIAOgaIATgQID2l4IAVgLIBugHIAOAHIESKYIADABIAFgLIANgTIAGgDQANgBAVAFQAOAEALABIAIACICEBgIAHACIFFAAIACAAIEbj2IAKgDIAmAHIAIAFIA9ClIANAbIADAIIAFAZIBeECIgBACMggPABJg");
		this.shape_235.setTransform(-69.5,-54.4);

		this.shape_236 = new cjs.Shape();
		this.shape_236.graphics.f("#625123").s().p("AuQISIj6lHIgBgCIBIgOIABAAIHhh8IAAieIAAgDIAOgaIATgQID2l4IAVgLIBugHIAOAHIESKYIACABIAGgLIANgTIAGgDQAOgCATAGQAOAEAMABIAIACICEBgIAHACIFFAAIACAAIEaj2IALgDIAmAHIAJAFIA8CmIAOAaIACAIIAFAZIBeECIgCACMggNABJg");
		this.shape_236.setTransform(-69.4,-54.4);

		this.shape_237 = new cjs.Shape();
		this.shape_237.graphics.f("#625123").s().p("AuQISIj6lHIgBgCIBIgOIABAAIHhh8IAAieIABgDIANgaIATgQID3l4IAUgLIBugHIAOAHIERKYIADABIAGgLIANgUIAFgCQAOgCAUAGQAOADAMABIAIADICEBgIAGACIFGAAIACgBIEaj1IALgDIAmAHIAIAFIA9CmIANAaIADAIIAFAZIBeECIgCACMggOABJg");
		this.shape_237.setTransform(-69.4,-54.4);

		this.shape_238 = new cjs.Shape();
		this.shape_238.graphics.f("#625123").s().p("AuQISIj6lHIgBgCIBIgOIABAAIHhh8IAAieIABgDIANgaIATgQID3l4IAUgLIBugHIAOAHIERKYIADAAIAFgKIAOgUIAFgCQAOgCAUAGQAOADAMABIAIADICDBfIAHACIFFAAIACAAIEcj1IAKgDIAlAHIAJAGIA5CcIARAjIADAJIAEAZIBfEBIgCACMggOABJg");
		this.shape_238.setTransform(-69.4,-54.4);

		this.shape_239 = new cjs.Shape();
		this.shape_239.graphics.f("#625123").s().p("AuPISIj7lHIAAgCIBIgOIAAAAIHhh8IAAieIABgDIAOgaIASgQID3l3IAUgMIBugHIAOAIIERKXIADAAIAFgKIAOgUIAFgCQAOgBAUAEQAOAEALABIAIADICEBeIAHADIFFAAIACgBIEbj0IALgDIAmAHIAIAGIA5CcIARAjIACAJIAFAZIBeEBIgBACMggNABJg");
		this.shape_239.setTransform(-69.4,-54.4);

		this.shape_240 = new cjs.Shape();
		this.shape_240.graphics.f("#625123").s().p("AuPIRIj7lHIAAgBIAngIIABAAIICiBIAAieIAAgDIAOgaIAKgJIADgCIAGgGID2l3IAUgMIBugHIAOAIIERKYIADAAIACgEIARgaIAFgEQAOAAAUAFQAOADAMAAIAIAEICEBfIAGACIFGAAIACgBIEaj0IALgDIAmAHIAIAGIA8ClIAOAaIACAJIAFAZIBeECIgBACMggNABIg");
		this.shape_240.setTransform(-69.4,-54.4);

		this.shape_241 = new cjs.Shape();
		this.shape_241.graphics.f("#625123").s().p("AuOIRIj7lHIgBgBIAogIIAAAAIICiBIAAieIAAgDIAOgaIAKgJIAEgCIAFgGID3l3IAUgMIBtgHIAOAJIEQKXIADgBIACgEIARgZIAGgEQAOAAAUAEQAOADALABIAIADICEBfIAHACIFFAAIACgBIEbjzIALgDIAmAHIAHAHIA5CcIARAjIADAIIAFAZIBeECIgCACMggLABIg");
		this.shape_241.setTransform(-69.3,-54.4);

		this.shape_242 = new cjs.Shape();
		this.shape_242.graphics.f("#625123").s().p("AuOIRIj7lHIgBgBIAogIIABAAIIBiBIAAieIABgDIANgaIALgJIADgCIAFgGID3l3IATgMIBugHIAOAJIEQKXIADgBIACgEIARgaIAGgDQAOAAATAEQAOADAMAAIAIAEICEBfIAGABIFGAAIACAAIEbjzIAKgDIAmAHIAIAHIA5CcIARAjIADAIIAEAZIBfECIgCACMggLABIg");
		this.shape_242.setTransform(-69.3,-54.4);

		this.shape_243 = new cjs.Shape();
		this.shape_243.graphics.f("#625123").s().p("AuOIRIj7lHIAAgBIAngIIABAAIIBiBIAAieIABgDIAOgaIAJgJIAEgCIAFgGID3l2IAUgNIBugHIAMAJIERKXIADgBIACgEIARgaIAGgDQAOAAATAEQAOADAMAAIAIAEICEBeIAGACIFGAAIACAAIEbjzIALgDIAmAHIAHAHIA5CcIARAjIAHAhIBeECIgCACMggKABIg");
		this.shape_243.setTransform(-69.3,-54.4);

		this.shape_244 = new cjs.Shape();
		this.shape_244.graphics.f("#625123").s().p("AuNIQIj7lGIgBgBIAogIIAAAAIIBiBIAAieIABgDIAOgZIASgSID4l2IATgNIBugHIAMAKIERKWIADgBIAFgLIAOgTIAFgDQAPAAATAEIAaACIAIAEICEBfIAGABIFFAAIACAAIEcjzIAKgCIAmAHIAIAHIA5CcIARAjIAFAaIBgEJIgCACMggKABIg");
		this.shape_244.setTransform(-69.2,-54.4);

		this.shape_245 = new cjs.Shape();
		this.shape_245.graphics.f("#625123").s().p("AuNIQIj7lGIAAgBIAngIIAAAAIIBiBIAAieIABgDIAPgZIARgSID4l2IATgNIBtgHIANAKIEQKXIAEgCIAFgLIAOgTIAFgDQAPAAATADQAOADAMAAIAIAEICDBeIAHACIFFAAIACgBIEcjyIAKgCIAmAHIAHAHIA6CcIAQAjIAFAaIBhEJIgDACMggIABIg");
		this.shape_245.setTransform(-69.2,-54.4);

		this.shape_246 = new cjs.Shape();
		this.shape_246.graphics.f("#625123").s().p("AuNIQIj7lGIAAgBIAngIIABAAIIBiBIAAidIAAgDIAOgaIASgSID4l2IATgNIBugHIAMAKIEQKXIADgCIACgEIARgaIAGgDQAPAAATADQAOACAMAAIAIAEICDBfIAHACIFFAAIACgBIEbjyIALgCIAmAHIAHAIIA9CkIANAaIAFAaIBgEJIgCACMggIABIg");
		this.shape_246.setTransform(-69.2,-54.4);

		this.shape_247 = new cjs.Shape();
		this.shape_247.graphics.f("#625123").s().p("AuNIQIj7lGIAAAAIAogJIAAAAIAggHIAAAAIHhh5IAAieIABgDIANgZIASgSID5l2IASgOIBugHIALALIERKWIADgCIACgEIARgaIAGgDQAPAAATADQAOADALAAIAIADICEBfIAHACIFFAAIABgBIEcjxIALgCIAmAGIAHAIIA8ClIAOAZIAFAaIBgEKIgCABMggJABIg");
		this.shape_247.setTransform(-69.1,-54.4);

		this.shape_248 = new cjs.Shape();
		this.shape_248.graphics.f("#625123").s().p("AuMIPIj7lFIgBAAIAogJIAAAAIAggHIABAAIHgh5IAAihIAPgZIANgNIAEgFID5l2IASgOIBugHIALALIERKWIADgCIACgEIARgaIAGgDQAPAAATADQANACAMAAIAIAEICEBfIAHABIFEAAIACAAIEcjxIALgCIAmAGIAHAIIA8ClIAOAZIAFAaIBgEKIgCABMggIABIg");
		this.shape_248.setTransform(-69.1,-54.4);

		this.shape_249 = new cjs.Shape();
		this.shape_249.graphics.f("#625123").s().p("AuMIPIj7lFIAAAAIAngJIAAAAIAhgIIAAAAIHgh4IAAieIAAgDIAPgZIASgSID4l2IASgOIBugHIALALIEQKWIAEgCIACgEIARgaIAFgDQAPAAATADIAaACIAIAEICEBfIAGABIFFAAIACgBIEcjxIALgBIAmAGIAGAIIA6CcIAQAjIAFAZIBhEKIgDABMggHABIg");
		this.shape_249.setTransform(-69.1,-54.4);

		this.shape_250 = new cjs.Shape();
		this.shape_250.graphics.f("#625123").s().p("AuMIPIj7lFIAAAAIAngJIABAAIAggIIAAAAIHgh4IAAieIABgDIAOgZIAJgKIAEgDIAFgFID4l2IASgOIBugHIALAMIEQKVIADgCIACgFIARgZIAHgDQAPAAASACQAOACAMABIAIADICEBfIAGACIFFAAIACgBIEcjxIALgBIAmAGIAGAIIA9ClIANAaIAFAZIBgEKIgCABMggHABIg");
		this.shape_250.setTransform(-69.1,-54.4);

		this.shape_251 = new cjs.Shape();
		this.shape_251.graphics.f("#625123").s().p("AuMIPIj7lFIAAAAIAogJIAAAAIAggIIAAAAIHhh4IAAihIAOgZIAJgKIAEgDIAEgFID5l2IASgOIBugHIALAMIEQKVIADgCIACgFIARgZIAHgDQAPAAASACIAaACIAIAEICDBfIAHABIFFAAIABAAIEdjxIALgBIAmAGIAHAIIA4CdIARAiIAFAZIBgEKIgCABMggGABIg");
		this.shape_251.setTransform(-69,-54.4);

		this.shape_252 = new cjs.Shape();
		this.shape_252.graphics.f("#625123").s().p("AuLIPIj7lFIgBgBIAogIIAAAAIIBiAIAAihIAPgZIAJgKIADgDIAFgFID5l1IARgPIBugHIALAMIEQKVIADgCIACgFIARgaIAGgCQAPAAATACIAaABIAIAFICDBeIAHACIFFAAIACgBIEcjwIALgBIAmAGIAGAJIA5CcIARAiIAFAZIBgEKIgDABMggGABIg");
		this.shape_252.setTransform(-69,-54.4);

		this.shape_253 = new cjs.Shape();
		this.shape_253.graphics.f("#625123").s().p("AuLIOIj7lEIgBgBIAogIIAAAAIIAiAIAAieIABgCIAOgaIASgSID5l1IARgPIBugHIALAMIEPKVIAEgCIACgFIARgaIAGgCQAPAAATACQAOACALgBIAJAFICDBeIAHACIFEAAIADgCIEbjvIALgBIAnAGIAGAJIA5CcIARAjIAEAZIBhEJIgDABMggGABIg");
		this.shape_253.setTransform(-69,-54.4);

		this.shape_254 = new cjs.Shape();
		this.shape_254.graphics.f("#625123").s().p("AuLIOIj7lEIAAgBIIoiIIAAigIAPgaIARgSID5l0IARgRIBugGIAKANIEQKVIADgEIACgEIARgaIAHgCQAPgBASACQAOACAMgBIAIAFICEBeIAGABIFFAAIACAAIEcjvIALgBIAmAGIAGAJIA9ClIANAaIAFAZIBgEJIgDABMggEABIg");
		this.shape_254.setTransform(-68.9,-54.4);

		this.shape_255 = new cjs.Shape();
		this.shape_255.graphics.f("#625123").s().p("AuLIOIj7lEIAAgBIIoiIIAAigIAPgaIARgSID6l0IAQgRIBugGIAKAOIEQKUIADgEIACgEIARgaIAGgCQAQgBASACIAaABIAIAFICEBeIAGABIFEAAIADgBIEcjuIALgBIAmAGIAGAJIA8ClIAOAaIAFAZIBgEJIgDABMggEABIg");
		this.shape_255.setTransform(-68.9,-54.4);

		this.shape_256 = new cjs.Shape();
		this.shape_256.graphics.f("#625123").s().p("AuKIOIj7lEIgBgBIIoiIIAAieIAAgCIAPgaIARgSID6l0IAQgRIBugGIAKAOIEQKUIADgEIACgEIARgaIAGgCQAQgBASACIAaABIAIAFICDBeIAHABIFEAAIACgBIEdjvIALAAIAmAGIAGAJIA5CcIARAjIAFAZIBgEJIgDABMggEABIg");
		this.shape_256.setTransform(-68.9,-54.4);

		this.shape_257 = new cjs.Shape();
		this.shape_257.graphics.f("#625123").s().p("AuKIOIj7lEIAAgBIIniIIAAieIAAgCIAQgaIAQgSID6l0IAQgRIBugGIAJAOIERKUIACgEIACgEIARgaIAHgCQAQAAASABIAaAAIAIAGICDBeIAHAAIFEAAIACAAIEdjvIALAAIAmAGIAGAKIA8CkIANAaIAGAZIBfEJIgCABMggEABIg");
		this.shape_257.setTransform(-68.8,-54.4);

		this.shape_258 = new cjs.Shape();
		this.shape_258.graphics.f("#625123").s().p("AuKIOIj7lEIAAgBIIniIIAAigIAQgaIAQgSID6lzIAQgSIBugGIAJAOIEQKUIADgEIACgEIARgaIAHgCQAQAAASABIAaAAIAIAFICDBeIAHABIFEAAIACgBIEdjuIALAAIAmAGIAFAKIA9CkIANAaIAFAZIBgEJIgDABMggDABIg");
		this.shape_258.setTransform(-68.8,-54.4);

		this.shape_259 = new cjs.Shape();
		this.shape_259.graphics.f("#625123").s().p("AuKIOIj7lEIAAgBIIoiIIAAigIAPgaIAQgSID6lzIARgSIBtgGIAJAPIEQKTIAFgJIASgZIAGgCQAQAAARABIAaAAIAIAFICEBeIAGABIFEAAIADgBIEcjuIAMAAIAmAGIAFAKIA5CcIASAiIAEAZIBgEKIgEAAMggCABIg");
		this.shape_259.setTransform(-68.8,-54.4);

		this.shape_260 = new cjs.Shape();
		this.shape_260.graphics.f("#625123").s().p("AuJINIj8lEIAngJIABAAIH/h/IAAidIABgDIAPgZIAJgKIADgDID/l5IAPgSIBugGIAJAPIEQKTIAEgJIASgZIAGgCQAQgBATABIAaAAIAIAGICCBdIAIABIFDAAIACgBIEdjtIAMAAIAmAGIAFAKIA4CcIASAjIAFAZIBfEJIgDAAMggBABIg");
		this.shape_260.setTransform(-68.7,-54.4);

		this.shape_261 = new cjs.Shape();
		this.shape_261.graphics.f("#625123").s().p("AuJINIj7lEIAngJIAAAAIIAh/IAAigIAPgZIAJgKIADgDID/l5IAQgSIBtgGIAJAPIEPKTIAFgJIASgZIAGgCQARAAARAAQAOABAMgCIAIAGICDBeIAHABIFEAAIACgBIEdjtIAMAAIAmAGIAFAKIA4CcIASAjIAEAZIBgEJIgDAAMggBABIg");
		this.shape_261.setTransform(-68.7,-54.4);

		this.shape_262 = new cjs.Shape();
		this.shape_262.graphics.f("#625123").s().p("AuIINIj8lEIAngJIAAAAIAhgIIAAAAIHfh3IAAigIAQgZIAIgKIADgDID/l4IAQgTIBtgGIAIAQIEQKTIAFgJIASgaIAGgBQAQgBASAAIAaAAIAIAFICDBeIAHABIFDAAIADgBIEdjtIAMABIAmAGIAEAKIA5CbIASAjIAEAZIBgEJIgEAAMggAABIg");
		this.shape_262.setTransform(-68.7,-54.5);

		this.shape_263 = new cjs.Shape();
		this.shape_263.graphics.f("#625123").s().p("AyEDJIAAAAIAogJIAAAAIH/h/IAAidIAAgDIAYgjIADgDIEOmLIBvgGIEXKjIAEgKIASgZIAHgBIAigBIAagBIAIAFICDBfIFLAAIABgBIEejtIAxAIIAFAKIA4CbIASAjIAFAaIBfEIIgDAAMggAABIg");
		this.shape_263.setTransform(-68.6,-54.5);

		this.shape_264 = new cjs.Shape();
		this.shape_264.graphics.f("#625123").s().p("AyDDJIAAAAIAngJIAAAAIH/h/IAAigIEqmxIBtgGIEYKjIAFgKIARgZIAHgBIAigBIAagBIAIAFICDBeIAHABIFDAAIACgBIEejtIAxAIIAFAKIA8CkIAOAaIAEAaIBgEIIgDAAI//BIg");
		this.shape_264.setTransform(-68.6,-54.5);

		this.shape_265 = new cjs.Shape();
		this.shape_265.graphics.f("#625123").s().p("AyDDJIAAAAIAngJIAAAAIH/h/IAAigIEqmxIBtgGIEXKjIAGgKIARgZIAHgBIAhgBIAagCIAIAGICEBeIAGAAIFEAAIACgBIEdjsIAzAIIA9CmIARAiIAEAaIBgEIMggCABIg");
		this.shape_265.setTransform(-68.6,-54.5);

		this.shape_266 = new cjs.Shape();
		this.shape_266.graphics.f("#625123").s().p("AyDDJIAngKIABAAIH/h+IAAifIAPgZIAMgOIEOmMIBtgFIEXKjIAFgKIASgZIAGgBIAigCIAagBIAIAGICDBeIFLAAIACgBIEdjsIAyAIIA9CmIASAiIAEAaIBgEIMggCABIg");
		this.shape_266.setTransform(-68.6,-54.5);

		this.shape_267 = new cjs.Shape();
		this.shape_267.graphics.f("#625123").s().p("AyDDJIAogKIAAAAIH/h+IAAicIAAgDIAXgkIAEgDIEOmMIBugFIEWKkIAFgLIARgaIAHAAIAjgCIAagCIAIAGICCBeIFLAAIABAAIEejsIAyAIIA9CmIARAjIAFAZIBfEIMggBABIg");
		this.shape_267.setTransform(-68.5,-54.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_159}]}).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_159}]},1).wait(1));

		// big_rock_base.png
		this.instance_11 = new lib.big_rock_base();
		this.instance_11.parent = this;
		this.instance_11.setTransform(-289,-108);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(120));

		// Bush_small
		this.instance_12 = new lib.Bush_small();
		this.instance_12.parent = this;
		this.instance_12.setTransform(-289.5,-14.3,1,1.002,0,4,0,45.9,40.6);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(120));

		// Layer_19
		this.instance_13 = new lib.sun_1();
		this.instance_13.parent = this;
		this.instance_13.setTransform(84.5,-293,1,1,0,0,0,180.5,180);

		this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:81.6},27,cjs.Ease.get(-1)).to({x:78.5},28,cjs.Ease.get(1)).to({x:81.3},30,cjs.Ease.get(-1)).to({x:84.5},34,cjs.Ease.get(1)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-490.4,-489.5,867,800.5);


	// stage content:
	(lib.experienceSpokane_paddleboarder = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// paddleboard_animation
		this.instance = new lib.paddleboard_animation();
		this.instance.parent = this;
		this.instance.setTransform(-6.3,405,1,1,0,0,0,-502.8,-90);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(456,430.4,867,800.6);
	// library properties:
	lib.properties = {
		id: 'AC456CF807874CD2AE06DE15469D525C',
		width: 900,
		height: 850,
		fps: 60,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{src:"assets/images/atlases/experienceSpokane_paddleboarder_atlas_.png", id:"experienceSpokane_paddleboarder_atlas_"}
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

import * as createjs from 'createjs-module';

export var AnimFood = function(lib, img, cjs, ss, an) {
  this.lib = lib;
  this.img = img;
  this.cjs = cjs;
  this.ss = ss;
  this.an = an;
	var p;

	lib.ssMetadata = [
		{name:"experienceSpokane_food_atlas_", frames: [[0,207,143,276],[690,0,149,589],[145,207,126,267],[153,476,234,107],[273,207,177,95],[0,0,688,205],[273,304,63,36],[338,304,69,30],[0,485,151,227]]}
	];


	// symbols:



	(lib.beer_glass = function() {
		this.spriteSheet = ss["experienceSpokane_food_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();



	(lib.bottle = function() {
		this.spriteSheet = ss["experienceSpokane_food_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();



	(lib.cup = function() {
		this.spriteSheet = ss["experienceSpokane_food_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();



	(lib.food_1 = function() {
		this.spriteSheet = ss["experienceSpokane_food_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();



	(lib.food_2 = function() {
		this.spriteSheet = ss["experienceSpokane_food_atlas_"];
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();



	(lib.food_bg = function() {
		this.spriteSheet = ss["experienceSpokane_food_atlas_"];
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();



	(lib.leaf1 = function() {
		this.spriteSheet = ss["experienceSpokane_food_atlas_"];
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();



	(lib.leaf2 = function() {
		this.spriteSheet = ss["experienceSpokane_food_atlas_"];
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();



	(lib.wine_label = function() {
		this.spriteSheet = ss["experienceSpokane_food_atlas_"];
		this.gotoAndStop(8);
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


	(lib.wine = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// FlashAICB
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AhGG3QAPgrANg4IANgyQAKgUAxtvIC0geQgKCWgPCxQgeFfgZCDQgVBvgIAfQgTBHgcAxQhDBxjEBfQBXg4A0iRg");
		this.shape.setTransform(498.4,905.3);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AhHG3IADgHQANgpANgyIACgKIAKgoIACgHQAMhJAtszIAggGICMgYIAIgBQgKCUgOCtIgBAGQgeFfgZCDQgVBvgIAgQgTBGgcAxIgFAIQhEBti8BaQBWg4AziQg");
		this.shape_1.setTransform(498.5,905.2);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("rgba(255,255,255,0.298)").s().p("AhGG3IACgHQAOgoAMgzIACgJIALgpIABgIQAMhHAus0IAfgGICMgYIAHAAQgJCTgOCtIgBAGQgeFfgZCDQgVBvgIAfQgSBHgdAwIgFAIQhEBui7BaQBVg4A0iQg");
		this.shape_2.setTransform(498.4,905.2);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("rgba(255,255,255,0.298)").s().p("AhHG4IAEgIQANgoANgzIACgJIAKgpIABgHQAMhHAus0IAfgHICLgXIAIgBQgKCTgNCtIgBAGQgeFfgYCDQgVBugJAgQgTBHgcAwIgEAIQhFBui7BaQBWg4AyiPg");
		this.shape_3.setTransform(498.4,905.2);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("rgba(255,255,255,0.298)").s().p("AjOJ+QBWg4AziPIACgIQAOgoANgzIABgJIALgpIACgHQALhFAus1IAegHICMgYIAIgBQgKCTgOCuIgBAGQgcFegaCDQgUBugIAhQgUBGgbAwIgGAIQhFBvi8Bag");
		this.shape_4.setTransform(498.3,905.3);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("rgba(255,255,255,0.298)").s().p("AjOJ+QBWg4AziPIADgIQANgoANgzIACgJIAKgoIACgIQAMhFAts1IAegHICMgYIAHgBQgJCUgOCtIgBAGQgcFegZCDQgVBtgJAhQgSBHgcAwIgFAIQhFBvi8Bag");
		this.shape_5.setTransform(498.2,905.3);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("rgba(255,255,255,0.298)").s().p("AjNJ+QBVg4A0iPIACgIQAOgoAMgyIACgKIALgpIABgHQAMhEAus2IAdgHICMgYIAHAAQgJCTgOCsIgBAHQgcFegZCDIAAAAQgVBsgIAiQgTBGgcAxIgFAIQhFBui8Bbg");
		this.shape_6.setTransform(498.2,905.3);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("rgba(255,255,255,0.298)").s().p("AhFG4IADgIQANgoANgzIACgJIAKgpIACgHQAMhDAts3IAdgIICMgYIAHAAQgKCUgNCsIgBAGQgcFegZCDIAAABQgUBrgJAiQgTBHgcAwIgFAIQhEBui7BbQBWg4AziPg");
		this.shape_7.setTransform(498.2,905.3);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("rgba(255,255,255,0.298)").s().p("AhEG4IACgIQAOgoAMgzIACgJIALgpIABgHQAMhCAus3IAcgJICLgYIAHABQgJCTgNCsIgBAGQgcFegZCDIAAABQgUBqgJAjQgTBHgcAwIgFAIQhEBui6BbQBVg4A0iPg");
		this.shape_8.setTransform(498.2,905.3);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("rgba(255,255,255,0.298)").s().p("AhEG3IACgHQAOgoANgzIABgJIAKgpIADgHQALhBAus4IAbgJICMgYIAHAAQgJCUgNCsIgBAGQgcFegYCDIAAAAQgVBqgJAkQgTBHgbAvIgFAIQhFBui6BbQBVg3A0iQg");
		this.shape_9.setTransform(498.2,905.3);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("rgba(255,255,255,0.298)").s().p("AhEG3IADgHQANgoANgzIACgJIAKgoIACgIQALhBAvs4IAbgJICLgYIAHABQgJCTgNCsIgBAHQgbFdgaCDIAAAAQgTBqgKAjQgSBIgdAvIgFAIQhEBui6BbQBVg3A0iQg");
		this.shape_10.setTransform(498.1,905.3);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("rgba(255,255,255,0.298)").s().p("AjMJ+QBWg4AziPIADgHQANgpANgyIACgJIAKgpIACgIQAMhAAts3IAbgKICMgYIAGAAQgICTgNCtIgBAGQgbFegZCDIAAAAQgUBpgKAjQgTBIgbAwIgFAIQhFBvi7Bbg");
		this.shape_11.setTransform(498,905.4);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("rgba(255,255,255,0.298)").s().p("AjLJ+QBVg4A0iOIACgIQAOgpAMgyIACgJIALgpIABgIQAMg+Aus5IAagKICLgYIAHABQgJCSgMCtIgBAGQgbFegZCDIAAAAQgUBpgKAjQgTBIgbAwIgFAIQhFBvi7Bbg");
		this.shape_12.setTransform(497.9,905.4);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("rgba(255,255,255,0.298)").s().p("AjLJ+QBVg4A0iOIADgIQANgoAMgyIADgKIAKgpIABgIQAMg9Aus5IAagLICLgYIAHABQgJCTgNCsIgBAGQgaFdgZCEIAAAAQgUBogKAkQgTBHgbAxIgFAHQhEBwi7Bbg");
		this.shape_13.setTransform(497.9,905.4);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("rgba(255,255,255,0.298)").s().p("AjKJ+QBVg4A0iOIACgIQAOgoAMgyIACgKIAKgpIACgIQALg8Aus6IAagLICLgYIAGABQgICTgMCsIgBAGQgbFdgZCEIAAAAQgUBngJAlQgUBHgbAxIgFAHQhEBwi7Bbg");
		this.shape_14.setTransform(497.9,905.4);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("rgba(255,255,255,0.298)").s().p("AjKJ+QBVg4AziPIADgHQAOgoAMgzIACgJIAKgpIACgIQAMg8Aus6IAYgLICMgYIAGABQgICTgNCsIgBAGQgaFdgZCDIAAABQgUBmgJAmQgTBHgcAwIgFAIQhEBvi7Bcg");
		this.shape_15.setTransform(497.8,905.4);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("rgba(255,255,255,0.298)").s().p("AjJJ9QBUg4AziNIADgIQANgoANgyIADgKIAKgoIABgIQAMg8Aus6IAYgMICMgYIAFACQgICSgMCsIgBAGQgaFdgZCDIAAABQgUBmgKAlQgSBIgbAwIgGAIQhDBui5BbIgBABIgBABIACgCg");
		this.shape_16.setTransform(497.8,905.4);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("rgba(255,255,255,0.298)").s().p("AjIJ9QBUg4AziNIACgIQAOgoANgyIACgKIAKgoIACgIQALg7Aus7IAYgMICLgYIAGACQgICSgMCsIgBAHQgaFcgZCDIAAABQgTBlgKAmQgTBIgcAwIgEAIQhEBui4BbIgBABIgCABIADgCg");
		this.shape_17.setTransform(497.8,905.4);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("rgba(255,255,255,0.298)").s().p("AhBG4IACgIQAOgoAMgyIACgJIALgpIACgIQALg5Aus8IAXgMICLgZIAGACQgICTgMCsIgBAGQgZFcgZCDIAAABQgUBlgKAmQgTBIgbAvIgFAJQhEBvi5BcQBVg4A0iPg");
		this.shape_18.setTransform(497.8,905.4);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("rgba(255,255,255,0.298)").s().p("AjHJ9QBUg4AziNIACgHQAOgpANgyIABgJIALgpIACgIQALg5Aus8IAXgNICLgYIAGACQgICTgMCsIgBAGQgaFcgYCDIAAABQgUBkgKAnQgTBIgbAvIgFAIQhEBvi3BbIgCABIgCABIAEgCg");
		this.shape_19.setTransform(497.7,905.4);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("rgba(255,255,255,0.298)").s().p("AjHJ9QBUg4AziNIADgHQANgpANgyIACgKIAKgoIACgIQALg4Aus8IAXgOICLgXIAFACQgICSgLCrIgBAHQgZFbgZCDIAAABQgTBkgLAoQgTBIgbAvIgFAIQhEBvi3BbIgCABIgBAAIADgBg");
		this.shape_20.setTransform(497.6,905.4);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("rgba(255,255,255,0.298)").s().p("AjHJ9QBVg4AyiNIADgHQAOgpAMgyIACgKIAKgoIACgIQAMg3Aus9IAWgOICLgXIAFACQgICSgLCrIgBAHQgZFbgZCDIAAABQgTBkgLAoQgTBIgbAvIgFAIQhDBvi4BbIgBABIgCAAIADgBg");
		this.shape_21.setTransform(497.6,905.4);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("rgba(255,255,255,0.298)").s().p("AjGJ9QBTg4A0iNIACgHQANgoAOgzIABgJIAKgpIACgIQAMg2Aus9IAVgPICLgXIAFACQgHCSgMCrIgBAHQgYFbgZCDIAAABQgTBjgLAoQgTBIgbAwIgEAIQhEBvi3BbIgCABIgCAAIAEgBg");
		this.shape_22.setTransform(497.6,905.4);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("rgba(255,255,255,0.298)").s().p("AjGJ9QBUg4AziNIACgHQAOgpANgxIACgKIAKgpIACgIQAMg1Ats+IAVgPICLgXIAFACQgHCSgLCsIgBAGQgZFbgZCDIAAABQgSBigLApQgUBIgaAwIgGAIQhDBvi3BbIgCABIgBAAIADgBg");
		this.shape_23.setTransform(497.5,905.4);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("rgba(255,255,255,0.298)").s().p("AjGJ9QBUg4AziNIADgHQANgpANgxIACgKIAKgoIACgJQALg0Avs+IAUgQICLgXIAFADQgHCSgMCrIgBAHQgYFagZCDIAAABQgSBhgLAqQgUBIgaAwIgFAIQhEBvi3BbIgBABIgCAAIADgBg");
		this.shape_24.setTransform(497.5,905.4);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("rgba(255,255,255,0.298)").s().p("Ag/G5IADgIQANgoANgyIACgJIAKgpIACgIQALg0Aus/IAUgPICLgYIAFADQgHCSgLCrIgBAHQgYFbgZCDIAAABQgTBggLAqQgTBIgbAvIgFAJQhEBvi4BcQBWg4AziNg");
		this.shape_25.setTransform(497.5,905.4);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("rgba(255,255,255,0.298)").s().p("Ag/G4IADgHQANgoANgyIACgJIAKgpIACgJQALgyAvtAIATgQICLgXIAFADQgICSgKCrIgBAHQgYFbgZCCIAAABQgSBggMArQgTBIgbAvIgEAIQhEBwi5BcQBWg3AziPg");
		this.shape_26.setTransform(497.5,905.4);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("rgba(255,255,255,0.298)").s().p("Ag/G4IADgGQAOgpAMgyIADgJIAKgpIACgJQALgxAutAIATgRICLgXIAEADQgHCSgLCrIgBAHQgXFbgZCCIAAABQgSBggLAqQgUBJgaAvIgGAIQhDBwi4BcQBWg3AyiPg");
		this.shape_27.setTransform(497.4,905.4);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("rgba(255,255,255,0.298)").s().p("Ag+G4IACgGQAOgpANgyIACgJIAKgpIACgJQALgwAutBIATgQICKgYIAFAEQgHCRgLCrIgBAHQgXFagZCDIAAABQgSBfgLArQgUBJgaAvIgFAIQhEBwi4BcQBVg3A0iPg");
		this.shape_28.setTransform(497.4,905.4);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("rgba(255,255,255,0.298)").s().p("Ag+G5IADgHQANgpANgyIACgJIAKgpIACgIQALgwAvtBIASgRICKgYIAEAEQgGCSgLCqIgBAHQgXFagZCDIAAABQgSBfgLArQgUBJgaAvIgFAIQhEBwi3BcQBVg4AziNg");
		this.shape_29.setTransform(497.3,905.4);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("rgba(255,255,255,0.298)").s().p("Ag+G5IADgHQANgpANgxIADgKIAKgoIACgJQAKgvAvtCIARgRICLgYIAEAEQgGCSgLCqIgBAHQgWFagZCDIAAABQgSBegMArQgUBKgaAvIgFAIQhEBwi3BcQBVg4AziNg");
		this.shape_30.setTransform(497.3,905.4);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("rgba(255,255,255,0.298)").s().p("Ag9G5IACgHQAOgpANgyIACgJIAKgoIACgJQALguAutCIARgSICLgYIAEAEQgHCSgKCrIgBAGQgWFagZCDIAAABQgSBdgMAsQgUBKgaAuIgFAIQhEBwi3BdQBVg4A0iNg");
		this.shape_31.setTransform(497.3,905.4);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("rgba(255,255,255,0.298)").s().p("Ag9G5IADgHQAOgpAMgyIACgJIAKgoIADgJQALguAttBIARgTICLgYIADAEQgFCSgMCrIAAAGQgWFagZCDIAAABQgSBdgMAsQgTBJgbAvIgEAIQhEBwi3BdQBVg4AziNg");
		this.shape_32.setTransform(497.2,905.4);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("rgba(255,255,255,0.298)").s().p("Ag9G5IADgHQAOgoAMgyIACgKIAKgoIADgJQALgtAutCIAQgTICKgYIAEAEQgGCSgLCrIAAAGQgWFagZCDIAAABQgSBcgMAtQgUBJgZAvIgFAIQhEBwi3BdQBVg4AziNg");
		this.shape_33.setTransform(497.2,905.4);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("rgba(255,255,255,0.298)").s().p("Ag8G5IADgHQANgoANgyIACgKIAKgoIACgJQALgsAutCIAQgUICKgYIAEAEQgGCSgLCrIAAAGQgWFagZCDIAAABQgRBbgNAuQgTBJgaAvIgFAIQhEBwi3BdQBWg4AziNg");
		this.shape_34.setTransform(497.1,905.4);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("rgba(255,255,255,0.298)").s().p("Ag8G5IACgHQAOgoANgyIACgJIAKgpIACgJQALgrAutDIAPgUICLgYIAEAFQgHCRgKCrIAAAHQgVFZgZCDIAAABQgTBbgMAuQgTBJgaAuIgFAJQhEBwi2BdQBUg4A0iNg");
		this.shape_35.setTransform(497.1,905.4);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("rgba(255,255,255,0.298)").s().p("Ag7G5IACgHQANgoAOgyIACgJIAJgoIACgKQAMgqAutDIAOgVICLgYIADAFQgGCRgKCrIAAAHQgWFZgZCDIAAABQgRBagMAuQgVBKgZAuIgFAJQhEBwi2BdQBVg4A0iNg");
		this.shape_36.setTransform(497.1,905.4);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("rgba(255,255,255,0.298)").s().p("Ag8G5IADgHQAOgoANgyIACgKIAJgnIADgKQALgpAutEIAOgVICKgYIAEAFQgGCSgKCqIAAAHQgVFZgZCCIAAACQgSBagMAuQgUBKgaAuIgFAIQhEBxi2BdQBVg4AziNg");
		this.shape_37.setTransform(497,905.5);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("rgba(255,255,255,0.298)").s().p("AjDJ9QBVg3AziNIADgHQAOgoAMgyIACgJIAKgpIADgJQALgoAutFIAOgVICKgYIADAFQgGCRgKCrIAAAGQgVFagZCCIAAACQgRBZgNAvQgUBJgZAuIgFAJQhEBxi3Bdg");
		this.shape_38.setTransform(496.9,905.5);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("rgba(255,255,255,0.298)").s().p("AjDJ9QBWg3AyiNIADgHQAOgoAMgyIACgJIALgoIACgKQAKgnAvtFIAOgWICJgYIADAFQgFCRgKCrIAAAHQgUFZgZCCIAAACQgSBYgNAvQgUBKgZAuIgFAJQhEBxi2Bdg");
		this.shape_39.setTransform(496.9,905.5);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("rgba(255,255,255,0.298)").s().p("AjDJ9QBWg3AziNIADgHQANgoANgyIACgJIAKgoIACgKQALgmAvtGIAMgWICLgYIACAFQgFCSgKCqIAAAHQgVFZgZCCIAAACQgQBXgNAwQgVBKgZAuIgFAIQhEByi2Bdg");
		this.shape_40.setTransform(496.9,905.5);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("rgba(255,255,255,0.298)").s().p("AjCJ9QBVg3AziNIADgHQANgoANgyIACgJIAKgoIADgKQAKglAvtGIAMgXICKgYIADAGQgFCRgKCqIAAAHQgUFZgZCCIAAACQgSBXgMAwQgVBKgZAuIgFAIQhEByi2Bdg");
		this.shape_41.setTransform(496.8,905.5);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("rgba(255,255,255,0.298)").s().p("AjCJ9QBVg3A0iNIACgHQAOgoANgyIACgJIAKgoIACgKQALgkAutHIAMgXICKgYIACAGQgECRgKCqIAAAHQgUFZgZCCIAAACQgRBWgNAxQgUBKgaAuIgFAIQhDByi2Bdg");
		this.shape_42.setTransform(496.8,905.5);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("rgba(255,255,255,0.298)").s().p("AjCJ9QBWg3AyiMIAEgIQANgoANgyIACgJIAJgoIADgKQALgjAvtHIALgYICJgXIADAFQgFCRgKCqIAAAHQgTFYgZCCIAAACQgRBXgNAwQgUBLgZAuIgGAIQhDByi2Bcg");
		this.shape_43.setTransform(496.8,905.5);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("rgba(255,255,255,0.298)").s().p("Ag5G6IADgHQANgpANgxIACgKIAKgnIACgKQALgjAvtIIAKgYICKgXIACAFQgECRgKCrIAAAGQgTFZgZCCIAAACQgRBVgNAxQgVBLgZAuIgFAIQhDBxi1BdQBVg3AziMg");
		this.shape_44.setTransform(496.7,905.5);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("rgba(255,255,255,0.298)").s().p("AjBJ9QBWg3AyiMIAEgHQANgoANgyIACgJIAKgpIACgKQALgiAutIIALgYICJgXIACAFQgECSgJCpIAAAHQgUFYgZCCIAAACQgQBVgOAyQgUBLgZAtIgFAIQhEBzi2Bcg");
		this.shape_45.setTransform(496.7,905.5);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("rgba(255,255,255,0.298)").s().p("AjAJ9QBVg3AziMIADgHQAOgoAMgyIACgJIAKgpIADgKQAKggAutJIAKgZICKgXIACAFQgECSgKCpIAAAHQgSFYgaCCIAAACQgQBUgOAzQgUBLgZAtIgFAIQhDBzi2Bcg");
		this.shape_46.setTransform(496.6,905.5);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("rgba(255,255,255,0.298)").s().p("AjBJ9IACgBQBUg3AziLIADgHQANgoANgyIACgJIAKgoIADgKQAKghAvtJIAJgZICKgXIACAGQgFCRgJCpIAAAHQgTFYgZCCIAAACQgQBUgOAyQgUBMgZAtIgFAIQhDBxi0BdIgBABg");
		this.shape_47.setTransform(496.6,905.5);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("rgba(255,255,255,0.298)").s().p("AjBJ9IADgBQBUg3AyiLIADgHQAOgpANgxIACgJIAJgoIADgKQALggAutJIAJgaICKgXIABAGQgECRgJCqIAAAGQgSFYgZCCIAAACQgRBTgNAzQgVBLgYAtIgFAJQhEBxizBdIgCABg");
		this.shape_48.setTransform(496.6,905.5);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("rgba(255,255,255,0.298)").s().p("AjAJ9IACgBQBUg3AziLIACgHQAOgoANgyIACgJIAJgoIAEgKQAKgfAutKIAIgaICKgXIACAGQgECRgJCqIAAAGQgTFYgZCCIAAACQgQBTgOAzQgUBLgZAtIgFAJQhDBxizBdIgBABg");
		this.shape_49.setTransform(496.5,905.5);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("rgba(255,255,255,0.298)").s().p("AjAJ9IADgBQBTg3AziLIADgHQANgoANgyIACgJIAKgoIADgKQAKgeAvtKIAHgbICKgXIACAGQgECRgJCqIAAAHQgSFXgZCCIAAACQgQBSgOA0QgVBLgYAtIgFAIQhDByizBdIgCABg");
		this.shape_50.setTransform(496.5,905.5);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("rgba(255,255,255,0.298)").s().p("Ai/J9IACgBQBUg3AyiLIADgHQAOgoANgyIACgJIAJgoIADgKQAKgdAvtLIAHgbICKgXIABAHQgECQgICqIAAAHQgSFXgZCCIAAACQgQBRgOA1QgVBLgYAtIgFAIQhDByizBdIgCABg");
		this.shape_51.setTransform(496.4,905.5);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("rgba(255,255,255,0.298)").s().p("Ag2G6IACgHQAOgoAMgyIACgJIAKgoIADgKQAKgcAvtLIAHgcICJgXIACAHQgECQgJCqIAAAHQgRFXgZCCIAAACQgQBRgOA1QgVBLgYAtIgFAIQhDBzi1BdQBWg3AziMg");
		this.shape_52.setTransform(496.4,905.5);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("rgba(255,255,255,0.298)").s().p("Ag2G6IADgHQANgoANgyIACgJIAKgnIACgLQALgbAvtMIAGgbICKgYIABAHQgECRgJCpIAAAHQgRFXgZCCIAAACQgQBQgOA1QgVBMgYAtIgFAIQhDBzi1BdQBWg3AziMg");
		this.shape_53.setTransform(496.4,905.5);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("rgba(255,255,255,0.298)").s().p("Ag2G6IADgHQANgoANgxIACgJIAKgpIADgKQAKgaAvtNIAGgbICJgYIABAHQgDCQgJCqIAAAHQgRFXgZCBIAAADQgQBPgOA2QgVBMgYAsIgFAJQhDByi0BeQBVg3AziMg");
		this.shape_54.setTransform(496.3,905.6);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("rgba(255,255,255,0.298)").s().p("Ag2G6IADgHQAOgoANgxIACgJIAJgoIADgLQAKgZAvtNIAGgcICJgYIABAHQgDCQgJCqIAAAHQgRFXgZCBIAAADQgPBOgPA2QgVBNgYAsIgFAJQhDByi0BeQBVg3AziMg");
		this.shape_55.setTransform(496.3,905.6);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("rgba(255,255,255,0.298)").s().p("Ai+J9IADgBQBTg4AziKIADgGQANgpANgxIACgJIAKgoIADgKQAJgaAwtNIAFgcICJgYIABAHQgECRgICpIAAAHQgQFXgZCBIAAADQgQBOgPA2QgUBNgYAsIgFAJQhDByiyBdIgCABg");
		this.shape_56.setTransform(496.2,905.6);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("rgba(255,255,255,0.298)").s().p("Ai9J9IACgBQBUg3AyiLIADgGQAOgoANgyIACgJIAJgoIADgKQAJgZAwtNIAFgdICJgYIAAAIQgDCQgICpIAAAIQgQFVgZCCIAAADQgPBNgPA3QgVBNgYAsIgFAIQhDByiyBeIgCABg");
		this.shape_57.setTransform(496.2,905.6);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("rgba(255,255,255,0.298)").s().p("Ai9J9IACgBQBUg3AyiLIAEgGQANgoANgyIACgJIAKgoIACgKQAJgYAxtOIADgdICJgYIABAIQgDCQgICpIAAAIQgQFVgZCCIAAADQgQBNgPA3QgUBMgYAtIgFAIQhDByiyBeIgCABg");
		this.shape_58.setTransform(496.2,905.6);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("rgba(255,255,255,0.298)").s().p("Ag0G6IACgGQAOgoANgyIACgJIAKgoIADgKQAJgXAvtOIAEgeICKgYIAAAIQgDCRgICoIAAAIQgQFVgZCCIAAADQgPBNgPA3QgVBMgYAtIgFAIQhDBzizBeQBVg2AziNg");
		this.shape_59.setTransform(496.1,905.6);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("rgba(255,255,255,0.298)").s().p("Ag0G7IADgHQANgpANgxIACgJIAKgoIADgKQAJgWAwtPIADgeICJgYIAAAIQgDCQgHCqIAAAGQgQFWgZCCIAAADQgPBLgPA5QgVBMgYAsIgFAJQhDBzizBeQBVg3AziLg");
		this.shape_60.setTransform(496.1,905.6);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("rgba(255,255,255,0.298)").s().p("Ag0G7IADgHQAOgoANgyIACgJIAJgnIADgLQAJgVAwtPIADgfICJgYIAAAJQgDCQgHCpIAAAHQgQFVgZCCIAAADQgPBLgPA4QgVBNgYAsIgFAIQhDB0izBeQBVg3AziLg");
		this.shape_61.setTransform(496,905.6);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("rgba(255,255,255,0.298)").s().p("AgxG0QAQgsANg3IAMgyQAKgUAytvICJgYQgDCUgHCuQgPFbgaCDQgjC8gtBLQhDB0izBeQBYg4AziRg");
		this.shape_62.setTransform(496,905.6);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("rgba(255,255,255,0.298)").s().p("Ag0G7IADgHQAOgoANgyIACgJIAJgnIADgLQAJgUAwtQIADgfICJgYIAAAJQgDCQgHCpIAAAHQgQFVgZCCIAAADQgPBLgPA4QgVBNgYAsIgFAIQhDB0izBeQBVg3AziLg");
		this.shape_63.setTransform(496,905.6);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("rgba(255,255,255,0.298)").s().p("Ag0G7IADgHQAOgoANgyIACgJIAJgoIADgKQAJgVAwtPIADgfICJgYIAAAIQgDCQgICqIAAAHQgPFVgYCCIAAADQgQBLgPA5QgVBMgYAsIgEAIQhDB0i0BeQBVg3AziLg");
		this.shape_64.setTransform(496.1,905.6);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("rgba(255,255,255,0.298)").s().p("Ag0G7IADgIQANgoANgxIACgJIAKgoIADgKQAJgWAwtPIADgeICJgYIAAAIQgCCQgICpIAAAHQgQFWgZCCIAAADQgPBMgPA4QgVBMgYAsIgFAJQhDBzizBeQBVg3AziLg");
		this.shape_65.setTransform(496.1,905.6);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("rgba(255,255,255,0.298)").s().p("Ag0G6IACgGQAOgoANgyIACgJIAKgoIADgKQAJgXAvtOIAEgeICJgYIABAIQgDCRgICoIAAAIQgQFVgZCCIAAADQgPBMgPA4QgVBMgYAtIgFAIQhDBzizBeQBVg2AziNg");
		this.shape_66.setTransform(496.1,905.6);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("rgba(255,255,255,0.298)").s().p("Ai9J9IADgBQBTg3AziLIADgGQANgoANgyIACgJIAKgoIACgKQAKgXAwtPIADgdICJgYIABAIQgDCQgICpIAAAIQgQFVgZCCIAAADQgPBNgPA3QgVBMgYAtIgFAIQhDByixBeIgCABg");
		this.shape_67.setTransform(496.1,905.6);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("rgba(255,255,255,0.298)").s().p("Ai9J9IACgBQBUg4AyiKIADgGQAOgpAMgxIACgJIAKgoIADgKQAJgZAwtOIAFgcICJgYIABAHQgECRgHCpIAAAHQgRFXgZCBIAAADQgPBOgPA2QgVBNgYAsIgFAJQhDByiyBdIgCABg");
		this.shape_68.setTransform(496.2,905.6);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("rgba(255,255,255,0.298)").s().p("Ag2G6IAEgHQANgoANgxIACgJIAKgoIACgKQAKgaAwtNIAEgcICKgYIABAHQgECRgICpIAAAHQgRFXgYCBIAAADQgQBOgPA2QgUBNgZAsIgEAJQhDByi1BeQBWg3AyiMg");
		this.shape_69.setTransform(496.3,905.6);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("rgba(255,255,255,0.298)").s().p("Ag2G6IADgHQAOgoANgxIACgJIAJgpIADgKQAKgZAvtNIAGgcICJgYIABAHQgDCQgJCqIAAAHQgQFXgZCBIAAADQgQBPgPA2QgVBMgYAsIgFAJQhDByi0BeQBVg3AziMg");
		this.shape_70.setTransform(496.3,905.6);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("rgba(255,255,255,0.298)").s().p("Ag2G6IADgHQANgoANgxIACgKIAKgnIACgLQALgbAvtMIAGgbICJgYIACAHQgFCRgICpIAAAHQgRFXgZCCIAAACQgQBQgOA1QgVBMgYAtIgFAIQhDBzi1BdQBWg3AziMg");
		this.shape_71.setTransform(496.4,905.5);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("rgba(255,255,255,0.298)").s().p("Ag2G6IACgHQAOgoANgyIACgJIAKgnIACgLQALgbAutMIAHgbICJgYIACAHQgECRgJCpIAAAHQgRFXgZCCIAAACQgQBQgOA1QgVBMgYAtIgFAIQhDBzi1BdQBVg3A0iMg");
		this.shape_72.setTransform(496.4,905.5);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("rgba(255,255,255,0.298)").s().p("AjAJ9IADgBQBUg3AyiLIADgHQAOgoANgyIACgJIAJgoIACgKQALgdAvtLIAIgbICJgXIACAGQgECRgJCqIAAAHQgSFXgZCCIAAACQgRBSgOA0QgUBLgZAtIgEAIQhDByizBdIgCABg");
		this.shape_73.setTransform(496.5,905.5);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("rgba(255,255,255,0.298)").s().p("AjAJ9IADgBQBTg3AziLIADgHQANgoANgyIACgJIAKgoIADgKQAKgeAvtKIAHgbICKgXIACAGQgECRgJCqIAAAHQgSFXgZCCIAAACQgQBSgOA0QgVBLgYAtIgFAJQhDBxizBdIgCABg");
		this.shape_74.setTransform(496.5,905.5);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("rgba(255,255,255,0.298)").s().p("AjAJ9IACgBQBUg3AziLIACgHQAOgoANgyIACgJIAJgoIAEgKQAJgfAvtKIAIgaICKgXIACAGQgECRgJCqIAAAGQgTFYgZCCIAAACQgQBSgOA0QgUBLgZAtIgFAJQhDBxizBdIgBABg");
		this.shape_75.setTransform(496.5,905.5);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("rgba(255,255,255,0.298)").s().p("AjAJ9IACgBQBUg3AyiLIADgHQAOgoANgyIACgJIAJgoIADgKQALgfAutKIAJgaICJgXIACAGQgECRgJCqIAAAGQgSFYgZCCIAAACQgRBTgOAzQgUBLgZAtIgFAJQhDBxizBdIgCABg");
		this.shape_76.setTransform(496.5,905.5);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("rgba(255,255,255,0.298)").s().p("AjBJ9IADgBQBUg3AyiLIADgHQAOgpANgxIACgJIAKgoIACgKQALggAutJIAJgaICKgXIABAGQgECRgJCqIAAAGQgSFYgZCCIAAACQgRBTgNAzQgVBMgYAsIgFAJQhEBxizBdIgCABg");
		this.shape_77.setTransform(496.6,905.5);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("rgba(255,255,255,0.298)").s().p("AjAJ9QBVg3AziMIADgHQAOgoAMgyIACgJIAKgpIADgKQAKggAutJIAKgZICKgXIACAFQgECSgKCpIAAAHQgTFYgZCCIAAACQgQBUgOAzQgUBLgZAtIgFAIQhDBzi2Bcg");
		this.shape_78.setTransform(496.6,905.5);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("rgba(255,255,255,0.298)").s().p("AjBJ9QBWg3AziMIADgHQANgoANgyIACgJIAKgpIACgKQALghAutJIAKgYICKgXIACAFQgECSgJCpIgBAHQgTFYgZCCIAAACQgQBVgOAyQgUBLgZAtIgFAIQhDBzi2Bcg");
		this.shape_79.setTransform(496.6,905.5);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("rgba(255,255,255,0.298)").s().p("Ag5G6IADgHQANgpANgxIACgJIAKgoIACgKQALgjAvtIIAKgYICKgXIACAFQgECRgKCrIAAAGQgTFZgZCCIAAACQgRBVgNAxQgVBLgZAtIgFAJQhDBxi1BdQBVg3AziMg");
		this.shape_80.setTransform(496.7,905.5);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("rgba(255,255,255,0.298)").s().p("Ag6G6IAEgHQANgpANgxIACgKIAJgoIADgJQALgkAvtHIALgYICJgXIADAFQgFCRgKCrIAAAGQgTFZgaCCIAAACQgQBVgNAyQgUBKgZAuIgGAIQhDBxi2BdQBWg3AyiMg");
		this.shape_81.setTransform(496.8,905.5);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("rgba(255,255,255,0.298)").s().p("AjCJ9QBWg3AyiMIAEgIQANgoANgyIACgJIAJgoIADgKQALgkAvtHIALgXICJgXIADAFQgFCRgJCqIgBAHQgTFYgZCCIAAACQgRBXgNAwQgUBLgZAuIgGAIQhDByi2Bcg");
		this.shape_82.setTransform(496.8,905.5);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("rgba(255,255,255,0.298)").s().p("AjCJ9QBVg3A0iNIACgHQAOgoANgyIACgJIAKgoIACgKQALgkAutHIAMgXICKgYIACAGQgFCRgJCqIAAAHQgUFZgZCCIAAACQgRBWgNAxQgUBKgaAuIgFAIQhDByi2Bdg");
		this.shape_83.setTransform(496.8,905.5);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("rgba(255,255,255,0.298)").s().p("AjCJ9QBVg3AziNIADgHQANgoANgyIACgJIALgoIACgKQAKglAvtGIAMgXICKgYIACAGQgECRgKCqIAAAHQgVFZgYCCIAAACQgSBXgNAwQgTBKgaAuIgEAIQhFByi1Bdg");
		this.shape_84.setTransform(496.8,905.5);

		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("rgba(255,255,255,0.298)").s().p("AjCJ9QBVg3AziNIADgHQANgoANgyIACgJIAKgoIADgKQAKgmAvtGIAMgWICKgYIADAGQgFCRgKCqIAAAHQgUFZgZCCIAAACQgRBXgNAwQgVBKgZAuIgFAIQhDByi3Bdg");
		this.shape_85.setTransform(496.8,905.5);

		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.f("rgba(255,255,255,0.298)").s().p("AjDJ9QBWg3AziNIADgHQANgoANgyIACgJIAKgoIACgKQALgnAutFIANgWICLgYIACAFQgFCSgKCqIAAAHQgVFZgZCCIAAACQgRBYgMAvQgVBKgZAuIgFAJQhEBxi2Bdg");
		this.shape_86.setTransform(496.9,905.5);

		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.f("rgba(255,255,255,0.298)").s().p("AjDJ9QBVg3AziNIADgHQAOgoAMgyIACgJIAKgoIADgKQALgoAutFIANgVICKgYIAEAFQgGCRgKCrIAAAHQgVFZgZCCIAAACQgRBYgNAvQgUBKgZAuIgFAJQhEBxi3Bdg");
		this.shape_87.setTransform(496.9,905.5);

		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.f("rgba(255,255,255,0.298)").s().p("Ag8G5IADgHQAOgoANgyIACgJIAKgoIACgJQALgpAutFIAOgVICKgYIAEAFQgGCSgKCqIAAAHQgVFZgZCCIAAACQgSBZgNAvQgTBKgaAtIgFAJQhDBxi2BdQBUg3AziOg");
		this.shape_88.setTransform(497,905.5);

		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.f("rgba(255,255,255,0.298)").s().p("Ag8G5IADgHQAOgoANgyIACgKIAJgnIADgKQALgpAutEIAOgVICKgYIAEAFQgGCSgKCqIAAAHQgWFZgZCCIAAACQgRBagMAuQgUBKgaAuIgFAIQhEBxi2BdQBVg4AziNg");
		this.shape_89.setTransform(497,905.5);

		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.f("rgba(255,255,255,0.298)").s().p("Ag7G5IACgHQANgoAOgyIACgJIAJgoIACgKQAMgpAutEIAOgVICLgYIADAFQgGCRgKCrIgBAHQgUFZgaCCIAAACQgRBagMAuQgVBKgZAuIgFAIQhEBxi2BdQBVg3A0iOg");
		this.shape_90.setTransform(497.1,905.4);

		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.f("rgba(255,255,255,0.298)").s().p("Ag8G5IADgHQANgoANgyIACgJIAKgoIACgKQALgqAvtEIAOgUICLgYIADAFQgGCRgKCrIAAAHQgWFZgZCDIAAABQgRBagNAuQgTBKgaAuIgFAJQhEBwi2BdQBVg4AziNg");
		this.shape_91.setTransform(497.1,905.4);

		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.f("rgba(255,255,255,0.298)").s().p("Ag8G5IACgHQAOgoANgyIACgKIAKgoIACgJQALgrAutDIAQgUICKgYIAEAFQgGCRgLCrIAAAGQgWFagZCDIAAABQgRBbgNAuQgUBJgZAvIgFAIQhEBwi3BdQBVg4A0iNg");
		this.shape_92.setTransform(497.1,905.4);

		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.f("rgba(255,255,255,0.298)").s().p("Ag8G5IADgHQANgoANgyIACgKIAJgoIADgJQALgsAutDIAQgTICKgYIAEAEQgGCSgKCrIgBAGQgWFagZCDIAAABQgSBcgLAtQgUBJgaAvIgGAIQhDBwi3BdQBVg4A0iNg");
		this.shape_93.setTransform(497.2,905.4);

		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.f("rgba(255,255,255,0.298)").s().p("Ag9G5IADgHQAOgpAMgxIACgKIAKgoIADgJQALgtAutCIAQgTICKgYIAEAEQgGCSgKCrIgBAGQgWFagZCDIAAABQgSBcgMAtQgUBJgZAvIgFAIQhEBwi3BdQBVg4AziNg");
		this.shape_94.setTransform(497.2,905.4);

		this.shape_95 = new cjs.Shape();
		this.shape_95.graphics.f("rgba(255,255,255,0.298)").s().p("Ag9G5IADgHQAOgpAMgyIACgJIAKgoIADgJQALgtAttCIARgTICLgYIADAEQgFCSgMCrIAAAGQgWFagZCDIAAABQgSBdgMAsQgTBJgbAvIgEAIQhEBwi3BdQBVg4AziNg");
		this.shape_95.setTransform(497.2,905.4);

		this.shape_96 = new cjs.Shape();
		this.shape_96.graphics.f("rgba(255,255,255,0.298)").s().p("Ag9G5IADgHQANgpANgyIACgJIAKgoIACgJQALguAutCIARgSICLgYIAEAEQgGCSgLCrIgBAGQgWFagZCDIAAABQgSBdgMAsQgUBJgaAvIgFAIQhEBwi3BdQBWg4AziNg");
		this.shape_96.setTransform(497.2,905.4);

		this.shape_97 = new cjs.Shape();
		this.shape_97.graphics.f("rgba(255,255,255,0.298)").s().p("Ag9G5IACgHQAOgpANgxIACgKIAKgoIACgJQALguAutCIARgSICLgYIAEAEQgHCSgKCqIgBAHQgWFagZCDIAAABQgSBdgMAsQgUBKgaAvIgFAIQhEBwi3BcQBVg4A0iNg");
		this.shape_97.setTransform(497.3,905.4);

		this.shape_98 = new cjs.Shape();
		this.shape_98.graphics.f("rgba(255,255,255,0.298)").s().p("Ag+G5IADgHQANgpANgxIADgKIAKgoIACgJQAKgwAvtBIARgRICLgYIAEAEQgGCSgLCqIgBAHQgWFagZCDIAAABQgSBegMArQgUBKgaAvIgFAIQhEBwi3BcQBVg4AziNg");
		this.shape_98.setTransform(497.3,905.4);

		this.shape_99 = new cjs.Shape();
		this.shape_99.graphics.f("rgba(255,255,255,0.298)").s().p("Ag+G5IADgHQANgoANgzIACgJIAKgpIACgIQALgwAvtBIARgRICLgYIAEAEQgGCSgLCqIgBAHQgXFagZCDIAAABQgSBfgLArQgUBJgaAvIgFAIQhEBwi3BcQBVg4AziNg");
		this.shape_99.setTransform(497.3,905.4);

		this.shape_100 = new cjs.Shape();
		this.shape_100.graphics.f("rgba(255,255,255,0.298)").s().p("Ag+G4IADgGQANgpANgyIACgJIAKgpIACgJQALgwAvtAIASgRICKgYIAFAEQgHCSgLCqIAAAHQgYFagZCDIAAABQgSBfgMArQgTBJgaAvIgFAIQhEBwi4BcQBWg3AziPg");
		this.shape_100.setTransform(497.4,905.4);

		this.shape_101 = new cjs.Shape();
		this.shape_101.graphics.f("rgba(255,255,255,0.298)").s().p("Ag+G4IADgGQANgpANgyIACgJIAKgpIACgJQALgxAutAIATgRICKgXIAFADQgHCSgLCrIAAAHQgYFagZCDIAAABQgSBfgLArQgUBJgaAvIgFAIQhEBwi4BcQBWg3AziPg");
		this.shape_101.setTransform(497.4,905.4);

		this.shape_102 = new cjs.Shape();
		this.shape_102.graphics.f("rgba(255,255,255,0.298)").s().p("Ag/G4IADgHQAOgoAMgyIACgJIAKgpIADgJQALgyAus/IATgRICLgXIAEADQgGCSgMCrIAAAHQgYFbgZCCIAAABQgSBggLArQgUBIgaAvIgFAIQhFBwi3BcQBVg3AziPg");
		this.shape_102.setTransform(497.4,905.4);

		this.shape_103 = new cjs.Shape();
		this.shape_103.graphics.f("rgba(255,255,255,0.298)").s().p("Ag/G4IADgHQANgoANgyIACgJIAKgpIACgJQALgyAvtAIATgQICLgXIAFADQgHCSgLCrIgBAHQgYFagZCDIAAABQgSBggMArQgTBIgbAvIgEAJQhEBvi5BcQBWg4AziOg");
		this.shape_103.setTransform(497.5,905.4);

		this.shape_104 = new cjs.Shape();
		this.shape_104.graphics.f("rgba(255,255,255,0.298)").s().p("Ag/G4IACgHQAOgoAMgyIADgKIAKgoIACgJQALg0Aus+IAVgPICKgYIAFADQgHCSgLCrIgBAHQgYFbgZCDIAAABQgSBhgLApQgUBIgaAwIgGAIQhEBvi4BcQBWg4AziOg");
		this.shape_104.setTransform(497.5,905.4);

		this.shape_105 = new cjs.Shape();
		this.shape_105.graphics.f("rgba(255,255,255,0.298)").s().p("AjGJ9QBUg4AziNIADgHQANgpANgxIACgKIAKgpIACgIQALg1Avs9IAUgQICLgXIAFACQgHCSgMCsIAAAGQgZFbgZCDIAAABQgSBigLApQgUBIgaAwIgFAIQhEBvi3BbIgBABIgCAAIADgBg");
		this.shape_105.setTransform(497.5,905.4);

		this.shape_106 = new cjs.Shape();
		this.shape_106.graphics.f("rgba(255,255,255,0.298)").s().p("AjGJ9QBUg4AziNIACgHQAOgpANgxIACgKIAKgpIACgIQALg1Aus+IAVgPICLgXIAFACQgHCSgMCsIAAAGQgZFbgZCDIAAABQgTBigLApQgTBIgbAwIgFAIQhDBvi3BbIgCABIgBAAIADgBg");
		this.shape_106.setTransform(497.5,905.4);

		this.shape_107 = new cjs.Shape();
		this.shape_107.graphics.f("rgba(255,255,255,0.298)").s().p("AjHJ9QBVg4AyiNIADgHQAOgoAMgzIACgJIAKgpIACgIQAMg2Aus9IAVgPICLgXIAGACQgICSgMCrIAAAHQgZFbgZCDIAAABQgTBjgLAoQgTBIgbAwIgFAIQhEBvi3BbIgBABIgCAAIADgBg");
		this.shape_107.setTransform(497.6,905.4);

		this.shape_108 = new cjs.Shape();
		this.shape_108.graphics.f("rgba(255,255,255,0.298)").s().p("AjHJ9QBUg4AziNIADgHQANgpANgyIACgKIAKgoIACgIQAMg4Ats8IAXgOICKgXIAGACQgHCSgMCrIgBAHQgZFbgZCDIAAABQgTBkgKAoQgUBIgbAvIgFAIQhDBvi4BbIgCABIgBAAIADgBg");
		this.shape_108.setTransform(497.6,905.4);

		this.shape_109 = new cjs.Shape();
		this.shape_109.graphics.f("rgba(255,255,255,0.298)").s().p("AjHJ9QBUg4AziNIADgHQANgpANgyIACgKIAKgoIACgIQALg4Aus8IAXgOICLgXIAFACQgHCSgMCrIgBAHQgZFbgZCDIAAABQgTBkgLAoQgTBIgbAvIgFAIQhEBvi3BbIgCABIgBAAIADgBg");
		this.shape_109.setTransform(497.6,905.4);

		this.shape_110 = new cjs.Shape();
		this.shape_110.graphics.f("rgba(255,255,255,0.298)").s().p("AjHJ9QBUg4AziNIACgHQAOgpANgyIABgJIALgpIACgIQALg4Aus8IAXgOICLgYIAGACQgJCTgMCsIAAAGQgaFcgYCDIAAABQgUBkgKAnQgTBIgbAvIgFAIQhEBvi3BbIgCABIgCABIAEgCg");
		this.shape_110.setTransform(497.7,905.4);

		this.shape_111 = new cjs.Shape();
		this.shape_111.graphics.f("rgba(255,255,255,0.298)").s().p("AhBG4IACgIQAOgoANgyIABgJIALgpIACgIQALg5Aus8IAXgMICMgZIAFACQgICTgMCsIgBAGQgZFcgZCDIAAABQgTBlgLAmQgTBIgbAvIgFAJQhEBvi5BcQBVg4A0iPg");
		this.shape_111.setTransform(497.8,905.4);

		this.shape_112 = new cjs.Shape();
		this.shape_112.graphics.f("rgba(255,255,255,0.298)").s().p("AhBG4IACgIQAOgoAMgyIACgJIALgpIACgIQALg5Aus8IAXgMICLgZIAGACQgICTgMCsIgBAGQgZFcgZCDIAAABQgTBlgLAmQgTBIgbAwIgFAIQhEBvi5BcQBVg4A0iPg");
		this.shape_112.setTransform(497.8,905.4);

		this.shape_113 = new cjs.Shape();
		this.shape_113.graphics.f("rgba(255,255,255,0.298)").s().p("AjIJ9QBUg4AziNIACgIQAOgoANgyIACgKIAKgoIACgIQALg7Aus7IAYgMICLgYIAGACQgICSgMCsIgBAGQgaFdgZCDIAAABQgTBlgKAmQgTBIgcAwIgFAIQhEBui3BbIgCABIgBABIADgCg");
		this.shape_113.setTransform(497.8,905.4);

		this.shape_114 = new cjs.Shape();
		this.shape_114.graphics.f("rgba(255,255,255,0.298)").s().p("AjKJ+QBVg4AziPIADgHQAOgoAMgzIACgJIAKgpIACgIQALg8Aus6IAagLICLgYIAGABQgICTgMCsIgBAGQgbFdgZCDIAAABQgUBngJAlQgUBHgbAwIgFAIQhEBvi7Bcg");
		this.shape_114.setTransform(497.9,905.4);

		this.shape_115 = new cjs.Shape();
		this.shape_115.graphics.f("rgba(255,255,255,0.298)").s().p("AjLJ+QBWg4AziOIADgIQANgoANgyIACgKIAKgpIACgIQALg9Aus5IAagLICLgYIAGABQgICTgNCsIAAAGQgbFdgZCEIAAAAQgUBogJAkQgUBHgbAxIgFAHQhEBwi7Bbg");
		this.shape_115.setTransform(497.9,905.4);

		this.shape_116 = new cjs.Shape();
		this.shape_116.graphics.f("rgba(255,255,255,0.298)").s().p("AjLJ+QBVg4A0iOIADgIQANgoAMgyIADgKIAKgpIABgIQANg9Ats5IAagLICLgYIAHABQgJCTgNCsIgBAGQgaFdgZCEIAAAAQgUBogKAkQgTBHgbAxIgFAHQhEBwi7Bbg");
		this.shape_116.setTransform(497.9,905.4);

		this.shape_117 = new cjs.Shape();
		this.shape_117.graphics.f("rgba(255,255,255,0.298)").s().p("AjLJ+QBVg4A0iOIACgIQAOgoAMgyIACgKIALgpIABgIQAMg+Aus5IAagKICLgYIAHABQgJCSgMCtIgBAGQgbFegZCDIAAAAQgUBpgKAjQgTBIgbAwIgFAHQhFBwi7Bbg");
		this.shape_117.setTransform(497.9,905.4);

		this.shape_118 = new cjs.Shape();
		this.shape_118.graphics.f("rgba(255,255,255,0.298)").s().p("AjLJ+QBVg4A0iOIACgIQAOgpAMgyIACgJIAKgpIADgIQALg/Ats4IAbgKICLgYIAHABQgICSgNCtIgBAGQgbFegZCDIAAAAQgUBpgJAjQgUBIgbAwIgFAIQhFBvi7Bbg");
		this.shape_118.setTransform(498,905.4);

		this.shape_119 = new cjs.Shape();
		this.shape_119.graphics.f("rgba(255,255,255,0.298)").s().p("AhEG3IADgHQANgoANgzIACgJIAKgpIACgHQALhBAus4IAcgJICLgYIAHAAQgJCUgNCsIgBAHQgcFdgZCDIAAAAQgUBqgJAkQgTBHgbAvIgFAIQhFBui6BbQBWg3AziQg");
		this.shape_119.setTransform(498.1,905.3);

		this.shape_120 = new cjs.Shape();
		this.shape_120.graphics.f("rgba(255,255,255,0.298)").s().p("AhEG3IACgHQAOgpANgyIABgJIAKgpIADgHQALhCAus3IAbgJICNgYIAGAAQgJCUgNCsIAAAGQgcFegZCDIAAAAQgVBrgJAjQgSBHgcAvIgFAJQhFBti6BbQBVg3A0iQg");
		this.shape_120.setTransform(498.2,905.3);

		this.shape_121 = new cjs.Shape();
		this.shape_121.graphics.f("rgba(255,255,255,0.298)").s().p("AhEG4IACgIQAOgoAMgzIACgJIALgpIABgHQAMhDAus2IAcgJICMgYIAGABQgJCTgNCsIgBAGQgcFegZCDIAAABQgUBrgJAiQgTBHgcAwIgFAIQhEBui6BbQBVg4A0iPg");
		this.shape_121.setTransform(498.2,905.3);

		this.shape_122 = new cjs.Shape();
		this.shape_122.graphics.f("rgba(255,255,255,0.298)").s().p("AhFG4IADgIQANgoANgzIACgJIAKgpIACgHQAMhDAts3IAdgIICLgYIAIAAQgKCUgNCsIgBAGQgcFegZCDIAAABQgUBrgJAiQgTBHgcAwIgFAIQhEBui7BbQBWg4AziPg");
		this.shape_122.setTransform(498.2,905.3);

		this.shape_123 = new cjs.Shape();
		this.shape_123.graphics.f("rgba(255,255,255,0.298)").s().p("AhFG3IACgHQAOgoANgzIABgJIALgpIACgIQALhDAus2IAdgIICMgYIAHAAQgKCTgNCtIgBAGQgcFegZCDIAAABQgVBrgIAiQgTBHgcAwIgFAIQhFBui6BbQBWg4AziQg");
		this.shape_123.setTransform(498.3,905.3);

		this.shape_124 = new cjs.Shape();
		this.shape_124.graphics.f("rgba(255,255,255,0.298)").s().p("AjOJ+QBWg4AziPIADgIQANgoANgyIACgKIALgpIABgHQAMhEAus2IAdgHICLgYIAIAAQgKCTgNCsIgBAHQgdFegYCDIAAAAQgVBsgJAiQgSBGgdAxIgEAIQhFBui8Bbg");
		this.shape_124.setTransform(498.2,905.3);

		this.shape_125 = new cjs.Shape();
		this.shape_125.graphics.f("rgba(255,255,255,0.298)").s().p("AjOJ+QBWg4AziPIACgIQAOgoANgzIABgJIALgoIACgIQALhFAus1IAegHICMgYIAIgBQgKCUgOCtIgBAGQgcFegaCDQgUBtgIAhQgUBHgbAwIgGAIQhFBvi8Bag");
		this.shape_125.setTransform(498.3,905.3);

		this.shape_126 = new cjs.Shape();
		this.shape_126.graphics.f("rgba(255,255,255,0.298)").s().p("AjOJ+QBVg4A0iPIACgIQAOgoAMgzIACgJIALgpIACgHQALhGAus0IAegHICMgYIAIgBQgKCTgOCuIgBAGQgdFegZCDQgUBugJAhQgSBGgdAwIgFAIQhEBvi9Bag");
		this.shape_126.setTransform(498.3,905.3);

		this.shape_127 = new cjs.Shape();
		this.shape_127.graphics.f("rgba(255,255,255,0.298)").s().p("AhHG4IAEgIQANgoANgzIACgJIAKgpIABgHQAMhHAus0IAfgHICMgXIAHgBQgKCTgNCtIgBAGQgeFfgYCDQgVBugJAgQgTBHgcAwIgEAIQhFBui7BaQBWg4AyiPg");
		this.shape_127.setTransform(498.4,905.2);

		this.shape_128 = new cjs.Shape();
		this.shape_128.graphics.f("rgba(255,255,255,0.298)").s().p("AhGG3IACgHQAOgoAMgzIACgJQAJgnACgCIABgIQAMhHAus0IAfgGICLgYIAIAAQgKCTgNCtIgBAGQgeFfgZCDQgVBugIAgQgSBHgdAwIgFAIQhEBui7BaQBVg4A0iQg");
		this.shape_128.setTransform(498.4,905.2);

		this.shape_129 = new cjs.Shape();
		this.shape_129.graphics.f("rgba(255,255,255,0.298)").s().p("AhGG3IACgHQAOgpAMgyIACgKIAKgoIACgIQAMhHAts0IAggGICLgYIAIAAQgKCTgNCtIgBAGQgeFfgZCDQgVBvgIAfQgTBHgcAxIgFAIQhFBti6BaQBVg4A0iQg");
		this.shape_129.setTransform(498.5,905.2);

		this.shape_130 = new cjs.Shape();
		this.shape_130.graphics.f("rgba(255,255,255,0.298)").s().p("AhHG3IADgHQANgpANgyIACgKIAKgoIACgHQAMhJAtszIAggGICMgYIAIgBQgKCUgOCtIgBAGQgeFfgZCDQgVBvgIAgQgSBGgdAxIgFAIQhEBti8BaQBWg4AziQg");
		this.shape_130.setTransform(498.5,905.2);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape}]},1).wait(1));

		// Layer_2
		this.shape_131 = new cjs.Shape();
		this.shape_131.graphics.f("#A88ABF").s().p("AgECCQiMgDhEgHQhegJhOgTQiVglgIgyIAAgFQAAg1CdgmQBOgTBegJQBfgKBxAAQDfAAChAmQCiAmAAA1IAAABQgBA1ihAmQhYAVhSAIQhRAJhhAAIgkAAg");
		this.shape_131.setTransform(468.5,899.5);

		this.shape_132 = new cjs.Shape();
		this.shape_132.graphics.f("#A88ABF").s().p("AgECBIg6gBIhkgFIgygDQhDgHg6gLIgugLQg8gOgkgQQg5gZgFgeIAAgBIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAAChAlIACABQCeAmAEAzIAAABIAAABIAAABQAAAXgdAUQgcATg3AQQgWAHgcAHQg9AOg7AIIgxAGQhLAIhaABIgygBg");
		this.shape_132.setTransform(468.5,899.4);

		this.shape_133 = new cjs.Shape();
		this.shape_133.graphics.f("#A88ABF").s().p("AgECAIg6gBIhjgFIgzgDQhDgHg6gLIgugKQg8gPgkgPQg5gZgFgeIAAgBIAAgEQAAg2CcglIABAAQBNgUBegIIABAAQBfgLBvAAIACAAQDdAAChAmIACABQCeAlAEA0IAAABIAAABIAAAAQAAAYgdAUQgcATg2AQQgXAHgbAGQg9AOg7AIQgZAEgZACQhLAHhaABIgygBg");
		this.shape_133.setTransform(468.5,899.4);

		this.shape_134 = new cjs.Shape();
		this.shape_134.graphics.f("#A88ABF").s().p("AgDCBIg7gCQg5gCgqgDIgzgEQhEgGg4gMIgugKQg+gOgjgQQg5gYgFgeIAAAAIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAAChAlIACABQCeAlAEA0IAAABIAAABIAAACQAAAWgcAUQgcAUg3AQIgyANQg8ANg8AIIgyAGQhKAHhbABIgxAAg");
		this.shape_134.setTransform(468.5,899.4);

		this.shape_135 = new cjs.Shape();
		this.shape_135.graphics.f("#A88ABF").s().p("AgDCAIg6gBQg6gDgqgDIgygDQhFgHg4gLIgugKQg+gPgigPQg6gYgFgdIAAgBIAAgEQAAg2CcglIABAAQBNgUBegIIABAAQBfgLBvAAIACAAQDeAACgAmIACABQCeAlAEA0IAAAAIAAACIAAABQAAAXgcAVQgbATg3AQQgXAHgbAFQg9AOg8AIQgYADgZACQhKAHhbAAIgyAAg");
		this.shape_135.setTransform(468.5,899.3);

		this.shape_136 = new cjs.Shape();
		this.shape_136.graphics.f("#A88ABF").s().p("AgDB/Ig6gBIhkgEIgygFQhFgGg3gMIgugKQhAgPghgOQg6gXgFgdIAAgBIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDeAACgAlIACABQCfAmADAzIAAAAIAAACIAAACQAAAXgcAUQgbAVg2APIgyANQg9AMg8AIIgyAFQhJAHhcAAIgygBg");
		this.shape_136.setTransform(468.5,899.3);

		this.shape_137 = new cjs.Shape();
		this.shape_137.graphics.f("#A88ABF").s().p("AgCB/Ig7gCIhjgEIgzgEQhFgHg3gLIgugLQhAgOgggOQg7gYgFgcIAAgBIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDeAACgAlIACABQCfAmADAzIAAABIAAACIAAABQAAAYgbAUQgbAUg3AQQgXAGgbAGQg8ANg9AHQgYADgZACQhJAGhdABIgxgBg");
		this.shape_137.setTransform(468.5,899.2);

		this.shape_138 = new cjs.Shape();
		this.shape_138.graphics.f("#A88ABF").s().p("AgCB/Ig6gCQg6gCgqgDIgzgEQhGgHg2gLIgugKQhAgPgggNQg7gXgFgcIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBvAAIACAAQDeAACgAlIACABQCfAmADAzIAAABIAAACIAAABQgBAYgaAUQgbAVg2APQgXAGgbAGQg8AMg9AHIgyAFQhJAGhdAAIgxAAg");
		this.shape_138.setTransform(468.5,899.2);

		this.shape_139 = new cjs.Shape();
		this.shape_139.graphics.f("#A88ABF").s().p("AgCB+Ig6gBQg5gCgrgDIgygEQhHgIg1gKIgugKQhCgQgfgNQg7gWgFgcIAAgBIAAgEIAAgBQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBvAAIACAAQDeAACgAmIACABQCfAlADAzIAAABIAAACIAAABQgBAZgZAUQgbAVg3APIgyALQg7ANg+AGIgyAFQhIAGhdAAIgygBg");
		this.shape_139.setTransform(468.5,899.1);

		this.shape_140 = new cjs.Shape();
		this.shape_140.graphics.f("#A88ABF").s().p("AgCB9Ig6gBQg5gCgrgDIgygEQhHgHg1gLIgugKQhCgQgegMQg8gWgFgbIAAgCIAAgEIAAAAQAAg2CdglIAAAAQBOgUBdgIIABAAQBfgLBvAAIACAAQDeAACgAmIACABQCfAmADAzIAAABIAAABIAAABQgBAagZATQgaAWg3AOIgyAMQg8AMg9AGQgYAEgaABQhIAFheABIgygCg");
		this.shape_140.setTransform(468.5,899.1);

		this.shape_141 = new cjs.Shape();
		this.shape_141.graphics.f("#A88ABF").s().p("AgBB9Ig6gBQg6gDgqgDIgzgDQhIgIg0gKIgtgKQhDgQgegMQg8gWgFgbIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAlIACABQCfAmACAzIAAABIAAACIAAABQgBAZgYAVQgbAVg3APIgxALQg8ALg+AHQgYADgaABQhHAFhfAAIgxgBg");
		this.shape_141.setTransform(468.5,899.1);

		this.shape_142 = new cjs.Shape();
		this.shape_142.graphics.f("#A88ABF").s().p("AgBB9Ig6gCQg5gCgrgDIgzgEQhIgIgzgKIgugKQhEgQgdgLQg8gWgFgaIAAgCIAAgEIAAAAQAAg2CdglIAAAAQBOgUBdgIIABAAQBfgLBwAAIABAAQDeAAChAmIACABQCfAlACA0IAAABIAAACIAAABQgBAZgYAUQgaAWg3AOQgXAHgbAEQg7AMg/AGIgxAEQhHAFhggBIgxAAg");
		this.shape_142.setTransform(468.5,899);

		this.shape_143 = new cjs.Shape();
		this.shape_143.graphics.f("#A88ABF").s().p("AAxB9IgygBIg6gBQg5gCgrgEIgzgEQhIgHgzgLIgtgKQhFgPgcgLQg9gWgFgaIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAlIACABQCfAmACAzIAAABIAAACIAAABQgBAagXAUQgbAWg3AOQgXAGgaAFQg7ALg/AGIgyAEQhAAEhTAAIgTAAg");
		this.shape_143.setTransform(468.5,899);

		this.shape_144 = new cjs.Shape();
		this.shape_144.graphics.f("#A88ABF").s().p("AAAB8Ig6gCQg6gCgrgDIgygEQhJgIgzgKIgtgKQhFgQgcgLQg9gVgFgaIAAgBIAAgEIAAgBQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAmIACABQCfAmACAzIAAABIAAACIAAABQgBAagXAUQgaAWg3AOIgyALQg6ALhAAFQgXADgbABQhGAEhgAAIgxgBg");
		this.shape_144.setTransform(468.5,898.9);

		this.shape_145 = new cjs.Shape();
		this.shape_145.graphics.f("#A88ABF").s().p("AAxB8IgxgBIg6gBQg6gCgqgDIgzgFQhKgIgxgKIgtgKQhHgPgagLQg+gVgFgZIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAlIACABQCfAmACAzIAAABIAAACIAAABQgBAbgXAUQgZAXg3ANIgyALQg7ALg/AEQgXADgbABQg+ADhUAAIgVAAg");
		this.shape_145.setTransform(468.5,898.9);

		this.shape_146 = new cjs.Shape();
		this.shape_146.graphics.f("#A88ABF").s().p("AAxB8IgxgBIg6gBQg5gCgrgEIgzgEQhKgIgxgKIgtgKQhHgQgagKQg+gVgFgZIAAgBIAAgEIAAgBQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAmIACABQCfAmACAzIAAABIAAACIAAABQgBAbgWATQgaAYg3ANQgXAGgbAEQg6ALhAAFIgyADQg9ADhSAAIgYAAg");
		this.shape_146.setTransform(468.5,898.8);

		this.shape_147 = new cjs.Shape();
		this.shape_147.graphics.f("#A88ABF").s().p("AAyB7IgyAAIg5gCQg6gCgrgDIgzgFQhKgIgwgKIgtgKQhJgPgZgKQg+gUgFgZIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDfAACgAlIACABQCgAmABA0IAAABIAAACIAAABQgBAbgWATQgZAYg3ANQgXAGgbAEQg6ALhBAEIgxADQg2AChHAAIgqAAg");
		this.shape_147.setTransform(468.5,898.8);

		this.shape_148 = new cjs.Shape();
		this.shape_148.graphics.f("#A88ABF").s().p("AAyB7IgygBIg5gCQg6gCgrgDIgzgFQhLgIgvgKIgtgKQhJgPgYgJQg/gVgFgYIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDfAACgAlIACABQCgAmABA0IAAABIAAACIAAABQgBAbgVAUQgaAYg3ANQgXAFgaAFQg6AKhBAEQgXACgbAAQg7ADhRAAIgbAAg");
		this.shape_148.setTransform(468.5,898.8);

		this.shape_149 = new cjs.Shape();
		this.shape_149.graphics.f("#A88ABF").s().p("AAyB6IgygBIg5gBQg5gCgrgEIgzgEQhMgJgvgJIgsgKQhKgQgYgJQg/gUgFgYIAAgBIAAgEIAAgBQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDfAACgAmIACABQCgAmABAzIAAABIAAACIAAABQgBAcgVAUQgZAYg3ANIgyAJQg5AKhCAEQgWACgcAAQgzADhEAAIgwgBg");
		this.shape_149.setTransform(468.5,898.7);

		this.shape_150 = new cjs.Shape();
		this.shape_150.graphics.f("#A88ABF").s().p("AAyB6IgygBIg4gBQg6gCgrgEIgzgFQhMgIgugKIgtgJQhLgRgXgIQg/gTgFgYIAAgBIAAgEIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIACABQCgAlABA0IAAABIAAACIAAABQgBAcgUATQgZAZg4ANIgxAJQg6AKhBADIgyADQguABg7AAIg/AAg");
		this.shape_150.setTransform(468.5,898.7);

		this.shape_151 = new cjs.Shape();
		this.shape_151.graphics.f("#A88ABF").s().p("AAzB6IgygBIg5gCQg6gCgrgEIgzgEQhMgJgugJIgtgKQhLgQgWgIQhAgTgFgXIAAgBIAAgFIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIACABQCgAmABA0IAAABIAAACIAAABQgBAcgUATQgZAZg3ANQgXAFgbAEQg5AJhCADQgWACgcABQgtABg7AAIg/AAg");
		this.shape_151.setTransform(468.5,898.6);

		this.shape_152 = new cjs.Shape();
		this.shape_152.graphics.f("#A88ABF").s().p("AAzB5IgygBIg5gBQg5gCgsgEIgzgFQhNgIgtgKIgsgJQhMgRgWgHQhAgTgFgXIAAgBIAAgEIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIACABQChAmAAAzIAAABIAAACIAAABQgBAdgUATQgYAZg3ANQgYAFgaAEQg5AJhCADIgyACIhdAAIhLAAg");
		this.shape_152.setTransform(468.5,898.6);

		this.shape_153 = new cjs.Shape();
		this.shape_153.graphics.f("#A88ABF").s().p("AAzB4IgygBIg4gBQg6gCgrgEIgzgFQhOgIgsgKIgtgJQhNgRgUgGQhBgTgFgXIAAgBIAAgEIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBwAAIABAAQDeAAChAmIACABQCgAmAAAzIAAABIAAACIAAABQgBAdgTAUQgZAZg3AMQgXAFgaAEQg5AJhDACIgyACIhLABIhdgBg");
		this.shape_153.setTransform(468.5,898.6);

		this.shape_154 = new cjs.Shape();
		this.shape_154.graphics.f("#A88ABF").s().p("AAzB4IgxgBIg5gBQg6gCgrgEIgzgFQhOgJgsgJIgsgKQhOgQgUgHQhBgSgFgWIAAgBIAAgFIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBwAAIABAAQDeAAChAmIACABQCgAmAAA0IAAABIAAACIAAABQgBAdgTATQgYAag3AMIgyAJQg4AIhEADIgyABIg7ABIhtgBg");
		this.shape_154.setTransform(468.5,898.5);

		this.shape_155 = new cjs.Shape();
		this.shape_155.graphics.f("#A88ABF").s().p("AA0B4IgygBIg5gCQg6gCgrgEIgzgFQhOgJgsgJIgsgJQhOgRgUgGQhBgSgFgWIAAgBIAAgEIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBwAAIABAAQDeAAChAmIACABQCgAmAAA0IAAABIAAACIAAABQgBAdgSATQgYAbg4ALIgxAIQg5AJhDACQgWABgcAAIg7AAIhtAAg");
		this.shape_155.setTransform(468.5,898.5);

		this.shape_156 = new cjs.Shape();
		this.shape_156.graphics.f("#A88ABF").s().p("AA0B3IhqgDQg6gCgsgEQh1gLg3gMQh3gYgXgHQhDgTgEgWIAAgFQAAg1CdgmQBOgTBegJQBfgKBxAAQDfAAChAmQCiAmAAA1IAAABQAAAfgTAVQgYAag3AMQhLAPhjADQgjABg3AAIiAgBg");
		this.shape_156.setTransform(468.5,898.5);

		this.shape_157 = new cjs.Shape();
		this.shape_157.graphics.f("#A88ABF").s().p("AA0B2IgCAAIhogCQg6gCgrgEIgOgBQhpgLg2gLIgdgFQhcgUgVgGIgMgDQg0gQgGgSIgBgDIAAgFIAAgBQAAg1CdgmIACAAQBNgTBdgJIAEAAQBegKBtAAIAGAAQDcABCeAlIALADQCYAmAAAyIAAABIgBAMIAAABQgEAXgOAQIgEAEQgZAXgyAKIgFABQhKAOhfADIgDAAQgkACg1AAIh+gCg");
		this.shape_157.setTransform(468.5,898.4);

		this.shape_158 = new cjs.Shape();
		this.shape_158.graphics.f("#A88ABF").s().p("AA0B2IgCAAIhogCQg6gCgrgEIgOgBQhmgKg5gLIgdgGQhbgTgWgGIgMgDQg0gQgGgTIgBgDIAAgEIAAgBQAAg1CdgmIACAAQBNgTBcgJIAEAAQBegKBuAAIAGAAQDcAACeAmIALADQCXAlABAyIAAABIgBAMIAAABQgDAXgPAQIgEAEQgYAWgzALIgFABQhKAOhfADIgDAAQgkABg1AAIh+gBg");
		this.shape_158.setTransform(468.5,898.4);

		this.shape_159 = new cjs.Shape();
		this.shape_159.graphics.f("#A88ABF").s().p("AA0B2IgCAAIhogDQg6gBgrgEIgNgBQhlgKg7gLIgdgGQhagSgXgHIgMgDQg0gQgGgTIgBgCIAAgFIAAgBQAAg1CdgmIACAAQBMgTBdgJIAEAAQBegKBuAAIAGAAQDbABCfAlIALADQCWAlACAyIAAABQAAAGgBAGIAAABQgDAXgPAPIgEAFQgYAVg0ALIgFABQhJAOhfAEIgDAAIhaABIh9gBg");
		this.shape_159.setTransform(468.5,898.3);

		this.shape_160 = new cjs.Shape();
		this.shape_160.graphics.f("#A88ABF").s().p("AA1B1IgDAAIhogCQg6gCgrgEIgNgBQhjgKg9gLIgdgFQhagSgXgHIgMgDQg0gPgGgUIgBgCIAAgFIAAgBQAAg1CdgmIACAAQBMgTBdgJIAEAAQBegKBuAAIAFAAQDcABCeAlIALADQCWAlADAxIAAABQAAAHgBAGIAAABQgDAWgPAQIgEAEQgYAVg0ALIgFABQhJAOhfAEIgDAAQgnACg8AAIhzgCg");
		this.shape_160.setTransform(468.5,898.3);

		this.shape_161 = new cjs.Shape();
		this.shape_161.graphics.f("#A88ABF").s().p("AA1B1IgCAAIhogDQg7gBgqgEIgNgBQhigJg+gLIgegGQhZgRgYgHIgMgDQg0gQgGgTIgBgDIAAgEIAAgBQAAg1CdgmIACAAQBMgTBdgJIAEAAQBegKBtAAIAGAAQDbAACfAlIALADQCWAlADAyIAAABQAAAGgBAGIAAABQgDAWgOAQIgFAEQgYAVg0ALIgFABQhKAOheADIgDAAQgnACg9AAIhygBg");
		this.shape_161.setTransform(468.5,898.3);

		this.shape_162 = new cjs.Shape();
		this.shape_162.graphics.f("#A88ABF").s().p("AA1B1IgCAAIhogDQg7gCgqgDIgNgBQhggJhAgLIgegGQhYgRgZgHIgMgDQg0gPgGgUIgBgCIAAgFIAAgBQAAg1CdgmIACAAQBMgTBdgJIAEAAQBegKBtAAIAGAAQDbABCeAlIALADQCWAkAEAyIAAABQAAAGgBAGIAAABQgDAWgOAQIgFAEQgXAUg1ALIgFABQhKAOheAEIgDAAQgoACg8AAIhygBg");
		this.shape_162.setTransform(468.5,898.2);

		this.shape_163 = new cjs.Shape();
		this.shape_163.graphics.f("#A88ABF").s().p("AA1B0IgCAAIhogCQg7gCgqgDIgNgBQhegJhCgLIgdgFQhYgRgagHIgMgDQg1gQgFgTIgBgDIAAgEIAAgBQAAg1CdgmIACAAQBMgTBdgJIAEAAQBdgKBuAAIAGAAQDbAACeAlIALADQCVAlAFAxIAAABIAAAMIAAABQgEAXgOAPIgFAEQgXAUg1ALIgFABQhKAOheAEIgDAAQgoABg8AAIhygBg");
		this.shape_163.setTransform(468.5,898.2);

		this.shape_164 = new cjs.Shape();
		this.shape_164.graphics.f("#A88ABF").s().p("AA1B0IgCAAIhogDQg7gCgqgDIgMgBQhdgIhEgLIgdgGQhYgQgagHIgMgDQg1gQgFgUIgBgCIAAgFIAAAAQAAg1CdgmIACAAQBMgTBdgJIAEAAQBdgKBuAAIAGAAQDaAACfAlIALADQCVAkAFAxIAAABIAAAMIAAABQgDAXgPAPIgFAEQgXAUg1ALIgFABQhLAOhdAEIgDAAQgrAChCAAIhpgBg");
		this.shape_164.setTransform(468.5,898.2);

		this.shape_165 = new cjs.Shape();
		this.shape_165.graphics.f("#A88ABF").s().p("AA2BzIgDAAIhogCQg7gCgqgDIgMgBQhagIhHgLIgdgFQhXgQgbgHIgMgDQg1gQgFgUIgBgDIAAgEIAAgBQAAg1CdgmIACAAQBMgTBcgJIAEAAQBegKBuAAIAGAAQDaABCeAlIALACQCVAlAFAwIAAABQABAGAAAGIAAABQgDAXgPAPIgFAEQgXATg1ALIgFABQhLAPhdADIgDAAQgrADhCAAIhogCg");
		this.shape_165.setTransform(468.5,898.1);

		this.shape_166 = new cjs.Shape();
		this.shape_166.graphics.f("#A88ABF").s().p("AA2BzIgDAAIhngCQg8gCgpgDIgNgBQhYgIhJgLIgdgFQhWgPgcgIIgMgDQg1gQgFgUIgBgCIAAgFIAAAAQAAg1CdgmIACAAQBMgTBcgJIAEAAQBegKBtAAIAHAAQDaAACeAlIALADQCUAkAGAwIAAABQABAGAAAGIAAABQgDAXgPAPIgFAEQgXASg1AMIgFABQhLAOhdAEIgDAAQguAChGAAIhhgBg");
		this.shape_166.setTransform(468.5,898.1);

		this.shape_167 = new cjs.Shape();
		this.shape_167.graphics.f("#A88ABF").s().p("AA2BzIgCAAIhogCQg7gCgqgDIgMgBQhXgIhKgLIgegFQhVgPgdgHIgNgDQg0gQgFgUIgBgDIAAgEIAAgBQAAg1CcgmIACAAQBNgTBcgJIAEAAQBegKBtAAIAHAAQDZABCeAkIALADQCVAkAGAwIAAABQABAGAAAGIAAABQgDAXgPAPIgFAEQgWASg2ALIgFABQhMAPhcAEIgDAAQgsAChBAAIhogBg");
		this.shape_167.setTransform(468.5,898);

		this.shape_168 = new cjs.Shape();
		this.shape_168.graphics.f("#A88ABF").s().p("AA2BzIgCAAIhogDIhlgEIgMgBQhVgIhMgLIgegFQhVgOgdgIIgNgDQg0gPgFgVIgBgCIAAgFIAAAAQAAg1CcgmIACAAQBNgTBcgJIAEAAQBdgKBuAAIAGAAQDaAACeAlIALACQCUAkAHAwIAAABQABAGAAAGIAAABQgDAXgPAPIgFAEQgWARg3AMIgFABQhLAOhcAEIgDAAQguAChGAAIhhAAg");
		this.shape_168.setTransform(468.5,898);

		this.shape_169 = new cjs.Shape();
		this.shape_169.graphics.f("#A88ABF").s().p("AA2ByIgCAAIhogCQg7gCgqgDIgMgBQhTgHhOgLIgegEQhUgOgegIIgNgDQg0gQgFgVIgBgCIAAgEIAAgBQAAg1CcgmIACAAQBNgTBcgJIAEAAQBdgKBuAAIAGAAQDaABCeAkIALADQCTAkAIAvIAAABQABAGAAAGIAAABQgDAXgPAPIgFADQgWASg3ALIgFABQhLAPhcAEIgDAAQgvAChFAAIhhgBg");
		this.shape_169.setTransform(468.5,897.9);

		this.shape_170 = new cjs.Shape();
		this.shape_170.graphics.f("#A88ABF").s().p("AA3ByIgDAAIhogDQg7gBgpgDIgMgBQhSgHhQgLIgdgEQhUgOgfgIIgNgDQg0gQgFgVIgBgCIAAgEIAAgBQAAg0CcgmIACgBQBNgSBcgKIAEAAQBdgJBtgBIAHAAQDZABCeAkIALADQCUAkAIAvIAAABQABAGAAAGIAAABQgCAXgQAOIgFAEQgWARg3ALIgFABQhLAPhbAEIgDAAQgwADhFAAIhggBg");
		this.shape_170.setTransform(468.5,897.9);

		this.shape_171 = new cjs.Shape();
		this.shape_171.graphics.f("#A88ABF").s().p("AA3BxIgDAAIhogCQg7gCgpgCIgMgBQhQgHhSgLIgdgEQhTgNghgJIgMgDQg1gPgFgVIAAgCIAAgFIAAAAQAAg1CcgmIACAAQBMgTBdgJIAEAAQBdgKBtAAIAHAAQDZAACeAlIALACQCTAkAJAvIAAABQABAGAAAGIAAABQgCAXgQAOIgFAEQgWAQg3ALIgFABQhMAPhaAFIgDAAQgwAChGAAIhfgBg");
		this.shape_171.setTransform(468.5,897.9);

		this.shape_172 = new cjs.Shape();
		this.shape_172.graphics.f("#A88ABF").s().p("AA3BxIgDAAIhngCQg8gCgpgDIgMgBQhNgGhVgLIgdgEQhSgNgigIIgMgDQg1gQgFgVIAAgCIAAgEIAAgBQAAg0CcgmIACgBQBMgSBcgKIAEAAQBegJBtgBIAHAAQDZAACdAlIALADQCTAjAKAvIAAABQABAGAAAGIAAABQgCAXgQAOIgFADQgVAQg4AMIgFABQhMAPhaAEIgDAAQgwADhGAAIhfgBg");
		this.shape_172.setTransform(468.5,897.8);

		this.shape_173 = new cjs.Shape();
		this.shape_173.graphics.f("#A88ABF").s().p("AA3BxIgDAAIhngDQg8gBgogDIgMgBQhMgGhXgLIgdgEQhSgMgigJIgMgDQg1gPgFgWIAAgBIAAgFIAAAAQAAg1CcgmIACAAQBMgTBcgJIAEAAQBdgKBtAAIAHAAQDZAACeAlIALACQCSAjALAvIAAABQABAGAAAGIAAABQgCAXgQAOIgFADQgVAQg4ALIgFABQhMAPhaAFIgDAAQgzAChJAAIhZAAg");
		this.shape_173.setTransform(468.5,897.8);

		this.shape_174 = new cjs.Shape();
		this.shape_174.graphics.f("#A88ABF").s().p("AA3BwIgCAAIhogCQg8gBgogDIgMgBQhKgFhYgLIgegEQhRgMgjgJIgMgDQg1gPgFgWIAAgCIAAgEIAAgBQAAg0CcgmIACgBQBMgSBcgKIAEAAQBdgJBtgBIAHAAQDZAACeAlIALACQCSAkALAuIAAABQABAGAAAGIAAABQgCAXgQAOIgFADQgVAPg4AMIgFABQhNAPhZAFIgDAAQgxAChFAAIhfgBg");
		this.shape_174.setTransform(468.5,897.7);

		this.shape_175 = new cjs.Shape();
		this.shape_175.graphics.f("#A88ABF").s().p("AA3BwIgCAAIhogDIhkgDIgLgBQhJgGhagLIgegEQhQgLgkgJIgMgDQg1gPgFgWIAAgCIAAgEIAAgBQAAg0CcgmIACgBQBMgSBcgKIAEAAQBdgJBtgBIAHAAQDYAACeAlIALACQCSAjAMAvIAAABQABAGAAAGIAAABQgCAWgQAOIgFAEQgVAOg4AMIgFABQhNAPhZAFIgDAAQgzADhJAAIhZgBg");
		this.shape_175.setTransform(468.5,897.7);

		this.shape_176 = new cjs.Shape();
		this.shape_176.graphics.f("#A88ABF").s().p("AA4BvIgDAAIhogCQg8gBgogDIgLgBQhHgFhcgLIgegDQhPgLglgKIgMgDQg1gPgFgWIAAgBIAAgFIAAAAQAAg1CcgmIACAAQBMgTBcgJIAEAAQBdgKBtAAIAHAAQDYAACeAkIALADQCRAjAMAuIAAABQACAGAAAGIAAABQgCAWgQAOIgFADQgUAOg5AMIgFABQhNAPhZAFIgDAAQgzADhJAAIhYgBg");
		this.shape_176.setTransform(468.5,897.7);

		this.shape_177 = new cjs.Shape();
		this.shape_177.graphics.f("#A88ABF").s().p("AA4BvIgDAAIhngCIhkgEIgMgBQhFgEhegLIgegEQhPgLglgJIgMgDQg1gPgFgWIAAgCIAAgEIAAgBQAAg0CcgmIACgBQBMgSBcgKIAEAAQBdgJBtgBIAGAAQDZAACeAlIALACQCRAjAMAuIAAABQACAGAAAGIAAABQgBAXgRANIgFADQgUAOg5AMIgFABQhOAPhYAFIgDAAQg2ADhMAAIhSgBg");
		this.shape_177.setTransform(468.5,897.6);

		this.shape_178 = new cjs.Shape();
		this.shape_178.graphics.f("#A88ABF").s().p("AA4BvIgDAAIhngCIhkgEIgLgBQhEgEhggLIgdgEQhPgKgmgJIgMgDQg2gQgEgWIAAgCIAAgEQAAg1CcgmIACAAQBMgTBcgJIAEAAQBcgKBtAAIAHAAQDYAACeAkIALACQCRAjANAuIAAABQACAGAAAGIAAABQgBAXgRANIgFADQgUANg6AMIgFABQhNAQhYAEIgDAAQg2ADhMAAIhSAAg");
		this.shape_178.setTransform(468.5,897.6);

		this.shape_179 = new cjs.Shape();
		this.shape_179.graphics.f("#A88ABF").s().p("AA4BuIgDAAIhngCIhkgEIgLgBQhBgEhjgLIgdgDQhOgKgngJIgMgDQg2gQgEgWIAAgCIAAgEQAAg1CcgmIACAAQBMgTBbgJIAEAAQBdgKBtAAIAHAAQDYAACeAkIALACQCQAjAOAtIAAABQACAGAAAGIAAABQgBAXgRANIgFADQgUANg6AMIgFABQhNAQhYAFIgDAAQg3ADhMAAIhRgBg");
		this.shape_179.setTransform(468.5,897.6);

		this.shape_180 = new cjs.Shape();
		this.shape_180.graphics.f("#A88ABF").s().p("AA4BuIgCAAIhogCIhkgEIgLgBQg/gDhkgLIgegEQhNgJgogKIgMgDQg2gPgEgXIAAgBIAAgFQAAg0CcgmIACgBQBMgSBbgKIAEAAQBdgJBtgBIAHAAQDYAACdAlIALACQCRAiAOAuIAAABQACAFAAAGIAAABQgBAXgQANIgGADQgUANg6AMIgFABQhOAPhXAFIgDAAQg3AEhMAAIhRgBg");
		this.shape_180.setTransform(468.5,897.5);

		this.shape_181 = new cjs.Shape();
		this.shape_181.graphics.f("#A88ABF").s().p("AA5BuIgDAAIhogCIhkgEIgKgBQg+gDhmgLIgegEQhNgIgogKIgNgDQg1gPgEgXIAAgCIAAgEQAAg1CbgmIACAAQBNgTBbgJIAEAAQBdgKBtAAIAGAAQDYAACeAkIALACQCQAiAPAuIAAABQACAFAAAGIAAABQgBAXgQANIgGADQgTAMg7AMIgFABQhOAQhXAFIgDAAQg5ADhOAAIhMAAg");
		this.shape_181.setTransform(468.5,897.5);

		this.shape_182 = new cjs.Shape();
		this.shape_182.graphics.f("#A88ABF").s().p("AA5BtIgDAAIhogCIhjgDIgLgBQg8gDhogLIgegDQhMgJgpgKIgNgDQg1gPgEgXIAAgBIAAgFQAAg0CbgmIACgBQBMgSBcgKIAEAAQBdgJBsgBIAHAAQDYAACeAkIALACQCPAjAQAtIAAABQACAFAAAGIAAABQgBAXgQANIgGADQgTALg7ANIgFABQhOAPhXAFIgDAAQg5AEhOAAIhMgBg");
		this.shape_182.setTransform(468.5,897.4);

		this.shape_183 = new cjs.Shape();
		this.shape_183.graphics.f("#A88ABF").s().p("AA5BtIgDAAIhngCIhkgEIgLgBQg6gChqgLIgegEQhLgHgqgLIgNgDQg1gPgEgXIAAgBIAAgFQAAg0CbgmIACgBQBMgSBcgKIAEAAQBcgJBtgBIAHAAQDYAACdAkIALACQCPAiARAtIAAABQACAGAAAGIAAABQAAAXgRAMIgGADQgTALg7ANIgFABQhOAPhXAGIgDAAQg5AEhOAAIhMgBg");
		this.shape_183.setTransform(468.5,897.4);

		this.shape_184 = new cjs.Shape();
		this.shape_184.graphics.f("#A88ABF").s().p("AA2BsQiTgDhCgDQhAgDiDgNQhWgJgsgMQg1gPgEgYIAAgFQAAg1CdgmQBOgTBegJQBfgKBxAAQDfAAChAmQCiAmAAA1IAAABQAAAagXAMQgUALg/ANQhQAQhYAFQg6AEhPAAIhNgBg");
		this.shape_184.setTransform(468.5,897.4);

		this.shape_185 = new cjs.Shape();
		this.shape_185.graphics.f("#A88ABF").s().p("AA+BsIgIAAQiSgDhDgDIgDAAIhugIIhSgIIgZgDQhEgIglgKIgKgDQgsgOgDgVIAAgBIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAACgAlIADABQCdAmAFAyIAAABIAAACIAAABQAAAVgOAMQgEADgFADQgRAJgxALIgSAEQhFANhNAGIgWABQg9AEhOAAIhCgBg");
		this.shape_185.setTransform(468.5,897.3);

		this.shape_186 = new cjs.Shape();
		this.shape_186.graphics.f("#A88ABF").s().p("AA/BsIgIAAQiTgDhDgDIgDAAIhugIIhSgHIgZgDQhEgIglgKIgKgDQgsgPgDgVIAAgBIAAgEQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAACgAlIADABQCeAlAEAzIAAABIAAACIAAABQAAAVgOALQgEAEgFACQgRAKgxAKIgSAEQhFAOhNAFIgWABQg7ADhHAAIhKAAg");
		this.shape_186.setTransform(468.5,897.3);

		this.shape_187 = new cjs.Shape();
		this.shape_187.graphics.f("#A88ABF").s().p("AA/BrIgIAAQiTgChDgDIgDAAIhugIIhSgHIgZgDQhEgIglgKIgLgDQgrgOgDgWIAAgBIAAgEQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAACgAlIADABQCeAlAEAzIAAABIAAACIAAABQAAAVgPALQgDAEgFACQgSAJgwALIgSAEQhFANhNAFIgWACQhAADhKAAIhCgBg");
		this.shape_187.setTransform(468.5,897.3);

		this.shape_188 = new cjs.Shape();
		this.shape_188.graphics.f("#A88ABF").s().p("AA/BrIgIAAQiSgChEgDIgDAAIhugIIhSgHIgZgDQhEgIglgKIgLgDQgrgOgDgVIAAgBIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAACgAlIADABQCeAmAEAzIAAABIAAACIAAABQAAAUgPAMIgIAGQgSAJgwAKIgSAEQhFAOhOAEIgWABQhCAEhIAAIhBgBg");
		this.shape_188.setTransform(468.5,897.2);

		this.shape_189 = new cjs.Shape();
		this.shape_189.graphics.f("#A88ABF").s().p("AA/BrIgIAAQiSgChEgEIgDAAIhugHIhSgHIgZgCQhEgIglgKIgLgDQgqgOgEgWIAAgBIAAgEQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAACgAlIADABQCeAmAEAyIAAABIAAACIAAABQgBAVgOAMIgJAFQgRAJgxALIgSADQhEAOhOAEIgWABQhFADhHAAIg/AAg");
		this.shape_189.setTransform(468.5,897.2);

		this.shape_190 = new cjs.Shape();
		this.shape_190.graphics.f("#A88ABF").s().p("AA/BqIgIAAQiRgBhFgEIgDAAIhugGIhSgHIgZgDQhEgIglgJIgLgDQgqgPgEgVIAAgBIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAACgAlIADABQCeAmAEAzIAAABIAAACIAAABQgBAVgOALIgJAGQgRAJgxAKIgSAEQhEANhPAEIgVABQhFADhDAAIhDgBg");
		this.shape_190.setTransform(468.5,897.1);

		this.shape_191 = new cjs.Shape();
		this.shape_191.graphics.f("#A88ABF").s().p("AA/BqIgIAAQiRgChFgDIgDAAIhugHIhSgGIgZgDQhFgIgkgJIgLgDQgqgOgEgWIAAgBIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAACgAlIADABQCeAmAEAzIAAABIAAACIAAABQgBAVgOALIgJAGQgSAJgwAKIgSAEQhEANhPAEIgWABQhGADhDAAIhBgBg");
		this.shape_191.setTransform(468.5,897.1);

		this.shape_192 = new cjs.Shape();
		this.shape_192.graphics.f("#A88ABF").s().p("AA/BpIgHAAQiSgBhFgDIgDAAIhvgHQgogCgpgEIgZgCQhFgIgkgKIgLgDQgqgOgEgVIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBvAAIACAAQDdAAChAlIADABQCeAmADAzIAAABIAAACIAAABQgBAVgOALIgJAFQgSAJgwAKIgSAEQhEANhPAEIgWABQhGACg+AAIhGgBg");
		this.shape_192.setTransform(468.5,897.1);

		this.shape_193 = new cjs.Shape();
		this.shape_193.graphics.f("#A88ABF").s().p("AA/BpIgHAAQiRgBhGgDIgDAAIhvgGIhRgGIgZgDQhFgHgkgKIgLgDQgqgOgEgWIAAgBIAAgEIAAgBQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBvAAIACAAQDeAACgAmIADABQCeAlADAzIAAABIAAACIAAABQgBAVgOALIgJAGQgSAIgxALIgSADQhDANhQAEIgWABQhLAChAAAIg+gBg");
		this.shape_193.setTransform(468.5,897);

		this.shape_194 = new cjs.Shape();
		this.shape_194.graphics.f("#A88ABF").s().p("ABABpIgIAAQiRgBhGgDIgDAAIhvgGQgpgCgogEIgZgCQhFgIgkgKIgLgDQgqgOgEgVIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBvAAIACAAQDeAACgAlIADABQCeAmADAzIAAABIAAACIAAABQgBAVgOALIgJAFQgSAJgxAKIgSAEQhDAMhQAEIgWABQhFABg7AAIhIAAg");
		this.shape_194.setTransform(468.5,897);

		this.shape_195 = new cjs.Shape();
		this.shape_195.graphics.f("#A88ABF").s().p("ABABoIgIAAQiQgBhHgDIgDAAIhvgFQgqgCgngEIgZgCQhFgIgkgKIgLgDQgqgNgEgWIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBvAAIACAAQDeAACgAlIADABQCeAmADAzIAAABIAAACIAAABQgBAVgOALQgEADgGACQgSAJgwAKIgSAEQhDAMhQADIgWABIiGACIhCgBg");
		this.shape_195.setTransform(468.5,897);

		this.shape_196 = new cjs.Shape();
		this.shape_196.graphics.f("#A88ABF").s().p("ABABoIgIAAQiQgBhHgDIgDAAIhvgFIhRgFIgagDQhEgHgkgKIgLgDQgqgOgEgWIAAgBIAAgEIAAgBQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAACgAmIADABQCeAlADAzIAAABIAAADIAAABQgBAVgOALIgKAFQgSAIgwAKIgSAEQhCAMhSADIgWABIiHACIhAgBg");
		this.shape_196.setTransform(468.5,896.9);

		this.shape_197 = new cjs.Shape();
		this.shape_197.graphics.f("#A88ABF").s().p("ABABoIgIAAQiQgBhHgDIgDAAIhvgFIhRgFIgagCQhEgIgkgKIgMgDQgpgNgEgWIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAACgAlIADABQCeAmADAzIAAABIAAACIAAABQgBAWgPAKIgJAFQgSAJgxAKIgSADQhBANhSACIgWABIiJABIg+AAg");
		this.shape_197.setTransform(468.5,896.9);

		this.shape_198 = new cjs.Shape();
		this.shape_198.graphics.f("#A88ABF").s().p("ABABnIgHAAQiQAAhIgDIgDAAIhvgFQgrgBgmgDIgagDQhEgHgkgKIgMgDQgpgOgEgWIAAgBIAAgEIAAgBQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAACgAmIADABQCfAlACA0IAAABIAAACIAAABQgBAVgPALIgJAFQgSAIgxAKIgSAEQhBAMhTACIgVABIiAABIhHgBg");
		this.shape_198.setTransform(468.5,896.8);

		this.shape_199 = new cjs.Shape();
		this.shape_199.graphics.f("#A88ABF").s().p("ABABnIgHAAQiQAAhIgDIgDAAIhvgFQgsgBglgDIgagDQhEgHgkgKIgMgDQgpgNgEgXIAAgBIAAgEIAAgBQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAACgAmIADABQCfAmACAzIAAABIAAACIAAABQgBAWgPAKQgDADgGACQgTAIgwAKIgSAEQhBAMhTACIgWAAIiBACIhFgBg");
		this.shape_199.setTransform(468.5,896.8);

		this.shape_200 = new cjs.Shape();
		this.shape_200.graphics.f("#A88ABF").s().p("ABABnIgHAAQiPAAhJgEIgDAAIhvgEQgtgBglgDIgZgCQhFgIgkgJIgLgDQgpgOgEgWIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAACgAlIADABQCfAmACAzIAAABIAAADIAAABQgBAVgPAKQgDADgGADQgTAHgwAKIgSAEQhBAMhTABIgWABIiIABIg+AAg");
		this.shape_200.setTransform(468.5,896.8);

		this.shape_201 = new cjs.Shape();
		this.shape_201.graphics.f("#A88ABF").s().p("ABBBmIgIAAQiPABhJgEIgDAAIhvgEQgtgBglgDIgZgCQhFgHgkgKIgLgDQgpgNgEgXIAAgBIAAgEIAAgBQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAACgAmIADABQCfAmACAzIAAABIAAADIAAABQgBAVgPAKQgDADgHACQgSAIgwAKIgSADQhBAMhUABIgVABIh3ABIhOgBg");
		this.shape_201.setTransform(468.5,896.7);

		this.shape_202 = new cjs.Shape();
		this.shape_202.graphics.f("#A88ABF").s().p("ABBBmIgIAAQiPABhJgEIgDAAIhwgEQgtgBgkgDIgZgBQhFgIgkgJIgLgDQgpgOgEgWIAAgCIAAgEIAAAAQAAg2CdglIAAAAQBOgUBdgIIABAAQBfgLBwAAIABAAQDeAAChAmIADABQCeAmACA0IAAABIAAACIAAABQgBAVgPAKQgEADgGACQgTAIgwAKIgSAEQhAALhUABIgWABIh4ABIhMgBg");
		this.shape_202.setTransform(468.5,896.7);

		this.shape_203 = new cjs.Shape();
		this.shape_203.graphics.f("#A88ABF").s().p("ABBBmIgIAAQiOABhKgEIgDAAIhwgDQgtgCgkgCIgZgCQhFgHgkgKIgLgDQgpgOgEgWIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAlIADABQCeAnACAzIAAABIAAADIAAABQgBAVgPAKIgKAFQgTAIgwAKIgSACQhAAMhVABIgVABIh6AAIhKAAg");
		this.shape_203.setTransform(468.5,896.7);

		this.shape_204 = new cjs.Shape();
		this.shape_204.graphics.f("#A88ABF").s().p("ABBBlIgHAAQiPABhKgDIgDAAIhwgDQgugBgjgDIgZgCQhFgHgkgKIgLgDQgpgNgEgXIAAgBIAAgEIAAgBQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAmIADABQCfAmABAzIAAABIAAADIAAABQgBAVgPAKIgKAFQgTAIgwAJIgSAEQhAALhVABIgWAAIh7ABIhIgBg");
		this.shape_204.setTransform(468.5,896.6);

		this.shape_205 = new cjs.Shape();
		this.shape_205.graphics.f("#A88ABF").s().p("ABBBlIgHAAQiOABhLgDIgDAAIhwgDQgugBgjgCIgZgCQhFgIgkgJIgLgDQgpgNgEgXIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAlIADABQCfAmABA0IAAABIAAADIAAABQgBAVgPAKIgKAFQgTAHgwAKIgSADQhAALhVABIgWAAIhaAAIhpAAg");
		this.shape_205.setTransform(468.5,896.6);

		this.shape_206 = new cjs.Shape();
		this.shape_206.graphics.f("#A88ABF").s().p("ABBBkIgHAAQiOAChLgEIgDAAQgegBhSgBIhRgDIgZgCQhFgHgkgKIgLgDQgpgNgEgXIAAgBIAAgFIAAAAQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDfAACgAlIADABQCfAnABAzIAAABIAAADIAAABQgBAWgPAJIgKAFQgUAHgwAKIgSADQg/ALhWAAIgVABIjDgBg");
		this.shape_206.setTransform(468.5,896.6);

		this.shape_207 = new cjs.Shape();
		this.shape_207.graphics.f("#A88ABF").s().p("ABBBkIgHAAQiOABhKgDIgEAAQgdgBhTgBQgvgBgigCIgZgCQhFgHgkgKIgMgDQgogNgEgWIAAgBIAAgFIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIADABQCfAmABA0IAAABIAAACIAAABQgBAWgQAJIgKAFQgTAHgwAKIgSADQg/ALhWAAIgWABIjCgBg");
		this.shape_207.setTransform(468.5,896.5);

		this.shape_208 = new cjs.Shape();
		this.shape_208.graphics.f("#A88ABF").s().p("ABBBkIgHAAQiNABhLgDIgEAAQgdgChTgBQgwAAghgCIgZgBQhGgHgjgKIgMgDQgogNgEgXIAAgBIAAgFIAAAAQAAg2CdglQBOgUBegIIABAAQBfgLBvAAIACAAQDeAACgAnIADABQCfAlABA0IAAABIAAACIAAABQgBAXgQAJIgKAEQgTAIgwAJIgSAEQg/AKhWAAIgWABIjCgBg");
		this.shape_208.setTransform(468.5,896.5);

		this.shape_209 = new cjs.Shape();
		this.shape_209.graphics.f("#A88ABF").s().p("ABCBjIgIAAQiNAChLgDIgEAAQgcgChUAAQgwAAghgCIgZgCQhGgHgjgKIgMgDQgogNgEgXIAAgBIAAgEIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIADABQCfAlABA0IAAABIAAADIAAABQgBAWgQAJIgKAFQgTAHgwAJIgSAEQg/AKhXAAIgVAAIjBgBg");
		this.shape_209.setTransform(468.5,896.5);

		this.shape_210 = new cjs.Shape();
		this.shape_210.graphics.f("#A88ABF").s().p("ABCBiIgHAAQiNADhMgEIgEAAIhwgBQgxAAgggDIgZgBQhGgHgjgKIgMgDQgngMgFgYIAAgBIAAgEIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIADABQCgAmAAAzIAAABIAAAEIAAABQgCAWgPAIQgDACgHADQgUAHgwAKIgSACQg+ALhXgBIgWABIjAgCg");
		this.shape_210.setTransform(468.5,896.5);

		this.shape_211 = new cjs.Shape();
		this.shape_211.graphics.f("#A88ABF").s().p("AEXBjIgVAAIjAgBIgHAAQiNAChMgDIgEAAQgbgBhVAAQgyAAgfgCIgagCQhFgHgjgJIgMgDQgngNgFgXIAAgBIAAgFIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBwAAIABAAQDeAACgAmIADABQCgAmAAA0IAAABIAAADIAAABQgCAWgPAJIgKAEQgUAHgwAKIgSADQg4AKhPAAIgPgBg");
		this.shape_211.setTransform(468.5,896.4);

		this.shape_212 = new cjs.Shape();
		this.shape_212.graphics.f("#A88ABF").s().p("AEXBjIgWAAIi/gBIgHAAQiNAChMgDIgEAAQgbgBhWAAQgxAAgfgCIgagBQhFgHgjgKIgMgDQgngMgFgYIAAgBIAAgEIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBwAAIABAAQDeAAChAmIADABQCfAmAAA0IAAABIAAACIAAABQgCAWgPAJIgKAFQgUAGgwAKIgSADQg4AJhOAAIgQAAg");
		this.shape_212.setTransform(468.5,896.4);

		this.shape_213 = new cjs.Shape();
		this.shape_213.graphics.f("#A88ABF").s().p("AEXBjIgWAAIi/gCIgHAAQiMADhNgEIgEAAQgagBhXABQgyAAgegCIgagBQhFgHgjgKIgMgDQgngMgFgYIAAgBIAAgEIAAgBQAAg1CdgmQBOgTBegJIABAAQBfgKBwAAIABAAQDeAAChAmIADABQCfAmAAA0IAAABIAAADIAAABQgCAWgPAIIgLAFQgTAGgwAKIgSADQg2AJhKAAIgWAAg");
		this.shape_213.setTransform(468.5,896.4);

		this.shape_214 = new cjs.Shape();
		this.shape_214.graphics.f("#A88ABF").s().p("AEWBjIjUgCQiVADhPgEQgagBhXABQhMAAgegDQhSgIgigLQgogNgEgYIAAgGQAAg1CdgmQBOgTBegJQBfgKBxAAQDfAAChAmQCiAnAAA0IAAABQAAAagRAJQgOAHhBANQg6AMhZAAIgVAAg");
		this.shape_214.setTransform(468.5,896.3);

		this.shape_215 = new cjs.Shape();
		this.shape_215.graphics.f("#A88ABF").s().p("ABBBhIgjABQh6AChHgCIgOAAQgfgBhEAAQhMABgegEIgBAAQhRgJgigLQgngNgEgZIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAAChAmIACAAQCfAlADA0IAAABIAAABIAAABQAAAZgSAJIgEADQgSAGg4AMQgVAEgYACQg1AHhGgBIgwAAIilgCg");
		this.shape_215.setTransform(468.5,896.4);

		this.shape_216 = new cjs.Shape();
		this.shape_216.graphics.f("#A88ABF").s().p("AikBiIgOAAIhiAAQhMABgegDIgCAAQhQgKgigMQgngNgEgZIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAAChAmIACAAQCfAlADA0IAAABIAAABIAAABQAAAZgSAJIgEACQgTAHg3ALQgVAEgYADQg1AGhGAAIgwAAIilgBIgjAAIhtABIhVgBg");
		this.shape_216.setTransform(468.5,896.4);

		this.shape_217 = new cjs.Shape();
		this.shape_217.graphics.f("#A88ABF").s().p("AilBjIgOAAIhiAAQhMABgegEIgCAAQhPgJgigNQgngOgEgYIAAgGQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAAChAmIACAAQCfAmADAzIAAABIAAACIAAABQgBAYgRAJIgFACQgSAIg4ALQgUAEgZACQg1AGhGAAIgwABIilgBIgjABIh6ABIhIgBg");
		this.shape_217.setTransform(468.5,896.4);

		this.shape_218 = new cjs.Shape();
		this.shape_218.graphics.f("#A88ABF").s().p("AimBkIgOAAIhiAAQhLABgfgEIgCAAQhOgJgjgOQgmgOgEgZIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQCfAlADA0IAAABIAAABIAAABQgBAYgSAJIgEACQgTAIg3ALQgUAEgZADQg1AGhGAAIgwAAQiRgBgVABIgjABQhVABg+AAIgvAAg");
		this.shape_218.setTransform(468.5,896.5);

		this.shape_219 = new cjs.Shape();
		this.shape_219.graphics.f("#A88ABF").s().p("AmBBiIgBAAQhPgKgigOQgmgPgEgZIAAgFQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQCfAlADA0IAAABIAAABIAAABQgBAYgSAJIgEACQgUAIg2ALQgVAEgYACQg2AHhFAAIgwABQiOgBgZABIgjABQh1AChNgBIgOAAIhiABIgcAAQg1AAgZgDg");
		this.shape_219.setTransform(468.5,896.6);

		this.shape_220 = new cjs.Shape();
		this.shape_220.graphics.f("#A88ABF").s().p("AmBBjIgCAAQhOgLgigOQgmgPgEgZIAAgGQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQCfAmADA0IAAABIAAABIAAABQgBAXgTAKIgEACQgTAHg3ALQgUAEgZADQg1AGhFABIgxAAQiLAAgcABIgjABQh0ADhOgBIgOAAIhhABIgcAAQg1AAgZgDg");
		this.shape_220.setTransform(468.5,896.6);

		this.shape_221 = new cjs.Shape();
		this.shape_221.graphics.f("#A88ABF").s().p("AmCBjIgCAAQhNgKgjgQQglgPgEgZIAAgGQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQCgAmACA0IAAABIAAABIAAABQgBAXgTAJIgEACQgUAIg2ALQgUAEgZADQg1AGhGABIgwABQiIgBggACIgjABQhyAChQAAIgOABIhhAAIgaABQg2AAgagEg");
		this.shape_221.setTransform(468.5,896.7);

		this.shape_222 = new cjs.Shape();
		this.shape_222.graphics.f("#A88ABF").s().p("AmDBjIgBAAQhOgKgigQQglgQgEgZIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQCgAmACA0IAAABIAAABIAAABQgBAXgTAJIgFACQgUAIg1ALQgVAEgYADQg2AGhFABIgwABQiFAAgjACIgkABQhxAChRABIgOAAIhhABIgOABQg/AAgdgFg");
		this.shape_222.setTransform(468.5,896.8);

		this.shape_223 = new cjs.Shape();
		this.shape_223.graphics.f("#A88ABF").s().p("AmEBkIgBAAQhNgLgigQQglgQgEgZIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQCgAmACAzIAAABIAAACIAAABQgBAWgUAJIgEACQgUAJg2AKQgUAEgZADQg1AGhFABIgxACQiBgBgnADIgkABIjCAEIgOAAIhhABIgOAAQg/AAgdgEg");
		this.shape_223.setTransform(468.5,896.9);

		this.shape_224 = new cjs.Shape();
		this.shape_224.graphics.f("#A88ABF").s().p("AmEBlIgCAAQhMgMgjgRQgkgQgEgZIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQCgAmACAzIAAABIAAACIAAABQgBAVgUAKIgEACQgVAIg1ALQgUAEgZADQg1AGhFACIgxABQh/AAgqADIgjABIjDAEIgOAAIhgACIgPAAQg/AAgcgEg");
		this.shape_224.setTransform(468.5,897);

		this.shape_225 = new cjs.Shape();
		this.shape_225.graphics.f("#A88ABF").s().p("AmFBlIgBAAQhNgLgigSQgkgQgEgaIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQCgAmACA0IAAABIAAABIAAABQgBAWgVAKIgEACQgVAIg0AKQgVAEgYADQg2AHhFABIgxACQh7AAguADIgjABIjDAFIgOAAIhgACIgNAAQhAAAgdgFg");
		this.shape_225.setTransform(468.5,897);

		this.shape_226 = new cjs.Shape();
		this.shape_226.graphics.f("#A88ABF").s().p("AmGBmIgBAAQhMgMgigSQgkgRgEgaIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCfAmACA0IAAABIAAABIAAABQgBAVgVAKIgEACQgVAJg0AKQgVAEgYADQg2AGhFACIgxACQh4AAgyAEIgjABIjDAFIgOAAIhgACIgWABQg5AAgbgFg");
		this.shape_226.setTransform(468.5,897.1);

		this.shape_227 = new cjs.Shape();
		this.shape_227.graphics.f("#A88ABF").s().p("AmHBnIgBAAQhLgMgjgTQgjgSgEgZIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCfAmACA0IAAABIAAABIAAABQgBAVgVAKIgFACQgVAIg0AKQgUAEgZADQg2AHhEACIgxACQh1AAg2AEIgjABIjDAGIgOAAIhgACIgVAAQg5AAgcgEg");
		this.shape_227.setTransform(468.5,897.2);

		this.shape_228 = new cjs.Shape();
		this.shape_228.graphics.f("#A88ABF").s().p("AmHBnIgCAAQhLgMgigUQgjgRgEgaIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCfAmACA0IAAABIAAABIAAABQgCAUgVAKIgEACQgWAJgzAKQgVAEgYADQg2AHhEACIgyACQhyABg5AEIgjABIjDAGIgOABIhfACIgWAAQg5AAgbgFg");
		this.shape_228.setTransform(468.5,897.3);

		this.shape_229 = new cjs.Shape();
		this.shape_229.graphics.f("#A88ABF").s().p("AmIBoIgBAAQhLgNgigUQgjgSgEgaIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCfAmACA0IAAABIAAACIAAABQgCAUgVAKIgFACQgWAJgyAJQgVAEgYADQg2AHhFADIgxACQhvABg8AEIgkABIjDAHIgOAAIhfADIgUAAQg6AAgcgFg");
		this.shape_229.setTransform(468.5,897.3);

		this.shape_230 = new cjs.Shape();
		this.shape_230.graphics.f("#A88ABF").s().p("AmJBoIgBAAQhKgMgjgVQgigSgEgbIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCgAnABAzIAAABIAAACIAAABQgCATgVALIgFACQgWAJgzAJQgUAEgZADQg2AHhEADIgxACQhsABhAAFIgkABIjDAHIgOABQgpACg2AAIgUABQg5AAgdgGg");
		this.shape_230.setTransform(468.5,897.4);

		this.shape_231 = new cjs.Shape();
		this.shape_231.graphics.f("#A88ABF").s().p("AmKBpIgBAAQhKgNgigVQgigTgEgaIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCgAmABA0IAAABIAAABIAAABQgCATgWALIgEACQgXAJgyAKQgVAEgYADQg2AGhEADIgyADQhoABhEAFIgkABIjDAIIgOABQgpACg2AAIgUAAQg5AAgdgFg");
		this.shape_231.setTransform(468.5,897.5);

		this.shape_232 = new cjs.Shape();
		this.shape_232.graphics.f("#A88ABF").s().p("AmLBqIAAAAQhKgOgigVQgigUgEgaIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCgAmABA0IAAABIAAABIAAABQgCATgWALIgFACQgXAJgxAJQgVAEgYADQg2AHhFAEIgxACQhlAChIAEIgjACIjEAIIgOABQgqACg1ABIgUAAQg5AAgdgFg");
		this.shape_232.setTransform(468.5,897.6);

		this.shape_233 = new cjs.Shape();
		this.shape_233.graphics.f("#A88ABF").s().p("AmLBqIgBAAQhJgNgjgWQghgUgEgbIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCgAnABAzIAAABIAAACIAAABQgCASgXALIgEACQgXAJgyAKQgUAEgZADQg2AHhEADIgxADQhjAChLAFIgjABIjEAJIgOABQgrACgzABIgTAAQg6AAgdgGg");
		this.shape_233.setTransform(468.5,897.6);

		this.shape_234 = new cjs.Shape();
		this.shape_234.graphics.f("#A88ABF").s().p("AmMBrIgBAAQhIgOgjgXQghgUgEgbIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDfAACgAmIACAAQCgAnABA0IAAABIAAABIAAABQgCASgXALIgFACQgXAJgxAKQgUAEgZADQg2AHhEADIgyADQhfAChPAFIgjACIjEAKIgOAAQgrADgzAAIgYABQg2AAgcgGg");
		this.shape_234.setTransform(468.5,897.7);

		this.shape_235 = new cjs.Shape();
		this.shape_235.graphics.f("#A88ABF").s().p("AmNBsIgBAAQhIgOgigYQghgUgEgbIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDfAACgAmIACAAQCgAmABA0IAAABIAAACIAAABQgCARgXALIgFACQgYAKgwAJQgVAEgYADQg3AHhDAEIgyADQhcAChSAGIgkABQhhAEhjAGIgOABQgsADgyAAIgYAAQg1AAgdgFg");
		this.shape_235.setTransform(468.5,897.8);

		this.shape_236 = new cjs.Shape();
		this.shape_236.graphics.f("#A88ABF").s().p("AmOBsIAAAAQhIgOgjgYQgggVgEgbIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDfAACgAmIACAAQCgAmABA0IAAABIAAACIAAABQgCARgYALIgFACQgXAKgxAJQgUAEgZADQg2AHhEAEIgxADQhZADhWAFIgkACQhfAEhlAHIgOAAQgsADgyABIgYAAQg1AAgdgGg");
		this.shape_236.setTransform(468.5,897.9);

		this.shape_237 = new cjs.Shape();
		this.shape_237.graphics.f("#A88ABF").s().p("AmOBtIgBAAQhHgPgjgYQgggVgEgcIAAgGQAAg1CdgmIAAAAQBOgTBdgJIABAAQBfgKBwAAIABAAQDfAACgAmIACAAQCgAnABA0IAAABIAAABIAAABQgCARgYALIgFACQgYAKgwAJIgtAHQg2AHhEAFIgyADQhWADhZAGIgkABQheAFhmAGIgOABQgtADgwABIgXAAQg2AAgdgGg");
		this.shape_237.setTransform(468.5,897.9);

		this.shape_238 = new cjs.Shape();
		this.shape_238.graphics.f("#A88ABF").s().p("AmPBtIgBAAQhHgPgigZQgfgVgFgbIAAgHQAAg1CdgmQBOgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQCgAnABA0IAAABIAAACIAAABQgCAQgZALIgEACQgZAKgvAJIgtAHQg3AHhDAFIgyADQhTADhdAGIgkACQhcAFhoAHIgNABQgvADgvABIgQAAQg7AAgfgHg");
		this.shape_238.setTransform(468.5,898);

		this.shape_239 = new cjs.Shape();
		this.shape_239.graphics.f("#A88ABF").s().p("AmQBuIAAAAQhHgQgjgZQgegWgFgbIAAgHQAAg1CdgmQBOgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQCgAnABA0IAAABIAAACIAAABQgDAQgYALIgFACQgYAKgwAJQgUAEgZADQg2AHhDAFIgyADQhQADhhAHIgkACQhbAFhpAHIgNABQgvADgvABIgQABQg7AAgfgHg");
		this.shape_239.setTransform(468.5,898.1);

		this.shape_240 = new cjs.Shape();
		this.shape_240.graphics.f("#A88ABF").s().p("AmRBvIAAAAQhGgQgjgaQgegWgFgcIAAgGQAAg1CdgmQBOgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQChAmAAA0IAAABIAAACIAAABQgDAQgYALIgFACQgZAKgvAJIgtAHQg2AHhEAGIgyADQhMADhlAHIgjACQhbAFhqAIIgNABQgwADguABIgQAAQg6AAgggGg");
		this.shape_240.setTransform(468.5,898.2);

		this.shape_241 = new cjs.Shape();
		this.shape_241.graphics.f("#A88ABF").s().p("AmRBvIgBAAQhGgQgjgbQgdgWgFgcIAAgGQAAg1CdgmQBOgTBegJIABAAQBfgKBvAAIACAAQDeAACgAmIACAAQChAnAAAzIAAABIAAACIAAABQgDAQgZALIgFACQgZAKguAJIgtAHQg3AHhDAGIgyADQhKAEhoAHIgjACQhZAFhsAIIgNABQgxAEgsABIgPAAQg8AAgfgHg");
		this.shape_241.setTransform(468.5,898.3);

		this.shape_242 = new cjs.Shape();
		this.shape_242.graphics.f("#A88ABF").s().p("AmSBwQhGgQgjgcQgdgWgFgcIAAgHQAAg1CdgmQBOgTBegJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCgAnAAA0IAAABIAAACIAAABQgDAPgZALIgFACQgZALguAIQgVAEgYADQg3AIhDAFIgyAEQhHAEhrAHIgkACQhYAFhtAJIgNABQgxAEgsABIgUAAQg4AAgegHg");
		this.shape_242.setTransform(468.5,898.3);

		this.shape_243 = new cjs.Shape();
		this.shape_243.graphics.f("#A88ABF").s().p("AmTBwIAAAAQhFgQgjgcQgdgXgFgcIAAgHQAAg1CdgmQBOgTBegJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCgAnAAA0IAAABIAAACIAAABQgDAPgaALIgEACQgaAKguAJIgtAHQg3AIhCAFIgzAEIiyAMIgkACQhWAFhvAJIgNABQgyAEgrABIgUABQg3AAgfgIg");
		this.shape_243.setTransform(468.5,898.4);

		this.shape_244 = new cjs.Shape();
		this.shape_244.graphics.f("#A88ABF").s().p("AmUBxQhFgQgjgdQgcgYgFgcIAAgGQAAg1CdgmQBOgTBegJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCgAnAAA0IAAABIAAACIAAABQgDAOgaALIgFACQgaALgtAIIgtAIQg3AHhDAGIgyAEIizAMIgkACQhVAFhwAKIgNABQgyAEgrABIgUAAQg3AAgfgHg");
		this.shape_244.setTransform(468.5,898.5);

		this.shape_245 = new cjs.Shape();
		this.shape_245.graphics.f("#A88ABF").s().p("AmUBxIgBAAQhEgQgjgeQgcgXgFgdIAAgGQAAg1CdgmQBOgTBegJIABAAQBfgKBwAAIABAAQDeAAChAmIACAAQCgAnAAA0IAAABIAAACIAAABQgDAOgaALIgFACQgbALgsAIIgtAHQg3AIhDAGIgyAEIi0ANIgkACQhUAFhxAKIgNABQgzAFgpABIgTAAQg4AAgfgIg");
		this.shape_245.setTransform(468.5,898.6);

		this.shape_246 = new cjs.Shape();
		this.shape_246.graphics.f("#A88ABF").s().p("AmVByQhEgRgjgeQgcgYgFgdIAAgGQAAg1CdgmQBOgTBegJQBfgKBxAAQDfAAChAmQCiAnAAA0IAAABQgBARgiANQgmAQhOALQhLAKhhAIIjYAPQhXAGh7ALQhBAGgvAAQg3AAgfgIg");
		this.shape_246.setTransform(468.5,898.6);

		this.shape_247 = new cjs.Shape();
		this.shape_247.graphics.f("#A88ABF").s().p("AmLB0IgKgCQhEgRgjgeQgcgYgFgdIAAgGQAAg1CcgmIABAAQBNgTBegJIABAAQBegKBvAAIADAAQDcAACgAlIAEABQCbAlAHAxIAAABIAAAEIAAABQgBARgiAOQgmAQhNALIgTACQhEAJhVAIIgUABIjEANIgVACIi+APIgVACQgvADglAAQgzAAgggGg");
		this.shape_247.setTransform(468.5,898.6);

		this.shape_248 = new cjs.Shape();
		this.shape_248.graphics.f("#A88ABF").s().p("AmLBzIgKgCQhEgRgjgdQgcgYgFgdIAAgGQAAg1CcgmIABAAQBNgTBegJIABAAQBegKBvAAIADAAQDcAACgAlIAEABQCbAlAHAyIAAABIAAAEIAAABQgBAQghAOQgnAQhNALIgSADQhFAKhVAHIgUABQhEAGiAAIIgUABQhUAFhqAJIgWACQgtADgkAAQg1AAghgHg");
		this.shape_248.setTransform(468.5,898.6);

		this.shape_249 = new cjs.Shape();
		this.shape_249.graphics.f("#A88ABF").s().p("AmLBzIgJgCQhEgRgjgdQgdgYgFgdIAAgGQAAg1CcgmIABAAQBNgTBegJIABAAQBegKBvAAIADAAQDdAACfAlIAEABQCbAlAHAyIAAABIAAAEIAAABQgBAQghAOQgmARhOALIgSADQhFAKhVAHIgTACQhFAFiAAIIgUABQhVAFhpAJIgVABQgqADgiAAQg5AAgjgHg");
		this.shape_249.setTransform(468.5,898.6);

		this.shape_250 = new cjs.Shape();
		this.shape_250.graphics.f("#A88ABF").s().p("AmKByIgKgCQhEgRgjgdQgdgXgFgdIAAgGQAAg1CcgmIABAAQBNgTBegJIABAAQBegKBwAAIACAAQDdAACfAlIAEABQCcAlAGAyIAAABIAAAEIAAABQgBARghAOQgmARhOALIgSADQhGAKhUAHIgTACQhFAFh/AIIgVABIi9ANIgWABQgoADghAAQg6AAgkgIg");
		this.shape_250.setTransform(468.5,898.6);

		this.shape_251 = new cjs.Shape();
		this.shape_251.graphics.f("#A88ABF").s().p("AmKByIgKgCQhEgRgjgdQgdgXgFgdIAAgGQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAACfAlIAEABQCcAmAGAxIAAABIAAAEIAAABQgBARghAOQgmARhNAMIgTADQhGAKhTAIIgUABQhGAGh+AHIgUABIi+AMIgVACQglACgfAAQg9AAgngIg");
		this.shape_251.setTransform(468.5,898.6);

		this.shape_252 = new cjs.Shape();
		this.shape_252.graphics.f("#A88ABF").s().p("AmKBxIgJgCQhEgRgkgcQgdgYgFgcIAAgGQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAACfAlIAEABQCcAmAGAxIAAABIAAAEIAAABQgBARghAOQgmAShNAMIgTACQhGAMhTAHIgTACQhHAFh9AHIgVABQhYAFhlAHIgWABIg8ACQhCAAgqgJg");
		this.shape_252.setTransform(468.5,898.6);

		this.shape_253 = new cjs.Shape();
		this.shape_253.graphics.f("#A88ABF").s().p("AmJBxIgKgCQhEgRgjgcQgegYgFgcIAAgGQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAACgAlIAEABQCbAmAGAxIAAABIAAAEIAAABQgBARghAPQglARhOANIgSACQhHAMhTAHIgTACQhHAGh9AGIgVABIi9ALIgVABIg6ACQhEAAgqgJg");
		this.shape_253.setTransform(468.5,898.6);

		this.shape_254 = new cjs.Shape();
		this.shape_254.graphics.f("#A88ABF").s().p("AmJBwIgKgCQhEgRgjgcQgegXgFgcIAAgGQAAg1CcgmIABAAQBNgTBegJIABAAQBfgKBvAAIACAAQDdAACgAlIAEABQCcAmAFAxIAAABIAAAEIAAABQgBASggAOQgmAShOANIgSACQhHAMhSAHIgUACQhIAGh8AGIgUACQhbAEhiAGIgWABIgxABQhJAAgugKg");
		this.shape_254.setTransform(468.5,898.6);

		this.shape_255 = new cjs.Shape();
		this.shape_255.graphics.f("#A88ABF").s().p("AmJBwIgJgCQhFgRgjgcQgegXgFgcIAAAAIAAgFIAAgBQAAg1CdgmIABAAQBNgTBdgJIABAAQBfgKBvAAIACAAQDdAACgAmIAEABQCcAlAFAyIAAABIAAAEIAAABQgBARggAOQgmAThNANIgTACQhHAMhSAIIgTABQhJAHh7AGIgVABQhbADhiAGIgVABIgtABQhMAAgwgKg");
		this.shape_255.setTransform(468.5,898.6);

		this.shape_256 = new cjs.Shape();
		this.shape_256.graphics.f("#A88ABF").s().p("AmIBwIgKgCQhEgSgkgbQgegXgFgcIAAAAIAAgFIAAgBQAAg1CdgmIABAAQBNgTBdgJIABAAQBfgKBvAAIACAAQDdAACgAmIAEABQCcAlAFAyIAAABIAAAEIAAABQgBARggAPQgmAShNANIgTADQhHAMhSAIIgTACQhJAGh7AGIgUABQhdADhgAGIgWAAIgrABQhNAAgwgKg");
		this.shape_256.setTransform(468.5,898.6);

		this.shape_257 = new cjs.Shape();
		this.shape_257.graphics.f("#A88ABF").s().p("AmIBvIgKgCQhEgRgjgbQgfgXgFgcIAAAAIAAgFIAAgBQAAg1CdgmIABAAQBNgTBdgJIABAAQBfgKBvAAIADAAQDcAACgAmIAEABQCcAlAFAyIAAABIAAAEIAAABQgCARgfAPQglAThOANIgTADQhHANhRAHIgUACQhJAGh7AGIgUABIi9AIIgVABIghAAQhUAAg0gLg");
		this.shape_257.setTransform(468.5,898.6);

		this.shape_258 = new cjs.Shape();
		this.shape_258.graphics.f("#A88ABF").s().p("AmIBvIgJgCQhFgSgjgbQgfgWgFgcIAAAAIAAgFIAAgBQAAg1CdgmIABAAQBNgTBdgJIABAAQBfgKBvAAIADAAQDcAACgAmIAEABQCcAlAFAyIAAABIAAAEIAAABQgCASgfAOQglAThOAOIgSADQhIANhRAIIgUABQhKAHh5AFIgVABQhfADhdAEIgWABIggAAQhUAAg1gLg");
		this.shape_258.setTransform(468.5,898.6);

		this.shape_259 = new cjs.Shape();
		this.shape_259.graphics.f("#A88ABF").s().p("AmHBuIgKgCQhEgSgkgaQgfgXgFgbIAAgBIAAgFIAAAAQAAg1CdgmIABAAQBNgTBdgJIACAAQBegKBvAAIADAAQDdAACfAlIAEABQCdAmAEAyIAAABIAAAEIAAABQgCARgfAPQglAThNAPIgTADQhIANhRAHIgTACQhLAHh5AFIgUABQhgAChdAEIgVABIgVAAQhbAAg5gMg");
		this.shape_259.setTransform(468.5,898.7);

		this.shape_260 = new cjs.Shape();
		this.shape_260.graphics.f("#A88ABF").s().p("AmHBtIgKgCQhEgRgkgbQgfgWgFgbIAAgBIAAgFIAAAAQAAg1CdgmIABAAQBNgTBdgJIACAAQBegKBvAAIADAAQDdAACfAlIAEABQCdAmAEAyIAAABIAAAEIAAABQgCASgeAPQgmAThNAOIgTAEQhIANhQAIIgUABQhLAHh4AFIgVABIi8AGIgWAAIgOAAQhfAAg8gNg");
		this.shape_260.setTransform(468.5,898.7);

		this.shape_261 = new cjs.Shape();
		this.shape_261.graphics.f("#A88ABF").s().p("AmGBtIgKgCQhFgSgjgaQgggWgFgbIAAgBIAAgFIAAAAQAAg1CdgmIABAAQBNgTBdgJIACAAQBegKBvAAIADAAQDdAACgAlIAEABQCcAmAEAyIAAABIAAAEIAAABQgCASgeAPQglAUhOAOIgTAEQhIANhQAIIgUACQhMAHh3AEIgVABIi8AFIgVAAIgHAAQhkAAg+gNg");
		this.shape_261.setTransform(468.5,898.7);

		this.shape_262 = new cjs.Shape();
		this.shape_262.graphics.f("#A88ABF").s().p("AjdB7QhoAAhBgPIgKgCQhFgRgjgaQgggXgFgaIAAgBIAAgFIAAAAQAAg2CdglIABAAQBNgUBdgIIACAAQBegLBvAAIADAAQDdAACgAmIAEABQCcAlAEAzIAAABIAAAEIAAABQgCASgeAPQglAUhOAPIgTADQhIAOhQAIIgTACQhNAHh3AEIgUAAIi8AGIgWAAg");
		this.shape_262.setTransform(468.5,898.7);

		this.shape_263 = new cjs.Shape();
		this.shape_263.graphics.f("#A88ABF").s().p("AjcB7QhngBhDgPIgJgCQhFgRgkgaQgggWgFgbIAAAAIAAgFIAAgBQAAg1CdgmIABAAQBNgTBdgJIACAAQBegKBwAAIACAAQDdAACgAmIAEABQCdAlADAzIAAABIAAAEIAAABQgCASgeAPQglAUhNAQIgTADQhJAOhPAIIgUACQhNAHh2AEIgVABIi8AEIgVAAg");
		this.shape_263.setTransform(468.5,898.7);

		this.shape_264 = new cjs.Shape();
		this.shape_264.graphics.f("#A88ABF").s().p("AjcB7QhmgBhDgPIgKgCQhFgSgkgZQgggWgFgbIAAAAIAAgFIAAgBQAAg1CdgmIABAAQBNgTBdgJIACAAQBegKBwAAIACAAQDdAACgAmIAEABQCdAlADAzIAAABIAAAEIAAABQgCASgeAQQglAUhNAPIgTAEQhKAOhOAIIgUACQhOAHh1AEIgUABIi9ADIgVAAg");
		this.shape_264.setTransform(468.5,898.7);

		this.shape_265 = new cjs.Shape();
		this.shape_265.graphics.f("#A88ABF").s().p("AjcB7QhlgBhEgQIgKgCQhFgSgkgZQgggWgFgaIAAAAIAAgGIAAAAQAAg1CdgmIABAAQBNgTBdgJIACAAQBegKBwAAIACAAQDdAACgAlIAEABQCdAmADAzIAAABIAAAEIAAABQgCASgeAQQglAUhNAQIgTAEQhKAOhOAJIgTABQhPAIh0ADIgVAAIi8ADIgWAAg");
		this.shape_265.setTransform(468.5,898.8);

		this.shape_266 = new cjs.Shape();
		this.shape_266.graphics.f("#A88ABF").s().p("AjbB7QhlgChFgQIgJgCQhFgRgkgZQghgWgFgaIAAgBIAAgFIAAAAQAAg1CdgmIABAAQBNgTBdgJIACAAQBegKBwAAIACAAQDdAACgAlIAEABQCdAmADAzIAAABIAAAEIAAABQgCASgeAQQgkAVhNAQIgUADQhKAPhOAIIgTACQhPAIh0ADIgVAAIi8ACIgVAAg");
		this.shape_266.setTransform(468.5,898.8);

		this.shape_267 = new cjs.Shape();
		this.shape_267.graphics.f("#A88ABF").s().p("AjbB7QhkgDhFgPIgKgCQhFgSgkgYQghgXgFgZIAAgBIAAgFIAAAAQAAg2CdglIABAAQBNgUBdgIIACAAQBegLBwAAIACAAQDdAACgAmIAEABQCdAmADAzIAAABIAAADIAAABQgCATgdAQQglAVhNAQIgUAEQhKAPhNAIIgUACQhPAIh0ADIgUAAIi8ACIgWgBg");
		this.shape_267.setTransform(468.5,898.8);

		this.shape_268 = new cjs.Shape();
		this.shape_268.graphics.f("#A88ABF").s().p("AjaB7QhkgDhGgQIgKgCQhFgSgkgYQghgWgFgaIAAAAIAAgFIAAgBQAAg1CdgmIABAAQBNgTBdgJIACAAQBfgKBvAAIACAAQDeAACfAmIAEABQCeAmACAyIAAABIAAAEIAAABQgCATgdAQQglAVhNARIgUAEQhKAPhNAIIgTACQhRAIhyACIgVABIi8ABIgVgBg");
		this.shape_268.setTransform(468.5,898.8);

		this.shape_269 = new cjs.Shape();
		this.shape_269.graphics.f("#A88ABF").s().p("AjEB8IgWgBQhjgDhHgRIgJgCQhFgRglgZQghgVgFgaIAAgBIAAgFIAAAAQAAg1CdgmIABAAQBNgTBdgJIACAAQBfgKBvAAIACAAQDeAACfAlIAEABQCeAmACAzIAAABIAAAFIAAABQgCASgdAQQglAWhNARIgTADQhLAQhNAIIgTACQhRAJhyABIgUABIi8AAg");
		this.shape_269.setTransform(468.5,898.9);

		this.shape_270 = new cjs.Shape();
		this.shape_270.graphics.f("#A88ABF").s().p("AjEB7IgVAAQhjgFhHgQIgKgCQhFgRgkgYQgigWgFgZIAAgBIAAgFIAAAAQAAg2CdglIABAAQBNgUBdgIIACAAQBfgLBvAAIADAAQDdAACgAmIAEABQCdAmACAzIAAABIAAAEIAAABQgDATgcAQQgkAVhNASIgUAEQhLAQhMAIIgUACQhRAIhyACIgUAAIi8gBg");
		this.shape_270.setTransform(468.5,898.9);

		this.shape_271 = new cjs.Shape();
		this.shape_271.graphics.f("#A88ABF").s().p("AjDB8IgWgCQhigEhIgRIgKgCQhFgSgkgXQgigWgFgZIAAgBIAAgFIAAAAQAAg1CdgmIABAAQBNgTBdgJIACAAQBfgKBvAAIADAAQDdAACgAlIAEABQCdAmACAzIAAABIAAAFIAAABQgDASgcARQgkAVhNASIgUAFQhLAPhMAJIgUACQhSAIhwACIgVAAQhtAAhOgBg");
		this.shape_271.setTransform(468.5,899);

		this.shape_272 = new cjs.Shape();
		this.shape_272.graphics.f("#A88ABF").s().p("AgHB9Ii8gCIgVAAQhigFhJgRIgJgDQhGgSgkgWQgigWgFgZIAAgBIAAgFIAAAAQAAg2CdglIABAAQBNgUBegIIABAAQBfgLBvAAIADAAQDdAACgAnIAEABQCdAlACA0IAAABIAAADIAAABQgDATgcAQQgkAXhNASIgUAEQhLAQhMAJIgTABQhTAJhwABIgUAAg");
		this.shape_272.setTransform(468.5,899);

		this.shape_273 = new cjs.Shape();
		this.shape_273.graphics.f("#A88ABF").s().p("AjCB7IgWgBQhhgGhJgRIgKgCQhFgSglgXQgigVgFgZIAAgBIAAgEIAAgBQAAg1CdgmIABAAQBNgTBegJIABAAQBfgKBvAAIADAAQDdAACgAmIAEABQCeAlABA0IAAABIAAAEIAAABQgDATgbAQQglAXhNASIgUAEQhLARhLAIIgUACQhTAJhvABIgVAAQhwgBhLgCg");
		this.shape_273.setTransform(468.5,899.1);

		this.shape_274 = new cjs.Shape();
		this.shape_274.graphics.f("#A88ABF").s().p("AjCB7IgVgBQhhgGhKgSIgKgCQhFgSgkgWQgjgVgFgZIAAgBIAAgFIAAgBQAAg1CdgmIABAAQBNgTBegJIABAAQBfgKBvAAIADAAQDdAACgAmIAEABQCeAmABAzIAAABIAAAEIAAABQgDATgbARQgkAXhNASIgUAFQhMAQhLAJIgUACQhTAJhvAAIgVABQhwgBhLgDg");
		this.shape_274.setTransform(468.5,899.1);

		this.shape_275 = new cjs.Shape();
		this.shape_275.graphics.f("#A88ABF").s().p("AgGB/QhygBhJgDIgWgBQhggHhLgSIgJgCQhGgSgkgWQgjgVgFgZIAAgBIAAgEIAAgBQAAg1CdgmIABAAQBNgTBegJIABAAQBfgKBvAAIADAAQDdAACgAmIAEABQCeAlABA0IAAABIAAAEIAAABQgDATgbARQgkAXhNASIgUAFQhMARhLAJIgTACQhVAJhuAAIgUAAg");
		this.shape_275.setTransform(468.5,899.2);

		this.shape_276 = new cjs.Shape();
		this.shape_276.graphics.f("#A88ABF").s().p("AgGCAQhzgChIgDIgVgBQhggIhLgSIgKgCQhFgSglgWQgjgVgFgYIAAgBIAAgFIAAgBQAAg1CdgmIABAAQBNgTBegJIACAAQBegKBvAAIADAAQDdAACgAmIAEABQCeAmABA0IAAABIAAAEIAAABQgDATgbARQgkAXhNATIgUAEQhMAShKAJIgUACQhVAJhtAAIgVAAg");
		this.shape_276.setTransform(468.5,899.2);

		this.shape_277 = new cjs.Shape();
		this.shape_277.graphics.f("#A88ABF").s().p("AgFCAQh1gBhGgEIgWgCQhfgIhMgSIgKgCQhFgSglgWQgjgUgFgZIAAgBIAAgEIAAgBQAAg1CdgmIABAAQBNgTBegJIACAAQBegKBwAAIACAAQDdAACgAmIAEABQCfAmAAAzIAAABIAAAEIAAABQgDAUgbARQgkAXhNATIgUAFQhNAShJAIIgUACQhVAJhtAAIgUAAg");
		this.shape_277.setTransform(468.5,899.3);

		this.shape_278 = new cjs.Shape();
		this.shape_278.graphics.f("#A88ABF").s().p("AjAB7IgVgCQhfgIhMgTIgKgCQhGgSgkgWQgkgUgFgZIAAgBIAAgEIAAgBQAAg1CdgmIABAAQBNgTBegJIACAAQBegKBwAAIACAAQDeAACgAmIAEABQCeAmAAAzIAAABIAAAFIAAAAQgDAUgbARQgjAYhNAUIgVAEQhNAShJAJIgTACQhXAJhsAAIgUAAQh1gChGgEg");
		this.shape_278.setTransform(468.5,899.4);

		this.shape_279 = new cjs.Shape();
		this.shape_279.graphics.f("#A88ABF").s().p("AAQCBIgVAAQh2gChEgFIgWgCQhegJhNgSIgKgCQhGgSgkgWQgkgUgFgYIAAgBIAAgFIAAgBQAAg1CdgmIABAAQBNgTBegJIACAAQBegKBwAAIACAAQDeAACgAmIAEABQCeAmAAA0IAAABIAAAEIAAABQgDAUgaARQgkAYhNATIgUAFQhOAThJAIIgTACQhSAKhmAAIgKgBg");
		this.shape_279.setTransform(468.5,899.4);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_131}]}).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_131}]},1).wait(1));

		// FlashAICB
		this.shape_280 = new cjs.Shape();
		this.shape_280.graphics.f("#5C5266").s().p("AlDDxQhLhYg3iMQhKi6gOi7QADAUBdgJICKgNQBJABB4gCQC4AADfgZQAwgGAhADQAeADA2APQAyAOAKACQAYAEAAgLIAABYQgOCohLCmQiWFPkvAAQjBAAiCiYg");
		this.shape_280.setTransform(468.5,936.1);

		this.timeline.addTween(cjs.Tween.get(this.shape_280).wait(150));

		// Layer_4
		this.instance = new lib.cup();
		this.instance.parent = this;
		this.instance.setTransform(407,812);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(407,812,126,267);


	(lib.plate_shadow = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#8AC19D").s().p("A32EtQkrg7ilhMQiphPAAhXQAAhVCphPQCkhNEsg7QJ5h8N9AAQN+AAJ5B8QErA7CkBNQCqBPAABVQAABXiqBPQikBMkrA7Qp5B8t+AAQt9AAp5h8g");
		this.shape.setTransform(216,42.5);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.plate_shadow, new cjs.Rectangle(0,0,432,85.1), null);


	(lib.Plate = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#8AC19D").s().p("AyZEeQjng4h+hIQiDhMAAhSQAAhRCDhMQB+hJDng4QHoh2KxAAQKyAAHoB2QDnA4B+BJQCDBMAABRQAABSiDBMQh+BIjnA4QnoB3qyAAQqxAAnoh3gAwVj9QjNAxhwBBQh1BCAABJQAABJB1BDQBwBADNAyQGxBqJkgBQJlABGyhqQDMgyBxhAQB0hDAAhJQAAhJh0hCQhwhBjNgxQmyhqplAAQpkAAmxBqg");
		this.shape.setTransform(216,50.6);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#AAE4D7").s().p("A32FzQkrhIilhfQiphhAAhrQAAhqCphhQClhfErhIQJ5iaN9AAQN+AAJ5CaQErBICkBfQCqBhAABqQAABriqBhQikBfkrBIQp5Cat+AAQt9AAp5iagAyZkxQjnA4h+BIQiEBMAABSQAABSCEBLQB+BJDnA4QHoB2KxAAQKyAAHoh2QDmg4B/hJQCDhLAAhSQAAhSiDhMQh/hIjmg4Qnoh3qyAAQqxAAnoB3gAwWDqQjNgxhvhBQh1hDAAhIQAAhJB1hDQBvhBDNgxQGyhqJkAAQJlAAGyBqQDNAxBwBBQB0BDAABJQAABIh0BDQhxBBjMAxQmzBqpkAAQpkAAmyhqg");
		this.shape_1.setTransform(216,52.5);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Plate, new cjs.Rectangle(0,0,432,105.1), null);


	(lib.leaf_2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.instance = new lib.leaf1();
		this.instance.parent = this;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.leaf_2, new cjs.Rectangle(0,0,63,36), null);


	(lib.leaf = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.instance = new lib.leaf2();
		this.instance.parent = this;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.leaf, new cjs.Rectangle(0,0,69,30), null);


	(lib.food_1_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.instance = new lib.food_1();
		this.instance.parent = this;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	}).prototype = getMCSymbolPrototype(lib.food_1_1, new cjs.Rectangle(0,0,234,107), null);


	(lib.Path_2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#C6BC7F").s().p("AgWnfQgKi0gci/Qg6l+heg5Ige14IBuAAIAoUyIAwBRQA4BmAxBoQCeFQASDtQATDugvRKQgYIngcH2IgULuIkhAyg");
		this.shape.setTransform(24.3,269);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,48.6,538), null);


	(lib.Path_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F0B999").s().p("Ai5RlMABcgjJIEXAAMgBbAjJg");
		this.shape.setTransform(18.6,112.5);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,37.3,225), null);


	(lib.Path = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#C6BC7F").s().p("Ag7BGQAFgIAFgMQAKgZAAgZQAAgYgKgZQgFgMgFgIIBjAAQAFAFAFALQAKAXAAAeQAAAygHAUg");
		this.shape.setTransform(6,7);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,12,14), null);


	(lib.bubble_nest = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFD873").s().p("AgfAgQgNgOAAgSQAAgRANgOQAOgNARAAQASAAAOANQANAOAAARQAAASgNAOQgOANgSAAQgRAAgOgNg");
		this.shape.setTransform(4.5,4.5);

		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	}).prototype = getMCSymbolPrototype(lib.bubble_nest, new cjs.Rectangle(0,0,9,9), null);


	(lib.steak = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// leaf_2
		this.instance = new lib.leaf_2();
		this.instance.parent = this;
		this.instance.setTransform(92,25.5,1,1,0,0,0,55,25.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

		// food_2.png
		this.instance_1 = new lib.food_2();
		this.instance_1.parent = this;
		this.instance_1.setTransform(0,12);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,177,107);


	(lib.flate = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// leaf_2
		this.instance = new lib.leaf_2();
		this.instance.parent = this;
		this.instance.setTransform(146.7,140.2,1,1,30,0,0,57,27.8);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

		// leaf
		this.instance_1 = new lib.leaf();
		this.instance_1.parent = this;
		this.instance_1.setTransform(184.6,139.7,0.71,0.71,60,0,0,59.6,12.4);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

		// steak
		this.instance_2 = new lib.steak();
		this.instance_2.parent = this;
		this.instance_2.setTransform(222.1,53.5,1,1,0,0,0,88.5,53.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

		// leaf
		this.instance_3 = new lib.leaf();
		this.instance_3.parent = this;
		this.instance_3.setTransform(120,128.6,1,1,15,0,0,63.2,14.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150));

		// food_1.png
		this.instance_4 = new lib.food_1_1();
		this.instance_4.parent = this;
		this.instance_4.setTransform(205.6,85.5,1,1,0,0,0,117,53.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:53.6,scaleX:1,scaleY:0.99,y:86.1},75).to({regY:53.5,scaleX:1,scaleY:1,y:85.5},74).wait(1));

		// plate
		this.instance_5 = new lib.Plate();
		this.instance_5.parent = this;
		this.instance_5.setTransform(216,120.4,1,1,0,0,0,216,52.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150));

		// plate_shadow
		this.instance_6 = new lib.plate_shadow();
		this.instance_6.parent = this;
		this.instance_6.setTransform(216,143.4,1,1,0,0,0,216,42.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:42.6,scaleY:0.98,y:142.7},75).to({regY:42.5,scaleY:1,y:143.4},74).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,432,186);


	(lib.bottle_shine = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.instance = new lib.Path();
		this.instance.parent = this;
		this.instance.setTransform(8,7,1,1,0,0,0,6,7);
		this.instance.alpha = 0.301;

		this.instance_1 = new lib.Path_1();
		this.instance_1.parent = this;
		this.instance_1.setTransform(29.9,395.5,1,1,0,0,0,18.6,112.5);
		this.instance_1.alpha = 0.301;

		this.instance_2 = new lib.Path_2();
		this.instance_2.parent = this;
		this.instance_2.setTransform(24.2,295,1,1,0,0,0,24.2,269);
		this.instance_2.alpha = 0.301;

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	}).prototype = getMCSymbolPrototype(lib.bottle_shine, new cjs.Rectangle(0,0,48.6,564), null);


	(lib.beer_bubble = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// Layer_1
		this.instance = new lib.bubble_nest();
		this.instance.parent = this;
		this.instance.setTransform(4.5,4.5,1,1,0,0,0,4.5,4.5);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:9.5},11,cjs.Ease.get(-1)).to({x:4.5},12,cjs.Ease.get(1)).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,9,9);


	(lib.winebottle = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// bottle_shine
		this.instance = new lib.bottle_shine();
		this.instance.parent = this;
		this.instance.setTransform(728.6,543.7,1,1,0,0,0,24.2,282);

		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:727.9},33,cjs.Ease.get(-1)).to({x:727.1},34,cjs.Ease.get(1)).to({x:727.8},37,cjs.Ease.get(-1)).to({x:728.6},45,cjs.Ease.get(1)).wait(1));

		// wine_label.png
		this.instance_1 = new lib.wine_label();
		this.instance_1.parent = this;
		this.instance_1.setTransform(622,544);

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

		// liquid
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDdAOQD6APCRAGQCLAHBqgVQA1gKAZgLQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape.setTransform(697.3,655.3);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDdAPQD6AQCRAEQCKAFBqgUQA1gJAagLQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_1.setTransform(697.3,655.3);

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDdAQQD6AQCRADQCJAEBqgTQA2gKAagKQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_2.setTransform(697.3,655.3);

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDdARQD6ARCRABQCHADBsgTQA1gJAbgKQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_3.setTransform(697.3,655.3);

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDdASQD6ARCRAAQCGABBsgSQA2gJAbgJQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_4.setTransform(697.3,655.3);

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeASQD5ATCRgCQCFAABsgSQA3gJAbgIQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_5.setTransform(697.3,655.3);

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeATQD5AUCRgEQCEgCBtgRQA2gIAcgIQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_6.setTransform(697.3,655.3);

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAUQD6AUCQgFQCDgDBtgRQA3gIAcgHQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_7.setTransform(697.3,655.3);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAVQD6AVCQgHQCCgEBtgQQA3gIAdgHQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_8.setTransform(697.3,655.3);

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAWQD6AVCQgIQCBgGBugPQA3gIAdgGQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_9.setTransform(697.3,655.3);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAXQD6AWCQgKQCAgHBugPQA3gHAegGQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_10.setTransform(697.3,655.3);

		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAYQD6AWCQgLQB/gJBugOQA4gHAegFQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_11.setTransform(697.3,655.3);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAZQD6AXCQgNQB9gKBwgOQA3gGAfgFQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_12.setTransform(697.3,655.3);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAaQD6AXCQgOQB8gLBwgOIBXgKQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_13.setTransform(697.3,655.3);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAbQD6AYCQgQIDrgZIBYgKQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_14.setTransform(697.3,655.3);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAcQD6AZCQgSIDrgaIBYgJQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_15.setTransform(697.3,655.3);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAdQD7AZCPgTQB5gPBxgMIBZgIQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_16.setTransform(697.3,655.3);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAeQD7AaCPgVQB4gRBxgLIBagHQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_17.setTransform(697.3,655.3);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDeAfQD7AaCPgWQB3gSBygLQA5gFAhgBQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_18.setTransform(697.3,655.3);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDYAeQD2AaCOgWQB3gSB4gKIBggGQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_19.setTransform(697.3,655.3);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDSAeQDwAZCOgWQB3gSB+gKQA/gEAngBQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_20.setTransform(697.3,655.3);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDNAdQDqAaCOgWQB3gTCDgJQBCgEAqgBQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_21.setTransform(697.3,655.3);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDHAdQDkAZCOgWQB3gTCJgIQBFgFAtAAQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_22.setTransform(697.3,655.3);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDBAdQDeAYCOgWQB3gTCPgIQBIgEAwAAQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_23.setTransform(697.3,655.3);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIC7AcQDYAYCOgWQB3gTCVgHQBLgEAzAAQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_24.setTransform(697.3,655.3);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIC1AcQDSAXCOgWQB3gSCcgIQBNgDA2AAQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_25.setTransform(697.3,655.3);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICvAbQDNAXCOgWQB3gSChgHQBQgEA5ABQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_26.setTransform(697.3,655.3);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICpAbQDHAWCOgWQB3gSCngHQBTgDA8ABQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_27.setTransform(697.3,655.3);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICkAbQDAAWCOgWQB3gTCtgGQBWgDA/ABQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_28.setTransform(697.3,655.3);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICeAaQC6AWCOgWQB3gTCzgFQBZgDBCABQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_29.setTransform(697.3,655.3);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICYAaQC1AVCOgWQB3gTC4gFQBcgCBFABQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_30.setTransform(697.3,655.3);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICSAZQCvAVCOgWQB3gTC+gEQBfgDBIACQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAviQAAIgjgBg");
		this.shape_31.setTransform(697.3,655.3);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICMAZQCpAUCPgWQB2gSDFgFQBhgCBLACQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAviQAAIgjgBg");
		this.shape_32.setTransform(697.3,655.3);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#625326").s().p("ABhcrQiigGkOhNQiHgnhmgmMgBGgs1QgKgRARhZQAjixCKllICGAZQCkAUCPgWQB2gTDKgEQBlgCBNACQAoBOApBpQBTDSAGCJQAGCKg+W4QggLcggLBQgrAchLAaQiFAviQAAIgjgBg");
		this.shape_33.setTransform(697.3,655.2);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#625326").s().p("ABhcrQiigGkOhNQiHgnhmgmMgBGgs1QgKgRARhZQAjixCKllICAAYQCeAUCPgWQB2gTDQgDQBogCBQACQAoBOApBpQBTDSAGCJQAGCKg+W4QggLcggLBQgrAchLAaQiFAviQAAIgjgBg");
		this.shape_34.setTransform(697.3,655.2);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#625326").s().p("ABhcrQiigGkOhNQiHgnhmgmMgBGgs1QgKgRARhZQAjixCKllIB6AYQCYATCPgWQB2gTDWgCQBrgCBTACQAoBOApBpQBTDSAGCJQAGCKg+W4QggLcggLBQgrAchLAaQiFAviQAAIgjgBg");
		this.shape_35.setTransform(697.3,655.2);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#625326").s().p("ABhcrQiigGkOhNQiHgnhmgmMgBGgs1QgKgRARhZQAjixCKllIB1AYQCRASCPgWQB2gSDcgDQBugBBWACQAoBOApBpQBTDSAGCJQAGCKg+W4QggLcggLBQgrAchLAaQiFAviQAAIgjgBg");
		this.shape_36.setTransform(697.3,655.2);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#625326").s().p("ABhcsQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIBvAXQCMASCPgWQB2gTDhgCQBxgBBZADQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_37.setTransform(697.3,655.2);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#625326").s().p("ABhcsQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIBpAWQCGASCPgWQB2gTDngBQB0gBBcADQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_38.setTransform(697.3,655.2);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#625326").s().p("ABmcsIgGAAQiggGkKhNIgFgBQiEgmhlgkIgEgDMgBGgs0QgKgSARhYQAjiyCKlkIABAAIA3ALIAxAKQBXALBcgFQAwgDAygHQB3gSDngBQBrgBBZADIALAAQAmBKAnBjIAEAKQBQDKAICHIABAKQAGCMg+WuIAAAIQggLZggK+IgBAGQgpAahGAaIgGACQiGAuiOAAIgfAAg");
		this.shape_39.setTransform(697.3,655.2);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#625326").s().p("ABmcsIgGAAQiggGkKhNIgFgBQiFgmhlgkIgDgDMgBGgs0QgKgSARhYQAjiyCKlkIABAAIA3ALIAxAJQBXALBdgGQAvgCAygHQB4gRDmgBQBrgBBaADIAKABQAmBJAoBjIAEAKQBPDLAICHIABAKQAGCNg+WsIAAAIQggLZggK+IgBAGQgpAbhGAZIgGACQiGAuiOAAIgfAAg");
		this.shape_40.setTransform(697.3,655.2);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#625326").s().p("ABmcsIgGAAQiggGkKhNIgFgBQiFgmhlglIgDgCMgBGgs0QgKgSARhYQAjiyCKlkIABAAIA3AKIAxAJQBWAKBegFQAvgDAzgGQB4gQDlgBQBqgBBbADIALABQAlBKAoBjIAEAKQBPDKAICHIABALQAGCPg+WpIAAAIQggLaggK+IgBAFQgpAbhHAZIgGACQiFAuiPAAIgeAAg");
		this.shape_41.setTransform(697.3,655.2);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#625326").s().p("ABmcsIgGAAQiggHkLhMIgFgBQiEgmhlglIgDgCMgBGgs0QgKgSARhYQAjiyCKlkIABAAIA3AKIAxAIQBWAKBegFQAvgDAzgGQB5gPDkgBQBqgBBcADIAKACQAmBJAnBjIAEAKQBPDLAICHIABAKQAGCSg+WnIAAAIQggLZggK+IgBAFQgpAbhHAZIgGACQiFAuiPAAIgeAAg");
		this.shape_42.setTransform(697.3,655.2);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#625326").s().p("ABlcsIgGAAQiggHkKhMIgFgBQiEgmhlglIgDgCMgBGgs0QgKgSARhYQAjiyCKlkIABAAIA3AJIAyAIQBUAJBfgFQAvgCAzgGQB6gODkgBQBogBBeADIAJADQAmBJAnBjIAEAKQBQDLAHCGIABALQAGCUg+WkIAAAIQggLaggK9IgBAGQgqAahGAZIgGACQiFAuiNAAIghAAg");
		this.shape_43.setTransform(697.3,655.2);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#625326").s().p("ABlcsIgGAAQiggHkKhMIgFgBQiFgmhkglIgDgDMgBGgszQgKgSARhYQAjiyCKlkIAAAAIA4AJIAyAHQBTAJBggFQAugDA1gFQB6gNDjgBQBogBBeADIAJADQAmBKAnBiIAEAKQBQDLAHCHIABALQAFCWg9WiIAAAIQggLZggK+IgCAFQgpAahHAZIgGACQiEAuiNAAIghAAg");
		this.shape_44.setTransform(697.3,655.2);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#625326").s().p("ABlcsIgGAAQiggHkLhMIgFgBQiEgmhlglIgCgDMgBGgszQgKgSARhYQAjiyCKlkIAAAAIA4AIIAyAHQBTAIBggFQAugCA1gFQB7gMDigBQBngBBgADIAJAEQAmBJAnBjIAEAKQBPDLAHCGIABALQAFCZg9WfIAAAIQggLZggK+IgCAFQgpAahHAZIgGACQiEAuiNAAIghAAg");
		this.shape_45.setTransform(697.3,655.2);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#625326").s().p("ABkcsIgFAAQihgHkKhMIgFgBQiEgmhlglIgCgDMgBGgszQgKgSARhYQAjiyCKlkIAAAAIA4AIIAyAGQBSAIBhgFQAugCA1gFQB8gMDhAAQBnAABgACIAJAEQAmBKAnBiIAEAKQBPDLAHCHIABALQAFCbg9WcIAAAIQggLaggK9IgCAFQgqAahGAaIgGACQiEAtiNAAIgiAAg");
		this.shape_46.setTransform(697.3,655.2);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#625326").s().p("ABkcsIgGAAQiggHkKhMIgFgBQiEgmhlglIgCgDMgBGgszQgKgSARhYQAjiyCKlkIAAAAIA4AHIAyAGQBSAHBhgEQAugCA1gFQB9gLDgAAQBmAABiACIAIAFQAmBJAnBjIAEAKQBPDLAHCGIABAMQAFCcg9WbIAAAIQggLZggK9IgCAFQgqAahGAaIgGACQiEAtiOAAIghAAg");
		this.shape_47.setTransform(697.3,655.2);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#625326").s().p("ABjcrIgFAAQihgGkKhNIgFgBQiEgmhlglIgCgDMgBGgszQgKgRAShZQAjixCJlkIABgBIA4AIIAyAFQBRAGBigEQAugCA1gEQB+gKDfAAQBlgBBjACIAIAGQAmBJAnBjIAEAKQBPDLAHCGIABAMQAFCfg+WYIAAAIQgfLZghK9IgCAFQgqAahGAZIgGACQiEAuiNAAIgigBg");
		this.shape_48.setTransform(697.3,655.2);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#625326").s().p("ABjcrIgGAAQiggHkKhMIgFgBQiEgmhlglIgCgEMgBGgsyQgKgRAShZQAjixCJlkIABgBIA4AHIAyAFQBQAFBjgEIBkgFQB+gJDfAAQBkgBBjACIAIAGQAmBKAnBiIAEAKQBPDLAHCHIABALQAECig9WVIAAAIQgfLZghK+IgDAEQgpAahHAZIgGACQiDAuiOAAIghgBg");
		this.shape_49.setTransform(697.3,655.2);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#625326").s().p("ABjcrIgGAAQiggHkKhMIgFgBQiEgmhlglIgCgEMgBGgsyQgKgRAShZQAjixCJlkIABgBIA4AHIAyAEQBQAFBjgEQAtgCA3gDQB/gIDeAAQBjgBBlACIAIAHQAlBJAnBjIAEAKQBPDLAHCGIABAMQAECjg9WUIAAAIQgfLYghK+IgDAEQgpAahHAZIgGACQiEAuiNAAIghgBg");
		this.shape_50.setTransform(697.3,655.2);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#625326").s().p("ABicrIgFAAQihgHkJhMIgFgBQiFgmhkglIgCgEMgBGgsyQgKgRAShZQAjixCJlkIABgBIA4AGIAyAEQBPAEBkgDIBkgFQCAgIDdABIDIABIAIAHQAlBKAnBiIAEAKQBPDLAHCHIABAMQAEClg9WRIAAAIQgfLZghK9IgDAEQgqAahGAaIgGACQiDAtiOAAIgigBg");
		this.shape_51.setTransform(697.3,655.2);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#625326").s().p("ABicrIgGAAQiggHkKhMIgFgBQiEgmhlglIgBgEMgBGgsyQgKgRAShZQAjixCJlkIABgBIA4AGIAyADQBPAEBkgEIBkgEQCBgHDcABIDJABIAHAIQAmBJAnBjIAEAKQBODLAHCGIABAMQAECog9WOIAAAIQgfLZghK9IgDAEQgqAahGAaIgGACQiEAtiNAAIgigBg");
		this.shape_52.setTransform(697.3,655.2);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#625326").s().p("ABicrIgGAAQiggHkKhMIgFgBQiEgmhlglIgBgEMgBGgsyQgKgRAShZQAjixCJlkIABgBIA4AFIAzADQBNADBmgDIBkgEQCBgGDcABIDJABIAGAJQAmBJAnBiIAEAKQBPDMAGCGIABAMQAECqg9WMIAAAIQgfLZghK9IgDAEQgqAahHAZIgGACQiCAtiMAAIgkgBg");
		this.shape_53.setTransform(697.3,655.2);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#625326").s().p("ABhcrIgFAAQihgHkJhMIgFgBQiEgmhlglIgBgFMgBGgsxQgKgRAShZQAjixCJlkIAAgBIA5AFIAzACQBMADBngEIBkgDQCCgFDbABIDJABIAHAJQAlBKAnBiIAEAKQBPDLAGCGIABANQAECsg9WJIAAAIQgfLZghK9IgEAEQgqAahGAZIgGACQiCAtiNAAIgkgBg");
		this.shape_54.setTransform(697.3,655.2);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#625326").s().p("ABhcrIgFAAQihgHkKhMIgFgBQiEgnhkgkIgBgFMgBGgsxQgKgRAShZQAjixCJlkIAAgBIA5AEIAzACQBMACBngDIBkgDQCDgEDaABIDKABIAGAKQAmBJAmBiIAEAKQBPDMAGCGIABAMQAECvg9WHIAAAIQgfLYghK9IgEAEQgqAahGAZIgGACQiCAtiNAAIgkgBg");
		this.shape_55.setTransform(697.3,655.2);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#625326").s().p("ABhcrIgGAAQiggHkKhMIgFgBQiEgnhkglIgBgEMgBGgsxQgKgRAShZQAjixCJlkIAAgBIA5AEIAzABQBLACBogDIBlgDQCDgDDZABIDKABIAGAKQAmBKAmBiIAEAKQBPDLAGCGIABANQAECxg9WEIAAAIQgfLZghK9IgEADQgqAahHAZIgGACQiCAtiMAAIgkgBg");
		this.shape_56.setTransform(697.3,655.2);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#625326").s().p("ABhcsIgGAAQiggIkKhMIgFgBQiEgmhlglIAAgFMgBGgswQgKgSAShYQAjiyCJljIAAgBIA5ADIAzABQBLABBogDIBlgCQCEgDDYABIDLACIAFAKQAmBKAnBiIAEAKQBODLAGCGIABANQADCzg8WCIAAAIQgfLYghK9IgEAEQgqAahHAZIgGACQiCAsiMAAIgkAAg");
		this.shape_57.setTransform(697.3,655.2);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#625326").s().p("ABhcsQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIA4ACQBWACCRgEQC4gFHUAFQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_58.setTransform(697.3,655.2);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#625326").s().p("ABicrIgPgBQifgJkChKIgNgEQh/glhigjIAAgMMgBGgspQgKgSARhXIAAgBQAjixCJljIABgCIA4ACQBDACBigCIBCgBQB5gCDhABQBwABCIgBIA4AAIAOAZQAiBEAjBYIAKAaQBJDAAGCBIAAAhQABDhg5VAIgBAWQgfLRggK3QgGAFgIAEQgnAXhAAWIgPAFQh/AqiIAAIgiAAg");
		this.shape_59.setTransform(697.3,655.3);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#625326").s().p("ABicrIgPgBQifgIkBhKIgNgEQh/glhigkIgBgLMgBGgsqQgKgSARhXIAAgBQAjixCJljIABgCIA4ACQBEACBhgBIBCgBQB+gBDbABQByABCGgBIA4gBIAOAWQAiBFAjBXIAKAbQBJDAAHCBIAAAgQABDcg5VGIgBAVQgfLSggK3IgNAJQgoAYg/AWIgPAFQh/AqiIAAIgjAAg");
		this.shape_60.setTransform(697.3,655.3);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#625326").s().p("ABjcrIgPgBQifgIkChKIgNgEQh/glhhgkIgCgKMgBGgsrQgKgSARhXIAAgBQAjixCJlkIABgBIA5ACQBEADBggBIBCgBQCDgBDVACQBzABCEgCIA4gCIAQAVQAiBEAjBYIAKAaQBJDAAHCCIAAAgQACDWg6VMIgBAVQgfLSggK3IgMAKQgoAXg/AXIgPAFQiBAqiJAAIggAAg");
		this.shape_61.setTransform(697.3,655.3);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#625326").s().p("ABkcrIgPgBQifgIkChKIgNgEQh/glhigjIgCgLMgBGgsrQgKgSARhXIAAgBQAjixCJlkIABgBIA5ADQBFACBfgBIBCAAIFXACQB1ABCCgDIA4gCIAQATQAiBEAjBYIAKAaQBKDAAGCBIABAgQACDSg6VQIgBAWQgfLSggK3IgLAKQgoAYg/AWIgQAGQiAAqiJAAIggAAg");
		this.shape_62.setTransform(697.3,655.3);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#625326").s().p("ABlcrIgPgBQifgIkChKIgNgEQh/glhigjIgDgKMgBGgssQgKgSARhYIAAAAQAjiyCJljIABgBIA5ADQBFACBfAAIBCAAIFWADQB2ACCBgFIA4gDIAQARQAjBFAiBXIALAaQBJDAAHCCIABAfQACDNg6VWIgBAWQgfLSggK4IgLAKQgnAXhAAXIgPAFQiAAriKAAIgfAAg");
		this.shape_63.setTransform(697.3,655.3);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#625326").s().p("ABlcrIgPgBQiegIkDhJIgNgEQh/glhigkIgDgJMgBGgstQgKgSARhYIAAAAQAjiyCJljIABgBIA5ADQBGACBeABIBCAAIFVAEQB4ACB/gGIA3gDIASAPQAiBEAjBYIAKAaQBKDAAHCBIABAfQACDIg6VcIgBAWQgfLSggK4IgKALQgnAXhAAXIgPAFQiBAriJAAIggAAg");
		this.shape_64.setTransform(697.3,655.3);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#625326").s().p("ABmcrIgPgBQiegHkDhKIgNgEQh/glhigkIgEgJMgBGgstQgKgSARhYIAAAAQAjiyCJljIABgBIA5ADQBHADBdAAIBCABIFUAFQB5ACB+gHIA3gEIASANQAiBFAjBXIALAbQBJC/AICCIABAfQADDDg7VhIgBAWQgfLSggK4IgJALQgnAYhAAXIgPAFQiBAriKAAIgfAAg");
		this.shape_65.setTransform(697.3,655.3);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#625326").s().p("ABncrIgPgBQifgHkDhKIgNgEQh/glhigkIgFgIMgBGgsuQgKgSAShYIAAAAQAjiyCJljIABgBIA5ADQBIADBcABIBBABQCaADC6ADQB6ADB8gIIA3gFIATALQAiBEAjBYIALAaQBJDAAJCCIABAeQADC+g7VnIgBAWQgfLSggK4IgJAMQgnAXhAAXIgPAGQiBAriLAAIgdAAg");
		this.shape_66.setTransform(697.3,655.3);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#625326").s().p("ABncrIgPgBQiegHkDhKIgNgEQh/glhigjIgGgJMgBGgsuQgKgSAShYIAAAAQAjiyCJljIABgBIA5ADQBJADBbABIBBACIFTAHQB8ADB6gJIA2gGIAUAKQAjBEAjBYIAKAaQBKC/AJCCIABAeQADC6g7VrIgBAXQgfLSggK4IgIAMQgnAYhAAXIgPAFQiCAsiLAAIgdAAg");
		this.shape_67.setTransform(697.3,655.3);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#625326").s().p("ABpcrIgPgBQifgHkDhKIgNgEQh/glhigjIgGgIMgBGgsvQgKgSARhYIAAAAQAjiyCJljIACgBIA4ADICkAFIBBABQCkAGCuACQB+AEB5gKIA2gGIAUAHQAiBEAkBYIAKAbQBKC/AJCCIABAdQAEC1g8VxIgBAWQgfLTggK4IgHANQgnAYhAAXIgPAFQiDAsiMAAIgaAAg");
		this.shape_68.setTransform(697.3,655.3);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#625326").s().p("ABpcrIgPgBQiegHkDhJIgNgEQiAglhigkIgGgHMgBGgswQgKgSARhYIAAAAQAjiyCJljIACgBIA4ADQBLAEBZACIBBABQCoAGCpADQCAAEB3gLIA1gHIAVAGQAjBEAjBYIAKAaQBLDAAJCBIABAeQAECvg8V3IgBAWQgfLTggK4IgGANQgnAYhAAXIgPAGQiDAsiNAAIgaAAg");
		this.shape_69.setTransform(697.3,655.3);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#625326").s().p("ABqcrIgPgBQiegHkEhJIgNgEQh/glhigkIgHgHMgBGgswQgKgSARhYIAAAAQAjiyCJlkIACAAIA5ADICjAGIBBACQCtAHCjADQCBAFB1gNIA2gHIAWAEQAiBDAkBZIAKAaQBKC/AKCCIABAdQAECrg8V8IgBAWQgfLTggK5IgFANQgnAYhAAXIgPAGQiEAsiOAAIgYAAg");
		this.shape_70.setTransform(697.3,655.3);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#625326").s().p("ABrcrIgPgBQiegGkEhKIgNgEQh/glhigkIgIgGMgBGgsxQgKgSARhYIAAAAQAjiyCJlkIACAAIA5ADQBMAEBXADIBBACQCxAICeADQCDAFBzgOQAegDAXgFIAXACQAjBEAjBYIAKAaQBLDAAKCCIABAcQAFCmg9WCIgBAWQgfLTggK5IgFANQgmAYhAAYIgPAFQiFAtiOAAIgXAAg");
		this.shape_71.setTransform(697.3,655.3);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#625326").s().p("ABscrIgPgBQiegGkEhKIgNgEQiAglhigjIgIgGMgBGgsyQgKgSARhYIAAAAQAjiyCJlkIACAAIA5ADICjAIIBBACQC1AJCZADQCEAFBygPQAegEAXgEIAXAAQAjBDAkBZIAKAaQBKC/ALCCIABAcQAFChg9WHIgBAXQgfLTggK5IgEAOQgmAYhAAXIgQAGQiEAtiOAAIgXAAg");
		this.shape_72.setTransform(697.3,655.3);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#625326").s().p("ABtcrIgPAAQiegHkEhKIgNgEQiAglhigjIgJgGMgBGgsyQgKgSARhYQAjiyCKlkIABAAIA5ADICjAIIBBADQC6AJCUAEQCFAGBwgQQAegFAWgFIAYgCQAjBEAkBYIAKAbQBLC/ALCCIABAcQAFCcg8WMIgBAXQgfLTggK5IgEAPQgnAYhAAXIgPAGQiEAtiOAAIgXAAg");
		this.shape_73.setTransform(697.3,655.3);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#625326").s().p("ABtcrIgPAAQidgHkFhJIgNgEQh/glhjgkIgJgFMgBGgszQgKgSARhYQAjiyCKlkIABAAIA5AEICjAIIBBADQC+AKCPAEQCGAGBvgRQAegFAWgFQAPgCAKgCQAjBEAjBYIALAaQBLC/AKCCIACAcQAFCXg8WSIgBAXQgfLTggK5IgDAPQgnAYhAAYIgPAGQiFAtiOAAIgXAAg");
		this.shape_74.setTransform(697.3,655.3);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#625326").s().p("ABucrIgPAAQidgHkFhJIgNgEQiAglhigkIgKgFMgBGgszQgKgSARhYQAjiyCKlkIACAAIA4AEICjAIIBBAEQDDALCJAEQCIAGBtgSQAegFAWgGIAZgFQAjBDAkBZIAKAaQBLC/ALCCIACAbQAGCTg9WXIgBAXQgfLTggK5IgDAQQgmAYhAAXIgPAGQiGAuiQAAIgUAAg");
		this.shape_75.setTransform(697.3,655.3);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#625326").s().p("ABvcrIgPAAQiegGkEhKIgNgEQiAglhigjIgLgFMgBGgs0QgKgSARhYQAjiyCKlkIACAAIA4AEICjAJIBBAEQDIAMCDAEQCJAGBsgTQAegFAVgGQAQgEAKgEQAjBEAkBYIALAbQBLC+ALCDIACAaQAGCOg9WcIgBAXQgfLUggK6IgCAPQgmAZhAAXIgQAGQiGAuiPAAIgUAAg");
		this.shape_76.setTransform(697.3,655.3);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDYAeQD1AaCOgWQB3gSB5gKIBggGQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_77.setTransform(697.3,655.3);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDSAeQDvAZCOgWQB3gSB+gKQBAgEAngBQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_78.setTransform(697.3,655.3);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDMAdQDpAZCOgWQB3gSCEgJQBCgEArgBQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_79.setTransform(697.3,655.3);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDGAdQDiAZCOgWQB3gTCLgJQBFgEAuAAQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_80.setTransform(697.3,655.3);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIC/AdQDdAYCOgWQB3gTCRgIQBIgEAxAAQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_81.setTransform(697.3,655.3);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIC5AcQDXAYCOgWQB3gTCXgHQBLgEA0AAQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_82.setTransform(697.3,655.3);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICzAcQDQAXCOgWQB3gTCdgHQBPgDA3AAQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_83.setTransform(697.3,655.3);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICtAbQDKAXCOgWQB3gTCjgGQBSgEA6ABQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_84.setTransform(697.3,655.3);

		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICnAbQDDAWCOgWQB3gTCqgGQBVgDA9ABQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_85.setTransform(697.3,655.3);

		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICgAaQC+AWCOgWQB3gSCwgGQBYgDBAABQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_86.setTransform(697.3,655.3);

		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICaAaQC4AVCOgWQB3gSC2gGQBbgCBDABQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_87.setTransform(697.3,655.3);

		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICUAZQCxAVCOgWQB3gSC9gFQBdgDBHACQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAviQAAIgjgBg");
		this.shape_88.setTransform(697.3,655.3);

		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICOAZQCrAUCPgWQB2gSDCgFQBhgCBKACQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAviQAAIgjgBg");
		this.shape_89.setTransform(697.3,655.3);

		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.f("#625326").s().p("ABhcrQiigGkOhNQiHgnhmgmMgBGgs1QgKgRARhZQAjixCKllICIAZQClAUCPgWQB2gTDIgEQBkgCBNACQAoBOApBpQBTDSAGCJQAGCKg+W4QggLcggLBQgrAchLAaQiFAviQAAIgjgBg");
		this.shape_90.setTransform(697.3,655.2);

		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.f("#625326").s().p("ABhcrQiigGkOhNQiHgnhmgmMgBGgs1QgKgRARhZQAjixCKllICBAZQCfATCPgWQB2gTDPgDQBngCBQACQAoBOApBpQBTDSAGCJQAGCKg+W4QggLcggLBQgrAchLAaQiFAviQAAIgjgBg");
		this.shape_91.setTransform(697.3,655.2);

		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.f("#625326").s().p("ABhcrQiigGkOhNQiHgnhmgmMgBGgs1QgKgRARhZQAjixCKllIB7AYQCZATCPgWQB2gSDVgDQBqgCBTACQAoBOApBpQBTDSAGCJQAGCKg+W4QggLcggLBQgrAchLAaQiFAviQAAIgjgBg");
		this.shape_92.setTransform(697.3,655.2);

		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.f("#625326").s().p("ABhcrQiigGkOhNQiHgnhmgmMgBGgs1QgKgRARhZQAjixCKllIB1AYQCSASCPgWQB2gSDcgDQBtgBBWACQAoBOApBpQBTDSAGCJQAGCKg+W4QggLcggLBQgrAchLAaQiFAviQAAIgjgBg");
		this.shape_93.setTransform(697.3,655.2);

		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.f("#625326").s().p("ABhcsQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIBsAWQCJARCPgVQB3gSDkgCQBygBBaADQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_94.setTransform(697.3,655.2);

		this.shape_95 = new cjs.Shape();
		this.shape_95.graphics.f("#625326").s().p("ABhcrQiigGkOhNQiHgnhmgmMgBGgs1QgKgRARhZQAjixCKllIBvAWQCNASCPgVQB3gRDhgCQBwgCBYACQAoBOApBpQBTDSAGCJQAGCKg+W4QggLcggLBQgrAchLAaQiFAviQAAIgjgBg");
		this.shape_95.setTransform(697.3,655.2);

		this.shape_96 = new cjs.Shape();
		this.shape_96.graphics.f("#625326").s().p("ABhcrQiigGkOhNQiHgnhmgmMgBGgs1QgKgRARhZQAjixCKllIBzAWQCQARCPgTQB4gRDcgDQBugCBXACQAoBOApBpQBTDSAGCJQAGCKg+W4QggLcggLBQgrAchLAaQiFAviQAAIgjgBg");
		this.shape_96.setTransform(697.3,655.2);

		this.shape_97 = new cjs.Shape();
		this.shape_97.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIB2AVQCTASCQgTQB4gQDZgEQBsgCBVACQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAviQAAIgjgBg");
		this.shape_97.setTransform(697.3,655.3);

		this.shape_98 = new cjs.Shape();
		this.shape_98.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIB5AVQCXARCPgSQB5gPDWgEQBqgCBTABQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_98.setTransform(697.3,655.3);

		this.shape_99 = new cjs.Shape();
		this.shape_99.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIB9AVQCaARCPgRQB5gODSgFQBpgDBRABQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_99.setTransform(697.3,655.3);

		this.shape_100 = new cjs.Shape();
		this.shape_100.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICAAVQCdARCQgRQB6gNDOgGQBngCBPAAQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_100.setTransform(697.3,655.3);

		this.shape_101 = new cjs.Shape();
		this.shape_101.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICDAUQChARCPgPQB7gNDLgGQBlgDBNAAQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_101.setTransform(697.3,655.3);

		this.shape_102 = new cjs.Shape();
		this.shape_102.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICHAUQCkARCPgPQB7gMDIgGQBjgEBLAAQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_102.setTransform(697.3,655.3);

		this.shape_103 = new cjs.Shape();
		this.shape_103.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICKAUQCnARCQgOQB8gMDDgHQBigDBJgBQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_103.setTransform(697.3,655.3);

		this.shape_104 = new cjs.Shape();
		this.shape_104.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICNAUQCrAQCQgNQB8gKDAgIQBggEBHgBQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_104.setTransform(697.3,655.3);

		this.shape_105 = new cjs.Shape();
		this.shape_105.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICRATQCuARCPgMQB9gKC9gIICjgGQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_105.setTransform(697.3,655.3);

		this.shape_106 = new cjs.Shape();
		this.shape_106.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICUATQCxARCPgMQB+gJC5gJICggGQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_106.setTransform(697.3,655.3);

		this.shape_107 = new cjs.Shape();
		this.shape_107.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICXATQC1ARCPgLQB/gJC1gJICcgHQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_107.setTransform(697.3,655.3);

		this.shape_108 = new cjs.Shape();
		this.shape_108.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICbATQC4AQCOgKIEygRICYgIQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_108.setTransform(697.3,655.3);

		this.shape_109 = new cjs.Shape();
		this.shape_109.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICeASQC7ARCPgJIEugSICVgIQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_109.setTransform(697.3,655.3);

		this.shape_110 = new cjs.Shape();
		this.shape_110.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIChASQC/ARCPgJQCBgGCqgLICRgJQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_110.setTransform(697.3,655.3);

		this.shape_111 = new cjs.Shape();
		this.shape_111.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIClASQDCAQCPgHQCBgGCngLICNgKQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_111.setTransform(697.3,655.3);

		this.shape_112 = new cjs.Shape();
		this.shape_112.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICoASQDFAQCPgHQCCgFCkgLICJgLQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_112.setTransform(697.3,655.3);

		this.shape_113 = new cjs.Shape();
		this.shape_113.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICrARQDJARCPgGQCCgECggNQBQgGA2gFQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_113.setTransform(697.3,655.3);

		this.shape_114 = new cjs.Shape();
		this.shape_114.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICvARQDMAQCPgFQCDgDCcgNICCgMQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_114.setTransform(697.3,655.3);

		this.shape_115 = new cjs.Shape();
		this.shape_115.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkICyARQDPAQCPgEQCEgDCZgNQBMgHAygGQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_115.setTransform(697.3,655.3);

		this.shape_116 = new cjs.Shape();
		this.shape_116.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIC1ARQDTAQCPgEQCEgCCVgOQBLgHAwgGQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_116.setTransform(697.3,655.3);

		this.shape_117 = new cjs.Shape();
		this.shape_117.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIC5AQQDWARCPgDQCFgCCRgOQBJgHAugHQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_117.setTransform(697.3,655.3);

		this.shape_118 = new cjs.Shape();
		this.shape_118.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIC8AQQDZAQCQgCQCFAACOgPQBHgIAsgHQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_118.setTransform(697.3,655.3);

		this.shape_119 = new cjs.Shape();
		this.shape_119.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIC/AQQDdAQCPgBQCGAACKgQQBGgHAqgIQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_119.setTransform(697.3,655.3);

		this.shape_120 = new cjs.Shape();
		this.shape_120.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDDAQQDfAQCQgBQCGABCHgQQBDgIApgIQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_120.setTransform(697.3,655.3);

		this.shape_121 = new cjs.Shape();
		this.shape_121.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDGAPQDjAQCQABQCHABCDgQQBBgJAngIQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_121.setTransform(697.3,655.3);

		this.shape_122 = new cjs.Shape();
		this.shape_122.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDJAPQDnAQCPABQCIACCAgRQA/gIAlgJQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_122.setTransform(697.3,655.3);

		this.shape_123 = new cjs.Shape();
		this.shape_123.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDNAPQDpAQCQACQCIADB8gSQA+gJAjgJQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_123.setTransform(697.3,655.3);

		this.shape_124 = new cjs.Shape();
		this.shape_124.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDQAPQDtAPCQADQCJAEB4gSQA8gJAhgKQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_124.setTransform(697.3,655.3);

		this.shape_125 = new cjs.Shape();
		this.shape_125.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDTAOQDxAQCQAEQCJAEB1gTQA6gJAfgKQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_125.setTransform(697.3,655.3);

		this.shape_126 = new cjs.Shape();
		this.shape_126.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDXAOQDzAQCQAEQCKAFBxgTQA5gKAdgKQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_126.setTransform(697.3,655.3);

		this.shape_127 = new cjs.Shape();
		this.shape_127.graphics.f("#625326").s().p("ABhcrQiigGkOhOQiHgnhmglMgBGgs1QgKgSARhYQAjiyCKlkIDaAOQD2AQCRAFQCKAGBugUQA3gKAbgLQAoBNApBpQBTDSAGCKQAGCJg+W4QggLdggLBQgrAbhLAbQiFAuiQAAIgjAAg");
		this.shape_127.setTransform(697.3,655.3);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape}]},1).wait(1));

		// wine-shine
		this.instance_2 = new lib.bottle();
		this.instance_2.parent = this;
		this.instance_2.setTransform(623,261);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(622,261,151,589);


	(lib._2_food = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// flate
		this.instance = new lib.flate();
		this.instance.parent = this;
		this.instance.setTransform(219.5,670,1,1,0,0,0,216,93);

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

		// FlashAICB
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AitQ6MABBghLQCwgMBqgdMgCQAhdQg2ANgkAFQgpAGgnAAIghgBg");
		this.shape.setTransform(581,510);

		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AisQ6MABAghLQCvgMBqgdMgCPAhdQg1ANgmAFQgoAGgmAAIghgBg");
		this.shape_1.setTransform(580.9,510);
		this.shape_1._off = true;

		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AitQ6MABBghLQCwgMBqgdMgCQAhdQg2ANglAFQgoAGgmAAIgigBg");
		this.shape_2.setTransform(580.8,510);
		this.shape_2._off = true;

		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("rgba(255,255,255,0.2)").s().p("AitQ6MABBghLQCvgMBqgdMgCPAhdQg2ANgkAFQgpAGgnAAIghgBg");
		this.shape_3.setTransform(580.7,510);
		this.shape_3._off = true;

		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AisQ6MABAghLQCwgMBpgdMgCPAhdQg1ANgmAFQgoAGgmAAIghgBg");
		this.shape_4.setTransform(580.7,510);
		this.shape_4._off = true;

		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("rgba(255,255,255,0.2)").s().p("AitQ6MABBghLQCvgMBrgdMgCQAhdQg1ANglAFQgpAGgnAAIghgBg");
		this.shape_5.setTransform(580.6,510);
		this.shape_5._off = true;

		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("AisQ6MABAghLQCvgMBqgdMgCPAhdQg1ANglAFQgpAGgmAAIghgBg");
		this.shape_6.setTransform(580.4,510);
		this.shape_6._off = true;

		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("rgba(255,255,255,0.2)").s().p("AisQ6MABAghLQCwgMBqgdMgCQAhdQg2ANglAFQgoAGgmAAIghgBg");
		this.shape_7.setTransform(580.3,510);

		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("rgba(255,255,255,0.2)").s().p("AitQ6MABBghLQCvgMBrgdMgCQAhdQg2ANgkAFQgpAGgnAAIghgBg");
		this.shape_8.setTransform(580.1,510);
		this.shape_8._off = true;

		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("rgba(255,255,255,0.2)").s().p("AitQ6MABBghLQCvgMBqgdMgCPAhdQg1ANglAFQgpAGgnAAIghgBg");
		this.shape_9.setTransform(579.8,510);

		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("rgba(255,255,255,0.2)").s().p("AitQ6MABBghLQCwgMBqgdMgCQAhdQg2ANgkAFQgpAGgmAAIgigBg");
		this.shape_10.setTransform(577.3,510);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{x:580.3}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_9,p:{x:579.8}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_9,p:{x:577.6}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_10,p:{x:577.3}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_10,p:{x:577.3}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_9,p:{x:577.6}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_7,p:{x:578.1}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_10,p:{x:579.1}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_10,p:{x:579.5}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_9,p:{x:579.8}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_7,p:{x:580.3}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:true},1).wait(3).to({_off:false,x:580.9},0).wait(1).to({_off:true},1).wait(7).to({_off:false,x:580.5},0).to({_off:true},1).wait(1).to({_off:false,x:580.4},0).to({_off:true},1).wait(18).to({_off:false,x:578.7},0).to({_off:true},1).wait(3).to({_off:false,x:578.3},0).to({_off:true},1).wait(6).to({_off:false,x:577.7},0).to({_off:true},1).wait(44).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:578.2},0).to({_off:true},1).wait(20).to({_off:false,x:580},0).to({_off:true},1).wait(9).to({_off:false,x:580.5},0).to({_off:true},1).wait(8).to({_off:false,x:580.9},0).wait(2).to({_off:true},1).wait(3).to({_off:false,x:581},0).wait(5));
		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(2).to({_off:true},1).wait(2).to({_off:false,x:580.8},0).wait(1).to({_off:true},1).wait(6).to({_off:false,x:580.5},0).to({_off:true},1).wait(6).to({_off:false,x:580},0).to({_off:true},1).wait(3).to({_off:false,x:579.7},0).wait(1).to({x:579.6},0).wait(1).to({x:579.5},0).to({_off:true},1).wait(3).to({_off:false,x:579},0).to({_off:true},1).wait(3).to({_off:false,x:578.6},0).to({_off:true},1).wait(3).to({_off:false,x:578.2},0).to({_off:true},1).wait(4).to({_off:false,x:577.8},0).to({_off:true},1).wait(5).to({_off:false,x:577.4},0).to({_off:true},1).wait(1).to({_off:false,x:577.3},0).to({_off:true},1).wait(1).to({_off:false,x:577.2},0).to({_off:true},1).wait(8).to({_off:false,x:577},0).wait(7).to({_off:true},1).wait(9).to({_off:false,x:577.2},0).to({_off:true},1).wait(1).to({_off:false,x:577.3},0).to({_off:true},1).wait(1).to({_off:false,x:577.4},0).to({_off:true},1).wait(6).to({_off:false,x:577.8},0).to({_off:true},1).wait(5).to({_off:false,x:578.2},0).to({_off:true},1).wait(3).to({_off:false,x:578.6},0).wait(1).to({x:578.7},0).wait(1).to({x:578.8},0).to({_off:true},1).wait(8).to({_off:false,x:579.6},0).wait(1).to({x:579.7},0).to({_off:true},1).wait(4).to({_off:false,x:580},0).to({_off:true},1).wait(6).to({_off:false,x:580.5},0).wait(1).to({_off:true},1).wait(7).to({_off:false,x:580.8},0).wait(1).to({_off:true},1).wait(3).to({_off:false,x:580.9},0).wait(2).to({_off:true},1).wait(5));
		this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(11).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false,x:577.6},0).to({_off:true},1).wait(8).to({_off:false,x:577.2},0).to({_off:true},1).wait(22).to({_off:false},0).wait(1).to({_off:true},1).wait(8).to({_off:false,x:577.6},0).to({_off:true},1).wait(16).to({_off:false,x:579},0).to({_off:true},1).wait(4).to({_off:false,x:579.4},0).to({_off:true},1).wait(22).to({_off:false,x:580.8},0).to({_off:true},1).wait(13));
		this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(12).to({_off:false},0).to({_off:true},1).wait(26).to({_off:false,x:578.5},0).to({_off:true},1).wait(4).to({_off:false,x:578},0).to({_off:true},1).wait(52).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:578.5},0).to({_off:true},1).wait(21).to({_off:false,x:580.3},0).to({_off:true},1).wait(8).to({_off:false,x:580.7},0).wait(1).to({_off:true},1).wait(14));
		this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(13).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:580.6},0).to({_off:true},1).wait(5).to({_off:false,x:580.2},0).to({_off:true},1).wait(5).to({_off:false,x:579.8},0).to({_off:true},1).wait(18).to({_off:false,x:577.9},0).to({_off:true},1).wait(4).to({_off:false,x:577.5},0).to({_off:true},1).wait(9).to({_off:false,x:577.1},0).wait(1).to({_off:true},1).wait(14).to({_off:false},0).wait(1).to({_off:true},1).wait(10).to({_off:false,x:577.5},0).to({_off:true},1).wait(5).to({_off:false,x:577.9},0).to({_off:true},1).wait(5).to({_off:false,x:578.3},0).wait(1).to({x:578.4},0).to({_off:true},1).wait(4).to({_off:false,x:578.9},0).to({_off:true},1).wait(4).to({_off:false,x:579.3},0).to({_off:true},1).wait(4).to({_off:false,x:579.8},0).to({_off:true},1).wait(4).to({_off:false,x:580.1},0).to({_off:true},1).wait(1).to({_off:false,x:580.2},0).to({_off:true},1).wait(6).to({_off:false,x:580.6},0).to({_off:true},1).wait(1).to({_off:false,x:580.7},0).to({_off:true},1).wait(16));
		this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(14).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false,x:580.2},0).to({_off:true},1).wait(8).to({_off:false,x:579.4},0).to({_off:true},1).wait(8).to({_off:false,x:578.4},0).to({_off:true},1).wait(4).to({_off:false,x:577.9},0).to({_off:true},1).wait(13).to({_off:false,x:577.1},0).wait(1).to({_off:true},1).wait(18).to({_off:false},0).wait(1).to({_off:true},1).wait(15).to({_off:false,x:577.9},0).to({_off:true},1).wait(26).to({_off:false,x:580.2},0).to({_off:true},1).wait(8).to({_off:false,x:580.6},0).to({_off:true},1).wait(17));
		this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(19).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false,x:579.9},0).to({_off:true},1).wait(17).to({_off:false,x:578.1},0).to({_off:true},1).wait(48).to({_off:false,x:577.7},0).to({_off:true},1).wait(26).to({_off:false,x:579.9},0).to({_off:true},1).wait(7).to({_off:false,x:580.4},0).to({_off:true},1).wait(22));
		this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(23).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false,x:579.3},0).wait(1).to({x:579.2},0).to({_off:true},1).wait(1).to({_off:false,x:578.9},0).wait(1).to({x:578.8},0).to({_off:true},1).wait(15).to({_off:false,x:577.5},0).to({_off:true},1).wait(1).to({_off:false,x:577.4},0).to({_off:true},1).wait(8).to({_off:false,x:577},0).wait(2).to({_off:true},1).wait(8).to({_off:false},0).wait(2).to({_off:true},1).wait(9).to({_off:false,x:577.4},0).to({_off:true},1).wait(1).to({_off:false,x:577.5},0).to({_off:true},1).wait(21).to({_off:false,x:579.2},0).wait(1).to({x:579.3},0).to({_off:true},1).wait(38));

		// bubble
		this.instance_1 = new lib.beer_bubble();
		this.instance_1.parent = this;
		this.instance_1.setTransform(546.1,591.6,0.324,0.324,0,0,0,4.7,4.7);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).to({regX:4.5,regY:4.5,scaleX:0.81,scaleY:0.81,y:531.8},22).to({regX:4.7,x:546.2,y:499.5},12).to({regY:4.7,scaleX:0.32,scaleY:0.32,x:546.1,y:470.1},11).to({_off:true},1).wait(2));

		// bubble
		this.instance_2 = new lib.beer_bubble();
		this.instance_2.parent = this;
		this.instance_2.setTransform(546.1,591.6,0.324,0.324,0,0,0,4.7,4.7);
		this.instance_2._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({regX:4.5,regY:4.5,scaleX:0.81,scaleY:0.81,y:531.8},22).to({regX:4.7,x:546.2,y:499.5},12).to({regY:4.7,scaleX:0.32,scaleY:0.32,x:546.1,y:470.1},11).to({_off:true},1).wait(19));

		// bubble
		this.instance_3 = new lib.beer_bubble();
		this.instance_3.parent = this;
		this.instance_3.setTransform(508.1,603.8,0.4,0.4,0,0,0,4.5,4.5);
		this.instance_3._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(72).to({_off:false},0).to({scaleX:1,scaleY:1,y:530.1},22).to({regX:4.6,y:490.2},12).to({regX:4.5,scaleX:0.4,scaleY:0.4,y:453.8},11).to({_off:true},1).wait(32));

		// bubble
		this.instance_4 = new lib.beer_bubble();
		this.instance_4.parent = this;
		this.instance_4.setTransform(590.2,608.7,0.431,0.431,0,0,0,5.2,4.9);
		this.instance_4._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({_off:false},0).to({regX:4.7,regY:4.7,scaleX:1.08,scaleY:1.08,y:529.3},22).to({regX:4.8,regY:4.8,y:486.3},12).to({regX:5.2,regY:4.9,scaleX:0.43,scaleY:0.43,y:447},11).to({_off:true},1).wait(51));

		// bubble
		this.instance_5 = new lib.beer_bubble();
		this.instance_5.parent = this;
		this.instance_5.setTransform(570.1,575.9,0.257,0.257,0,0,0,5,4.9);
		this.instance_5._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58).to({_off:false},0).to({regX:4.6,regY:4.6,scaleX:0.64,scaleY:0.64,y:528.6},22).to({regX:4.8,regY:4.8,y:503.1},12).to({regX:5,regY:4.9,scaleX:0.26,scaleY:0.26,y:479.7},11).to({_off:true},1).wait(46));

		// bubble
		this.instance_6 = new lib.beer_bubble();
		this.instance_6.parent = this;
		this.instance_6.setTransform(546.1,591.6,0.324,0.324,0,0,0,4.7,4.7);
		this.instance_6._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({_off:false},0).to({regX:4.5,regY:4.5,scaleX:0.81,scaleY:0.81,y:531.8},22).to({regX:4.7,x:546.2,y:499.5},12).to({regY:4.7,scaleX:0.32,scaleY:0.32,x:546.1,y:470.1},11).to({_off:true},1).wait(63));

		// bubble
		this.instance_7 = new lib.beer_bubble();
		this.instance_7.parent = this;
		this.instance_7.setTransform(570.1,575.9,0.257,0.257,0,0,0,5,4.9);
		this.instance_7._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).to({regX:4.6,regY:4.6,scaleX:0.64,scaleY:0.64,y:528.6},22).to({regX:4.8,regY:4.8,y:503.1},12).to({regX:5,regY:4.9,scaleX:0.26,scaleY:0.26,y:479.7},11).to({_off:true},1).wait(70));

		// bubble
		this.instance_8 = new lib.beer_bubble();
		this.instance_8.parent = this;
		this.instance_8.setTransform(508.1,603.8,0.4,0.4,0,0,0,4.5,4.5);
		this.instance_8._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,y:530.1},22).to({regX:4.6,y:490.2},12).to({regX:4.5,scaleX:0.4,scaleY:0.4,y:453.8},11).to({_off:true},1).wait(78));

		// bubble
		this.instance_9 = new lib.beer_bubble();
		this.instance_9.parent = this;
		this.instance_9.setTransform(546.1,591.6,0.324,0.324,0,0,0,4.7,4.7);
		this.instance_9._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({regX:4.5,regY:4.5,scaleX:0.81,scaleY:0.81,y:531.8},22).to({regX:4.7,x:546.2,y:499.5},12).to({regY:4.7,scaleX:0.32,scaleY:0.32,x:546.1,y:470.1},11).to({_off:true},1).wait(88));

		// bubble
		this.instance_10 = new lib.beer_bubble();
		this.instance_10.parent = this;
		this.instance_10.setTransform(508.1,603.8,0.4,0.4,0,0,0,4.5,4.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,y:530.1},22).to({regX:4.6,y:490.2},12).to({regX:4.5,scaleX:0.4,scaleY:0.4,y:453.8},11).to({_off:true},1).wait(104));

		// Layer_8
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#FFFFFF").s().p("AjmCGQhagKhhgXQiygpgBg7IAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgIA3ikAoQhWAVhnALQhLAHiaADIgtAAQhoAAhXgJg");
		this.shape_11.setTransform(549.9,427.8);

		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#FFFFFF").s().p("AjmCFQgcgCgcgEQhAgKhDgQIg4gOQg6gRgfgVQgggVgCgZIAAgCIAAgBQAAg6CzgrQCygpD1AAIABAAQB7AABpALIACAAQBmAKBVAUIACABQCrAqAAA6IAAADIgBADIAAADQgHAgg8AaQgoAShCAQIgvAKQhCAOhMAHIgwAEQgvADhCACIhEABIgvABQhnAAhVgKg");
		this.shape_12.setTransform(549.9,427.8);

		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#FFFFFF").s().p("AjnCFIg3gHQhBgIhDgQQgegHgZgHQg6gSgfgUQgggVgCgaIAAgCIAAgBQAAg6CzgqQCygqD1AAIABAAQB7AABpALIACAAQBmAKBVAVIACAAQCrAqAAA6IAAAEIgBACIAAADQgHAgg8AaQgoAShCAPIgvALQhCAOhMAHIgwADQgvAEhCACIhEABIgvAAQhnABhWgKg");
		this.shape_13.setTransform(549.9,427.8);

		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#FFFFFF").s().p("AjnCGIg3gHQhBgJhDgQIg3gOQg6gRgfgVQgggVgCgaIAAgCIAAgBQAAg6CzgqQCygpD1AAIABAAQB7AABpAKIACAAQBmAKBVAVIACABQCqApABA6IAAAEIgBADIAAADQgHAfg8AaQgoARhCAQIgvALQhCANhMAIIgxADQgvADhBACIhEACIgvAAQhoAAhVgIg");
		this.shape_14.setTransform(549.9,427.7);

		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#FFFFFF").s().p("AjnCFIg4gGQhAgJhDgQQgegGgZgIQg7gRgegVQgggVgCgaIAAgCIAAgBQAAg6CzgqQCygpD1AAIABAAQB7AABpAKIACAAQBmAKBVAVIACABQCqApABA6IAAADIgBAEIAAADQgHAeg9AaQgmARhDARIgvAKQhCANhMAIIgxAEQgvADhCACIhDABIgvABIgLAAQhiAAhQgJg");
		this.shape_15.setTransform(549.9,427.7);

		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#FFFFFF").s().p("AjnCFIg4gGQhBgJhCgPIg4gOQg6gRgfgVQgfgVgCgaIAAgCIAAgBQAAg6CzgrQCygpD1AAIABAAQB7AABpALIACAAQBmAKBVAUIACABQCqAqABA5IAAAEIgBADIAAADQgHAfg9AaQgmAQhEARIgvAKQhAANhOAIIgwAEQgvADhCACIhEABIgvABIgLAAQhhAAhQgJg");
		this.shape_16.setTransform(549.9,427.7);

		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#FFFFFF").s().p("AjoCFQgcgCgbgEQhBgJhDgPQgegGgZgIQg6gRgfgVQgfgVgCgaIAAgCIAAgBQAAg6CzgrQCygpD1AAIABAAQB7AABpALIACAAQBmAKBVAUIACABQCqAqABA5IAAAEIgBADIAAADQgHAeg9AaQgmARhEAQIgvALQhAANhOAIIgwADQgvADhCACIhEACIgvAAIgMABQhhAAhQgJg");
		this.shape_17.setTransform(549.9,427.7);

		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#FFFFFF").s().p("AjoCGIg3gHQhBgJhDgOQgegHgZgHQg7gRgegVQgfgWgCgaIAAgCIAAgBQAAg6CzgqQCygqD0AAIACAAQB7AABoALIACAAQBnAKBUAVIACAAQCrAqABA5IAAAEIgBADIAAADQgHAeg9AaQgmAQhEARIgvAKQhAAOhOAHQgVACgcACQgvADhBACIhEACIgvABQhpAAhUgIg");
		this.shape_18.setTransform(549.9,427.7);

		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#FFFFFF").s().p("AjoCFIg4gGQhBgIhCgPQgegGgagIQg6gQgegWQgfgVgCgbIAAgCIAAgBQAAg6CzgqQCygpD0AAIACAAQB7AABoAKIACAAQBnAKBUAVIACABQCrApABA6IAAADIgBADIAAADQgHAfg9AZQgmAQhEARIgvAKQhAANhPAIIgwAEQgvADhCACIhDABIgwABQhoAAhUgIg");
		this.shape_19.setTransform(549.9,427.6);

		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#FFFFFF").s().p("AjoCFIg4gFQhBgJhCgPQgegGgagHQg7gRgegWQgegVgCgbIAAgBIAAgBQAAg7CzgqQCygpD0AAIACAAQB7AABoAKIACAAQBnAKBUAVIACABQCrApABA6IAAADIgBADIAAAEQgHAeg+AZQglAQhFARIgvAKQg/AMhPAIIgwAEQgvAEhCABIhEACIgvABQhpAAhTgIg");
		this.shape_20.setTransform(549.9,427.6);

		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#FFFFFF").s().p("AjpCFIg3gGQhCgIhCgOQgegHgZgHQg7gQgegWQgegWgCgbIAAgBIAAgBQAAg6CzgrQCygpD0AAIACAAQB7AABoALIACAAQBnAKBUAUIACABQCrApABA6IAAAEIgBADIAAADQgGAeg/AZQgkAQhGAQIgvAKQg/ANhPAIIgwAEQgwADhBACIhEACIgvABIgNAAQhhAAhPgIg");
		this.shape_21.setTransform(549.9,427.6);

		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#FFFFFF").s().p("AjpCFQgcgCgbgEQhCgIhCgOQgegGgagHQg6gRgegWQgegVgCgcIAAgBIAAgBQAAg6CzgrQCygpD0AAIACAAQB7AABoALIACAAQBnAKBUAUIACABQCrApABA6IAAADIgBAEIAAADQgGAdg/AaQgkAPhGARIgvAKQg/ANhPAIIgxAEQgvADhBACIhEACIgwAAIgMABQhiAAhOgIg");
		this.shape_22.setTransform(549.9,427.6);

		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#FFFFFF").s().p("AjpCFIg3gFQhCgIhCgOQgegHgagHQg7gQgdgWQgegWgCgbIAAgCIAAgBQAAg6CzgqQCygpD0AAIACAAQB7AABoAKIACAAQBnAKBUAVIACABQCrApABA6IAAADIgBADIAAADQgGAeg/AZQgkAPhGARIgwAKQg+ANhQAIIgwAEQgvADhCACIhDACIgwAAIgNAAQhhAAhOgHg");
		this.shape_23.setTransform(549.9,427.5);

		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#FFFFFF").s().p("AjpCFIg4gFQhCgIhBgOQgegGgagHQg7gRgegWQgdgWgCgbIAAgCIAAgBQAAg6CygqIABAAQCxgpD1AAIABAAQB8AABoAKIACAAQBnAKBUAUIACABQCrAqABA5IAAAEIgBADIAAADQgGAeg/AYQgkAPhHARIgvAKQg+ANhQAIIgwAEQgwAEhBACIhEABIgvABIgOAAQhhAAhNgHg");
		this.shape_24.setTransform(549.9,427.5);

		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#FFFFFF").s().p("AjqCFIg3gFQhCgIhCgOQgegGgZgHQg7gQgegWQgdgWgCgcIAAgCIAAAAQAAg6CygrIABAAQCxgpD1AAIABAAQB8AABoALIACAAQBnAKBUAUIACABQCqApACA6IAAADIgBADIAAADQgGAehAAYQgjAPhHARIgvAKQg+ANhQAIIgxAEQgvAEhBACIhEABIgvABIgOAAQhiAAhNgHg");
		this.shape_25.setTransform(549.9,427.5);

		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#FFFFFF").s().p("AjqCFIg3gFQhDgIhBgNQgegGgagHQg7gQgdgXQgdgWgCgcIAAgCIAAAAQAAg6CygrIABAAQCxgpD1AAIABAAQB8AABoALIACAAQBmAKBVAUIACABQCqApACA6IAAADIgBADIAAADQgGAehAAYQgiAPhIAQIgvALQg+AMhRAJIgwAEQgvADhBACIhEACIgwAAIgOABQhhAAhNgHg");
		this.shape_26.setTransform(549.9,427.5);

		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#FFFFFF").s().p("AjqCFIg3gFQhDgHhBgOQgegGgagHQg7gPgegXQgcgWgCgcIAAgCIAAgBQAAg6CygqIABAAQCxgpD1AAIABAAQB8AABoAKIACAAQBmAKBVAUIACABQCqAqACA5IAAAEIgBADIAAADQgGAdhAAYQgiAPhIAQIgwALQg9AMhRAJIgwAEQgvADhCACIhEACIgvAAIgaAAQhaAAhIgGg");
		this.shape_27.setTransform(549.9,427.4);

		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#FFFFFF").s().p("AjqCFIg3gFQhDgHhBgOIg4gMQg8gQgdgXQgcgWgCgcIAAgCIAAgBQAAg6CygqIABAAQCxgpD1AAIABAAQB8AABoAKIACAAQBmAKBVAUIACABQCqAqACA5IAAAEIgBADIAAADQgGAdhAAYQgiAOhJARIgvAKQg9ANhRAIIgwAEQgwAEhBACIhEABIgvABIgcAAQhaAAhGgGg");
		this.shape_28.setTransform(549.9,427.4);

		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#FFFFFF").s().p("AjrCFIg3gFQhDgHhBgNQgegGgagHQg7gPgdgYQgcgVgCgdIAAgCIAAAAQAAg6CygrIABAAQCxgpD1AAIABAAQB8AABoALIACAAQBmAKBVAUIACABQCqApACA6IAAADIgBADIAAADQgGAdhAAYQgiAOhJARIgvAKQg9AMhRAJIgxAEQgvAEhBACIhEABIgwABIgcAAQhZAAhHgGg");
		this.shape_29.setTransform(549.9,427.4);

		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#FFFFFF").s().p("AjrCFIg3gFQhDgHhBgNQgegGgagGQg7gQgdgXQgcgWgCgdIAAgCIAAAAQAAg6CygrIABAAQCxgpD1AAIABAAQB8AABoALIACAAQBmAKBVAUIACABQCqApACA6IAAADIgBADIAAADQgGAdhBAYQghANhJARIgwALQg8AMhSAIIgwAFQgvADhBACIhEACIgwABIgPAAQhiAAhLgGg");
		this.shape_30.setTransform(549.9,427.4);

		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#FFFFFF").s().p("AjrCFIg3gFQhEgHhAgNQgegFgagHQg8gQgdgXQgbgWgCgdIAAgCIAAAAQAAg6CygrIABAAQCxgpD1AAIABAAQB8AABoALIACAAQBmAKBVAUIACABQCqApACA6IAAADIgBADIAAADQgGAdhBAXQggAOhKARIgwAKQg8AMhSAJIgwAEQgwAEhBACIhEABIgvABIgRABQhgAAhLgGg");
		this.shape_31.setTransform(549.9,427.4);

		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#FFFFFF").s().p("AjrCFIg3gEQhEgHhAgNIg5gMQg7gQgdgXQgbgWgCgeIAAgBIAAgBQAAg6CygqIABAAQCxgpD1AAIABAAQB8AABoAKIACAAQBmAKBVAUIACABQCqAqACA5IAAADIgBADIAAADQgGAdhBAYQggANhLARIgvAKQg7AMhTAJIgwAEQgwAEhBACIhEABIgwABIgRAAQhgAAhKgFg");
		this.shape_32.setTransform(549.9,427.3);

		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#FFFFFF").s().p("AjsCFIg3gFQhDgGhBgNQgegFgagHQg7gPgdgYQgbgWgCgeIAAgBIAAgBQAAg6CygqIABAAQCxgpD1AAIABAAQB8AABoAKIACAAQBmAKBVAUIACABQCqAqACA5IAAADIgBADIAAADQgFAdhCAXQggANhLARIgvALQg7AMhUAIIgwAFQgvADhBACIhEACIgwABIgeAAQhZAAhFgFg");
		this.shape_33.setTransform(549.9,427.3);

		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#FFFFFF").s().p("AjsCFIg3gEQhEgHhAgMQgegGgagGQg8gPgcgZQgbgWgCgdIAAgCIAAAAQAAg6CygrIABAAQCxgpD1AAIABAAQB8AABoALIACAAQBmAKBVAUIACABQCqApACA5IAAAEIgBADIAAADQgFAchCAXQggANhLARIgwALQg6ALhUAJIgwAFQgvADhBACIhEACIgwABIgeAAQhZAAhFgFg");
		this.shape_34.setTransform(549.9,427.3);

		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#FFFFFF").s().p("AjsCFIg3gEQhEgHhAgMQgegFgagHQg8gPgdgYQgagWgCgeIAAgCIAAAAQAAg6CygrIABAAQCxgpD1AAIABAAQB8AABoALIACAAQBmAKBVAUIACABQCqApACA5IAAAEIgBADIAAADQgFAchDAXQgfANhLARIgwAKQg6AMhUAJIgwAEQgwAEhBACIhDABIgwABIghABQhYAAhDgFg");
		this.shape_35.setTransform(549.9,427.3);

		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#FFFFFF").s().p("AjsCFIg3gEQhEgGhAgMQgegGgbgGQg7gPgdgZQgagWgCgeIAAgBIAAgBQAAg6CygqIABAAQCxgpD1AAIABAAQB8AABoAKIACAAQBmAKBVAUIACABQCqAqACA5IAAADIAAADIgBADQgFAchDAXQgeANhNARIgvAKQg6AMhUAJIgwAEQgwAEhBACIhDACIgxAAIgjAAQhWAAhCgEg");
		this.shape_36.setTransform(549.9,427.2);

		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#FFFFFF").s().p("AjsCFIg3gEQhFgGg/gMIg5gMQg8gPgcgZQgbgWgBgeIAAgBIAAgBQAAg6CygqIABAAQCxgpD1AAIABAAQB7AABpAKIACAAQBmAKBVAUIACABQCpApADA6IAAADIAAADIgBADQgFAchDAXQgeAMhNARIgwAKQg5AMhVAJIgwAEQgvAEhBACIhDACIgxABIgkAAQhWAAhBgEg");
		this.shape_37.setTransform(549.9,427.2);

		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#FFFFFF").s().p("AjtCFIg3gEQhEgFhAgMQgegGgagGQg8gPgdgZQgagWgBgeIAAgCIAAAAQAAg6CygrIABAAQCxgpD1AAIABAAQB7AABpALIACAAQBmAKBVAUIACABQCpApADA5IAAADIAAAEIgBADQgFAbhDAXQgeAMhNARIgwAKQg5AMhVAJIgwAEQgwAEhAACIhEACIgwABIgnAAQhVAAhAgEg");
		this.shape_38.setTransform(549.9,427.2);

		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#FFFFFF").s().p("AjtCFIg3gEQhFgFg/gMIg5gMQg8gPgcgZQgagWgBgeIAAgCIAAAAQAAg6CygrIABAAQCxgpD1AAIABAAQB7AABpALIACAAQBmAKBVAUIACABQCpApADA5IAAADIAAAEIgBADQgFAbhDAXQgeALhOASIgvAKQg5ALhVAKIgwAEQgwAEhAACIhEACIgxAAIgmABQhVAAhAgEg");
		this.shape_39.setTransform(549.9,427.2);

		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#FFFFFF").s().p("AjtCFIg3gEQhFgFg/gMQgfgFgagGQg8gPgcgZQgagWgBgfIAAgBIAAgBQAAg6CygqIABAAQCxgpD1AAIABAAQB7AABpAKIACAAQBmAKBVAUIACABQCpApADA6IAAADIAAADIgBADQgFAbhEAXQgdALhOASIgvAKQg5ALhWAKIgwAEQgvAEhBACIhDACIgxAAIgxAAQhOAAg8gDg");
		this.shape_40.setTransform(549.9,427.1);

		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#FFFFFF").s().p("AjtCFIg3gEQhFgFg/gLIg5gMQg8gOgcgaQgagWgBgfIAAgBIAAgBQAAg6CygqIABAAQCxgpD1AAIABAAQB7AABpAKIACAAQBmAKBVAUIACABQCpApADA5IAAAEIAAADIgBADQgFAbhEAXQgdALhOARIgwAKQg4AMhWAJIgwAEQgvAEhBACIhDACIgxABIg1AAQhMAAg6gDg");
		this.shape_41.setTransform(549.9,427.1);

		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#FFFFFF").s().p("AjuCFIg3gDQhFgFg/gMQgegFgbgGQg8gPgcgZQgZgWgBgfIAAgCIAAAAQAAg6CygrIABAAQCxgpD1AAIABAAQB7AABpALIACAAQBmAKBVAUIACABQCpApADA5IAAADIAAADIgBADQgFAbhEAXQgcALhPARIgwAKQg4AMhWAJIgwAEQgwAEhAACIhEACIgxABIg5AAQhJAAg5gDg");
		this.shape_42.setTransform(549.9,427.1);

		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#FFFFFF").s().p("AjuCFIg3gDQhFgFg/gMQgegFgbgGQg8gOgcgaQgZgWgBggIAAgBIAAAAQAAg6CygrIABAAQCxgpD0AAIACAAQB7AABoALIACAAQBnAKBUAUIACABQCqApADA5IAAADIAAADIgBADQgFAbhEAWQgcALhQASIgvAKQg4ALhXAJIgvAFQgwAEhAACIhEACIgxABIgqAAQhTAAg+gDg");
		this.shape_43.setTransform(549.9,427.1);

		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#FFFFFF").s().p("AjuCEIg3gDQhGgEg+gLQgfgFgagHQg8gOgcgaQgZgWgBggIAAgBIAAAAQAAg6CygrIABAAQCxgpD0AAIACAAQB7AABoALIACAAQBnAKBUAUIACABQCqApADA5IAAADIAAADIgBADQgFAbhEAWQgcAKhQASIgvAKQg4ALhXAKIgwAEQgvAEhBACIhDACIgxABIgrABQhTAAg9gEg");
		this.shape_44.setTransform(549.9,427.1);

		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#FFFFFF").s().p("AjuCFIg3gDQhGgFg+gLQgfgFgagGQg9gOgbgaQgZgWgBggIAAgBIAAgBQAAg6CygqIABAAQCxgpD0AAIACAAQB7AABoAKIACAAQBnAKBUAUIACABQCqApADA5IAAADIAAAEIgBADQgFAahFAWQgbAKhQASIgwAKQg3ALhXAKIgwAEQgwAEhAACIhDACIgxABIgwAAQhQAAg7gCg");
		this.shape_45.setTransform(549.9,427);

		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#FFFFFF").s().p("AjvCFIg2gDQhGgFg/gLQgegFgbgGQg8gOgcgaQgYgWgBggIAAgBIAAgBQAAg6CygqIABAAQCxgpD0AAIACAAQB7AABoAKIACAAQBnAKBUAUIACABQCqApADA5IAAADIAAAEIgBADQgEAahGAWQgbAKhQASIgwAKQg3ALhXAJIgwAFQgwAEhAACIhEACIgxABIg/AAQhGAAg2gCg");
		this.shape_46.setTransform(549.9,427);

		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#FFFFFF").s().p("AjvCFIg3gDQhGgEg+gLQgegFgbgGQg9gOgbgaQgYgWgBghIAAgBIAAAAQAAg6CygrIABAAQCxgpD0AAIACAAQB7AABoALIACAAQBmAKBVAUIACABQCqApADA5IAAADIAAADIgBADQgEAahGAWQgaAKhSASIgvAKQg3ALhYAJIgvAFQgwAEhAACIhEACIgxABIg/AAQhHAAg1gCg");
		this.shape_47.setTransform(549.9,427);

		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#FFFFFF").s().p("AjvCEIg3gCQhGgEg+gLQgfgFgagGQg9gNgbgbQgYgWgBghIAAgBIAAAAQAAg6CygrIABAAQCxgpD0AAIACAAQB7AABoALIACAAQBmAKBVAUIACABQCpApAEA5IAAADIAAADIgBADQgEAahGAWQgaAJhSASIgwAKQg2ALhYAKIgwAEQgvAEhBACIhDACIgxABIhAABQhGAAg1gDg");
		this.shape_48.setTransform(549.9,427);

		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#FFFFFF").s().p("AjvCEIg3gCQhHgEg9gLQgfgEgbgGQg8gOgcgaQgXgXgBghIAAgBQAAg6CygqIABAAQCxgqD0AAIACAAQB7AABoALIACAAQBmAKBVAUIACABQCpApAEA4IAAAEIAAADIgBADQgEAahGAVQgaAKhSARIgwALQg1ALhZAKIgwAEQgwAEhAADIhEABIgxABIhGABQhCgBgygCg");
		this.shape_49.setTransform(549.9,427);

		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#FFFFFF").s().p("AjwCFIg2gDQhHgEg+gKQgegFgbgGQg9gNgbgbQgXgXgBggIAAgCQAAg6CygqIABAAQCxgpD0AAIACAAQB7AABoAKIACAAQBmAKBVAUIACABQCpApAEA5IAAADIAAADIgBADQgEAahHAVQgZAKhSARIgwALQg1AKhaAKIgvAFQgwAEhAACIhEACIgxABIhOAAQg+AAgvgBg");
		this.shape_50.setTransform(549.9,426.9);

		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#FFFFFF").s().p("AjwCEIg3gCQhGgEg+gKQgegEgbgGQg9gOgbgbQgXgWgBghIAAgCQAAg6CygqIABAAQCxgpD0AAIACAAQB7AABoAKIACAAQBmAKBVAUIACABQCpApAEA5IAAADIAAADIgBADQgEAahHAVQgZAJhTASIgvAKQg1ALhaAKIgwAEQgvAFhAACIhEABIgxABIhPABQg9AAgvgCg");
		this.shape_51.setTransform(549.9,426.9);

		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#FFFFFF").s().p("AjwCEIg3gCQhHgDg9gKQgfgFgbgGQg8gNgbgbQgXgXgBghIAAgBQAAg6CygrIABAAQCxgpD0AAIACAAQB7AABoALIACAAQBmAKBVATIACABQCpAqAEA4IAAADIAAAEIgBADQgEAZhHAVQgYAJhUASIgwAKQg0ALhaAKIgwAEQgwAFhAACIhDABIgyABIhTABQg6AAgtgCg");
		this.shape_52.setTransform(549.9,426.9);

		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#FFFFFF").s().p("AjwCEIg3gCQhHgDg9gKQgfgFgbgFQg9gOgbgbQgWgXgBghIAAgBQAAg6CygrIABAAQCxgpD0AAIACAAQB7AABoALIACAAQBmAKBVATIACABQCpApAEA5IAAADIAAAEIgBADQgEAZhHAVQgYAIhUASIgwAKQg0ALhaAKIgwAFQgwAEhAACIhEACIgxABIhcABQg1AAgpgCg");
		this.shape_53.setTransform(549.9,426.9);

		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#FFFFFF").s().p("AjxCEIg2gBQhIgEg9gJQgegFgbgGQg9gNgbgcQgWgWgBghIAAgCQAAg6CygqIABAAQCxgpD0AAIACAAQB7AABoAKIACAAQBmAKBVAUIACABQCpApAEA5IAAADIAAADIgBADQgEAZhHAVQgYAIhUASIgwAKQg0ALhbAKIgvAFQgwAEhAACIhEACIgxABIhcAAQg1AAgqgBg");
		this.shape_54.setTransform(549.9,426.8);

		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#FFFFFF").s().p("AjxCEIg2gBQhIgEg9gJQgegFgbgFQg+gNgagcQgWgXgBgiIAAgBQAAg6CygqIABAAQCxgpD0AAIACAAQB7AABoAKIACAAQBmAKBVAUIACABQCpApAEA5IAAADIAAADIgBADQgEAZhIAVQgXAIhVASIgwAKQgzAKhbAKIgwAFQgwAFg/ACIhEACIgxABIhaAAIhhgBg");
		this.shape_55.setTransform(549.9,426.8);

		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#FFFFFF").s().p("AjxCEIg3gCQhHgDg9gJQgegEgcgGQg9gNgagcQgWgXgBgiIAAgBQAAg6CygqIABAAQCxgpD0AAIACAAQB7AABoAKIACAAQBmAKBVAUIACABQCpApAEA5IAAADIAAADIgBADQgEAZhIAUQgXAIhVASIgwAKQgzALhbAKIgwAFQgwAEhAACIhDACIgyABIhnABIhTgBg");
		this.shape_56.setTransform(549.9,426.8);

		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#FFFFFF").s().p("AjxCEIg3gBQhIgDg8gJQgfgFgbgFQg9gNgbgcQgVgXgBgiIAAgBQAAg6CygrIABAAQCxgpD0AAIACAAQB7AABoALIACAAQBmAKBVATIACABQCpApAEA5IAAADIAAADIgBADQgEAZhIAVQgXAHhVASIgwAKQgzALhcAKIgvAFQgwAEhAACIhEACIgxABIhnABIhTgBg");
		this.shape_57.setTransform(549.9,426.8);

		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#FFFFFF").s().p("AjyCEIg2gBQhIgDg9gJQgegEgbgGQg+gNgagcQgVgXgBgiIAAgBQAAg6CygrIABAAQCxgpD0AAIACAAQB7AABoALIACAAQBmAKBVATIACABQCpApAEA5IAAADIAAADIgBADQgDAZhJAUQgWAHhWATIgwAKQgzAKhcAKIgvAFQgwAFhAACIhEACIgxABIhnABIhUgBg");
		this.shape_58.setTransform(549.9,426.8);

		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#FFFFFF").s().p("AjyCEIg2gBQhIgDg9gJQgegEgcgGQg9gMgagdQgVgXgBgiIAAgBQAAg6CygrIABAAQCxgpD0AAIACAAQB7AABoALIACAAQBmAKBVATIACABQCoApAFA5IAAADIAAADIgBADQgDAZhJAUQgWAHhXASIgwAKQgyAKhcALIgwAFQgwAEg/ACIhEACIgyABIh0ACIhGgBg");
		this.shape_59.setTransform(549.9,426.8);

		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#FFFFFF").s().p("AjyCEIg3gBQhIgDg8gIQgegEgcgGQg9gNgagcQgVgXgBgjIAAgBQAAg6CygqIABAAQCxgpD0AAIACAAQB7AABoAKIACAAQBmAKBVAUIACABQCoApAFA4IAAADIAAAEIgBADQgDAYhKAUQgVAHhXASIgwAKQgyAKhcALIgwAFQgwAEhAACIhDACIgyABIiFABIg1AAg");
		this.shape_60.setTransform(549.9,426.7);

		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#FFFFFF").s().p("AkpCDQhtgEhRgRQg+gMgagdQgUgXgBgjIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgDAYhKAUQgaAIiCAbQg+AMiAANQgwAFhAACIh1ADIiNABQg9AAgngBg");
		this.shape_61.setTransform(549.9,426.7);

		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#FFFFFF").s().p("AkoCCIgNAAQhlgEhNgQIgIgCQg3gNgYgaIgGgHQgPgUgBgeIAAgBQAAg6CzgrIABAAQCxgpD1AAIADAAQB6AABoALIAEAAQBlAKBUAUIAFABQCnAqABA6IgBAGIgCAGQgKAUg7ARIgFABQgaAIhyAYIgRADQg/AMh/ANIgOABQgrAEg2ABIh2ADIgSAAIiBACIhdgCg");
		this.shape_62.setTransform(549.9,426.7);

		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#FFFFFF").s().p("AkoCCIgNgBQhkgEhNgQIgJgCQg3gMgYgaIgGgGQgPgVgBgeIAAgBQAAg6CzgqIABAAQCxgpD1AAIADAAQB6AABnAKIAEAAQBlALBUAUIAFABQCoAqABA5IgBAGIgCAGQgKAUg7ASIgFABQgbAIhxAXIgQADQhCAMh8ANIgPABQgqAEg3ABIh1ADIgTAAIh3ABQg+AAgpgBg");
		this.shape_63.setTransform(549.9,426.6);

		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#FFFFFF").s().p("AknCCIgNgBQhkgEhNgQIgJgCQg4gNgYgZIgFgGQgQgUgBgeIAAgBQAAg6CzgrIABAAQCxgpD0AAIADAAQB7AABnALIAEAAQBlAKBUAUIAFABQCoAqABA5IgBAHIgCAGQgKAUg7ARIgFABQgbAIhxAXIgQADQhDAMh6ANIgPABQgqADg3ACIh1ADIgTAAIiBABIhdgBg");
		this.shape_64.setTransform(549.9,426.6);

		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#FFFFFF").s().p("AknCBIgNgBQhjgEhOgQIgIgCQg4gMgYgZIgGgGQgQgUgBgeIAAgBQAAg6CzgrIABAAQCxgpD0AAIADAAQB7AABnALIAEAAQBlAKBUAUIAFABQCoAqABA5IgBAGIgBAGQgKAVg7ARIgFABQgcAIhwAXIgRADQhEAMh5AMIgOABQgrADg3ACIh1ADIgTAAIh2ACQg+AAgqgCg");
		this.shape_65.setTransform(549.9,426.6);

		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#FFFFFF").s().p("AkmCAIgNAAQhjgEhOgQIgJgCQg4gNgYgYIgGgGQgQgUgBgeIAAgBQAAg6CzgqIABAAQCwgpD1AAIADAAQB7AABnAKIAEAAQBlALBUAUIAFABQCnApACA5IgBAHIgBAGQgKAUg7ASIgFABQgdAIhvAWIgQADQhHAMh2AMIgPABQgqADg3ACIh1ADIgTAAIh2ABQg+AAgqgCg");
		this.shape_66.setTransform(549.9,426.5);

		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#FFFFFF").s().p("AklCAIgNgBQhkgEhOgQIgIgCQg4gMgZgYIgFgGQgRgTgBgeIAAgBQAAg6CzgrIABAAQCwgpD1AAIADAAQB6AABoALIAEAAQBlAKBUAUIAFABQCnAqACA5IgBAGIgBAGQgKAVg7ARIgFABQgdAJhuAVIgRADQhIAMh0ALIgPABQgqAEg3ABIh2ADIgTAAIh1ACQg+AAgqgCg");
		this.shape_67.setTransform(549.9,426.5);

		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#FFFFFF").s().p("AklCAIgNgBQhjgEhOgQIgJgCQg4gNgYgXIgGgGQgRgTgBgeIAAgBQAAg6CzgqIABAAQCwgpD1AAIADAAQB6AABoAKIAEAAQBlALBUAUIAFABQCnApACA5IgBAGIgBAGQgKAVg7ASIgEABQgfAIhtAVIgRADQhKAMhxALIgPABQgqAEg4ABIh1ADIgTAAIh1ABQg+AAgrgBg");
		this.shape_68.setTransform(549.9,426.4);

		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#FFFFFF").s().p("AkkB/IgNAAQhjgFhPgQIgIgCQg5gMgYgXIgGgGQgRgTgBgdIAAgBQAAg6CygrIABAAQCxgpD1AAIADAAQB6AABoALIAEAAQBlAKBUAUIAEABQCnApADA5IgBAHIgBAGQgJAVg7ARIgFABQgfAJhtAUIgQADQhMAMhwALIgPABQgpADg4ACIh1ADIgTAAIh2ABQg+AAgqgCg");
		this.shape_69.setTransform(549.9,426.4);

		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#FFFFFF").s().p("AkkB+IgNAAQhigFhPgQIgJgCQg4gMgYgWIgGgGQgSgTgBgdIAAgBQAAg6CygrIABAAQCxgpD1AAIADAAQB6AABoALIAEAAQBlAKBUAUIAEABQCnApADA5IgBAGIgBAGQgJAWg7ARIgEABQggAJhsAUIgRADQhOAMhtAKIgPABQgqADg4ACIh1ADIgTAAIhsACQhEAAgugDg");
		this.shape_70.setTransform(549.9,426.4);

		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#FFFFFF").s().p("AkjB+IgNgBQhigEhPgQIgJgCQg5gMgYgWIgGgGQgSgSgBgeIAAgBQAAg6CygqIABAAQCxgpD1AAIADAAQB6AABnAKIAEAAQBlAKBUAUIAFABQCnAqADA4IgBAHIgBAGQgJAVg7ARIgEABQghAKhrATIgQADQhQAMhrAKIgQABQgpADg4ACIh1ADIgTAAIhsABQhEAAgugCg");
		this.shape_71.setTransform(549.9,426.3);

		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#FFFFFF").s().p("AkjB+IgNgBQhhgFhQgQIgJgCQg5gMgYgVIgGgFQgSgTgBgdIAAgBQAAg6CygrIABAAQCxgpD1AAIADAAQB6AABnALIAEAAQBlAKBUAUIAFABQCnApADA5IgBAGIgBAGQgIAWg7ARIgFABQghAJhrATIgQADQhSAMhpAKIgPABQgpADg5ABIh0ADIgUAAIh0ACQg+AAgsgCg");
		this.shape_72.setTransform(549.9,426.3);

		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#FFFFFF").s().p("AkiB9IgNgBQhigEhPgQIgJgCQg5gMgYgVIgGgFQgTgSgBgeIAAgBQAAg6CygqIABAAQCxgpD1AAIADAAQB6AABnAKIAEAAQBlAKBUAUIAFABQCmAqAEA4IgBAGIgBAGQgIAWg7ARIgEABQgjAKhpATIgRACQhTAMhnAJIgPABQgpADg5ACIh1ADIgTAAIhsABQhDAAgvgCg");
		this.shape_73.setTransform(549.9,426.2);

		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#FFFFFF").s().p("AkiB9IgNgBQhhgEhQgQIgIgCQg6gNgYgUIgGgFQgTgSgBgdIAAgBQAAg6CygrIABAAQCxgpD0AAIADAAQB7AABnALIAEAAQBlAKBUAUIAFABQCmApAEA4IgBAGIgBAHQgIAWg7ARIgEABQgjAKhpASIgQACQhVAMhlAJIgQABQgoADg6ACIh0ADIgUAAIhrABQhEAAgvgCg");
		this.shape_74.setTransform(549.9,426.2);

		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#FFFFFF").s().p("AkhB8IgNAAQhhgFhQgQIgJgCQg5gMgZgUIgGgFQgTgRgBgeIAAgBQAAg6CygqIABAAQCxgpD0AAIADAAQB6AABoAKIAEAAQBlAKBUAUIAEABQCnApAEA4IgBAHIgBAGQgHAWg7ARIgFABQgjAKhoASIgRACQhXAMhjAJIgPABQgpADg5ACIh1ADIgTAAIhkAAQhIAAgygCg");
		this.shape_75.setTransform(549.9,426.1);

		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#FFFFFF").s().p("AkgB8IgNgBQhhgFhQgQIgJgCQg6gMgYgTIgGgFQgUgRgBgeIAAgBQAAg6CygqIABAAQCxgpD0AAIADAAQB6AABoAKIAEAAQBlAKBUAUIAEABQCnApAEA4IAAAHIgCAGQgHAWg7ARIgEABQglALhnARIgQACQhZAMhhAIIgPABQgpADg5ACIh1ADIgUAAIhqABQhEAAgvgCg");
		this.shape_76.setTransform(549.9,426.1);

		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#FFFFFF").s().p("AkgB7IgNgBQhggEhRgQIgJgCQg6gMgYgTIgGgFQgUgRgBgdIAAgBQAAg6CygrIABAAQCxgoD0gBIADAAQB6AABoALIAEAAQBlAKBUAUIAEABQCmApAEA4IABAGIgCAGQgHAXg7ARIgEABQglAKhnARIgQACQhbAMheAIIgQABQgoADg6ABIh0ADIgUAAIhrACQhDAAgwgDg");
		this.shape_77.setTransform(549.9,426.1);

		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#FFFFFF").s().p("AkfB7IgNgBQhggFhRgQIgJgCQg6gMgZgSIgGgFQgUgQgBgeIAAgBQAAg6CygqIABAAQCxgpD0AAIADAAQB6AABnAKIAEAAQBlAKBUAUIAFABQCmApAEA4IABAGIgCAGQgGAXg7ARIgFABQgmALhlAQIgRACQhcAMhdAIIgPABIhiAEIh1ADIgUAAIhiABQhIAAgzgCg");
		this.shape_78.setTransform(549.9,426);

		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#FFFFFF").s().p("AkfB6IgNAAQhfgFhSgQIgJgCQg6gMgYgSIgHgEQgUgRgBgdIAAgBQAAg6CygrIABAAQCxgoD0gBIADAAQB6AABnALIAEAAQBlAKBUAUIAFABQCmAoAEA4IABAGIgCAHQgGAXg7ARIgEABQgnAKhlAQIgQACQhfAMhaAIIgQABQgnACg7ACIh0ADIgUAAIhiABQhJAAgzgDg");
		this.shape_79.setTransform(549.9,426);

		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#FFFFFF").s().p("AkeB6IgNgBQhggEhRgQIgJgCQg6gNgZgRIgGgEQgVgQgBgeIAAgBQAAg6CygqIABAAQCxgpD0AAIADAAQB6AABnAKIAEAAQBlAKBUAUIAFABQClApAFA3IABAHIgBAGQgHAXg7ARIgEABQgnALhkAPIgRACQhgAMhYAHIgQABIhiAFIh1ADIgUAAIhbAAQhMAAg2gCg");
		this.shape_80.setTransform(549.9,425.9);

		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#FFFFFF").s().p("AkeB6IgNgBQhfgFhSgQIgIgCQg7gMgYgQIgHgFQgVgQgBgdIAAgBQAAg6CygrIABAAQCxgoD0gBIADAAQB6AABnALIAEAAQBlAKBUAUIAEABQCmAoAFA4IABAGIgBAGQgGAYg7ARIgEABQgpALhjAOIgRADQhhALhXAHIgPABIhjAEIh0ADIgUAAIhiABQhIAAg0gCg");
		this.shape_81.setTransform(549.9,425.9);

		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#FFFFFF").s().p("AkdB5IgNgBQhfgEhSgQIgJgCQg7gMgYgQIgHgFQgVgPgBgeIAAgBQAAg6CygqIABAAQCxgpD0AAIADAAQB5AABoAKIAEAAQBlAKBUAUIAEABQCmApAFA3IABAGIgBAHQgGAXg7ARIgEABQgpALhjAOIgQADQhkALhUAHIgQABQgnACg7ACIh0ADIgVAAIhhAAQhIAAg0gCg");
		this.shape_82.setTransform(549.9,425.8);

		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#FFFFFF").s().p("AkdB4IgNgBQhegEhSgQIgJgCQg7gMgZgQIgGgEQgWgPgBgeIAAgBQAAg6CygqIABAAQCxgpD0AAIADAAQB5AABoAKIAEAAQBlAKBUAUIAEABQCmApAFA3IABAGIgBAGQgGAYg7ARIgEABQgqAMhhANIgRACQhlAMhSAGIgQABIhjAEIh0ADIgUAAIhbABQhMAAg3gDg");
		this.shape_83.setTransform(549.9,425.8);

		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#FFFFFF").s().p("AkcB4IgNgBQhegFhTgQIgJgCQg7gMgYgPIgHgEQgWgPgBgdIAAgBQAAg6CygrIABAAQCxgoDzgBIADAAQB6AABoALIAEAAQBlAJBUAUIAEABQClApAGA3IABAGIgBAHQgFAYg7AQIgEABQgrAMhhANIgQACQhoAMhQAGIgQABIhiAEIh0ADIgUAAIhbABQhMAAg3gDg");
		this.shape_84.setTransform(549.9,425.8);

		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("#FFFFFF").s().p("AkcB4IgNgBQhdgFhTgQIgJgCQg8gMgYgOIgHgFQgWgPgBgdIAAgBQAAg6CygqIABAAQCxgpDzAAIADAAQB6AABoAKIAEAAQBlAKBUAUIAEABQClAoAGA3IABAHIgBAGQgFAYg7ARIgEABQgrAMhhAMIgQADQhpALhOAGIgQABIhjAEIhzADIgVAAIhaAAQhMAAg4gCg");
		this.shape_85.setTransform(549.9,425.7);

		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.f("#FFFFFF").s().p("AkbB3IgNgBQhegFhTgQIgJgCQg7gMgZgNIgGgEQgXgPgBgdIAAgBQAAg6CygrIABAAQCxgoDzgBIADAAQB6AABnALIAEAAQBlAJBUAUIAFABQClApAGA3IABAGIgBAGQgFAZg7AQIgEABQgsAMhfANIgRACQhrALhLAFIgQABIhjAEIh0ADIgUAAIhbABQhLAAg4gDg");
		this.shape_86.setTransform(549.9,425.7);

		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.f("#FFFFFF").s().p("AkaB3IgNgBQhegFhTgQIgJgCQg8gMgYgNIgHgEQgXgPgBgdIAAgBQAAg6CygqIABAAQCwgpD0AAIADAAQB6AABnAKIAEAAQBlAKBUAUIAEABQClAoAHA3IABAGIgBAHQgFAYg7ARIgDABQgtAMhfAMIgQACQhtALhJAFIgRABIhiAEIh0ADIgVAAIhaAAQhLAAg4gCg");
		this.shape_87.setTransform(549.9,425.6);

		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.f("#FFFFFF").s().p("AkaB2IgNgBQhdgFhUgQIgIgCQg8gMgZgNIgHgDQgXgPgBgdIAAgBQAAg6CygqIABAAQCwgpD0AAIADAAQB6AABnAKIAEAAQBlAKBUAUIAEABQClAoAHA3IABAGIgBAGQgEAZg7ARIgEABQguAMhdALIgRACQhuAMhIAEIgQABIhjAEIh0ADIgUAAIhUABQhPAAg7gDg");
		this.shape_88.setTransform(549.9,425.6);

		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.f("#FFFFFF").s().p("AkZB2IgNgBQhdgFhUgQIgJgCQg8gMgYgMIgHgEQgYgOgBgdIAAgBQAAg6CygrIABAAQCwgoD0gBIADAAQB6AABnALIAEAAQBlAJBUAUIAEABQClAoAHA3IABAGIgBAHQgEAZg7AQIgDABQgvANhdAKIgRADQhwALhFAEIgQABIhjAEIh0ADIgVAAIhZABQhLAAg5gDg");
		this.shape_89.setTransform(549.9,425.6);

		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.f("#FFFFFF").s().p("AkZB1IgNgBQhcgFhUgQIgJgCQg9gMgYgLIgHgEQgYgOgBgdIAAgBQAAg6CygqIABAAQCwgpD0AAIADAAQB5AABoAKIAEAAQBlAKBUAUIAEABQClAoAHA2IABAGIgBAHQgEAZg7ARIgDABQgvANhdAKIgQACQhyALhDAEIgRABIhjAEIhzADIgVAAIhUAAQhOAAg8gDg");
		this.shape_90.setTransform(549.9,425.5);

		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.f("#FFFFFF").s().p("AklB0QhhgGhZgRQhGgOgWgNQgYgNgBgdIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgDAag7AQQgwAOhfAKQiQAOhGAEQhKADiiADIhPABQhaAAhBgEg");
		this.shape_91.setTransform(549.9,425.5);

		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.f("#FFFFFF").s().p("AkkBzQhhgFhYgRQhHgOgWgNQgZgOgBgcIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgDAag6ARQgwAOhfAKQiNAPhJADIjrAFIhEABQhiAAhFgFg");
		this.shape_92.setTransform(549.9,425.5);

		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.f("#FFFFFF").s().p("AkiBzQhigGhYgRQhHgOgXgMQgZgOgBgcIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgDAag6ARQgvAPheAKQiLAPhLADIjrAEIhFABQhiAAhEgFg");
		this.shape_93.setTransform(549.9,425.5);

		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.f("#FFFFFF").s().p("AkgBzQhigGhYgRQhIgOgYgNQgZgNgBgcIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgDAag5ASQgvAPhdALQiJAOhNACIjsAFIgoAAQh1AAhNgFg");
		this.shape_94.setTransform(549.9,425.5);

		this.shape_95 = new cjs.Shape();
		this.shape_95.graphics.f("#FFFFFF").s().p("AkfBzQhigGhYgRQhIgOgYgNQgagOgBgbIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgDAbg4ARQgvAQhcALQiHAPhQABIjrAEIgoAAQh2AAhNgFg");
		this.shape_95.setTransform(549.9,425.5);

		this.shape_96 = new cjs.Shape();
		this.shape_96.graphics.f("#FFFFFF").s().p("AkdByQhjgGhXgQQhJgOgZgNQgagOgBgbIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgDAbg3ASQgvAQhcAMQiEAOhSABIjrADIgWAAQiDAAhSgGg");
		this.shape_96.setTransform(549.9,425.5);

		this.shape_97 = new cjs.Shape();
		this.shape_97.graphics.f("#FFFFFF").s().p("AkcByQhigGhYgQQhJgOgZgNQgbgOgBgbIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAbg1ASQgvARhbAMQiCAPhVAAIjrACIgWAAQiDAAhSgGg");
		this.shape_97.setTransform(549.9,425.5);

		this.shape_98 = new cjs.Shape();
		this.shape_98.graphics.f("#FFFFFF").s().p("AkaByQhjgGhXgRQhKgNgagOQgbgNgBgbIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAbg1ATQguARhaAMQh/APhYAAIjrABQiTAAhYgGg");
		this.shape_98.setTransform(549.9,425.5);

		this.shape_99 = new cjs.Shape();
		this.shape_99.graphics.f("#FFFFFF").s().p("AkYByQhkgHhXgQQhKgNgbgOQgbgOgBgaIAAgBQAAg7CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA7IgBAGQgEAbg0ATQgtAShbAMQh8AQhbgBIjqAAQiUgBhXgFg");
		this.shape_99.setTransform(549.9,425.5);

		this.shape_100 = new cjs.Shape();
		this.shape_100.graphics.f("#FFFFFF").s().p("AC/B4QhagBiQABQiVgBhXgGQhkgHhWgQQhLgNgbgOQgcgOgBgaIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAbgzATQgtAThaANQhyANhZAAIgMAAg");
		this.shape_100.setTransform(549.9,425.5);

		this.shape_101 = new cjs.Shape();
		this.shape_101.graphics.f("#FFFFFF").s().p("ADBB5QhdgCiOAAQiVgBhWgGQhkgHhXgPQhLgOgcgNQgcgOgBgaIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAcgyATQgtAUhZAMQhtAOhZAAIgRAAg");
		this.shape_101.setTransform(549.9,425.6);

		this.shape_102 = new cjs.Shape();
		this.shape_102.graphics.f("#FFFFFF").s().p("ADCB5QhegCiMAAQiWgChWgGQhkgGhWgQQhMgNgcgOQgdgOgBgaIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAbgxAUQgtAUhYANQhlANhWAAIgdAAg");
		this.shape_102.setTransform(549.9,425.6);

		this.shape_103 = new cjs.Shape();
		this.shape_103.graphics.f("#FFFFFF").s().p("ADEB5QhggCiKAAQiXgDhVgGQhlgGhWgQQhMgNgdgOQgdgOgBgZIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAcgxAUQgsAVhYANQhgANhVAAIgigBg");
		this.shape_103.setTransform(549.9,425.7);

		this.shape_104 = new cjs.Shape();
		this.shape_104.graphics.f("#FFFFFF").s().p("ADFB6QhhgDiJgBQiXgChUgGQhlgHhWgPQhNgOgegOQgdgOgBgZIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAcgwAUQgsAVhXAOQhcAMhWAAIgmAAg");
		this.shape_104.setTransform(549.9,425.7);

		this.shape_105 = new cjs.Shape();
		this.shape_105.graphics.f("#FFFFFF").s().p("ADHB6QhkgDiGgBQiYgDhUgGQhlgHhWgPQhNgNgegPQgegOgBgYIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAdgvAUQgsAWhWAOQhaAMhWAAIgogBg");
		this.shape_105.setTransform(549.9,425.8);

		this.shape_106 = new cjs.Shape();
		this.shape_106.graphics.f("#FFFFFF").s().p("ADJB6QhmgDiEgCQiZgDhTgGQhmgHhVgPQhOgNgfgOQgegPgBgYIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAcguAVQgsAXhWAOQhSALhTAAIgygBg");
		this.shape_106.setTransform(549.9,425.8);

		this.shape_107 = new cjs.Shape();
		this.shape_107.graphics.f("#FFFFFF").s().p("ADKB7QhngEiDgCQiZgEhTgGQhlgHhWgOQhOgNgfgPQgfgOgBgYIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAdgtAVQgsAXhVAPQhPALhSAAIg3gBg");
		this.shape_107.setTransform(549.9,425.9);

		this.shape_108 = new cjs.Shape();
		this.shape_108.graphics.f("#FFFFFF").s().p("ADMB7QhqgFiAgBQiZgFhTgFQhmgIhWgOQhNgNghgPQgfgOgBgYIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAdgtAWQgqAXhVAOQhMALhSAAIg6gBg");
		this.shape_108.setTransform(549.9,425.9);

		this.shape_109 = new cjs.Shape();
		this.shape_109.graphics.f("#FFFFFF").s().p("ADNB7QhrgFh+gCQiagFhSgGQhngHhVgOQhOgNgigPQgfgOgBgYIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAdgsAWQgqAYhUAPQhJALhQAAQggAAgggCg");
		this.shape_109.setTransform(549.9,426);

		this.shape_110 = new cjs.Shape();
		this.shape_110.graphics.f("#FFFFFF").s().p("ADPB7QhtgFh9gDQiagFhSgFQhmgIhWgOQhOgNgigPQgggOgBgXIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAdgrAXQgqAYhUAQQhDALhNAAQgjAAglgDg");
		this.shape_110.setTransform(549.9,426.1);

		this.shape_111 = new cjs.Shape();
		this.shape_111.graphics.f("#FFFFFF").s().p("ADRB8QhwgGh6gDQibgGhRgFQhngIhVgOQhPgMgjgQQgggOgBgXIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAdgqAXQgqAZhTAQQhBAKhNAAQgkAAgmgCg");
		this.shape_111.setTransform(549.9,426.1);

		this.shape_112 = new cjs.Shape();
		this.shape_112.graphics.f("#FFFFFF").s().p("ADSB8QhxgGh4gEQicgFhRgGQhngIhVgNQhPgNgjgPQghgPgBgWIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAegpAXQgqAahSAPQg/ALhNAAQglAAgogDg");
		this.shape_112.setTransform(549.9,426.2);

		this.shape_113 = new cjs.Shape();
		this.shape_113.graphics.f("#FFFFFF").s().p("ADUB9QhzgHh2gEQidgGhQgGQhogIhUgNQhQgNgkgPQghgPgBgWIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAegpAXQgpAahSAQQg8AKhLAAQgnAAgqgCg");
		this.shape_113.setTransform(549.9,426.2);

		this.shape_114 = new cjs.Shape();
		this.shape_114.graphics.f("#FFFFFF").s().p("ADVB9Qh0gHh1gEQidgHhPgGQhogHhVgOQhQgMglgQQghgPgBgVIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAegoAYQgpAbhRAQQg4AKhIAAQgqAAgvgDg");
		this.shape_114.setTransform(549.9,426.3);

		this.shape_115 = new cjs.Shape();
		this.shape_115.graphics.f("#FFFFFF").s().p("ADXB9Qh3gIhygEQiegHhPgGQhogIhUgNQhRgNglgPQgigPgBgVIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAegnAZQgpAbhQAQQg2ALhIAAQgqAAgxgEg");
		this.shape_115.setTransform(549.9,426.4);

		this.shape_116 = new cjs.Shape();
		this.shape_116.graphics.f("#FFFFFF").s().p("ADZB9Qh5gIhwgFQifgHhOgGQhpgIhUgNQhRgMgmgQQgigPgBgVIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAegmAZQgpAchPAQQg0AKhHAAQgsAAgygEg");
		this.shape_116.setTransform(549.9,426.4);

		this.shape_117 = new cjs.Shape();
		this.shape_117.graphics.f("#FFFFFF").s().p("ADaB+Qh6gJhvgFQifgIhNgFQhpgJhUgMQhSgNgngQQgigPgBgUIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAfglAZQgoAchQARQgxAKhGAAQgtAAg1gEg");
		this.shape_117.setTransform(549.9,426.5);

		this.shape_118 = new cjs.Shape();
		this.shape_118.graphics.f("#FFFFFF").s().p("ADcB+Qh9gJhsgFQiggJhNgFQhpgIhUgNQhSgMgngRQgjgOgBgVIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAfglAZQgnAdhPARQguAJhDAAQgvAAg5gEg");
		this.shape_118.setTransform(549.9,426.5);

		this.shape_119 = new cjs.Shape();
		this.shape_119.graphics.f("#FFFFFF").s().p("ADdB+Qh+gJhqgGQihgIhMgGQhqgIhTgNQhTgMgogQQgjgPgBgUIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgFAfgjAaQgnAdhOASQgtAJhCAAQgwAAg7gFg");
		this.shape_119.setTransform(549.9,426.6);

		this.shape_120 = new cjs.Shape();
		this.shape_120.graphics.f("#FFFFFF").s().p("ADfB+QiAgKhpgGQihgJhMgFQhpgJhUgMQhTgMgogRQgkgOgBgUIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgFAfgiAaQgnAehOASQgqAKhBAAQgxAAg9gGg");
		this.shape_120.setTransform(549.9,426.7);

		this.shape_121 = new cjs.Shape();
		this.shape_121.graphics.f("#FFFFFF").s().p("ADgB/QiBgLhngGQiigJhLgGQhqgJhTgMQhUgMgpgQQgkgPgBgUIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgFAfghAaQgnAfhNASQgoAJhAAAQgyAAhAgFg");
		this.shape_121.setTransform(549.9,426.7);

		this.shape_122 = new cjs.Shape();
		this.shape_122.graphics.f("#FFFFFF").s().p("ADiB/QiEgLhkgGIjtgQQhrgIhTgMQhUgMgqgRQgkgPgBgTIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgFAgggAaQgnAghMASQgmAJg9AAQgzAAhEgGg");
		this.shape_122.setTransform(549.9,426.8);

		this.shape_123 = new cjs.Shape();
		this.shape_123.graphics.f("#FFFFFF").s().p("ADkB/QiGgLhigHIjugPQhrgJhSgMQhVgMgqgRQglgPgBgTIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgFAgggAaQgmAghLATQglAIg9AAQgzAAhFgGg");
		this.shape_123.setTransform(549.9,426.8);

		this.shape_124 = new cjs.Shape();
		this.shape_124.graphics.f("#FFFFFF").s().p("ADlB/QiHgMhhgHIjtgQQhrgJhTgLQhVgMgrgRQglgPgBgTIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgFAggfAbQgmAghLATQgiAJg8AAQg0AAhIgHg");
		this.shape_124.setTransform(549.9,426.9);

		this.shape_125 = new cjs.Shape();
		this.shape_125.graphics.f("#FFFFFF").s().p("AD5CCIgUgCIjMgRIgcgCIjOgNIgggCQhVgIhGgJIgigEQhWgNgqgRQgkgPgCgTIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgFAggfAbQgmAghLATIgDABQgkAIg8AAQgrAAg4gEg");
		this.shape_125.setTransform(549.9,426.9);

		this.shape_126 = new cjs.Shape();
		this.shape_126.graphics.f("#FFFFFF").s().p("AD5CCIgVgBIjLgQIgdgCIjOgNIgggDQhUgHhHgJIgigFQhVgNgqgRQgkgPgCgTIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgFAggfAbQgnAghLATIgDABQglAIg+AAQgqAAg1gEg");
		this.shape_126.setTransform(549.9,426.9);

		this.shape_127 = new cjs.Shape();
		this.shape_127.graphics.f("#FFFFFF").s().p("AD5CDIgVgCIjMgPIgcgCQiEgHhLgGIgfgCQhVgIhHgJIghgFQhWgNgqgSQgjgPgCgTIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgFAgggAbQgmAfhLATIgDABQgnAJhBAAQgoAAgygDg");
		this.shape_127.setTransform(549.9,426.9);

		this.shape_128 = new cjs.Shape();
		this.shape_128.graphics.f("#FFFFFF").s().p("AD4CDIgUgBIjMgPIgdgBQiDgIhLgFIgggDQhUgHhHgLIgigEQhVgOgqgSQgjgPgCgTIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgFAgggAaQgmAghMATIgDABQgpAJhEAAQgmAAgvgDg");
		this.shape_128.setTransform(549.9,426.9);

		this.shape_129 = new cjs.Shape();
		this.shape_129.graphics.f("#FFFFFF").s().p("AD4CDIgVgBIjMgOIgcgBQiDgHhMgGIgfgDQhUgHhIgLIgigFQhVgNgpgSQgjgQgCgTIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgFAgggAaQgnAfhLATIgEABQgpAKhGAAQglAAgtgDg");
		this.shape_129.setTransform(549.9,426.9);

		this.shape_130 = new cjs.Shape();
		this.shape_130.graphics.f("#FFFFFF").s().p("AD3CEIgUgCIjNgMIgcgCQiCgHhMgGIgggCQhUgIhHgLIgigFQhVgNgpgTQgjgQgCgTIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgFAfghAbQgmAfhMATIgDABQgsAKhKAAQgjAAgpgCg");
		this.shape_130.setTransform(549.9,426.9);

		this.shape_131 = new cjs.Shape();
		this.shape_131.graphics.f("#FFFFFF").s().p("AD3CEIgVgBIjMgMIgcgCQiCgHhNgGIgggCQhTgIhIgLIgigFQhUgOgqgTQgigQgCgTIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgFAfghAbQgnAehLATIgEACQgtAKhNAAQghAAgmgCg");
		this.shape_131.setTransform(549.9,426.9);

		this.shape_132 = new cjs.Shape();
		this.shape_132.graphics.f("#FFFFFF").s().p("AD2CEIgUgBIjNgLIgcgCQiBgGhOgGIgfgDQhTgIhJgLIghgFQhVgOgpgUQgigQgCgTIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgFAfghAbQgnAehLATIgEABQgvALhPAAQgfAAglgCg");
		this.shape_132.setTransform(549.9,426.9);

		this.shape_133 = new cjs.Shape();
		this.shape_133.graphics.f("#FFFFFF").s().p("AD2CFIgUgBIjNgLIgcgBQiBgHhOgGIgggDQhTgHhIgMIgigFQhUgPgpgTQgigRgCgTIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAfgjAaQgmAehMATIgEACQgxALhSAAIg+gBg");
		this.shape_133.setTransform(549.9,426.9);

		this.shape_134 = new cjs.Shape();
		this.shape_134.graphics.f("#FFFFFF").s().p("AD2CFIgVgBQhogGhlgEIgcgCQiAgGhPgGIgfgDQhTgIhJgLIghgGQhVgPgpgTQgigRgBgUIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAfgjAaQgnAdhLATIgEACQg1AMhXAAIg1gBg");
		this.shape_134.setTransform(549.9,426.9);

		this.shape_135 = new cjs.Shape();
		this.shape_135.graphics.f("#FFFFFF").s().p("AD1CFIgUAAQhngGhmgEIgdgBQh/gGhPgGIgggDQhSgIhJgMIgigGQhUgPgpgUQgigQgBgUIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAfgjAaQgnAdhMATIgEACQg2AMhaAAIgxgBg");
		this.shape_135.setTransform(549.9,426.9);

		this.shape_136 = new cjs.Shape();
		this.shape_136.graphics.f("#FFFFFF").s().p("AD1CFIgVAAIjNgJIgcgBQh/gGhQgGIgggDQhSgIhJgNIghgFQhVgQgogUQgigRgBgUIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAegkAaQgnAdhLATIgFACQg4ANheAAIgqgBg");
		this.shape_136.setTransform(549.9,426.9);

		this.shape_137 = new cjs.Shape();
		this.shape_137.graphics.f("#FFFFFF").s().p("AD0CGIgUgBIjNgIIgdgBQh+gFhRgHIgfgDQhSgIhKgNIghgFQhUgQgogVQgigRgBgUIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAegkAaQgnAdhMATIgEABQg8AOhlAAIggAAg");
		this.shape_137.setTransform(549.9,426.9);

		this.shape_138 = new cjs.Shape();
		this.shape_138.graphics.f("#FFFFFF").s().p("AD0CGIgUgBIjOgHIgcgBQh+gFhRgHIgggDQhRgIhKgNIgigGQhUgPgogVQghgSgBgUIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAegkAaQgnAchMATIgFACQg9AOhkAAIgfAAg");
		this.shape_138.setTransform(549.9,426.9);

		this.shape_139 = new cjs.Shape();
		this.shape_139.graphics.f("#FFFFFF").s().p("ADzCGIgUAAIjOgHIgcgBQh9gEhSgHIgggDQhRgJhKgNIghgGQhUgQgogVQghgRgBgVIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAeglAaQgnAchMATIgEABQhBAPhsAAIgUAAg");
		this.shape_139.setTransform(549.9,426.9);

		this.shape_140 = new cjs.Shape();
		this.shape_140.graphics.f("#FFFFFF").s().p("ADzCGIgUAAIjOgGIgcgBQh9gEhSgIIgggDQhRgIhKgNIgigGQhUgRgngVQghgSgBgUIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAeglAaQgnAchMATIgFABQhEARhvAAIgNgBg");
		this.shape_140.setTransform(549.9,427);

		this.shape_141 = new cjs.Shape();
		this.shape_141.graphics.f("#FFFFFF").s().p("ADzCGIgVAAIjOgFIgcgBQh8gEhTgHIgggDQhQgJhLgNIghgHQhUgQgngWQghgSgBgUIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAeglAaQgoAbhMATIgEACQhHARhyAAIgHgBg");
		this.shape_141.setTransform(549.9,427);

		this.shape_142 = new cjs.Shape();
		this.shape_142.graphics.f("#FFFFFF").s().p("ADeCHIjOgFIgcAAQh8gEhTgIIgggDQhRgIhKgOIgigHQhTgRgogWQgggRgBgVIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAeglAaQgoAbhMATIgFACQhJARh3AAIgUAAg");
		this.shape_142.setTransform(549.9,427);

		this.shape_143 = new cjs.Shape();
		this.shape_143.graphics.f("#FFFFFF").s().p("ADeCHIjPgEIgcgBQh7gEhUgHIgggDQhQgIhLgPIghgGQhUgRgngXQgggSgBgUIAAgBQAAg7CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA7IgBAGQgEAdgmAaQgnAbhMAUIgGABQhKASh1AAIgUAAg");
		this.shape_143.setTransform(549.9,427);

		this.shape_144 = new cjs.Shape();
		this.shape_144.graphics.f("#FFFFFF").s().p("AAPCEIgcgBQh7gDhVgIIgggDQhPgJhMgOIghgHQhTgRgngXQgggSgBgVIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAdgmAaQgoAbhMATIgFABQhLASh1ABIgUAAIjOgDg");
		this.shape_144.setTransform(549.9,427);

		this.shape_145 = new cjs.Shape();
		this.shape_145.graphics.f("#FFFFFF").s().p("AAOCFIgcgBQh6gDhVgIIgggDQhQgJhLgPIghgGQhUgSgngWQgfgTgBgVIAAgBQAAg6CzgqQCxgqD2AAQB8AABpALQBnAKBWAVQCtApAAA7IgBAGQgEAegmAZQgoAbhMATIgGABQhLATh0ABIgUABIjPgDg");
		this.shape_145.setTransform(549.9,427.1);

		this.shape_146 = new cjs.Shape();
		this.shape_146.graphics.f("#FFFFFF").s().p("AAOCGIgcgBQh6gDhWgIIgggDQhPgJhMgPIghgGQhTgTgngXQgfgSgBgVIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAdgnAaQgoAahMATIgFACQhMAShzACIgVABIjOgCg");
		this.shape_146.setTransform(549.9,427.1);

		this.shape_147 = new cjs.Shape();
		this.shape_147.graphics.f("#FFFFFF").s().p("AANCHIgcAAQh5gDhWgIIghgEQhOgIhMgQIgigHQhTgSgmgXQgfgTgBgVIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAdgnAZQgoAbhMATIgGABQhNAThyACIgUABIjPgBg");
		this.shape_147.setTransform(549.9,427.1);

		this.shape_148 = new cjs.Shape();
		this.shape_148.graphics.f("#FFFFFF").s().p("AAMCIIgbgBQh5gChXgJIgggDQhPgJhMgPIghgHQhTgTgmgYQgfgSgBgWIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAdgnAZQgoAahNATIgFABQhOAThxADIgUABIhgAAIhwAAg");
		this.shape_148.setTransform(549.9,427.1);

		this.shape_149 = new cjs.Shape();
		this.shape_149.graphics.f("#FFFFFF").s().p("AAMCIIgcAAQh4gChYgJIgggDQhOgJhNgQIghgHQhTgTgmgYQgegTgBgVIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAdgoAZQgoAahMATIgGABQhOAThxAEIgUABIiDABIhMgBg");
		this.shape_149.setTransform(549.9,427.2);

		this.shape_150 = new cjs.Shape();
		this.shape_150.graphics.f("#FFFFFF").s().p("AALCJIgbAAQh4gChYgJIghgDQhNgJhNgRIghgHQhTgTgmgYQgegTgBgWIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAcgoAZQgoAahNATIgGABQhOAThwAFIgUABIiVABIg7AAg");
		this.shape_150.setTransform(549.9,427.2);

		this.shape_151 = new cjs.Shape();
		this.shape_151.graphics.f("#FFFFFF").s().p("AgRCJQh3gBhZgJIgggDQhOgKhNgQIghgHQhTgUglgYQgegTgBgWIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAdgoAZQgpAZhMATIgGABQhQAUhuAFIgVABIjPACIgcgBg");
		this.shape_151.setTransform(549.9,427.3);

		this.shape_152 = new cjs.Shape();
		this.shape_152.graphics.f("#FFFFFF").s().p("AgSCKQh2gBhZgJIghgEQhNgJhNgRIghgHQhTgUgmgYQgdgUgBgWIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAcgpAZQgoAZhNATIgGABQhQAUhuAGIgUABQhTACh9AAIgcAAg");
		this.shape_152.setTransform(549.9,427.3);

		this.shape_153 = new cjs.Shape();
		this.shape_153.graphics.f("#FFFFFF").s().p("AgSCLQh2gBhagJIgggEQhNgJhOgRIghgIQhTgUglgZQgdgTgBgWIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAdgpAYQgoAZhNATIgGABQhRAUhtAGIgUACQhSACh+ABIgcAAg");
		this.shape_153.setTransform(549.9,427.4);

		this.shape_154 = new cjs.Shape();
		this.shape_154.graphics.f("#FFFFFF").s().p("AgTCLQh1gBhbgJIgggDQhNgKhOgRIgggHQhTgVglgZQgdgUgBgWIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAcgpAZQgpAYhMATIgHACQhSAThsAHIgUACQhRACh/ABIgNAAIgPAAg");
		this.shape_154.setTransform(549.9,427.4);

		this.shape_155 = new cjs.Shape();
		this.shape_155.graphics.f("#FFFFFF").s().p("AgTCMQh1gBhbgJIghgDQhMgKhOgRIghgIQhSgVglgZQgdgUgBgWIAAgBQAAg7CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA7IgBAGQgEAcgqAYQgoAZhNASIgGACQhTAUhrAIIgUACQhQACiAACIgcAAg");
		this.shape_155.setTransform(549.9,427.5);

		this.shape_156 = new cjs.Shape();
		this.shape_156.graphics.f("#FFFFFF").s().p("AgUCMQh0AAhcgKIgggDQhMgKhPgRIghgIQhSgVglgaQgcgUgBgWIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAcgqAZQgpAXhMATIgHACQhTAUhrAIIgUACQhOAEiCABIgOABIgOgBg");
		this.shape_156.setTransform(549.9,427.6);

		this.shape_157 = new cjs.Shape();
		this.shape_157.graphics.f("#FFFFFF").s().p("AjkCDIghgDQhMgKhOgSIghgIQhSgVglgaQgcgUgBgXIAAgBQAAg6CzgqQCxgpD2AAQB8AABpAKQBnAKBWAVQCtAqAAA6IgBAHQgEAcgqAYQgpAXhNATIgHACQhTAUhqAJIgUACQhNAEiEACIgbAAQh0AAhcgKg");
		this.shape_157.setTransform(549.9,427.6);

		this.shape_158 = new cjs.Shape();
		this.shape_158.graphics.f("#FFFFFF").s().p("AjlCEIgggDQhMgKhPgTIghgHQhSgWgkgaQgcgVgBgWIAAgBQAAg6CzgrQCxgpD2AAQB8AABpALQBnAKBWAUQCtAqAAA7IgBAGQgEAcgrAYQgoAXhNATIgHACQhVAVhoAJIgUACQhNAEiEACIgcABQhzAAhdgKg");
		this.shape_158.setTransform(549.9,427.7);

		this.shape_159 = new cjs.Shape();
		this.shape_159.graphics.f("#FFFFFF").s().p("AjmCFIgggEQhLgKhQgTIgggHQhSgWgkgbQgcgUgBgXIAAgBQAAg6CzgqQCxgqD2AAQB8AABpALQBnAKBWAVQCtApAAA7IgBAGQgEAcgrAYQgpAXhNATIgHACQhVAVhoAKIgUABQhLAFiGADIgbAAQhzABhegKg");
		this.shape_159.setTransform(549.9,427.8);

		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

		// FlashAICB
		this.shape_160 = new cjs.Shape();
		this.shape_160.graphics.f("#FFC202").s().p("AjVPWQhfgHhVgOQg8gLgjgKIgGgBIhk9KQACAOA2gSQBUgbA5gFIC7gQQB2gJBoAAQCRAABfASQA9ALA7ADQBJADAVADQAhAEA7ATQAjAMACgMIigdKQgaAIg0AKIgYAEQhQAPhhAGIgCAAQhWAHhcAAQhcAAhhgHg");
		this.shape_160.setTransform(550,520.2);

		this.timeline.addTween(cjs.Tween.get(this.shape_160).wait(150));

		// wine
		this.instance_11 = new lib.wine();
		this.instance_11.parent = this;
		this.instance_11.setTransform(312.2,484.3,1,1,0,0,0,470,945.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(150));

		// Layer_11
		this.instance_12 = new lib.beer_glass();
		this.instance_12.parent = this;
		this.instance_12.setTransform(478,362);

		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(150));

		// wine-bottle
		this.instance_13 = new lib.winebottle();
		this.instance_13.parent = this;
		this.instance_13.setTransform(418.2,300.8,1,1,0,0,0,697.5,555.5);

		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150));

		// Layer_13
		this.instance_14 = new lib.food_bg();
		this.instance_14.parent = this;
		this.instance_14.setTransform(43,511);

		this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(150));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(3.5,6.3,727.6,756.7);


	// stage content:
	(lib.experienceSpokane_food = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});

		// 2_food
		this.instance = new lib._2_food();
		this.instance.parent = this;
		this.instance.setTransform(394.1,416.1,1,1,0,0,0,386.1,412.1);
		this.instance._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance).wait(288).to({_off:false},0).wait(144));

		// 2_food
		this.instance_1 = new lib._2_food();
		this.instance_1.parent = this;
		this.instance_1.setTransform(394.1,416.1,1,1,0,0,0,386.1,412.1);
		this.instance_1._off = true;

		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).to({_off:true},144).wait(144));

		// 2_food
		this.instance_2 = new lib._2_food();
		this.instance_2.parent = this;
		this.instance_2.setTransform(394.1,416.1,1,1,0,0,0,386.1,412.1);

		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},144).wait(288));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(386.5,410.3,727.6,756.7);
	// library properties:
	lib.properties = {
		id: 'AC456CF807874CD2AE06DE15469D525C',
		width: 750,
		height: 800,
		fps: 60,
		color: "#006666",
		opacity: 1.00,
		manifest: [
			{src:"assets/images/atlases/experienceSpokane_food_atlas_.png?1531429067048", id:"experienceSpokane_food_atlas_"}
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

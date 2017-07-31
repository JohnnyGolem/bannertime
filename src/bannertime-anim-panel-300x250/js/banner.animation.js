'use strict';

/**
 * Run the animation functions.
 */
Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/circle.png',
    'images/copy-a.png',
    'images/copy-b.png',
    'images/copy-c.png',
    'images/logo.png',
    'images/square.png',
    'images/triangle.png',
  ];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  this.copyA = this.smartObject({
    backgroundImage: 'images/copy-a.png',
    retina: true,
    parent: this.banner
  });

  this.copyB = this.smartObject({
    backgroundImage: 'images/copy-b.png',
    retina: true,
    parent: this.banner
  });

  this.copyC = this.smartObject({
    backgroundImage: 'images/copy-c.png',
    retina: true,
    parent: this.banner
  });

  this.logo = this.smartObject({
    backgroundImage: 'images/logo.png',
    parent: this.banner
  });

  this.shapesContainer = this.smartObject({
    width: this.bannerWidth,
    height: 60,
    parent: this.banner
  });

  this.circle = this.smartObject({
    backgroundImage: 'images/circle.png',
    retina: true,
    parent: this.shapesContainer
  });

  this.triangle = this.smartObject({
    backgroundImage: 'images/triangle.png',
    retina: true,
    parent: this.shapesContainer
  });

  this.square = this.smartObject({
    backgroundImage: 'images/square.png',
    retina: true,
    parent: this.shapesContainer
  });

};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.copyA.set({ left: 30, top: 20 });
  this.copyB.set({ left: 30, top: 60 });
  this.copyC.set({ left: 30, top: 100 });
  this.logo.centerHorizontal();
  this.logo.set({ top: 160 });
  this.shapesContainer.set({ top: 160 });
  this.circle.set({ left: 38 });
  this.triangle.centerHorizontal();
  this.square.set({ left: 202 });

  this.copyArray = [this.copyA, this.copyB, this.copyC];
  this.shapesArray = [this.circle, this.triangle, this.square];
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  var _this = this;

  function loop() {
    _this.timeline.gotoAndPlay('start');
  }

  this.timeline = new TimelineMax({ onComplete: loop })
.to($('#bg1'), 0.4, {top:-108},'+=0.5')
		.from($('#frame1'), 0.8, {opacity:0},'-=0.2')
		.from($('#cake'), 0.7, {left:300,bottom:70},'-=0.2')	
		.from($('#glass'), 0.7, {left:-36,bottom:-57},'-=0.6')
		.to($('#frame1'), 0.5, {opacity:0},'+=1')
		.from($('#frame2'), 0.5, {opacity:0})
		.to($('#cake'), 0, {opacity:0},'+=1')
		.to($('#nopiececake'), 0, {opacity:1})
		.to($('#piece'), 0, {opacity:1})
		.to($('#piece'), 1, {left:54,bottom:135})
		.to($('#piece'), 0.6, {opacity:0},'+=2')
		.to($('#nopiececake'), 0.6, {left:-200, bottom:0},'+=0.2')	
		.to($('#glass'), 0.3, {left:-36,bottom:65},'-=0.5')		
		.to($('#bg1'), 1.1, {top:-300})
		.to($('#frame2'), 0, {opacity:0},'-=0.8')
		.to($('#frame3'), 0.4, {opacity:1},'-=0.7')
		.from($('#card'), 0.4, {top:310},'+=0.1')
		.to($('#frame3'), 0.4, {top:-100},'+=2')
		.from($('#frame4'), 0.4, {top:-100})
		.to($('#logo'), 0.4, {opacity:1},'-=0.4')		
		.to($('#frame4'), 0.4, {top:-100},'+=2')
		.to($('#logo'), 0.4, {opacity:0},'-=0.4')
		.from($('#frame5'), 0.4, {top:-100})		
		.to($('#frame6'), 0.4, {opacity:1},'-=0.1')
		.to($('#frame7'), 0.4, {opacity:1},'-=0.1')	

};

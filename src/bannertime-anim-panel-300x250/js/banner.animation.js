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
    .addLabel('start', 0)
    .staggerFrom(this.copyArray, 2, { x: -this.bannerWidth, autoAlpha: 0 }, 0.2)
    .from(this.logo, 1.5, { y: '-=' + this.bannerHeight, ease: Bounce.easeOut })
    .to(this.logo, 1, { autoAlpha: 0 }, '+=1.0')
    .staggerFrom(this.shapesArray, 2, { autoAlpha: 0, scale: 0.1, ease: Elastic.easeOut.config(1, 0.3) }, 0.3)
    .staggerTo(this.shapesArray, 1, { y: 30, ease: Power4.easeInOut }, 0.15)
    .staggerTo(this.shapesArray, 1, { y: 0, ease: Power4.easeInOut }, 0.15, '-=0.15')
    .to(this.shapesContainer, 1.5, { rotation: 360, ease: Power3.easeInOut }, 'outro')
    .to(this.circle, 1, { y: 200, ease: Power4.easeInOut }, 'outro')
    .to(this.square, 1, { y: -200, ease: Power4.easeInOut }, 'outro')
    .to([this.circle, this.square], 0.5, { y: 0, ease: Power3.easeOut }, 'outro+=1');

};

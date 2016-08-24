"use strict";var Banner=function(){this.loader(),this.imageCache={}};Banner.prototype.onInit=function(){console.log("Banner initialised")},Banner.prototype.onPolite=function(){console.log("Polite loading scripts")},Banner.prototype.onVisible=function(){var e=this;this.politeLoad(["https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"],function(){e.start()})},Banner.prototype.smartObject=function(e){function t(){r.id&&(a.id=r.id),r.parent&&r.parent.appendChild(a),r.innerHTML&&(a.innerHTML=r.innerHTML),delete r.innerHTML,delete r.retina,delete r.parent,delete r.id,delete r.type,delete r.autoplay,delete r.loop,delete r.controls,delete r.muted,delete r.poster,delete r.preload,delete r.sources,TweenLite.set(a,r)}function n(){var e=".svg"===this.src.slice(-4);e&&document.body.appendChild(this),r.width=Math.round(r.width||(r.retina?this.width/2:this.width)),r.height=Math.round(r.height||(r.retina?this.height/2:this.height)),r.backgroundImage="url("+this.src+")",t(),e&&document.body.removeChild(this)}function o(e,t){var o=i.imageCache[e];o?t&&n.apply(o):(o=document.createElement("img"),o.src=e,t&&(o.onload=n),i.imageCache[e]=o)}var i=this,r=e||{};r.type=r.type||"div",r.position=r.position||"absolute",r.left=r.left||"0",r.top=r.top||"0";var a=document.createElement(r.type);a._settings=r.constructor();for(var s in r)a._settings[s]=r[s];switch(r.type){case"canvas":a.width=r.width,a.height=r.height;break;case"video":r.autoplay&&(a.autoplay=r.autoplay),r.loop&&(a.loop=r.loop),r.controls&&(a.controls=r.controls),r.muted&&(a.muted=r.muted),r.poster&&(a.poster=r.poster),r.preload&&(a.preload=r.preload)}if(r.sources){for(var c=r.sources,l=document.createDocumentFragment(),d=0;d<c.length;d++){var h=document.createElement("source");h.src=c[d].url,h.type=c[d].type,l.appendChild(h)}a.appendChild(l)}if(r.backgroundImage)if(a.style.backgroundSize=r.backgroundSize||"100% 100%",a.style.backgroundPosition=r.backgroundPosition||"center",a.style.backgroundRepeat=r.backgroundRepeat||"no-repeat","[object Array]"===Object.prototype.toString.call(r.backgroundImage)){a.images=r.backgroundImage;for(var p=0;p<a.images.length;++p)o(a.images[p],0===p)}else o(r.backgroundImage,!0);else t();return a.appendChildren=function(e){for(var t=document.createDocumentFragment(),n=0;n<e.length;n++)t.appendChild(e[n]);this.appendChild(t)},a.set=function(e){TweenLite.set(this,e)},a.to=function(e,t){TweenLite.to(this,e,t)},a.from=function(e,t){TweenLite.from(this,e,t)},a.fromTo=function(e,t,n){TweenLite.fromTo(this,e,t,n)},a.get=function(e){return this._gsTransform&&this._gsTransform[e]||this._gsTransform&&0===this._gsTransform[e]?this._gsTransform[e]:"px"===this.style[e].slice(-2)?parseFloat(this.style[e]):this.style[e]},a.center=function(){TweenLite.set(this,{top:"50%",marginTop:-this.offsetHeight/2,left:"50%",marginLeft:-this.offsetWidth/2})},a.centerHorizontal=function(){TweenLite.set(this,{left:"50%",marginLeft:-this.offsetWidth/2})},a.centerVertical=function(){TweenLite.set(this,{top:"50%",marginTop:-this.offsetHeight/2})},a.getOriginal=function(e){return a._settings[e]||0},a},Banner.prototype.preloadImages=function(e,t,n){for(var o=this,i=e.length,r=0,a=null,s=0;s<i;++s)a=document.createElement("img"),a.src=a.microSrc=e[s],a.onload=function(){o.imageCache[this.microSrc]=this,r++,r===i&&(n?t.call(n):t())}};
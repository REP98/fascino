/*! For license information please see LightBox.js.LICENSE.txt */
(()=>{"use strict";var t={563:(t,e,n)=>{function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}n.d(e,{l7:()=>l,aB:()=>f});String.prototype.valueOf,Object.prototype.toString;var o=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=function(t,e){o&&"__proto__"===e.name?o(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},s=function(t,e){if("__proto__"===e){if(!p(t,e))return;if(r)return r(t,e).value}return t[e]};function l(){for(var t,e,n,o,r,f,g,v,b,m=0,y=arguments.length,_=new Array(y),w=0;w<y;w++)_[w]=arguments[w];if(0!==_.length){for(g=_[0],m=_.length,b=1,v=!1,"boolean"==typeof g&&(v=g,g=_[1]||{},b=2),(c(g)||"object"!==i(g)&&"function"!=typeof g)&&(g={});b<m;++b)if(null!==_[b])for(e in t=_[b])p(t,e)&&(n=s(g,e),g!==(o=s(t,e))&&(r=u(o),v&&o&&(h(o)||r)?(r?(r=!1,f=n&&u(n)?n:[]):f=n&&h(n)?n:{},a(g,{name:e,newValue:l(v,f,o)})):d(o)||a(g,{name:e,newValue:o})));return g}}function h(t){var e;return!(!t||"[object Object]"!==Object.prototype.toString.call(t))&&(!(e=void 0!==t.prototype)||e.constructor&&"function"==typeof e.constructor)}function u(t){return!!t&&(t instanceof Array||Array.isArray(t)||t.length>=0&&t.splice instanceof Function)}function p(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function c(t){var e=[void 0,null,!1,0,0,"","0","0.0",undefined],n=e.length;if(void 0===t)return!0;for(var i=0;i<n;i++)if(t===e[i])return!0;if(u(t))return 0===t.length;if(h(t)){var o=0;for(var r in t)p(t,r)&&o++;return 0===o}return!1}function d(t){return null==t}function f(t,e){var n={},i=_$(t).data();return _$.each(i,(function(t,i){if(_$.hasProp(e,i))try{n[i]=JSON.parse(t)}catch(e){n[i]=t}})),_$.extend({},e,n)}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(563);function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var i=function(){function n(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.defaults={backgroundColor:"rgba(35, 39, 50, 0.8)",showCount:!0,showArrows:!0,showTitle:!0,wrap:!1,img:"img"},this.options=(0,t.l7)({},this.defaults,i),this.element=_$(e),this._create(),this._events()}var i,o,r;return i=n,o=[{key:"_UniqueName",value:function(t,e,n){if(!_$.empty(n)&&_$.hasProp(n,t)){if(n[t]!==e){if(t.indexOf("-")>-1){var i=t.split("-"),o=parseInt(i[i.length-1]);return i.join("-").replace(o,o+1)}return t+"-1"}return null}return t}},{key:"_wrapped",value:function(t,e){var n,i=_$("<div>").addClass("lb-wrap"),o=_$("<div>").addClass("lb-wrap-overlay").style({"background-color":this.options.backgroundColor}),r=_$.parseHTML('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">\n\t\t\t\t  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>\n\t\t\t\t</svg>');_$(t).addClass("lb-img"),_$(r).addClass("lb-wrap-icon").appendTo(o),this.options.showTitle&&_$("<div>").addClass("lb-wrap-caption").html(e).appendTo(o),o.appendTo(i),_$.empty(_$(t).prev()[0])?(n=_$(_$(t).next()[0]),i.append(t),i.insertBefore(n)):(n=_$(_$(t).prev()[0]),i.append(t),i.insertAfter(n))}},{key:"_createListItems",value:function(){var t=this;this.listImg=this.listImg||{},this.lightElem.find("ul").length>0?this.list=this.lightElem.find("ul"):this.list=_$("<ul>");var e=0;this.element.find(this.options.img).each((function(n){var i=_$(n).attr("alt")||_$(n).attr("title"),o=_$(n).attr("src"),r=_$("<li>"),a=_$(n).clone(!0);if(_$.empty(i)){var s=o.lastIndexOf("/")+1,l=o.lastIndexOf(".");i=o.substring(s,l)}var h=t._UniqueName(i,o,t.listImg);_$.empty(h)||(t.listImg[h]=o),_$(n).data("item",e),t.options.wrap?t._wrapped(n,i):_$(n).style("cursor","pointer"),_$(a).addClass("lightbox-img").appendTo(r),t.options.showTitle&&_$("<div>").addClass("lb-caption").html(i).appendTo(r),r.data("item",e),r.appendTo(t.list),0===e&&r.addClass("active"),e++}))}},{key:"_create",value:function(){var t=this;_$("body").find(".lightbox").length>0&&_$.empty(this.lightElem)?this.lightElem=_$("body").find(".lightbox"):0===_$("body").find(".lightbox").length&&(this.lightElem=_$("<div>"),this.lightElem.style({backgroundColor:this.options.backgroundColor}).addClass("lightbox").appendTo("body")),this._createListItems();var e=Object.keys(this.listImg).length;this.options.showCount&&(this.count=_$("<div>"),this.count.addClass("lb-count").html("1/".concat(e)).appendTo(this.lightElem)),this.closeBtn=_$("<button>"),this.closeBtn.addClass("lb-close").attr({type:"button"}).html('<span class="hidden-visual">Cerrar</span>').click((function(e){e.preventDefault(),t.hide()})).appendTo(this.lightElem),this.list.appendTo(this.lightElem),this.options.showArrows&&(this.lbPrev=_$("<button>"),this.lbNext=_$("<button>"),this.lbPrev.addClass("lb-prev").attr({type:"button"}).html('<span class="hidden-visual">Anterior</span>').click((function(e){e.preventDefault(),t.go(parseInt(t.getCurrentView())-1)})).appendTo(this.lightElem),this.lbNext.addClass("lb-next").attr({type:"button"}).html('<span class="hidden-visual">Siguiente</span>').click((function(e){e.preventDefault(),t.go(parseInt(t.getCurrentView())+1)})).appendTo(this.lightElem))}},{key:"_events",value:function(){var t=this,e=this.options.wrap?".lb-wrap":this.options.img;this.element.on("click.lightbox",e,(function(e){var n="IMG"===this.nodeName?_$(this):_$(this).find("img");n.data("stopDefault")&&e.preventDefault();var i=n.data("item")||0;t.go(i),t.show()}))}},{key:"hide",value:function(){return this.lightElem.removeClass("show"),this}},{key:"show",value:function(){return this.lightElem.addClass("show"),this}},{key:"getCurrentView",value:function(){return this.list.find("li.active").data("item")||0}},{key:"go",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t<0?t=0:t>this.list.find("li").length-1&&(t=this.list.find("li").length-1);var e=parseInt(this.getCurrentView());return t!==e&&(this.list.find("li").removeClass("active"),_$(this.list.find("li").get(t)).addClass("active"),t>0?this.list.style("transform","translateX(-".concat(100*t,"%)")):this.list.style("transform","translateX(0%)"),this.options.showCount&&this.count.html("".concat(t+1,"/").concat(this.list.find("li").length))),this}}],o&&e(i.prototype,o),r&&e(i,r),Object.defineProperty(i,"prototype",{writable:!1}),n}();_$.addFn("lightbox",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.each((function(n){var o=(0,t.aB)(n,{backgroundColor:"rgba(35, 39, 50, 0.8)",showCount:!0,showArrows:!0,showTitle:!0,wrap:!1,img:"img"}),r=(0,t.l7)({},o,e),a=new i(n,r);_$(n).data("lightbox",a)}))}))})()})();
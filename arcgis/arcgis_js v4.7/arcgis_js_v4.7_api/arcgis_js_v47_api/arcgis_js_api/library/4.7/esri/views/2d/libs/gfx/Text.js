// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/has dojox/gfx/_base ./Shape ./svg".split(" "),function(d,f,g,h,e,k,l){Object.defineProperty(f,"__esModule",{value:!0});var m=h("chrome")?"auto":"optimizeLegibility";d=function(d){function c(a){var b=d.call(this)||this;b.fontStyle=null;b.shape=e.getDefault("Text");b.rawNode=a;return b}g(c,d);c.prototype.getFont=function(){return this.fontStyle};c.prototype.setFont=function(a){this.fontStyle="string"===typeof a?e.splitFontString(a):
e.makeParameters(e.defaultFont,a);this._setFont();return this};c.prototype._setFont=function(){var a=this.fontStyle;this.rawNode.setAttribute("font-style",a.style);this.rawNode.setAttribute("font-weight",a.weight);this.rawNode.setAttribute("font-size",a.size);this.rawNode.setAttribute("font-family",a.family)};c.prototype.setShape=function(a){this.shape=e.makeParameters(this.shape,a);this.bbox=null;a=this.rawNode;var b=this.shape;a.setAttribute("x",b.x);a.setAttribute("y",b.y);a.setAttribute("text-anchor",
b.align);a.setAttribute("text-decoration",b.decoration);a.setAttribute("rotate",b.rotated?90:0);a.setAttribute("kerning",b.kerning?"auto":0);a.setAttribute("text-rendering",m);a.firstChild?a.firstChild.nodeValue=b.text:a.appendChild(l._createTextNode(b.text));return this};c.prototype.getTextWidth=function(){var a=this.rawNode,b=a.parentNode,a=a.cloneNode(!0);a.style.visibility="hidden";var c=0,d=a.firstChild.nodeValue;b.appendChild(a);if(""!==d)for(;!c;)c=a.getBBox?parseInt(a.getBBox().width,10):
68;b.removeChild(a);return c};c.prototype.getBoundingBox=function(){var a=null;if(this.getShape().text)try{a=this.rawNode.getBBox()}catch(b){a={x:0,y:0,width:0,height:0}}return a};c.nodeType="text";return c}(k.default);f.default=d});
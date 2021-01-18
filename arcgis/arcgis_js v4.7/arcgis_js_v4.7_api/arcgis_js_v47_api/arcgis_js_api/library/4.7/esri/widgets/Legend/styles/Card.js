// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/i18n!../../../nls/common dojo/i18n!../../Legend/nls/Legend dojox/gfx ../../../core/lang ../../../core/accessorSupport/decorators ../../Widget ../../Legend/support/styleUtils ../../support/colorUtils ../../support/widget".split(" "),function(K,L,E,w,F,G,z,H,x,I,y,J,e){return function(D){function n(a){a=D.call(this)||this;a._hasIndicators=!1;a._selectedSectionName=null;a._sectionNames=[];
a._sectionMap=new Map;a.activeLayerInfos=null;a.view=null;return a}E(n,D);n.prototype.render=function(){var a=this;this._sectionNames.length=0;this._hasIndicators=768>=this.view.container.clientWidth;var d=this.activeLayerInfos,d=d&&d.toArray().map(function(b){return a._renderLegendForLayer(b)}).filter(function(a){return!!a});this._hasIndicators?this._selectedSectionName&&-1!==this._sectionNames.indexOf(this._selectedSectionName)||(this._selectedSectionName=this._sectionNames&&this._sectionNames[0]):
this._selectedSectionName=null;var b=this._sectionNames.length,h=this._sectionNames.map(function(f,d){d=H.substitute({index:d+1,total:b},F.pagination.pageText);return e.tsx("div",{key:f,"aria-label":d,title:d,tabIndex:0,onclick:a._selectSection,onkeydown:a._selectSection,bind:a,class:a.classes("esri-legend--card__carousel-indicator",(g={},g["esri-legend--card__carousel-indicator--activated"]=a._selectedSectionName===f,g)),"data-section-name":f});var g}),h=this._hasIndicators?e.tsx("div",{class:"esri-legend--card__carousel-indicator-container",
key:"carousel-navigation"},h):null,d=this._hasIndicators?this._sectionMap.get(this._selectedSectionName):d&&d.length?d:null;return e.tsx("div",{class:"esri-legend--card esri-widget"},h,d?d:e.tsx("div",{class:"esri-legend--card__message"},G.noLegend))};n.prototype._selectSection=function(a){if(a=a.target.getAttribute("data-section-name"))this._selectedSectionName=a};n.prototype._renderLegendForLayer=function(a){var d=this;if(!a.ready)return null;var b="esri-legend--card__"+a.layer.uid+"-version-"+
a.version;if(a.children.length){var h=a.children.map(function(a){return d._renderLegendForLayer(a)}).toArray();this._sectionNames.push(b);return e.tsx("div",{key:a.layer.uid,class:"esri-legend--card__service"},e.tsx("div",{class:"esri-legend--card__service-caption-container"},a.title),h)}if((b=a.legendElements)&&!b.length)return null;b=b.map(function(b){return d._renderLegendForElement(b,a.layer)}).filter(function(a){return!!a});return b.length?e.tsx("div",{key:a.layer.uid,class:"esri-legend--card__service"},
e.tsx("div",{class:"esri-legend--card__service-caption-container"},e.tsx("div",{class:"esri-legend--card__service-caption-text"},a.title)),e.tsx("div",{class:"esri-legend--card__service-content"},b)):null};n.prototype._renderLegendForElement=function(a,d){var b=this,h="color-ramp"===a.type,f="opacity-ramp"===a.type,k="size-ramp"===a.type,g=a.title,q=null;"string"===typeof g?q=g:g&&(q=y.getTitle(g,h||f),q=g.title?g.title+" ("+q+")":q);var g="esri-legend--card__"+d.uid+"-type-"+a.type,n=this._hasIndicators?
e.tsx("p",{class:"esri-legend--card__carousel-title"},d.title):null,c=null;"symbol-table"===a.type?(h=a.infos.map(function(c){return b._renderLegendForElementInfo(c,d,k,a.legendType)}).filter(function(a){return!!a}),this._hasIndicators||h.reverse(),h.length&&(f=h[0].properties.classes&&h[0].properties.classes["esri-legend--card__symbol-row"],f=(l={},l["esri-legend--card__label-container"]=!f,l),c=e.tsx("div",{key:g,class:"esri-legend--card__section"},n,e.tsx("div",{class:"esri-legend--card__layer-caption"},
q),e.tsx("div",{classes:f},h)))):h||f?c=e.tsx("div",{key:g,class:"esri-legend--card__section"},n,e.tsx("div",{class:"esri-legend--card__layer-caption"},q),this._renderLegendForRamp(a.infos,a.overlayColor,f)):k&&(c=e.tsx("div",{key:g,class:"esri-legend--card__section"},n,e.tsx("div",{class:"esri-legend--card__layer-caption"},q),this._renderSizeRamps(a.infos)));if(!c)return null;this._sectionNames.push(g);this._sectionMap.set(g,c);return c;var l};n.prototype._renderLegendForElementInfo=function(a,d,
b,h){if(a.type)return this._renderLegendForElement(a,d);b=y.isImageryStretchedLegend(d,h);if(a.symbol&&a.preview){if(!a.label)return-1===a.symbol.type.indexOf("simple-fill")?e.tsx("div",{bind:a.preview,afterCreate:y.attachToNode}):null;if(-1!==a.symbol.type.indexOf("marker"))return d=(l={},l["esri-legend--card__symbol-cell"]=this._hasIndicators,l),e.tsx("div",{class:this.classes("esri-legend--card__layer-row",(t={},t["esri-legend--card__symbol-row"]=this._hasIndicators,t))},e.tsx("div",{classes:d,
bind:a.preview,afterCreate:y.attachToNode}),e.tsx("div",{class:this.classes("esri-legend--card__image-label",(v={},v["esri-legend--card__label-cell"]=this._hasIndicators,v))},a.label||""));v=t=l=255;d=0;var f=h=b=255,k=0,g=a.symbol.color&&a.symbol.color.a,q=a.symbol.outline&&a.symbol.outline.color.a;g&&(l=a.symbol.color.r,t=a.symbol.color.g,v=a.symbol.color.b,d=a.symbol.color.a);q&&(b=a.symbol.outline.color.r,h=a.symbol.outline.color.g,f=a.symbol.outline.color.b,k=a.symbol.outline.color.a);var n=
J.isBright(a.symbol.color),c=n?"rgba(255, 255, 255, .6)":"rgba(0, 0, 0, .6)";return e.tsx("div",{key:a.label,class:"esri-legend--card__label-element",styles:{background:g?"rgba("+l+", "+t+", "+v+", "+d+")":"none",color:n?"black":"white",textShadow:"-1px -1px 0 "+c+",\n                                              1px -1px 0 "+c+",\n                                              -1px 1px 0 "+c+",\n                                              1px 1px 0 "+c,border:q?"1px solid rgba("+b+", "+h+", "+f+
", "+k+")":"none"}}," ",a.label," ")}if(a.src)return l=this._renderImage(a,d,b),e.tsx("div",{class:"esri-legend--card__layer-row"},l,e.tsx("div",{class:"esri-legend--card__image-label"},a.label||""));var l,t,v};n.prototype._renderImage=function(a,d,b){var h=a.label,f=a.src,k=a.opacity;b=(g={},g["esri-legend--card__imagery-layer-image--stretched"]=b,g["esri-legend--card__symbol"]=!b,g);return e.tsx("img",{alt:h,src:f,border:0,width:a.width,height:a.height,classes:b,styles:{opacity:""+(null!=k?k:d.opacity)}});
var g};n.prototype._renderSizeRamps=function(a){var d=document.createElement("div"),b,h=a[a.length-1].symbol.color,f,k,g=a[0].label,q=a[a.length-1].label,n=a[0].symbol.style&&"circle"===a[0].symbol.style;try{if(this._hasIndicators)if(k=100,n){var c=a[0].symbol.size/2,l=a[a.length-1].symbol.size/2;f=2*c;var t=k-c-l,v=Math.sqrt(Math.pow(t,2)-Math.pow(c-l,2)),r=c*v/t,w=c+r,x=c+Math.sqrt(Math.pow(c,2)-Math.pow(r,2)),u=l*r/c,A=c+u,B=k-(l-Math.sqrt(Math.pow(l,2)-Math.pow(u,2))),r=c-r,u=c-u;b=z.createSurface(d,
f,k);b.createCircle({cx:c,cy:c,r:c}).setFill(h).setStroke({color:"#ddd",width:1});b.createCircle({cx:c,cy:k-l,r:l}).setFill(h).setStroke({color:"#ddd",width:1});b.createLine({x1:w,y1:x,x2:A,y2:B}).setStroke({color:"#ddd",width:1});b.createLine({x1:r,y1:x,x2:u,y2:B}).setStroke({color:"#ddd",width:1})}else{var m=Math.max(a[0].symbol.height,a[0].symbol.width),p=Math.max(a[a.length-1].symbol.height,a[a.length-1].symbol.width);f=m;b=z.createSurface(d,f,k);b.createRect({x:0,y:0,height:m,width:m}).setStroke({color:"#ddd",
width:1});b.createRect({x:m/2-p/2,y:k-p,height:p,width:p}).setStroke({color:"#ddd",width:1});b.createImage({src:a[0].symbol.url,height:m,width:m});b.createImage({src:a[a.length-1].symbol.url,height:p,width:p,y:k-p,x:m/2-p/2});b.createLine({x1:0,y1:m,x2:m/2-p/2,y2:k-p}).setStroke({color:"#ddd",width:1});b.createLine({x1:f,y1:m,x2:m/2+p/2,y2:k-p}).setStroke({color:"#ddd",width:1})}else f=180,n?(c=a[0].symbol.size/2,l=a[a.length-1].symbol.size/2,k=2*c,t=f-c-l,v=Math.sqrt(Math.pow(t,2)-Math.pow(c-l,2)),
r=c*v/t,x=c-r,w=f-(c+Math.sqrt(Math.pow(c,2)-Math.pow(r,2))),u=l*r/c,B=c-u,A=l-Math.sqrt(Math.pow(l,2)-Math.pow(u,2)),r=c+r,u=c+u,b=z.createSurface(d,f,k),b.createCircle({cx:f-c,cy:c,r:c}).setFill(h).setStroke({color:"#ddd",width:1}),b.createCircle({cx:l,cy:c,r:l}).setFill(h).setStroke({color:"#ddd",width:1}),b.createLine({x1:w,y1:x,x2:A,y2:B}).setStroke({color:"#ddd",width:1}),b.createLine({x1:w,y1:r,x2:A,y2:u}).setStroke({color:"#ddd",width:1})):(m=Math.max(a[0].symbol.height,a[0].symbol.width),
p=Math.max(a[a.length-1].symbol.height,a[a.length-1].symbol.width),b=z.createSurface(d,f,m),b.createRect({x:0,y:m/2-p/2,height:p,width:p}).setStroke({color:"#ddd",width:1}),b.createRect({x:f-m,y:0,height:m,width:m}).setStroke({color:"#ddd",width:1}),b.createImage({src:a[a.length-1].symbol.url,height:p,width:p,y:m/2-p/2}),b.createImage({src:a[0].symbol.url,height:m,width:m,x:f-m}),b.createLine({x1:p,y1:m/2-p/2,x2:f-m,y2:0}).setStroke({color:"#ddd",width:1}),b.createLine({x1:p,y1:m/2+p/2,x2:f-m,y2:m}).setStroke({color:"#ddd",
width:1})),h=g,g=q,q=h}catch(M){b.clear(),b.destroy()}return b?e.tsx("div",{class:this.classes("esri-legend--card__layer-row",(C={},C["esri-legend--card__size-ramp-row"]=this._hasIndicators,C))},e.tsx("div",{class:"esri-legend--card__ramp-label"},g),e.tsx("div",{class:"esri-legend--card__size-ramp-container"},e.tsx("div",{bind:d,afterCreate:y.attachToNode})),e.tsx("div",{class:"esri-legend--card__ramp-label"},q)):null;var C};n.prototype._renderLegendForRamp=function(a,d,b){var h=a.length-1;b=2<h?
25*h:100;var f=b+20;d=document.createElement("div");d.style.width=f+"px";var k=z.createSurface(d,f,25),g=a.slice(0).reverse();try{g.forEach(function(a,b){a.offset=b/h}),k.createPath("M0 12.5 L10 0 L10 25 Z").setFill(g[0].color).setStroke(null),k.createRect({x:10,y:0,width:b,height:25}).setFill({type:"linear",x1:10,y1:0,x2:b+10,y2:0,colors:g}).setStroke(null),k.createPath("M"+(b+10)+" 0 L"+f+" 12.5 L"+(b+10)+" 25 Z").setFill(g[g.length-1].color).setStroke(null)}catch(q){k.clear(),k.destroy()}if(!k)return null;
b=g.filter(function(a,b){return!!a.label&&0!==b&&b!==g.length-1}).map(function(a){return e.tsx("div",{class:"esri-legend--card__interval-separators-container"},e.tsx("div",{class:"esri-legend--card__interval-separator"},"|"),e.tsx("div",{class:"esri-legend--card__ramp-label"},a.label))});return e.tsx("div",{class:"esri-legend--card__layer-row"},e.tsx("div",{class:"esri-legend--card__ramp-label"},a[a.length-1].label),e.tsx("div",{class:"esri-legend--card__symbol-container"},e.tsx("div",{bind:d,afterCreate:y.attachToNode}),
b),e.tsx("div",{class:"esri-legend--card__ramp-label"},a[0].label))};w([e.renderable(),x.property()],n.prototype,"activeLayerInfos",void 0);w([x.property()],n.prototype,"view",void 0);w([e.accessibleHandler()],n.prototype,"_selectSection",null);return n=w([x.subclass("esri.widgets.Legend.styles.Card")],n)}(x.declared(I))});
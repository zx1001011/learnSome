// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ../../support/Evented ../../tiling/TileKey".split(" "),function(d,e,f,k,g,h){Object.defineProperty(e,"__esModule",{value:!0});d=function(d){function c(a){var b=d.call(this)||this;b._tiles=new Map;b.tiles=[];b.tileInfo=a;b.spatialReference=a.spatialReference;return b}f(c,d);c.prototype.destroy=function(){this._tiles.clear()};c.prototype.has=function(a){return this._tiles.has(a)};c.prototype.get=
function(a){return this._tiles.get(a)};c.prototype.findByKey=function(a){return this._tiles.get(a.id)};c.prototype.add=function(a){if(!this.has(a)){var b=new h(a),c=this.tileInfo.lodAt(b.level),d=c.resolution,c=c.scale,e=this.tileInfo.getTileBounds([0,0,0,0],b),b={id:a,key:b,bounds:e,resolution:d,scale:c};this._tiles.set(a,b);this.tiles.push(b);this.emit("add",b)}};c.prototype.delete=function(a){if(this.has(a)){var b=this.get(a);this._tiles.delete(a);this.tiles.splice(this.tiles.indexOf(b),1);this.emit("remove",
b)}};return c}(g.default);e.default=d});
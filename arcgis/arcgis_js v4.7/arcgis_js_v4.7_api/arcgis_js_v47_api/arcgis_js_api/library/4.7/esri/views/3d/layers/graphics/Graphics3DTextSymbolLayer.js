// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../Color ../../../../core/screenUtils ../../../../symbols/callouts/calloutUtils ./ElevationAligners ./Graphics3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/TextTexture ../../webgl-engine/materials/HUDMaterial".split(" "),function(N,O,v,B,w,E,F,G,u,x,y,H,I,J,C){var D=[1,1,1,1],K=[0,0,1],z={mode:"relative-to-ground",
offset:0},L=[0,0,0,1];return function(e){function c(){var a=null!==e&&e.apply(this,arguments)||this;a._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1};return a}v(c,e);c.prototype._prepareResources=function(){if(!this._isPropertyDriven("size")){var a=y.validateSymbolLayerSize(this._getTextSize());if(a){this._logWarning(a);this.reject();return}}this._anchor="center";this.resolve()};c.prototype.destroy=function(){e.prototype.destroy.call(this);this.isFulfilled()||this.reject()};
c.prototype.createGraphics3DGraphic=function(a,b,c,A){var f="polyline"===a.geometry.type,e=this._getGeometryCentroid(a);if(!e)return this._logWarning("unsupported geometry type for text symbol: "+a.geometry.type),null;var k=this._context.layer.id+"_label_"+a.uid,d=b.text||this.symbol.text;if(!d||1>d.length)return null;b&&null!=b.needsOffsetAdjustment&&(this._elevationOptions.needsOffsetAdjustment=b.needsOffsetAdjustment);var m=this.getGraphicElevationContext(a,b.elevationOffset||0);return this._createAs3DShape(this.symbol,
e,d,m,k,a.uid,b,c,A,f)};c.prototype.getGraphicElevationContext=function(a,b){void 0===b&&(b=0);a=e.prototype.getGraphicElevationContext.call(this,a);a.addOffsetRenderUnits(b);return a};c.prototype.layerPropertyChanged=function(a,b,c){if("opacity"===a)this._logWarning("layer opacity change not yet implemented in Graphics3DTextSymbolLayer");else if("elevationInfo"===a){this._updateElevationContext();if(b)for(var e in b){a=b[e];var f=c(a);f&&this.updateGraphicElevationContext(a.graphic,f)}return!0}return!1};
c.prototype.updateGraphicElevationContext=function(a,b){a=this.getGraphicElevationContext(a,b.metadata.elevationOffset);b.elevationContext.set(a);b.needsElevationUpdates=u.needsElevationUpdates2D(a.mode)||"absolute-height"===a.mode};c.prototype._defaultElevationInfoNoZ=function(){return z};c.prototype._createAs3DShape=function(a,b,c,e,f,v,k,d,m,g){var q=k.centerOffset||L,n=k.screenOffset||[0,0],r=k.debugDrawBorder||!1,x=k.translation||[0,0,0],t=k.anchor||this._anchor||"center";this._anchor=t;var p=
a.material?B.toUnitRGBA(a.material.color):D,l=a.halo&&a.halo.color&&0<a.halo.size,y=l?B.toUnitRGBA(a.halo.color):D,l=l?w.pt2px(a.halo.size):0,z=this._getTextSize(a);a=new J(c,{size:z,color:p,font:{family:a.font&&a.font.family?a.font.family:"Arial",weight:a.font&&a.font.weight?a.font.weight:"normal",style:a.font&&a.font.style?a.font.style:"normal"},halo:{size:l,color:y}},f);m=(p=m&&m.canHoldTextTexture(a))?m.addTextTexture(a):null;var h;d?h=k:E.isCalloutSupport(this.symbolContainer)&&this.symbolContainer.hasVisibleVerticalOffset()&&
(h=this.symbolContainer);n={textureId:p?m.texture.id:a.id,texCoordScale:p?[1,1]:a.getTexcoordScale(),occlusionTest:!0,screenOffset:n,anchorPos:t,polygonOffset:!0,color:[1,1,1,1],centerOffsetUnits:k.centerOffsetUnits,debugDrawBorder:r,drawInSecondSlot:!0};h&&h.verticalOffset&&(h=h.verticalOffset,r=h.minWorldLength,t=h.maxWorldLength,n.verticalOffset={screenLength:w.pt2px(h.screenLength),minWorldLength:r||0,maxWorldLength:null!=t?t:Infinity});this._context.screenSizePerspectiveEnabled&&(h=this._context.sharedResources,
r=h.screenSizePerspectiveSettings,n.screenSizePerspective=h.screenSizePerspectiveSettingsLabels.overridePadding(l),n.screenSizePerspectiveAlignment=r);g&&(n.shaderPolygonOffset=1E-4);g=null;l=JSON.stringify(n);null!=d?(g=d.getMaterial(l),null==g?(g=new C(n,f),d.addMaterial(l,g)):p&&g.setTextureDirty()):g=new C(n,f);g=[g];l=[a.getTextWidth(),a.getTextHeight()];q=I.createPointGeometry(K,x,void 0,l,q,m?m.uvMinMax:null);q=[new H(q,f)];f=u.createStageObjectForPoint.call(this,b,q,[g],null,null,e,f,this._context.layer.uid,
v,!0);d=new G(this,f.object,q,null==d?g:null,p?null:[a],F.perObjectElevationAligner,e);d.alignedTerrainElevation=f.terrainElevation;d.needsElevationUpdates=u.needsElevationUpdates2D(e.mode)||"absolute-height"===e.mode;var A=p?a.getTextWidth():a.getWidth(),M=p?a.getTextHeight():a.getHeight();d.getScreenSize=function(a){void 0===a&&(a=Array(2));a[0]=A;a[1]=M;return a};d.metadata={labelText:c,elevationOffset:k.elevationOffset||0};u.extendPointGraphicElevationContext(d,b,this._context.elevationProvider);
return d};c.prototype._getTextSize=function(a){return w.pt2px((a||this.symbol).size)||12};return c}(x)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../layers/LayerView".split(" "),function(k,l,g,c,f,b,h){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.attached=!1;a.moving=!1;a.updateRequested=!1;return a}g(a,d);a.prototype.initialize=function(){var a=this;this.when(function(){a.requestUpdate()});f.init(this,"suspended",function(b){a.container.visible=
!b;!b&&a.updateRequested&&a.view.requestLayerViewUpdate(a)},!0);f.init(this,"fullOpacity",function(b){a.container.opacity=b},!0);var b=function(){this.notifyChange("rendering")}.bind(this);this.container.on("post-render",b);this.container.on("will-render",b)};a.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach());this.updateRequested=!1;this.layer=null};Object.defineProperty(a.prototype,"rendering",{get:function(){return this.isRendering()},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0});a.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))};a.prototype.processUpdate=function(a){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",a),this.updateRequested&&!this.suspended&&(this.updateRequested=
!1,this.update(a)))};a.prototype.isUpdating=function(){return!1};a.prototype.isRendering=function(){return this.attached&&(this.moving||this.container.renderRequested)};a.prototype.canResume=function(){var a=this.inherited(arguments),b=this.layer;if(a&&null!=b.minScale&&null!=b.minScale){var a=this.view.scale,c=b.minScale,b=b.maxScale,d=!c,e=!b;!d&&a<=c&&(d=!0);!e&&a>=b&&(e=!0);a=d&&e}return a};c([b.property()],a.prototype,"attached",void 0);c([b.property()],a.prototype,"container",void 0);c([b.property()],
a.prototype,"moving",void 0);c([b.property({dependsOn:["moving"]})],a.prototype,"rendering",null);c([b.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],a.prototype,"suspended",void 0);c([b.property({readOnly:!0})],a.prototype,"updateParameters",void 0);c([b.property()],a.prototype,"updateRequested",void 0);c([b.property({dependsOn:["updateRequested","attached"]})],a.prototype,"updating",null);c([b.property()],a.prototype,"view",void 0);return a=c([b.subclass("esri.views.2d.layers.LayerView2D")],
a)}(b.declared(h))});
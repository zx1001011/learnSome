/*! ArcGIS API for JavaScript 4.7 | Copyright (c) 2018 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["dojo/_base/declare","dojo/_base/lang","dojox/mvc/StatefulArray","dojo/store/Memory","dojo/Evented","Quoin/Base"],function(t,e,i,o,n,d){return t("Quoin.Collection",[o,n,d],{constructor:function(t,o){this.model=t.model,this.data=new i(o||[]),this.data.watchElements(e.hitch(this,function(t,e,i){e.length&&this.emit("item:removed",{index:t,removals:e}),i.length&&this.emit("item:added",{index:t,additions:i})}))},forEach:function(t,e){for(var i=0;i<this.data.length;i++){var o=this.data[i];t.apply(e||this,[o,i,this])}},create:function(t,e){var i=new this.model(t);return this.add(i,e),i.create(t)},add:function(t){t.set("collection",this),this.inherited(arguments)},remove:function(t){this.get(t).set("collection",null),this.inherited(arguments)},fetch:function(){},destroy:function(t){var e=this.get(t);this.remove(t),e.destroy()}})});
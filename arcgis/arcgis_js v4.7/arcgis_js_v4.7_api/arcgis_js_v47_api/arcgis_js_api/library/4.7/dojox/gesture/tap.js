//>>built
define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","./Base","../main"],function(d,f,g,h,e){d.experimental("dojox.gesture.tap");d=f(h,{defaultEvent:"tap",subEvents:["hold","doubletap"],holdThreshold:500,doubleTapTimeout:250,tapRadius:10,press:function(a,b){if(b.touches&&2<=b.touches.length)clearTimeout(a.tapTimeOut),delete a.context;else{var c=b.target;this._initTap(a,b);a.tapTimeOut=setTimeout(g.hitch(this,function(){this._isTap(a,b)&&this.fire(c,{type:"tap.hold"});delete a.context}),
this.holdThreshold)}},release:function(a,b){if(a.context&&this._isTap(a,b))switch(a.context.c){case 1:this.fire(b.target,{type:"tap"});break;case 2:this.fire(b.target,{type:"tap.doubletap"})}clearTimeout(a.tapTimeOut)},_initTap:function(a,b){a.context||(a.context={x:0,y:0,t:0,c:0});var c=(new Date).getTime();c-a.context.t<=this.doubleTapTimeout?a.context.c++:(a.context.c=1,a.context.x=b.screenX,a.context.y=b.screenY);a.context.t=c},_isTap:function(a,b){if(!a.context)return!1;var c=Math.abs(a.context.y-
b.screenY);return Math.abs(a.context.x-b.screenX)<=this.tapRadius&&c<=this.tapRadius}});e.gesture.tap=new d;e.gesture.tap.Tap=d;return e.gesture.tap});
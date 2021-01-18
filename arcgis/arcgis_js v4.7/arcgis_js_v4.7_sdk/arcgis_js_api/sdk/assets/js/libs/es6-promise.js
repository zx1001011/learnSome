/*! ArcGIS API for JavaScript 4.7 | Copyright (c) 2018 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){N=t}function r(t){U=t}function o(){return void 0!==L?function(){L(s)}:i()}function i(){var t=setTimeout;return function(){return t(s,1)}}function s(){for(var t=0;t<K;t+=2){(0,I[t])(I[t+1]),I[t]=void 0,I[t+1]=void 0}K=0}function u(t,e){var n=this,r=new this.constructor(a);void 0===r[Q]&&M(r);var o=n._state;if(o){var i=arguments[o-1];U(function(){return j(o,r,i,n._result)})}else g(n,r,t,e);return r}function c(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(a);return y(n,t),n}function a(){}function f(){return new TypeError("You cannot resolve a promise with itself")}function l(){return new TypeError("A promises callback cannot return that same promise.")}function h(t){try{return t.then}catch(t){return Z.error=t,Z}}function p(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function v(t,e,n){U(function(t){var r=!1,o=p(n,e,function(n){r||(r=!0,e!==n?y(t,n):b(t,n))},function(e){r||(r=!0,w(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,w(t,o))},t)}function d(t,e){e._state===V?b(t,e._result):e._state===X?w(t,e._result):g(e,void 0,function(e){return y(t,e)},function(e){return w(t,e)})}function _(t,n,r){n.constructor===t.constructor&&r===u&&n.constructor.resolve===c?d(t,n):r===Z?(w(t,Z.error),Z.error=null):void 0===r?b(t,n):e(r)?v(t,n,r):b(t,n)}function y(e,n){e===n?w(e,f()):t(n)?_(e,n,h(n)):b(e,n)}function m(t){t._onerror&&t._onerror(t._result),A(t)}function b(t,e){t._state===R&&(t._result=e,t._state=V,0!==t._subscribers.length&&U(A,t))}function w(t,e){t._state===R&&(t._state=X,t._result=e,U(m,t))}function g(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+V]=n,o[i+X]=r,0===i&&t._state&&U(A,t)}function A(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?j(n,r,o,i):o(i);t._subscribers.length=0}}function S(t,e){try{return t(e)}catch(t){return Z.error=t,Z}}function j(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=S(r,o),s===Z?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void w(n,l())}else s=o,c=!0;n._state!==R||(i&&c?y(n,s):a?w(n,u):t===V?b(n,s):t===X&&w(n,s))}function E(t,e){try{e(function(e){y(t,e)},function(e){w(t,e)})}catch(e){w(t,e)}}function T(){return $++}function M(t){t[Q]=$++,t._state=void 0,t._result=void 0,t._subscribers=[]}function P(){return new Error("Array Methods must be provided an Array")}function x(t){return new tt(this,t).promise}function C(t){var e=this;return new e(D(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function O(t){var e=this,n=new e(a);return w(n,t),n}function k(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function F(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function Y(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=et}var q=void 0;q=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var D=q,K=0,L=void 0,N=void 0,U=function(t,e){I[K]=t,I[K+1]=e,2===(K+=2)&&(N?N(s):J())},W="undefined"!=typeof window?window:void 0,z=W||{},B=z.MutationObserver||z.WebKitMutationObserver,G="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),H="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,I=new Array(1e3),J=void 0;J=G?function(){return function(){return process.nextTick(s)}}():B?function(){var t=0,e=new B(s),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():H?function(){var t=new MessageChannel;return t.port1.onmessage=s,function(){return t.port2.postMessage(0)}}():void 0===W&&"function"==typeof require?function(){try{var t=Function("return this")().require("vertx");return L=t.runOnLoop||t.runOnContext,o()}catch(t){return i()}}():i();var Q=Math.random().toString(36).substring(2),R=void 0,V=1,X=2,Z={error:null},$=0,tt=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(a),this.promise[Q]||M(this.promise),D(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?b(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&b(this.promise,this._result))):w(this.promise,P())}return t.prototype._enumerate=function(t){for(var e=0;this._state===R&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===c){var o=h(t);if(o===u&&t._state!==R)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===et){var i=new n(a);_(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===R&&(this._remaining--,t===X?w(r,n):this._result[e]=n),0===this._remaining&&b(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;g(t,void 0,function(t){return n._settledAt(V,e,t)},function(t){return n._settledAt(X,e,t)})},t}(),et=function(){function t(e){this[Q]=T(),this._result=this._state=void 0,this._subscribers=[],a!==e&&("function"!=typeof e&&k(),this instanceof t?E(this,e):F())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var e=this,n=e.constructor;return e.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})},t}();return et.prototype.then=u,et.all=x,et.race=C,et.resolve=c,et.reject=O,et._setScheduler=n,et._setAsap=r,et._asap=U,et.polyfill=Y,et.Promise=et,et});
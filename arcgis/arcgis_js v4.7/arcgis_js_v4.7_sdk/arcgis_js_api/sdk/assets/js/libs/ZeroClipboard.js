/*!
* The MIT License (MIT)
* Copyright (c) 2009-2016 Jon Rohan, James M. Greene
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
!function(e,t){"use strict";var n,r,a,o=e,i=o.document,l=o.navigator,s=o.setTimeout,c=o.clearTimeout,u=o.setInterval,d=o.clearInterval,f=o.getComputedStyle,p=o.encodeURIComponent,h=o.ActiveXObject,y=o.Error,m=o.Number.parseInt||o.parseInt,v=o.Number.parseFloat||o.parseFloat,b=o.Number.isNaN||o.isNaN,g=o.Date.now,w=o.Object.keys,x=o.Object.prototype.hasOwnProperty,C=o.Array.prototype.slice,E=function(){var e=function(e){return e};if("function"==typeof o.wrap&&"function"==typeof o.unwrap)try{var t=i.createElement("div"),n=o.unwrap(t);1===t.nodeType&&n&&1===n.nodeType&&(e=o.unwrap)}catch(e){}return e}(),T=function(e){return C.call(e,0)},j=function(){var e,t,n,r,a,o=T(arguments),i=o[0]||{};for(e=1,t=o.length;e<t;e++)if(null!=(n=o[e]))for(r in n)x.call(n,r)&&(i[r],a=n[r],i!==a&&void 0!==a&&(i[r]=a));return i},D=function(e){var t,n,r,a;if("object"!=typeof e||null==e||"number"==typeof e.nodeType)t=e;else if("number"==typeof e.length)for(t=[],n=0,r=e.length;n<r;n++)x.call(e,n)&&(t[n]=D(e[n]));else{t={};for(a in e)x.call(e,a)&&(t[a]=D(e[a]))}return t},k=function(e,t){for(var n={},r=0,a=t.length;r<a;r++)t[r]in e&&(n[t[r]]=e[t[r]]);return n},O=function(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n},I=function(e){if(e)for(var t in e)x.call(e,t)&&delete e[t];return e},N=function(e,t){if(e&&1===e.nodeType&&e.ownerDocument&&t&&(1===t.nodeType&&t.ownerDocument&&t.ownerDocument===e.ownerDocument||9===t.nodeType&&!t.ownerDocument&&t===e.ownerDocument))do{if(e===t)return!0;e=e.parentNode}while(e);return!1},L=function(e){var t;return"string"==typeof e&&e&&(t=e.split("#")[0].split("?")[0],t=e.slice(0,e.lastIndexOf("/")+1)),t},A=function(e){var t,n;return"string"==typeof e&&e&&(n=e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),n&&n[1]?t=n[1]:(n=e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/))&&n[1]&&(t=n[1])),t},_=function(){var e,t;try{throw new y}catch(e){t=e}return t&&(e=t.sourceURL||t.fileName||A(t.stack)),e},F=function(){var e,t,n;if(i.currentScript&&(e=i.currentScript.src))return e;if(t=i.getElementsByTagName("script"),1===t.length)return t[0].src||void 0;if("readyState"in(t[0]||document.createElement("script")))for(n=t.length;n--;)if("interactive"===t[n].readyState&&(e=t[n].src))return e;return"loading"===i.readyState&&(e=t[t.length-1].src)?e:(e=_())?e:void 0},S=function(){var e,t,n,r=i.getElementsByTagName("script");for(e=r.length;e--;){if(!(n=r[e].src)){t=null;break}if(n=L(n),null==t)t=n;else if(t!==n){t=null;break}}return t||void 0},z=function(){var e=/win(dows|[\s]?(nt|me|ce|xp|vista|[\d]+))/i;return!!l&&(e.test(l.appVersion||"")||e.test(l.platform||"")||-1!==(l.userAgent||"").indexOf("Windows"))},Z=function(){return null==o.opener&&(!!o.top&&o!=o.top||!!o.parent&&o!=o.parent)}(),V="html"===i.documentElement.nodeName,$={bridge:null,version:"0.0.0",pluginType:"unknown",sandboxed:null,disabled:null,outdated:null,insecure:null,unavailable:null,degraded:null,deactivated:null,overdue:null,ready:null},X={},M={},Y=null,H=0,P=0,B={ready:"Flash communication is established",error:{"flash-sandboxed":"Attempting to run Flash in a sandboxed iframe, which is impossible","flash-disabled":"Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-insecure":"Flash will be unable to communicate due to a protocol mismatch between your `swfPath` configuration and the page","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-degraded":"Flash is unable to preserve data fidelity when communicating with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-overdue":"Flash communication was established but NOT within the acceptable time limit","version-mismatch":"ZeroClipboard JS version number does not match ZeroClipboard SWF version number","clipboard-error":"At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard","config-mismatch":"ZeroClipboard configuration does not match Flash's reality","swf-not-found":"The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity","browser-unsupported":"The browser does not support the required HTML DOM and JavaScript features"}},R=["flash-unavailable","flash-degraded","flash-overdue","version-mismatch","config-mismatch","clipboard-error"],W=["flash-sandboxed","flash-disabled","flash-outdated","flash-insecure","flash-unavailable","flash-degraded","flash-deactivated","flash-overdue"],J=new RegExp("^flash-("+W.map(function(e){return e.replace(/^flash-/,"")}).join("|")+")$"),K=new RegExp("^flash-("+W.filter(function(e){return"flash-disabled"!==e}).map(function(e){return e.replace(/^flash-/,"")}).join("|")+")$"),U={swfPath:function(){return(L(F())||S()||"")+"ZeroClipboard.swf"}(),trustedDomains:o.location.host?[o.location.host]:[],cacheBust:!0,forceEnhancedClipboard:!1,flashLoadTimeout:3e4,autoActivate:!0,bubbleEvents:!0,fixLineEndings:!0,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:!1,title:null,zIndex:999999999},q=function(e){"object"!=typeof e||!e||"length"in e||w(e).forEach(function(t){if(/^(?:forceHandCursor|title|zIndex|bubbleEvents|fixLineEndings)$/.test(t))U[t]=e[t];else if(null==$.bridge)if("containerId"===t||"swfObjectId"===t){if(!he(e[t]))throw new Error("The specified `"+t+"` value is not valid as an HTML4 Element ID");U[t]=e[t]}else U[t]=e[t]});{if("string"!=typeof e||!e)return D(U);if(x.call(U,e))return U[e]}},G=function(){return Je(),{browser:j(k(l,["userAgent","platform","appName","appVersion"]),{isSupported:Q()}),flash:O($,["bridge"]),zeroclipboard:{version:Ue.version,config:Ue.config()}}},Q=function(){return!!(i.addEventListener&&o.Object.keys&&o.Array.prototype.map)},ee=function(){return!!($.sandboxed||$.disabled||$.outdated||$.unavailable||$.degraded||$.deactivated)},te=function(e,t){var r,a,o,i={};if("string"==typeof e&&e?o=e.toLowerCase().split(/\s+/):"object"!=typeof e||!e||"length"in e||void 0!==t||w(e).forEach(function(t){var n=e[t];"function"==typeof n&&Ue.on(t,n)}),o&&o.length&&t){for(r=0,a=o.length;r<a;r++)e=o[r].replace(/^on/,""),i[e]=!0,X[e]||(X[e]=[]),X[e].push(t);if(i.ready&&$.ready&&Ue.emit({type:"ready"}),i.error){for(Q()||Ue.emit({type:"error",name:"browser-unsupported"}),r=0,a=W.length;r<a;r++)if(!0===$[W[r].replace(/^flash-/,"")]){Ue.emit({type:"error",name:W[r]});break}void 0!==n&&Ue.version!==n&&Ue.emit({type:"error",name:"version-mismatch",jsVersion:Ue.version,swfVersion:n})}}return Ue},ne=function(e,t){var n,r,a,o,i;if(0===arguments.length?o=w(X):"string"==typeof e&&e?o=e.toLowerCase().split(/\s+/):"object"!=typeof e||!e||"length"in e||void 0!==t||w(e).forEach(function(t){var n=e[t];"function"==typeof n&&Ue.off(t,n)}),o&&o.length)for(n=0,r=o.length;n<r;n++)if(e=o[n].replace(/^on/,""),(i=X[e])&&i.length)if(t)for(a=i.indexOf(t);-1!==a;)i.splice(a,1),a=i.indexOf(t,a);else i.length=0;return Ue},re=function(e){return"string"==typeof e&&e?D(X[e])||null:D(X)},ae=function(e){var t,n,r;if((e=ye(e))&&!Ce(e))return"ready"===e.type&&!0===$.overdue?Ue.emit({type:"error",name:"flash-overdue"}):(t=j({},e),we.call(this,t),"copy"===e.type&&(r=Le(M),n=r.data,Y=r.formatMap),n)},oe=function(){var e=U.swfPath||"",t=e.slice(0,2),n=e.slice(0,e.indexOf("://")+1);return"\\\\"===t?"file:":"//"===t||""===n?o.location.protocol:n},ie=function(){var e,t,n=$.sandboxed;if(!Q())return $.ready=!1,void Ue.emit({type:"error",name:"browser-unsupported"});Je(),"boolean"!=typeof $.ready&&($.ready=!1),$.sandboxed!==n&&!0===$.sandboxed?($.ready=!1,Ue.emit({type:"error",name:"flash-sandboxed"})):Ue.isFlashUnusable()||null!==$.bridge||(t=oe(),t&&t!==o.location.protocol?Ue.emit({type:"error",name:"flash-insecure"}):(e=U.flashLoadTimeout,"number"==typeof e&&e>=0&&(H=s(function(){"boolean"!=typeof $.deactivated&&($.deactivated=!0),!0===$.deactivated&&Ue.emit({type:"error",name:"flash-deactivated"})},e)),$.overdue=!1,Ie()))},le=function(){Ue.clearData(),Ue.blur(),Ue.emit("destroy"),Ne(),Ue.off()},se=function(e,t){var n;if("object"==typeof e&&e&&void 0===t)n=e,Ue.clearData();else{if("string"!=typeof e||!e)return;n={},n[e]=t}for(var r in n)"string"==typeof r&&r&&x.call(n,r)&&"string"==typeof n[r]&&n[r]&&(M[r]=We(n[r]))},ce=function(e){void 0===e?(I(M),Y=null):"string"==typeof e&&x.call(M,e)&&delete M[e]},ue=function(e){return void 0===e?D(M):"string"==typeof e&&x.call(M,e)?M[e]:void 0},de=function(e){if(e&&1===e.nodeType){r&&($e(r,U.activeClass),r!==e&&$e(r,U.hoverClass)),r=e,Ve(e,U.hoverClass);var t=e.getAttribute("title")||U.title;if("string"==typeof t&&t){var n=ke($.bridge);n&&n.setAttribute("title",t)}var a=!0===U.forceHandCursor||"pointer"===Xe(e,"cursor");Be(a),Pe()}},fe=function(){var e=ke($.bridge);e&&(e.removeAttribute("title"),e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.height="1px"),r&&($e(r,U.hoverClass),$e(r,U.activeClass),r=null)},pe=function(){return r||null},he=function(e){return"string"==typeof e&&e&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)},ye=function(e){var t;if("string"==typeof e&&e?(t=e,e={}):"object"==typeof e&&e&&"string"==typeof e.type&&e.type&&(t=e.type),t){t=t.toLowerCase(),!e.target&&(/^(copy|aftercopy|_click)$/.test(t)||"error"===t&&"clipboard-error"===e.name)&&(e.target=a),j(e,{type:t,target:e.target||r||null,relatedTarget:e.relatedTarget||null,currentTarget:$&&$.bridge||null,timeStamp:e.timeStamp||g()||null});var n=B[e.type];return"error"===e.type&&e.name&&n&&(n=n[e.name]),n&&(e.message=n),"ready"===e.type&&j(e,{target:null,version:$.version}),"error"===e.type&&(J.test(e.name)&&j(e,{target:null,minimumVersion:"11.0.0"}),K.test(e.name)&&j(e,{version:$.version}),"flash-insecure"===e.name&&j(e,{pageProtocol:o.location.protocol,swfProtocol:oe()})),"copy"===e.type&&(e.clipboardData={setData:Ue.setData,clearData:Ue.clearData}),"aftercopy"===e.type&&(e=Ae(e,Y)),e.target&&!e.relatedTarget&&(e.relatedTarget=me(e.target)),ve(e)}},me=function(e){var t=e&&e.getAttribute&&e.getAttribute("data-clipboard-target");return t?i.getElementById(t):null},ve=function(e){if(e&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)){var t=e.target,n="_mouseover"===e.type&&e.relatedTarget?e.relatedTarget:void 0,r="_mouseout"===e.type&&e.relatedTarget?e.relatedTarget:void 0,a=Me(t),l=o.screenLeft||o.screenX||0,s=o.screenTop||o.screenY||0,c=i.body.scrollLeft+i.documentElement.scrollLeft,u=i.body.scrollTop+i.documentElement.scrollTop,d=a.left+("number"==typeof e._stageX?e._stageX:0),f=a.top+("number"==typeof e._stageY?e._stageY:0),p=d-c,h=f-u,y=l+p,m=s+h,v="number"==typeof e.movementX?e.movementX:0,b="number"==typeof e.movementY?e.movementY:0;delete e._stageX,delete e._stageY,j(e,{srcElement:t,fromElement:n,toElement:r,screenX:y,screenY:m,pageX:d,pageY:f,clientX:p,clientY:h,x:p,y:h,movementX:v,movementY:b,offsetX:0,offsetY:0,layerX:0,layerY:0})}return e},be=function(e){return!/^(?:(?:before)?copy|destroy)$/.test(e&&"string"==typeof e.type&&e.type||"")},ge=function(e,t,n,r){r?s(function(){e.apply(t,n)},0):e.apply(t,n)},we=function(e){if("object"==typeof e&&e&&e.type){var t=be(e),n=X["*"]||[],r=X[e.type]||[],a=n.concat(r);if(a&&a.length){var i,l,s,c,u,d=this;for(i=0,l=a.length;i<l;i++)s=a[i],c=d,"string"==typeof s&&"function"==typeof o[s]&&(s=o[s]),"object"==typeof s&&s&&"function"==typeof s.handleEvent&&(c=s,s=s.handleEvent),"function"==typeof s&&(u=j({},e),ge(s,c,[u],t))}return this}},xe=function(e){var t=null;return(!1===Z||e&&"error"===e.type&&e.name&&-1!==R.indexOf(e.name))&&(t=!1),t},Ce=function(e){var t=e.target||r||null,o="swf"===e._source;switch(delete e._source,e.type){case"error":var i="flash-sandboxed"===e.name||xe(e);"boolean"==typeof i&&($.sandboxed=i),"browser-unsupported"===e.name?j($,{disabled:!1,outdated:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:!1,ready:!1}):-1!==W.indexOf(e.name)?j($,{disabled:"flash-disabled"===e.name,outdated:"flash-outdated"===e.name,insecure:"flash-insecure"===e.name,unavailable:"flash-unavailable"===e.name,degraded:"flash-degraded"===e.name,deactivated:"flash-deactivated"===e.name,overdue:"flash-overdue"===e.name,ready:!1}):"version-mismatch"===e.name&&(n=e.swfVersion,j($,{disabled:!1,outdated:!1,insecure:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:!1,ready:!1})),He();break;case"ready":n=e.swfVersion;var l=!0===$.deactivated;j($,{sandboxed:!1,disabled:!1,outdated:!1,insecure:!1,unavailable:!1,degraded:!1,deactivated:!1,overdue:l,ready:!l}),He();break;case"beforecopy":a=t;break;case"copy":var s,c,u=e.relatedTarget;!M["text/html"]&&!M["text/plain"]&&u&&(c=u.value||u.outerHTML||u.innerHTML)&&(s=u.value||u.textContent||u.innerText)?(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",s),c!==s&&e.clipboardData.setData("text/html",c)):!M["text/plain"]&&e.target&&(s=e.target.getAttribute("data-clipboard-text"))&&(e.clipboardData.clearData(),e.clipboardData.setData("text/plain",s));break;case"aftercopy":Ee(e),Ue.clearData(),t&&t!==Ze()&&t.focus&&t.focus();break;case"_mouseover":Ue.focus(t),!0===U.bubbleEvents&&o&&(t&&t!==e.relatedTarget&&!N(e.relatedTarget,t)&&Te(j({},e,{type:"mouseenter",bubbles:!1,cancelable:!1})),Te(j({},e,{type:"mouseover"})));break;case"_mouseout":Ue.blur(),!0===U.bubbleEvents&&o&&(t&&t!==e.relatedTarget&&!N(e.relatedTarget,t)&&Te(j({},e,{type:"mouseleave",bubbles:!1,cancelable:!1})),Te(j({},e,{type:"mouseout"})));break;case"_mousedown":Ve(t,U.activeClass),!0===U.bubbleEvents&&o&&Te(j({},e,{type:e.type.slice(1)}));break;case"_mouseup":$e(t,U.activeClass),!0===U.bubbleEvents&&o&&Te(j({},e,{type:e.type.slice(1)}));break;case"_click":a=null,!0===U.bubbleEvents&&o&&Te(j({},e,{type:e.type.slice(1)}));break;case"_mousemove":!0===U.bubbleEvents&&o&&Te(j({},e,{type:e.type.slice(1)}))}if(/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type))return!0},Ee=function(e){if(e.errors&&e.errors.length>0){var t=D(e);j(t,{type:"error",name:"clipboard-error"}),delete t.success,s(function(){Ue.emit(t)},0)}},Te=function(e){if(e&&"string"==typeof e.type&&e){var t,n=e.target||null,r=n&&n.ownerDocument||i,a={view:r.defaultView||o,canBubble:!0,cancelable:!0,detail:"click"===e.type?1:0,button:"number"==typeof e.which?e.which-1:"number"==typeof e.button?e.button:r.createEvent?0:1},l=j(a,e);n&&r.createEvent&&n.dispatchEvent&&(l=[l.type,l.canBubble,l.cancelable,l.view,l.detail,l.screenX,l.screenY,l.clientX,l.clientY,l.ctrlKey,l.altKey,l.shiftKey,l.metaKey,l.button,l.relatedTarget],t=r.createEvent("MouseEvents"),t.initMouseEvent&&(t.initMouseEvent.apply(t,l),t._source="js",n.dispatchEvent(t)))}},je=function(){var e=U.flashLoadTimeout;if("number"==typeof e&&e>=0){var t=Math.min(1e3,e/10),n=U.swfObjectId+"_fallbackContent";P=u(function(){var e=i.getElementById(n);Ye(e)&&(He(),$.deactivated=null,Ue.emit({type:"error",name:"swf-not-found"}))},t)}},De=function(){var e=i.createElement("div");return e.id=U.containerId,e.className=U.containerClass,e.style.position="absolute",e.style.left="0px",e.style.top="-9999px",e.style.width="1px",e.style.height="1px",e.style.zIndex=""+Re(U.zIndex),e},ke=function(e){for(var t=e&&e.parentNode;t&&"OBJECT"===t.nodeName&&t.parentNode;)t=t.parentNode;return t||null},Oe=function(e){return"string"==typeof e&&e?e.replace(/["&'<>]/g,function(e){switch(e){case'"':return"&quot;";case"&":return"&amp;";case"'":return"&apos;";case"<":return"&lt;";case">":return"&gt;";default:return e}}):e},Ie=function(){var e,t=$.bridge,n=ke(t);if(!t){var r=ze(o.location.host,U),a="never"===r?"none":"all",l=Fe(j({jsVersion:Ue.version},U)),s=U.swfPath+_e(U.swfPath,U);V&&(s=Oe(s)),n=De();var c=i.createElement("div");n.appendChild(c),i.body.appendChild(n);var u=i.createElement("div"),d="activex"===$.pluginType;u.innerHTML='<object id="'+U.swfObjectId+'" name="'+U.swfObjectId+'" width="100%" height="100%" '+(d?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+s+'"')+">"+(d?'<param name="movie" value="'+s+'"/>':"")+'<param name="allowScriptAccess" value="'+r+'"/><param name="allowNetworking" value="'+a+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+l+'"/><div id="'+U.swfObjectId+'_fallbackContent">&nbsp;</div></object>',t=u.firstChild,u=null,E(t).ZeroClipboard=Ue,n.replaceChild(t,c),je()}return t||(t=i[U.swfObjectId],t&&(e=t.length)&&(t=t[e-1]),!t&&n&&(t=n.firstChild)),$.bridge=t||null,t},Ne=function(){var e=$.bridge;if(e){var t=ke(e);t&&("activex"===$.pluginType&&"readyState"in e?(e.style.display="none",function n(){if(4===e.readyState){for(var r in e)"function"==typeof e[r]&&(e[r]=null);e.parentNode&&e.parentNode.removeChild(e),t.parentNode&&t.parentNode.removeChild(t)}else s(n,10)}()):(e.parentNode&&e.parentNode.removeChild(e),t.parentNode&&t.parentNode.removeChild(t))),He(),$.ready=null,$.bridge=null,$.deactivated=null,$.insecure=null,n=void 0}},Le=function(e){var t={},n={};if("object"==typeof e&&e){for(var r in e)if(r&&x.call(e,r)&&"string"==typeof e[r]&&e[r])switch(r.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":t.text=e[r],n.text=r;break;case"text/html":case"html":case"air:html":case"flash:html":t.html=e[r],n.html=r;break;case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":t.rtf=e[r],n.rtf=r}return{data:t,formatMap:n}}},Ae=function(e,t){if("object"!=typeof e||!e||"object"!=typeof t||!t)return e;var n={};for(var r in e)if(x.call(e,r))if("errors"===r){n[r]=e[r]?e[r].slice():[];for(var a=0,o=n[r].length;a<o;a++)n[r][a].format=t[n[r][a].format]}else if("success"!==r&&"data"!==r)n[r]=e[r];else{n[r]={};var i=e[r];for(var l in i)l&&x.call(i,l)&&x.call(t,l)&&(n[r][t[l]]=i[l])}return n},_e=function(e,t){return null==t||t&&!0===t.cacheBust?(-1===e.indexOf("?")?"?":"&")+"noCache="+g():""},Fe=function(e){var t,n,r,a,i="",l=[];if(e.trustedDomains&&("string"==typeof e.trustedDomains?a=[e.trustedDomains]:"object"==typeof e.trustedDomains&&"length"in e.trustedDomains&&(a=e.trustedDomains)),a&&a.length)for(t=0,n=a.length;t<n;t++)if(x.call(a,t)&&a[t]&&"string"==typeof a[t]){if(!(r=Se(a[t])))continue;if("*"===r){l.length=0,l.push(r);break}l.push.apply(l,[r,"//"+r,o.location.protocol+"//"+r])}return l.length&&(i+="trustedOrigins="+p(l.join(","))),!0===e.forceEnhancedClipboard&&(i+=(i?"&":"")+"forceEnhancedClipboard=true"),"string"==typeof e.swfObjectId&&e.swfObjectId&&(i+=(i?"&":"")+"swfObjectId="+p(e.swfObjectId)),"string"==typeof e.jsVersion&&e.jsVersion&&(i+=(i?"&":"")+"jsVersion="+p(e.jsVersion)),i},Se=function(e){if(null==e||""===e)return null;if(""===(e=e.replace(/^\s+|\s+$/g,"")))return null;var t=e.indexOf("//");e=-1===t?e:e.slice(t+2);var n=e.indexOf("/");return e=-1===n?e:-1===t||0===n?null:e.slice(0,n),e&&".swf"===e.slice(-4).toLowerCase()?null:e||null},ze=function(){var e=function(e){var t,n,r,a=[];if("string"==typeof e&&(e=[e]),"object"!=typeof e||!e||"number"!=typeof e.length)return a;for(t=0,n=e.length;t<n;t++)if(x.call(e,t)&&(r=Se(e[t]))){if("*"===r){a.length=0,a.push("*");break}-1===a.indexOf(r)&&a.push(r)}return a};return function(t,n){var r=Se(n.swfPath);null===r&&(r=t);var a=e(n.trustedDomains),o=a.length;if(o>0){if(1===o&&"*"===a[0])return"always";if(-1!==a.indexOf(t))return 1===o&&t===r?"sameDomain":"always"}return"never"}}(),Ze=function(){try{return i.activeElement}catch(e){return null}},Ve=function(e,t){var n,r,a,o=[];if("string"==typeof t&&t&&(o=t.split(/\s+/)),e&&1===e.nodeType&&o.length>0){for(a=(" "+(e.className||"")+" ").replace(/[\t\r\n\f]/g," "),n=0,r=o.length;n<r;n++)-1===a.indexOf(" "+o[n]+" ")&&(a+=o[n]+" ");a=a.replace(/^\s+|\s+$/g,""),a!==e.className&&(e.className=a)}return e},$e=function(e,t){var n,r,a,o=[];if("string"==typeof t&&t&&(o=t.split(/\s+/)),e&&1===e.nodeType&&o.length>0&&e.className){for(a=(" "+e.className+" ").replace(/[\t\r\n\f]/g," "),n=0,r=o.length;n<r;n++)a=a.replace(" "+o[n]+" "," ");a=a.replace(/^\s+|\s+$/g,""),a!==e.className&&(e.className=a)}return e},Xe=function(e,t){var n=f(e,null).getPropertyValue(t);return"cursor"!==t||n&&"auto"!==n||"A"!==e.nodeName?n:"pointer"},Me=function(e){var t={left:0,top:0,width:0,height:0};if(e.getBoundingClientRect){var n=e.getBoundingClientRect(),r=o.pageXOffset,a=o.pageYOffset,l=i.documentElement.clientLeft||0,s=i.documentElement.clientTop||0,c=0,u=0;if("relative"===Xe(i.body,"position")){var d=i.body.getBoundingClientRect(),f=i.documentElement.getBoundingClientRect();c=d.left-f.left||0,u=d.top-f.top||0}t.left=n.left+r-l-c,t.top=n.top+a-s-u,t.width="width"in n?n.width:n.right-n.left,t.height="height"in n?n.height:n.bottom-n.top}return t},Ye=function(e){if(!e)return!1;var t=f(e,null);if(!t)return!1;var n=v(t.height)>0,r=v(t.width)>0,a=v(t.top)>=0,o=v(t.left)>=0,i=n&&r&&a&&o,l=i?null:Me(e);return"none"!==t.display&&"collapse"!==t.visibility&&(i||!!l&&(n||l.height>0)&&(r||l.width>0)&&(a||l.top>=0)&&(o||l.left>=0))},He=function(){c(H),H=0,d(P),P=0},Pe=function(){var e;if(r&&(e=ke($.bridge))){var t=Me(r);j(e.style,{width:t.width+"px",height:t.height+"px",top:t.top+"px",left:t.left+"px",zIndex:""+Re(U.zIndex)})}},Be=function(e){!0===$.ready&&($.bridge&&"function"==typeof $.bridge.setHandCursor?$.bridge.setHandCursor(e):$.ready=!1)},Re=function(e){if(/^(?:auto|inherit)$/.test(e))return e;var t;return"number"!=typeof e||b(e)?"string"==typeof e&&(t=Re(m(e,10))):t=e,"number"==typeof t?t:"auto"},We=function(e){var t=/(\r\n|\r|\n)/g;return"string"==typeof e&&!0===U.fixLineEndings&&(z()?/((^|[^\r])\n|\r([^\n]|$))/.test(e)&&(e=e.replace(t,"\r\n")):/\r/.test(e)&&(e=e.replace(t,"\n"))),e},Je=function(t){var n,r,a,o=$.sandboxed,i=null;if(t=!0===t,!1===Z)i=!1;else{try{r=e.frameElement||null}catch(e){a={name:e.name,message:e.message}}if(r&&1===r.nodeType&&"IFRAME"===r.nodeName)try{i=r.hasAttribute("sandbox")}catch(e){i=null}else{try{n=document.domain||null}catch(e){n=null}(null===n||a&&"SecurityError"===a.name&&/(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(a.message.toLowerCase()))&&(i=!0)}}return $.sandboxed=i,o===i||t||Ke(h),i},Ke=function(e){function t(e){var t=e.match(/[\d]+/g);return t.length=3,t.join(".")}function n(e){return!!e&&(e=e.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e)||"chrome.plugin"===e.slice(-13))}function r(e){e&&(s=!0,e.version&&(d=t(e.version)),!d&&e.description&&(d=t(e.description)),e.filename&&(u=n(e.filename)))}var a,o,i,s=!1,c=!1,u=!1,d="";if(l.plugins&&l.plugins.length)a=l.plugins["Shockwave Flash"],r(a),l.plugins["Shockwave Flash 2.0"]&&(s=!0,d="2.0.0.11");else if(l.mimeTypes&&l.mimeTypes.length)i=l.mimeTypes["application/x-shockwave-flash"],a=i&&i.enabledPlugin,r(a);else if(void 0!==e){c=!0;try{o=new e("ShockwaveFlash.ShockwaveFlash.7"),s=!0,d=t(o.GetVariable("$version"))}catch(n){try{o=new e("ShockwaveFlash.ShockwaveFlash.6"),s=!0,d="6.0.21"}catch(n){try{o=new e("ShockwaveFlash.ShockwaveFlash"),s=!0,d=t(o.GetVariable("$version"))}catch(e){c=!1}}}}$.disabled=!0!==s,$.outdated=d&&v(d)<v("11.0.0"),$.version=d||"0.0.0",$.pluginType=u?"pepper":c?"activex":s?"netscape":"unknown"};Ke(h),Je(!0);var Ue=function(){if(!(this instanceof Ue))return new Ue;"function"==typeof Ue._createClient&&Ue._createClient.apply(this,T(arguments))};Ue.version="2.3.0",Ue.config=function(){return q.apply(this,T(arguments))},Ue.state=function(){return G.apply(this,T(arguments))},Ue.isFlashUnusable=function(){return ee.apply(this,T(arguments))},Ue.on=function(){return te.apply(this,T(arguments))},Ue.off=function(){return ne.apply(this,T(arguments))},Ue.handlers=function(){return re.apply(this,T(arguments))},Ue.emit=function(){return ae.apply(this,T(arguments))},Ue.create=function(){return ie.apply(this,T(arguments))},Ue.destroy=function(){return le.apply(this,T(arguments))},Ue.setData=function(){return se.apply(this,T(arguments))},Ue.clearData=function(){return ce.apply(this,T(arguments))},Ue.getData=function(){return ue.apply(this,T(arguments))},Ue.focus=Ue.activate=function(){return de.apply(this,T(arguments))},Ue.blur=Ue.deactivate=function(){return fe.apply(this,T(arguments))},Ue.activeElement=function(){return pe.apply(this,T(arguments))};var qe=0,Ge={},Qe=0,et={},tt={};j(U,{autoActivate:!0});var nt=function(e){var t,n=this;n.id=""+qe++,t={instance:n,elements:[],handlers:{},coreWildcardHandler:function(e){return n.emit(e)}},Ge[n.id]=t,e&&n.clip(e),Ue.on("*",t.coreWildcardHandler),Ue.on("destroy",function(){n.destroy()}),Ue.create()},rt=function(e,t){var r,a,o,i={},l=this,s=Ge[l.id],c=s&&s.handlers;if(!s)throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");if("string"==typeof e&&e?o=e.toLowerCase().split(/\s+/):"object"!=typeof e||!e||"length"in e||void 0!==t||w(e).forEach(function(t){var n=e[t];"function"==typeof n&&l.on(t,n)}),o&&o.length&&t){for(r=0,a=o.length;r<a;r++)e=o[r].replace(/^on/,""),i[e]=!0,c[e]||(c[e]=[]),c[e].push(t);if(i.ready&&$.ready&&this.emit({type:"ready",client:this}),i.error){for(r=0,a=W.length;r<a;r++)if($[W[r].replace(/^flash-/,"")]){this.emit({type:"error",name:W[r],client:this});break}void 0!==n&&Ue.version!==n&&this.emit({type:"error",name:"version-mismatch",jsVersion:Ue.version,swfVersion:n})}}return l},at=function(e,t){var n,r,a,o,i,l=this,s=Ge[l.id],c=s&&s.handlers;if(!c)return l;if(0===arguments.length?o=w(c):"string"==typeof e&&e?o=e.split(/\s+/):"object"!=typeof e||!e||"length"in e||void 0!==t||w(e).forEach(function(t){var n=e[t];"function"==typeof n&&l.off(t,n)}),o&&o.length)for(n=0,r=o.length;n<r;n++)if(e=o[n].toLowerCase().replace(/^on/,""),(i=c[e])&&i.length)if(t)for(a=i.indexOf(t);-1!==a;)i.splice(a,1),a=i.indexOf(t,a);else i.length=0;return l},ot=function(e){var t=null,n=Ge[this.id]&&Ge[this.id].handlers;return n&&(t="string"==typeof e&&e?n[e]?n[e].slice(0):[]:D(n)),t},it=function(e){var t,n=this;return dt.call(n,e)&&("object"==typeof e&&e&&"string"==typeof e.type&&e.type&&(e=j({},e)),t=j({},ye(e),{client:n}),ft.call(n,t)),n},lt=function(e){if(!Ge[this.id])throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");e=pt(e);for(var t=0;t<e.length;t++)if(x.call(e,t)&&e[t]&&1===e[t].nodeType){e[t].zcClippingId?-1===et[e[t].zcClippingId].indexOf(this.id)&&et[e[t].zcClippingId].push(this.id):(e[t].zcClippingId="zcClippingId_"+Qe++,et[e[t].zcClippingId]=[this.id],!0===U.autoActivate&&ht(e[t]));var n=Ge[this.id]&&Ge[this.id].elements;-1===n.indexOf(e[t])&&n.push(e[t])}return this},st=function(e){var t=Ge[this.id];if(!t)return this;var n,r=t.elements;e=void 0===e?r.slice(0):pt(e);for(var a=e.length;a--;)if(x.call(e,a)&&e[a]&&1===e[a].nodeType){for(n=0;-1!==(n=r.indexOf(e[a],n));)r.splice(n,1);var o=et[e[a].zcClippingId];if(o){for(n=0;-1!==(n=o.indexOf(this.id,n));)o.splice(n,1);0===o.length&&(!0===U.autoActivate&&yt(e[a]),delete e[a].zcClippingId)}}return this},ct=function(){var e=Ge[this.id];return e&&e.elements?e.elements.slice(0):[]},ut=function(){var e=Ge[this.id];e&&(this.unclip(),this.off(),Ue.off("*",e.coreWildcardHandler),delete Ge[this.id])},dt=function(e){if(!e||!e.type)return!1;if(e.client&&e.client!==this)return!1;var t=Ge[this.id],n=t&&t.elements,r=!!n&&n.length>0,a=!e.target||r&&-1!==n.indexOf(e.target),o=e.relatedTarget&&r&&-1!==n.indexOf(e.relatedTarget),i=e.client&&e.client===this;return!(!t||!(a||o||i))},ft=function(e){var t=Ge[this.id];if("object"==typeof e&&e&&e.type&&t){var n=be(e),r=t&&t.handlers["*"]||[],a=t&&t.handlers[e.type]||[],i=r.concat(a);if(i&&i.length){var l,s,c,u,d,f=this;for(l=0,s=i.length;l<s;l++)c=i[l],u=f,"string"==typeof c&&"function"==typeof o[c]&&(c=o[c]),"object"==typeof c&&c&&"function"==typeof c.handleEvent&&(u=c,c=c.handleEvent),"function"==typeof c&&(d=j({},e),ge(c,u,[d],n))}}},pt=function(e){return"string"==typeof e&&(e=[]),"number"!=typeof e.length?[e]:e},ht=function(e){if(e&&1===e.nodeType){var t=function(e){(e||(e=o.event))&&("js"!==e._source&&(e.stopImmediatePropagation(),e.preventDefault()),delete e._source)},n=function(n){(n||(n=o.event))&&(t(n),Ue.focus(e))};e.addEventListener("mouseover",n,!1),e.addEventListener("mouseout",t,!1),e.addEventListener("mouseenter",t,!1),e.addEventListener("mouseleave",t,!1),e.addEventListener("mousemove",t,!1),tt[e.zcClippingId]={mouseover:n,mouseout:t,mouseenter:t,mouseleave:t,mousemove:t}}},yt=function(e){if(e&&1===e.nodeType){var t=tt[e.zcClippingId];if("object"==typeof t&&t){for(var n,r,a=["move","leave","enter","out","over"],o=0,i=a.length;o<i;o++)n="mouse"+a[o],"function"==typeof(r=t[n])&&e.removeEventListener(n,r,!1);delete tt[e.zcClippingId]}}};Ue._createClient=function(){nt.apply(this,T(arguments))},Ue.prototype.on=function(){return rt.apply(this,T(arguments))},Ue.prototype.off=function(){return at.apply(this,T(arguments))},Ue.prototype.handlers=function(){return ot.apply(this,T(arguments))},Ue.prototype.emit=function(){return it.apply(this,T(arguments))},Ue.prototype.clip=function(){return lt.apply(this,T(arguments))},Ue.prototype.unclip=function(){return st.apply(this,T(arguments))},Ue.prototype.elements=function(){return ct.apply(this,T(arguments))},Ue.prototype.destroy=function(){return ut.apply(this,T(arguments))},Ue.prototype.setText=function(e){if(!Ge[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Ue.setData("text/plain",e),this},Ue.prototype.setHtml=function(e){if(!Ge[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Ue.setData("text/html",e),this},Ue.prototype.setRichText=function(e){if(!Ge[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Ue.setData("application/rtf",e),this},Ue.prototype.setData=function(){if(!Ge[this.id])throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");return Ue.setData.apply(this,T(arguments)),this},Ue.prototype.clearData=function(){if(!Ge[this.id])throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");return Ue.clearData.apply(this,T(arguments)),this},Ue.prototype.getData=function(){if(!Ge[this.id])throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");return Ue.getData.apply(this,T(arguments))},"function"==typeof define&&define.amd?define(function(){return Ue}):"object"==typeof module&&module&&"object"==typeof module.exports&&module.exports?module.exports=Ue:e.ZeroClipboard=Ue}(function(){return this||window}());
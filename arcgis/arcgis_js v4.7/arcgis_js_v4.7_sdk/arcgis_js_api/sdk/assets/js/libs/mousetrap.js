/*!
* mousetrap - https://craig.is/killing/mice - A simple library for handling keyboard shortcuts in Javascript
*                                  Apache License
*                            Version 2.0, January 2004
*                         http://www.apache.org/licenses/
* 
*    TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
* 
*    1. Definitions.
* 
*       "License" shall mean the terms and conditions for use, reproduction,
*       and distribution as defined by Sections 1 through 9 of this document.
* 
*       "Licensor" shall mean the copyright owner or entity authorized by
*       the copyright owner that is granting the License.
* 
*       "Legal Entity" shall mean the union of the acting entity and all
*       other entities that control, are controlled by, or are under common
*       control with that entity. For the purposes of this definition,
*       "control" means (i) the power, direct or indirect, to cause the
*       direction or management of such entity, whether by contract or
*       otherwise, or (ii) ownership of fifty percent (50%) or more of the
*       outstanding shares, or (iii) beneficial ownership of such entity.
* 
*       "You" (or "Your") shall mean an individual or Legal Entity
*       exercising permissions granted by this License.
* 
*       "Source" form shall mean the preferred form for making modifications,
*       including but not limited to software source code, documentation
*       source, and configuration files.
* 
*       "Object" form shall mean any form resulting from mechanical
*       transformation or translation of a Source form, including but
*       not limited to compiled object code, generated documentation,
*       and conversions to other media types.
* 
*       "Work" shall mean the work of authorship, whether in Source or
*       Object form, made available under the License, as indicated by a
*       copyright notice that is included in or attached to the work
*       (an example is provided in the Appendix below).
* 
*       "Derivative Works" shall mean any work, whether in Source or Object
*       form, that is based on (or derived from) the Work and for which the
*       editorial revisions, annotations, elaborations, or other modifications
*       represent, as a whole, an original work of authorship. For the purposes
*       of this License, Derivative Works shall not include works that remain
*       separable from, or merely link (or bind by name) to the interfaces of,
*       the Work and Derivative Works thereof.
* 
*       "Contribution" shall mean any work of authorship, including
*       the original version of the Work and any modifications or additions
*       to that Work or Derivative Works thereof, that is intentionally
*       submitted to Licensor for inclusion in the Work by the copyright owner
*       or by an individual or Legal Entity authorized to submit on behalf of
*       the copyright owner. For the purposes of this definition, "submitted"
*       means any form of electronic, verbal, or written communication sent
*       to the Licensor or its representatives, including but not limited to
*       communication on electronic mailing lists, source code control systems,
*       and issue tracking systems that are managed by, or on behalf of, the
*       Licensor for the purpose of discussing and improving the Work, but
*       excluding communication that is conspicuously marked or otherwise
*       designated in writing by the copyright owner as "Not a Contribution."
* 
*       "Contributor" shall mean Licensor and any individual or Legal Entity
*       on behalf of whom a Contribution has been received by Licensor and
*       subsequently incorporated within the Work.
* 
*    2. Grant of Copyright License. Subject to the terms and conditions of
*       this License, each Contributor hereby grants to You a perpetual,
*       worldwide, non-exclusive, no-charge, royalty-free, irrevocable
*       copyright license to reproduce, prepare Derivative Works of,
*       publicly display, publicly perform, sublicense, and distribute the
*       Work and such Derivative Works in Source or Object form.
* 
*    3. Grant of Patent License. Subject to the terms and conditions of
*       this License, each Contributor hereby grants to You a perpetual,
*       worldwide, non-exclusive, no-charge, royalty-free, irrevocable
*       (except as stated in this section) patent license to make, have made,
*       use, offer to sell, sell, import, and otherwise transfer the Work,
*       where such license applies only to those patent claims licensable
*       by such Contributor that are necessarily infringed by their
*       Contribution(s) alone or by combination of their Contribution(s)
*       with the Work to which such Contribution(s) was submitted. If You
*       institute patent litigation against any entity (including a
*       cross-claim or counterclaim in a lawsuit) alleging that the Work
*       or a Contribution incorporated within the Work constitutes direct
*       or contributory patent infringement, then any patent licenses
*       granted to You under this License for that Work shall terminate
*       as of the date such litigation is filed.
* 
*    4. Redistribution. You may reproduce and distribute copies of the
*       Work or Derivative Works thereof in any medium, with or without
*       modifications, and in Source or Object form, provided that You
*       meet the following conditions:
* 
*       (a) You must give any other recipients of the Work or
*           Derivative Works a copy of this License; and
* 
*       (b) You must cause any modified files to carry prominent notices
*           stating that You changed the files; and
* 
*       (c) You must retain, in the Source form of any Derivative Works
*           that You distribute, all copyright, patent, trademark, and
*           attribution notices from the Source form of the Work,
*           excluding those notices that do not pertain to any part of
*           the Derivative Works; and
* 
*       (d) If the Work includes a "NOTICE" text file as part of its
*           distribution, then any Derivative Works that You distribute must
*           include a readable copy of the attribution notices contained
*           within such NOTICE file, excluding those notices that do not
*           pertain to any part of the Derivative Works, in at least one
*           of the following places: within a NOTICE text file distributed
*           as part of the Derivative Works; within the Source form or
*           documentation, if provided along with the Derivative Works; or,
*           within a display generated by the Derivative Works, if and
*           wherever such third-party notices normally appear. The contents
*           of the NOTICE file are for informational purposes only and
*           do not modify the License. You may add Your own attribution
*           notices within Derivative Works that You distribute, alongside
*           or as an addendum to the NOTICE text from the Work, provided
*           that such additional attribution notices cannot be construed
*           as modifying the License.
* 
*       You may add Your own copyright statement to Your modifications and
*       may provide additional or different license terms and conditions
*       for use, reproduction, or distribution of Your modifications, or
*       for any such Derivative Works as a whole, provided Your use,
*       reproduction, and distribution of the Work otherwise complies with
*       the conditions stated in this License.
* 
*    5. Submission of Contributions. Unless You explicitly state otherwise,
*       any Contribution intentionally submitted for inclusion in the Work
*       by You to the Licensor shall be under the terms and conditions of
*       this License, without any additional terms or conditions.
*       Notwithstanding the above, nothing herein shall supersede or modify
*       the terms of any separate license agreement you may have executed
*       with Licensor regarding such Contributions.
* 
*    6. Trademarks. This License does not grant permission to use the trade
*       names, trademarks, service marks, or product names of the Licensor,
*       except as required for reasonable and customary use in describing the
*       origin of the Work and reproducing the content of the NOTICE file.
* 
*    7. Disclaimer of Warranty. Unless required by applicable law or
*       agreed to in writing, Licensor provides the Work (and each
*       Contributor provides its Contributions) on an "AS IS" BASIS,
*       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
*       implied, including, without limitation, any warranties or conditions
*       of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
*       PARTICULAR PURPOSE. You are solely responsible for determining the
*       appropriateness of using or redistributing the Work and assume any
*       risks associated with Your exercise of permissions under this License.
* 
*    8. Limitation of Liability. In no event and under no legal theory,
*       whether in tort (including negligence), contract, or otherwise,
*       unless required by applicable law (such as deliberate and grossly
*       negligent acts) or agreed to in writing, shall any Contributor be
*       liable to You for damages, including any direct, indirect, special,
*       incidental, or consequential damages of any character arising as a
*       result of this License or out of the use or inability to use the
*       Work (including but not limited to damages for loss of goodwill,
*       work stoppage, computer failure or malfunction, or any and all
*       other commercial damages or losses), even if such Contributor
*       has been advised of the possibility of such damages.
* 
*    9. Accepting Warranty or Additional Liability. While redistributing
*       the Work or Derivative Works thereof, You may choose to offer,
*       and charge a fee for, acceptance of support, warranty, indemnity,
*       or other liability obligations and/or rights consistent with this
*       License. However, in accepting such obligations, You may act only
*       on Your own behalf and on Your sole responsibility, not on behalf
*       of any other Contributor, and only if You agree to indemnify,
*       defend, and hold each Contributor harmless for any liability
*       incurred by, or claims asserted against, such Contributor by reason
*       of your accepting any such warranty or additional liability.
* 
*    END OF TERMS AND CONDITIONS
*/
!function(e,t,n){function r(e,t,n){if(e.addEventListener)return void e.addEventListener(t,n,!1);e.attachEvent("on"+t,n)}function i(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return m[e.which]?m[e.which]:k[e.which]?k[e.which]:String.fromCharCode(e.which).toLowerCase()}function o(e,t){return e.sort().join(",")===t.sort().join(",")}function a(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}function c(e){if(e.preventDefault)return void e.preventDefault();e.returnValue=!1}function u(e){if(e.stopPropagation)return void e.stopPropagation();e.cancelBubble=!0}function l(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function s(){if(!v){v={};for(var e in m)e>95&&e<112||m.hasOwnProperty(e)&&(v[m[e]]=e)}return v}function f(e,t,n){return n||(n=s()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function p(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus"),e.split("+"))}function d(e,t){var n,r,i,o=[];for(n=p(e),i=0;i<n.length;++i)r=n[i],g[r]&&(r=g[r]),t&&"keypress"!=t&&b[r]&&(r=b[r],o.push("shift")),l(r)&&o.push(r);return t=f(r,o,t),{key:r,modifiers:o,action:t}}function h(e,n){return null!==e&&e!==t&&(e===n||h(e.parentNode,n))}function y(e){function n(e){e=e||{};var t,n=!1;for(t in g)e[t]?n=!0:g[t]=0;n||(K=!1)}function s(e,t,n,r,i,a){var c,u,s=[],f=n.type;if(!k._callbacks[e])return[];for("keyup"==f&&l(e)&&(t=[e]),c=0;c<k._callbacks[e].length;++c)if(u=k._callbacks[e][c],(r||!u.seq||g[u.seq]==u.level)&&f==u.action&&("keypress"==f&&!n.metaKey&&!n.ctrlKey||o(t,u.modifiers))){var p=!r&&u.combo==i,d=r&&u.seq==r&&u.level==a;(p||d)&&k._callbacks[e].splice(c,1),s.push(u)}return s}function f(e,t,n,r){k.stopCallback(t,t.target||t.srcElement,n,r)||!1===e(t,n)&&(c(t),u(t))}function p(e){"number"!=typeof e.which&&(e.which=e.keyCode);var t=i(e);if(t)return"keyup"==e.type&&w===t?void(w=!1):void k.handleKey(t,a(e),e)}function h(){clearTimeout(b),b=setTimeout(n,1e3)}function v(e,t,r,o){function a(t){f(r,t,e),"keyup"!==o&&(w=i(t)),setTimeout(n,10)}g[e]=0;for(var c=0;c<t.length;++c){var u=c+1===t.length,l=u?a:function(t){return function(){K=t,++g[e],h()}}(o||d(t[c+1]).action);m(t[c],l,o,e,c)}}function m(e,t,n,r,i){k._directMap[e+":"+n]=t,e=e.replace(/\s+/g," ");var o,a=e.split(" ");if(a.length>1)return void v(e,a,t,n);o=d(e,n),k._callbacks[o.key]=k._callbacks[o.key]||[],s(o.key,o.modifiers,{type:o.action},r,e,i),k._callbacks[o.key][r?"unshift":"push"]({callback:t,modifiers:o.modifiers,action:o.action,seq:r,level:i,combo:e})}var k=this;if(e=e||t,!(k instanceof y))return new y(e);k.target=e,k._callbacks={},k._directMap={};var b,g={},w=!1,_=!1,K=!1;k._handleKey=function(e,t,r){var i,o=s(e,t,r),a={},c=0,u=!1;for(i=0;i<o.length;++i)o[i].seq&&(c=Math.max(c,o[i].level));for(i=0;i<o.length;++i)if(o[i].seq){if(o[i].level!=c)continue;u=!0,a[o[i].seq]=1,f(o[i].callback,r,o[i].combo,o[i].seq)}else u||f(o[i].callback,r,o[i].combo);var p="keypress"==r.type&&_;r.type!=K||l(e)||p||n(a),_=u&&"keydown"==r.type},k._bindMultiple=function(e,t,n){for(var r=0;r<e.length;++r)m(e[r],t,n)},r(e,"keypress",p),r(e,"keydown",p),r(e,"keyup",p)}if(e){for(var v,m={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},k={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},b={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},g={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},w=1;w<20;++w)m[111+w]="f"+w;for(w=0;w<=9;++w)m[w+96]=w.toString();y.prototype.bind=function(e,t,n){var r=this;return e=e instanceof Array?e:[e],r._bindMultiple.call(r,e,t,n),r},y.prototype.unbind=function(e,t){var n=this;return n.bind.call(n,e,function(){},t)},y.prototype.trigger=function(e,t){var n=this;return n._directMap[e+":"+t]&&n._directMap[e+":"+t]({},e),n},y.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},y.prototype.stopCallback=function(e,t){var n=this;return!((" "+t.className+" ").indexOf(" mousetrap ")>-1)&&(!h(t,n.target)&&("INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable))},y.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},y.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(m[t]=e[t]);v=null},y.init=function(){var e=y(t);for(var n in e)"_"!==n.charAt(0)&&(y[n]=function(t){return function(){return e[t].apply(e,arguments)}}(n))},y.init(),e.Mousetrap=y,"undefined"!=typeof module&&module.exports&&(module.exports=y),"function"==typeof define&&define.amd&&define(function(){return y})}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null);
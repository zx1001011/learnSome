// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../portal/PortalQueryParams","../../../symbols/support/jsonUtils","./SymbolSources"],function(k,b,g,h,c){function e(a){var d=a.queries.item;return a.portal.queryGroups({query:a.queries.group,disableExtraQuery:!0}).then(function(a){return a.results[0].queryItems(new g({query:d,disableExtraQuery:!0,num:20,sortField:"title"})).then(function(a){return a.results})})}function f(a){var d=[];a.forEach(function(a){-1<a.typeKeywords.indexOf("default")?d.unshift(a):d.push(a)});
return d}Object.defineProperty(b,"__esModule",{value:!0});b.fetchSymbolSetSymbolSources=function(a){return e({portal:a,queries:{group:a.symbolSetsGroupQuery,item:'type:"Symbol Set" AND (typekeywords:"by value" AND typekeywords:"marker")'}}).then(f).then(function(a){return a.map(function(a){return new c.SymbolSetSymbolSource({portalItem:a})})})};b.fetchWebStyleSymbolSources=function(a){return e({portal:a,queries:{group:a.stylesGroupQuery,item:'type:"Style"'}}).then(f).then(function(a){return a.map(function(a){return new c.WebStyleSymbolSource({portalItem:a})})})};
b.symbolsFromJson=function(a){return a.map(function(a){return h.fromJSON(a)})};b.getPrimitives=function(a){return"flat"===a?new c.IconPrimitiveWebStyleSource:new c.ObjectPrimitiveWebStyleSource};b.getBasic=function(){return new c.BasicSymbolSetSource}});
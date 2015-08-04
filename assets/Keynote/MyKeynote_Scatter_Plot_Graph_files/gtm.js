// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 23
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){
var P=this,ua=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},va=function(a,b){var d=Array.prototype.slice.call(arguments,1);return function(){var b=d.slice();b.push.apply(b,arguments);return a.apply(this,b)}},wa=null;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var xa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ya=function(a){if(null==a)return String(a);var b=xa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},za=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ja=function(a){if(!a||"object"!=ya(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!za(a,"constructor")&&!za(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var d in a);return void 0===
d||za(a,d)},Ba=function(a,b){var d=b||("array"==ya(a)?[]:{}),c;for(c in a)if(za(a,c)){var e=a[c];"array"==ya(e)?("array"!=ya(d[c])&&(d[c]=[]),d[c]=Ba(e,d[c])):ja(e)?(ja(d[c])||(d[c]={}),d[c]=Ba(e,d[c])):d[c]=e}return d};var Ca=Math.random(),Da=null,Ea=null,Fa={};var Ga=function(){},L=function(a){return"function"==typeof a},Q=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ha=function(a){return"number"==ya(a)&&!isNaN(a)},Ia=function(a,b){if(Array.prototype.indexOf){var d=a.indexOf(b);return"number"==typeof d?d:-1}for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},Ja=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},M=function(a){return Math.round(Number(a))||0},la=function(a){return"false"==String(a).toLowerCase()?!1:
!!a},Ka=function(a){var b=[];if(Q(a))for(var d=0;d<a.length;d++)b.push(String(a[d]));return b},J=function(){return new Date},La=function(a,b){if(!Ha(a)||!Ha(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},Ma=function(){this.prefix="gtm.";this.values={}};Ma.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ma.prototype.get=function(a){return this.values[this.prefix+a]};Ma.prototype.contains=function(a){return void 0!==this.get(a)};
var Na=function(a,b,d){try{return a["20"](a,b||Ga,d||Ga)}catch(c){}return!1},Oa=function(a,b){function d(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var c=Ja(b).split("&"),e=0;e<c.length;e++)if(c[e]){var f=c[e].indexOf("=");0>f?d(c[e],"1"):d(c[e].substring(0,f),c[e].substring(f+1))}},Pa=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},Qa=function(a){for(var b=0;b<a.length;b++)a[b]()},ha=J().getTime(),ka=function(a,b,d){return a&&a.hasOwnProperty(b)?a[b]:d},Sa=function(a,
b,d){a.prototype["gtm_proxy_"+b]=a.prototype[b];a.prototype[b]=d},Ta=function(a){return null!==a&&void 0!==a&&void 0!==a.length},ia=function(a,b,d){if(!(b&&d&&Ta(a)&&Q(a)&&0!=a.length))return null;for(var c={},e=0;e<a.length;e++)a[e]&&a[e].hasOwnProperty(b)&&a[e].hasOwnProperty(d)&&(c[a[e][b]]=a[e][d]);return c},Ua=function(a,b){0==b?a.Ha=!0:a.complete=!0;var d=a.f;a.m&&(a.m.ea[d]=b);Fa[d]&&(Fa[d].state=b)};var u=window,O=document,Va=navigator,I=function(a,b,d){var c=u[a];if(a&&/^[a-zA-Z_]\w*$/g.test(a)){var e="var "+a+";";if(P.execScript)P.execScript(e,"JavaScript");else if(P.eval){if(null==wa)if(P.eval("var _evalTest_ = 1;"),"undefined"!=typeof P._evalTest_){try{delete P._evalTest_}catch(f){}wa=!0}else wa=!1;if(wa)P.eval(e);else{var g=P.document,h=g.createElement("SCRIPT");h.type="text/javascript";h.defer=!1;h.appendChild(g.createTextNode(e));g.body.appendChild(h);g.body.removeChild(h)}}else throw Error("goog.globalEval not available");
}u[a]=void 0===c||d?b:c;return u[a]},N=function(a,b,d,c){return(c||"http:"!=u.location.protocol?a:b)+d},Wa=function(a){var b=O.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},ma=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},A=function(a,b,d){var c=O.createElement("script");c.type="text/javascript";c.async=!0;c.src=a;ma(c,b);d&&(c.onerror=d);Wa(c)},ba=function(a,b){var d=O.createElement("iframe");
d.height="0";d.width="0";d.style.display="none";d.style.visibility="hidden";Wa(d);ma(d,b);void 0!==a&&(d.src=a);return d},n=function(a,b,d){var c=new Image(1,1);c.onload=function(){c.onload=null;b&&b()};c.onerror=function(){c.onerror=null;d&&d()};c.src=a},R=function(a,b,d,c){a.addEventListener?a.addEventListener(b,d,!!c):a.attachEvent&&a.attachEvent("on"+b,d)},q=function(a){u.setTimeout(a,0)},pa=!1,qa=[],Xa=function(a){if(!pa){var b=O.createEventObject,d="complete"==O.readyState,c="interactive"==
O.readyState;if(!a||"readystatechange"!=a.type||d||!b&&c){pa=!0;for(var e=0;e<qa.length;e++)qa[e]()}}},Ya=0,Za=function(){if(!pa&&140>Ya){Ya++;try{O.documentElement.doScroll("left"),Xa()}catch(a){u.setTimeout(Za,50)}}},ab=function(a){var b=O.getElementById(a);if(b&&$a(b,"id")!=a)for(var d=1;d<document.all[a].length;d++)if($a(document.all[a][d],"id")==a)return document.all[a][d];return b},$a=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},bb=function(a){return a.target||
a.srcElement||{}},ta=function(a){var b=O.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},cb=function(a,b){for(var d={},c=0;c<b.length;c++)d[b[c]]=!0;for(var e=a,c=0;e&&!d[String(e.tagName).toLowerCase()]&&100>c;c++)e=e.parentElement;e&&!d[String(e.tagName).toLowerCase()]&&(e=null);return e},gb=!1,hb=[],kb=function(){if(!gb){gb=!0;for(var a=0;a<hb.length;a++)hb[a]()}},lb=function(a){a=a||u;var b=a.location.href,
d=b.indexOf("#");return 0>d?"":b.substring(d+1)},ra=function(a){window.console&&window.console.log&&window.console.log(a)};var mb=function(a,b,d,c,e){var f,g=(a.protocol.replace(":","")||u.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||u.location.hostname).split(":")[0].toLowerCase();if(d){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:u.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=Ia(c||[],m[m.length-
1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");if(e)a:{for(var l=f.split("&"),k=0;k<l.length;k++){var p=l[k].split("=");if(decodeURIComponent(p[0]).replace("+"," ")==e){f=decodeURIComponent(p.slice(1).join("=")).replace("+"," ");break a}}f=void 0}break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},nb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},ca=function(a){var b=O.createElement("a");a&&
(b.href=a);return b};var ga=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var d=mb(ca(a),"host");if(!d)return!1;for(var c=0;b&&c<b.length;c++){var e=b[c]&&b[c].toLowerCase();if(e){var f=d.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&d.indexOf(e,f)==f)return!0}}return!1},fa=function(a,b){var d=function(){};d.prototype=a.prototype;var c=new d;a.apply(c,Array.prototype.slice.call(arguments,1));return c};var ea=function(a,b){A("//bat.bing.com/bat.js",a,b)},da=function(a,b,d){b&&(void 0===u[a]||d&&!u[a])&&(u[a]=b);return u[a]};var ob=new Ma,pb={},rb={set:function(a,b){Ba(qb(a,b),pb)},get:function(a){return D(a,2)},reset:function(){ob=new Ma;pb={}}},D=function(a,b){if(2==b){for(var d=pb,c=a.split("."),e=0;e<c.length;e++){if(void 0===d[c[e]])return;d=d[c[e]]}return d}return ob.get(a)},qb=function(a,b){for(var d={},c=d,e=a.split("."),f=0;f<e.length-1;f++)c=c[e[f]]={};c[e[e.length-1]]=b;return d};var sb,tb=new RegExp(/^(.*\.)?(google|youtube|blogger)(\.com?)?(\.[a-z]{2})?\.?$/),ub={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},vb={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},wb=function(a,b){for(var d=[],c=0;c<a.length;c++)d.push(a[c]),d.push.apply(d,b[a[c]]||[]);return d};var xb={html:1,_html:1,__html:1,jsm:1,_jsm:1,__jsm:1};
var yb=function(){var a=D("gtm.whitelist");var b=a&&wb(Ka(a),ub),d=D("gtm.blacklist")||D("tagTypeBlacklist")||[];tb.test(u.location&&u.location.hostname)&&(void 0==sb&&(sb=!0),d=Ka(d),d.push("customScripts"));
var c=d&&wb(Ka(d),vb),e={};return function(f){var g=f&&f["20"];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var h=!0;if(a)a:{if(0>Ia(b,g.a))if(g.b&&0<g.b.length)for(var m=0;m<g.b.length;m++){if(0>Ia(b,g.b[m])){h=!1;break a}}else{h=!1;break a}h=!0}var l=!1;if(d){var k;if(!(k=0<=Ia(c,g.a)))a:{for(var p=g.b||[],r=new Ma,t=0;t<c.length;t++)r.set(c[t],!0);for(t=0;t<p.length;t++)if(r.get(p[t])){k=!0;break a}k=!1}l=k;
l&&sb&&xb[g]&&(sb=!1,ra("Custom JS/HTML in GTM blocked. See go/13687728."));}return e[g.a]=!h||l}};var _jsm=function(a){if(void 0!==a["23"])try{var b=u.google_tag_manager;return b&&b.e&&b.e(a["23"])}catch(d){}};_jsm.a="jsm";_jsm.b=["customScripts"];var Ab=function(a){var b=O;return zb?b.querySelectorAll(a):null},Bb;a:{var Cb=/MSIE +([\d\.]+)/.exec(Va.userAgent);if(Cb&&Cb[1]){var Db=O.documentMode;Db||(Db="CSS1Compat"==O.compatMode?parseInt(Cb[1],10):5);if(!Db||8>=Db){Bb=!1;break a}}Bb=!!O.querySelectorAll}var zb=Bb;var _eu=function(a){var b=String(D("gtm.elementUrl")||a[""]||""),d=ca(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Ea};_e.a="e";_e.b=["google"];var _v=function(a){var b=D(a["26"].replace(/\\\./g,"."),a[""]);return void 0!==b?b:a[""]};_v.a="v";_v.b=["google"];var _f=function(a){var b=String(D("gtm.referrer")||O.referrer);if(!b)return b;var d=ca(b);return b};_f.a="f";_f.b=["google"];var aa=function(a){var b=u.location,d=b.hash?b.href.replace(b.hash,""):b.href,c;if(c=a[""]?a[""]:D("gtm.url"))d=String(c),b=ca(d);var e,f,g;
a["8"]&&(d=mb(b,a["8"],e,f,g));return d},_u=aa;_u.a="u";_u.b=["google"];var _eq=function(a){return String(a["4"])==String(a["5"])};_eq.a="eq";_eq.b=["google"];var _re=function(a){return(new RegExp(a["5"],a[""]?"i":void 0)).test(a["4"])};_re.a="re";_re.b=["google"];var Ob=Math.random(),Ub="1.000000">Ob;var Vb=Ga;var Wb=Ga,Xb=[],Yb=!1,Zb=function(a){return u["dataLayer"].push(a)},$b=function(a){var b=!1;return function(){!b&&L(a)&&q(a);b=!0}},gc=function(){for(var a=!1;!Yb&&0<Xb.length;){Yb=!0;var b=Xb.shift();if(L(b))try{b.call(rb)}catch(d){}else if(Q(b))a:{var c=b;if("string"==ya(c[0])){for(var e=c[0].split("."),f=e.pop(),g=c.slice(1),h=pb,m=0;m<e.length;m++){if(void 0===h[e[m]])break a;h=h[e[m]]}try{h[f].apply(h,g)}catch(l){}}}else{var k=b,p=void 0;for(p in k)if(k.hasOwnProperty(p)){var r=p,t=k[p];
ob.set(r,t);Ba(qb(r,t),pb)}var w=!1,v=k.event;if(v){Ea=v;var B=$b(k.eventCallback),E=k.eventTimeout;E&&u.setTimeout(B,Number(E));w=Wb(v,B,k.eventReporter)}Da||(Da=k["gtm.start"])&&Vb();Ea=null;a=w||a}var K=b,V=pb;fc();Yb=!1}return!a};var hc,ic=/(Firefox\D28\D)/g.test(Va.userAgent),jc={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},kc={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},qc=function(a,b){return function(d){d=d||u.event;var c=bb(d),e=!1;if(3!==d.which||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(c=cb(c,["a","area"]),e=!c||!c.href||lc(c.href)||2===d.which||null==d.which&&4==d.button||d.ctrlKey||d.shiftKey||d.altKey||!0===d.metaKey);var f="FORM_SUBMIT"==a?kc:jc;if(d.defaultPrevented||!1===d.returnValue||d.ia&&d.ia()){if(c){var g={simulateDefault:!1},
h=mc(f,["wnc","nwnc"]);h&&nc(a,c,g,f.wt,h)}}else{if(c){var g={},m=!0,l=mc(f,["wnc","nwnc","nwc","wc"]);(m=nc(a,c,g,f.wt,l))||(oc(g.eventReport,f)?b=!0:e=!0);e=e||m||"LINK_CLICK"==a&&ic;g.simulateDefault=!m&&b&&!e;g.simulateDefault&&(e=pc(c,g)||e,!e&&d.preventDefault&&d.preventDefault());d.returnValue=m||!b||e;return d.returnValue}return!0}}}},nc=function(a,b,d,c,e){var f=c||2E3,g={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||$a(b,"id")||"","gtm.elementTarget":b.formTarget||
b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=e||"";g.event="gtm.linkClick";g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=rc(b,d);g.eventReporter=function(a){d.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=sc(b);g.eventTimeout=f;g.eventCallback=tc(b,d);g.eventReporter=function(a){d.eventReport=a};break;case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||
"";break;default:return!0}return Zb(g)},sc=function(a){var b=a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},uc=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},pc=function(a,b){var d=!1,c=/(iPad|iPhone|iPod)/g.test(Va.userAgent),e=uc(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;f=(e||"_self").substring(1);b.targetWindow=u.frames&&u.frames[f]||u[f];break;case "_blank":c?(b.simulateDefault=
!1,d=!0):(b.targetWindowName="gtm_autoEvent_"+J().getTime(),b.targetWindow=u.open("",b.targetWindowName));break;default:c&&!u.frames[e]?(b.simulateDefault=!1,d=!0):(u.frames[e]||(b.targetWindowName=e),b.targetWindow=u.frames[e]||u.open("",e))}return d},rc=function(a,b,d){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(d=d||J().getTime(),500>J().getTime()-d&&u.setTimeout(rc(a,b,d),25)))}},tc=function(a,b,d){return function(){if(b.simulateDefault)if(b.targetWindow){var c;
b.targetWindowName&&(c=a.target,a.target=b.targetWindowName);O.gtmSubmitFormNow=!0;vc(a).call(a);b.targetWindowName&&(a.target=c)}else d=d||J().getTime(),500>J().getTime()-d&&u.setTimeout(tc(a,b,d),25)}},mc=function(a,b){for(var d=[],c=0;c<b.length;c++){var e=a[b[c]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&d.push(f)}return d.join(",")},wc=function(a,b,d,c,e){var f=e;if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>c)&&(a.wt=c);a[b?d?"wc":"wnc":d?"nwc":"nwnc"][f]=!0},oc=function(a,b){if(b.wnc["0"]||
b.wc["0"])return!0;for(var d=0;d<xc.length;d++)if(a.passingRules[d]){var c=xc[d],e=yc[d],f=e&&e[0]&&e[0][0]||e[1]&&e[1][0];if(f&&"0"!=f&&(b.wc[f]||b.wnc[f]))for(var g=c[1],h=0;h<g.length;h++)if(a.resolvedTags[g[h]])return!0}return!1},zc=function(a,b,d,c,e){var f,g,h=!1;switch(a){case "CLICK":if(O.gtmHasClickListenerTag)return;O.gtmHasClickListenerTag=!0;f="click";g=function(a){var b=bb(a);b&&nc("CLICK",b,{},c)};h=!0;break;case "LINK_CLICK":b&&!hc&&(hc=nb(O.location));wc(jc,b||!1,d||!1,c,e);if(O.gtmHasLinkClickListenerTag)return;
O.gtmHasLinkClickListenerTag=!0;f="click";g=qc(a,b||!1);break;case "FORM_SUBMIT":wc(kc,b||!1,d||!1,c,e);if(O.gtmHasFormSubmitListenerTag)return;O.gtmHasFormSubmitListenerTag=!0;f="submit";g=qc(a,b||!1);break;default:return}R(O,f,g,h)},lc=function(a){if(!hc)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var d=ca(a);return hc==nb(d)},vc=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
O.gtmFormElementSubmitter||(O.gtmFormElementSubmitter=O.createElement("form"));return O.gtmFormElementSubmitter.submit.call?O.gtmFormElementSubmitter.submit:a.submit};var Eb=new String("undefined"),Mc=function(a){this.resolve=function(b){for(var d=[],c=0;c<a.length;c++)d.push(a[c]===Eb?b:a[c]);return d.join("")}};Mc.prototype.toString=function(){return this.resolve("undefined")};Mc.prototype.valueOf=Mc.prototype.toString;var Qc={},Rc=function(a,b){var d=ha++;Qc[d]=[a,b];return d},Sc=function(a){var b=a?0:1;return function(a){var c=Qc[a];if(c&&L(c[b]))c[b]();Qc[a]=void 0}};var Tc=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Uc=function(a,b){return a<b?-1:a>b?1:0};var Vc=function(a){var b=arguments.length;if(1==b&&"array"==ua(arguments[0]))return Vc.apply(null,arguments[0]);for(var d={},c=0;c<b;c++)d[arguments[c]]=!0;return d};Vc("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var S;a:{var Wc=P.navigator;if(Wc){var Xc=Wc.userAgent;if(Xc){S=Xc;break a}}S=""};var Yc=function(){return-1!=S.indexOf("Edge")};var Zc=-1!=S.indexOf("Opera")||-1!=S.indexOf("OPR"),T=-1!=S.indexOf("Edge")||-1!=S.indexOf("Trident")||-1!=S.indexOf("MSIE"),$c=-1!=S.indexOf("Gecko")&&!(-1!=S.toLowerCase().indexOf("webkit")&&!Yc())&&!(-1!=S.indexOf("Trident")||-1!=S.indexOf("MSIE"))&&!Yc(),ad=-1!=S.toLowerCase().indexOf("webkit")&&!Yc(),bd=function(){var a=S;if($c)return/rv\:([^\);]+)(\)|;)/.exec(a);if(T&&Yc())return/Edge\/([\d\.]+)/.exec(a);if(T)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ad)return/WebKit\/(\S+)/.exec(a)},
cd=function(){var a=P.document;return a?a.documentMode:void 0},dd=function(){if(Zc&&P.opera){var a=P.opera.version;return"function"==ua(a)?a():a}var b="",d=bd();d&&(b=d?d[1]:"");if(T&&!Yc()){var c=cd();if(c>parseFloat(b))return String(c)}return b}(),ed={},fd=function(a){var b;if(!(b=ed[a])){for(var d=0,c=Tc(String(dd)).split("."),e=Tc(String(a)).split("."),f=Math.max(c.length,e.length),g=0;0==d&&g<f;g++){var h=c[g]||"",m=e[g]||"",l=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var p=
l.exec(h)||["","",""],r=k.exec(m)||["","",""];if(0==p[0].length&&0==r[0].length)break;d=Uc(0==p[1].length?0:parseInt(p[1],10),0==r[1].length?0:parseInt(r[1],10))||Uc(0==p[2].length,0==r[2].length)||Uc(p[2],r[2])}while(0==d)}b=ed[a]=0<=d}return b},gd=P.document,hd=cd(),id=!gd||!T||!hd&&Yc()?void 0:hd||("CSS1Compat"==gd.compatMode?parseInt(dd,10):5);var jd;if(!(jd=!$c&&!T)){var kd;if(kd=T)kd=T&&(Yc()||9<=id);jd=kd}jd||$c&&fd("1.9.1");T&&fd("9");var ld=function(a){ld[" "](a);return a};ld[" "]=function(){};var sa=function(a,b){var d="";T&&!md(a)&&(d='<script>document.domain="'+document.domain+'";\x3c/script>'+d);var c="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+d+"</head><body>"+b+"</body></html>";if(nd)a.srcdoc=c;else if(od){var e=a.contentWindow.document;e.open("text/html","replace");e.write(c);e.close()}else pd(a,c)},nd=ad&&"srcdoc"in document.createElement("iframe"),od=$c||ad||T&&fd(11),pd=function(a,b){T&&fd(7)&&!fd(10)&&6>qd()&&rd(b)&&(b=sd(b));var d=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};T&&!md(a)?td(a,d):d()},qd=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},md=function(a){try{var b;var d=a.contentWindow;try{var c;if(c=!!d&&null!=d.location.href)b:{try{ld(d.foo);c=!0;break b}catch(e){}c=!1}b=c}catch(f){b=!1}return b}catch(g){return!1}},ud=0,td=function(a,b){var d="goog_rendering_callback"+ud++;window[d]=b;a.src="javascript:'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+d+";window.parent."+d+" = null;continuation();})()\x3c/script>'"},rd=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},sd=function(a){for(var b=unescape(encodeURIComponent(a)),d=Math.floor(b.length/2),c=[],e=0;e<d;++e)c[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(c[d]=b.charAt(b.length-1));return c.join("")};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var wd=function(a,b,d,c){return function(){try{if(0<b.length){var e=b.shift(),f=wd(a,b,d,c);if("SCRIPT"==String(e.nodeName).toUpperCase()&&"text/gtmscript"==e.type){var g=O.createElement("script");g.async=!1;g.type="text/javascript";g.id=e.id;g.text=e.text||e.textContent||e.innerHTML||"";e.charset&&(g.charset=e.charset);var h=e.getAttribute("data-gtmsrc");h&&(g.src=h,ma(g,f));a.insertBefore(g,null);h||f()}else if(e.innerHTML&&0<=e.innerHTML.toLowerCase().indexOf("<script")){for(var m=[];e.firstChild;)m.push(e.removeChild(e.firstChild));
a.insertBefore(e,null);wd(e,m,f,c)()}else a.insertBefore(e,null),f()}else d()}catch(l){q(c)}}};var yd=function(a,b,d){if(O.body){var c=a["21"];c instanceof Mc&&(c=
c.resolve(Rc(b,d)),b=Ga);if(a[""])try{sa(ba(),"<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>"+c),q(b)}catch(e){q(d)}else a[""]?xd(c,b,d):wd(O.body,ta(c),b,d)()}else u.setTimeout(function(){yd(a,b,d)},200)},_html=yd;_html.a="html";_html.b=["customScripts"];var zd={},Bd=function(a,b,d,c,e){if(!zb)return!1;var f=zd[a];f||(f={id:a,F:[],U:0,sa:null,xa:!1},zd[a]=f);var g={id:a+":"+f.F.length,Pa:d,Ka:c,D:b,ga:0,da:e||null,wa:0,T:!1};f.F.push(g);null===b?(g.T=!0,d(null)):Ad(f);return!0},Ad=function(a){for(var b=a.U;b<a.F.length;b++){var d=a.F[b],c=b==a.U;if(!d.T&&!Cd(c,d))break;d.T&&c&&a.U++}a.F.length>a.U&&(a.sa||(a.sa=u.setTimeout(function(){a.sa=null;Ad(a)},80)),pa||a.xa||(a.xa=!0,qa.push(function(){Ad(a)})))},Cd=function(a,b){var d=[];if(b.D){var c=Dd(b.D,
b.id),e=null;b.da&&(e=Dd(b.da,b.id+"-t"));for(var f=0;f<c.length;f++){var g=c[f],h;if(null!=e&&(h=e.length>f?e[f]:null,!h&&!pa&&(null===b.da.h||b.wa+d.length<b.da.h)))break;d.push({element:g,ob:h})}}if(!pa&&b.Ka&&(!a||null==b.D.h||b.D.h!=b.ga+d.length))return!1;for(var m=0;m<d.length;m++){var l=d[m].element,k=d[m].ob;b.ga++;Ed(l,b.id);k&&(b.wa++,Ed(k,b.id+"-t"));b.Pa(l,k)}if(b.D.h&&b.D.h==b.ga||pa)b.T=!0;return!0},Ed=function(a,b){a.gtmProgressiveApplied||(a.gtmProgressiveApplied={});a.gtmProgressiveApplied[b]=
!0},Dd=function(a,b){for(var d=Ab(a.o)||[],c=[],e=0;e<d.length;e++){var f=d[e];if(!f.gtmProgressiveApplied||!f.gtmProgressiveApplied[b]){var g;if(g=a.s){var h;a:{for(var m=f;m;){if(m.nextSibling){h=!0;break a}m=m.parentNode}h=!1}g=!h}if(g)break;c.push(f)}}return c};var Rd,Sd;
var be=function(a){return function(){}},ce=function(a){return function(){}};
var me=!1,ne=!1,_ga=function(a,b,d){function c(a){var b=[].slice.call(arguments,0);b[0]=w+b[0];r.push(b)}function e(b,d){void 0!==a[d]&&c(b,a[d])}function f(b,d){void 0!==a[d]&&c(b,Number(a[d]))}function g(a,b){if(b)for(var d=0;d<b.length;d++){var e=[a];Q(b[d])?e.push.apply(e,b[d]):e.push(b[d]);"_setCustomVar"!=e[0]?c.apply(this,e):void 0!==e[3]&&c.call(this,e[0],M(e[1]),e[2],e[3],m(M,e[4]))}}function h(b,d){void 0!==a[d]&&c("_set",b,a[d])}function m(a,b){return void 0===b?b:a(b)}function l(b,c){void 0!==
a[c]&&(v+="&"+b+"="+a[c])}function k(a,b){v+="&"+a+"="+b}function p(a,b){return a.charAt(0)==b?a.substring(1):a}var r=I("_gaq",[],!1),t=!1,w="";void 0==a[""]?w="gtm"+ha++ +".":""!==a[""]&&(w=a[""]+".");e("_setAccount","0");c("_set","gtmid","GTM-5FPPCM");
var v="";
if(""!==v){var B=new Ma,E=p(u.location.search,"?"),z=p(u.location.hash,"#");E&&Oa(B,E);z&&a[""]&&Oa(B,z);B.contains("gclid")&&k("gclid",Pa(B.get("gclid")));B.contains("gclsrc")&&k("gclsrc",Pa(B.get("gclsrc")));B.contains("dclid")&&k("dclid",Pa(B.get("dclid")));c("_set","campaignParams",v)}
a["24"]&&c("_require","inpage_linkid","//www.google-analytics.com/plugins/ga/inpage_linkid.js");g("_setPageGroup",a["9"]);
e("_setCampaignTrack","6");e("_setClientInfo","7");e("_setDetectFlash","12");e("_setDetectTitle",
"13");void 0!==a["19"]&&a["19"]&&(r.push(["_gat._forceSSL"]),t=!!a["19"]);
c("_set","hitCallback",function(){if(L(a[""]))a[""]();b()});if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else c("_trackPageview");var U=function(){u._gat||d()};if(a["15"])ne||(ne=!0,A(N("https","http","://stats.g.doubleclick.net/dc.js",t),U,d));else if(!me){var ib=a["10"]?".google-analytics.com/u/ga_debug.js":".google-analytics.com/ga.js";
me=!0;A(N("https://ssl","http://www",ib,t),U,d)}};_ga.a="ga";_ga.b=["google"];var te=function(a){var b=u||P,d=b.onerror,c=!1;ad&&!fd("535.3")&&(c=!c);b.onerror=function(b,f,g,h,m){d&&d(b,f,g,h,m);a({message:b,fileName:f,hb:g,Fb:h,error:m});return c}};var Ue=61,Ve=[],We=[],ac=[],Xe=new Ma,Ye=[],X=[],xc=[],yc=[],Ze=function(){this.v=[]};Ze.prototype.set=function(a,b){this.v.push([a,b]);return this};Ze.prototype.resolve=function(a,b){for(var d={},c=0;c<this.v.length;c++){var e=$e(this.v[c][0],a,b),f=$e(this.v[c][1],a,b);d[e]=f}return d};var af=function(a){this.index=a};
af.prototype.resolve=function(a,b){var d=ac[this.index];if(d&&!b(d)){var c=d["22"];if(a){if(a.get(c))return;a.set(c,!0)}d=$e(d,a,b);a&&a.set(c,!1);return Na(d)}};
var _M=function(a){return new af(a)},bf=function(a){this.resolve=function(b,d){for(var c=[],e=!1,f=0;f<a.length;f++){var g=$e(Ve[a[f]],b,d);g===Eb&&(e=!0);c.push(g)}return e?new Mc(c):c.join("")}},_T=function(a){return new bf(arguments)},cf=function(a){function b(b){for(var c=1;c<a.length;c++)if(a[c]==b)return!0;return!1}this.resolve=
function(d,c){var e=$e(a[0],d,c);if(a[0]instanceof af&&b(8)&&b(16)){if(e===Eb)return e;var f="gtm"+ha++;Xe.set(f,e);return'google_tag_manager["GTM-5FPPCM"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=W[a[g]](e);return e}},_E=function(a,b){return new cf(arguments)},df=function(a,b){this.i=a;this.ca=b},_R=function(a,b){return new df(a,b)},dc=function(a,b){return $e(a,new Ma,b)},$e=function(a,b,d){var c=a;if(a instanceof af||a instanceof Ze||a instanceof bf||a instanceof cf)return a.resolve(b,
d);if(!(a instanceof df))if(Q(a))for(var c=[],e=0;e<a.length;e++)c[e]=$e(a[e],b,d);else if(a&&"object"==typeof a){var c={},f;for(f in a)a.hasOwnProperty(f)&&(c[f]=$e(a[f],b,d))}return c},ef=function(a,b){var d=b[a],c=d;if(d instanceof af||d instanceof cf||d instanceof bf||d instanceof df)c=d;else if(Q(d))for(var c=[],e=0;e<d.length;e++)c[e]=ef(d[e],b);else if("object"==typeof d){var c=new Ze,f;for(f in d)d.hasOwnProperty(f)&&c.set(b[f],ef(d[f],b))}return c},gf=function(a,b){for(var d=b?b.split(","):
[],c=0;c<d.length;c++){var e=d[c]=d[c].split(":");0==a&&(e[1]=Ve[e[1]]);if(1==a)for(var f=ff(e[0]),e=d[c]={},g=0;g<f.length;g++){var h=We[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=ff(e[g]);3==a&&(d[c]=Ve[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var m=0;m<e[g].length;m++)e[g][m]=Ve[e[g][m]]}else e[g]=[];5==a&&(d[c]=e[0])}return d},ff=function(a){var b=[];if(!a)return b;for(var d=0,c=0;c<a.length&&d<Ue;d+=6,c++){var e=a&&a.charCodeAt(c)||65;if(65!=e){var f=0,f=65<e&&90>=
e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(d);2&f&&b.push(d+1);4&f&&b.push(d+2);8&f&&b.push(d+3);16&f&&b.push(d+4);32&f&&b.push(d+5)}}return b},hf=function(a,b,d){a.push.apply(a,gf(b,d))};var jf=function(a){var b=this;this.f=a;this.complete=this.Ha=!1;this.ba=[];this.S=[];this.I=function(){b.complete||Qa(b.ba);Ua(b,1)};this.H=function(){b.complete||Qa(b.S);Ua(b,2)};this.j=Ga},kf=function(a,b){a.ba.push(b)},lf=function(a,b){a.S.push(b)},mf=function(a){this.w=[];this.ra=[];this.Ba={};this.ma=[];this.G=0;this.Fa={};this.Ia={};this.ea={};this.event=a};mf.prototype.addListener=function(a){this.ma.push(a)};
var nf=function(a,b,d,c,e,f){if(!d.complete){a.w[b]=d;void 0==c&&(c=[]);void 0==e&&(e=[]);void 0==f&&(f=[]);c=Q(c)?c.slice():["or",c];e=Q(e)?e.slice():[e];f=Q(f)?f.slice():[f];a.Ba[b]=c;a.Fa[b]=0<e.length;a.Ia[b]=0<f.length;a.G++;var g=function(){0<a.G&&a.G--;0<a.G||Qa(a.ma)};kf(d,g);lf(d,g)}},of=function(a,b,d){a.w[b]&&(kf(a.w[b],function(){d(b,!0)}),lf(a.w[b],function(){d(b,!1)}))},pf=function(a,b){var d=!1;return function(c,e){var f;a:{for(var g=0;g<a.length;g++)if(a[g]instanceof df&&a[g].i===
c||a[g]===c){f=g;break a}f=-1}d||0>f||("or"==a[0]?e?(d=!0,b()):(a.splice(f,1),1==a.length&&(d=!0)):e?(a.splice(f,1),1==a.length&&(d=!0,b())):d=!0)}},tf=function(a,b){var d=[],c=!1,e=function(b){var f,g,h=X[b];if(a.event.c(h)){}else g=qf(h,b,a);if(f=g){var k=rf(b,!0);0<k.length&&e(k[0].i);d.push(f);var l=rf(b,!1);0<l.length&&e(l[0].i)}else c=!0};e(b);if(!c){for(var f=0;f<d.length;f++){var g=d[f],h=rf(g.f,
!0);if(0<h.length){var m=d[f-1],l=sf(g);kf(m,l);0==h[0].ca&&lf(m,l)}var k=rf(g.f,!1);0<k.length&&(l=sf(d[f+1]),kf(g,l),0==k[0].ca&&lf(g,l))}a.ra.push(d)}},rf=function(a,b){var d=b?"":"",c=X[a],e=void 0===c[d]?[]:c[d];return Q(e)?e:[e]},sf=function(a){return function(){a.j()}},vf=function(a){for(var b={},d=0;d<a.length;d++){var c=a[d],e=[],f=function(a){var b=rf(a,!0);0<b.length&&f(b[0].i);e.push(a);var c=rf(a,!1);0<c.length&&f(c[0].i)};f(c.f);b[c.f]=e}uf(a,
b);return b},uf=function(a,b){for(var d=0;d<a.length;d++){var c=a[d].f,e;for(e in b)if(b.hasOwnProperty(e)&&e!=c&&-1<Ia(b[e],c)){delete b[c];break}}};var xf=function(a,b){return function(){a["30"]=b.I;a["31"]=b.H;var d=b.f,c=b.m&&b.m.ea[d],e=Fa[d]&&Fa[d].state,f=c?void 0!==c:b.Ha,g=Fa[d]&&Fa[d].firingOption,h=g&&2==g,m=g&&1==g;if((f||e&&0!=e)&&(f||h)&&(h||m))h&&Fa[d]&&1==Fa[d].state||m&&b.m&&1==b.m.ea[d]?b.I():b.H();else{var l=b.m?b.m.event:void 0;a=wf(a,l?l.c:yb());Ua(b,0);Na(a,b.I,b.H)}}},wf=function(a,b){a=dc(a,b);
return a},qf=function(a,b,d){var c=new jf(b);c.m=d;kf(c,be(a));lf(c,ce(a));c.j=xf(a,c);return c};
var Bf=!1,_ua=function(a,b,d){function c(a){var b=[].slice.call(arguments,0);b[0]=p+b[0];u[l()].apply(window,b)}function e(b,d){void 0!==a[d]&&c("set",b,a[d])}function f(a,b){return void 0===b?b:a(b)}function g(a,b){if(b)for(var d in b)b.hasOwnProperty(d)&&c("set",a+d,b[d])}function h(){var b=function(a,b,d){if(!ja(b))return!1;for(var e=ka(Object(b),d,[]),f=0;e&&f<e.length;f++)c(a,e[f]);return!!e&&0<e.length},d;a["16"]?
d=D("ecommerce"):a[""]&&(d=a[""].ecommerce);if(!ja(d))return;d=Object(d);var e=ka(a["18"],"currencyCode",d.currencyCode);void 0!==e&&c("set","&cu",e);b("ec:addImpression",d,"impressions");if(b("ec:addPromo",d[d.promoClick?"promoClick":"promoView"],"promotions")&&d.promoClick){c("ec:setAction","promo_click",d.promoClick.actionField);return}for(var f="detail checkout checkout_option click add remove purchase refund".split(" "),
g=0;g<f.length;g++){var h=d[f[g]];if(h){b("ec:addProduct",h,"products");c("ec:setAction",f[g],h.actionField);break}}}function m(a,b,c){var d=0;if(void 0!==a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&w[e]||!c&&void 0===w[e])){var f=v[e]?la(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d}I("GoogleAnalyticsObject",a["26"]||"ga",!1);var l=function(){return u.GoogleAnalyticsObject},k=I(l(),function(){var a=u[l()];a.q=
a.q||[];a.q.push(arguments)},!1);k.l=Number(J());var p="",r="";void 0==a[""]?(r="gtm"+ha++,p=r+"."):""!==a[""]&&(r=a[""],p=r+".");var t=!1;var w={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0},v={allowAnchor:!0,
allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useBeacon:!0};var B={name:r};
void 0!==
a["1"]&&(B.allowLinker=a["1"]);m(a["18"],B,!0);k("create",a["0"],B);c("set","&gtm","GTM-5FPPCM");void 0!==a["3"]&&c("set","anonymizeIp",a["3"]||void 0);

g("contentGroup",a["9"]);g("dimension",a["14"]);
g("metric",a["25"]);var E={};m(a["18"],E,!1)&&c("set",E);a["24"]&&c("require","linkid","linkid.js");
c("set","hitCallback",function(){if(L(a[""]))a[""]();else{var c=a["18"],d=c&&c.hitCallback;L(d)&&d()}b()});if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else{a["17"]&&(c("require","ec","ec.js"),h());if(a["15"]&&
!a[""]){var K="_dc_gtm_"+String(a["0"]).replace(/[^A-Za-z0-9-]/g,"");c("require","displayfeatures",void 0,{cookieName:K})}
c("send","pageview");}if(!Bf){var U=a["10"]?"u/analytics_debug.js":"analytics.js";Bf=!0;A(N("https:","http:","//www.google-analytics.com/"+U,
t),function(){u[l()].loaded||d()},d)}};_ua.a="ua";_ua.b=["google"];var Cf,Df;var fc=function(){};var Qf=function(){var a=[];return function(b,d){if(void 0===a[b]){var c=Ye[b]&&dc(Ye[b],d),e=c;if(c)if(c[""]&&Q(c["5"]))for(var f=c["5"],e=!1,g=0;!e&&g<f.length;g++)c["5"]=f[g],e=Na(c);else e=Na(c);a[b]=[e,c]}return a[b]}},Rf=function(a,b){for(var d=b[0],c=0;c<d.length;c++)if(!a.C(d[c],a.c)[0])return!1;for(var e=b[2],c=0;c<e.length;c++)if(a.C(e[c],a.c)[0])return!1;return!0},Sf=!1,Wb=function(a,b,d){switch(a){case "gtm.js":if(Sf)return!1;Sf=!0;break;
case "gtm.sync":if(D("gtm.snippet")!=Ca)return!1}D("tagTypeBlacklist");for(var c={name:a,O:b||Ga,N:ff(),Z:ff(),C:Qf(),c:yb()},e=[],f=0;f<xc.length;f++)if(Rf(c,xc[f])){e[f]=!0;for(var g=c,h=xc[f],m=h[1],l=0;l<m.length;l++)g.N[m[l]]=!0;for(var k=h[3],l=0;l<k.length;l++)g.Z[k[l]]=!0}else e[f]=!1;var p=[];for(var r=0;r<Ue;r++)if(c.N[r]&&!c.Z[r])if(c.c(X[r])){}else{p[r]=X[r];}c.aa=p;for(var t=new mf(c),w=0;w<Ue;w++)if(c.N[w]&&!c.Z[w]&&!c.c(X[w])){var v=c.aa[w],B=qf(v,w,t);nf(t,w,B,v[""],v[""],v[""]);if(v[""])break}t.addListener(c.O);
for(var E=[],z=0;z<t.w.length;z++){var F=t.w[z];if(F){var x=t.Ba[z],C=t.Fa[z],y=t.Ia[z];if(0!=x.length||C||y){if(0<x.length)for(var G=pf(x,F.j),K=0;K<x.length;K++)x[K]instanceof df&&x[K].i!=z&&of(t,x[K].i,G);(C||y)&&tf(t,z)}else E.push(z)}}for(z=0;z<E.length;z++)t.w[E[z]].j();for(z=0;z<t.ra.length;z++){for(var V=t.ra[z],U=V,ib=[],Pb=0;Pb<U.length;Pb++){var Tb=U[Pb],Oc=Tb.f,Pc=Fa[Oc],Qb=Pc.firingOption;0!=Qb&&(1==Qb&&void 0!==Tb.m.ea[Oc]||2==Qb&&void 0!==Pc.state)&&ib.push(Tb)}var Rb=vf(ib),jb=void 0;
for(jb in Rb)if(Rb.hasOwnProperty(jb)){for(var Sb=void 0,Nc=void 0,Fb=Rb[jb],Yf=Fb[0],we=Fb[Fb.length-1],xe,na=0;na<U.length;na++){var Lb=U[na];!Sb&&Lb.f==Yf&&0<na&&(Sb=U[na-1]);Lb.f==we&&na<U.length-1&&(Nc=U[na+1]);if(-1<Ia(Fb,Lb.f))if(xe=U.splice(na,1)[0],Lb.f==we)break;else na--}if(xe){var ye=Number(jb),Y=Sb,Gc=Nc;if(Y){var Zf=Y.ba[0],$f=Y.S[0],ze=Y;ze.ba=[];ze.S=[];kf(Y,Zf);lf(Y,$f)}if(Y&&Gc){var Hc=sf(Gc);kf(Y,Hc);var Ic=rf(Y.f,!1);0<Ic.length&&Ic[0].i!=ye&&0==Ic[0].ca&&lf(Y,Hc);var Jc=rf(Gc.f,
!0);0<Jc.length&&Jc[0].i!=ye&&0==Jc[0].ca&&lf(Y,Hc)}}}0<V.length&&V[0].j()}0<t.G||Qa(t.ma);d&&L(d)&&d({passingRules:e,resolvedTags:c.aa});return 0<c.aa.length};var Tf={macro:function(a){if(Xe.contains(a))return Xe.get(a)}};Tf.dataLayer=rb;Tf.onHtmlSuccess=Sc(!0);Tf.onHtmlFailure=Sc(!1);Tf.Ta=function(){var a=u.google_tag_manager;a||(a=u.google_tag_manager={});a["GTM-5FPPCM"]||(a["GTM-5FPPCM"]=Tf)};Ve.push.apply(Ve,function(){for(var a=[_jsm,'Agentbot','(function(){var a\x3dnavigator.userAgent.toLowerCase(),b\x3d/(gomezagent|apm synthetic agent|YottaaMonitor|ruxitsynthetic|ktxn|khte|ktht|dynatrace|keynote)/g;return a.match(b)?!0:!1})();',_T(2),_re,_u,'url',_M(1),'.*',_eq,_e,'_event',_M(2),'gtm.js','',_ua,'UA-393555-11',false,{},'\x26tid','\x26aip',{19:16,20:17},true,3,_ga,'UA-393555-8',[],7,_html,'\x3cscript type\x3d\x22text/gtmscript\x22\x3e(function(){function b(){var a\x3ddocument.createElement(\x22script\x22),b\x3d\x22rumtest.keynote.com/rum.png\x22;a.type\x3d\x22text/javascript\x22;a.async\x3d!0;a.src\x3d\x22//d1wscoizcbxzhp.cloudfront.net/233523.js\x22;a.onload\x3dfunction(){BOOMR.init({beacon_url:\x22//\x22+b,autorun:!0})};a.onreadystatechange\x3dfunction(){if(\x22loaded\x22\x3d\x3d\x3da.readyState||\x22complete\x22\x3d\x3d\x3da.readyState)a.onload()};var c\x3ddocument.getElementsByTagName(\x22script\x22)[0];c.parentNode.insertBefore(a,c)}window.attachEvent?window.attachEvent(\x22onload\x22,b):window.addEventListener(\x22load\x22,\nb,!1)})();\x3c/script\x3e',8,'url hostname','host','url path','path',_f,'referrer','event',_v,'element','gtm.element','element classes','gtm.elementClasses','element id','gtm.elementId','element target','gtm.elementTarget','element url','gtm.elementUrl'],b=[],d=0;d<a.length;d++)b[d]=ef(d,a);return b}());hf(We,0,"20:0,22:1,23:3,20:4,20:5,22:6,4:7,5:8,20:9,20:10,22:11,4:12,5:13,20:15,0:16,17:17,16:17,3:17,9:18,14:18,25:18,29:17,18:18,10:17,11:17,2:21,24:17,1:17,15:22,28:23,20:24,0:25,9:26,6:22,7:22,12:22,13:22,27:22,19:17,28:27,20:28,21:29,28:30,22:31,8:32,22:33,8:34,20:35,22:36,22:37,20:38,22:39,26:40,22:41,26:42,22:43,26:44,22:45,26:46,22:47,26:48");hf(ac,1,"H,w,AY,QAAAAAAG,QAAAAAAY,AAAAAAAgB,AIAAAAAAC,AAAAAAAAc,AAAAAAAAkB,AAAAAAAAEG,AAAAAAAAEY,AAAAAAAAEgB");
hf(Ye,1,"ID,AkB");hf(X,1,"AA-__,AAAgE_P,AAAAAAwB");hf(xc,2,"D:H::");hf(yc,4,"14.14.14:");for(var Uf=0;Uf<X.length;Uf++){var Vf=X[Uf],Wf=1;Vf[""]?Wf=2:Vf[""]&&(Wf=0);Fa[Uf]={firingOption:Wf,state:void 0}}
Tf.Ta();(function(a){})("async");
(function(){var a=I("dataLayer",[],!1),b=I("google_tag_manager",{},!1),b=b["dataLayer"]=b["dataLayer"]||{};qa.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});hb.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var d=a.push;a.push=function(){var b=[].slice.call(arguments,0);d.apply(a,b);for(Xb.push.apply(Xb,b);300<this.length;)this.shift();return gc()};Xb.push.apply(Xb,a.slice(0));q(gc)})();
if("interactive"==O.readyState&&!O.createEventObject||"complete"==O.readyState)Xa();else{R(O,"DOMContentLoaded",Xa);R(O,"readystatechange",Xa);if(O.createEventObject&&O.documentElement.doScroll){var Xf=!0;try{Xf=!u.frameElement}catch(bg){}Xf&&Za()}R(u,"load",Xa)}"complete"===O.readyState?kb():R(u,"load",kb);
(function(a){})("async");var _vs="res_ts:1431451656292000,srv_cl:96347252,ds:live,cv:23";
})()

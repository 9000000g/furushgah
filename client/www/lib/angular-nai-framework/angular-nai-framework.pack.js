
/*-------------------------------*/
/* angular-nai-framework ver 0.1 */
/*-------------------------------*/




/*-----------------------*/
/* lib/jquery/jquery-1.10.2.min.js*/
/*-----------------------*/
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);



/*-----------------------*/
/* lib/angularjs/angular.min.js*/
/*-----------------------*/
/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(U,X,u){'use strict';function A(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.6/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ra(b){if(null==b||Sa(b))return!1;var a=b.length;return b.nodeType===
na&&a?!0:z(b)||x(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(B(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(x(b)||Ra(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Cd(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Dd(){return++kb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function G(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var k=f[g];b[k]=e[k]}}lc(b,a);return b}function $(b){return parseInt(b,10)}function H(){}function oa(b){return b}function ca(b){return function(){return b}}function C(b){return"undefined"===typeof b}function y(b){return"undefined"!==
typeof b}function O(b){return null!==b&&"object"===typeof b}function z(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function pa(b){return"[object Date]"===Ja.call(b)}function B(b){return"function"===typeof b}function lb(b){return"[object RegExp]"===Ja.call(b)}function Sa(b){return b&&b.window===b}function Ta(b){return b&&b.$evalAsync&&b.$watch}function Ua(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Ed(b){var a={};
b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return Q(b.nodeName||b[0]&&b[0].nodeName)}function Va(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Sa(b)||Ta(b))throw Wa("cpws");if(a){if(b===a)throw Wa("cpi");c=c||[];d=d||[];if(O(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(x(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),O(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;x(a)?a.length=
0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),O(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)x(b)?a=Da(b,[],c,d):pa(b)?a=new Date(b.getTime()):lb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):O(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function qa(b,a){if(x(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(O(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=
b[c];return a||b}function ga(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(x(b)){if(!x(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ga(b[d],a[d]))return!1;return!0}}else{if(pa(b))return pa(a)?ga(b.getTime(),a.getTime()):!1;if(lb(b)&&lb(a))return b.toString()==a.toString();if(Ta(b)||Ta(a)||Sa(b)||Sa(a)||x(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!B(b[d])){if(!ga(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&
"$"!==d.charAt(0)&&a[d]!==u&&!B(a[d]))return!1;return!0}return!1}function Xa(b,a,c){return b.concat(Ya.call(a,c))}function nc(b,a){var c=2<arguments.length?Ya.call(arguments,2):[];return!B(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Xa(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Fd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Sa(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":Ta(a)&&
(c="$SCOPE");return c}function Za(b,a){if("undefined"===typeof b)return u;Y(a)||(a=a?2:null);return JSON.stringify(b,Fd,a)}function oc(b){return z(b)?JSON.parse(b):b}function va(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return b[0].nodeType===mb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&
(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),y(d)&&(b=y(c[1])?pc(c[1]):!0,rc.call(a,d)?x(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];r(b,function(b,d){x(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function nb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Gd(b,a){var c,d,e=ob.length;b=D(b);for(d=0;d<e;++d)if(c=ob[d]+a,z(c=b.attr(c)))return c;return null}function Hd(b,a){var c,d,e={};r(ob,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(ob,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Gd(c,"strict-di"),a(c,d?[d]:[],e))}function sc(b,
a,c){O(c)||(c={});c=G({strictDi:!1},c);var d=function(){b=D(b);if(b.injector()){var d=b[0]===X?"document":va(b);throw Wa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Ob(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},
e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;U&&e.test(U.name)&&(c.debugInfoEnabled=!0,U.name=U.name.replace(e,""));if(U&&!f.test(U.name))return d();U.name=U.name.replace(f,"");ha.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function Id(){U.name="NG_ENABLE_DEBUG_INFO!"+U.name;U.location.reload()}function Jd(b){return ha.element(b).injector().get("$$testability")}function Pb(b,a){a=a||"_";return b.replace(Kd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Ld(){var b;
tc||((ra=U.jQuery)&&ra.fn.on?(D=ra,G(ra.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ra._data(e,"events"))&&c.$destroy&&ra(e).triggerHandler("$destroy");b(a)}):D=R,ha.element=D,tc=!0)}function Rb(b,a,c){if(!b)throw Wa("areq",a||"?",c||"required");return b}function pb(b,a,c){c&&x(b)&&(b=b[b.length-1]);Rb(B(b),a,"not a function, got "+
(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Wa("badname",a);}function uc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&B(b)?nc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function ia(){return Object.create(null)}function Md(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=A("$injector"),
d=A("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||A;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return t}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),t={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide",
"factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return t})}})}function Nd(b){G(b,{bootstrap:sc,copy:Da,extend:G,equals:ga,element:D,forEach:r,injector:Ob,noop:H,bind:nc,toJson:Za,fromJson:oc,identity:oa,isUndefined:C,
isDefined:y,isString:z,isFunction:B,isObject:O,isNumber:Y,isElement:mc,isArray:x,version:Od,isDate:pa,lowercase:Q,uppercase:rb,callbacks:{counter:0},getTestability:Jd,$$minErr:A,$$csp:$a,reloadWithDebugInfo:Id});ab=Md(U);try{ab("ngLocale")}catch(a){ab("ngLocale",[]).provider("$locale",Pd)}ab("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Qd});a.provider("$compile",vc).directive({a:Rd,input:wc,textarea:wc,form:Sd,script:Td,select:Ud,style:Vd,option:Wd,ngBind:Xd,ngBindHtml:Yd,ngBindTemplate:Zd,
ngClass:$d,ngClassEven:ae,ngClassOdd:be,ngCloak:ce,ngController:de,ngForm:ee,ngHide:fe,ngIf:ge,ngInclude:he,ngInit:ie,ngNonBindable:je,ngPluralize:ke,ngRepeat:le,ngShow:me,ngStyle:ne,ngSwitch:oe,ngSwitchWhen:pe,ngSwitchDefault:qe,ngOptions:re,ngTransclude:se,ngModel:te,ngList:ue,ngChange:ve,pattern:xc,ngPattern:xc,required:yc,ngRequired:yc,minlength:zc,ngMinlength:zc,maxlength:Ac,ngMaxlength:Ac,ngValue:we,ngModelOptions:xe}).directive({ngInclude:ye}).directive(sb).directive(Bc);a.provider({$anchorScroll:ze,
$animate:Ae,$browser:Be,$cacheFactory:Ce,$controller:De,$document:Ee,$exceptionHandler:Fe,$filter:Cc,$interpolate:Ge,$interval:He,$http:Ie,$httpBackend:Je,$location:Ke,$log:Le,$parse:Me,$rootScope:Ne,$q:Oe,$$q:Pe,$sce:Qe,$sceDelegate:Re,$sniffer:Se,$templateCache:Te,$templateRequest:Ue,$$testability:Ve,$timeout:We,$window:Xe,$$rAF:Ye,$$asyncCallback:Ze,$$jqLite:$e})}])}function bb(b){return b.replace(af,function(a,b,d,e){return e?d.toUpperCase():d}).replace(bf,"Moz$1")}function Dc(b){b=b.nodeType;
return b===na||!b||9===b}function Ec(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(cf.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(df,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Xa(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;z(b)&&(b=P(b),
a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new R(b)}if(a){a=X;var c;b=(c=ef.exec(b))?[a.createElement(c[1])]:(c=Ec(b,a))?c.childNodes:[]}Fc(this,b)}function Ub(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Gc(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),function(a){if(y(c)){var d=e[a];Va(d||[],c);if(d&&0<
d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function ub(b,a){var c=b.ng339,d=c&&wb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Gc(b)),delete wb[c],b.ng339=u))}function vb(b,a){var c=b.ng339,c=c&&wb[c];a&&!c&&(b.ng339=c=++ff,c=wb[c]={events:{},data:{},handle:u});return c}function Vb(b,a,c){if(Dc(b)){var d=y(c),e=!d&&a&&!O(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;
if(e)return b&&b[a];G(b,a)}}}function xb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function yb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",P((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+P(a)+" "," ")))})}function zb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=P(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",P(c))}}function Fc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Hc(b,a){return Ab(b,"$"+(a||"ngController")+"Controller")}function Ab(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=x(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Ic(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
function Jc(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function gf(b,a){a=a||U;if("complete"===a.document.readyState)a.setTimeout(b);else D(a).on("load",b)}function Kc(b,a){var c=Bb[a.toLowerCase()];return c&&Lc[ua(b)]&&c}function hf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Mc[a]}function jf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(C(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;
c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var k=0;k<g;k++)c.isImmediatePropagationStopped()||f[k].call(b,c)}};c.elem=b;return c}function $e(){this.$get=function(){return G(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return zb(b,a)},removeClass:function(b,a){b.attr&&
(b=b[0]);return yb(b,a)}})}}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Dd)():c+":"+b}function cb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function kf(b){return(b=b.toString().replace(Nc,"").match(Oc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Wb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw z(c)&&
c||(c=b.name||kf(b)),Fa("strictdi",c);a=b.toString().replace(Nc,"");a=a.match(Oc);r(a[1].split(lf),function(a){a.replace(mf,function(a,b,c){d.push(c)})})}b.$inject=d}}else x(b)?(a=b.length-1,pb(b[a],"fn"),d=b.slice(0,a)):pb(b,"fn",!0);return d}function Ob(b,a){function c(a){return function(b,c){if(O(b))r(b,kc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(B(b)||x(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,
this);if(C(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{z(a)?(c=ab(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(q.invoke(a)):x(a)?b.push(q.invoke(a)):pb(a,"module")}catch(e){throw x(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&
(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===k)throw Fa("cdep",a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=k,b[a]=c(a,e)}catch(f){throw b[a]===k&&delete b[a],f;}finally{l.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=Wb(b,a,g),l,q,s;q=0;for(l=k.length;q<l;q++){s=k[q];if("string"!==typeof s)throw Fa("itkn",s);h.push(f&&f.hasOwnProperty(s)?f[s]:d(s,g))}x(b)&&
(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((x(a)?a[a.length-1]:a).prototype);a=e(a,d,b,c);return O(a)||B(a)?a:d},get:d,annotate:Wb,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var k={},l=[],m=new cb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ca(b),!1)}),constant:c(function(a,b){La(a,
"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ha.isString(b)&&l.push(b);throw Fa("unpr",l.join(" <- "));}),t={},s=t.$injector=h(t,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,u,a)});r(g(b),function(a){s.invoke(a||H)});return s}function ze(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location",
"$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}
var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||gf(function(){d.$evalAsync(g)})});return g}]}function Ze(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,Ya.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function Aa(){r(K,function(a){a()});E=b(Aa,a)})()}function g(){h();k()}function h(){J=
b.history.state;J=C(J)?null:J;ga(J,S)&&(J=S);S=J}function k(){if(F!==m.url()||L!==J)F=m.url(),L=J,r(W,function(a){a(m.url(),J)})}function l(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,p=a[0],q=b.location,t=b.history,s=b.setTimeout,N=b.clearTimeout,n={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){r(K,function(a){a()});0===v?a():w.push(a)};var K=[],E;m.addPollFn=function(a){C(E)&&
f(100,s);K.push(a);return a};var J,L,F=q.href,da=a.find("base"),I=null;h();L=J;m.url=function(a,c,e){C(e)&&(e=null);q!==b.location&&(q=b.location);t!==b.history&&(t=b.history);if(a){var f=L===e;if(F===a&&(!d.history||f))return m;var g=F&&Ga(F)===Ga(a);F=a;L=e;!d.history||g&&f?(g||(I=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(t[c?"replaceState":"pushState"](e,"",a),h(),L=J);return m}return I||q.href.replace(/%27/g,"'")};m.state=function(){return J};var W=
[],ba=!1,S=null;m.onUrlChange=function(a){if(!ba){if(d.history)D(b).on("popstate",g);D(b).on("hashchange",g);ba=!0}W.push(a);return a};m.$$checkUrlChange=k;m.baseHref=function(){var a=da.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var aa={},y="",ea=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===u?p.cookie=encodeURIComponent(a)+"=;path="+ea+";expires=Thu, 01 Jan 1970 00:00:00 GMT":z(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+ea).length+
1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),aa={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=l(e.substring(0,g)),aa[a]===u&&(aa[a]=l(e.substring(g+1))));return aa}};m.defer=function(a,b){var c;v++;c=s(function(){delete n[c];e(a)},b||0);n[c]=!0;return c};m.defer.cancel=function(a){return n[a]?(delete n[a],N(a),e(H),!0):!1}}function Be(){this.$get=["$window","$log","$sniffer",
"$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ce(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw A("$cacheFactory")("iid",b);var g=0,h=G({},d,{id:b}),k={},l=d&&d.capacity||Number.MAX_VALUE,m={},p=null,q=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!C(b))return a in k||g++,k[a]=b,g>l&&this.remove(q.key),b},get:function(a){if(l<
Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete k[a];g--},removeAll:function(){k={};g=0;m={};p=q=null},destroy:function(){m=h=k=null;delete a[b]},info:function(){return G({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Te(){this.$get=["$cacheFactory",function(b){return b("templates")}]}
function vc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ka("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Ed("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");z(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||
(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);B(h)?h={compile:ca(h)}:!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";O(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,kc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?
(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var l=!0;this.debugInfoEnabled=function(a){return y(a)?(l=a,this):l};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,N,n,v,w,K,E,J){function L(a,b){try{a.addClass(b)}catch(c){}}
function F(a,b,c,d,e){a instanceof D||(a=D(a));r(a,function(b,c){b.nodeType==mb&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=da(a,b,a,c,d,e);F.$$addScopeClass(a);var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?D(U(g,D("<div>").append(a).html())):
c?Ka.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);F.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function da(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,q,s,n,w;if(p)for(w=Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(s=h.length;q<s;)k=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(l=a.$new(),F.$$addScopeInfo(D(k),l)):l=a,n=c.transcludeOnThisElement?I(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?I(a,
b):null,c(f,l,k,d,n)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,q,s,p,n=0;n<a.length;n++){k=new V;l=W(a[n],[],k,0===n?d:u,e);(f=l.length?aa(l,a[n],k,b,c,null,[],[],f):null)&&f.scope&&F.$$addScopeClass(k.$$element);k=f&&f.terminal||!(q=a[n].childNodes)||!q.length?null:da(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(n,f,k),s=!0,p=p||f;f=null}return s?g:null}function I(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,
{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(b,c,g,h,k){var l=g.$attr,q;switch(b.nodeType){case na:ea(c,wa(ua(b)),"E",h,k);for(var s,n,w,N=b.attributes,K=0,t=N&&N.length;K<t;K++){var J=!1,v=!1;s=N[K];q=s.name;s=P(s.value);n=wa(q);if(w=Ha.test(n))q=Pb(n.substr(6),"-");var L=n.replace(/(Start|End)$/,""),E;a:{var F=L;if(d.hasOwnProperty(F)){E=void 0;for(var F=a.get(F+"Directive"),W=0,r=F.length;W<r;W++)if(E=F[W],E.multiElement){E=!0;break a}}E=!1}E&&n===L+"Start"&&
(J=q,v=q.substr(0,q.length-5)+"end",q=q.substr(0,q.length-6));n=wa(q.toLowerCase());l[n]=q;if(w||!g.hasOwnProperty(n))g[n]=s,Kc(b,n)&&(g[n]=!0);R(b,c,s,n,w);ea(c,n,"A",h,k,J,v)}b=b.className;if(z(b)&&""!==b)for(;q=f.exec(b);)n=wa(q[2]),ea(c,n,"C",h,k)&&(g[n]=P(q[3])),b=b.substr(q.index+q[0].length);break;case mb:T(c,b.nodeValue);break;case 8:try{if(q=e.exec(b.nodeValue))n=wa(q[1]),ea(c,n,"M",h,k)&&(g[n]=P(q[2]))}catch(da){}}c.sort(A);return c}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&
a.hasAttribute(b)){do{if(!a)throw ka("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function S(a,b,c){return function(d,e,f,g,h){e=ba(e[0],b,c);return a(d,e,f,g,h)}}function aa(a,d,e,f,g,k,l,s,p){function w(a,b,c,d){if(a){c&&(a=S(a,c,d));a.require=M.require;a.directiveName=fa;if(I===M||M.$$isolateScope)a=Y(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=S(b,c,d));b.require=M.require;b.directiveName=fa;if(I===
M||M.$$isolateScope)b=Y(b,{isolateScope:!0});s.push(b)}}function K(a,b,c,d){var e,f="data",g=!1,k=c,l;if(z(b)){l=b.match(h);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",k=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||k[f]("$"+b+"Controller");if(!e&&!g)throw ka("ctreq",b,a);return e||null}x(b)&&(e=[],r(b,function(b){e.push(K(a,b,c,d))}));return e}function J(a,c,f,g,h){function k(a,b,c){var d;
Ta(a)||(c=b,b=a,a=u);ya&&(d=L);c||(c=ya?W.parent():W);return h(a,b,d,c,Xb)}var p,w,t,v,L,db,W,S;d===f?(S=e,W=e.$$element):(W=D(f),S=new V(W,e));I&&(v=c.$new(!0));h&&(db=k,db.$$boundTransclude=h);E&&(da={},L={},r(E,function(a){var b={$scope:a===I||a.$$isolateScope?v:c,$element:W,$attrs:S,$transclude:db};t=a.controller;"@"==t&&(t=S[a.name]);b=n(t,b,!0,a.controllerAs);L[a.name]=b;ya||W.data("$"+a.name+"Controller",b.instance);da[a.name]=b}));if(I){F.$$addScopeInfo(W,v,!0,!(aa&&(aa===I||aa===I.$$originalDirective)));
F.$$addScopeClass(W,!0);g=da&&da[I.name];var ba=v;g&&g.identifier&&!0===I.bindToController&&(ba=g.instance);r(v.$$isolateBindings=I.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":S.$observe(e,function(a){ba[d]=a});S.$$observers[e].$$scope=c;S[e]&&(ba[d]=b(S[e])(c));break;case "=":if(f&&!S[e])break;h=N(S[e]);l=h.literal?ga:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ba[d]=h(c);throw ka("nonassign",S[e],I.name);};g=ba[d]=h(c);f=function(a){l(a,
ba[d])||(l(a,g)?k(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(S[e],f):c.$watch(N(S[e],f),null,h.literal);v.$on("$destroy",f);break;case "&":h=N(S[e]),ba[d]=function(a){return h(c,a)}}})}da&&(r(da,function(a){a()}),da=null);g=0;for(p=l.length;g<p;g++)w=l[g],Z(w,w.isolateScope?v:c,W,S,w.require&&K(w.directiveName,w.require,W,L),db);var Xb=c;I&&(I.template||null===I.templateUrl)&&(Xb=v);a&&a(Xb,f.childNodes,u,h);for(g=s.length-1;0<=g;g--)w=s[g],Z(w,w.isolateScope?
v:c,W,S,w.require&&K(w.directiveName,w.require,W,L),db)}p=p||{};for(var v=-Number.MAX_VALUE,L,E=p.controllerDirectives,da,I=p.newIsolateScopeDirective,aa=p.templateDirective,ea=p.nonTlbTranscludeDirective,H=!1,G=!1,ya=p.hasElementTranscludeDirective,T=e.$$element=D(d),M,fa,A,Ha=f,Q,xa=0,R=a.length;xa<R;xa++){M=a[xa];var Cb=M.$$start,$=M.$$end;Cb&&(T=ba(d,Cb,$));A=u;if(v>M.priority)break;if(A=M.scope)M.templateUrl||(O(A)?(Aa("new/isolated scope",I||L,M,T),I=M):Aa("new/isolated scope",I,M,T)),L=L||
M;fa=M.name;!M.templateUrl&&M.controller&&(A=M.controller,E=E||{},Aa("'"+fa+"' controller",E[fa],M,T),E[fa]=M);if(A=M.transclude)H=!0,M.$$tlb||(Aa("transclusion",ea,M,T),ea=M),"element"==A?(ya=!0,v=M.priority,A=T,T=e.$$element=D(X.createComment(" "+fa+": "+e[fa]+" ")),d=T[0],Db(g,Ya.call(A,0),d),Ha=F(A,f,v,k&&k.name,{nonTlbTranscludeDirective:ea})):(A=D(Ub(d)).contents(),T.empty(),Ha=F(A,f));if(M.template)if(G=!0,Aa("template",aa,M,T),aa=M,A=B(M.template)?M.template(T,e):M.template,A=Pc(A),M.replace){k=
M;A=Sb.test(A)?Qc(U(M.templateNamespace,P(A))):[];d=A[0];if(1!=A.length||d.nodeType!==na)throw ka("tplrt",fa,"");Db(g,T,d);R={$attr:{}};A=W(d,[],R);var pf=a.splice(xa+1,a.length-(xa+1));I&&y(A);a=a.concat(A).concat(pf);C(e,R);R=a.length}else T.html(A);if(M.templateUrl)G=!0,Aa("template",aa,M,T),aa=M,M.replace&&(k=M),J=of(a.splice(xa,a.length-xa),T,e,g,H&&Ha,l,s,{controllerDirectives:E,newIsolateScopeDirective:I,templateDirective:aa,nonTlbTranscludeDirective:ea}),R=a.length;else if(M.compile)try{Q=
M.compile(T,e,Ha),B(Q)?w(null,Q,Cb,$):Q&&w(Q.pre,Q.post,Cb,$)}catch(ca){c(ca,va(T))}M.terminal&&(J.terminal=!0,v=Math.max(v,M.priority))}J.scope=L&&!0===L.scope;J.transcludeOnThisElement=H;J.elementTranscludeOnThisElement=ya;J.templateOnThisElement=G;J.transclude=Ha;p.hasElementTranscludeDirective=ya;return J}function y(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=G(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function ea(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;
e=a.get(e+"Directive");for(var s=0,n=e.length;s<n;s++)try{if(q=e[s],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)){if(k){var w={$$start:k,$$end:l};q=G(Object.create(q),w)}b.push(q);h=q}}catch(N){c(N)}}return h}function C(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(L(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+
b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,h){var k=[],l,q,p=b[0],n=a.shift(),w=G({},n,{templateUrl:null,transclude:null,replace:null,$$originalDirective:n}),N=B(n.templateUrl)?n.templateUrl(b,c):n.templateUrl,t=n.templateNamespace;b.empty();s(K.getTrustedResourceUrl(N)).then(function(s){var K,v;s=Pc(s);if(n.replace){s=Sb.test(s)?Qc(U(t,P(s))):[];K=s[0];if(1!=s.length||K.nodeType!==na)throw ka("tplrt",n.name,N);s={$attr:{}};
Db(d,b,K);var J=W(K,[],s);O(n.scope)&&y(J);a=J.concat(a);C(c,s)}else K=p,b.html(s);a.unshift(w);l=aa(a,K,c,e,b,n,f,g,h);r(d,function(a,c){a==K&&(d[c]=b[0])});for(q=da(b[0].childNodes,e);k.length;){s=k.shift();v=k.shift();var E=k.shift(),F=k.shift(),J=b[0];if(!s.$$destroyed){if(v!==p){var S=v.className;h.hasElementTranscludeDirective&&n.replace||(J=Ub(K));Db(E,D(v),J);L(D(J),S)}v=l.transcludeOnThisElement?I(s,l.transclude,F):F;l(q,s,J,d,v)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?
k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=I(b,l.transclude,e)),l(q,b,c,d,a)))}}function A(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Aa(a,b,c,d){if(b)throw ka("multidir",b.name,c.name,a,va(d));}function T(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&F.$$addBindingClass(a);return function(a,c){var e=c.parent();b||F.$$addBindingClass(e);F.$$addBindingInfo(e,d.expressions);a.$watch(d,
function(a){c[0].nodeValue=a})}}})}function U(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function xa(a,b){if("srcdoc"==b)return K.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return K.RESOURCE_URL}function R(a,c,d,e,f){var h=b(d,!0);if(h){if("multiple"===e&&"select"===ua(a))throw ka("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(c,
d,l){d=l.$$observers||(l.$$observers={});if(k.test(e))throw ka("nodomevents");l[e]&&(h=b(l[e],!0,xa(a,e),g[e]||f))&&(l[e]=h(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(h,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)}))}}}})}}function Db(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=
c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());ra?(Qb=!0,ra.cleanData([d])):delete D.cache[d[D.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return G(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}var V=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
{};this.$$element=a};V.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&E.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&E.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Rc(a,b);c&&c.length&&E.addClass(this.$$element,c);(c=Rc(b,a))&&c.length&&E.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Kc(f,a),h=hf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
e=Pb(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=J(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=P(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+J(P(h[q]),!0),g=g+(" "+P(h[q+1]));h=P(h[2*l]).split(/\s/);g+=J(P(h[0]),!0);2===h.length&&(g+=" "+P(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&
r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ia()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Va(e,b)}}};var ya=b.startSymbol(),fa=b.endSymbol(),Pc="{{"==ya||"}}"==fa?oa:function(a){return a.replace(/\{\{/g,ya).replace(/}}/g,fa)},Ha=/^ngAttr[A-Z]/;F.$$addBindingInfo=l?function(a,b){var c=a.data("$binding")||[];x(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:H;
F.$$addBindingClass=l?function(a){L(a,"ng-binding")}:H;F.$$addScopeInfo=l?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:H;F.$$addScopeClass=l?function(a,b){L(a,b?"ng-isolate-scope":"ng-scope")}:H;return F}]}function wa(b){return bb(b.replace(qf,""))}function Rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Qc(b){b=D(b);var a=b.length;
if(1>=a)return b;for(;a--;)8===b[a].nodeType&&rf.call(b,a,1);return b}function De(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,"controller");O(a)?G(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!O(a.$scope))throw A("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,k,l){var m,p,q;k=!0===k;l&&z(l)&&(q=l);z(g)&&(l=g.match(c),p=l[1],q=q||l[3],g=b.hasOwnProperty(p)?b[p]:uc(h.$scope,p,
!0)||(a?uc(e,p,!0):u),pb(g,p,!0));if(k)return k=(x(g)?g[g.length-1]:g).prototype,m=Object.create(k),q&&f(h,q,m,p||g.name),G(function(){d.invoke(g,m,h,p);return m},{instance:m,identifier:q});m=d.instantiate(g,h,p);q&&f(h,q,m,p||g.name);return m}}]}function Ee(){this.$get=["$window",function(b){return D(b.document)}]}function Fe(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(z(b)){b=b.replace(sf,"");var c=a("Content-Type");if(c&&0===c.indexOf(Sc)&&
b.trim()||tf.test(b)&&uf.test(b))b=oc(b)}return b}function Tc(b){var a=ia(),c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=Q(P(b.substr(0,e)));d=P(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Uc(b){var a=O(b)?b:u;return function(c){a||(a=Tc(b));return c?(c=a[Q(c)],void 0===c&&(c=null),c):a}}function Vc(b,a,c){if(B(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Ie(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return O(a)&&
"[object File]"!==Ja.call(a)&&"[object Blob]"!==Ja.call(a)?Za(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(Zb),put:qa(Zb),patch:qa(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,k){function l(a){function c(a){var b=G({},a);b.data=a.data?Vc(a.data,a.headers,d.transformResponse):
a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}var d={method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},e=function(a){var c=b.headers,d=G({},a.headers),e,f,c=G({},c.common,c[Q(a.method)]);a:for(e in c){a=Q(e);for(f in d)if(Q(f)===a)continue a;d[e]=c[e]}(function(a){var b;r(a,function(c,d){B(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(d);return d}(a);if(!ha.isObject(a))throw A("$http")("badreq",a);G(d,a);d.headers=e;d.method=rb(d.method);var f=[function(a){e=
a.headers;var d=Vc(a.data,Uc(e),a.transformRequest);C(d)&&r(e,function(a,b){"content-type"===Q(b)&&delete e[b]});C(a.withCredentials)&&!C(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,d,e).then(c,c)},u],g=h.when(d);for(r(t,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,
b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};return g}function m(c,f,k){function m(b,c,d,e){function f(){w(c,b,d,e)}F&&(200<=b&&300>b?F.put(I,[b,c,Tc(d),e]):F.remove(I));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function w(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?J.resolve:J.reject)({data:a,status:b,headers:Uc(d),config:c,statusText:e})}function t(a){w(a.data,a.status,qa(a.headers()),a.statusText)}function E(){var a=l.pendingRequests.indexOf(c);
-1!==a&&l.pendingRequests.splice(a,1)}var J=h.defer(),L=J.promise,F,r,I=p(c.url,c.params);l.pendingRequests.push(c);L.then(E,E);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(F=O(c.cache)?c.cache:O(b.cache)?b.cache:q);F&&(r=F.get(I),y(r)?r&&B(r.then)?r.then(t,t):x(r)?w(r[1],r[0],qa(r[2]),r[3]):w(r,200,{},"OK"):F.put(I,L));C(r)&&((r=Wc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:u)&&(k[c.xsrfHeaderName||b.xsrfHeaderName]=r),d(c.method,I,f,m,k,c.timeout,c.withCredentials,
c.responseType));return L}function p(a,b){if(!b)return a;var c=[];Cd(b,function(a,b){null===a||C(a)||(x(a)||(a=[a]),r(a,function(a){O(a)&&(a=pa(a)?a.toISOString():Za(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),t=[];r(c,function(a){t.unshift(z(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){r(arguments,function(a){l[a]=function(b,c){return l(G(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,
function(a){l[a]=function(b,c,d){return l(G(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");l.defaults=b;return l}]}function vf(){return new U.XMLHttpRequest}function Je(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);
e.body.removeChild(f);f=null;var g=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,p,q,t){function s(){v&&v();w&&w.abort()}function N(a,d,e,f,g){E!==u&&c.cancel(E);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(H)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==Q(e)){var n="_"+(d.counter++).toString(36);
d[n]=function(a){d[n].data=a;d[n].called=!0};var v=f(h.replace("JSON_CALLBACK","angular.callbacks."+n),n,function(a,b){N(l,a,d[n].data,"",b);d[n]=H})}else{var w=a();w.open(e,h,!0);r(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);N(l,c,b,w.getAllResponseHeaders(),a)};e=function(){N(l,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=
!0);if(t)try{w.responseType=t}catch(K){if("json"!==t)throw K;}w.send(k||null)}if(0<p)var E=c(s,p);else p&&B(p.then)&&p.then(s)}}function Ge(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,t,s){function N(c){return c.replace(l,b).replace(m,a)}function n(a){try{var b=a;a=t?e.getTrusted(t,b):e.valueOf(b);var c;if(s&&!y(a))c=
a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=Za(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}s=!!s;for(var v,w,K=0,E=[],J=[],L=f.length,F=[],r=[];K<L;)if(-1!=(v=f.indexOf(b,K))&&-1!=(w=f.indexOf(a,v+h)))K!==v&&F.push(N(f.substring(K,v))),K=f.substring(v+h,w),E.push(K),J.push(c(K,n)),K=w+k,r.push(F.length),F.push("");else{K!==L&&F.push(N(f.substring(K)));break}if(t&&1<F.length)throw $b("noconcat",f);if(!g||E.length){var I=function(a){for(var b=
0,c=E.length;b<c;b++){if(s&&C(a[b]))return;F[r[b]]=a[b]}return F.join("")};return G(function(a){var b=0,c=E.length,e=Array(c);try{for(;b<c;b++)e[b]=J[b](a);return I(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:E,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(J,function(c,e){var f=I(c);B(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,k=a.length,l=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=
function(){return a};return g}]}function He(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,k,l){var m=a.setInterval,p=a.clearInterval,q=0,t=y(l)&&!l,s=(t?d:c).defer(),N=s.promise;k=y(k)?k:0;N.then(null,null,e);N.$$intervalId=m(function(){s.notify(q++);0<k&&q>=k&&(s.resolve(q),p(N.$$intervalId),delete f[N.$$intervalId]);t||b.$apply()},h);f[N.$$intervalId]=s;return N}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),
delete f[b.$$intervalId],!0):!1};return e}]}function Pd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=nb(b[a]);return b.join("/")}function Xc(b,a){var c=Ba(b);a.$$protocol=
c.protocol;a.$$host=c.hostname;a.$$port=$(c.port)||xf[c.protocol]||null}function Yc(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=qc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Zc(b){return b.replace(/(#.+)|#$/,
"$1")}function bc(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);Xc(b,this);this.$$parse=function(a){var b=za(c,a);if(!z(b))throw Eb("ipthprfx",a,c);Yc(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=za(b,d))!==u?(g=f,g=(f=za(a,f))!==u?c+(za("/",f)||f):b+g):(f=za(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);Xc(b,this);this.$$parse=function(d){d=za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),C(e)&&(e=d)):e=this.$$html5?d:"";Yc(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?
"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function $c(b,a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):
"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Fb(b){return function(){return this[b]}}function ad(b,a){return function(c){if(C(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ke(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Ua(b)?(a.enabled=b,this):O(b)?(Ua(b.enabled)&&(a.enabled=b.enabled),Ua(b.requireBase)&&(a.requireBase=b.requireBase),Ua(b.rewriteLinks)&&
(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function h(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,l;l=d.baseHref();var m=d.url(),p;if(a.enabled){if(!l&&a.requireBase)throw Eb("nobase");p=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(l||"/");l=e.history?cc:$c}else p=Ga(m),
l=dc;k=new l(p,"#"+b);k.$$parseLinkUrl(m,m);k.$$state=d.state();var q=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var e=D(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),h=e.attr("href")||e.attr("xlink:href");O(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=Ba(g.animVal).href);q.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(g,h)||(b.preventDefault(),k.absUrl()!=
d.url()&&(c.$apply(),U.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=m&&d.url(k.absUrl(),!0);var t=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,g(d,!1,e)):(t=!1,h(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Zc(d.url()),b=Zc(k.absUrl()),f=d.state(),l=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;
if(t||q)t=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&g(b,l,f===k.$$state?null:k.$$state),h(a,f)))});k.$$replace=!1});return k}]}function Le(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||H;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function sa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===
b||"__proto__"===b)throw la("isecfld",a);return b}function ta(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===b)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ec(b){return b.constant}function Na(b,a,c,d){ta(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=sa(a.shift(),d);var g=ta(b[e],d);g||(g={},b[e]=g);b=g}e=sa(a.shift(),d);ta(b[e],d);return b[e]=c}function Oa(b){return"constructor"==
b}function bd(b,a,c,d,e,f,g){sa(b,f);sa(a,f);sa(c,f);sa(d,f);sa(e,f);var h=function(a){return ta(a,f)},k=g||Oa(b)?h:oa,l=g||Oa(a)?h:oa,m=g||Oa(c)?h:oa,p=g||Oa(d)?h:oa,q=g||Oa(e)?h:oa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=k(h[b]);if(!a)return h;if(null==h)return u;h=l(h[a]);if(!c)return h;if(null==h)return u;h=m(h[c]);if(!d)return h;if(null==h)return u;h=p(h[d]);return e?null==h?u:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,ta,a)}}function cd(b,
a,c){var d=a.expensiveChecks,e=d?zf:Af,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?bd(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=bd(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=u,a=f;while(e<h);return f};else{var k="";d&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var l=d;r(g,function(a,b){sa(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Oa(a))e="eso("+e+", fe)",l=!0;k+="if(s == null) return undefined;\ns="+e+";\n"});k+="return s;";a=new Function("s",
"l","eso","fe",k);a.toString=ca(k);l&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c){return Na(a,b,c,b)};return e[b]=f}function fc(b){return B(b.valueOf)?b.valueOf():Bf.call(b)}function Me(){var b=ia(),a=ia();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===
b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&fc(b));return h},b,c)}for(var l=[],q=0,p=e.length;q<p;q++)l[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&fc(k)}b&&(h=d(a));
return h},b,c)}function k(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;B(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;B(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){B(b)&&
b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==l&&c!==k?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},t={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var v,w,K;switch(typeof d){case "string":K=d=d.trim();var E=g?a:b;v=E[K];
v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?t:q,v=new gc(g),v=(new eb(v,c,g)).parse(d),v.constant?v.$$watchDelegate=m:w?(v=e(v),v.$$watchDelegate=v.literal?l:k):v.inputs&&(v.$$watchDelegate=h),E[K]=v);return p(v,f);case "function":return p(d,f);default:return p(H,f)}}}]}function Oe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return dd(function(a){b.$evalAsync(a)},a)}]}function Pe(){this.$get=["$browser","$exceptionHandler",function(b,a){return dd(function(a){b.defer(a)},
a)}]}function dd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{B(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),
a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=A("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};
g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(O(b)||B(b))d=b&&b.then;B(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=
a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(B(b)?b(c):c)}catch(h){a(h)}}})}};var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return k(e,!1)}return d&&B(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):
k(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!B(a))throw h("norslvr",a);if(!(this instanceof t))return new t(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=m;p.all=function(a){var b=new g,c=0,d=x(a)?[]:{};r(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||
b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Ye(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Ne(){var b=10,
a=A("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function k(){this.$id=++kb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function l(b){if(s.$$phase)throw a("inprog",s.$$phase);s.$$phase=b}function m(a,
b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function q(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=null}function t(){null===d&&(d=h.defer(function(){s.$apply(q)}))}k.prototype={constructor:k,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new k,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners=
{};this.$$listenerCount={};this.$id=++kb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;B(b)||(h.fn=H);f||(f=this.$$watchers=[]);f.unshift(h);
return function(){Va(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,
b){function c(a){e=a;var b,d,g,h;if(!C(e)){if(O(e))if(Ra(e))for(f!==p&&(f=p,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==m&&(f=m={},t=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)e.hasOwnProperty(b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,q=g(a,c),p=[],m=
{},n=!0,t=0;return this.$watch(q,function(){n?(n=!1,b(e,e,d)):b(e,h,d);if(k)if(O(e))if(Ra(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)rc.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,k,m,t,v,r=b,I,u=[],y,S;l("$digest");h.$$checkUrlChange();this===s&&null!==d&&(h.defer.cancel(d),q());c=null;do{v=!1;for(I=this;N.length;){try{S=N.shift(),S.scope.$eval(S.expression)}catch(A){f(A)}c=null}a:do{if(m=I.$$watchers)for(t=m.length;t--;)try{if(e=m[t])if((g=
e.get(I))!==(k=e.last)&&!(e.eq?ga(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))v=!0,c=e,e.last=e.eq?Da(g,null):g,e.fn(g,k===p?g:k,I),5>r&&(y=4-r,u[y]||(u[y]=[]),u[y].push({msg:B(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:k}));else if(e===c){v=!1;break a}}catch(D){f(D)}if(!(m=I.$$childHead||I!==this&&I.$$nextSibling))for(;I!==this&&!(m=I.$$nextSibling);)I=I.$parent}while(I=m);if((v||N.length)&&!r--)throw s.$$phase=null,a("infdig",b,u);}while(v||N.length);
for(s.$$phase=null;n.length;)try{n.shift()()}catch(ea){f(ea)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==s){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=H;this.$on=this.$watch=this.$watchGroup=function(){return H};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){s.$$phase||N.length||h.defer(function(){N.length&&s.$digest()});N.push({scope:this,expression:a})},$$postDigest:function(a){n.push(a)},$apply:function(a){try{return l("$apply"),
this.$eval(a)}catch(b){f(b)}finally{s.$$phase=null;try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);t()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,
stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=Xa([h],arguments,1),l,q;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(q=d.length;l<q;l++)if(d[l])try{d[l].apply(null,k)}catch(m){f(m)}else d.splice(l,1),l--,q--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;
for(var g=Xa([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var s=new k,N=s.$$asyncQueue=[],n=s.$$postDigestQueue=[],v=s.$$applyAsyncQueue=[];return s}]}function Qd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Cf(b){if("self"===b)return b;if(z(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=ed(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(lb(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function fd(b){var a=
[];y(b)&&r(b,function(b){a.push(Cf(b))});return a}function Re(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=fd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=fd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Wc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===
e||e===u||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=Ba(e.toString()),p,q,t=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){t=!0;break}if(t)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){t=!1;break}if(t)return e;throw Ca("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Qe(){var b=!0;this.enabled=function(a){arguments.length&&
(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Pa)throw Ca("iequirks");var d=qa(ma);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=oa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(ma,function(a,b){var c=Q(b);d[bb("parse_as_"+c)]=function(b){return e(a,
b)};d[bb("get_trusted_"+c)]=function(b){return f(a,b)};d[bb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Se(){this.$get=["$window","$document",function(b,a){var c={},d=$((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var p in k)if(l=h.exec(p)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");
l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!d||l&&m||(l=z(f.body.style.webkitTransition),m=z(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Pa)return!1;if(C(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:$a(),vendorPrefix:g,transitions:l,animations:m,android:d}}]}function Ue(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;
var g=a.defaults&&a.defaults.transformResponse;x(g)?g=g.filter(function(a){return a!==Yb}):g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).then(function(a){d.totalPendingRequests--;return a.data},function(a){d.totalPendingRequests--;if(!f)throw ka("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Ve(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=
ha.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+ed(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function We(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,k,l){var m=y(l)&&!l,p=(m?d:c).defer(),q=p.promise;k=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},k);q.$$timeoutId=k;g[k]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Pa&&(Z.setAttribute("href",b),b=Z.href);
Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Wc(b){b=z(b)?Ba(b):b;return b.protocol===gd.protocol&&b.host===gd.host}function Xe(){this.$get=ca(U)}function Cc(b){function a(c,d){if(O(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+
"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",hd);a("date",id);a("filter",Df);a("json",Ef);a("limitTo",Ff);a("lowercase",Gf);a("number",jd);a("orderBy",kd);a("uppercase",Hf)}function Df(){return function(b,a,c){if(!x(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=If(a,c,d);break;default:return b}return b.filter(a)}}function If(b,a,c){!0===a?a=ga:B(a)||
(a=function(a,b){if(O(a)||O(b))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(d){return fb(d,b,a,c)}}function fb(b,a,c,d){var e=typeof b,f=typeof a;if("string"===f&&"!"===a.charAt(0))return!fb(b,a.substring(1),c,d);if("array"===e)return b.some(function(b){return fb(b,a,c,d)});switch(e){case "object":var g;if(d){for(g in b)if("$"!==g.charAt(0)&&fb(b[g],a,c))return!0;return!1}if("object"===f){for(g in a)if(e=a[g],!B(e)&&(f="$"===g,!fb(f?b:b[g],e,c,f)))return!1;return!0}return c(b,
a);case "function":return!1;default:return c(b,a)}}function hd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){C(d)&&(d=a.CURRENCY_SYM);C(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:ld(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:ld(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function ld(b,a,c,d,e){if(!isFinite(b)||O(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],l=!1;if(-1!==g.indexOf("e")){var m=
g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,l=!0)}if(l)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(md)[1]||"").length;C(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(md),l=g[0],g=g[1]||"",p=0,q=a.lgSize,t=a.gSize;if(l.length>=q+t)for(p=l.length-q,m=0;m<p;m++)0===(p-m)%t&&0!==m&&(h+=c),h+=l.charAt(m);for(m=p;m<l.length;m++)0===(l.length-m)%q&&0!==m&&(h+=c),h+=l.charAt(m);for(;g.length<
e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);k.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return k.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function V(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function nd(b){var a=(new Date(b,0,1)).getDay();
return new Date(b,0,(4>=a?5:12)-a)}function od(b){return function(a){var c=nd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function id(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+
(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],k,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;z(c)&&(c=Jf.test(c)?$(c):a(c));Y(c)&&(c=new Date(c));if(!pa(c))return c;for(;e;)(l=Kf.exec(e))?(h=Xa(h,l,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){k=Lf[a];g+=k?k(c,b.DATETIME_FORMATS):
a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ef(){return function(b,a){C(a)&&(a=2);return Za(b,a)}}function Ff(){return function(b,a){Y(b)&&(b=b.toString());if(!x(b)&&!z(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):$(a);if(z(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function kd(b){return function(a,c,d){function e(a,b){return b?
function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c===d&&"object"===c&&(c=typeof(a.valueOf?a=a.valueOf():a),d=typeof(b.valueOf?b=b.valueOf():b),c===d&&"object"===c&&(c=typeof(a.toString?a=a.toString():a),d=typeof(b.toString?b=b.toString():b),c===d&&a===b||"object"===c))?0:c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ra(a))return a;c=x(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||oa;if(z(a)){if("+"==a.charAt(0)||
"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var l=d();return e(function(a,b){return f(a[l],b[l])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});return Ya.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){B(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function pd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||
Ib;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});Va(g,a)};qd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Va(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Qa);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Qa,Jb+" ng-submitted");
f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function gb(b,a,c,d,e,f){var g=Q(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;k()})}var k=function(b){l&&(f.defer.cancel(l),
l=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=P(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",k);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?
"":d.$viewValue)}}function Kb(b,a){return function(c,d){var e,f;if(pa(c))return c;if(z(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Mf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,
f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function hb(b,a,c,d){return function(e,f,g,h,k,l,m){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?pa(a)?a:c(a):u}rd(e,f,g,h);gb(e,f,g,h,k,l);var t=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===t&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});h.$formatters.push(function(a){if(a&&!pa(a))throw Lb("datefmt",a);if(p(a)){if((s=
a)&&"UTC"===t){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return m("date")(a,d,t)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||C(r)||c(a)>=r};g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var n;h.$validators.max=function(a){return!p(a)||C(n)||c(a)<=n};g.$observe("max",function(a){n=q(a);h.$validate()})}}}function rd(b,a,c,d){(d.$$hasNativeValidators=O(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||
{};return c.badInput&&!c.typeMismatch?u:b})}function sd(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw A("ngModel")("constexpr",c,d);return b(a)}return e}function qd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Pb(b,"-"):"";a(ib+b,!0===c);a(td+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,k=b.parentForm,l=b.$animate;f[td]=!(f[ib]=e.hasClass(ib));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,
b,f)):(d.$pending&&h(d.$pending,b,f),ud(d.$pending)&&(d.$pending=u));Ua(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(vd,!0),d.$valid=d.$invalid=u,c("",null)):(a(vd,!1),d.$valid=ud(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);k.$setValidity(b,e,d)}}function ud(b){if(b)for(var a in b)return!1;return!0}function ic(b,a){b="ngClass"+b;return["$animate",
function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!x(a)){if(z(a))return a.split(" ");if(O(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===
a||f.$index%2===a){var l=e(b||[]);if(!m){var t=k(l,1);h.$addClass(t)}else if(!ga(b,m)){var s=e(m),t=d(l,s),l=d(s,l),t=k(t,1),l=k(l,-1);t&&t.length&&c.addClass(g,t);l&&l.length&&c.removeClass(g,l)}}m=qa(b)}var m;f.$watch(h[b],l,!0);h.$observe("class",function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var Nf=/^\/(.+)\/([a-z]*)$/,Q=function(b){return z(b)?b.toLowerCase():
b},rc=Object.prototype.hasOwnProperty,rb=function(b){return z(b)?b.toUpperCase():b},Pa,D,ra,Ya=[].slice,rf=[].splice,Of=[].push,Ja=Object.prototype.toString,Wa=A("ng"),ha=U.angular||(U.angular={}),ab,kb=0;Pa=X.documentMode;H.$inject=[];oa.$inject=[];var x=Array.isArray,P=function(b){return z(b)?b.trim():b},ed=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},$a=function(){if(y($a.isActive_))return $a.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return $a.isActive_=b},ob=["ng-","data-ng-","ng:","x-ng-"],Kd=/[A-Z]/g,tc=!1,Qb,na=1,mb=3,Od={full:"1.3.6",major:1,minor:3,dot:6,codeName:"robofunky-danceblaster"};R.expando="ng339";var wb=R.cache={},ff=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var af=/([\:\-\_]+(.))/g,bf=/^moz([A-Z])/,Pf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=A("jqLite"),ef=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,cf=/<([\w:]+)/,df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(U).on("load",a))},
toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:Of,sort:[].sort,splice:[].splice},Bb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Bb[Q(b)]=b});var Lc={};r("input select option textarea button form details".split(" "),function(b){Lc[b]=!0});var Mc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};
r({data:Vb,removeData:ub},function(b,a){R[a]=b});r({data:Vb,inheritedData:Ab,scope:function(b){return D.data(b,"$scope")||Ab(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:Hc,injector:function(b){return Ab(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:xb,css:function(b,a,c){a=bb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(Bb[d])if(y(c))c?
(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||H).specified?d:u;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(C(b)){var d=a.nodeType;return d===na||d===mb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(C(a)){if(b.multiple&&"select"===ua(b)){var c=[];r(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(C(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Ic},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Ic&&(2==b.length&&b!==xb&&b!==Hc?a:d)===u){if(O(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});
r({removeData:ub,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Dc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=jf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],k=g.length;k--;){d=g[k];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Pf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),l=f[d]);l.push(e)}}},off:Gc,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,
d)},replaceWith:function(a,c){var d,e=a.parentNode;tb(a);r(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;r(new R(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=D(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Jc,detach:function(a){Jc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:zb,removeClass:yb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;C(f)&&(f=!xb(a,c));(f?zb:yb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:H,type:g,target:a},c.type&&(e=G(e,
c)),c=qa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,k=this.length;h<k;h++)C(g)?(g=a(this[h],c,e,f),y(g)&&(g=D(g))):Fc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});cb.prototype={put:function(a,c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];
return c}};var Oc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,lf=/,/,mf=/^\s*(_?)(\S+?)\1\s*$/,Nc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=A("$injector");Ob.$$annotate=Wb;var Qf=A("$animate"),Ae=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Qf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};
this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ia();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function k(){m||
(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function l(a,c){if(ha.isObject(c)){var d=G(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){l(a,{from:c,to:d});return k()},enter:function(a,c,d,e){l(a,e);d?d.after(a):c.prepend(a);return k()},leave:function(a,c){a.remove();return k()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=D(a);c=z(c)?c:x(c)?c.join(" "):"";
r(a,function(a){zb(a,c)});l(a,d);return k()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=D(a);c=z(c)?c:x(c)?c.join(" "):"";r(a,function(a){yb(a,c)});l(a,d);return k()},setClass:function(a,c,d,e){var k=this,l=!1;a=D(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ha.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=x(c)?c:c.split(" ");d=x(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=
a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);l(a,e);return k()},enabled:H,cancel:H}}]}],ka=A("$compile");vc.$inject=["$provide","$$sanitizeUriProvider"];var qf=/^((?:x|data)[\:\-_])/i,Sc="application/json",Zb={"Content-Type":Sc+";charset=utf-8"},
tf=/^\s*(\[|\{[^\{])/,uf=/[\}\]]\s*$/,sf=/^\)\]\}',?\n/,$b=A("$interpolate"),Rf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Eb=A("$location"),Sf={$$html5:!1,$$replace:!1,absUrl:Fb("$$absUrl"),url:function(a){if(C(a))return this.$$url;var c=Rf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Fb("$$protocol"),host:Fb("$$host"),port:Fb("$$port"),path:ad("$$path",function(a){a=null!==a?
a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(z(a)||Y(a))a=a.toString(),this.$$search=qc(a);else if(O(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Eb("isrcharg");break;default:C(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:ad("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([$c,dc,cc],function(a){a.prototype=Object.create(Sf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Eb("nostate");this.$$state=C(c)?null:c;return this}});var la=A("$parse"),Tf=Function.prototype.call,Uf=Function.prototype.apply,Vf=Function.prototype.bind,Mb=ia();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;Mb[c]=a});Mb["this"]=
function(a){return a};Mb["this"].sharedGetter=!0;var jb=G(ia(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,
c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Wf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=
[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=jb[c],f=jb[d];jb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=
a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=
this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Wf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var eb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};eb.ZERO=G(function(){return 0},
{sharedGetter:!0,constant:!0});eb.prototype={constructor:eb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier?a=this.identifier():this.peek().constant?a=
this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,
e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=jb[a];return G(function(a,f){return d(a,
f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=jb[c];return G(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return Mb[a]||cd(a,this.options,this.text)},constant:function(){var a=this.consume().value;return G(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=
[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return G(function(f,h){var k=a(f,h);if(e){e[0]=
k;for(k=d.length;k--;)e[k+1]=d[k](f,h);return c.apply(u,e)}return c(k)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),G(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&
(c=this.assignment(),this.consume(":"))){var d=this.assignment();return G(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=",
"===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?
this.primary():(a=this.expect("-"))?this.binaryFn(eb.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.consume().text,e=cd(d,this.options,c);return G(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return Na(h,d,g,c)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return G(function(e,f){var g=a(e,f),h=d(e,f);sa(h,c);return g?ta(g[h],
c):u},{assign:function(e,f,g){var h=sa(d(e,g),c);(g=ta(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var k=c?c(g,h):y(c)?u:g,l=a(g,h,k)||H;if(f)for(var m=d.length;m--;)f[m]=ta(d[m](g,h),e);ta(k,e);if(l){if(l.constructor===l)throw la("isecfn",e);if(l===Tf||l===Uf||l===Vf)throw la("isecff",e);}k=l.apply?l.apply(k,
f):l(f[0],f[1],f[2],f[3],f[4]);return ta(k,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return G(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):
this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return G(function(d,f){for(var g={},h=0,k=c.length;h<k;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Af=ia(),zf=ia(),Bf=Object.prototype.valueOf,Ca=A("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ka=A("$compile"),Z=X.createElement("a"),gd=Ba(U.location.href);Cc.$inject=["$provide"];hd.$inject=["$locale"];jd.$inject=
["$locale"];var md=".",Lf={yyyy:V("FullYear",4),yy:V("FullYear",2,0,!0),y:V("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:V("Month",2,1),M:V("Month",1,1),dd:V("Date",2),d:V("Date",1),HH:V("Hours",2),H:V("Hours",1),hh:V("Hours",2,-12),h:V("Hours",1,-12),mm:V("Minutes",2),m:V("Minutes",1),ss:V("Seconds",2),s:V("Seconds",1),sss:V("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=
a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:od(2),w:od(1)},Kf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Jf=/^\-?\d+$/;id.$inject=["$locale"];var Gf=ca(Q),Hf=ca(rb);kd.$inject=["$parse"];var Rd=ca({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ja.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),sb=
{};r(Bb,function(a,c){if("multiple"!=a){var d=wa("ng-"+c);sb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Mc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Nf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=wa("ng-"+a);sb[c]=function(){return{priority:99,
link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ja.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Pa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:H,$$renameControl:function(a,c){a.$name=c},$removeControl:H,$setValidity:H,$setDirty:H,$setPristine:H,$setSubmitted:H};pd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var wd=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:pd,compile:function(a){a.addClass(Qa).addClass(ib);return{pre:function(a,d,g,h){if(!("action"in g)){var k=function(c){a.$apply(function(){h.$commitViewValue();h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",k,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",k,!1)},0,!1)})}var l=h.$$parentForm,m=h.$name;m&&(Na(a,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(Na(a,m,u,m),m=c,Na(a,m,h,m),l.$$renameControl(h,
m))}));d.on("$destroy",function(){l.$removeControl(h);m&&Na(a,m,u,m);G(h,Ib)})}}}}}]},Sd=wd(),ee=wd(!0),Mf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Xf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Yf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Zf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,xd=/^(\d{4})-(\d{2})-(\d{2})$/,yd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
jc=/^(\d{4})-W(\d\d)$/,zd=/^(\d{4})-(\d\d)$/,Ad=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,$f=/(\s+|^)default(\s+|$)/,Lb=new A("ngModel"),Bd={text:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e)},date:hb("date",xd,Kb(xd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":hb("datetimelocal",yd,Kb(yd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:hb("time",Ad,Kb(Ad,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:hb("week",jc,function(a,c){if(pa(a))return a;if(z(a)){jc.lastIndex=0;var d=
jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,k=0,l=nd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),k=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,h,k)}}return NaN},"yyyy-Www"),month:hb("month",zd,Kb(zd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){rd(a,c,d,e);gb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Zf.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw Lb("numfmt",
a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||C(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:u;e.$validate()})}if(d.max||d.ngMax){var k;e.$validators.max=function(a){return e.$isEmpty(a)||C(k)||a<=k};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));k=Y(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,
c){var d=a||c;return e.$isEmpty(d)||Xf.test(d)}},email:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Yf.test(d)}},radio:function(a,c,d,e){C(d.name)&&c.attr("name",++kb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,k){var l=sd(k,a,"ngTrueValue",d.ngTrueValue,!0),
m=sd(k,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ga(a,l)});e.$parsers.push(function(a){return a?l:m})},hidden:H,button:H,submit:H,reset:H,file:H},wc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,k){k[0]&&(Bd[Q(h.type)]||Bd.text)(f,g,h,k[0],
c,a,d,e)}}}}],ib="ng-valid",td="ng-invalid",Qa="ng-pristine",Jb="ng-dirty",vd="ng-pending",ag=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,k,l,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=
!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,t=p,s=q,N=null,n=this;this.$$setOptions=function(a){if((n.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);B(d)&&(d=c(a));return d};s=function(a,c){B(p(a))?g(a,{$$$p:n.$modelValue}):q(a,n.$modelValue)}}else if(!p.assign)throw Lb("nonassign",d.ngModel,va(e));};this.$render=H;this.$isEmpty=function(a){return C(a)||""===a||null===a||a!==
a};var v=e.inheritedData("$formController")||Ib,w=0;qd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Qa)};this.$setDirty=function(){n.$dirty=!0;n.$pristine=!1;g.removeClass(e,Qa);g.addClass(e,Jb);v.$setDirty()};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=
!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(N);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){if(!Y(n.$modelValue)||!isNaN(n.$modelValue)){var a=n.$$rawModelValue,c=n.$valid,d=n.$modelValue,e=n.$options&&n.$options.allowInvalid;n.$$runValidators(n.$error[n.$$parserName||"parse"]?!1:u,a,n.$$lastCommittedViewValue,function(f){e||c===f||(n.$modelValue=f?a:u,n.$modelValue!==d&&n.$$writeModelToScope())})}};this.$$runValidators=
function(a,c,d,e){function f(){var a=!0;r(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(r(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;r(n.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!B(k.then))throw Lb("$asyncValidators",k);h(g,u);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},H):k(!0)}function h(a,c){m===w&&n.$setValidity(a,c)}function k(a){m===w&&e(a)}w++;var m=w;(function(a){var c=
n.$$parserName||"parse";if(a===u)h(c,null);else if(h(c,a),!a)return r(n.$validators,function(a,c){h(c,null)}),r(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=n.$viewValue;h.cancel(N);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=a,n.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=n.$$lastCommittedViewValue,d=C(c)?u:!0;if(d)for(var e=
0;e<n.$parsers.length;e++)if(c=n.$parsers[e](c),C(c)){d=!1;break}Y(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=t(a));var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;n.$$rawModelValue=c;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,n.$$lastCommittedViewValue,function(a){g||(n.$modelValue=a?c:u,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,n.$modelValue);r(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(N);d?N=h(function(){n.$commitViewValue()},d):k.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==n.$modelValue){n.$modelValue=n.$$rawModelValue=c;for(var d=
n.$formatters,e=d.length,f=c;e--;)f=d[e](f);n.$viewValue!==f&&(n.$viewValue=n.$$lastCommittedViewValue=f,n.$render(),n.$$runValidators(u,c,f,H))}return c})}],te=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:ag,priority:1,compile:function(c){c.addClass(Qa).addClass("ng-untouched").addClass(ib);return{pre:function(a,c,f,g){var h=g[0],k=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);k.$addControl(h);f.$observe("name",function(a){h.$name!==a&&k.$$renameControl(h,
a)});a.$on("$destroy",function(){k.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],ve=ca({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},xc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){z(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw A("ngPattern")("noregexp",g,a,va(c));f=a||u;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||C(f)||f.test(a)}}}}},Ac=function(){return{restrict:"A",
require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=$(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=$(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},ue=function(){return{restrict:"A",priority:100,require:"ngModel",
link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?P(f):f;e.$parsers.push(function(a){if(!C(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?P(a):a)});return c}});e.$formatters.push(function(a){return x(a)?a.join(f):u});e.$isEmpty=function(a){return!a||!a.length}}}},bg=/^(true|false|\d+)$/,we=function(){return{restrict:"A",priority:100,compile:function(a,c){return bg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,
function(a){f.$set("value",a)})}}}},xe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=P(this.$options.updateOn.replace($f,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Xd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,
f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],Zd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],Yd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});
d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],$d=ic("",!0),be=ic("Odd",0),ae=ic("Even",1),ce=Ia({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),de=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Bc={},cg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=wa("ng-"+a);Bc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};cg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ge=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,l;c.$watch(e.ngIf,function(c){c?k||g(function(c,f){k=f;c[c.length++]=X.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=qb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],he=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ha.noop,compile:function(f,g){var h=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(f,g,q,r,s){var u=0,n,v,w,K=function(){v&&(v.remove(),v=null);n&&(n.$destroy(),
n=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(l)||l&&!f.$eval(l)||c()},q=++u;e?(a(e,!0).then(function(a){if(q===u){var c=f.$new();r.template=a;a=s(c,function(a){K();d.enter(a,null,g).then(h)});n=c;w=a;n.$emit("$includeContentLoaded",e);f.$eval(k)}},function(){q===u&&(K(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(K(),r.template=null)})}}}}],ye=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Ec(f.template,X).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ie=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),je=Ia({terminal:!0,priority:1E3}),ke=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function k(a){g.text(a||"")}var l=
h.count,m=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(m)||{},t={},m=c.startSymbol(),s=c.endSymbol(),u=m+l+"-"+p+s,n=ha.noop,v;r(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+Q(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){t[e]=c(a.replace(d,u))});f.$watch(l,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===v||d&&isNaN(v)||(n(),n=f.$watch(t[c],k),v=c)})}}}],le=["$parse","$animate",function(a,c){var d=A("ngRepeat"),e=function(a,c,d,e,l,m,p){a[d]=
e;l&&(a[l]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=X.createComment(" end ngRepeat: "+h+" "),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",h);var m=l[1],p=l[2],q=l[3],t=l[4],l=m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
if(!l)throw d("iidexp",m);var s=l[3]||l[1],y=l[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))throw d("badident",q);var n,v,w,A,E={$id:Ma};t?n=a(t):(w=function(a,c){return Ma(c)},A=function(a){return a});return function(a,f,g,l,m){n&&(v=function(c,d,e){y&&(E[y]=c);E[s]=d;E.$index=e;return n(a,E)});var t=ia();a.$watchCollection(p,function(g){var l,n,p=f[0],F,E=ia(),C,H,G,T,B,x,z;q&&(a[q]=g);if(Ra(g))B=g,n=v||
w;else{n=v||A;B=[];for(z in g)g.hasOwnProperty(z)&&"$"!=z.charAt(0)&&B.push(z);B.sort()}C=B.length;z=Array(C);for(l=0;l<C;l++)if(H=g===B?l:B[l],G=g[H],T=n(H,G,l),t[T])x=t[T],delete t[T],E[T]=x,z[l]=x;else{if(E[T])throw r(z,function(a){a&&a.scope&&(t[a.id]=a)}),d("dupes",h,T,G);z[l]={id:T,scope:u,clone:u};E[T]=!0}for(F in t){x=t[F];T=qb(x.clone);c.leave(T);if(T[0].parentNode)for(l=0,n=T.length;l<n;l++)T[l].$$NG_REMOVED=!0;x.scope.$destroy()}for(l=0;l<C;l++)if(H=g===B?l:B[l],G=g[H],x=z[l],x.scope){F=
p;do F=F.nextSibling;while(F&&F.$$NG_REMOVED);x.clone[0]!=F&&c.move(qb(x.clone),null,D(p));p=x.clone[x.clone.length-1];e(x.scope,l,s,G,y,H,C)}else m(function(a,d){x.scope=d;var f=k.cloneNode(!1);a[a.length++]=f;c.enter(a,null,D(p));p=f;x.clone=a;E[x.id]=x;e(x.scope,l,s,G,y,H,C)});t=E})}}}}],me=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],fe=["$animate",
function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ne=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),oe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],l=[],m=function(a,c){return function(){a.splice(c,
1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=qb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],pe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),qe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),se=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw A("ngTransclude")("orphan",va(c));f(function(a){c.empty();c.append(a)})}}),Td=["$templateCache",function(a){return{restrict:"E",
terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],dg=A("ngOptions"),re=ca({restrict:"A",terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:H};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,
c,d){var k=this,l={},m=e,p;k.databound=d.ngModel;k.init=function(a,c,d){m=a;p=d};k.addOption=function(c,d){La(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};k.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue===a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};k.hasOption=function(a){return l.hasOwnProperty(a)};
c.$on("$destroy",function(){k.renderUnknownOption=H})}],link:function(e,g,h,k){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(E.parent()&&E.remove(),c.val(a),""===a&&n.prop("selected",!0)):C(a)&&n?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){E.parent()&&E.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new cb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ga(e,
d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){U[B]=d;G&&(U[G]=c);return a(e,U)}function k(a){var c;if(t)if(L&&x(a)){c=new cb([]);for(var d=0;d<a.length;d++)c.put(h(L,null,a[d]),!0)}else c=new cb(a);else L&&(a=h(L,null,a));return function(d,e){var f;f=L?L:C?C:z;return t?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(n),
v=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function n(){v=!1;var a={"":[]},c=[""],d,l,p,s,u;p=g.$viewValue;s=O(e)||[];var C=G?Object.keys(s).sort():s,x,B,D,z,S={};u=k(p);var P=!1,V,X;Q={};for(z=0;D=C.length,z<D;z++){x=z;if(G&&(x=C[z],"$"===x.charAt(0)))continue;B=s[x];d=h(J,x,B)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=u(x,B);P=P||d;B=h(E,x,B);B=y(B)?B:"";X=L?L(e,U):G?C[z]:z;L&&(Q[X]=x);l.push({id:X,label:B,selected:d})}t||(A||null===p?a[""].unshift({id:"",label:"",selected:!P}):P||a[""].unshift({id:"?",
label:"",selected:!0}));x=0;for(C=c.length;x<C;x++){d=c[x];l=a[d];R.length<=x?(p={element:H.clone().attr("label",d),label:l.label},s=[p],R.push(s),f.append(p.element)):(s=R[x],p=s[0],p.label!=d&&p.element.attr("label",p.label=d));P=null;z=0;for(D=l.length;z<D;z++)d=l[z],(u=s[z+1])?(P=u.element,u.label!==d.label&&(m(S,u.label,!1),m(S,d.label,!0),P.text(u.label=d.label),P.prop("label",u.label)),u.id!==d.id&&P.val(u.id=d.id),P[0].selected!==d.selected&&(P.prop("selected",u.selected=d.selected),Pa&&P.prop("selected",
u.selected))):(""===d.id&&A?V=A:(V=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),s.push(u={element:V,label:d.label,id:d.id,selected:d.selected}),m(S,d.label,!0),P?P.after(V):p.element.append(V),P=V);for(z++;s.length>z;)d=s.pop(),m(S,d.label,!1),d.element.remove()}for(;R.length>x;){l=R.pop();for(z=1;z<l.length;++z)m(S,l[z].label,!1);l[0].element.remove()}r(S,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var p;if(!(p=s.match(d)))throw dg("iexp",
s,va(f));var E=c(p[2]||p[1]),B=p[4]||p[6],D=/ as /.test(p[0])&&p[1],C=D?c(D):null,G=p[5],J=c(p[3]||""),z=c(p[2]?p[1]:B),O=c(p[7]),L=p[8]?c(p[8]):null,Q={},R=[[{element:f,label:""}]],U={};A&&(a(A)(e),A.removeClass("ng-scope"),A.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=O(e)||[],c;if(t)c=[],r(f.val(),function(d){d=L?Q[d]:d;c.push("?"===d?u:""===d?null:h(C?C:z,d,a[d]))});else{var d=L?Q[f.val()]:f.val();c="?"===d?u:""===d?null:h(C?C:z,d,a[d])}g.$setViewValue(c);n()})});g.$render=
n;e.$watchCollection(O,l);e.$watchCollection(function(){var a=O(e),c;if(a&&x(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(E,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(E,d,a[d]));return c},l);t&&e.$watchCollection(function(){return g.$modelValue},l)}if(k[1]){var q=k[0];k=k[1];var t=h.multiple,s=h.ngOptions,A=!1,n,v=!1,w=D(X.createElement("option")),H=D(X.createElement("optgroup")),E=w.clone();h=0;for(var B=g.children(),G=B.length;h<G;h++)if(""===B[h].value){n=A=B.eq(h);
break}q.init(k,A,E);t&&(k.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,k):t?m(e,g,k):l(e,g,k,q)}}}}],Wd=["$interpolate",function(a){var c={addOption:H,removeOption:H};return{restrict:"E",priority:100,compile:function(d,e){if(C(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,
d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Vd=ca({restrict:"E",terminal:!1});U.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Ld(),Nd(ha),D(X).ready(function(){Hd(X,sc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map



/*-----------------------*/
/* lib/angular-route/angular-route.min.js*/
/*-----------------------*/
/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,d,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),f=r.current;m=y(b,function(b){g.enter(b,null,m||c).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=f.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,h,g){return{restrict:"ECA",priority:-400,link:function(a,c){var b=g.current,f=b.locals;c.html(f.$template);var y=d(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));y(a)}}}p=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,c){return d.extend(Object.create(a),
c)}function h(a,d){var b=d.caseInsensitiveMatch,f={originalPath:a,regexp:a},g=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;g.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=new RegExp("^"+a+"$",b?"i":"");return f}var g={};this.when=function(a,c){var b=d.copy(c);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&h(a,b));if(a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[f]=d.extend({redirectTo:a},h(f,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,c,b,f,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&d.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?c.path(t(e.redirectTo,e.params)).search(e.params).replace():c.url(e.redirectTo(e.pathParams,c.path(),c.search())).replace()),f.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,c;d.forEach(a,function(b,e){a[e]=d.isString(b)?h.get(b):h.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(c=e.templateUrl)&&(d.isFunction(c)&&(c=c(e.params)),c=x.getTrustedResourceUrl(c),d.isDefined(c)&&(e.loadedTemplateUrl=c,b=p(c)));d.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;d.forEach(g,function(f,g){var q;if(q=!b){var h=c.path();q=f.keys;var l={};if(f.regexp)if(h=f.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(f,{params:d.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),function(c){f.current.pathParams[c]||(b[c]=a[c])});a=d.extend({},this.current.params,a);c.path(t(this.current.$$route.originalPath,a));c.search(d.extend({},c.search(),b))}else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",
m);return s}]});var B=d.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map



/*-----------------------*/
/* lib/angular-animate/angular-animate.min.js*/
/*-----------------------*/
/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,C,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?C.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){C.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,C){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(X,C){function g(f){for(var n=0;n<f.length;n++){var g=f[n];if(1==g.nodeType)return g}}
function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,da=C.$$selectors,aa=f.isArray,ea=f.isString,ga=f.isObject,r={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,H,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function D(a){var c,b=N.defer();
b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function I(a){if(ga(a))return a.tempClasses&&ea(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],l=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===e?(b||"addClass"==c.event)&&
l.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+l.length&&[f.join(" "),l.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(da[""]));for(var d=0;d<a.length;d++){var f=a[d],k=da[f];k&&!b[f]&&(c.push(M.get(k)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,fn:b}),J.push({event:a,fn:c}),
!0}function k(c,l,w){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(l){(l[f]||t)();if(++m<E.length)break a;l=null}w()}};switch(c.event){case "setClass":l.push(c.fn(a,e,A,p,d));break;case "animate":l.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":l.push(c.fn(a,e||b,p,d));break;case "removeClass":l.push(c.fn(a,A||b,p,d));break;default:l.push(c.fn(a,p,d))}});l&&0===l.length&&w()}var l=a[0];if(l){d&&(d.to=d.to||{},d.from=d.from||{});var e,A;aa(b)&&(e=
b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var w="setClass"==c,E=w||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(x(p)){var ca=t,m=[],J=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&w&&(h(a,"addClass"),h(a,"removeClass"))});return{node:l,event:c,className:b,isClassBased:E,isSetClassOperation:w,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){ca=a;k(J,m,function(){ca=t;a()})},after:function(a){g=
a;k(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),ca(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function G(a,c,b,d,h,k,l,e){function A(e){var l="$animate:"+e;J&&J[l]&&0<J[l].length&&H(function(){b.triggerHandler(l,{event:a,className:c})})}function w(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,k())}function g(){if(!g.hasBeenRun){m&&m.applyStyles();g.hasBeenRun=!0;l&&l.tempClasses&&n(l.tempClasses,function(a){u.removeClass(b,
a)});var w=b.data("$$ngAnimateState");w&&(m&&m.isClassBased?B(b,c):(H(function(){var e=b.data("$$ngAnimateState")||{};fa==e.index&&B(b,c,a)}),b.data("$$ngAnimateState",w)));A("close");e()}}var m=U(b,a,c,l);if(!m)return p(),w(),E(),g(),t;a=m.event;c=m.className;var J=f.element._data(m.node),J=J&&J.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),w(),E(),g(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==q.event?
(s.push(q),B(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),B(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};B(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),w(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),B(a,"ng-leave"))});
u.addClass(b,"ng-animate");l&&l.tempClasses&&n(l.tempClasses,function(a){u.addClass(b,a)});var fa=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:fa,totalActive:s});w();m.before(function(e){var l=b.data("$$ngAnimateState");e=e||!l||!l.active[c]||m.isClassBased&&l.active[c].event!=a;p();!0===e?g():(E(),m.after(g))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),n(a,function(a){a=
f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function B(a,c){if(ba(a,y))r.disabled||(r.running=!1,r.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(r.disabled)return!0;if(ba(a,y))return r.running;var b,d,g;do{if(0===c.length)break;var k=ba(c,y),l=k?r:c.data("$$ngAnimateState")||
{};if(l.disabled)return!0;k&&(g=!0);!1!==b&&(k=c.data("$$ngAnimateChildren"),f.isDefined(k)&&(b=k));d=d||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",r);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){r.running=!1})}))}),K=0,V=C.classNameFilter(),x=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,c,b,d,h){d=d||"ng-inline-animate";
h=I(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return G("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return G("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=I(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return G("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,d){d=I(d);a=f.element(a);
c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return G("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=I(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,k=a.data("$$animateClasses"),l=!!k;k||(k={classes:{}});h=k.classes;c=aa(c)?c:c.split(" ");n(c,function(a){a&&a.length&&(h[a]=
!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(l)return d&&k.options&&(k.options=f.extend(k.options||{},d)),k.promise;a.data("$$animateClasses",k={classes:h,options:d});return k.promise=D(function(e){var l=a.parent(),b=g(a),c=b.parentNode;if(!c||c.$$NG_REMOVED||b.$$NG_REMOVED)e();else{b=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},d=S(a,b,c.active);return d?G("setClass",d,a,l,null,function(){d[0]&&O.$$addClassImmediately(a,
d[0]);d[1]&&O.$$removeClassImmediately(a,d[1])},b.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)B(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);C.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,C,M,Y){function y(){b||(b=Y(function(){c=[];b=null;x={}}))}function H(a,e){b&&b();c.push(e);b=Y(function(){n(c,
function(a){a()});c=[];b=null;x={}})}function P(a,e){var b=g(a);a=f.element(b);k.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(k);k=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?x[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);
0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(x[e]=b)}return b}function Q(a){var e=0;a=ea(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+"-"+g(e).getAttribute("class");var p=f+" "+c,h=x[p]?++x[p].total:
0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!x[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},k=Z(e,p);f=k.transitionDuration;k=k.animationDuration;if(b&&0===f&&0===k)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<k&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||[]});p=g(e);c&&(I(p,!0),d&&e.css(d));
b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,k);u.removeClass(e,t);z&&M.cancel(z);G(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-H,0)>=C&&b>=x&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var k="",t="";n(b.split(" "),function(a,
b){var e=(0<b?" ":"")+a;k+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*q,s.push(B+"animation-play-state"));r=Math.round(100*Math.max(r,y))/100}r||(u.addClass(e,k),a.blockTransition&&I(m,!1));var F=Z(e,a.cacheKey+" "+k),x=Math.max(F.transitionDuration,F.animationDuration);if(0===x)u.removeClass(e,k),G(e,b),c();else{!r&&
d&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),C=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var H=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+x)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&I(m,!1);0<F.animationDuration&&(m.style[K+"PlayState"]="");u.addClass(e,k);u.removeClass(e,t);d&&(0===
F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function I(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&G(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);G(b,c);d()}function U(a,b,c,d,f){var g=S(a,b,c,f.from);if(g){var h=g;H(b,function(){h=T(a,b,c,d,f.to)});
return function(a){(h||t)(a)}}y();d()}function G(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var B="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(B="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):(z="transition",$="transitionend");N.onanimationend===
W&&N.onwebkitanimationend!==W?(B="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var x={},a=0,c=[],b,d=null,h=0,k=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",b,c)},beforeSetClass:function(a,b,c,d,f){f=f||{};b=q(c,
"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return H(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return H(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return H(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",a,q(b,"-add"),c,d.to)},removeClass:function(a,
b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map



/*-----------------------*/
/* lib/angular-local-storage/angular-local-storage.min.js*/
/*-----------------------*/
/**
 * An Angular module that gives you access to the browsers local storage
 * @version v0.2.5 - 2016-02-23
 * @link https://github.com/grevory/angular-local-storage
 * @author grevory <greg@gregpike.ca>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(a,b){var c=b.isDefined,d=b.isUndefined,e=b.isNumber,f=b.isObject,g=b.isArray,h=b.extend,i=b.toJson;b.module("LocalStorageModule",[]).provider("localStorageService",function(){this.prefix="ls",this.storageType="localStorage",this.cookie={expiry:30,path:"/"},this.notify={setItem:!0,removeItem:!1},this.setPrefix=function(a){return this.prefix=a,this},this.setStorageType=function(a){return this.storageType=a,this},this.setStorageCookie=function(a,b){return this.cookie.expiry=a,this.cookie.path=b,this},this.setStorageCookieDomain=function(a){return this.cookie.domain=a,this},this.setNotify=function(a,b){return this.notify={setItem:a,removeItem:b},this},this.$get=["$rootScope","$window","$document","$parse",function(a,b,j,k){var l,m=this,n=m.prefix,o=m.cookie,p=m.notify,q=m.storageType;j?j[0]&&(j=j[0]):j=document,"."!==n.substr(-1)&&(n=n?n+".":"");var r=function(a){return n+a},s=function(){try{var c=q in b&&null!==b[q],d=r("__"+Math.round(1e7*Math.random()));return c&&(l=b[q],l.setItem(d,""),l.removeItem(d)),c}catch(e){return q="cookie",a.$broadcast("LocalStorageModule.notification.error",e.message),!1}}(),t=function(b,c){if(c=d(c)?null:i(c),!s||"cookie"===m.storageType)return s||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),p.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:"cookie"}),z(b,c);try{l&&l.setItem(r(b),c),p.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:m.storageType})}catch(e){return a.$broadcast("LocalStorageModule.notification.error",e.message),z(b,c)}return!0},u=function(b){if(!s||"cookie"===m.storageType)return s||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),A(b);var c=l?l.getItem(r(b)):null;if(!c||"null"===c)return null;try{return JSON.parse(c)}catch(d){return c}},v=function(){var b,c;for(b=0;b<arguments.length;b++)if(c=arguments[b],s&&"cookie"!==m.storageType)try{l.removeItem(r(c)),p.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:c,storageType:m.storageType})}catch(d){a.$broadcast("LocalStorageModule.notification.error",d.message),B(c)}else s||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),p.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:c,storageType:"cookie"}),B(c)},w=function(){if(!s)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),!1;var b=n.length,c=[];for(var d in l)if(d.substr(0,b)===n)try{c.push(d.substr(b))}catch(e){return a.$broadcast("LocalStorageModule.notification.error",e.Description),[]}return c},x=function(b){var c=n?new RegExp("^"+n):new RegExp,d=b?new RegExp(b):new RegExp;if(!s||"cookie"===m.storageType)return s||a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),C();var e=n.length;for(var f in l)if(c.test(f)&&d.test(f.substr(e)))try{v(f.substr(e))}catch(g){return a.$broadcast("LocalStorageModule.notification.error",g.message),C()}return!0},y=function(){try{return b.navigator.cookieEnabled||"cookie"in j&&(j.cookie.length>0||(j.cookie="test").indexOf.call(j.cookie,"test")>-1)}catch(c){return a.$broadcast("LocalStorageModule.notification.error",c.message),!1}}(),z=function(b,c,h){if(d(c))return!1;if((g(c)||f(c))&&(c=i(c)),!y)return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;try{var k="",l=new Date,m="";if(null===c?(l.setTime(l.getTime()+-864e5),k="; expires="+l.toGMTString(),c=""):e(h)&&0!==h?(l.setTime(l.getTime()+24*h*60*60*1e3),k="; expires="+l.toGMTString()):0!==o.expiry&&(l.setTime(l.getTime()+24*o.expiry*60*60*1e3),k="; expires="+l.toGMTString()),b){var n="; path="+o.path;o.domain&&(m="; domain="+o.domain),j.cookie=r(b)+"="+encodeURIComponent(c)+k+n+m}}catch(p){return a.$broadcast("LocalStorageModule.notification.error",p.message),!1}return!0},A=function(b){if(!y)return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;for(var c=j.cookie&&j.cookie.split(";")||[],d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(r(b)+"=")){var f=decodeURIComponent(e.substring(n.length+b.length+1,e.length));try{return JSON.parse(f)}catch(g){return f}}}return null},B=function(a){z(a,null)},C=function(){for(var a=null,b=n.length,c=j.cookie.split(";"),d=0;d<c.length;d++){for(a=c[d];" "===a.charAt(0);)a=a.substring(1,a.length);var e=a.substring(b,a.indexOf("="));B(e)}},D=function(){return q},E=function(a,b,d,e){e=e||b;var g=u(e);return null===g&&c(d)?g=d:f(g)&&f(d)&&(g=h(g,d)),k(b).assign(a,g),a.$watch(b,function(a){t(e,a)},f(a[b]))},F=function(){for(var a=0,c=b[q],d=0;d<c.length;d++)0===c.key(d).indexOf(n)&&a++;return a};return{isSupported:s,getStorageType:D,set:t,add:t,get:u,keys:w,remove:v,clearAll:x,bind:E,deriveKey:r,length:F,cookie:{isSupported:y,set:z,add:z,get:A,remove:B,clearAll:C}}}]})}(window,window.angular);
//# sourceMappingURL=angular-local-storage.min.js.map


/*-----------------------*/
/* lib/angular-touch/angular-touch.js*/
/*-----------------------*/
/**
 * @license AngularJS v1.4.9
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngTouch
 * @description
 *
 * # ngTouch
 *
 * The `ngTouch` module provides touch events and other helpers for touch-enabled devices.
 * The implementation is based on jQuery Mobile touch event handling
 * ([jquerymobile.com](http://jquerymobile.com/)).
 *
 *
 * See {@link ngTouch.$swipe `$swipe`} for usage.
 *
 * <div doc-module-components="ngTouch"></div>
 *
 */

// define ngTouch module
/* global -ngTouch */
var ngTouch = angular.module('ngTouch', []);

function nodeName_(element) {
  return angular.lowercase(element.nodeName || (element[0] && element[0].nodeName));
}

/* global ngTouch: false */

    /**
     * @ngdoc service
     * @name $swipe
     *
     * @description
     * The `$swipe` service is a service that abstracts the messier details of hold-and-drag swipe
     * behavior, to make implementing swipe-related directives more convenient.
     *
     * Requires the {@link ngTouch `ngTouch`} module to be installed.
     *
     * `$swipe` is used by the `ngSwipeLeft` and `ngSwipeRight` directives in `ngTouch`.
     *
     * # Usage
     * The `$swipe` service is an object with a single method: `bind`. `bind` takes an element
     * which is to be watched for swipes, and an object with four handler functions. See the
     * documentation for `bind` below.
     */

ngTouch.factory('$swipe', [function() {
  // The total distance in any direction before we make the call on swipe vs. scroll.
  var MOVE_BUFFER_RADIUS = 10;

  var POINTER_EVENTS = {
    'mouse': {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    },
    'touch': {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend',
      cancel: 'touchcancel'
    }
  };

  function getCoordinates(event) {
    var originalEvent = event.originalEvent || event;
    var touches = originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent];
    var e = (originalEvent.changedTouches && originalEvent.changedTouches[0]) || touches[0];

    return {
      x: e.clientX,
      y: e.clientY
    };
  }

  function getEvents(pointerTypes, eventType) {
    var res = [];
    angular.forEach(pointerTypes, function(pointerType) {
      var eventName = POINTER_EVENTS[pointerType][eventType];
      if (eventName) {
        res.push(eventName);
      }
    });
    return res.join(' ');
  }

  return {
    /**
     * @ngdoc method
     * @name $swipe#bind
     *
     * @description
     * The main method of `$swipe`. It takes an element to be watched for swipe motions, and an
     * object containing event handlers.
     * The pointer types that should be used can be specified via the optional
     * third argument, which is an array of strings `'mouse'` and `'touch'`. By default,
     * `$swipe` will listen for `mouse` and `touch` events.
     *
     * The four events are `start`, `move`, `end`, and `cancel`. `start`, `move`, and `end`
     * receive as a parameter a coordinates object of the form `{ x: 150, y: 310 }` and the raw
     * `event`. `cancel` receives the raw `event` as its single parameter.
     *
     * `start` is called on either `mousedown` or `touchstart`. After this event, `$swipe` is
     * watching for `touchmove` or `mousemove` events. These events are ignored until the total
     * distance moved in either dimension exceeds a small threshold.
     *
     * Once this threshold is exceeded, either the horizontal or vertical delta is greater.
     * - If the horizontal distance is greater, this is a swipe and `move` and `end` events follow.
     * - If the vertical distance is greater, this is a scroll, and we let the browser take over.
     *   A `cancel` event is sent.
     *
     * `move` is called on `mousemove` and `touchmove` after the above logic has determined that
     * a swipe is in progress.
     *
     * `end` is called when a swipe is successfully completed with a `touchend` or `mouseup`.
     *
     * `cancel` is called either on a `touchcancel` from the browser, or when we begin scrolling
     * as described above.
     *
     */
    bind: function(element, eventHandlers, pointerTypes) {
      // Absolute total movement, used to control swipe vs. scroll.
      var totalX, totalY;
      // Coordinates of the start position.
      var startCoords;
      // Last event's position.
      var lastPos;
      // Whether a swipe is active.
      var active = false;

      pointerTypes = pointerTypes || ['mouse', 'touch'];
      element.on(getEvents(pointerTypes, 'start'), function(event) {
        startCoords = getCoordinates(event);
        active = true;
        totalX = 0;
        totalY = 0;
        lastPos = startCoords;
        eventHandlers['start'] && eventHandlers['start'](startCoords, event);
      });
      var events = getEvents(pointerTypes, 'cancel');
      if (events) {
        element.on(events, function(event) {
          active = false;
          eventHandlers['cancel'] && eventHandlers['cancel'](event);
        });
      }

      element.on(getEvents(pointerTypes, 'move'), function(event) {
        if (!active) return;

        // Android will send a touchcancel if it thinks we're starting to scroll.
        // So when the total distance (+ or - or both) exceeds 10px in either direction,
        // we either:
        // - On totalX > totalY, we send preventDefault() and treat this as a swipe.
        // - On totalY > totalX, we let the browser handle it as a scroll.

        if (!startCoords) return;
        var coords = getCoordinates(event);

        totalX += Math.abs(coords.x - lastPos.x);
        totalY += Math.abs(coords.y - lastPos.y);

        lastPos = coords;

        if (totalX < MOVE_BUFFER_RADIUS && totalY < MOVE_BUFFER_RADIUS) {
          return;
        }

        // One of totalX or totalY has exceeded the buffer, so decide on swipe vs. scroll.
        if (totalY > totalX) {
          // Allow native scrolling to take over.
          active = false;
          eventHandlers['cancel'] && eventHandlers['cancel'](event);
          return;
        } else {
          // Prevent the browser from scrolling.
          event.preventDefault();
          eventHandlers['move'] && eventHandlers['move'](coords, event);
        }
      });

      element.on(getEvents(pointerTypes, 'end'), function(event) {
        if (!active) return;
        active = false;
        eventHandlers['end'] && eventHandlers['end'](getCoordinates(event), event);
      });
    }
  };
}]);

/* global ngTouch: false,
  nodeName_: false
*/

/**
 * @ngdoc directive
 * @name ngClick
 *
 * @description
 * A more powerful replacement for the default ngClick designed to be used on touchscreen
 * devices. Most mobile browsers wait about 300ms after a tap-and-release before sending
 * the click event. This version handles them immediately, and then prevents the
 * following click event from propagating.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * This directive can fall back to using an ordinary click event, and so works on desktop
 * browsers as well as mobile.
 *
 * This directive also sets the CSS class `ng-click-active` while the element is being held
 * down (by a mouse click or touch) so you can restyle the depressed element if you wish.
 *
 * @element ANY
 * @param {expression} ngClick {@link guide/expression Expression} to evaluate
 * upon tap. (Event object is available as `$event`)
 *
 * @example
    <example module="ngClickExample" deps="angular-touch.js">
      <file name="index.html">
        <button ng-click="count = count + 1" ng-init="count=0">
          Increment
        </button>
        count: {{ count }}
      </file>
      <file name="script.js">
        angular.module('ngClickExample', ['ngTouch']);
      </file>
    </example>
 */

ngTouch.config(['$provide', function($provide) {
  $provide.decorator('ngClickDirective', ['$delegate', function($delegate) {
    // drop the default ngClick directive
    $delegate.shift();
    return $delegate;
  }]);
}]);

ngTouch.directive('ngClick', ['$parse', '$timeout', '$rootElement',
    function($parse, $timeout, $rootElement) {
  var TAP_DURATION = 750; // Shorter than 750ms is a tap, longer is a taphold or drag.
  var MOVE_TOLERANCE = 12; // 12px seems to work in most mobile browsers.
  var PREVENT_DURATION = 2500; // 2.5 seconds maximum from preventGhostClick call to click
  var CLICKBUSTER_THRESHOLD = 25; // 25 pixels in any dimension is the limit for busting clicks.

  var ACTIVE_CLASS_NAME = 'ng-click-active';
  var lastPreventedTime;
  var touchCoordinates;
  var lastLabelClickCoordinates;


  // TAP EVENTS AND GHOST CLICKS
  //
  // Why tap events?
  // Mobile browsers detect a tap, then wait a moment (usually ~300ms) to see if you're
  // double-tapping, and then fire a click event.
  //
  // This delay sucks and makes mobile apps feel unresponsive.
  // So we detect touchstart, touchcancel and touchend ourselves and determine when
  // the user has tapped on something.
  //
  // What happens when the browser then generates a click event?
  // The browser, of course, also detects the tap and fires a click after a delay. This results in
  // tapping/clicking twice. We do "clickbusting" to prevent it.
  //
  // How does it work?
  // We attach global touchstart and click handlers, that run during the capture (early) phase.
  // So the sequence for a tap is:
  // - global touchstart: Sets an "allowable region" at the point touched.
  // - element's touchstart: Starts a touch
  // (- touchcancel ends the touch, no click follows)
  // - element's touchend: Determines if the tap is valid (didn't move too far away, didn't hold
  //   too long) and fires the user's tap handler. The touchend also calls preventGhostClick().
  // - preventGhostClick() removes the allowable region the global touchstart created.
  // - The browser generates a click event.
  // - The global click handler catches the click, and checks whether it was in an allowable region.
  //     - If preventGhostClick was called, the region will have been removed, the click is busted.
  //     - If the region is still there, the click proceeds normally. Therefore clicks on links and
  //       other elements without ngTap on them work normally.
  //
  // This is an ugly, terrible hack!
  // Yeah, tell me about it. The alternatives are using the slow click events, or making our users
  // deal with the ghost clicks, so I consider this the least of evils. Fortunately Angular
  // encapsulates this ugly logic away from the user.
  //
  // Why not just put click handlers on the element?
  // We do that too, just to be sure. If the tap event caused the DOM to change,
  // it is possible another element is now in that position. To take account for these possibly
  // distinct elements, the handlers are global and care only about coordinates.

  // Checks if the coordinates are close enough to be within the region.
  function hit(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) < CLICKBUSTER_THRESHOLD && Math.abs(y1 - y2) < CLICKBUSTER_THRESHOLD;
  }

  // Checks a list of allowable regions against a click location.
  // Returns true if the click should be allowed.
  // Splices out the allowable region from the list after it has been used.
  function checkAllowableRegions(touchCoordinates, x, y) {
    for (var i = 0; i < touchCoordinates.length; i += 2) {
      if (hit(touchCoordinates[i], touchCoordinates[i + 1], x, y)) {
        touchCoordinates.splice(i, i + 2);
        return true; // allowable region
      }
    }
    return false; // No allowable region; bust it.
  }

  // Global click handler that prevents the click if it's in a bustable zone and preventGhostClick
  // was called recently.
  function onClick(event) {
    if (Date.now() - lastPreventedTime > PREVENT_DURATION) {
      return; // Too old.
    }

    var touches = event.touches && event.touches.length ? event.touches : [event];
    var x = touches[0].clientX;
    var y = touches[0].clientY;
    // Work around desktop Webkit quirk where clicking a label will fire two clicks (on the label
    // and on the input element). Depending on the exact browser, this second click we don't want
    // to bust has either (0,0), negative coordinates, or coordinates equal to triggering label
    // click event
    if (x < 1 && y < 1) {
      return; // offscreen
    }
    if (lastLabelClickCoordinates &&
        lastLabelClickCoordinates[0] === x && lastLabelClickCoordinates[1] === y) {
      return; // input click triggered by label click
    }
    // reset label click coordinates on first subsequent click
    if (lastLabelClickCoordinates) {
      lastLabelClickCoordinates = null;
    }
    // remember label click coordinates to prevent click busting of trigger click event on input
    if (nodeName_(event.target) === 'label') {
      lastLabelClickCoordinates = [x, y];
    }

    // Look for an allowable region containing this click.
    // If we find one, that means it was created by touchstart and not removed by
    // preventGhostClick, so we don't bust it.
    if (checkAllowableRegions(touchCoordinates, x, y)) {
      return;
    }

    // If we didn't find an allowable region, bust the click.
    event.stopPropagation();
    event.preventDefault();

    // Blur focused form elements
    event.target && event.target.blur && event.target.blur();
  }


  // Global touchstart handler that creates an allowable region for a click event.
  // This allowable region can be removed by preventGhostClick if we want to bust it.
  function onTouchStart(event) {
    var touches = event.touches && event.touches.length ? event.touches : [event];
    var x = touches[0].clientX;
    var y = touches[0].clientY;
    touchCoordinates.push(x, y);

    $timeout(function() {
      // Remove the allowable region.
      for (var i = 0; i < touchCoordinates.length; i += 2) {
        if (touchCoordinates[i] == x && touchCoordinates[i + 1] == y) {
          touchCoordinates.splice(i, i + 2);
          return;
        }
      }
    }, PREVENT_DURATION, false);
  }

  // On the first call, attaches some event handlers. Then whenever it gets called, it creates a
  // zone around the touchstart where clicks will get busted.
  function preventGhostClick(x, y) {
    if (!touchCoordinates) {
      $rootElement[0].addEventListener('click', onClick, true);
      $rootElement[0].addEventListener('touchstart', onTouchStart, true);
      touchCoordinates = [];
    }

    lastPreventedTime = Date.now();

    checkAllowableRegions(touchCoordinates, x, y);
  }

  // Actual linking function.
  return function(scope, element, attr) {
    var clickHandler = $parse(attr.ngClick),
        tapping = false,
        tapElement,  // Used to blur the element after a tap.
        startTime,   // Used to check if the tap was held too long.
        touchStartX,
        touchStartY;

    function resetState() {
      tapping = false;
      element.removeClass(ACTIVE_CLASS_NAME);
    }

    element.on('touchstart', function(event) {
      tapping = true;
      tapElement = event.target ? event.target : event.srcElement; // IE uses srcElement.
      // Hack for Safari, which can target text nodes instead of containers.
      if (tapElement.nodeType == 3) {
        tapElement = tapElement.parentNode;
      }

      element.addClass(ACTIVE_CLASS_NAME);

      startTime = Date.now();

      // Use jQuery originalEvent
      var originalEvent = event.originalEvent || event;
      var touches = originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent];
      var e = touches[0];
      touchStartX = e.clientX;
      touchStartY = e.clientY;
    });

    element.on('touchcancel', function(event) {
      resetState();
    });

    element.on('touchend', function(event) {
      var diff = Date.now() - startTime;

      // Use jQuery originalEvent
      var originalEvent = event.originalEvent || event;
      var touches = (originalEvent.changedTouches && originalEvent.changedTouches.length) ?
          originalEvent.changedTouches :
          ((originalEvent.touches && originalEvent.touches.length) ? originalEvent.touches : [originalEvent]);
      var e = touches[0];
      var x = e.clientX;
      var y = e.clientY;
      var dist = Math.sqrt(Math.pow(x - touchStartX, 2) + Math.pow(y - touchStartY, 2));

      if (tapping && diff < TAP_DURATION && dist < MOVE_TOLERANCE) {
        // Call preventGhostClick so the clickbuster will catch the corresponding click.
        preventGhostClick(x, y);

        // Blur the focused element (the button, probably) before firing the callback.
        // This doesn't work perfectly on Android Chrome, but seems to work elsewhere.
        // I couldn't get anything to work reliably on Android Chrome.
        if (tapElement) {
          tapElement.blur();
        }

        if (!angular.isDefined(attr.disabled) || attr.disabled === false) {
          element.triggerHandler('click', [event]);
        }
      }

      resetState();
    });

    // Hack for iOS Safari's benefit. It goes searching for onclick handlers and is liable to click
    // something else nearby.
    element.onclick = function(event) { };

    // Actual click handler.
    // There are three different kinds of clicks, only two of which reach this point.
    // - On desktop browsers without touch events, their clicks will always come here.
    // - On mobile browsers, the simulated "fast" click will call this.
    // - But the browser's follow-up slow click will be "busted" before it reaches this handler.
    // Therefore it's safe to use this directive on both mobile and desktop.
    element.on('click', function(event, touchend) {
      scope.$apply(function() {
        clickHandler(scope, {$event: (touchend || event)});
      });
    });

    element.on('mousedown', function(event) {
      element.addClass(ACTIVE_CLASS_NAME);
    });

    element.on('mousemove mouseup', function(event) {
      element.removeClass(ACTIVE_CLASS_NAME);
    });

  };
}]);

/* global ngTouch: false */

/**
 * @ngdoc directive
 * @name ngSwipeLeft
 *
 * @description
 * Specify custom behavior when an element is swiped to the left on a touchscreen device.
 * A leftward swipe is a quick, right-to-left slide of the finger.
 * Though ngSwipeLeft is designed for touch-based devices, it will work with a mouse click and drag
 * too.
 *
 * To disable the mouse click and drag functionality, add `ng-swipe-disable-mouse` to
 * the `ng-swipe-left` or `ng-swipe-right` DOM Element.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeLeft {@link guide/expression Expression} to evaluate
 * upon left swipe. (Event object is available as `$event`)
 *
 * @example
    <example module="ngSwipeLeftExample" deps="angular-touch.js">
      <file name="index.html">
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </file>
      <file name="script.js">
        angular.module('ngSwipeLeftExample', ['ngTouch']);
      </file>
    </example>
 */

/**
 * @ngdoc directive
 * @name ngSwipeRight
 *
 * @description
 * Specify custom behavior when an element is swiped to the right on a touchscreen device.
 * A rightward swipe is a quick, left-to-right slide of the finger.
 * Though ngSwipeRight is designed for touch-based devices, it will work with a mouse click and drag
 * too.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeRight {@link guide/expression Expression} to evaluate
 * upon right swipe. (Event object is available as `$event`)
 *
 * @example
    <example module="ngSwipeRightExample" deps="angular-touch.js">
      <file name="index.html">
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </file>
      <file name="script.js">
        angular.module('ngSwipeRightExample', ['ngTouch']);
      </file>
    </example>
 */

function makeSwipeDirective(directiveName, direction, eventName) {
  ngTouch.directive(directiveName, ['$parse', '$swipe', function($parse, $swipe) {
    // The maximum vertical delta for a swipe should be less than 75px.
    var MAX_VERTICAL_DISTANCE = 75;
    // Vertical distance should not be more than a fraction of the horizontal distance.
    var MAX_VERTICAL_RATIO = 0.3;
    // At least a 30px lateral motion is necessary for a swipe.
    var MIN_HORIZONTAL_DISTANCE = 30;

    return function(scope, element, attr) {
      var swipeHandler = $parse(attr[directiveName]);

      var startCoords, valid;

      function validSwipe(coords) {
        // Check that it's within the coordinates.
        // Absolute vertical distance must be within tolerances.
        // Horizontal distance, we take the current X - the starting X.
        // This is negative for leftward swipes and positive for rightward swipes.
        // After multiplying by the direction (-1 for left, +1 for right), legal swipes
        // (ie. same direction as the directive wants) will have a positive delta and
        // illegal ones a negative delta.
        // Therefore this delta must be positive, and larger than the minimum.
        if (!startCoords) return false;
        var deltaY = Math.abs(coords.y - startCoords.y);
        var deltaX = (coords.x - startCoords.x) * direction;
        return valid && // Short circuit for already-invalidated swipes.
            deltaY < MAX_VERTICAL_DISTANCE &&
            deltaX > 0 &&
            deltaX > MIN_HORIZONTAL_DISTANCE &&
            deltaY / deltaX < MAX_VERTICAL_RATIO;
      }

      var pointerTypes = ['touch'];
      if (!angular.isDefined(attr['ngSwipeDisableMouse'])) {
        pointerTypes.push('mouse');
      }
      $swipe.bind(element, {
        'start': function(coords, event) {
          startCoords = coords;
          valid = true;
        },
        'cancel': function(event) {
          valid = false;
        },
        'end': function(coords, event) {
          if (validSwipe(coords)) {
            scope.$apply(function() {
              element.triggerHandler(eventName);
              swipeHandler(scope, {$event: event});
            });
          }
        }
      }, pointerTypes);
    };
  }]);
}

// Left is negative X-coordinate, right is positive.
makeSwipeDirective('ngSwipeLeft', -1, 'swipeleft');
makeSwipeDirective('ngSwipeRight', 1, 'swiperight');



})(window, window.angular);



/*-----------------------*/
/* lib/moment/moment.min.js*/
/*-----------------------*/
//! moment.js
//! version : 2.13.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return fd.apply(null,arguments)}function b(a){fd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return Ja(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a),c=gd.call(b.parsedDateParts,function(a){return null!=a});a._isValid=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a){return void 0===a}function n(a,b){var c,d,e;if(m(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),m(b._i)||(a._i=b._i),m(b._f)||(a._f=b._f),m(b._l)||(a._l=b._l),m(b._strict)||(a._strict=b._strict),m(b._tzm)||(a._tzm=b._tzm),m(b._isUTC)||(a._isUTC=b._isUTC),m(b._offset)||(a._offset=b._offset),m(b._pf)||(a._pf=j(b)),m(b._locale)||(a._locale=b._locale),hd.length>0)for(c in hd)d=hd[c],e=b[d],m(e)||(a[d]=e);return a}function o(b){n(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),id===!1&&(id=!0,a.updateOffset(this),id=!1)}function p(a){return a instanceof o||null!=a&&null!=a._isAMomentObject}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=q(b)),c}function s(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&r(a[d])!==r(b[d]))&&g++;return g+f}function t(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function u(b,c){var d=!0;return g(function(){return null!=a.deprecationHandler&&a.deprecationHandler(null,b),d&&(t(b+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),d=!1),c.apply(this,arguments)},c)}function v(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),jd[b]||(t(c),jd[b]=!0)}function w(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function x(a){return"[object Object]"===Object.prototype.toString.call(a)}function y(a){var b,c;for(c in a)b=a[c],w(b)?this[c]=b:this["_"+c]=b;this._config=a,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function z(a,b){var c,d=g({},a);for(c in b)f(b,c)&&(x(a[c])&&x(b[c])?(d[c]={},g(d[c],a[c]),g(d[c],b[c])):null!=b[c]?d[c]=b[c]:delete d[c]);return d}function A(a){null!=a&&this.set(a)}function B(a){return a?a.toLowerCase().replace("_","-"):a}function C(a){for(var b,c,d,e,f=0;f<a.length;){for(e=B(a[f]).split("-"),b=e.length,c=B(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=D(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&s(e,c,!0)>=b-1)break;b--}f++}return null}function D(a){var b=null;if(!nd[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=ld._abbr,require("./locale/"+a),E(b)}catch(c){}return nd[a]}function E(a,b){var c;return a&&(c=m(b)?H(a):F(a,b),c&&(ld=c)),ld._abbr}function F(a,b){return null!==b?(b.abbr=a,null!=nd[a]?(v("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"),b=z(nd[a]._config,b)):null!=b.parentLocale&&(null!=nd[b.parentLocale]?b=z(nd[b.parentLocale]._config,b):v("parentLocaleUndefined","specified parentLocale is not defined yet")),nd[a]=new A(b),E(a),nd[a]):(delete nd[a],null)}function G(a,b){if(null!=b){var c;null!=nd[a]&&(b=z(nd[a]._config,b)),c=new A(b),c.parentLocale=nd[a],nd[a]=c,E(a)}else null!=nd[a]&&(null!=nd[a].parentLocale?nd[a]=nd[a].parentLocale:null!=nd[a]&&delete nd[a]);return nd[a]}function H(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return ld;if(!c(a)){if(b=D(a))return b;a=[a]}return C(a)}function I(){return kd(nd)}function J(a,b){var c=a.toLowerCase();od[c]=od[c+"s"]=od[b]=a}function K(a){return"string"==typeof a?od[a]||od[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)f(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(b,c){return function(d){return null!=d?(O(this,b,d),a.updateOffset(this,c),this):N(this,b)}}function N(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function O(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function P(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=K(a),w(this[a]))return this[a](b);return this}function Q(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function R(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(sd[a]=e),b&&(sd[b[0]]=function(){return Q(e.apply(this,arguments),b[1],b[2])}),c&&(sd[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function S(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function T(a){var b,c,d=a.match(pd);for(b=0,c=d.length;c>b;b++)sd[d[b]]?d[b]=sd[d[b]]:d[b]=S(d[b]);return function(b){var e,f="";for(e=0;c>e;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}function U(a,b){return a.isValid()?(b=V(b,a.localeData()),rd[b]=rd[b]||T(b),rd[b](a)):a.localeData().invalidDate()}function V(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(qd.lastIndex=0;d>=0&&qd.test(a);)a=a.replace(qd,c),qd.lastIndex=0,d-=1;return a}function W(a,b,c){Kd[a]=w(b)?b:function(a,d){return a&&c?c:b}}function X(a,b){return f(Kd,a)?Kd[a](b._strict,b._locale):new RegExp(Y(a))}function Y(a){return Z(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function Z(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function $(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=r(a)}),c=0;c<a.length;c++)Ld[a[c]]=d}function _(a,b){$(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function aa(a,b,c){null!=b&&f(Ld,a)&&Ld[a](b,c._a,c,a)}function ba(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ca(a,b){return c(this._months)?this._months[a.month()]:this._months[Vd.test(b)?"format":"standalone"][a.month()]}function da(a,b){return c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[Vd.test(b)?"format":"standalone"][a.month()]}function ea(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;12>d;++d)f=h([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=md.call(this._shortMonthsParse,g),-1!==e?e:null):(e=md.call(this._longMonthsParse,g),-1!==e?e:null):"MMM"===b?(e=md.call(this._shortMonthsParse,g),-1!==e?e:(e=md.call(this._longMonthsParse,g),-1!==e?e:null)):(e=md.call(this._longMonthsParse,g),-1!==e?e:(e=md.call(this._shortMonthsParse,g),-1!==e?e:null))}function fa(a,b,c){var d,e,f;if(this._monthsParseExact)return ea.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ga(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=r(b);else if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),ba(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ha(b){return null!=b?(ga(this,b),a.updateOffset(this,!0),this):N(this,"Month")}function ia(){return ba(this.year(),this.month())}function ja(a){return this._monthsParseExact?(f(this,"_monthsRegex")||la.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex}function ka(a){return this._monthsParseExact?(f(this,"_monthsRegex")||la.call(this),a?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex}function la(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=h([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=Z(d[b]),e[b]=Z(e[b]),f[b]=Z(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function ma(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[Nd]<0||c[Nd]>11?Nd:c[Od]<1||c[Od]>ba(c[Md],c[Nd])?Od:c[Pd]<0||c[Pd]>24||24===c[Pd]&&(0!==c[Qd]||0!==c[Rd]||0!==c[Sd])?Pd:c[Qd]<0||c[Qd]>59?Qd:c[Rd]<0||c[Rd]>59?Rd:c[Sd]<0||c[Sd]>999?Sd:-1,j(a)._overflowDayOfYear&&(Md>b||b>Od)&&(b=Od),j(a)._overflowWeeks&&-1===b&&(b=Td),j(a)._overflowWeekday&&-1===b&&(b=Ud),j(a).overflow=b),a}function na(a){var b,c,d,e,f,g,h=a._i,i=$d.exec(h)||_d.exec(h);if(i){for(j(a).iso=!0,b=0,c=be.length;c>b;b++)if(be[b][1].exec(i[1])){e=be[b][0],d=be[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=ce.length;c>b;b++)if(ce[b][1].exec(i[3])){f=(i[2]||" ")+ce[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!ae.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),Ca(a)}else a._isValid=!1}function oa(b){var c=de.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(na(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function pa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function qa(a){var b=new Date(Date.UTC.apply(null,arguments));return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ra(a){return sa(a)?366:365}function sa(a){return a%4===0&&a%100!==0||a%400===0}function ta(){return sa(this.year())}function ua(a,b,c){var d=7+b-c,e=(7+qa(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=ra(f)+j):j>ra(a)?(f=a+1,g=j-ra(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(ra(a)-d+e)/7}function ya(a,b,c){return null!=a?a:null!=b?b:c}function za(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function Aa(a){var b,c,d,e,f=[];if(!a._d){for(d=za(a),a._w&&null==a._a[Od]&&null==a._a[Nd]&&Ba(a),a._dayOfYear&&(e=ya(a._a[Md],d[Md]),a._dayOfYear>ra(e)&&(j(a)._overflowDayOfYear=!0),c=qa(e,0,a._dayOfYear),a._a[Nd]=c.getUTCMonth(),a._a[Od]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[Pd]&&0===a._a[Qd]&&0===a._a[Rd]&&0===a._a[Sd]&&(a._nextDay=!0,a._a[Pd]=0),a._d=(a._useUTC?qa:pa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Pd]=24)}}function Ba(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=ya(b.GG,a._a[Md],wa(Ka(),1,4).year),d=ya(b.W,1),e=ya(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=ya(b.gg,a._a[Md],wa(Ka(),f,g).year),d=ya(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>xa(c,f,g)?j(a)._overflowWeeks=!0:null!=i?j(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[Md]=h.year,a._dayOfYear=h.dayOfYear)}function Ca(b){if(b._f===a.ISO_8601)return void na(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=V(b._f,b._locale).match(pd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(X(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),sd[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),aa(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[Pd]<=12&&b._a[Pd]>0&&(j(b).bigHour=void 0),j(b).parsedDateParts=b._a.slice(0),j(b).meridiem=b._meridiem,b._a[Pd]=Da(b._locale,b._a[Pd],b._meridiem),Aa(b),ma(b)}function Da(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function Ea(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],Ca(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function Fa(a){if(!a._d){var b=L(a._i);a._a=e([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),Aa(a)}}function Ga(a){var b=new o(ma(Ha(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function Ha(a){var b=a._i,e=a._f;return a._locale=a._locale||H(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),p(b)?new o(ma(b)):(c(e)?Ea(a):e?Ca(a):d(b)?a._d=b:Ia(a),k(a)||(a._d=null),a))}function Ia(b){var f=b._i;void 0===f?b._d=new Date(a.now()):d(f)?b._d=new Date(f.valueOf()):"string"==typeof f?oa(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),Aa(b)):"object"==typeof f?Fa(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function Ja(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,Ga(f)}function Ka(a,b,c,d){return Ja(a,b,c,d,!1)}function La(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Ka();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Ma(){var a=[].slice.call(arguments,0);return La("isBefore",a)}function Na(){var a=[].slice.call(arguments,0);return La("isAfter",a)}function Oa(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=H(),this._bubble()}function Pa(a){return a instanceof Oa}function Qa(a,b){R(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+Q(~~(a/60),2)+b+Q(~~a%60,2)})}function Ra(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(ie)||["-",0,0],f=+(60*e[1])+r(e[2]);return"+"===e[0]?f:-f}function Sa(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(p(b)||d(b)?b.valueOf():Ka(b).valueOf())-e.valueOf(),e._d.setTime(e._d.valueOf()+f),a.updateOffset(e,!1),e):Ka(b).local()}function Ta(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Ua(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=Ra(Hd,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ta(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?jb(this,db(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ta(this):null!=b?this:NaN}function Va(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Wa(a){return this.utcOffset(0,a)}function Xa(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ta(this),"m")),this}function Ya(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ra(Gd,this._i)),this}function Za(a){return this.isValid()?(a=a?Ka(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function $a(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function _a(){if(!m(this._isDSTShifted))return this._isDSTShifted;var a={};if(n(a,this),a=Ha(a),a._a){var b=a._isUTC?h(a._a):Ka(a._a);this._isDSTShifted=this.isValid()&&s(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function ab(){return this.isValid()?!this._isUTC:!1}function bb(){return this.isValid()?this._isUTC:!1}function cb(){return this.isValid()?this._isUTC&&0===this._offset:!1}function db(a,b){var c,d,e,g=a,h=null;return Pa(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=je.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:r(h[Od])*c,h:r(h[Pd])*c,m:r(h[Qd])*c,s:r(h[Rd])*c,ms:r(h[Sd])*c}):(h=ke.exec(a))?(c="-"===h[1]?-1:1,g={y:eb(h[2],c),M:eb(h[3],c),w:eb(h[4],c),d:eb(h[5],c),h:eb(h[6],c),m:eb(h[7],c),s:eb(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=gb(Ka(g.from),Ka(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Oa(g),Pa(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function eb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function fb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function gb(a,b){var c;return a.isValid()&&b.isValid()?(b=Sa(b,a),a.isBefore(b)?c=fb(a,b):(c=fb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function hb(a){return 0>a?-1*Math.round(-1*a):Math.round(a)}function ib(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(v(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=db(c,d),jb(this,e,a),this}}function jb(b,c,d,e){var f=c._milliseconds,g=hb(c._days),h=hb(c._months);b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&O(b,"Date",N(b,"Date")+g*d),h&&ga(b,N(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function kb(a,b){var c=a||Ka(),d=Sa(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse",g=b&&(w(b[f])?b[f]():b[f]);return this.format(g||this.localeData().calendar(f,this,Ka(c)))}function lb(){return new o(this)}function mb(a,b){var c=p(a)?a:Ka(a);return this.isValid()&&c.isValid()?(b=K(m(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf()):!1}function nb(a,b){var c=p(a)?a:Ka(a);return this.isValid()&&c.isValid()?(b=K(m(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf()):!1}function ob(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function pb(a,b){var c,d=p(a)?a:Ka(a);return this.isValid()&&d.isValid()?(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf())):!1}function qb(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function rb(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function sb(a,b,c){var d,e,f,g;return this.isValid()?(d=Sa(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=tb(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:q(g)):NaN):NaN}function tb(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function ub(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function vb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?w(Date.prototype.toISOString)?this.toDate().toISOString():U(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):U(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function wb(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=U(this,b);return this.localeData().postformat(c)}function xb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ka(a).isValid())?db({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function yb(a){return this.from(Ka(),a)}function zb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Ka(a).isValid())?db({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function Ab(a){return this.to(Ka(),a)}function Bb(a){var b;return void 0===a?this._locale._abbr:(b=H(a),null!=b&&(this._locale=b),this)}function Cb(){return this._locale}function Db(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function Eb(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function Fb(){return this._d.valueOf()-6e4*(this._offset||0)}function Gb(){return Math.floor(this.valueOf()/1e3)}function Hb(){return this._offset?new Date(this.valueOf()):this._d}function Ib(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function Jb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function Kb(){return this.isValid()?this.toISOString():null}function Lb(){return k(this)}function Mb(){return g({},j(this))}function Nb(){return j(this).overflow}function Ob(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Pb(a,b){R(0,[a,a.length],0,b)}function Qb(a){return Ub.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Rb(a){return Ub.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Sb(){return xa(this.year(),1,4)}function Tb(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ub(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Vb.call(this,a,b,c,d,e))}function Vb(a,b,c,d,e){var f=va(a,b,c,d,e),g=qa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Wb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Xb(a){return wa(a,this._week.dow,this._week.doy).week}function Yb(){return this._week.dow}function Zb(){return this._week.doy}function $b(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function _b(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function ac(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function bc(a,b){return c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]}function cc(a){return this._weekdaysShort[a.day()]}function dc(a){return this._weekdaysMin[a.day()]}function ec(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;7>d;++d)f=h([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=md.call(this._weekdaysParse,g),-1!==e?e:null):"ddd"===b?(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:null):(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null):"dddd"===b?(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null))):"ddd"===b?(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._minWeekdaysParse,g),-1!==e?e:null))):(e=md.call(this._minWeekdaysParse,g),-1!==e?e:(e=md.call(this._weekdaysParse,g),-1!==e?e:(e=md.call(this._shortWeekdaysParse,g),-1!==e?e:null)))}function fc(a,b,c){var d,e,f;if(this._weekdaysParseExact)return ec.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){if(e=h([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function gc(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=ac(a,this.localeData()),this.add(a-b,"d")):b}function hc(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function ic(a){return this.isValid()?null==a?this.day()||7:this.day(this.day()%7?a:a-7):null!=a?this:NaN}function jc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex}function kc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex}function lc(a){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||mc.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex}function mc(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],i=[],j=[],k=[];for(b=0;7>b;b++)c=h([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),i.push(e),j.push(f),k.push(d),k.push(e),k.push(f);for(g.sort(a),i.sort(a),j.sort(a),k.sort(a),b=0;7>b;b++)i[b]=Z(i[b]),j[b]=Z(j[b]),k[b]=Z(k[b]);this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function nc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function oc(){return this.hours()%12||12}function pc(){return this.hours()||24}function qc(a,b){R(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function rc(a,b){return b._meridiemParse}function sc(a){return"p"===(a+"").toLowerCase().charAt(0)}function tc(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function uc(a,b){b[Sd]=r(1e3*("0."+a))}function vc(){return this._isUTC?"UTC":""}function wc(){return this._isUTC?"Coordinated Universal Time":""}function xc(a){return Ka(1e3*a)}function yc(){return Ka.apply(null,arguments).parseZone()}function zc(a,b,c){var d=this._calendar[a];return w(d)?d.call(b,c):d}function Ac(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function Bc(){return this._invalidDate}function Cc(a){return this._ordinal.replace("%d",a)}function Dc(a){return a}function Ec(a,b,c,d){var e=this._relativeTime[c];return w(e)?e(a,b,c,d):e.replace(/%d/i,a)}function Fc(a,b){var c=this._relativeTime[a>0?"future":"past"];return w(c)?c(b):c.replace(/%s/i,b)}function Gc(a,b,c,d){var e=H(),f=h().set(d,b);return e[c](f,a)}function Hc(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return Gc(a,b,c,"month");var d,e=[];for(d=0;12>d;d++)e[d]=Gc(a,d,c,"month");return e}function Ic(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=H(),f=a?e._week.dow:0;if(null!=c)return Gc(b,(c+f)%7,d,"day");var g,h=[];for(g=0;7>g;g++)h[g]=Gc(b,(g+f)%7,d,"day");return h}function Jc(a,b){return Hc(a,b,"months")}function Kc(a,b){return Hc(a,b,"monthsShort")}function Lc(a,b,c){return Ic(a,b,c,"weekdays")}function Mc(a,b,c){return Ic(a,b,c,"weekdaysShort")}function Nc(a,b,c){return Ic(a,b,c,"weekdaysMin")}function Oc(){var a=this._data;return this._milliseconds=Le(this._milliseconds),this._days=Le(this._days),this._months=Le(this._months),a.milliseconds=Le(a.milliseconds),a.seconds=Le(a.seconds),a.minutes=Le(a.minutes),a.hours=Le(a.hours),a.months=Le(a.months),a.years=Le(a.years),this}function Pc(a,b,c,d){var e=db(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function Qc(a,b){return Pc(this,a,b,1)}function Rc(a,b){return Pc(this,a,b,-1)}function Sc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Tc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Sc(Vc(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=q(f/1e3),i.seconds=a%60,b=q(a/60),i.minutes=b%60,c=q(b/60),i.hours=c%24,g+=q(c/24),e=q(Uc(g)),h+=e,g-=Sc(Vc(e)),d=q(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function Uc(a){return 4800*a/146097}function Vc(a){return 146097*a/4800}function Wc(a){var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+Uc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(Vc(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function Xc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*r(this._months/12)}function Yc(a){return function(){return this.as(a)}}function Zc(a){
return a=K(a),this[a+"s"]()}function $c(a){return function(){return this._data[a]}}function _c(){return q(this.days()/7)}function ad(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function bd(a,b,c){var d=db(a).abs(),e=_e(d.as("s")),f=_e(d.as("m")),g=_e(d.as("h")),h=_e(d.as("d")),i=_e(d.as("M")),j=_e(d.as("y")),k=e<af.s&&["s",e]||1>=f&&["m"]||f<af.m&&["mm",f]||1>=g&&["h"]||g<af.h&&["hh",g]||1>=h&&["d"]||h<af.d&&["dd",h]||1>=i&&["M"]||i<af.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,ad.apply(null,k)}function cd(a,b){return void 0===af[a]?!1:void 0===b?af[a]:(af[a]=b,!0)}function dd(a){var b=this.localeData(),c=bd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ed(){var a,b,c,d=bf(this._milliseconds)/1e3,e=bf(this._days),f=bf(this._months);a=q(d/60),b=q(a/60),d%=60,a%=60,c=q(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var fd,gd;gd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;c>d;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var hd=a.momentProperties=[],id=!1,jd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var kd;kd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)f(a,b)&&c.push(b);return c};var ld,md,nd={},od={},pd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,qd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,rd={},sd={},td=/\d/,ud=/\d\d/,vd=/\d{3}/,wd=/\d{4}/,xd=/[+-]?\d{6}/,yd=/\d\d?/,zd=/\d\d\d\d?/,Ad=/\d\d\d\d\d\d?/,Bd=/\d{1,3}/,Cd=/\d{1,4}/,Dd=/[+-]?\d{1,6}/,Ed=/\d+/,Fd=/[+-]?\d+/,Gd=/Z|[+-]\d\d:?\d\d/gi,Hd=/Z|[+-]\d\d(?::?\d\d)?/gi,Id=/[+-]?\d+(\.\d{1,3})?/,Jd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Kd={},Ld={},Md=0,Nd=1,Od=2,Pd=3,Qd=4,Rd=5,Sd=6,Td=7,Ud=8;md=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},R("M",["MM",2],"Mo",function(){return this.month()+1}),R("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),R("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),W("M",yd),W("MM",yd,ud),W("MMM",function(a,b){return b.monthsShortRegex(a)}),W("MMMM",function(a,b){return b.monthsRegex(a)}),$(["M","MM"],function(a,b){b[Nd]=r(a)-1}),$(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[Nd]=e:j(c).invalidMonth=a});var Vd=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Wd="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Xd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Yd=Jd,Zd=Jd,$d=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,_d=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ae=/Z|[+-]\d\d(?::?\d\d)?/,be=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],ce=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],de=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=u("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),R("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),R(0,["YY",2],0,function(){return this.year()%100}),R(0,["YYYY",4],0,"year"),R(0,["YYYYY",5],0,"year"),R(0,["YYYYYY",6,!0],0,"year"),J("year","y"),W("Y",Fd),W("YY",yd,ud),W("YYYY",Cd,wd),W("YYYYY",Dd,xd),W("YYYYYY",Dd,xd),$(["YYYYY","YYYYYY"],Md),$("YYYY",function(b,c){c[Md]=2===b.length?a.parseTwoDigitYear(b):r(b)}),$("YY",function(b,c){c[Md]=a.parseTwoDigitYear(b)}),$("Y",function(a,b){b[Md]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return r(a)+(r(a)>68?1900:2e3)};var ee=M("FullYear",!0);a.ISO_8601=function(){};var fe=u("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Ka.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:l()}),ge=u("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Ka.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:l()}),he=function(){return Date.now?Date.now():+new Date};Qa("Z",":"),Qa("ZZ",""),W("Z",Hd),W("ZZ",Hd),$(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ra(Hd,a)});var ie=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var je=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,ke=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;db.fn=Oa.prototype;var le=ib(1,"add"),me=ib(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ne=u("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});R(0,["gg",2],0,function(){return this.weekYear()%100}),R(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Pb("gggg","weekYear"),Pb("ggggg","weekYear"),Pb("GGGG","isoWeekYear"),Pb("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),W("G",Fd),W("g",Fd),W("GG",yd,ud),W("gg",yd,ud),W("GGGG",Cd,wd),W("gggg",Cd,wd),W("GGGGG",Dd,xd),W("ggggg",Dd,xd),_(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=r(a)}),_(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),R("Q",0,"Qo","quarter"),J("quarter","Q"),W("Q",td),$("Q",function(a,b){b[Nd]=3*(r(a)-1)}),R("w",["ww",2],"wo","week"),R("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),W("w",yd),W("ww",yd,ud),W("W",yd),W("WW",yd,ud),_(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=r(a)});var oe={dow:0,doy:6};R("D",["DD",2],"Do","date"),J("date","D"),W("D",yd),W("DD",yd,ud),W("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),$(["D","DD"],Od),$("Do",function(a,b){b[Od]=r(a.match(yd)[0],10)});var pe=M("Date",!0);R("d",0,"do","day"),R("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),R("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),R("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),R("e",0,0,"weekday"),R("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),W("d",yd),W("e",yd),W("E",yd),W("dd",function(a,b){return b.weekdaysMinRegex(a)}),W("ddd",function(a,b){return b.weekdaysShortRegex(a)}),W("dddd",function(a,b){return b.weekdaysRegex(a)}),_(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:j(c).invalidWeekday=a}),_(["d","e","E"],function(a,b,c,d){b[d]=r(a)});var qe="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),re="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),se="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),te=Jd,ue=Jd,ve=Jd;R("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),W("DDD",Bd),W("DDDD",vd),$(["DDD","DDDD"],function(a,b,c){c._dayOfYear=r(a)}),R("H",["HH",2],0,"hour"),R("h",["hh",2],0,oc),R("k",["kk",2],0,pc),R("hmm",0,0,function(){return""+oc.apply(this)+Q(this.minutes(),2)}),R("hmmss",0,0,function(){return""+oc.apply(this)+Q(this.minutes(),2)+Q(this.seconds(),2)}),R("Hmm",0,0,function(){return""+this.hours()+Q(this.minutes(),2)}),R("Hmmss",0,0,function(){return""+this.hours()+Q(this.minutes(),2)+Q(this.seconds(),2)}),qc("a",!0),qc("A",!1),J("hour","h"),W("a",rc),W("A",rc),W("H",yd),W("h",yd),W("HH",yd,ud),W("hh",yd,ud),W("hmm",zd),W("hmmss",Ad),W("Hmm",zd),W("Hmmss",Ad),$(["H","HH"],Pd),$(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),$(["h","hh"],function(a,b,c){b[Pd]=r(a),j(c).bigHour=!0}),$("hmm",function(a,b,c){var d=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d)),j(c).bigHour=!0}),$("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d,2)),b[Rd]=r(a.substr(e)),j(c).bigHour=!0}),$("Hmm",function(a,b,c){var d=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d))}),$("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[Pd]=r(a.substr(0,d)),b[Qd]=r(a.substr(d,2)),b[Rd]=r(a.substr(e))});var we=/[ap]\.?m?\.?/i,xe=M("Hours",!0);R("m",["mm",2],0,"minute"),J("minute","m"),W("m",yd),W("mm",yd,ud),$(["m","mm"],Qd);var ye=M("Minutes",!1);R("s",["ss",2],0,"second"),J("second","s"),W("s",yd),W("ss",yd,ud),$(["s","ss"],Rd);var ze=M("Seconds",!1);R("S",0,0,function(){return~~(this.millisecond()/100)}),R(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),R(0,["SSS",3],0,"millisecond"),R(0,["SSSS",4],0,function(){return 10*this.millisecond()}),R(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),R(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),R(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),R(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),R(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),W("S",Bd,td),W("SS",Bd,ud),W("SSS",Bd,vd);var Ae;for(Ae="SSSS";Ae.length<=9;Ae+="S")W(Ae,Ed);for(Ae="S";Ae.length<=9;Ae+="S")$(Ae,uc);var Be=M("Milliseconds",!1);R("z",0,0,"zoneAbbr"),R("zz",0,0,"zoneName");var Ce=o.prototype;Ce.add=le,Ce.calendar=kb,Ce.clone=lb,Ce.diff=sb,Ce.endOf=Eb,Ce.format=wb,Ce.from=xb,Ce.fromNow=yb,Ce.to=zb,Ce.toNow=Ab,Ce.get=P,Ce.invalidAt=Nb,Ce.isAfter=mb,Ce.isBefore=nb,Ce.isBetween=ob,Ce.isSame=pb,Ce.isSameOrAfter=qb,Ce.isSameOrBefore=rb,Ce.isValid=Lb,Ce.lang=ne,Ce.locale=Bb,Ce.localeData=Cb,Ce.max=ge,Ce.min=fe,Ce.parsingFlags=Mb,Ce.set=P,Ce.startOf=Db,Ce.subtract=me,Ce.toArray=Ib,Ce.toObject=Jb,Ce.toDate=Hb,Ce.toISOString=vb,Ce.toJSON=Kb,Ce.toString=ub,Ce.unix=Gb,Ce.valueOf=Fb,Ce.creationData=Ob,Ce.year=ee,Ce.isLeapYear=ta,Ce.weekYear=Qb,Ce.isoWeekYear=Rb,Ce.quarter=Ce.quarters=Wb,Ce.month=ha,Ce.daysInMonth=ia,Ce.week=Ce.weeks=$b,Ce.isoWeek=Ce.isoWeeks=_b,Ce.weeksInYear=Tb,Ce.isoWeeksInYear=Sb,Ce.date=pe,Ce.day=Ce.days=gc,Ce.weekday=hc,Ce.isoWeekday=ic,Ce.dayOfYear=nc,Ce.hour=Ce.hours=xe,Ce.minute=Ce.minutes=ye,Ce.second=Ce.seconds=ze,Ce.millisecond=Ce.milliseconds=Be,Ce.utcOffset=Ua,Ce.utc=Wa,Ce.local=Xa,Ce.parseZone=Ya,Ce.hasAlignedHourOffset=Za,Ce.isDST=$a,Ce.isDSTShifted=_a,Ce.isLocal=ab,Ce.isUtcOffset=bb,Ce.isUtc=cb,Ce.isUTC=cb,Ce.zoneAbbr=vc,Ce.zoneName=wc,Ce.dates=u("dates accessor is deprecated. Use date instead.",pe),Ce.months=u("months accessor is deprecated. Use month instead",ha),Ce.years=u("years accessor is deprecated. Use year instead",ee),Ce.zone=u("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Va);var De=Ce,Ee={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Fe={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ge="Invalid date",He="%d",Ie=/\d{1,2}/,Je={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ke=A.prototype;Ke._calendar=Ee,Ke.calendar=zc,Ke._longDateFormat=Fe,Ke.longDateFormat=Ac,Ke._invalidDate=Ge,Ke.invalidDate=Bc,Ke._ordinal=He,Ke.ordinal=Cc,Ke._ordinalParse=Ie,Ke.preparse=Dc,Ke.postformat=Dc,Ke._relativeTime=Je,Ke.relativeTime=Ec,Ke.pastFuture=Fc,Ke.set=y,Ke.months=ca,Ke._months=Wd,Ke.monthsShort=da,Ke._monthsShort=Xd,Ke.monthsParse=fa,Ke._monthsRegex=Zd,Ke.monthsRegex=ka,Ke._monthsShortRegex=Yd,Ke.monthsShortRegex=ja,Ke.week=Xb,Ke._week=oe,Ke.firstDayOfYear=Zb,Ke.firstDayOfWeek=Yb,Ke.weekdays=bc,Ke._weekdays=qe,Ke.weekdaysMin=dc,Ke._weekdaysMin=se,Ke.weekdaysShort=cc,Ke._weekdaysShort=re,Ke.weekdaysParse=fc,Ke._weekdaysRegex=te,Ke.weekdaysRegex=jc,Ke._weekdaysShortRegex=ue,Ke.weekdaysShortRegex=kc,Ke._weekdaysMinRegex=ve,Ke.weekdaysMinRegex=lc,Ke.isPM=sc,Ke._meridiemParse=we,Ke.meridiem=tc,E("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===r(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=u("moment.lang is deprecated. Use moment.locale instead.",E),a.langData=u("moment.langData is deprecated. Use moment.localeData instead.",H);var Le=Math.abs,Me=Yc("ms"),Ne=Yc("s"),Oe=Yc("m"),Pe=Yc("h"),Qe=Yc("d"),Re=Yc("w"),Se=Yc("M"),Te=Yc("y"),Ue=$c("milliseconds"),Ve=$c("seconds"),We=$c("minutes"),Xe=$c("hours"),Ye=$c("days"),Ze=$c("months"),$e=$c("years"),_e=Math.round,af={s:45,m:45,h:22,d:26,M:11},bf=Math.abs,cf=Oa.prototype;cf.abs=Oc,cf.add=Qc,cf.subtract=Rc,cf.as=Wc,cf.asMilliseconds=Me,cf.asSeconds=Ne,cf.asMinutes=Oe,cf.asHours=Pe,cf.asDays=Qe,cf.asWeeks=Re,cf.asMonths=Se,cf.asYears=Te,cf.valueOf=Xc,cf._bubble=Tc,cf.get=Zc,cf.milliseconds=Ue,cf.seconds=Ve,cf.minutes=We,cf.hours=Xe,cf.days=Ye,cf.weeks=_c,cf.months=Ze,cf.years=$e,cf.humanize=dd,cf.toISOString=ed,cf.toString=ed,cf.toJSON=ed,cf.locale=Bb,cf.localeData=Cb,cf.toIsoString=u("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ed),cf.lang=ne,R("X",0,0,"unix"),R("x",0,0,"valueOf"),W("x",Fd),W("X",Id),$("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),$("x",function(a,b,c){c._d=new Date(r(a))}),a.version="2.13.0",b(Ka),a.fn=De,a.min=Ma,a.max=Na,a.now=he,a.utc=h,a.unix=xc,a.months=Jc,a.isDate=d,a.locale=E,a.invalid=l,a.duration=db,a.isMoment=p,a.weekdays=Lc,a.parseZone=yc,a.localeData=H,a.isDuration=Pa,a.monthsShort=Kc,a.weekdaysMin=Nc,a.defineLocale=F,a.updateLocale=G,a.locales=I,a.weekdaysShort=Mc,a.normalizeUnits=K,a.relativeTimeThreshold=cd,a.prototype=De;var df=a;return df});


/*-----------------------*/
/* lib/moment-jalaali/moment-jalaali.js*/
/*-----------------------*/

;(function(){

/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  if (!('exports' in module) && typeof module.definition === 'function') {
    module.client = module.component = true;
    module.definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {
  moment: { exports: moment }
};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

/**
 * Define a module's exports immediately with `exports`.
 *
 * @param {String} name
 * @param {Generic} exports
 * @api private
 */

require.define = function (name, exports) {
  require.modules[name] = {
    exports: exports
  };
};

require.register("jalaali-js", function (exports, module) {
/*
  Expose functions.
*/
module.exports =
  { toJalaali: toJalaali
  , toGregorian: toGregorian
  , isValidJalaaliDate: isValidJalaaliDate
  , isLeapJalaaliYear: isLeapJalaaliYear
  , jalaaliMonthLength: jalaaliMonthLength
  , jalCal: jalCal
  , j2d: j2d
  , d2j: d2j
  , g2d: g2d
  , d2g: d2g
  }

/*
  Converts a Gregorian date to Jalaali.
*/
function toJalaali(gy, gm, gd) {
  return d2j(g2d(gy, gm, gd))
}

/*
  Converts a Jalaali date to Gregorian.
*/
function toGregorian(jy, jm, jd) {
  return d2g(j2d(jy, jm, jd))
}

/*
  Checks whether a Jalaali date is valid or not.
*/
function isValidJalaaliDate(jy, jm, jd) {
  return  jy >= -61 && jy <= 3177 &&
          jm >= 1 && jm <= 12 &&
          jd >= 1 && jd <= jalaaliMonthLength(jy, jm)
}

/*
  Is this a leap year or not?
*/
function isLeapJalaaliYear(jy) {
  return jalCal(jy).leap === 0
}

/*
  Number of days in a given month in a Jalaali year.
*/
function jalaaliMonthLength(jy, jm) {
  if (jm <= 6) return 31
  if (jm <= 11) return 30
  if (isLeapJalaaliYear(jy)) return 30
  return 29
}

/*
  This function determines if the Jalaali (Persian) year is
  leap (366-day long) or is the common year (365 days), and
  finds the day in March (Gregorian calendar) of the first
  day of the Jalaali year (jy).

  @param jy Jalaali calendar year (-61 to 3177)
  @return
    leap: number of years since the last leap year (0 to 4)
    gy: Gregorian year of the beginning of Jalaali year
    march: the March day of Farvardin the 1st (1st day of jy)
  @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
  @see: http://www.fourmilab.ch/documents/calendar/
*/
function jalCal(jy) {
  // Jalaali years starting the 33-year rule.
  var breaks =  [ -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210
                , 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178
                ]
    , bl = breaks.length
    , gy = jy + 621
    , leapJ = -14
    , jp = breaks[0]
    , jm
    , jump
    , leap
    , leapG
    , march
    , n
    , i

  if (jy < jp || jy >= breaks[bl - 1])
    throw new Error('Invalid Jalaali year ' + jy)

  // Find the limiting years for the Jalaali year jy.
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i]
    jump = jm - jp
    if (jy < jm)
      break
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4)
    jp = jm
  }
  n = jy - jp

  // Find the number of leap years from AD 621 to the beginning
  // of the current Jalaali year in the Persian calendar.
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4)
  if (mod(jump, 33) === 4 && jump - n === 4)
    leapJ += 1

  // And the same in the Gregorian calendar (until the year gy).
  leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150

  // Determine the Gregorian date of Farvardin the 1st.
  march = 20 + leapJ - leapG

  // Find how many years have passed since the last leap year.
  if (jump - n < 6)
    n = n - jump + div(jump + 4, 33) * 33
  leap = mod(mod(n + 1, 33) - 1, 4)
  if (leap === -1) {
    leap = 4
  }

  return  { leap: leap
          , gy: gy
          , march: march
          }
}

/*
  Converts a date of the Jalaali calendar to the Julian Day number.

  @param jy Jalaali year (1 to 3100)
  @param jm Jalaali month (1 to 12)
  @param jd Jalaali day (1 to 29/31)
  @return Julian Day number
*/
function j2d(jy, jm, jd) {
  var r = jalCal(jy)
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1
}

/*
  Converts the Julian Day number to a date in the Jalaali calendar.

  @param jdn Julian Day number
  @return
    jy: Jalaali year (1 to 3100)
    jm: Jalaali month (1 to 12)
    jd: Jalaali day (1 to 29/31)
*/
function d2j(jdn) {
  var gy = d2g(jdn).gy // Calculate Gregorian year (gy).
    , jy = gy - 621
    , r = jalCal(jy)
    , jdn1f = g2d(gy, 3, r.march)
    , jd
    , jm
    , k

  // Find number of days that passed since 1 Farvardin.
  k = jdn - jdn1f
  if (k >= 0) {
    if (k <= 185) {
      // The first 6 months.
      jm = 1 + div(k, 31)
      jd = mod(k, 31) + 1
      return  { jy: jy
              , jm: jm
              , jd: jd
              }
    } else {
      // The remaining months.
      k -= 186
    }
  } else {
    // Previous Jalaali year.
    jy -= 1
    k += 179
    if (r.leap === 1)
      k += 1
  }
  jm = 7 + div(k, 30)
  jd = mod(k, 30) + 1
  return  { jy: jy
          , jm: jm
          , jd: jd
          }
}

/*
  Calculates the Julian Day number from Gregorian or Julian
  calendar dates. This integer number corresponds to the noon of
  the date (i.e. 12 hours of Universal Time).
  The procedure was tested to be good since 1 March, -100100 (of both
  calendars) up to a few million years into the future.

  @param gy Calendar year (years BC numbered 0, -1, -2, ...)
  @param gm Calendar month (1 to 12)
  @param gd Calendar day of the month (1 to 28/29/30/31)
  @return Julian Day number
*/
function g2d(gy, gm, gd) {
  var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4)
      + div(153 * mod(gm + 9, 12) + 2, 5)
      + gd - 34840408
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752
  return d
}

/*
  Calculates Gregorian and Julian calendar dates from the Julian Day number
  (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
  calendars) to some millions years ahead of the present.

  @param jdn Julian Day number
  @return
    gy: Calendar year (years BC numbered 0, -1, -2, ...)
    gm: Calendar month (1 to 12)
    gd: Calendar day of the month M (1 to 28/29/30/31)
*/
function d2g(jdn) {
  var j
    , i
    , gd
    , gm
    , gy
  j = 4 * jdn + 139361631
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908
  i = div(mod(j, 1461), 4) * 5 + 308
  gd = div(mod(i, 153), 5) + 1
  gm = mod(div(i, 153), 12) + 1
  gy = div(j, 1461) - 100100 + div(8 - gm, 6)
  return  { gy: gy
          , gm: gm
          , gd: gd
          }
}

/*
  Utility helper functions.
*/

function div(a, b) {
  return ~~(a / b)
}

function mod(a, b) {
  return a - ~~(a / b) * b
}
})
require.register("moment-jalaali", function (exports, module) {

module.exports = jMoment

var moment = require('moment')
  , jalaali = require('jalaali-js')

/************************************
    Constants
************************************/

var formattingTokens = /(\[[^\[]*\])|(\\)?j(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?|)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g
  , localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g

  , parseTokenOneOrTwoDigits = /\d\d?/
  , parseTokenOneToThreeDigits = /\d{1,3}/
  , parseTokenThreeDigits = /\d{3}/
  , parseTokenFourDigits = /\d{1,4}/
  , parseTokenSixDigits = /[+\-]?\d{1,6}/
  , parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i
  , parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i
  , parseTokenT = /T/i
  , parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/

  , unitAliases =
    { jm: 'jmonth'
    , jmonths: 'jmonth'
    , jy: 'jyear'
    , jyears: 'jyear'
    }

  , formatFunctions = {}

  , ordinalizeTokens = 'DDD w M D'.split(' ')
  , paddedTokens = 'M D w'.split(' ')

  , formatTokenFunctions =
    { jM: function () {
        return this.jMonth() + 1
      }
    , jMMM: function (format) {
        return this.localeData().jMonthsShort(this, format)
      }
    , jMMMM: function (format) {
        return this.localeData().jMonths(this, format)
      }
    , jD: function () {
        return this.jDate()
      }
    , jDDD: function () {
        return this.jDayOfYear()
      }
    , jw: function () {
        return this.jWeek()
      }
    , jYY: function () {
        return leftZeroFill(this.jYear() % 100, 2)
      }
    , jYYYY: function () {
        return leftZeroFill(this.jYear(), 4)
      }
    , jYYYYY: function () {
        return leftZeroFill(this.jYear(), 5)
      }
    , jgg: function () {
        return leftZeroFill(this.jWeekYear() % 100, 2)
      }
    , jgggg: function () {
        return this.jWeekYear()
      }
    , jggggg: function () {
        return leftZeroFill(this.jWeekYear(), 5)
      }
    }

function padToken(func, count) {
  return function (a) {
    return leftZeroFill(func.call(this, a), count)
  }
}
function ordinalizeToken(func, period) {
  return function (a) {
    return this.localeData().ordinal(func.call(this, a), period)
  }
}

(function () {
  var i
  while (ordinalizeTokens.length) {
    i = ordinalizeTokens.pop()
    formatTokenFunctions['j' + i + 'o'] = ordinalizeToken(formatTokenFunctions['j' + i], i)
  }
  while (paddedTokens.length) {
    i = paddedTokens.pop()
    formatTokenFunctions['j' + i + i] = padToken(formatTokenFunctions['j' + i], 2)
  }
  formatTokenFunctions.jDDDD = padToken(formatTokenFunctions.jDDD, 3)
}())

/************************************
    Helpers
************************************/

function extend(a, b) {
  var key
  for (key in b)
    if (b.hasOwnProperty(key))
      a[key] = b[key]
  return a
}

function leftZeroFill(number, targetLength) {
  var output = number + ''
  while (output.length < targetLength)
    output = '0' + output
  return output
}

function isArray(input) {
  return Object.prototype.toString.call(input) === '[object Array]'
}

// function compareArrays(array1, array2) {
//   var len = Math.min(array1.length, array2.length)
//     , lengthDiff = Math.abs(array1.length - array2.length)
//     , diffs = 0
//     , i
//   for (i = 0; i < len; i += 1)
//     if (~~array1[i] !== ~~array2[i])
//       diffs += 1
//   return diffs + lengthDiff
// }

function normalizeUnits(units) {
  if (units) {
    var lowered = units.toLowerCase()
    units = unitAliases[lowered] || lowered
  }
  return units
}

function setDate(m, year, month, date) {
  var d = m._d
  if (m._isUTC) {
    /*eslint-disable new-cap*/
    m._d = new Date(Date.UTC(year, month, date,
        d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()))
    /*eslint-enable new-cap*/
  } else {
    m._d = new Date(year, month, date,
        d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds())
  }
}

function objectCreate(parent) {
  function F() {}
  F.prototype = parent
  return new F()
}

function getPrototypeOf(object) {
  if (Object.getPrototypeOf)
    return Object.getPrototypeOf(object)
  else if (''.__proto__)
    return object.__proto__
  else
    return object.constructor.prototype
}

/************************************
    Languages
************************************/
extend(getPrototypeOf(moment.localeData()),
  { _jMonths: [ 'Farvardin'
              , 'Ordibehesht'
              , 'Khordaad'
              , 'Tir'
              , 'Amordaad'
              , 'Shahrivar'
              , 'Mehr'
              , 'Aabaan'
              , 'Aazar'
              , 'Dey'
              , 'Bahman'
              , 'Esfand'
              ]
  , jMonths: function (m) {
      return this._jMonths[m.jMonth()]
    }

  , _jMonthsShort:  [ 'Far'
                    , 'Ord'
                    , 'Kho'
                    , 'Tir'
                    , 'Amo'
                    , 'Sha'
                    , 'Meh'
                    , 'Aab'
                    , 'Aaz'
                    , 'Dey'
                    , 'Bah'
                    , 'Esf'
                    ]
  , jMonthsShort: function (m) {
      return this._jMonthsShort[m.jMonth()]
    }

  , jMonthsParse: function (monthName) {
      var i
        , mom
        , regex
      if (!this._jMonthsParse)
        this._jMonthsParse = []
      for (i = 0; i < 12; i += 1) {
        // Make the regex if we don't have it already.
        if (!this._jMonthsParse[i]) {
          mom = jMoment([2000, (2 + i) % 12, 25])
          regex = '^' + this.jMonths(mom, '') + '|^' + this.jMonthsShort(mom, '')
          this._jMonthsParse[i] = new RegExp(regex.replace('.', ''), 'i')
        }
        // Test the regex.
        if (this._jMonthsParse[i].test(monthName))
          return i
      }
    }
  }
)

/************************************
    Formatting
************************************/

function makeFormatFunction(format) {
  var array = format.match(formattingTokens)
    , length = array.length
    , i

  for (i = 0; i < length; i += 1)
    if (formatTokenFunctions[array[i]])
      array[i] = formatTokenFunctions[array[i]]

  return function (mom) {
    var output = ''
    for (i = 0; i < length; i += 1)
      output += array[i] instanceof Function ? '[' + array[i].call(mom, format) + ']' : array[i]
    return output
  }
}

/************************************
    Parsing
************************************/

function getParseRegexForToken(token, config) {
  switch (token) {
  case 'jDDDD':
    return parseTokenThreeDigits
  case 'jYYYY':
    return parseTokenFourDigits
  case 'jYYYYY':
    return parseTokenSixDigits
  case 'jDDD':
    return parseTokenOneToThreeDigits
  case 'jMMM':
  case 'jMMMM':
    return parseTokenWord
  case 'jMM':
  case 'jDD':
  case 'jYY':
  case 'jM':
  case 'jD':
    return parseTokenOneOrTwoDigits
  case 'DDDD':
    return parseTokenThreeDigits
  case 'YYYY':
    return parseTokenFourDigits
  case 'YYYYY':
    return parseTokenSixDigits
  case 'S':
  case 'SS':
  case 'SSS':
  case 'DDD':
    return parseTokenOneToThreeDigits
  case 'MMM':
  case 'MMMM':
  case 'dd':
  case 'ddd':
  case 'dddd':
    return parseTokenWord
  case 'a':
  case 'A':
    return moment.localeData(config._l)._meridiemParse
  case 'X':
    return parseTokenTimestampMs
  case 'Z':
  case 'ZZ':
    return parseTokenTimezone
  case 'T':
    return parseTokenT
  case 'MM':
  case 'DD':
  case 'YY':
  case 'HH':
  case 'hh':
  case 'mm':
  case 'ss':
  case 'M':
  case 'D':
  case 'd':
  case 'H':
  case 'h':
  case 'm':
  case 's':
    return parseTokenOneOrTwoDigits
  default:
    return new RegExp(token.replace('\\', ''))
  }
}

function addTimeToArrayFromToken(token, input, config) {
  var a
    , datePartArray = config._a

  switch (token) {
  case 'jM':
  case 'jMM':
    datePartArray[1] = input == null ? 0 : ~~input - 1
    break
  case 'jMMM':
  case 'jMMMM':
    a = moment.localeData(config._l).jMonthsParse(input)
    if (a != null)
      datePartArray[1] = a
    else
      config._isValid = false
    break
  case 'jD':
  case 'jDD':
  case 'jDDD':
  case 'jDDDD':
    if (input != null)
      datePartArray[2] = ~~input
    break
  case 'jYY':
    datePartArray[0] = ~~input + (~~input > 47 ? 1300 : 1400)
    break
  case 'jYYYY':
  case 'jYYYYY':
    datePartArray[0] = ~~input
  }
  if (input == null)
    config._isValid = false
}

function dateFromArray(config) {
  var g
    , j
    , jy = config._a[0]
    , jm = config._a[1]
    , jd = config._a[2]

  if ((jy == null) && (jm == null) && (jd == null))
    return [0, 0, 1]
  jy = jy != null ? jy : 0
  jm = jm != null ? jm : 0
  jd = jd != null ? jd : 1
  if (jd < 1 || jd > jMoment.jDaysInMonth(jy, jm) || jm < 0 || jm > 11)
    config._isValid = false
  g = toGregorian(jy, jm, jd)
  j = toJalaali(g.gy, g.gm, g.gd)
  config._jDiff = 0
  if (~~j.jy !== jy)
    config._jDiff += 1
  if (~~j.jm !== jm)
    config._jDiff += 1
  if (~~j.jd !== jd)
    config._jDiff += 1
  return [g.gy, g.gm, g.gd]
}

function makeDateFromStringAndFormat(config) {
  var tokens = config._f.match(formattingTokens)
    , string = config._i + ''
    , len = tokens.length
    , i
    , token
    , parsedInput

  config._a = []

  for (i = 0; i < len; i += 1) {
    token = tokens[i]
    parsedInput = (getParseRegexForToken(token, config).exec(string) || [])[0]
    if (parsedInput)
      string = string.slice(string.indexOf(parsedInput) + parsedInput.length)
    if (formatTokenFunctions[token])
      addTimeToArrayFromToken(token, parsedInput, config)
  }
  if (string)
    config._il = string
  return dateFromArray(config)
}

function makeDateFromStringAndArray(config, utc) {
  var len = config._f.length
    , i
    , format
    , tempMoment
    , bestMoment
    , currentScore
    , scoreToBeat

  if (len === 0) {
    return makeMoment(new Date(NaN))
  }

  for (i = 0; i < len; i += 1) {
    format = config._f[i]
    currentScore = 0
    tempMoment = makeMoment(config._i, format, config._l, config._strict, utc)

    if (!tempMoment.isValid()) continue

    // currentScore = compareArrays(tempMoment._a, tempMoment.toArray())
    currentScore += tempMoment._jDiff
    if (tempMoment._il)
      currentScore += tempMoment._il.length
    if (scoreToBeat == null || currentScore < scoreToBeat) {
      scoreToBeat = currentScore
      bestMoment = tempMoment
    }
  }

  return bestMoment
}

function removeParsedTokens(config) {
  var string = config._i + ''
    , input = ''
    , format = ''
    , array = config._f.match(formattingTokens)
    , len = array.length
    , i
    , match
    , parsed

  for (i = 0; i < len; i += 1) {
    match = array[i]
    parsed = (getParseRegexForToken(match, config).exec(string) || [])[0]
    if (parsed)
      string = string.slice(string.indexOf(parsed) + parsed.length)
    if (!(formatTokenFunctions[match] instanceof Function)) {
      format += match
      if (parsed)
        input += parsed
    }
  }
  config._i = input
  config._f = format
}

/************************************
    Week of Year
************************************/

function jWeekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
  var end = firstDayOfWeekOfYear - firstDayOfWeek
    , daysToDayOfWeek = firstDayOfWeekOfYear - mom.day()
    , adjustedMoment

  if (daysToDayOfWeek > end) {
    daysToDayOfWeek -= 7
  }
  if (daysToDayOfWeek < end - 7) {
    daysToDayOfWeek += 7
  }
  adjustedMoment = jMoment(mom).add(daysToDayOfWeek, 'd')
  return  { week: Math.ceil(adjustedMoment.jDayOfYear() / 7)
          , year: adjustedMoment.jYear()
          }
}

/************************************
    Top Level Functions
************************************/

function makeMoment(input, format, lang, strict, utc) {
  if (typeof lang === 'boolean') {
    utc = strict
    strict = lang
    lang = undefined
  }
  var config =
      { _i: input
      , _f: format
      , _l: lang
      , _strict: strict
      , _isUTC: utc
      }
    , date
    , m
    , jm
    , origInput = input
    , origFormat = format
  if (format) {
    if (isArray(format)) {
      return makeDateFromStringAndArray(config, utc)
    } else {
      date = makeDateFromStringAndFormat(config)
      removeParsedTokens(config)
      format = 'YYYY-MM-DD-' + config._f
      input = leftZeroFill(date[0], 4) + '-'
            + leftZeroFill(date[1] + 1, 2) + '-'
            + leftZeroFill(date[2], 2) + '-'
            + config._i
    }
  }
  if (utc)
    m = moment.utc(input, format, lang, strict)
  else
    m = moment(input, format, lang, strict)
  if (config._isValid === false)
    m._isValid = false
  m._jDiff = config._jDiff || 0
  jm = objectCreate(jMoment.fn)
  extend(jm, m)
  if (strict && jm.isValid()) {
    jm._isValid = jm.format(origFormat) === origInput
  }
  return jm
}

function jMoment(input, format, lang, strict) {
  return makeMoment(input, format, lang, strict, false)
}

extend(jMoment, moment)
jMoment.fn = objectCreate(moment.fn)

jMoment.utc = function (input, format, lang, strict) {
  return makeMoment(input, format, lang, strict, true)
}

jMoment.unix = function (input) {
  return makeMoment(input * 1000)
}

/************************************
    jMoment Prototype
************************************/

jMoment.fn.format = function (format) {
  var i
    , replace
    , me = this

  if (format) {
    i = 5
    replace = function (input) {
      return me.localeData().longDateFormat(input) || input
    }
    while (i > 0 && localFormattingTokens.test(format)) {
      i -= 1
      format = format.replace(localFormattingTokens, replace)
    }
    if (!formatFunctions[format]) {
      formatFunctions[format] = makeFormatFunction(format)
    }
    format = formatFunctions[format](this)
  }
  return moment.fn.format.call(this, format)
}

jMoment.fn.jYear = function (input) {
  var lastDay
    , j
    , g
  if (typeof input === 'number') {
    j = toJalaali(this.year(), this.month(), this.date())
    lastDay = Math.min(j.jd, jMoment.jDaysInMonth(input, j.jm))
    g = toGregorian(input, j.jm, lastDay)
    setDate(this, g.gy, g.gm, g.gd)
    moment.updateOffset(this)
    return this
  } else {
    return toJalaali(this.year(), this.month(), this.date()).jy
  }
}

jMoment.fn.jMonth = function (input) {
  var lastDay
    , j
    , g
  if (input != null) {
    if (typeof input === 'string') {
      input = this.lang().jMonthsParse(input)
      if (typeof input !== 'number')
        return this
    }
    j = toJalaali(this.year(), this.month(), this.date())
    lastDay = Math.min(j.jd, jMoment.jDaysInMonth(j.jy, input))
    this.jYear(j.jy + div(input, 12))
    input = mod(input, 12)
    if (input < 0) {
      input += 12
      this.jYear(this.jYear() - 1)
    }
    g = toGregorian(this.jYear(), input, lastDay)
    setDate(this, g.gy, g.gm, g.gd)
    moment.updateOffset(this)
    return this
  } else {
    return toJalaali(this.year(), this.month(), this.date()).jm
  }
}

jMoment.fn.jDate = function (input) {
  var j
    , g
  if (typeof input === 'number') {
    j = toJalaali(this.year(), this.month(), this.date())
    g = toGregorian(j.jy, j.jm, input)
    setDate(this, g.gy, g.gm, g.gd)
    moment.updateOffset(this)
    return this
  } else {
    return toJalaali(this.year(), this.month(), this.date()).jd
  }
}

jMoment.fn.jDayOfYear = function (input) {
  var dayOfYear = Math.round((jMoment(this).startOf('day') - jMoment(this).startOf('jYear')) / 864e5) + 1
  return input == null ? dayOfYear : this.add(input - dayOfYear, 'd')
}

jMoment.fn.jWeek = function (input) {
  var week = jWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).week
  return input == null ? week : this.add((input - week) * 7, 'd')
}

jMoment.fn.jWeekYear = function (input) {
  var year = jWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year
  return input == null ? year : this.add(input - year, 'y')
}

jMoment.fn.add = function (val, units) {
  var temp
  if (units !== null && !isNaN(+units)) {
    temp = val
    val = units
    units = temp
  }
  units = normalizeUnits(units)
  if (units === 'jyear') {
    this.jYear(this.jYear() + val)
  } else if (units === 'jmonth') {
    this.jMonth(this.jMonth() + val)
  } else {
    moment.fn.add.call(this, val, units)
  }
  return this
}

jMoment.fn.subtract = function (val, units) {
  var temp
  if (units !== null && !isNaN(+units)) {
    temp = val
    val = units
    units = temp
  }
  units = normalizeUnits(units)
  if (units === 'jyear') {
    this.jYear(this.jYear() - val)
  } else if (units === 'jmonth') {
    this.jMonth(this.jMonth() - val)
  } else {
    moment.fn.subtract.call(this, val, units)
  }
  return this
}

jMoment.fn.startOf = function (units) {
  units = normalizeUnits(units)
  if (units === 'jyear' || units === 'jmonth') {
    if (units === 'jyear') {
      this.jMonth(0)
    }
    this.jDate(1)
    this.hours(0)
    this.minutes(0)
    this.seconds(0)
    this.milliseconds(0)
    return this
  } else {
    return moment.fn.startOf.call(this, units)
  }
}

jMoment.fn.endOf = function (units) {
  units = normalizeUnits(units)
  if (units === undefined || units === 'milisecond') {
    return this
  }
  return this.startOf(units).add(1, (units === 'isoweek' ? 'week' : units)).subtract(1, 'ms')
}

jMoment.fn.isSame = function (other, units) {
  units = normalizeUnits(units)
  if (units === 'jyear' || units === 'jmonth') {
    return moment.fn.isSame.call(this.startOf(units), other.startOf(units))
  }
  return moment.fn.isSame.call(this, other, units)
}

jMoment.fn.clone = function () {
  return jMoment(this)
}

jMoment.fn.jYears = jMoment.fn.jYear
jMoment.fn.jMonths = jMoment.fn.jMonth
jMoment.fn.jDates = jMoment.fn.jDate
jMoment.fn.jWeeks = jMoment.fn.jWeek

/************************************
    jMoment Statics
************************************/

jMoment.jDaysInMonth = function (year, month) {
  year += div(month, 12)
  month = mod(month, 12)
  if (month < 0) {
    month += 12
    year -= 1
  }
  if (month < 6) {
    return 31
  } else if (month < 11) {
    return 30
  } else if (jMoment.jIsLeapYear(year)) {
    return 30
  } else {
    return 29
  }
}

jMoment.jIsLeapYear = jalaali.isLeapJalaaliYear

jMoment.loadPersian = function () {
  moment.locale('fa'
  , { months: ('ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر').split('_')
    , monthsShort: ('ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر').split('_')
    , weekdays: ('یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_آدینه_شنبه').split('_')
    , weekdaysShort: ('یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_آدینه_شنبه').split('_')
    , weekdaysMin: 'ی_د_س_چ_پ_آ_ش'.split('_')
    , longDateFormat:
      { LT: 'HH:mm'
      , L: 'jYYYY/jMM/jDD'
      , LL: 'jD jMMMM jYYYY'
      , LLL: 'jD jMMMM jYYYY LT'
      , LLLL: 'dddd، jD jMMMM jYYYY LT'
      }
    , calendar:
      { sameDay: '[امروز ساعت] LT'
      , nextDay: '[فردا ساعت] LT'
      , nextWeek: 'dddd [ساعت] LT'
      , lastDay: '[دیروز ساعت] LT'
      , lastWeek: 'dddd [ی پیش ساعت] LT'
      , sameElse: 'L'
      }
    , relativeTime:
      { future: 'در %s'
      , past: '%s پیش'
      , s: 'چند ثانیه'
      , m: '1 دقیقه'
      , mm: '%d دقیقه'
      , h: '1 ساعت'
      , hh: '%d ساعت'
      , d: '1 روز'
      , dd: '%d روز'
      , M: '1 ماه'
      , MM: '%d ماه'
      , y: '1 سال'
      , yy: '%d سال'
      }
    , ordinal: '%dم'
    , week:
      { dow: 6 // Saturday is the first day of the week.
      , doy: 12 // The week that contains Jan 1st is the first week of the year.
      }
    , meridiem: function (hour) {
        return hour < 12 ? 'ق.ظ' : 'ب.ظ'
      }
    , jMonths: ('فروردین_اردیبهشت_خرداد_تیر_امرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند').split('_')
    , jMonthsShort: 'فرو_ارد_خرد_تیر_امر_شهر_مهر_آبا_آذر_دی_بهم_اسف'.split('_')
    }
  )
}

jMoment.jConvert =  { toJalaali: toJalaali
                    , toGregorian: toGregorian
                    }

/************************************
    Jalaali Conversion
************************************/

function toJalaali(gy, gm, gd) {
  var j = jalaali.toJalaali(gy, gm + 1, gd)
  j.jm -= 1
  return j
}

function toGregorian(jy, jm, jd) {
  var g = jalaali.toGregorian(jy, jm + 1, jd)
  g.gm -= 1
  return g
}

/*
  Utility helper functions.
*/

function div(a, b) {
  return ~~(a / b)
}

function mod(a, b) {
  return a - ~~(a / b) * b
}
});

if (typeof exports == "object") {
  module.exports = require("moment-jalaali");
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return require("moment-jalaali"); });
} else {
  this["moment"] = require("moment-jalaali");
}
})();





/*-----------------------*/
/* lib/ng-jalaali-flat-datepicker/ng-jalaali-flat-datepicker.nai.js*/
/*-----------------------*/
(function() {

    'use strict';

    /**
     * @desc Datepicker directive
     * @example <ng-datepicker></ng-datepicker>
     */

    ngJalaaliFlatDatepickerDirective.$inject = ["$templateCache", "$compile", "$document", "datesCalculator"];
    angular
        .module('ngJalaaliFlatDatepicker', [])
        .directive('ngJalaaliFlatDatepicker', ngJalaaliFlatDatepickerDirective);

    function ngJalaaliFlatDatepickerDirective($templateCache, $compile, $document, datesCalculator) {
        var parseConfig = function(config) {
          var temp = angular.fromJson(config);
          if (typeof(temp.minDate) == 'undefined') {
            temp.minDate = moment.utc(temp.minDate);
          }
          if (typeof(temp.maxDate) == 'undefined') {
            temp.maxDate = moment.utc(temp.maxDate);
          }
          return temp;
        };

        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                config: '=?datepickerConfig',
                gPickedDate: '=?gregorianPickedDate',
                gFormattedPickedDate: '=?gregorianFormattedPickedDate'
            },
            link: function(scope, element, attrs, ngModel) {
                moment.loadPersian();
                var template     = angular.element($templateCache.get('datepicker.html'));
                var dateSelected = '';
                var today        = moment.utc();

                // Default options
                var defaultConfig = {
                    allowFuture: true,
                    dateFormat: null,
                    gregorianDateFormat: null,
                    dropDownYears: 10,
                    minDate: null,
                    maxDate: null
                };

                /*
                * returns start year based on configuration
                */
                var getStartYear = function() {
                  if (typeof(scope.config.minDate) == 'undefined') {
                    return scope.config.minDate.format('YYYY');
                  }
                  if (scope.config.allowFuture) {
                    return moment.utc().subtract('5', 'years').format('YYYY');
                  }
                  return moment.utc().subtract('10', 'years').format('YYYY');
                };


                // Apply and init options
                scope.config = angular.extend(defaultConfig, scope.config);
                if (angular.isDefined(scope.config.minDate)) moment.utc(scope.config.minDate).subtract(1, 'day');
                if (angular.isDefined(scope.config.maxDate)) moment.utc(scope.config.maxDate).add(1, 'day');
                if (!angular.isDefined(scope.config.gregorianDateFormat)) scope.config.gregorianDateFormat = scope.config.dateFormat.replace(/j/g, "");

                // Data
                scope.calendarCursor  = today;
                scope.currentWeeks    = [];
                scope.daysNameList    = datesCalculator.getDaysNames();
                scope.monthsList      = moment.localeData()._jMonths;
                scope.yearsList       = datesCalculator.getYearsList(getStartYear(), scope.config.dropDownYears);

                // Display
                scope.pickerDisplayed = false;

                scope.$watch(function(){ return ngModel.$modelValue; }, function(value){
                    if (value) {
                        dateSelected = scope.calendarCursor = moment.utc(value, scope.config.dateFormat);
                    }
                });

                scope.$watch('calendarCursor', function(val){
                  //scope.$apply(function() {
                    scope.currentWeeks = getWeeks(val);
                  //});

                });

                /**
                 * ClickOutside, handle all clicks outside the DatePicker when visible
                 */
                element.bind('click', function(e) {
                    scope.$apply(function(){
                        scope.pickerDisplayed = true;
                        $document.on('click', onDocumentClick);
                    });
                });

                function onDocumentClick(e) {
                    if (template !== e.target && !template[0].contains(e.target) && e.target !== element[0]) {
                        $document.off('click', onDocumentClick);
                        scope.$apply(function () {
                            scope.calendarCursor = dateSelected ? dateSelected : today;
                            scope.pickerDisplayed = scope.showMonthsList = scope.showYearsList = false;
                        });
                     }
                }

                init();

                /**
                 * Display the previous month in the datepicker
                 * @return {}
                 */
                scope.prevMonth = function() {
                    scope.calendarCursor = moment(scope.calendarCursor).subtract(1, 'jMonths');
                };

                /**
                 * Display the next month in the datepicker
                 * @return {}
                 */
                scope.nextMonth = function nextMonth() {
                    scope.calendarCursor = moment(scope.calendarCursor).add(1, 'jMonths');
                };

                /**
                 * Select a month and display it in the datepicker
                 * @param  {string} month The month selected in the select element
                 * @return {}
                 */
                scope.selectMonth = function selectMonth(month) {
                    scope.showMonthsList = false;
                    scope.calendarCursor = moment(scope.calendarCursor).jMonth(month);
                };

                /**
                 * Select a year and display it in the datepicker depending on the current month
                 * @param  {string} year The year selected in the select element
                 * @return {}
                 */
                scope.selectYear = function selectYear(year) {
                    scope.showYearsList = false;
                    scope.calendarCursor = moment(scope.calendarCursor).jYear(parseInt(year));
                };

                /**
                 * Select a day
                 * @param  {[type]} day [description]
                 * @return {[type]}     [description]
                 */
                scope.selectDay = function(day) {
                    if (day.isSelectable && !day.isFuture || (scope.config.allowFuture && day.isFuture)) {
                        resetSelectedDays();
                        day.isSelected = true;
                        ngModel.$setViewValue(moment.utc(day.date).format(scope.config.dateFormat));
                        ngModel.$render();
                        scope.gPickedDate = moment.utc(day.date);
                        scope.gFormattedPickedDate = moment.utc(day.date).format(scope.config.gregorianDateFormat);
                        scope.pickerDisplayed = false;
                    }
                };

                /**
                 * Init the directive
                 * @return {}
                 */
                function init() {

                    element.wrap('<div class="ng-jalaali-flat-datepicker-wrapper"></div>');

                    $compile(template)(scope);
                    element.after(template);

                    if (angular.isDefined(ngModel.$modelValue) && moment.isDate(ngModel.$modelValue)) {
                        scope.calendarCursor = ngModel.$modelValue;
                    }
                }

                /**
                 * Get all weeks needed to display a month on the Datepicker
                 * @return {array} list of weeks objects
                 */
                function getWeeks (date) {

                    var weeks = [];
                    date = moment.utc(date);
                    var firstDayOfMonth = moment.utc(date).jDate(1);
                    var lastDayOfMonth  = moment.utc(date).jDate(moment.jDaysInMonth(moment(date).jYear, moment(date).jMonth()));

                    var startDay = moment.utc(firstDayOfMonth);
                    var endDay   = moment.utc(lastDayOfMonth);
                    // NB: We use weekday() to get a locale aware weekday
                    startDay = firstDayOfMonth.weekday() === 0 ? startDay : startDay.weekday(0);
                    endDay   = lastDayOfMonth.weekday()  === 6 ? endDay   : endDay.weekday(6);

                    var currentWeek = [];

                    for (var start = moment.utc(startDay.toDate()); start.isBefore(moment.utc(endDay).add(1, 'days')); start.add(1, 'days')) {
                        var afterMinDate  = !scope.config.minDate || start.isAfter(scope.config.minDate, 'day');
                        var beforeMaxDate = !scope.config.maxDate || start.isBefore(scope.config.maxDate, 'day');
                        var isFuture      = start.isAfter(today);
                        var beforeFuture  = scope.config.allowFuture || !isFuture;
                        var tempStart = moment.utc(start.toDate()); //there's a bug in isSame method below
                        var tempStart2 = moment.utc(start.toDate()); //there's a bug in isSame method below
                        var day = {
                            date: moment(start).toDate(),
                            jDate: moment(start).format('jDD'),
                            isToday: start.isSame(today, 'day'),
                            isInMonth: tempStart.isSame(firstDayOfMonth, 'jmonth'),
                            isSelected: tempStart2.isSame(dateSelected, 'day'),
                            isSelectable: afterMinDate && beforeMaxDate && beforeFuture
                        };
                        currentWeek.push(day);

                        if (start.weekday() === 6 || start === endDay) {
                            weeks.push(currentWeek);
                            currentWeek = [];
                        }
                    }

                    return weeks;
                }

                /**
                 * Reset all selected days
                 */
                function resetSelectedDays () {
                    scope.currentWeeks.forEach(function(week, wIndex){
                        week.forEach(function(day, dIndex){
                            scope.currentWeeks[wIndex][dIndex].isSelected = false;
                        });
                    });
                }
            }
        };
    }

})();

(function(){

    'use strict';

    /**
     * @desc Dates calculator factory
     */

     angular
         .module('ngJalaaliFlatDatepicker')
         .factory('datesCalculator', datesCalculator);

    function datesCalculator () {

        /**
         * List all years for the select
         * @param {Integer} start year eg. 2005
         * @param {Integer} total number of years to be appear in the drop down
         * @return {Array<integer>} years list
         */
        function getYearsList(startYear, dropDownYears) {
            var yearsList = [];
            for (var i = startYear; i <= parseInt(startYear) + parseInt(dropDownYears); i++) {
                yearsList.push(moment.utc(i.toString(), 'YYYY').format('jYYYY'));
            }
            return yearsList;
        }

        /**
         * List all days name in the current locale
         * @return {[type]} [description]
         */
        function getDaysNames () {
            var daysNameList = [];
            for (var i = 0; i < 7 ; i++) {
                daysNameList.push(moment().weekday(i).format('dd'));
            }
            return daysNameList;
        }

        return {
            getYearsList: getYearsList,
            getDaysNames: getDaysNames
        };
    }

})();

angular.module("ngJalaaliFlatDatepicker").run(["$templateCache", function($templateCache) {$templateCache.put("datepicker.html","<div class=\"ng-jalaali-flat-datepicker\" ng-show=\"pickerDisplayed\">\n    <div class=\"ng-jalaali-flat-datepicker-table-header-bckgrnd\"></div>\n    <table>\n        <caption>\n            <div class=\"ng-jalaali-flat-datepicker-header-wrapper\">\n                <span class=\"ng-jalaali-flat-datepicker-arrow ng-jalaali-flat-datepicker-arrow-left\" ng-click=\"nextMonth()\">\n                    <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"50\" y=\"50\" viewBox=\"0 0 100 100\" xml:space=\"preserve\">\n                        <polygon points=\"64.8,36.2 35.2,6.5 22.3,19.4 51.9,49.1 22.3,78.8 35.2,91.7 77.7,49.1\" />\n                    </svg>\n                </span>\n                <div class=\"ng-jalaali-flat-datepicker-header-year\">\n                    <div class=\"ng-jalaali-flat-datepicker-custom-select-box\" outside-click=\"showMonthsList = false\">\n                        <span class=\"ng-jalaali-flat-datepicker-custom-select-title ng-jalaali-flat-datepicker-month-name\" ng-click=\"showMonthsList = !showMonthsList; showYearsList = false\" ng-class=\"{selected: showMonthsList }\">{{ calendarCursor.isValid() ? calendarCursor.format(\'jMMMM\') : \"\" }}</span>\n                        <div class=\"ng-jalaali-flat-datepicker-custom-select\" ng-show=\"showMonthsList\">\n                            <span ng-repeat=\"monthName in monthsList\" ng-click=\"selectMonth(monthName); showMonthsList = false\">{{ monthName }}</span>\n                        </div>\n                    </div>\n                    <div class=\"ng-jalaali-flat-datepicker-custom-select-box\" outside-click=\"showYearsList = false\">\n                        <span class=\"ng-jalaali-flat-datepicker-custom-select-title\" ng-click=\"showYearsList = !showYearsList; showMonthsList = false\" ng-class=\"{selected: showYearsList }\">{{ calendarCursor.isValid() ? calendarCursor.format(\'jYYYY\') : \"\" }}</span>\n                        <div class=\"ng-jalaali-flat-datepicker-custom-select\" ng-show=\"showYearsList\">\n                            <span ng-repeat=\"yearNumber in yearsList\" ng-click=\"selectYear(yearNumber)\">{{ yearNumber }}</span>\n                        </div>\n                    </div>\n                </div>\n                <span class=\"ng-jalaali-flat-datepicker-arrow ng-jalaali-flat-datepicker-arrow-right\" ng-click=\"prevMonth()\">\n                    <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"50\" y=\"50\" viewBox=\"0 0 100 100\" xml:space=\"preserve\">\n                        <polygon points=\"64.8,36.2 35.2,6.5 22.3,19.4 51.9,49.1 22.3,78.8 35.2,91.7 77.7,49.1\" />\n                    </svg>\n                </span>\n            </div>\n        </caption>\n        <tbody>\n            <tr class=\"days-head\">\n                <td class=\"day-head\" ng-repeat=\"dayName in daysNameList\">{{ dayName }}</td>\n            </tr>\n            <tr class=\"days\" ng-repeat=\"week in currentWeeks\">\n                <td ng-repeat=\"day in week\" ng-click=\"selectDay(day)\" class=\"day-item\" ng-class=\"{ \'isToday\': day.isToday, \'isInMonth\': day.isInMonth, \'isDisabled\': !day.isSelectable, \'isSelected\': day.isSelected }\">{{ day.jDate }}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n");}]);


/*-----------------------*/
/* lib/selectize/selectize.min.js*/
/*-----------------------*/
/*! selectize.js - v0.12.1 | https://github.com/brianreavis/selectize.js | Apache License (v2) */
!function(a,b){"function"==typeof define&&define.amd?define("sifter",b):"object"==typeof exports?module.exports=b():a.Sifter=b()}(this,function(){var a=function(a,b){this.items=a,this.settings=b||{diacritics:!0}};a.prototype.tokenize=function(a){if(a=d(String(a||"").toLowerCase()),!a||!a.length)return[];var b,c,f,h,i=[],j=a.split(/ +/);for(b=0,c=j.length;c>b;b++){if(f=e(j[b]),this.settings.diacritics)for(h in g)g.hasOwnProperty(h)&&(f=f.replace(new RegExp(h,"g"),g[h]));i.push({string:j[b],regex:new RegExp(f,"i")})}return i},a.prototype.iterator=function(a,b){var c;c=f(a)?Array.prototype.forEach||function(a){for(var b=0,c=this.length;c>b;b++)a(this[b],b,this)}:function(a){for(var b in this)this.hasOwnProperty(b)&&a(this[b],b,this)},c.apply(a,[b])},a.prototype.getScoreFunction=function(a,b){var c,d,e,f;c=this,a=c.prepareSearch(a,b),e=a.tokens,d=a.options.fields,f=e.length;var g=function(a,b){var c,d;return a?(a=String(a||""),d=a.search(b.regex),-1===d?0:(c=b.string.length/a.length,0===d&&(c+=.5),c)):0},h=function(){var a=d.length;return a?1===a?function(a,b){return g(b[d[0]],a)}:function(b,c){for(var e=0,f=0;a>e;e++)f+=g(c[d[e]],b);return f/a}:function(){return 0}}();return f?1===f?function(a){return h(e[0],a)}:"and"===a.options.conjunction?function(a){for(var b,c=0,d=0;f>c;c++){if(b=h(e[c],a),0>=b)return 0;d+=b}return d/f}:function(a){for(var b=0,c=0;f>b;b++)c+=h(e[b],a);return c/f}:function(){return 0}},a.prototype.getSortFunction=function(a,c){var d,e,f,g,h,i,j,k,l,m,n;if(f=this,a=f.prepareSearch(a,c),n=!a.query&&c.sort_empty||c.sort,l=function(a,b){return"$score"===a?b.score:f.items[b.id][a]},h=[],n)for(d=0,e=n.length;e>d;d++)(a.query||"$score"!==n[d].field)&&h.push(n[d]);if(a.query){for(m=!0,d=0,e=h.length;e>d;d++)if("$score"===h[d].field){m=!1;break}m&&h.unshift({field:"$score",direction:"desc"})}else for(d=0,e=h.length;e>d;d++)if("$score"===h[d].field){h.splice(d,1);break}for(k=[],d=0,e=h.length;e>d;d++)k.push("desc"===h[d].direction?-1:1);return i=h.length,i?1===i?(g=h[0].field,j=k[0],function(a,c){return j*b(l(g,a),l(g,c))}):function(a,c){var d,e,f;for(d=0;i>d;d++)if(f=h[d].field,e=k[d]*b(l(f,a),l(f,c)))return e;return 0}:null},a.prototype.prepareSearch=function(a,b){if("object"==typeof a)return a;b=c({},b);var d=b.fields,e=b.sort,g=b.sort_empty;return d&&!f(d)&&(b.fields=[d]),e&&!f(e)&&(b.sort=[e]),g&&!f(g)&&(b.sort_empty=[g]),{options:b,query:String(a||"").toLowerCase(),tokens:this.tokenize(a),total:0,items:[]}},a.prototype.search=function(a,b){var c,d,e,f,g=this;return d=this.prepareSearch(a,b),b=d.options,a=d.query,f=b.score||g.getScoreFunction(d),a.length?g.iterator(g.items,function(a,e){c=f(a),(b.filter===!1||c>0)&&d.items.push({score:c,id:e})}):g.iterator(g.items,function(a,b){d.items.push({score:1,id:b})}),e=g.getSortFunction(d,b),e&&d.items.sort(e),d.total=d.items.length,"number"==typeof b.limit&&(d.items=d.items.slice(0,b.limit)),d};var b=function(a,b){return"number"==typeof a&&"number"==typeof b?a>b?1:b>a?-1:0:(a=h(String(a||"")),b=h(String(b||"")),a>b?1:b>a?-1:0)},c=function(a){var b,c,d,e;for(b=1,c=arguments.length;c>b;b++)if(e=arguments[b])for(d in e)e.hasOwnProperty(d)&&(a[d]=e[d]);return a},d=function(a){return(a+"").replace(/^\s+|\s+$|/g,"")},e=function(a){return(a+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},f=Array.isArray||$&&$.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},g={a:"[aÀÁÂÃÄÅàáâãäåĀāąĄ]",c:"[cÇçćĆčČ]",d:"[dđĐďĎ]",e:"[eÈÉÊËèéêëěĚĒēęĘ]",i:"[iÌÍÎÏìíîïĪī]",l:"[lłŁ]",n:"[nÑñňŇńŃ]",o:"[oÒÓÔÕÕÖØòóôõöøŌō]",r:"[rřŘ]",s:"[sŠšśŚ]",t:"[tťŤ]",u:"[uÙÚÛÜùúûüůŮŪū]",y:"[yŸÿýÝ]",z:"[zŽžżŻźŹ]"},h=function(){var a,b,c,d,e="",f={};for(c in g)if(g.hasOwnProperty(c))for(d=g[c].substring(2,g[c].length-1),e+=d,a=0,b=d.length;b>a;a++)f[d.charAt(a)]=c;var h=new RegExp("["+e+"]","g");return function(a){return a.replace(h,function(a){return f[a]}).toLowerCase()}}();return a}),function(a,b){"function"==typeof define&&define.amd?define("microplugin",b):"object"==typeof exports?module.exports=b():a.MicroPlugin=b()}(this,function(){var a={};a.mixin=function(a){a.plugins={},a.prototype.initializePlugins=function(a){var c,d,e,f=this,g=[];if(f.plugins={names:[],settings:{},requested:{},loaded:{}},b.isArray(a))for(c=0,d=a.length;d>c;c++)"string"==typeof a[c]?g.push(a[c]):(f.plugins.settings[a[c].name]=a[c].options,g.push(a[c].name));else if(a)for(e in a)a.hasOwnProperty(e)&&(f.plugins.settings[e]=a[e],g.push(e));for(;g.length;)f.require(g.shift())},a.prototype.loadPlugin=function(b){var c=this,d=c.plugins,e=a.plugins[b];if(!a.plugins.hasOwnProperty(b))throw new Error('Unable to find "'+b+'" plugin');d.requested[b]=!0,d.loaded[b]=e.fn.apply(c,[c.plugins.settings[b]||{}]),d.names.push(b)},a.prototype.require=function(a){var b=this,c=b.plugins;if(!b.plugins.loaded.hasOwnProperty(a)){if(c.requested[a])throw new Error('Plugin has circular dependency ("'+a+'")');b.loadPlugin(a)}return c.loaded[a]},a.define=function(b,c){a.plugins[b]={name:b,fn:c}}};var b={isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}};return a}),function(a,b){"function"==typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],b):"object"==typeof exports?module.exports=b(require("jquery"),require("sifter"),require("microplugin")):a.Selectize=b(a.jQuery,a.Sifter,a.MicroPlugin)}(this,function(a,b,c){"use strict";var d=function(a,b){if("string"!=typeof b||b.length){var c="string"==typeof b?new RegExp(b,"i"):b,d=function(a){var b=0;if(3===a.nodeType){var e=a.data.search(c);if(e>=0&&a.data.length>0){var f=a.data.match(c),g=document.createElement("span");g.className="highlight";var h=a.splitText(e),i=(h.splitText(f[0].length),h.cloneNode(!0));g.appendChild(i),h.parentNode.replaceChild(g,h),b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName))for(var j=0;j<a.childNodes.length;++j)j+=d(a.childNodes[j]);return b};return a.each(function(){d(this)})}},e=function(){};e.prototype={on:function(a,b){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(b)},off:function(a,b){var c=arguments.length;return 0===c?delete this._events:1===c?delete this._events[a]:(this._events=this._events||{},void(a in this._events!=!1&&this._events[a].splice(this._events[a].indexOf(b),1)))},trigger:function(a){if(this._events=this._events||{},a in this._events!=!1)for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}},e.mixin=function(a){for(var b=["on","off","trigger"],c=0;c<b.length;c++)a.prototype[b[c]]=e.prototype[b[c]]};var f=/Mac/.test(navigator.userAgent),g=65,h=13,i=27,j=37,k=38,l=80,m=39,n=40,o=78,p=8,q=46,r=16,s=f?91:17,t=f?18:17,u=9,v=1,w=2,x=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("form").validity,y=function(a){return"undefined"!=typeof a},z=function(a){return"undefined"==typeof a||null===a?null:"boolean"==typeof a?a?"1":"0":a+""},A=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},B=function(a){return(a+"").replace(/\$/g,"$$$$")},C={};C.before=function(a,b,c){var d=a[b];a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)}},C.after=function(a,b,c){var d=a[b];a[b]=function(){var b=d.apply(a,arguments);return c.apply(a,arguments),b}};var D=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},E=function(a,b){var c;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}},F=function(a,b,c){var d,e=a.trigger,f={};a.trigger=function(){var c=arguments[0];return-1===b.indexOf(c)?e.apply(a,arguments):void(f[c]=arguments)},c.apply(a,[]),a.trigger=e;for(d in f)f.hasOwnProperty(d)&&e.apply(a,f[d])},G=function(a,b,c,d){a.on(b,c,function(b){for(var c=b.target;c&&c.parentNode!==a[0];)c=c.parentNode;return b.currentTarget=c,d.apply(this,[b])})},H=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var c=document.selection.createRange(),d=document.selection.createRange().text.length;c.moveStart("character",-a.value.length),b.start=c.text.length-d,b.length=d}return b},I=function(a,b,c){var d,e,f={};if(c)for(d=0,e=c.length;e>d;d++)f[c[d]]=a.css(c[d]);else f=a.css();b.css(f)},J=function(b,c){if(!b)return 0;var d=a("<test>").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).text(b).appendTo("body");I(c,d,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]);var e=d.width();return d.remove(),e},K=function(a){var b=null,c=function(c,d){var e,f,g,h,i,j,k,l;c=c||window.event||{},d=d||{},c.metaKey||c.altKey||(d.force||a.data("grow")!==!1)&&(e=a.val(),c.type&&"keydown"===c.type.toLowerCase()&&(f=c.keyCode,g=f>=97&&122>=f||f>=65&&90>=f||f>=48&&57>=f||32===f,f===q||f===p?(l=H(a[0]),l.length?e=e.substring(0,l.start)+e.substring(l.start+l.length):f===p&&l.start?e=e.substring(0,l.start-1)+e.substring(l.start+1):f===q&&"undefined"!=typeof l.start&&(e=e.substring(0,l.start)+e.substring(l.start+1))):g&&(j=c.shiftKey,k=String.fromCharCode(c.keyCode),k=j?k.toUpperCase():k.toLowerCase(),e+=k)),h=a.attr("placeholder"),!e&&h&&(e=h),i=J(e,a)+4,i!==b&&(b=i,a.width(i),a.triggerHandler("resize")))};a.on("keydown keyup update blur",c),c()},L=function(c,d){var e,f,g,h,i=this;h=c[0],h.selectize=i;var j=window.getComputedStyle&&window.getComputedStyle(h,null);if(g=j?j.getPropertyValue("direction"):h.currentStyle&&h.currentStyle.direction,g=g||c.parents("[dir]:first").attr("dir")||"",a.extend(i,{order:0,settings:d,$input:c,tabIndex:c.attr("tabindex")||"",tagType:"select"===h.tagName.toLowerCase()?v:w,rtl:/rtl/i.test(g),eventNS:".selectize"+ ++L.count,highlightedValue:null,isOpen:!1,isDisabled:!1,isRequired:c.is("[required]"),isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===d.loadThrottle?i.onSearchChange:E(i.onSearchChange,d.loadThrottle)}),i.sifter=new b(this.options,{diacritics:d.diacritics}),i.settings.options){for(e=0,f=i.settings.options.length;f>e;e++)i.registerOption(i.settings.options[e]);delete i.settings.options}if(i.settings.optgroups){for(e=0,f=i.settings.optgroups.length;f>e;e++)i.registerOptionGroup(i.settings.optgroups[e]);delete i.settings.optgroups}i.settings.mode=i.settings.mode||(1===i.settings.maxItems?"single":"multi"),"boolean"!=typeof i.settings.hideSelected&&(i.settings.hideSelected="multi"===i.settings.mode),i.initializePlugins(i.settings.plugins),i.setupCallbacks(),i.setupTemplates(),i.setup()};return e.mixin(L),c.mixin(L),a.extend(L.prototype,{setup:function(){var b,c,d,e,g,h,i,j,k,l=this,m=l.settings,n=l.eventNS,o=a(window),p=a(document),q=l.$input;if(i=l.settings.mode,j=q.attr("class")||"",b=a("<div>").addClass(m.wrapperClass).addClass(j).addClass(i),c=a("<div>").addClass(m.inputClass).addClass("items").appendTo(b),d=a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex",q.is(":disabled")?"-1":l.tabIndex),h=a(m.dropdownParent||b),e=a("<div>").addClass(m.dropdownClass).addClass(i).hide().appendTo(h),g=a("<div>").addClass(m.dropdownContentClass).appendTo(e),l.settings.copyClassesToDropdown&&e.addClass(j),b.css({width:q[0].style.width}),l.plugins.names.length&&(k="plugin-"+l.plugins.names.join(" plugin-"),b.addClass(k),e.addClass(k)),(null===m.maxItems||m.maxItems>1)&&l.tagType===v&&q.attr("multiple","multiple"),l.settings.placeholder&&d.attr("placeholder",m.placeholder),!l.settings.splitOn&&l.settings.delimiter){var u=l.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");l.settings.splitOn=new RegExp("\\s*"+u+"+\\s*")}q.attr("autocorrect")&&d.attr("autocorrect",q.attr("autocorrect")),q.attr("autocapitalize")&&d.attr("autocapitalize",q.attr("autocapitalize")),l.$wrapper=b,l.$control=c,l.$control_input=d,l.$dropdown=e,l.$dropdown_content=g,e.on("mouseenter","[data-selectable]",function(){return l.onOptionHover.apply(l,arguments)}),e.on("mousedown click","[data-selectable]",function(){return l.onOptionSelect.apply(l,arguments)}),G(c,"mousedown","*:not(input)",function(){return l.onItemSelect.apply(l,arguments)}),K(d),c.on({mousedown:function(){return l.onMouseDown.apply(l,arguments)},click:function(){return l.onClick.apply(l,arguments)}}),d.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return l.onKeyDown.apply(l,arguments)},keyup:function(){return l.onKeyUp.apply(l,arguments)},keypress:function(){return l.onKeyPress.apply(l,arguments)},resize:function(){l.positionDropdown.apply(l,[])},blur:function(){return l.onBlur.apply(l,arguments)},focus:function(){return l.ignoreBlur=!1,l.onFocus.apply(l,arguments)},paste:function(){return l.onPaste.apply(l,arguments)}}),p.on("keydown"+n,function(a){l.isCmdDown=a[f?"metaKey":"ctrlKey"],l.isCtrlDown=a[f?"altKey":"ctrlKey"],l.isShiftDown=a.shiftKey}),p.on("keyup"+n,function(a){a.keyCode===t&&(l.isCtrlDown=!1),a.keyCode===r&&(l.isShiftDown=!1),a.keyCode===s&&(l.isCmdDown=!1)}),p.on("mousedown"+n,function(a){if(l.isFocused){if(a.target===l.$dropdown[0]||a.target.parentNode===l.$dropdown[0])return!1;l.$control.has(a.target).length||a.target===l.$control[0]||l.blur(a.target)}}),o.on(["scroll"+n,"resize"+n].join(" "),function(){l.isOpen&&l.positionDropdown.apply(l,arguments)}),o.on("mousemove"+n,function(){l.ignoreHover=!1}),this.revertSettings={$children:q.children().detach(),tabindex:q.attr("tabindex")},q.attr("tabindex",-1).hide().after(l.$wrapper),a.isArray(m.items)&&(l.setValue(m.items),delete m.items),x&&q.on("invalid"+n,function(a){a.preventDefault(),l.isInvalid=!0,l.refreshState()}),l.updateOriginalInput(),l.refreshItems(),l.refreshState(),l.updatePlaceholder(),l.isSetup=!0,q.is(":disabled")&&l.disable(),l.on("change",this.onChange),q.data("selectize",l),q.addClass("selectized"),l.trigger("initialize"),m.preload===!0&&l.onSearchChange("")},setupTemplates:function(){var b=this,c=b.settings.labelField,d=b.settings.optgroupLabelField,e={optgroup:function(a){return'<div class="optgroup">'+a.html+"</div>"},optgroup_header:function(a,b){return'<div class="optgroup-header">'+b(a[d])+"</div>"},option:function(a,b){return'<div class="option">'+b(a[c])+"</div>"},item:function(a,b){return'<div class="item">'+b(a[c])+"</div>"},option_create:function(a,b){return'<div class="create">Add <strong>'+b(a.input)+"</strong>&hellip;</div>"}};b.settings.render=a.extend({},e,b.settings.render)},setupCallbacks:function(){var a,b,c={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(a in c)c.hasOwnProperty(a)&&(b=this.settings[c[a]],b&&this.on(a,b))},onClick:function(a){var b=this;b.isFocused||(b.focus(),a.preventDefault())},onMouseDown:function(b){{var c=this,d=b.isDefaultPrevented();a(b.target)}if(c.isFocused){if(b.target!==c.$control_input[0])return"single"===c.settings.mode?c.isOpen?c.close():c.open():d||c.setActiveItem(null),!1}else d||window.setTimeout(function(){c.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(b){var c=this;c.isFull()||c.isInputHidden||c.isLocked?b.preventDefault():c.settings.splitOn&&setTimeout(function(){for(var b=a.trim(c.$control_input.val()||"").split(c.settings.splitOn),d=0,e=b.length;e>d;d++)c.createItem(b[d])},0)},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||a.which);return this.settings.create&&"multi"===this.settings.mode&&b===this.settings.delimiter?(this.createItem(),a.preventDefault(),!1):void 0},onKeyDown:function(a){var b=(a.target===this.$control_input[0],this);if(b.isLocked)return void(a.keyCode!==u&&a.preventDefault());switch(a.keyCode){case g:if(b.isCmdDown)return void b.selectAll();break;case i:return void(b.isOpen&&(a.preventDefault(),a.stopPropagation(),b.close()));case o:if(!a.ctrlKey||a.altKey)break;case n:if(!b.isOpen&&b.hasOptions)b.open();else if(b.$activeOption){b.ignoreHover=!0;var c=b.getAdjacentOption(b.$activeOption,1);c.length&&b.setActiveOption(c,!0,!0)}return void a.preventDefault();case l:if(!a.ctrlKey||a.altKey)break;case k:if(b.$activeOption){b.ignoreHover=!0;var d=b.getAdjacentOption(b.$activeOption,-1);d.length&&b.setActiveOption(d,!0,!0)}return void a.preventDefault();case h:return void(b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),a.preventDefault()));case j:return void b.advanceSelection(-1,a);case m:return void b.advanceSelection(1,a);case u:return b.settings.selectOnTab&&b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),b.isFull()||a.preventDefault()),void(b.settings.create&&b.createItem()&&a.preventDefault());case p:case q:return void b.deleteSelection(a)}return!b.isFull()&&!b.isInputHidden||(f?a.metaKey:a.ctrlKey)?void 0:void a.preventDefault()},onKeyUp:function(a){var b=this;if(b.isLocked)return a&&a.preventDefault();var c=b.$control_input.val()||"";b.lastValue!==c&&(b.lastValue=c,b.onSearchChange(c),b.refreshOptions(),b.trigger("type",c))},onSearchChange:function(a){var b=this,c=b.settings.load;c&&(b.loadedSearches.hasOwnProperty(a)||(b.loadedSearches[a]=!0,b.load(function(d){c.apply(b,[a,d])})))},onFocus:function(a){var b=this,c=b.isFocused;return b.isDisabled?(b.blur(),a&&a.preventDefault(),!1):void(b.ignoreFocus||(b.isFocused=!0,"focus"===b.settings.preload&&b.onSearchChange(""),c||b.trigger("focus"),b.$activeItems.length||(b.showInput(),b.setActiveItem(null),b.refreshOptions(!!b.settings.openOnFocus)),b.refreshState()))},onBlur:function(a,b){var c=this;if(c.isFocused&&(c.isFocused=!1,!c.ignoreFocus)){if(!c.ignoreBlur&&document.activeElement===c.$dropdown_content[0])return c.ignoreBlur=!0,void c.onFocus(a);var d=function(){c.close(),c.setTextboxValue(""),c.setActiveItem(null),c.setActiveOption(null),c.setCaret(c.items.length),c.refreshState(),(b||document.body).focus(),c.ignoreFocus=!1,c.trigger("blur")};c.ignoreFocus=!0,c.settings.create&&c.settings.createOnBlur?c.createItem(null,!1,d):d()}},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(b){var c,d,e=this;b.preventDefault&&(b.preventDefault(),b.stopPropagation()),d=a(b.currentTarget),d.hasClass("create")?e.createItem(null,function(){e.settings.closeAfterSelect&&e.close()}):(c=d.attr("data-value"),"undefined"!=typeof c&&(e.lastQuery=null,e.setTextboxValue(""),e.addItem(c),e.settings.closeAfterSelect?e.close():!e.settings.hideSelected&&b.type&&/mouse/.test(b.type)&&e.setActiveOption(e.getOption(c))))},onItemSelect:function(a){var b=this;b.isLocked||"multi"===b.settings.mode&&(a.preventDefault(),b.setActiveItem(a.currentTarget,a))},load:function(a){var b=this,c=b.$wrapper.addClass(b.settings.loadingClass);b.loading++,a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0),a&&a.length&&(b.addOption(a),b.refreshOptions(b.isFocused&&!b.isInputHidden)),b.loading||c.removeClass(b.settings.loadingClass),b.trigger("load",a)}])},setTextboxValue:function(a){var b=this.$control_input,c=b.val()!==a;c&&(b.val(a).triggerHandler("update"),this.lastValue=a)},getValue:function(){return this.tagType===v&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a,b){var c=b?[]:["change"];F(this,c,function(){this.clear(b),this.addItems(a,b)})},setActiveItem:function(b,c){var d,e,f,g,h,i,j,k,l=this;if("single"!==l.settings.mode){if(b=a(b),!b.length)return a(l.$activeItems).removeClass("active"),l.$activeItems=[],void(l.isFocused&&l.showInput());if(d=c&&c.type.toLowerCase(),"mousedown"===d&&l.isShiftDown&&l.$activeItems.length){for(k=l.$control.children(".active:last"),g=Array.prototype.indexOf.apply(l.$control[0].childNodes,[k[0]]),h=Array.prototype.indexOf.apply(l.$control[0].childNodes,[b[0]]),g>h&&(j=g,g=h,h=j),e=g;h>=e;e++)i=l.$control[0].childNodes[e],-1===l.$activeItems.indexOf(i)&&(a(i).addClass("active"),l.$activeItems.push(i));c.preventDefault()}else"mousedown"===d&&l.isCtrlDown||"keydown"===d&&this.isShiftDown?b.hasClass("active")?(f=l.$activeItems.indexOf(b[0]),l.$activeItems.splice(f,1),b.removeClass("active")):l.$activeItems.push(b.addClass("active")[0]):(a(l.$activeItems).removeClass("active"),l.$activeItems=[b.addClass("active")[0]]);l.hideInput(),this.isFocused||l.focus()}},setActiveOption:function(b,c,d){var e,f,g,h,i,j=this;j.$activeOption&&j.$activeOption.removeClass("active"),j.$activeOption=null,b=a(b),b.length&&(j.$activeOption=b.addClass("active"),(c||!y(c))&&(e=j.$dropdown_content.height(),f=j.$activeOption.outerHeight(!0),c=j.$dropdown_content.scrollTop()||0,g=j.$activeOption.offset().top-j.$dropdown_content.offset().top+c,h=g,i=g-e+f,g+f>e+c?j.$dropdown_content.stop().animate({scrollTop:i},d?j.settings.scrollDuration:0):c>g&&j.$dropdown_content.stop().animate({scrollTop:h},d?j.settings.scrollDuration:0)))},selectAll:function(){var a=this;"single"!==a.settings.mode&&(a.$activeItems=Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")),a.$activeItems.length&&(a.hideInput(),a.close()),a.focus())},hideInput:function(){var a=this;a.setTextboxValue(""),a.$control_input.css({opacity:0,position:"absolute",left:a.rtl?1e4:-1e4}),a.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0}),this.isInputHidden=!1},focus:function(){var a=this;a.isDisabled||(a.ignoreFocus=!0,a.$control_input[0].focus(),window.setTimeout(function(){a.ignoreFocus=!1,a.onFocus()},0))},blur:function(a){this.$control_input[0].blur(),this.onBlur(null,a)},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.sortField;return"string"==typeof b&&(b=[{field:b}]),{fields:a.searchField,conjunction:a.searchConjunction,sort:b}},search:function(b){var c,d,e,f=this,g=f.settings,h=this.getSearchOptions();if(g.score&&(e=f.settings.score.apply(this,[b]),"function"!=typeof e))throw new Error('Selectize "score" setting must be a function that returns a function');if(b!==f.lastQuery?(f.lastQuery=b,d=f.sifter.search(b,a.extend(h,{score:e})),f.currentResults=d):d=a.extend(!0,{},f.currentResults),g.hideSelected)for(c=d.items.length-1;c>=0;c--)-1!==f.items.indexOf(z(d.items[c].id))&&d.items.splice(c,1);return d},refreshOptions:function(b){var c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;"undefined"==typeof b&&(b=!0);var t=this,u=a.trim(t.$control_input.val()),v=t.search(u),w=t.$dropdown_content,x=t.$activeOption&&z(t.$activeOption.attr("data-value"));for(g=v.items.length,"number"==typeof t.settings.maxOptions&&(g=Math.min(g,t.settings.maxOptions)),h={},i=[],c=0;g>c;c++)for(j=t.options[v.items[c].id],k=t.render("option",j),l=j[t.settings.optgroupField]||"",m=a.isArray(l)?l:[l],e=0,f=m&&m.length;f>e;e++)l=m[e],t.optgroups.hasOwnProperty(l)||(l=""),h.hasOwnProperty(l)||(h[l]=[],i.push(l)),h[l].push(k);for(this.settings.lockOptgroupOrder&&i.sort(function(a,b){var c=t.optgroups[a].$order||0,d=t.optgroups[b].$order||0;return c-d}),n=[],c=0,g=i.length;g>c;c++)l=i[c],t.optgroups.hasOwnProperty(l)&&h[l].length?(o=t.render("optgroup_header",t.optgroups[l])||"",o+=h[l].join(""),n.push(t.render("optgroup",a.extend({},t.optgroups[l],{html:o})))):n.push(h[l].join(""));if(w.html(n.join("")),t.settings.highlight&&v.query.length&&v.tokens.length)for(c=0,g=v.tokens.length;g>c;c++)d(w,v.tokens[c].regex);if(!t.settings.hideSelected)for(c=0,g=t.items.length;g>c;c++)t.getOption(t.items[c]).addClass("selected");p=t.canCreate(u),p&&(w.prepend(t.render("option_create",{input:u})),s=a(w[0].childNodes[0])),t.hasOptions=v.items.length>0||p,t.hasOptions?(v.items.length>0?(r=x&&t.getOption(x),r&&r.length?q=r:"single"===t.settings.mode&&t.items.length&&(q=t.getOption(t.items[0])),q&&q.length||(q=s&&!t.settings.addPrecedence?t.getAdjacentOption(s,1):w.find("[data-selectable]:first"))):q=s,t.setActiveOption(q),b&&!t.isOpen&&t.open()):(t.setActiveOption(null),b&&t.isOpen&&t.close())},addOption:function(b){var c,d,e,f=this;if(a.isArray(b))for(c=0,d=b.length;d>c;c++)f.addOption(b[c]);else(e=f.registerOption(b))&&(f.userOptions[e]=!0,f.lastQuery=null,f.trigger("option_add",e,b))},registerOption:function(a){var b=z(a[this.settings.valueField]);return!b||this.options.hasOwnProperty(b)?!1:(a.$order=a.$order||++this.order,this.options[b]=a,b)},registerOptionGroup:function(a){var b=z(a[this.settings.optgroupValueField]);return b?(a.$order=a.$order||++this.order,this.optgroups[b]=a,b):!1},addOptionGroup:function(a,b){b[this.settings.optgroupValueField]=a,(a=this.registerOptionGroup(b))&&this.trigger("optgroup_add",a,b)},removeOptionGroup:function(a){this.optgroups.hasOwnProperty(a)&&(delete this.optgroups[a],this.renderCache={},this.trigger("optgroup_remove",a))},clearOptionGroups:function(){this.optgroups={},this.renderCache={},this.trigger("optgroup_clear")},updateOption:function(b,c){var d,e,f,g,h,i,j,k=this;if(b=z(b),f=z(c[k.settings.valueField]),null!==b&&k.options.hasOwnProperty(b)){if("string"!=typeof f)throw new Error("Value must be set in option data");j=k.options[b].$order,f!==b&&(delete k.options[b],g=k.items.indexOf(b),-1!==g&&k.items.splice(g,1,f)),c.$order=c.$order||j,k.options[f]=c,h=k.renderCache.item,i=k.renderCache.option,h&&(delete h[b],delete h[f]),i&&(delete i[b],delete i[f]),-1!==k.items.indexOf(f)&&(d=k.getItem(b),e=a(k.render("item",c)),d.hasClass("active")&&e.addClass("active"),d.replaceWith(e)),k.lastQuery=null,k.isOpen&&k.refreshOptions(!1)}},removeOption:function(a,b){var c=this;a=z(a);var d=c.renderCache.item,e=c.renderCache.option;d&&delete d[a],e&&delete e[a],delete c.userOptions[a],delete c.options[a],c.lastQuery=null,c.trigger("option_remove",a),c.removeItem(a,b)},clearOptions:function(){var a=this;a.loadedSearches={},a.userOptions={},a.renderCache={},a.options=a.sifter.items={},a.lastQuery=null,a.trigger("option_clear"),a.clear()},getOption:function(a){return this.getElementWithValue(a,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(b,c){var d=this.$dropdown.find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},getElementWithValue:function(b,c){if(b=z(b),"undefined"!=typeof b&&null!==b)for(var d=0,e=c.length;e>d;d++)if(c[d].getAttribute("data-value")===b)return a(c[d]);return a()},getItem:function(a){return this.getElementWithValue(a,this.$control.children())},addItems:function(b,c){for(var d=a.isArray(b)?b:[b],e=0,f=d.length;f>e;e++)this.isPending=f-1>e,this.addItem(d[e],c)},addItem:function(b,c){var d=c?[]:["change"];F(this,d,function(){var d,e,f,g,h,i=this,j=i.settings.mode;return b=z(b),-1!==i.items.indexOf(b)?void("single"===j&&i.close()):void(i.options.hasOwnProperty(b)&&("single"===j&&i.clear(c),"multi"===j&&i.isFull()||(d=a(i.render("item",i.options[b])),h=i.isFull(),i.items.splice(i.caretPos,0,b),i.insertAtCaret(d),(!i.isPending||!h&&i.isFull())&&i.refreshState(),i.isSetup&&(f=i.$dropdown_content.find("[data-selectable]"),i.isPending||(e=i.getOption(b),g=i.getAdjacentOption(e,1).attr("data-value"),i.refreshOptions(i.isFocused&&"single"!==j),g&&i.setActiveOption(i.getOption(g))),!f.length||i.isFull()?i.close():i.positionDropdown(),i.updatePlaceholder(),i.trigger("item_add",b,d),i.updateOriginalInput({silent:c})))))})},removeItem:function(a,b){var c,d,e,f=this;c="object"==typeof a?a:f.getItem(a),a=z(c.attr("data-value")),d=f.items.indexOf(a),-1!==d&&(c.remove(),c.hasClass("active")&&(e=f.$activeItems.indexOf(c[0]),f.$activeItems.splice(e,1)),f.items.splice(d,1),f.lastQuery=null,!f.settings.persist&&f.userOptions.hasOwnProperty(a)&&f.removeOption(a,b),d<f.caretPos&&f.setCaret(f.caretPos-1),f.refreshState(),f.updatePlaceholder(),f.updateOriginalInput({silent:b}),f.positionDropdown(),f.trigger("item_remove",a,c))},createItem:function(b,c){var d=this,e=d.caretPos;b=b||a.trim(d.$control_input.val()||"");var f=arguments[arguments.length-1];if("function"!=typeof f&&(f=function(){}),"boolean"!=typeof c&&(c=!0),!d.canCreate(b))return f(),!1;d.lock();var g="function"==typeof d.settings.create?this.settings.create:function(a){var b={};return b[d.settings.labelField]=a,b[d.settings.valueField]=a,b},h=D(function(a){if(d.unlock(),!a||"object"!=typeof a)return f();var b=z(a[d.settings.valueField]);return"string"!=typeof b?f():(d.setTextboxValue(""),d.addOption(a),d.setCaret(e),d.addItem(b),d.refreshOptions(c&&"single"!==d.settings.mode),void f(a))}),i=g.apply(this,[b,h]);return"undefined"!=typeof i&&h(i),!0},refreshItems:function(){this.lastQuery=null,this.isSetup&&this.addItem(this.items),this.refreshState(),this.updateOriginalInput()},refreshState:function(){var a,b=this;b.isRequired&&(b.items.length&&(b.isInvalid=!1),b.$control_input.prop("required",a)),b.refreshClasses()},refreshClasses:function(){var b=this,c=b.isFull(),d=b.isLocked;b.$wrapper.toggleClass("rtl",b.rtl),b.$control.toggleClass("focus",b.isFocused).toggleClass("disabled",b.isDisabled).toggleClass("required",b.isRequired).toggleClass("invalid",b.isInvalid).toggleClass("locked",d).toggleClass("full",c).toggleClass("not-full",!c).toggleClass("input-active",b.isFocused&&!b.isInputHidden).toggleClass("dropdown-active",b.isOpen).toggleClass("has-options",!a.isEmptyObject(b.options)).toggleClass("has-items",b.items.length>0),b.$control_input.data("grow",!c&&!d)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(a){var b,c,d,e,f=this;if(a=a||{},f.tagType===v){for(d=[],b=0,c=f.items.length;c>b;b++)e=f.options[f.items[b]][f.settings.labelField]||"",d.push('<option value="'+A(f.items[b])+'" selected="selected">'+A(e)+"</option>");d.length||this.$input.attr("multiple")||d.push('<option value="" selected="selected"></option>'),f.$input.html(d.join(""))}else f.$input.val(f.getValue()),f.$input.attr("value",f.$input.val());f.isSetup&&(a.silent||f.trigger("change",f.$input.val()))},updatePlaceholder:function(){if(this.settings.placeholder){var a=this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder),a.triggerHandler("update",{force:!0})}},open:function(){var a=this;a.isLocked||a.isOpen||"multi"===a.settings.mode&&a.isFull()||(a.focus(),a.isOpen=!0,a.refreshState(),a.$dropdown.css({visibility:"hidden",display:"block"}),a.positionDropdown(),a.$dropdown.css({visibility:"visible"}),a.trigger("dropdown_open",a.$dropdown))},close:function(){var a=this,b=a.isOpen;"single"===a.settings.mode&&a.items.length&&a.hideInput(),a.isOpen=!1,a.$dropdown.hide(),a.setActiveOption(null),a.refreshState(),b&&a.trigger("dropdown_close",a.$dropdown)},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0),this.$dropdown.css({width:a.outerWidth(),top:b.top,left:b.left})},clear:function(a){var b=this;b.items.length&&(b.$control.children(":not(input)").remove(),b.items=[],b.lastQuery=null,b.setCaret(0),b.setActiveItem(null),b.updatePlaceholder(),b.updateOriginalInput({silent:a}),b.refreshState(),b.showInput(),b.trigger("clear"))},insertAtCaret:function(b){var c=Math.min(this.caretPos,this.items.length);0===c?this.$control.prepend(b):a(this.$control[0].childNodes[c]).before(b),this.setCaret(c+1)},deleteSelection:function(b){var c,d,e,f,g,h,i,j,k,l=this;if(e=b&&b.keyCode===p?-1:1,f=H(l.$control_input[0]),l.$activeOption&&!l.settings.hideSelected&&(i=l.getAdjacentOption(l.$activeOption,-1).attr("data-value")),g=[],l.$activeItems.length){for(k=l.$control.children(".active:"+(e>0?"last":"first")),h=l.$control.children(":not(input)").index(k),e>0&&h++,c=0,d=l.$activeItems.length;d>c;c++)g.push(a(l.$activeItems[c]).attr("data-value"));
b&&(b.preventDefault(),b.stopPropagation())}else(l.isFocused||"single"===l.settings.mode)&&l.items.length&&(0>e&&0===f.start&&0===f.length?g.push(l.items[l.caretPos-1]):e>0&&f.start===l.$control_input.val().length&&g.push(l.items[l.caretPos]));if(!g.length||"function"==typeof l.settings.onDelete&&l.settings.onDelete.apply(l,[g])===!1)return!1;for("undefined"!=typeof h&&l.setCaret(h);g.length;)l.removeItem(g.pop());return l.showInput(),l.positionDropdown(),l.refreshOptions(!0),i&&(j=l.getOption(i),j.length&&l.setActiveOption(j)),!0},advanceSelection:function(a,b){var c,d,e,f,g,h,i=this;0!==a&&(i.rtl&&(a*=-1),c=a>0?"last":"first",d=H(i.$control_input[0]),i.isFocused&&!i.isInputHidden?(f=i.$control_input.val().length,g=0>a?0===d.start&&0===d.length:d.start===f,g&&!f&&i.advanceCaret(a,b)):(h=i.$control.children(".active:"+c),h.length&&(e=i.$control.children(":not(input)").index(h),i.setActiveItem(null),i.setCaret(a>0?e+1:e))))},advanceCaret:function(a,b){var c,d,e=this;0!==a&&(c=a>0?"next":"prev",e.isShiftDown?(d=e.$control_input[c](),d.length&&(e.hideInput(),e.setActiveItem(d),b&&b.preventDefault())):e.setCaret(e.caretPos+a))},setCaret:function(b){var c=this;if(b="single"===c.settings.mode?c.items.length:Math.max(0,Math.min(c.items.length,b)),!c.isPending){var d,e,f,g;for(f=c.$control.children(":not(input)"),d=0,e=f.length;e>d;d++)g=a(f[d]).detach(),b>d?c.$control_input.before(g):c.$control.append(g)}c.caretPos=b},lock:function(){this.close(),this.isLocked=!0,this.refreshState()},unlock:function(){this.isLocked=!1,this.refreshState()},disable:function(){var a=this;a.$input.prop("disabled",!0),a.$control_input.prop("disabled",!0).prop("tabindex",-1),a.isDisabled=!0,a.lock()},enable:function(){var a=this;a.$input.prop("disabled",!1),a.$control_input.prop("disabled",!1).prop("tabindex",a.tabIndex),a.isDisabled=!1,a.unlock()},destroy:function(){var b=this,c=b.eventNS,d=b.revertSettings;b.trigger("destroy"),b.off(),b.$wrapper.remove(),b.$dropdown.remove(),b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:d.tabindex}).show(),b.$control_input.removeData("grow"),b.$input.removeData("selectize"),a(window).off(c),a(document).off(c),a(document.body).off(c),delete b.$input[0].selectize},render:function(a,b){var c,d,e="",f=!1,g=this,h=/^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;return("option"===a||"item"===a)&&(c=z(b[g.settings.valueField]),f=!!c),f&&(y(g.renderCache[a])||(g.renderCache[a]={}),g.renderCache[a].hasOwnProperty(c))?g.renderCache[a][c]:(e=g.settings.render[a].apply(this,[b,A]),("option"===a||"option_create"===a)&&(e=e.replace(h,"<$1 data-selectable")),"optgroup"===a&&(d=b[g.settings.optgroupValueField]||"",e=e.replace(h,'<$1 data-group="'+B(A(d))+'"')),("option"===a||"item"===a)&&(e=e.replace(h,'<$1 data-value="'+B(A(c||""))+'"')),f&&(g.renderCache[a][c]=e),e)},clearCache:function(a){var b=this;"undefined"==typeof a?b.renderCache={}:delete b.renderCache[a]},canCreate:function(a){var b=this;if(!b.settings.create)return!1;var c=b.settings.createFilter;return!(!a.length||"function"==typeof c&&!c.apply(b,[a])||"string"==typeof c&&!new RegExp(c).test(a)||c instanceof RegExp&&!c.test(a))}}),L.count=0,L.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}},a.fn.selectize=function(b){var c=a.fn.selectize.defaults,d=a.extend({},c,b),e=d.dataAttr,f=d.labelField,g=d.valueField,h=d.optgroupField,i=d.optgroupLabelField,j=d.optgroupValueField,k=function(b,c){var h,i,j,k,l=b.attr(e);if(l)for(c.options=JSON.parse(l),h=0,i=c.options.length;i>h;h++)c.items.push(c.options[h][g]);else{var m=a.trim(b.val()||"");if(!d.allowEmptyOption&&!m.length)return;for(j=m.split(d.delimiter),h=0,i=j.length;i>h;h++)k={},k[f]=j[h],k[g]=j[h],c.options.push(k);c.items=j}},l=function(b,c){var k,l,m,n,o=c.options,p={},q=function(a){var b=e&&a.attr(e);return"string"==typeof b&&b.length?JSON.parse(b):null},r=function(b,e){b=a(b);var i=z(b.attr("value"));if(i||d.allowEmptyOption)if(p.hasOwnProperty(i)){if(e){var j=p[i][h];j?a.isArray(j)?j.push(e):p[i][h]=[j,e]:p[i][h]=e}}else{var k=q(b)||{};k[f]=k[f]||b.text(),k[g]=k[g]||i,k[h]=k[h]||e,p[i]=k,o.push(k),b.is(":selected")&&c.items.push(i)}},s=function(b){var d,e,f,g,h;for(b=a(b),f=b.attr("label"),f&&(g=q(b)||{},g[i]=f,g[j]=f,c.optgroups.push(g)),h=a("option",b),d=0,e=h.length;e>d;d++)r(h[d],f)};for(c.maxItems=b.attr("multiple")?null:1,n=b.children(),k=0,l=n.length;l>k;k++)m=n[k].tagName.toLowerCase(),"optgroup"===m?s(n[k]):"option"===m&&r(n[k])};return this.each(function(){if(!this.selectize){var e,f=a(this),g=this.tagName.toLowerCase(),h=f.attr("placeholder")||f.attr("data-placeholder");h||d.allowEmptyOption||(h=f.children('option[value=""]').text());var i={placeholder:h,options:[],optgroups:[],items:[]};"select"===g?l(f,i):k(f,i),e=new L(f,a.extend(!0,{},c,i,b))}})},a.fn.selectize.defaults=L.defaults,a.fn.selectize.support={validity:x},L.define("drag_drop",function(){if(!a.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var b=this;b.lock=function(){var a=b.lock;return function(){var c=b.$control.data("sortable");return c&&c.disable(),a.apply(b,arguments)}}(),b.unlock=function(){var a=b.unlock;return function(){var c=b.$control.data("sortable");return c&&c.enable(),a.apply(b,arguments)}}(),b.setup=function(){var c=b.setup;return function(){c.apply(this,arguments);var d=b.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:b.isLocked,start:function(a,b){b.placeholder.css("width",b.helper.css("width")),d.css({overflow:"visible"})},stop:function(){d.css({overflow:"hidden"});var c=b.$activeItems?b.$activeItems.slice():null,e=[];d.children("[data-value]").each(function(){e.push(a(this).attr("data-value"))}),b.setValue(e),b.setActiveItem(c)}})}}()}}),L.define("dropdown_header",function(b){var c=this;b=a.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'"><div class="'+a.titleRowClass+'"><span class="'+a.labelClass+'">'+a.title+'</span><a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a></div></div>'}},b),c.setup=function(){var d=c.setup;return function(){d.apply(c,arguments),c.$dropdown_header=a(b.html(b)),c.$dropdown.prepend(c.$dropdown_header)}}()}),L.define("optgroup_columns",function(b){var c=this;b=a.extend({equalizeWidth:!0,equalizeHeight:!0},b),this.getAdjacentOption=function(b,c){var d=b.closest("[data-group]").find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},this.onKeyDown=function(){var a=c.onKeyDown;return function(b){var d,e,f,g;return!this.isOpen||b.keyCode!==j&&b.keyCode!==m?a.apply(this,arguments):(c.ignoreHover=!0,g=this.$activeOption.closest("[data-group]"),d=g.find("[data-selectable]").index(this.$activeOption),g=b.keyCode===j?g.prev("[data-group]"):g.next("[data-group]"),f=g.find("[data-selectable]"),e=f.eq(Math.min(f.length-1,d)),void(e.length&&this.setActiveOption(e)))}}();var d=function(){var a,b=d.width,c=document;return"undefined"==typeof b&&(a=c.createElement("div"),a.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',a=a.firstChild,c.body.appendChild(a),b=d.width=a.offsetWidth-a.clientWidth,c.body.removeChild(a)),b},e=function(){var e,f,g,h,i,j,k;if(k=a("[data-group]",c.$dropdown_content),f=k.length,f&&c.$dropdown_content.width()){if(b.equalizeHeight){for(g=0,e=0;f>e;e++)g=Math.max(g,k.eq(e).height());k.css({height:g})}b.equalizeWidth&&(j=c.$dropdown_content.innerWidth()-d(),h=Math.round(j/f),k.css({width:h}),f>1&&(i=j-h*(f-1),k.eq(f-1).css({width:i})))}};(b.equalizeHeight||b.equalizeWidth)&&(C.after(this,"positionDropdown",e),C.after(this,"refreshOptions",e))}),L.define("remove_button",function(b){if("single"!==this.settings.mode){b=a.extend({label:"&times;",title:"Remove",className:"remove",append:!0},b);var c=this,d='<a href="javascript:void(0)" class="'+b.className+'" tabindex="-1" title="'+A(b.title)+'">'+b.label+"</a>",e=function(a,b){var c=a.search(/(<\/[^>]+>\s*)$/);return a.substring(0,c)+b+a.substring(c)};this.setup=function(){var f=c.setup;return function(){if(b.append){var g=c.settings.render.item;c.settings.render.item=function(){return e(g.apply(this,arguments),d)}}f.apply(this,arguments),this.$control.on("click","."+b.className,function(b){if(b.preventDefault(),!c.isLocked){var d=a(b.currentTarget).parent();c.setActiveItem(d),c.deleteSelection()&&c.setCaret(c.items.length)}})}}()}}),L.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]},this.onKeyDown=function(){var c=b.onKeyDown;return function(b){var d,e;return b.keyCode===p&&""===this.$control_input.val()&&!this.$activeItems.length&&(d=this.caretPos-1,d>=0&&d<this.items.length)?(e=this.options[this.items[d]],this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[e])),this.refreshOptions(!0)),void b.preventDefault()):c.apply(this,arguments)}}()}),L});


/*-----------------------*/
/* lib/ng-selectize/ng-selectize.min.js*/
/*-----------------------*/
!function(a){"use strict";a.module("ng-selectize",["ng"]).directive("selectize",["$timeout",function(b){return{restrict:"A",require:"ngModel",scope:{selectize:"&",options:"&"},link:function(c,d,e,f){function g(a){o||(c.$parent.$apply(function(){f.$setViewValue(a)}),"single"===p.mode&&q.blur())}function h(b){return a.isArray(b)?b:b?String(b).split(p.delimiter):[]}function i(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1}function j(a,b){return-1!==i(a,b)}function k(a,b){a.map(function(a){j(b,a)||j(r,a)||r.push(a)})}function l(a,b){var c,d;for(c=0;c<a.length;c++)d=i(r,a[c][q.settings.valueField]),-1!==d&&(b.push(a[c][q.settings.valueField]),r.splice(d,1))}function m(a){b(function(){var b=h(a);o||b===h(q.getValue())||(o=!0,q.setValue(b),k(b,h(q.getValue())),o=!1)})}function n(a){var b=h(f.$viewValue);"multi"===p.mode&&a&&l(a,b),q.addOption(a),q.refreshOptions(!1),m(b)}var o,p,q,r=[],s=c.options(),t=c.selectize();p=a.extend({delimiter:",",persist:!0,mode:"SELECT"===d[0].tagName?d[0].hasAttribute("multiple")?"multi":"single":"multi"},t||{}),q=d.selectize(p)[0].selectize,q.on("change",function(){g(q.getValue())}),c.$parent.$watch(e.ngModel,m),e.options&&c.$parent.$watch(e.options,n,!0),c.$parent.$watch(s,n(s),!0),c.$on("$destroy",function(){q.destroy()})}}}])}(this.angular);


/*-----------------------*/
/* lib/angular-ui-switch/angular-ui-switch.min.js*/
/*-----------------------*/
angular.module("uiSwitch",[]).directive("switch",function(){return{restrict:"AE",replace:!0,transclude:!0,template:function(n,e){var s="";return s+="<span",s+=' class="switch'+(e.class?" "+e.class:"")+'"',s+=e.ngModel?' ng-click="'+e.disabled+" ? "+e.ngModel+" : "+e.ngModel+"=!"+e.ngModel+(e.ngChange?"; "+e.ngChange+'()"':'"'):"",s+=' ng-class="{ checked:'+e.ngModel+", disabled:"+e.disabled+' }"',s+=">",s+="<small></small>",s+='<input type="checkbox"',s+=e.id?' id="'+e.id+'"':"",s+=e.name?' name="'+e.name+'"':"",s+=e.ngModel?' ng-model="'+e.ngModel+'"':"",s+=' style="display:none" />',s+='<span class="switch-text">',s+=e.on?'<span class="on">'+e.on+"</span>":"",s+=e.off?'<span class="off">'+e.off+"</span>":" ",s+="</span>"}}});


/*-----------------------*/
/* lib/angular-nai-framework/angular-nai-framework.js*/
/*-----------------------*/
angular.module('ngNaiFramework', ['ngRoute','ngAnimate','ngTouch','ng-selectize', 'ngJalaaliFlatDatepicker', 'uiSwitch', 'LocalStorageModule'])
.directive('sidebar', function($timeout) {
	return {
		restrict: 'E',
		replace: 'true',
		transclude: true,
		scope: {
			myOpen: '=open',
			direction: '@'
		},
        link: function(scope) {
			scope.direction = typeof scope.direction == 'string'? scope.direction: 'left';
        },
		template: ''+
		'<div>'+
		'	<div class="nai-overlay toggle" ng-show="myOpen" ng-click="myOpen = false"></div>'+
		'	<div class="nai-sidebar col-md-3 col-sm-5 col-xs-8 slide-left" ng-show="myOpen" ng-class="direction" ng-transclude></div>'+
		'</div>'
	};
})
.directive('searchbar', function($timeout) {
	return {
		restrict: 'E',
		replace: 'true',
		transclude: false,
		scope: {
			myOpen: '=open',
			placeholder: '@',
			callback: '&callback'
		},
        link: function(scope, element) {
			scope.placeholder = typeof scope.placeholder == 'string'? scope.placeholder: 'متن مورد نظر خود را وارد کنید…';
			scope.searchText = '';
			scope.myCallback = function(){
				if( scope.callback( {$text: scope.searchText} ) !== false )
					scope.myOpen = false;
			}
			scope.$watch( 'myOpen', function(newVal){
				a = (element);
				if( newVal == true ){
					scope.searchText = '';
					$timeout(function() {
						var inp = element.find('input');
						if(inp)
							inp.focus();
					}, 100);
				}
			});
			
        },
		template: ''+
		'<div>'+
		'	<div class="nai-overlay toggle" ng-show="myOpen" ng-click="myOpen = false"></div>'+
		'	<div class="nai-searchbar toggle" ng-show="myOpen">'+
		'		<form ng-submit="myCallback()">'+
		'			<input type="search" class="form-control input input-sm" placeholder="{{placeholder}}" ng-model="searchText">'+
		'			<span class="nai-nav-icon left glyphicon glyphicon-remove" ng-click="myOpen = false"></span>'+
		'			<button type="submit" class="nai-nav-icon left glyphicon glyphicon-ok"></button>'+
		'		</form>'+
		'	</div>'+
		'</div>'
	};
})
.directive('icon', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			src: '@'
		},
		template: ''+
		'<i class="icon icon-{{src}}"></i>'
	};
})
.directive('glyphicon', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			src: '@'
		},
		template: ''+
		'<i class="glyphicon glyphicon-{{src}}"></i>'
	};
})
;



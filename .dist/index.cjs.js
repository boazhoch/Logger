"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};var e,n=function(){return(n=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function o(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),r=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,f=i.length;s<f;s++,r++)o[r]=i[s];return o}!function(t){t[t.trace=0]="trace",t[t.debug=1]="debug",t[t.info=2]="info",t[t.time=3]="time",t[t.timeEnd=4]="timeEnd",t[t.warn=5]="warn",t[t.error=6]="error",t[t.off=7]="off"}(e||(e={}));var r,i=function(n){function o(t,e){return n.call(this,t,e)||this}return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}(o,n),o.prototype.sendLog=function(t,e){e(t),this.logSender&&this.logSender.send(t)},o.prototype.invokeLog=function(t,e){this.isLoglevelPass(t)&&this.sendLog(e,this.consoleMapper.get(t))},o.prototype.debug=function(t){this.invokeLog(e.debug,t)},o.prototype.info=function(t){this.invokeLog(e.info,t)},o.prototype.error=function(t){this.invokeLog(e.error,t)},o.prototype.log=function(t){this.invokeLog(e.info,t)},o}(function(){function t(t,n){for(var o in void 0===n&&(n=e.debug),this.logSender=t,this.logLevel=n,this.consoleMapper=new Map,this.logSender=t,this.logLevel=n,console){var r=e[o],i=console[o];r&&i&&this.consoleMapper.set(r,i)}}return t.prototype.isLoglevelPass=function(t){return t>=this.logLevel},t.prototype.setLogLevel=function(t){return e[t]&&(this.logLevel=t),this},t.prototype.getLogLevel=function(){return this.logLevel},t}()),s=function(){function t(t){this.stringifier=t}return t.prototype.isTemplateStringsArray=function(t){return Array.isArray(t)},t.prototype.toString=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return this.isTemplateStringsArray(t)?t.reduce((function(t,o,r){return""+t+o+e.stringifier.strinfigy(n[r])}),""):"string"==typeof t&&n.length?(console.warn("It is not recommended to use logger as a function, instead use logger as template tag with ``, example: logger.log`My msessage`"),n.reduce((function(t,n){return t+" "+e.stringifier.strinfigy(n)}),t)):t},t}(),f=function(){function t(){}return t.prototype.onError=function(t){return console.warn(t),""},t.prototype.strinfigy=function(t){if(!t)return this.onError("No value was passe to strinfigy, return ''");if("string"==typeof t)return t;try{return JSON.stringify(t)}catch(e){return this.onError("couldn't stringify: "+t)}},t}(),u=function(){function t(t,e,n){this.tpl=t,this._logger=e,this.logFormatter=n}return t.prototype.getMessage=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=(e=this.tpl).toString.apply(e,o([t],n));return this.logFormatter.format(i)},t.prototype.setLogLevel=function(t){this._logger.setLogLevel(t)},t.prototype.getLogLevel=function(){return this._logger.getLogLevel()},t.prototype.debug=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._logger.debug(this.getMessage.apply(this,o([t],e)))},t.prototype.info=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._logger.info(this.getMessage.apply(this,o([t],e)))},t.prototype.error=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._logger.error(this.getMessage.apply(this,o([t],e)))},t.prototype.log=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];this._logger.log(this.getMessage.apply(this,o([t],e)))},t}(),g=function(){this.urlEndpoint="/logs",this.headers={contentType:"text/plain"}},p=function(){function t(){}return t.prototype.send=function(t,e){var n=new Blob([t],{type:e.headers.contentType});navigator.sendBeacon(e.urlEndpoint,n)},t.type="beacon",t}(),a=function(){function t(t){this.fetchRequestOptions=t}return t.prototype.send=function(t,e){return fetch(e.urlEndpoint,n({method:"POST",credentials:"include",cache:"no-cache",mode:"cors",headers:{"Content-Type":e.headers.contentType},body:t},this.fetchRequestOptions))},t.type="fetch",t}(),c=function(){function t(t,e){this.opts=t,this.logSendMessage=e,this.logSendMessage=e}return t.prototype.wrapLog=function(t){if("application/json"===this.opts.headers.contentType)try{return JSON.stringify({message:JSON.parse(t)})}catch(e){return JSON.stringify({message:t})}return t},t.prototype.send=function(t){this.logSendMessage.send(this.wrapLog(t),this.opts)},t}(),l=function(){function t(){}return t.create=function(t,e){void 0===t&&(t=new g);var n=this.isSupportingSendBeacon?new p:new a(e);return new c(t,n)},t.isSupportingSendBeacon=Boolean(navigator.sendBeacon),t}(),h=function(){function t(t){this.logFormmaterConfig=t}return t.prototype.format=function(t){var e=t;for(var n in this.logFormmaterConfig){var o=this.logFormmaterConfig[n];o&&(e=o.format(e))}return e},t}();!function(t){t.suffix="suffix",t.prefix="prefix"}(r||(r={}));var y,d=function(){function t(t){this.prefix=t}return t.prototype.format=function(t){return""+this.prefix()+t},t}(),v=function(){function t(t){this.suffix=t}return t.prototype.format=function(t){return""+t+this.suffix()},t}(),m=void 0;module.exports=function(t){var e,n,o=t&&t.logSender||l.create(null==t?void 0:t.sendMessageOptions);if(m)return m.info(y||(e=["returning same instance of logger"],n=["returning same instance of logger"],Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,y=e)),m;var g=new i(o),p=(null==t?void 0:t.logFormmaterOptions)?function(t){var e={};for(var n in t){var o=t[n];o&&(n===r.prefix&&(e[r.prefix]=new d(o)),n===r.suffix&&(e[r.suffix]=new v(o)))}return e}(null==t?void 0:t.logFormmaterOptions):void 0;return m=new u(new s((null==t?void 0:t.stringifier)||new f),g,new h(p))};

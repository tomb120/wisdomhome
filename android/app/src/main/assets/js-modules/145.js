__d(function(t,e,r,n,i){'use strict';var s=e(i[0]),o=e(i[1]),u=void 0,c=void 0,a=void 0,f=void 0;function v(){if(void 0===c){var t=f&&f.match(/^https?:\/\/.*?\//);c=t?t[0]:null}return c}function d(t){if(t){if(t.startsWith('assets://'))return null;(t=t.substring(0,t.lastIndexOf('/')+1)).includes('://')||(t='file://'+t)}return t}var l=t.nativeExtensions&&t.nativeExtensions.SourceCode;if(!l){var p=e(i[2]);l=p&&p.SourceCode}f=l&&l.scriptURL,r.exports=function(t){if('object'==typeof t)return t;var e=s.getAssetByID(t);if(!e)return null;var r=new o(v(),(void 0===a&&(a=d(f)),a),e);return u?u(r):r.defaultAsset()},r.exports.pickScale=o.pickScale,r.exports.setCustomSourceTransformer=function(t){u=t}},145,[146,147,23]);
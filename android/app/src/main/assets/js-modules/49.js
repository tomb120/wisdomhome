__d(function(e,l,r,o,t){'use strict';var i=l(t[0]);function n(e,l,r){var o=Object.getOwnPropertyDescriptor(e,l),t=o||{},n=t.enumerable,a=t.writable,c=t.configurable;!o||c?i(e,l,{get:r,enumerable:!1!==n,writable:!1!==a}):console.error('Failed to set polyfill. '+l+' is not configurable.')}r.exports={polyfillObjectProperty:n,polyfillGlobal:function(l,r){n(e,l,r)}}},49,[36]);
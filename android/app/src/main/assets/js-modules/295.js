__d(function(e,n,t,o,i){'use strict';var r,c=n(i[0]),f=n(i[1]),u=n(i[2]),s=(n(i[3]),u.NetInfo),v=new f(s),a=new c;function d(e){return'none'!==e.type&&'unknown'!==e.type}r=function(e){return'NONE'!==e&&'UNKNOWN'!==e};var C=new c,g={addEventListener:function(e,n){var t=void 0;if('connectionChange'===e)t=v.addListener("networkStatusDidChange",function(e){n({type:e.connectionType,effectiveType:e.effectiveConnectionType})});else{if('change'!==e)return console.warn('Trying to subscribe to unknown event: "'+e+'"'),{remove:function(){}};console.warn('NetInfo\'s "change" event is deprecated. Listen to the "connectionChange" event instead.'),t=v.addListener("networkStatusDidChange",function(e){n(e.network_info)})}return a.set(n,t),{remove:function(){return g.removeEventListener(e,n)}}},removeEventListener:function(e,n){var t=a.get(n);t&&(t.remove(),a.delete(n))},fetch:function(){return console.warn('NetInfo.fetch() is deprecated. Use NetInfo.getConnectionInfo() instead.'),s.getCurrentConnectivity().then(function(e){return e.network_info})},getConnectionInfo:function(){return s.getCurrentConnectivity().then(function(e){return{type:e.connectionType,effectiveType:e.effectiveConnectionType}})},isConnected:{addEventListener:function(e,n){var t=function(t){'change'===e?n(r(t)):'connectionChange'===e&&n(d(t))};return C.set(n,t),g.addEventListener(e,t),{remove:function(){return g.isConnected.removeEventListener(e,n)}}},removeEventListener:function(e,n){var t=C.get(n);g.removeEventListener(e,t),C.delete(n)},fetch:function(){return g.getConnectionInfo().then(d)}},isConnectionExpensive:function(){return s.isConnectionMetered()}};t.exports=g},295,[51,75,23,31]);
__d(function(e,t,n,r,o){Object.defineProperty(r,"__esModule",{value:!0});var i,a=(function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}})(),u=t(o[0]),c=t(o[1]),f=(i=c)&&i.__esModule?i:{default:i};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=(function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,f.default),a(t,[{key:'toValue',value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};switch(e){case 0:case 1:u.Animated.spring(this.animate,{toValue:e,velocity:0,tension:65,friction:7,useNativeDriver:this.useNativeDriver}).start(t)}}},{key:'createAnimations',value:function(){return{transform:[{scale:this.animate.interpolate({inputRange:[0,1],outputRange:[0,1]})}]}}}]),t})();r.default=y},793,[20,792]);
__d(function(e,t,r,o,l){Object.defineProperty(o,"__esModule",{value:!0}),o.DEFAULT_ICON_COLOR=o.DEFAULT_ICON_SIZE=o.NativeIconAPI=void 0,o.default=function(e,t,r,o){var l=r?r.replace(/\.(otf|ttf)$/,''):t,i=u.default.oneOf(Object.keys(e)),f=(function(t){function r(){var e,t,o,l;babelHelpers.classCallCheck(this,r);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return o=babelHelpers.possibleConstructorReturn(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),t=o,o.root=null,o.handleRef=function(e){o.root=e},l=t,babelHelpers.possibleConstructorReturn(o,l)}return babelHelpers.inherits(r,t),babelHelpers.createClass(r,[{key:"setNativeProps",value:function(e){this.root&&this.root.setNativeProps(e)}},{key:"render",value:function(){var t=this.props,r=t.name,n=t.size,i=t.color,u=t.style,f=t.children,c=babelHelpers.objectWithoutProperties(t,["name","size","color","style","children"]),p=r?e[r]||'?':'';'number'==typeof p&&(p=String.fromCharCode(p));var b={fontSize:n,color:i},d={fontFamily:l,fontWeight:'normal',fontStyle:'normal'};return c.style=[b,u,d,o||{}],c.ref=this.handleRef,a.default.createElement(s.Text,c,p,f)}}]),r})(n.PureComponent);f.propTypes={allowFontScaling:u.default.bool,name:i,size:u.default.number,color:u.default.oneOfType([u.default.string,u.default.number]),children:u.default.node,style:u.default.any},f.defaultProps={size:g,allowFontScaling:!1};var p={};function d(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:I;(0,c.default)();var n=e[t]||'?';'number'==typeof n&&(n=String.fromCharCode(n));var a=(0,s.processColor)(o),i=n+":"+r+":"+a,u=s.PixelRatio.get();return new Promise(function(e,t){var o=p[i];void 0!==o?!o||o instanceof Error?t(o):e({uri:o,scale:u}):m.getImageForFont(l,n,r,a,function(r,o){var l='string'==typeof r?new Error(r):r;p[i]=o||l||!1,!l&&o?e({uri:o,scale:u}):t(l)})})}return f.Button=(0,b.default)(f),f.TabBarItem=(0,v.default)(i,d),f.TabBarItemIOS=f.TabBarItem,f.ToolbarAndroid=(0,y.default)(i,d),f.getImageSource=d,f.loadFont=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],Promise.resolve()},f.hasIcon=function(t){return Object.prototype.hasOwnProperty.call(e,t)},f.getRawGlyphMap=function(){return e},f.getFontFamily=function(){return l},f};var n=t(l[0]),a=babelHelpers.interopRequireDefault(n),i=t(l[1]),u=babelHelpers.interopRequireDefault(i),s=t(l[2]),f=t(l[3]),c=babelHelpers.interopRequireDefault(f),p=t(l[4]),b=babelHelpers.interopRequireDefault(p),d=t(l[5]),v=babelHelpers.interopRequireDefault(d),h=t(l[6]),y=babelHelpers.interopRequireDefault(h),m=o.NativeIconAPI=s.NativeModules.RNVectorIconsManager||s.NativeModules.RNVectorIconsModule,g=o.DEFAULT_ICON_SIZE=12,I=o.DEFAULT_ICON_COLOR='black'},335,[13,111,336,337,338,483,497]);
__d(function(e,t,r,i,l){Object.defineProperty(i,"__esModule",{value:!0}),i.Divider=void 0;var o=t(l[0]),n=babelHelpers.interopRequireDefault(o),a=t(l[1]),u=babelHelpers.interopRequireDefault(a),d=t(l[2]),s=t(l[3]),p=function(e){var t=e.style,r=e.theme,i=babelHelpers.objectWithoutProperties(e,["style","theme"]);return n.default.createElement(d.View,babelHelpers.extends({style:d.StyleSheet.flatten([b.container(r),t])},i))};p.propTypes={style:s.ViewPropTypes.style,theme:u.default.object};var b={container:function(e){return{backgroundColor:e.colors.divider,height:d.StyleSheet.hairlineWidth}}};i.Divider=p,i.default=(0,s.withTheme)(p,'Divider')},540,[13,111,20,310]);
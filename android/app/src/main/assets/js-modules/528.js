__d(function(e,t,r,a,l){Object.defineProperty(a,"__esModule",{value:!0}),a.Badge=void 0;var n=t(l[0]),o=babelHelpers.interopRequireDefault(n),i=t(l[1]),d=babelHelpers.interopRequireDefault(i),s=t(l[2]),u=t(l[3]),p=t(l[4]),y=function(e){var t=e.containerStyle,r=e.textStyle,a=e.badgeStyle,l=e.onPress,n=e.Component,i=void 0===n?l?s.TouchableOpacity:s.View:n,d=e.value,u=e.theme,y=e.status,c=babelHelpers.objectWithoutProperties(e,["containerStyle","textStyle","badgeStyle","onPress","Component","value","theme","status"]),b=(0,p.renderNode)(s.Text,d,{style:s.StyleSheet.flatten([f.text,r&&r])});return o.default.createElement(s.View,{style:s.StyleSheet.flatten([t&&t])},o.default.createElement(i,babelHelpers.extends({},c,{style:s.StyleSheet.flatten([f.badge(u,y),!b&&f.miniBadge,a&&a]),onPress:l}),b))};y.propTypes={containerStyle:u.ViewPropTypes.style,badgeStyle:u.ViewPropTypes.style,textStyle:s.Text.propTypes.style,value:d.default.node,onPress:d.default.func,Component:d.default.func,theme:d.default.object,status:d.default.oneOf(['primary','success','warning','error'])},y.defaultProps={status:'primary'};var f={badge:function(e,t){return{alignSelf:'center',minWidth:18,height:18,borderRadius:9,alignItems:'center',justifyContent:'center',backgroundColor:e.colors[t],borderWidth:s.StyleSheet.hairlineWidth,borderColor:'#fff'}},miniBadge:{paddingHorizontal:0,paddingVertical:0,minWidth:8,height:8,borderRadius:4},text:{fontSize:12,color:'white',paddingHorizontal:4}};a.Badge=y,a.default=(0,u.withTheme)(y,'Badge')},528,[13,111,20,310,323]);
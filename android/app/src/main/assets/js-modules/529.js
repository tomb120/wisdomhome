__d(function(e,t,l,r,o){Object.defineProperty(r,"__esModule",{value:!0}),r.CheckBox=void 0;var n=t(o[0]),a=babelHelpers.interopRequireDefault(n),i=t(o[1]),c=babelHelpers.interopRequireDefault(i),s=t(o[2]),d=t(o[3]),f=babelHelpers.interopRequireDefault(d),p=t(o[4]),u=babelHelpers.interopRequireDefault(p),b=t(o[5]),h=function(e){var t=e.theme,l=babelHelpers.objectWithoutProperties(e,["theme"]),r=l.Component,o=l.checked,n=l.iconRight,i=l.title,c=l.titleProps,d=l.center,p=l.right,b=l.containerStyle,h=l.textStyle,g=l.wrapperStyle,m=l.onPress,k=l.onLongPress,x=l.checkedTitle,P=l.fontFamily,C=l.checkedColor,T=void 0===C?t.colors.primary:C,H=babelHelpers.objectWithoutProperties(l,["Component","checked","iconRight","title","titleProps","center","right","containerStyle","textStyle","wrapperStyle","onPress","onLongPress","checkedTitle","fontFamily","checkedColor"]);return a.default.createElement(r,babelHelpers.extends({},H,{onLongPress:k,onPress:m,style:s.StyleSheet.flatten([y.container,i&&y.containerHasTitle,b&&b])}),a.default.createElement(s.View,{style:s.StyleSheet.flatten([y.wrapper,p&&{justifyContent:'flex-end'},d&&{justifyContent:'center'},g&&g])},!n&&a.default.createElement(u.default,babelHelpers.extends({},e,{checkedColor:T})),a.default.isValidElement(i)?i:i&&a.default.createElement(f.default,babelHelpers.extends({testID:"checkboxTitle",style:s.StyleSheet.flatten([y.text(t),h&&h,P&&{fontFamily:P}])},c),o&&x||i),n&&a.default.createElement(u.default,babelHelpers.extends({},e,{checkedColor:T}))))};h.propTypes=babelHelpers.extends({},u.default.propTypes,{Component:c.default.oneOfType([c.default.object,c.default.func]),iconRight:c.default.bool,title:c.default.oneOfType([c.default.string,c.default.element]),titleProps:c.default.object,center:c.default.bool,right:c.default.bool,containerStyle:b.ViewPropTypes.style,wrapperStyle:b.ViewPropTypes.style,textStyle:s.Text.propTypes.style,onPress:c.default.func,onLongPress:c.default.func,checkedTitle:c.default.string,fontFamily:c.default.string}),h.defaultProps={checked:!1,iconRight:!1,right:!1,center:!1,uncheckedColor:'#bfbfbf',checkedIcon:'check-square-o',uncheckedIcon:'square-o',size:24,Component:s.TouchableOpacity,titleProps:{}};var y={wrapper:{flexDirection:'row',alignItems:'center'},container:{margin:5,marginLeft:10,marginRight:10,padding:10},containerHasTitle:{borderWidth:1,borderRadius:3,backgroundColor:'#fafafa',borderColor:'#ededed'},text:function(e){return babelHelpers.extends({marginLeft:10,marginRight:10,color:e.colors.grey1},babelHelpers.extends({},b.fonts.android.bold))}};r.CheckBox=h,r.default=(0,b.withTheme)(h,'CheckBox')},529,[13,111,20,530,531,310]);
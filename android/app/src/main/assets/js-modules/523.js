__d(function(e,t,r,l,o){Object.defineProperty(l,"__esModule",{value:!0}),l.Icon=void 0;var a=t(o[0]),n=babelHelpers.interopRequireDefault(a),s=t(o[1]),i=babelHelpers.interopRequireDefault(s),d=t(o[2]),u=t(o[3]),b=babelHelpers.interopRequireDefault(u),c=t(o[4]),y=function(e){var t=e.type,r=e.name,l=e.size,o=e.color,a=e.iconStyle,s=e.underlayColor,i=e.reverse,u=e.raised,c=e.containerStyle,y=e.reverseColor,f=e.disabled,C=e.disabledStyle,h=e.onPress,m=e.Component,v=void 0===m?h?d.TouchableHighlight:d.View:m,S=babelHelpers.objectWithoutProperties(e,["type","name","size","color","iconStyle","underlayColor","reverse","raised","containerStyle","reverseColor","disabled","disabledStyle","onPress","Component"]),g=(0,b.default)(t);return n.default.createElement(d.View,{style:c&&c},n.default.createElement(v,babelHelpers.extends({},S,{underlayColor:i?o:s||o,style:d.StyleSheet.flatten([(i||u)&&p.button,(i||u)&&{borderRadius:l+4,height:2*l+4,width:2*l+4},u&&p.raised,{backgroundColor:i?o:u?'white':'transparent',alignItems:'center',justifyContent:'center'},f&&p.disabled,f&&C])},h&&{disabled:f},{onPress:h}),n.default.createElement(g,{testID:"iconIcon",style:d.StyleSheet.flatten([{backgroundColor:'transparent'},a&&a]),size:l,name:r,color:i?y:o})))};y.propTypes={type:i.default.string,name:i.default.string,size:i.default.number,color:i.default.string,Component:i.default.func,underlayColor:i.default.string,reverse:i.default.bool,raised:i.default.bool,containerStyle:c.ViewPropTypes.style,iconStyle:d.Text.propTypes.style,onPress:i.default.func,reverseColor:i.default.string,disabled:i.default.bool,disabledStyle:c.ViewPropTypes.style},y.defaultProps={underlayColor:'white',reverse:!1,raised:!1,size:24,color:'black',reverseColor:'white',disabled:!1,type:'material'};var p=d.StyleSheet.create({button:{margin:7},raised:babelHelpers.extends({},{elevation:2}),disabled:{backgroundColor:'#D1D5D8'}});l.Icon=y,l.default=(0,c.withTheme)(y,'Icon')},523,[13,111,20,333,310]);
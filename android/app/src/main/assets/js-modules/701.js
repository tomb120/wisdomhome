__d(function(e,t,r,n,a){Object.defineProperty(n,"__esModule",{value:!0});var l=t(a[0]),i=babelHelpers.interopRequireDefault(l),o=t(a[1]),c=t(a[2]),u=t(a[3]),d=babelHelpers.interopRequireDefault(u),f=function(e){var t=e.items,r=e.activeItemKey,n=e.activeTintColor,a=e.activeBackgroundColor,l=e.inactiveTintColor,u=e.inactiveBackgroundColor,f=e.getLabel,y=e.renderIcon,b=e.onItemPress,v=e.itemsContainerStyle,m=e.itemStyle,p=e.labelStyle,g=e.activeLabelStyle,C=e.inactiveLabelStyle,I=e.iconContainerStyle,P=e.drawerPosition;return i.default.createElement(o.View,{style:[s.container,v]},t.map(function(e,t){var v,S=r===e.key,k=S?n:l,w=S?a:u,E={route:e,index:t,focused:S,tintColor:k},H=y(E),T=f(E),V=S?g:C;return i.default.createElement(d.default,{key:e.key,onPress:function(){b({route:e,focused:S})},delayPressIn:0},i.default.createElement(c.SafeAreaView,{style:{backgroundColor:w},forceInset:(v={},babelHelpers.defineProperty(v,P,'always'),babelHelpers.defineProperty(v,'left'===P?'right':'left','never'),babelHelpers.defineProperty(v,"vertical",'never'),v)},i.default.createElement(o.View,{style:[s.item,m]},H?i.default.createElement(o.View,{style:[s.icon,S?null:s.inactiveIcon,I]},H):null,'string'==typeof T?i.default.createElement(o.Text,{style:[s.label,{color:k},p,V]},T):T)))}))};f.defaultProps={activeTintColor:'#2196f3',activeBackgroundColor:'rgba(0, 0, 0, .04)',inactiveTintColor:'rgba(0, 0, 0, .87)',inactiveBackgroundColor:'transparent'};var s=o.StyleSheet.create({container:{paddingVertical:4},item:{flexDirection:'row',alignItems:'center'},icon:{marginHorizontal:16,width:24,alignItems:'center'},inactiveIcon:{opacity:.62},label:{margin:16,fontWeight:'bold'}});n.default=f},701,[13,20,628,702]);
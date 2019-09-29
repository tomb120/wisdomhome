__d(function(e,t,n,o,r){Object.defineProperty(o,"__esModule",{value:!0});var i=t(r[0]),a=babelHelpers.interopRequireWildcard(i),l=t(r[1]),s=babelHelpers.interopRequireDefault(l),c=t(r[2]),u=t(r[3]),p=babelHelpers.interopRequireDefault(u),d=t(r[4]),h=Boolean(c.NativeModules.NativeAnimatedModule),b=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));f.call(n);var o=1;n.props.scrollEnabled&&(n._getTabWidth(n.props)||(o=0));var r=n.props.scrollEnabled&&n.props.layout.width?{x:n._getScrollAmount(n.props,n.props.navigationState.index),y:0}:void 0;return n.state={visibility:new c.Animated.Value(o),scrollAmount:new c.Animated.Value(0),initialOffset:r},n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){this.props.scrollEnabled&&this._startTrackingPosition()}},{key:"componentDidUpdate",value:function(e){var t=this._getTabWidth(e),n=this._getTabWidth(this.props),o='number'==typeof this._pendingIndex?this._pendingIndex:this.props.navigationState.index;this._pendingIndex=null,t!==n&&n&&this.state.visibility.setValue(1),e.navigationState.routes.length!==this.props.navigationState.routes.length||e.layout.width!==this.props.layout.width?this._resetScroll(this.props.navigationState.index,!1):e.navigationState.index!==o&&this._resetScroll(this.props.navigationState.index)}},{key:"componentWillUnmount",value:function(){this._stopTrackingPosition()}},{key:"render",value:function(){var e=this,t=this.props,n=t.position,o=t.navigationState,r=t.scrollEnabled,i=t.bounces,l=o.routes,s=this._getTabWidth(this.props),u=s*l.length,d=[-1].concat(babelHelpers.toConsumableArray(l.map(function(e,t){return t}))),b=c.Animated.multiply(this.state.scrollAmount,-1);return a.createElement(c.Animated.View,{style:[m.tabBar,this.props.style]},a.createElement(c.Animated.View,{pointerEvents:"none",style:[m.indicatorContainer,r?{width:u,transform:[{translateX:b}]}:null]},this._renderIndicator(babelHelpers.extends({},this.props,{width:s}))),a.createElement(c.View,{style:m.scroll},a.createElement(c.Animated.ScrollView,{horizontal:!0,keyboardShouldPersistTaps:"handled",scrollEnabled:r,bounces:i,alwaysBounceHorizontal:!1,scrollsToTop:!1,showsHorizontalScrollIndicator:!1,automaticallyAdjustContentInsets:!1,overScrollMode:"never",contentContainerStyle:[m.tabContent,r?null:m.container],scrollEventThrottle:1,onScroll:c.Animated.event([{nativeEvent:{contentOffset:{x:this.state.scrollAmount}}}],{useNativeDriver:h}),onScrollBeginDrag:this._handleBeginDrag,onScrollEndDrag:this._handleEndDrag,onMomentumScrollBegin:this._handleMomentumScrollBegin,onMomentumScrollEnd:this._handleMomentumScrollEnd,contentOffset:this.state.initialOffset,ref:function(t){return e._scrollView=t&&t.getNode()}},l.map(function(t,i){var l=d.map(function(e){return e===i?1:.7}),u=c.Animated.multiply(e.state.visibility,n.interpolate({inputRange:d,outputRange:l})),h=e._renderLabel({route:t}),b=e.props.renderIcon?e.props.renderIcon({route:t}):null,f=e.props.renderBadge?e.props.renderBadge({route:t}):null,g={};g.opacity=u,b&&(h?g.paddingTop=8:g.padding=12);var _=c.StyleSheet.flatten(e.props.tabStyle),y=_&&void 0!==_.width||!0===r,v={};y&&(g.width=s),_&&'number'==typeof _.flex?v.flex=_.flex:y||(v.flex=1);var S=e.props.getAccessibilityLabel({route:t});S=void 0!==S?S:e.props.getLabelText({route:t});var w=i===o.index;return a.createElement(p.default,{borderless:!0,key:t.key,testID:e.props.getTestID({route:t}),accessible:e.props.getAccessible({route:t}),accessibilityLabel:S,accessibilityTraits:w?['button','selected']:'button',accessibilityComponentType:"button",pressColor:e.props.pressColor,pressOpacity:e.props.pressOpacity,delayPressIn:0,onPress:function(){return e._handleTabPress({route:t})},onLongPress:function(){return e._handleTabLongPress({route:t})},style:v},a.createElement(c.View,{pointerEvents:"none",style:m.container},a.createElement(c.Animated.View,{style:[m.tabItem,g,_,m.container]},b,h),f?a.createElement(c.Animated.View,{style:[m.badge,{opacity:e.state.visibility}]},f):null))}))))}}]),t})(a.Component);b.propTypes=babelHelpers.extends({},d.SceneRendererPropType,{scrollEnabled:s.default.bool,bounces:s.default.bool,pressColor:p.default.propTypes.pressColor,pressOpacity:p.default.propTypes.pressOpacity,getLabelText:s.default.func,getAccessible:s.default.func,getAccessibilityLabel:s.default.func,getTestID:s.default.func,renderIcon:s.default.func,renderLabel:s.default.func,renderIndicator:s.default.func,onTabPress:s.default.func,onTabLongPress:s.default.func,labelStyle:s.default.any,style:s.default.any}),b.defaultProps={getLabelText:function(e){var t=e.route;return'string'==typeof t.title?t.title.toUpperCase():t.title},getAccessible:function(e){var t=e.route;return void 0===t.accessible||t.accessible},getAccessibilityLabel:function(e){return e.route.accessibilityLabel},getTestID:function(e){return e.route.testID}};var f=function(){var t=this;this._isIntial=!0,this._isManualScroll=!1,this._isMomentumScroll=!1,this._startTrackingPosition=function(){t._offsetXListener=t.props.offsetX.addListener(function(e){var n=e.value;t._lastOffsetX=n,t._handlePosition()}),t._panXListener=t.props.panX.addListener(function(e){var n=e.value;t._lastPanX=n,t._handlePosition()})},this._stopTrackingPosition=function(){t.props.offsetX.removeListener(t._offsetXListener),t.props.panX.removeListener(t._panXListener)},this._handlePosition=function(){var e=t.props,n=e.navigationState,o=e.layout;if(0!==o.width){var r=(('number'==typeof t._lastPanX?t._lastPanX:0)+('number'==typeof t._lastOffsetX?t._lastOffsetX:-n.index*o.width))/-(o.width||.001);t._adjustScroll(r)}},this._renderLabel=function(e){if(void 0!==t.props.renderLabel)return t.props.renderLabel(e);var n=t.props.getLabelText(e);return'string'!=typeof n?null:a.createElement(c.Animated.Text,{style:[m.tabLabel,t.props.labelStyle]},n)},this._renderIndicator=function(e){if(void 0!==t.props.renderIndicator)return t.props.renderIndicator(e);var n=e.width,o=e.position,r=e.navigationState,i=c.Animated.multiply(c.Animated.multiply(o.interpolate({inputRange:[0,r.routes.length-1],outputRange:[0,r.routes.length-1],extrapolate:'clamp'}),n),c.I18nManager.isRTL?-1:1);return a.createElement(c.Animated.View,{style:[m.indicator,{width:n,transform:[{translateX:i}]},t.props.indicatorStyle]})},this._getTabWidth=function(e){var t=e.layout,n=e.navigationState,o=e.tabStyle,r=c.StyleSheet.flatten(o);if(r)switch(typeof r.width){case'number':return r.width;case'string':if(r.width.endsWith('%')){var i=parseFloat(r.width);if(Number.isFinite(i))return t.width*(i/100)}}return e.scrollEnabled?t.width/5*2:t.width/n.routes.length},this._handleTabPress=function(e){var n=e.route;t._pendingIndex=t.props.navigationState.routes.indexOf(n),t.props.onTabPress&&t.props.onTabPress({route:n}),t.props.jumpTo(n.key)},this._handleTabLongPress=function(e){var n=e.route;t.props.onTabLongPress&&t.props.onTabLongPress({route:n})},this._normalizeScrollValue=function(e,n){var o=e.layout,r=e.navigationState,i=t._getTabWidth(e),a=Math.max(i*r.routes.length,o.width)-o.width;return Math.max(Math.min(n,a),0)},this._getScrollAmount=function(e,n){var o=e.layout,r=t._getTabWidth(e)*(n+.5)-o.width/2;return t._normalizeScrollValue(e,r)},this._adjustScroll=function(n){t.props.scrollEnabled&&(e.cancelAnimationFrame(t._scrollResetCallback),t._scrollView&&t._scrollView.scrollTo({x:t._normalizeScrollValue(t.props,t._getScrollAmount(t.props,n)),animated:!t._isIntial}),t._isIntial=!1)},this._resetScroll=function(n){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.props.scrollEnabled&&(e.cancelAnimationFrame(t._scrollResetCallback),t._scrollResetCallback=e.requestAnimationFrame(function(){t._scrollView&&t._scrollView.scrollTo({x:t._getScrollAmount(t.props,n),animated:o})}))},this._handleBeginDrag=function(){t._isManualScroll=!0,t._isMomentumScroll=!1},this._handleEndDrag=function(){e.requestAnimationFrame(function(){t._isMomentumScroll||(t._isManualScroll=!1)})},this._handleMomentumScrollBegin=function(){t._isMomentumScroll=!0},this._handleMomentumScrollEnd=function(){t._isMomentumScroll=!1,t._isManualScroll=!1}};o.default=b;var m=c.StyleSheet.create({container:{flex:1},scroll:{overflow:'scroll'},tabBar:{backgroundColor:'#2196f3',elevation:4,shadowColor:'black',shadowOpacity:.1,shadowRadius:c.StyleSheet.hairlineWidth,shadowOffset:{height:c.StyleSheet.hairlineWidth},zIndex:0},tabContent:{flexDirection:'row',flexWrap:'nowrap'},tabLabel:{backgroundColor:'transparent',color:'white',margin:8},tabItem:{flex:1,padding:8,alignItems:'center',justifyContent:'center'},badge:{position:'absolute',top:0,right:0},indicatorContainer:{position:'absolute',top:0,left:0,right:0,bottom:0},indicator:{backgroundColor:'#ffeb3b',position:'absolute',left:0,bottom:0,right:0,height:2}})},731,[13,111,20,732,733]);
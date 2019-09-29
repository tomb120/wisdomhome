__d(function(e,t,n,a,i){Object.defineProperty(a,"__esModule",{value:!0});var r=t(i[0]),o=babelHelpers.interopRequireWildcard(r),s=t(i[1]),l=babelHelpers.interopRequireDefault(s),p=t(i[2]),d=t(i[3]),u={timing:p.Animated.spring,tension:68,friction:12},h=(function(e){function t(){var e,n,a,i;babelHelpers.classCallCheck(this,t);for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=a=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a._handleHandlerStateChange=function(e){var t=a.props.GestureHandler;if(e.nativeEvent.state===t.State.BEGAN)a.props.onSwipeStart&&a.props.onSwipeStart();else if(e.nativeEvent.state===t.State.END){a.props.onSwipeEnd&&a.props.onSwipeEnd();var n=a.props,i=n.navigationState,r=n.layout,o=n.swipeDistanceThreshold,s=void 0===o?r.width/1.75:o,l=n.swipeVelocityThreshold,p=void 0===l?150:l,d=e.nativeEvent,u=d.translationX,h=d.translationY,v=d.velocityX,c=d.velocityY,b='number'==typeof a._pendingIndex?a._pendingIndex:i.index,g=b;Math.abs(u)>Math.abs(h)&&Math.abs(v)>Math.abs(c)&&(Math.abs(u)>s||Math.abs(v)>p)&&(g=Math.round(Math.min(Math.max(0,b-u/Math.abs(u)),i.routes.length-1))),isFinite(g)&&a.props.canJumpToTab(a.props.navigationState.routes[g])||(g=b),a._transitionTo(g,v)}},a._transitionTo=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=-e*a.props.layout.width;if(!1===a.props.animationEnabled||!1===n)return a.props.panX.setValue(0),void a.props.offsetX.setValue(i);var r=u.timing,o=babelHelpers.objectWithoutProperties(u,["timing"]),s=a.props.useNativeDriver;p.Animated.parallel([r(a.props.panX,babelHelpers.extends({},o,{toValue:0,velocity:t,useNativeDriver:s})),r(a.props.offsetX,babelHelpers.extends({},o,{toValue:i,velocity:t,useNativeDriver:s}))]).start(function(t){if(t.finished){var n=a.props.navigationState.routes[e];a.props.jumpTo(n.key),a.props.onAnimationEnd&&a.props.onAnimationEnd(),a._pendingIndex=null}}),a._pendingIndex=e},i=n,babelHelpers.possibleConstructorReturn(a,i)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidUpdate",value:function(e){e.navigationState.routes.length!==this.props.navigationState.routes.length||e.layout.width!==this.props.layout.width?this._transitionTo(this.props.navigationState.index,void 0,!1):e.navigationState.index!==this.props.navigationState.index&&this.props.navigationState.index!==this._pendingIndex&&this._transitionTo(this.props.navigationState.index)}},{key:"render",value:function(){var e=this,t=this.props,n=t.GestureHandler,a=t.panX,i=t.offsetX,r=t.layout,s=t.navigationState,l=t.swipeEnabled,d=t.children,u=r.width,h=s.routes,c=u*(h.length-1),b=h.length>1?p.Animated.add(a,i).interpolate({inputRange:[-c,0],outputRange:[-c,0],extrapolate:'clamp'}):0;return o.createElement(n.PanGestureHandler,{enabled:0!==r.width&&!1!==l,minDeltaX:10,onGestureEvent:p.Animated.event([{nativeEvent:{translationX:this.props.panX}}],{useNativeDriver:this.props.useNativeDriver}),onHandlerStateChange:this._handleHandlerStateChange},o.createElement(p.Animated.View,{style:[v.sheet,u?{width:h.length*u,transform:[{translateX:b}]}:null]},o.Children.map(d,function(t,n){var a=s.routes[n],i=n===s.index;return o.createElement(p.View,{key:a.key,testID:e.props.getTestID({route:a}),accessibilityElementsHidden:!i,importantForAccessibility:i?'auto':'no-hide-descendants',style:u?{width:u}:i?p.StyleSheet.absoluteFill:null},i||u?t:null)})))}}]),t})(o.Component);h.propTypes=babelHelpers.extends({},d.PagerRendererPropType,{swipeDistanceThreshold:l.default.number,swipeVelocityThreshold:l.default.number,GestureHandler:l.default.object}),h.defaultProps={canJumpToTab:function(){return!0}},a.default=h;var v=p.StyleSheet.create({sheet:{flex:1,flexDirection:'row',alignItems:'stretch'}})},738,[13,111,20,733]);
__d(function(e,t,n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var o=t(i[0]),a=babelHelpers.interopRequireDefault(o),s=t(i[1]),l=babelHelpers.interopRequireDefault(s),p=t(i[2]),d=t(i[3]),u=babelHelpers.interopRequireDefault(d),c=t(i[4]),f=babelHelpers.interopRequireDefault(c),g=t(i[5]),h=babelHelpers.interopRequireDefault(g),_=t(i[6]),v=babelHelpers.interopRequireDefault(_),m=t(i[7]),b=babelHelpers.interopRequireDefault(m),y=t(i[8]),P=babelHelpers.interopRequireDefault(y),H=t(i[9]),R=t(i[10]),x=babelHelpers.interopRequireDefault(R),k=(t(i[11]),function(){}),T=p.Dimensions.get('window'),V=(T.width,T.height,p.Easing.inOut(p.Easing.ease)),C=['center','left'],I=500,E=.5,D=20,M=25,G=135,S=function(e){e.__isNative&&0===Object.keys(e._listeners).length&&e.addListener(k)},w=function(e){return 56},L=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._gestureStartValue=0,n._isResponding=!1,n._immediateIndex=null,n._panResponder=p.PanResponder.create({onPanResponderTerminate:function(){var e=n.props.transitionProps.navigation.state.index;n._isResponding=!1,n._reset(e,0),n.props.onGestureCanceled&&n.props.onGestureCanceled()},onPanResponderGrant:function(){var e=n.props.transitionProps,t=e.navigation,r=e.position,i=e.scene;if(t.state.index!==i.index)return!1;r.stopAnimation(function(e){n._isResponding=!0,n._gestureStartValue=e}),n.props.onGestureBegin&&n.props.onGestureBegin()},onMoveShouldSetPanResponder:function(e,t){var r=n.props,i=r.transitionProps,o=i.navigation,a=i.layout,s=i.scene,l=r.mode,d=o.state.index,u='modal'===l,c=s.descriptor.options,f=c.gestureDirection,g='string'==typeof f?'inverted'===f:p.I18nManager.isRTL;if(d!==s.index)return!1;var h=null==n._immediateIndex?d:n._immediateIndex,_=t[u?'dy':'dx'],v=e.nativeEvent[u?'pageY':'pageX'],m=u?a.height.__getValue():a.width.__getValue(),b=!!m,y=g?m-(v-_):v-_,P=c.gestureResponseDistance,H=void 0===P?{}:P;return!(y>(u?H.vertical||G:H.horizontal||M))&&(Math.abs(_)>D&&b&&!(0===h))},onPanResponderMove:function(e,t){var r=n.props,i=r.transitionProps,o=i.navigation,a=i.position,s=i.layout,d=i.scene,u=r.mode,c=o.state.index,f='modal'===u,g=d.descriptor.options.gestureDirection,h='string'==typeof g?'inverted'===g:p.I18nManager.isRTL,_=n._gestureStartValue,v=f?'dy':'dx',m=f?s.height.__getValue():s.width.__getValue(),b='dx'===v&&h?_+t[v]/m:_-t[v]/m,y=(0,l.default)(c-1,b,c);a.setValue(y)},onPanResponderTerminationRequest:function(){return!1},onPanResponderRelease:function(e,t){var r=n.props,i=r.transitionProps,o=i.navigation,a=i.position,s=i.layout,l=i.scene,d=r.mode,u=o.state.index,c='modal'===d,f=l.descriptor.options.gestureDirection,g='string'==typeof f?'inverted'===f:p.I18nManager.isRTL;if(n._isResponding){n._isResponding=!1;var h=null==n._immediateIndex?u:n._immediateIndex,_=c?s.height.__getValue():s.width.__getValue(),v=g?-1:1,m=v*t[c?'dy':'dx'],b=v*t[c?'vy':'vx'],y=_/I,P=Math.max(Math.abs(b),y),H=g?(_-m)/P:m/P,R=g?m/P:(_-m)/P;a.stopAnimation(function(e){return b<-.5?(n.props.onGestureCanceled&&n.props.onGestureCanceled(),void n._reset(h,H)):b>.5?(n.props.onGestureFinish&&n.props.onGestureFinish(),void n._goBack(h,R)):void(e<=u-E?(n.props.onGestureFinish&&n.props.onGestureFinish(),n._goBack(h,R)):(n.props.onGestureCanceled&&n.props.onGestureCanceled(),n._reset(h,H)))})}}}),n._onFloatingHeaderLayout=function(e){n.setState({floatingHeaderHeight:e.nativeEvent.layout.height})},n._getTransitionConfig=function(){var e='modal'===n.props.mode;return x.default.getTransitionConfig(n.props.transitionConfig,n.props.transitionProps,n.props.lastTransitionProps,e)},n._renderCard=function(e){var t=n._getTransitionConfig().screenInterpolator,r=t&&t(babelHelpers.extends({},n.props.transitionProps,{scene:e})),i=null!==e.descriptor.options.header,o=n._getHeaderMode(),s=0;return i||'float'!==o||(s=-n.state.floatingHeaderHeight),a.default.createElement(u.default,babelHelpers.extends({},n.props.transitionProps,{key:"card_"+e.key,style:[r,{marginTop:s},n.props.cardStyle],scene:e}),n._renderInnerScene(e))},n.state={floatingHeaderHeight:w(e.isLandscape)},n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"_renderHeader",value:function(e,t){var n=e.descriptor.options.header;if(null===n&&'screen'===t)return null;if(a.default.isValidElement(n))return n;var r=n||function(e){return a.default.createElement(f.default,e)},i=this._getTransitionConfig(),o=i.headerLeftInterpolator,s=i.headerTitleInterpolator,l=i.headerRightInterpolator,p=this.props,d=(p.mode,p.transitionProps),u=(p.lastTransitionProps,babelHelpers.objectWithoutProperties(p,["mode","transitionProps","lastTransitionProps"]));return a.default.createElement(H.NavigationProvider,{value:e.descriptor.navigation},r(babelHelpers.extends({},u,d,{scene:e,mode:t,transitionPreset:this._getHeaderTransitionPreset(),layoutPreset:this._getHeaderLayoutPreset(),backTitleVisible:this._getheaderBackTitleVisible(),leftInterpolator:o,titleInterpolator:s,rightInterpolator:l})))}},{key:"_animatedSubscribe",value:function(e){S(e.transitionProps.layout.width),S(e.transitionProps.layout.height),S(e.transitionProps.position)}},{key:"_reset",value:function(e,t){p.Animated.timing(this.props.transitionProps.position,{toValue:e,duration:t,easing:V,useNativeDriver:this.props.transitionProps.position.__isNative}).start()}},{key:"_goBack",value:function(e,t){var n=this,r=this.props.transitionProps,i=r.navigation,o=r.position,a=r.scenes,s=Math.max(e-1,0);this._immediateIndex=s;p.Animated.timing(o,{toValue:s,duration:t,easing:V,useNativeDriver:o.__isNative}).start(function(){n._immediateIndex=null;var e=a.find(function(e){return e.index===s+1});!n._isResponding&&e&&(i.dispatch(h.default.back({key:e.route.key,immediate:!0})),i.dispatch(v.default.completeTransition()))})}},{key:"render",value:function(){var e=this,t=null,n=this._getHeaderMode();if('float'===n){var r=this.props.transitionProps.scene;t=a.default.createElement(p.View,{pointerEvents:"box-none",onLayout:this._onFloatingHeaderLayout},this._renderHeader(r,n))}var i=this.props,o=i.transitionProps,s=o.scene,l=o.scenes,d=(i.mode,s.descriptor.options),u='boolean'==typeof d.gesturesEnabled&&d.gesturesEnabled,c=u?this._panResponder:null,f=u?c.panHandlers:{},g=[q.container,this._getTransitionConfig().containerStyle];return a.default.createElement(p.View,babelHelpers.extends({},f,{style:g}),a.default.createElement(p.View,{style:q.scenes},l.map(function(t){return e._renderCard(t)})),t)}},{key:"_getHeaderMode",value:function(){return this.props.headerMode?this.props.headerMode:'screen'}},{key:"_getHeaderLayoutPreset",value:function(){var e=this.props.headerLayoutPreset;return e&&C.includes(e)?e:'left'}},{key:"_getHeaderTransitionPreset",value:function(){return'fade-in-place'}},{key:"_getheaderBackTitleVisible",value:function(){return this.props.headerBackTitleVisible}},{key:"_renderInnerScene",value:function(e){var t=e.descriptor,n=(t.options,t.navigation),r=(0,t.getComponent)(),i=this.props.screenProps,o=this._getHeaderMode();return'screen'===o?a.default.createElement(p.View,{style:q.container},a.default.createElement(p.View,{style:q.scenes},a.default.createElement(b.default,{screenProps:i,navigation:n,component:r})),this._renderHeader(e,o)):a.default.createElement(b.default,{screenProps:i,navigation:n,component:r})}}]),t})(a.default.Component),q=p.StyleSheet.create({container:{flex:1,flexDirection:'column-reverse'},scenes:{flex:1}});r.default=(0,P.default)(L)},651,[13,652,20,653,656,631,669,670,667,671,677,679]);
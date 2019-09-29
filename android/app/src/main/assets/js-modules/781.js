__d(function(e,t,n,i,s){'use strict';Object.defineProperty(i,"__esModule",{value:!0});var r=t(s[0]),o=babelHelpers.interopRequireDefault(r),a=t(s[1]),l=babelHelpers.interopRequireDefault(a),p=t(s[2]),u=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.ensureScrollEnabled=function(){n.parentScrollEnabled||(n.parentScrollEnabled=!0,n.props.setScrollEnabled&&n.props.setScrollEnabled(!0))},n.isOpen=!1,n.previousTrackedTranslateX=0,n.previousTrackedDirection=null,n.horizontalSwipeGestureBegan=!1,n.swipeInitialX=null,n.parentScrollEnabled=!0,n.ranPreview=!1,n._ensureScrollEnabledTimer=null,n.state={dimensionsSet:!1,hiddenHeight:0,hiddenWidth:0},n._translateX=new p.Animated.Value(0),n.props.onSwipeValueChange&&n._translateX.addListener(function(e){var t=e.value,i=n.previousTrackedDirection;t!==n.previousTrackedTranslateX&&(i=t>n.previousTrackedTranslateX?'right':'left'),n.props.onSwipeValueChange&&n.props.onSwipeValueChange({isOpen:n.isOpen,direction:i,value:t}),n.previousTrackedTranslateX=t,n.previousTrackedDirection=i}),n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentWillMount",value:function(){var e=this;this._panResponder=p.PanResponder.create({onMoveShouldSetPanResponder:function(t,n){return e.handleOnMoveShouldSetPanResponder(t,n)},onPanResponderMove:function(t,n){return e.handlePanResponderMove(t,n)},onPanResponderRelease:function(t,n){return e.handlePanResponderEnd(t,n)},onPanResponderTerminate:function(t,n){return e.handlePanResponderEnd(t,n)},onShouldBlockNativeResponder:function(e){return!1}})}},{key:"componentWillUnmount",value:function(){clearTimeout(this._ensureScrollEnabledTimer),this._translateX.removeAllListeners()}},{key:"shouldComponentUpdate",value:function(e,t){return!!(this.state.hiddenHeight!==t.hiddenHeight||this.state.hiddenWidth!==t.hiddenWidth||!this.props.shouldItemUpdate||this.props.shouldItemUpdate&&this.props.shouldItemUpdate(this.props.item,e.item))}},{key:"getPreviewAnimation",value:function(e,t){return p.Animated.timing(this._translateX,{duration:this.props.previewDuration,toValue:e,delay:t})}},{key:"onContentLayout",value:function(e){var t=this;if(this.setState({dimensionsSet:!this.props.recalculateHiddenLayout,hiddenHeight:e.nativeEvent.layout.height,hiddenWidth:e.nativeEvent.layout.width}),this.props.preview&&!this.ranPreview){this.ranPreview=!0;var n=this.props.previewOpenValue||.5*this.props.rightOpenValue;this.getPreviewAnimation(n,this.props.previewOpenDelay).start(function(e){t.getPreviewAnimation(0,300).start()})}}},{key:"onRowPress",value:function(){this.props.onRowPress?this.props.onRowPress():this.props.closeOnRowPress&&this.closeRow()}},{key:"handleOnMoveShouldSetPanResponder",value:function(e,t){var n=t.dx;return Math.abs(n)>this.props.directionalDistanceChangeThreshold}},{key:"handlePanResponderMove",value:function(e,t){var n=t.dx,i=t.dy,s=Math.abs(n),r=Math.abs(i);if(s>this.props.directionalDistanceChangeThreshold||r>this.props.directionalDistanceChangeThreshold){if(r>s&&!this.horizontalSwipeGestureBegan)return;this.parentScrollEnabled&&(this.parentScrollEnabled=!1,this.props.setScrollEnabled&&this.props.setScrollEnabled(!1)),null===this.swipeInitialX&&(this.swipeInitialX=this._translateX._value),this.horizontalSwipeGestureBegan||(this.horizontalSwipeGestureBegan=!0,this.props.swipeGestureBegan&&this.props.swipeGestureBegan());var o=this.swipeInitialX+n;this.props.disableLeftSwipe&&o<0&&(o=0),this.props.disableRightSwipe&&o>0&&(o=0),this.props.stopLeftSwipe&&o>this.props.stopLeftSwipe&&(o=this.props.stopLeftSwipe),this.props.stopRightSwipe&&o<this.props.stopRightSwipe&&(o=this.props.stopRightSwipe),this._translateX.setValue(o)}}},{key:"handlePanResponderEnd",value:function(e,t){var n=this.props.swipeToOpenVelocityContribution,i=this.props.rightOpenValue*n*(Math.min(t.vx,5)/5);this._ensureScrollEnabledTimer=setTimeout(this.ensureScrollEnabled,300);var s=0;this._translateX._value>=0?this.swipeInitialX<this._translateX._value?this._translateX._value-i>this.props.leftOpenValue*(this.props.swipeToOpenPercent/100)&&(s=this.props.leftOpenValue):this._translateX._value-i>this.props.leftOpenValue*(1-this.props.swipeToClosePercent/100)&&(s=this.props.leftOpenValue):this.swipeInitialX>this._translateX._value?this._translateX._value-i<this.props.rightOpenValue*(this.props.swipeToOpenPercent/100)&&(s=this.props.rightOpenValue):this._translateX._value-i<this.props.rightOpenValue*(1-this.props.swipeToClosePercent/100)&&(s=this.props.rightOpenValue),this.manuallySwipeRow(s)}},{key:"closeRow",value:function(){this.manuallySwipeRow(0)}},{key:"manuallySwipeRow",value:function(e){var t=this;p.Animated.spring(this._translateX,{toValue:e,friction:this.props.friction,tension:this.props.tension}).start(function(n){t.ensureScrollEnabled(),0===e?(t.isOpen=!1,t.props.onRowDidClose&&t.props.onRowDidClose()):(t.isOpen=!0,t.props.onRowDidOpen&&t.props.onRowDidOpen(e))}),0===e?this.props.onRowClose&&this.props.onRowClose():this.props.onRowOpen&&this.props.onRowOpen(e),this.swipeInitialX=null,this.horizontalSwipeGestureBegan=!1}},{key:"renderVisibleContent",value:function(){var e=this,t=this.props.children[1].props.onPress;if(t){return o.default.cloneElement(this.props.children[1],babelHelpers.extends({},this.props.children[1].props,{onPress:function(n){e.onRowPress(),t()}}))}return o.default.createElement(p.TouchableOpacity,{activeOpacity:1,onPress:function(t){return e.onRowPress()}},this.props.children[1])}},{key:"renderRowContent",value:function(){var e=this;return this.state.dimensionsSet?o.default.createElement(p.Animated.View,babelHelpers.extends({manipulationModes:['translateX']},this._panResponder.panHandlers,{style:{zIndex:2,transform:[{translateX:this._translateX}]}}),this.renderVisibleContent()):o.default.createElement(p.Animated.View,babelHelpers.extends({manipulationModes:['translateX']},this._panResponder.panHandlers,{onLayout:function(t){return e.onContentLayout(t)},style:{zIndex:2,transform:[{translateX:this._translateX}]}}),this.renderVisibleContent())}},{key:"render",value:function(){return o.default.createElement(p.View,{style:this.props.style?this.props.style:h.container},o.default.createElement(p.View,{style:[h.hidden,{height:this.state.hiddenHeight,width:this.state.hiddenWidth}]},this.props.children[0]),this.renderRowContent())}}]),t})(r.Component),h=p.StyleSheet.create({container:{},hidden:{zIndex:1,bottom:0,left:0,overflow:'hidden',position:'absolute',right:0,top:0}});u.propTypes={setScrollEnabled:l.default.func,swipeGestureBegan:l.default.func,onRowOpen:l.default.func,onRowDidOpen:l.default.func,leftOpenValue:l.default.number,rightOpenValue:l.default.number,stopLeftSwipe:l.default.number,stopRightSwipe:l.default.number,friction:l.default.number,tension:l.default.number,closeOnRowPress:l.default.bool,disableLeftSwipe:l.default.bool,disableRightSwipe:l.default.bool,recalculateHiddenLayout:l.default.bool,onRowClose:l.default.func,onRowDidClose:l.default.func,style:p.ViewPropTypes.style,preview:l.default.bool,previewDuration:l.default.number,previewOpenValue:l.default.number,directionalDistanceChangeThreshold:l.default.number,swipeToOpenPercent:l.default.number,swipeToOpenVelocityContribution:l.default.number,swipeToClosePercent:l.default.number,shouldItemUpdate:l.default.func,onSwipeValueChange:l.default.func},u.defaultProps={leftOpenValue:0,rightOpenValue:0,closeOnRowPress:!0,disableLeftSwipe:!1,disableRightSwipe:!1,recalculateHiddenLayout:!1,preview:!1,previewDuration:300,previewOpenDelay:700,directionalDistanceChangeThreshold:2,swipeToOpenPercent:50,swipeToOpenVelocityContribution:0,swipeToClosePercent:50,item:{}},i.default=u},781,[13,111,20]);
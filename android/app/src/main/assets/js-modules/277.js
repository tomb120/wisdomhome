__d(function(e,t,s,o,i){'use strict';var r=t(i[0]),n=t(i[1]),l=t(i[2]),a=t(i[3]),p=t(i[4]),h=t(i[5]),u=t(i[6]),d=t(i[7]),c=t(i[8]),y=t(i[9]),b=t(i[10]),P=t(i[11]),S=t(i[12]),m={activeOpacity:.85,delayPressOut:100,underlayColor:'black'},f={top:20,left:20,right:20,bottom:30},T=P({displayName:'TouchableHighlight',propTypes:babelHelpers.extends({},c.propTypes,{activeOpacity:l.number,underlayColor:r,style:b.style,onShowUnderlay:l.func,onHideUnderlay:l.func,hasTVPreferredFocus:l.bool,tvParallaxProperties:l.object,testOnly_pressed:l.bool}),mixins:[n,d.Mixin],getDefaultProps:function(){return m},getInitialState:function(){return this._isMounted=!1,this.props.testOnly_pressed?babelHelpers.extends({},this.touchableGetInitialState(),{extraChildStyle:{opacity:this.props.activeOpacity},extraUnderlayStyle:{backgroundColor:this.props.underlayColor}}):babelHelpers.extends({},this.touchableGetInitialState(),{extraChildStyle:null,extraUnderlayStyle:null})},componentDidMount:function(){this._isMounted=!0,S(this.props)},componentWillUnmount:function(){this._isMounted=!1,clearTimeout(this._hideTimeout)},UNSAFE_componentWillReceiveProps:function(e){S(e)},viewConfig:{uiViewClassName:'RCTView',validAttributes:h.RCTView},touchableHandleActivePressIn:function(e){clearTimeout(this._hideTimeout),this._hideTimeout=null,this._showUnderlay(),this.props.onPressIn&&this.props.onPressIn(e)},touchableHandleActivePressOut:function(e){this._hideTimeout||this._hideUnderlay(),this.props.onPressOut&&this.props.onPressOut(e)},touchableHandlePress:function(e){clearTimeout(this._hideTimeout),a.isTVOS||(this._showUnderlay(),this._hideTimeout=setTimeout(this._hideUnderlay,this.props.delayPressOut)),this.props.onPress&&this.props.onPress(e)},touchableHandleLongPress:function(e){this.props.onLongPress&&this.props.onLongPress(e)},touchableGetPressRectOffset:function(){return this.props.pressRetentionOffset||f},touchableGetHitSlop:function(){return this.props.hitSlop},touchableGetHighlightDelayMS:function(){return this.props.delayPressIn},touchableGetLongPressDelayMS:function(){return this.props.delayLongPress},touchableGetPressOutDelayMS:function(){return this.props.delayPressOut},_showUnderlay:function(){this._isMounted&&this._hasPressHandler()&&(this.setState({extraChildStyle:{opacity:this.props.activeOpacity},extraUnderlayStyle:{backgroundColor:this.props.underlayColor}}),this.props.onShowUnderlay&&this.props.onShowUnderlay())},_hideUnderlay:function(){clearTimeout(this._hideTimeout),this._hideTimeout=null,this.props.testOnly_pressed||this._hasPressHandler()&&(this.setState({extraChildStyle:null,extraUnderlayStyle:null}),this.props.onHideUnderlay&&this.props.onHideUnderlay())},_hasPressHandler:function(){return!!(this.props.onPress||this.props.onPressIn||this.props.onPressOut||this.props.onLongPress)},render:function(){var e=p.Children.only(this.props.children);return p.createElement(y,{accessible:!1!==this.props.accessible,accessibilityLabel:this.props.accessibilityLabel,accessibilityComponentType:this.props.accessibilityComponentType,accessibilityTraits:this.props.accessibilityTraits,style:u.compose(this.props.style,this.state.extraUnderlayStyle),onLayout:this.props.onLayout,hitSlop:this.props.hitSlop,isTVSelectable:!0,tvParallaxProperties:this.props.tvParallaxProperties,hasTVPreferredFocus:this.props.hasTVPreferredFocus,onStartShouldSetResponder:this.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:this.touchableHandleResponderTerminationRequest,onResponderGrant:this.touchableHandleResponderGrant,onResponderMove:this.touchableHandleResponderMove,onResponderRelease:this.touchableHandleResponderRelease,onResponderTerminate:this.touchableHandleResponderTerminate,nativeID:this.props.nativeID,testID:this.props.testID},p.cloneElement(e,{style:u.compose(e.props.style,this.state.extraChildStyle)}),d.renderDebugView({color:'green',hitSlop:this.props.hitSlop}))}});s.exports=T},277,[43,45,111,31,114,156,153,169,177,155,115,158,179]);
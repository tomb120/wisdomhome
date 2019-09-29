__d(function(e,t,n,r,o){'use strict';t(o[0]);var s,i=t(o[1]),a=(t(o[2]),t(o[3]),t(o[4])),p=t(o[5]),l=t(o[6]),u=t(o[7]),c=t(o[8]),d=t(o[9]),h=t(o[10])('RCTModalHostView',null),f=0,b=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return t._confirmProps(e),n._identifier=f++,n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this._eventSubscription&&this._eventSubscription.remove()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){t._confirmProps(e)}},{key:"render",value:function(){if(!1===this.props.visible)return null;var e={backgroundColor:this.props.transparent?'transparent':'white'},t=this.props.animationType;t||(t='none',this.props.animated&&(t='slide'));var n=this.props.presentationStyle;n||(n='fullScreen',this.props.transparent&&(n='overFullScreen'));var r=this.props.children;return p.createElement(h,{animationType:t,presentationStyle:n,transparent:this.props.transparent,hardwareAccelerated:this.props.hardwareAccelerated,onRequestClose:this.props.onRequestClose,onShow:this.props.onShow,identifier:this._identifier,style:S.modal,onStartShouldSetResponder:this._shouldSetResponder,supportedOrientations:this.props.supportedOrientations,onOrientationChange:this.props.onOrientationChange},p.createElement(c,{style:[S.container,e]},r))}},{key:"_shouldSetResponder",value:function(){return!0}}],[{key:"_confirmProps",value:function(e){e.presentationStyle&&'overFullScreen'!==e.presentationStyle&&e.transparent&&console.warn("Modal with '"+e.presentationStyle+"' presentation style and 'transparent' value is not supported.")}}]),t})(p.Component);b.propTypes={animationType:l.oneOf(['none','slide','fade']),presentationStyle:l.oneOf(['fullScreen','pageSheet','formSheet','overFullScreen']),transparent:l.bool,hardwareAccelerated:l.bool,visible:l.bool,onRequestClose:(a.isTVOS,l.func.isRequired),onShow:l.func,onDismiss:l.func,animated:d(l.bool,'Use the `animationType` prop instead.'),supportedOrientations:l.arrayOf(l.oneOf(['portrait','portrait-upside-down','landscape','landscape-left','landscape-right'])),onOrientationChange:l.func},b.defaultProps={visible:!0,hardwareAccelerated:!1},b.contextTypes={rootTag:l.number};var y=i.isRTL?'right':'left',S=u.create({modal:{position:'absolute'},container:(s={position:'absolute'},babelHelpers.defineProperty(s,y,0),babelHelpers.defineProperty(s,"top",0),s)});n.exports=b},246,[247,248,75,23,31,114,111,153,155,128,130]);
__d(function(e,t,r,l,s){Object.defineProperty(l,"__esModule",{value:!0});var o=t(s[0]),a=babelHelpers.interopRequireDefault(o),p=t(s[1]),i=(function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){if(p.Platform.Version>=21){var e=this.props,t=e.style,r=babelHelpers.objectWithoutProperties(e,["style"]);return a.default.createElement(p.TouchableNativeFeedback,babelHelpers.extends({},r,{style:null,background:p.TouchableNativeFeedback.Ripple(this.props.pressColor,this.props.borderless)}),a.default.createElement(p.View,{style:t},a.default.Children.only(this.props.children)))}return a.default.createElement(p.TouchableOpacity,this.props,this.props.children)}}]),t})(a.default.Component);i.defaultProps={borderless:!1,pressColor:'rgba(0, 0, 0, .32)'},l.default=i},662,[13,20]);
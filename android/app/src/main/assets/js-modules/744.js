__d(function(e,r,t,n,o){Object.defineProperty(n,"__esModule",{value:!0});var i=r(o[0]),s=babelHelpers.interopRequireDefault(i),l=r(o[1]),u=babelHelpers.interopRequireDefault(l),a={willFocus:'onWillFocus',didFocus:'onDidFocus',willBlur:'onWillBlur',didBlur:'onDidBlur'},c=Object.keys(a),p=(function(e){function r(){var e,t,n,o;babelHelpers.classCallCheck(this,r);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return t=n=babelHelpers.possibleConstructorReturn(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(s))),n.addListener=function(e){var r=n.props[a[e]];r&&(n.subscriptions[e]=n.props.navigation.addListener(e,r))},n.removeListener=function(e){n.subscriptions[e]&&(n.subscriptions[e].remove(),n.subscriptions[e]=void 0)},o=t,babelHelpers.possibleConstructorReturn(n,o)}return babelHelpers.inherits(r,e),babelHelpers.createClass(r,[{key:"componentDidMount",value:function(){this.subscriptions={},c.forEach(this.addListener)}},{key:"componentDidUpdate",value:function(e){var r=this;c.forEach(function(t){r.props[a[t]]!==e[a[t]]&&(r.removeListener(t),r.addListener(t))})}},{key:"componentWillUnmount",value:function(){c.forEach(this.removeListener)}},{key:"render",value:function(){return null}}]),r})(s.default.Component);n.default=(0,u.default)(p)},744,[13,745]);
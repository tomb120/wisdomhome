__d(function(e,t,n,r,l){Object.defineProperty(r,"__esModule",{value:!0});var o=t(l[0]),a=babelHelpers.interopRequireDefault(o),i=t(l[1]),c=(function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this.props.navigation;return a.default.createElement(i.View,{style:s.container},a.default.createElement(i.Text,{style:s.welcome},"Welcome to Page1!"),a.default.createElement(i.Button,{title:"Go Back",onPress:function(){e.goBack()}}))}}]),t})(o.Component);r.default=c;var s=i.StyleSheet.create({container:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'},welcome:{fontSize:20,textAlign:'center',margin:10},instructions:{textAlign:'center',color:'#333333',marginBottom:5}})},758,[13,20]);
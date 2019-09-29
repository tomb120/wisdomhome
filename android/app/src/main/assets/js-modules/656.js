__d(function(e,t,r,n,i){Object.defineProperty(n,"__esModule",{value:!0});var o=t(i[0]),a=babelHelpers.interopRequireDefault(o),l=t(i[1]),s=t(i[2]),d=babelHelpers.interopRequireDefault(s),u=t(i[3]),p=babelHelpers.interopRequireDefault(u),f=t(i[4]),c=babelHelpers.interopRequireDefault(f),h=t(i[5]),b=babelHelpers.interopRequireDefault(h),g=t(i[6]),y=babelHelpers.interopRequireDefault(g),m=t(i[7]),v=babelHelpers.interopRequireDefault(m),k=function(e,t,r,n){if('left'===e){var i={left:56,right:56};return r||(i.left=0),n||(i.right=0),i}if('center'===e){var o={left:56,right:56};return r||n||(o.left=0,o.right=0),o}},C=(function(e){function t(){var e,r,n,i;babelHelpers.classCallCheck(this,t);for(var o=arguments.length,l=Array(o),s=0;s<o;s++)l[s]=arguments[s];return r=n=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={widths:{}},n._renderTitleComponent=function(e){var t=n.props.layoutPreset,r=e.scene.descriptor.options,i=r.headerTitle;if(a.default.isValidElement(i))return i;var o=n._getHeaderTitleString(e.scene),l=r.headerTitleStyle,s=r.headerTintColor,d=r.headerTitleAllowFontScaling,u='center'===t?function(t){n.setState({widths:babelHelpers.extends({},n.state.widths,babelHelpers.defineProperty({},e.scene.key,t.nativeEvent.layout.width))})}:void 0,f=i&&'string'!=typeof i?i:p.default;return a.default.createElement(f,{onLayout:u,allowFontScaling:null==d||d,style:[s?{color:s}:null,'center'===t?{textAlign:'center'}:{textAlign:'left'},l]},o)},n._renderLeftComponent=function(e){var t=e.scene.descriptor.options;if(a.default.isValidElement(t.headerLeft)||null===t.headerLeft)return t.headerLeft;if(t.headerLeft||0!==e.scene.index){var r=n._getBackButtonTitleString(e.scene),i=n._getTruncatedBackButtonTitle(e.scene),o=n.state.widths[e.scene.key]?(n.props.layout.initWidth-n.state.widths[e.scene.key])/2:void 0,l=t.headerLeft||c.default;return a.default.createElement(l,{onPress:function(){requestAnimationFrame(function(){e.scene.descriptor.navigation.goBack(e.scene.descriptor.key)})},pressColorAndroid:t.headerPressColorAndroid,tintColor:t.headerTintColor,backImage:t.headerBackImage,title:r,truncatedTitle:i,backTitleVisible:n.props.backTitleVisible,titleStyle:t.headerBackTitleStyle,layoutPreset:n.props.layoutPreset,width:o})}},n._renderModularLeftComponent=function(e,t,r){var i=e.scene.descriptor,o=i.options,l=i.navigation,s=n._getBackButtonTitleString(e.scene),d=n._getTruncatedBackButtonTitle(e.scene),u=n.state.widths[e.scene.key]?(n.props.layout.initWidth-n.state.widths[e.scene.key])/2:void 0;return a.default.createElement(b.default,{onPress:function(){requestAnimationFrame(function(){l.goBack(e.scene.descriptor.key)})},ButtonContainerComponent:t,LabelContainerComponent:r,pressColorAndroid:o.headerPressColorAndroid,tintColor:o.headerTintColor,backImage:o.headerBackImage,title:s,truncatedTitle:d,titleStyle:o.headerBackTitleStyle,width:u})},n._renderRightComponent=function(e){return e.scene.descriptor.options.headerRight||null},i=r,babelHelpers.possibleConstructorReturn(n,i)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"_getHeaderTitleString",value:function(e){var t=e.descriptor.options;return'string'==typeof t.headerTitle?t.headerTitle:(t.title&&t.title,t.title)}},{key:"_getLastScene",value:function(e){return this.props.scenes.find(function(t){return t.index===e.index-1})}},{key:"_getBackButtonTitleString",value:function(e){var t=this._getLastScene(e);if(!t)return null;var r=t.descriptor.options.headerBackTitle;return r||null===r?r:this._getHeaderTitleString(t)}},{key:"_getTruncatedBackButtonTitle",value:function(e){var t=this._getLastScene(e);return t?t.descriptor.options.headerTruncatedBackTitle:null}},{key:"_renderLeft",value:function(e){var t=e.scene.descriptor.options,r=this.props.transitionPreset,n=e.style;return t.headerLeftContainerStyle&&(n=[n,t.headerLeftContainerStyle]),'uikit'!==r||t.headerBackImage||t.headerLeft||null===t.headerLeft?this._renderSubView(babelHelpers.extends({},e,{style:n}),'left',this._renderLeftComponent,this.props.leftInterpolator):this._renderModularSubView(babelHelpers.extends({},e,{style:n}),'left',this._renderModularLeftComponent,this.props.leftLabelInterpolator,this.props.leftButtonInterpolator)}},{key:"_renderTitle",value:function(e,t){var r=this.props,n=r.layoutPreset,i=r.transitionPreset,o=[{justifyContent:'center'===n?'center':'flex-start'},k(n,0,t.hasLeftComponent,t.hasRightComponent),t.headerTitleContainerStyle];return this._renderSubView(babelHelpers.extends({},e,{style:o}),'title',this._renderTitleComponent,'uikit'===i?this.props.titleFromLeftInterpolator:this.props.titleInterpolator)}},{key:"_renderRight",value:function(e){var t=e.scene.descriptor.options,r=e.style;return t.headerRightContainerStyle&&(r=[r,t.headerRightContainerStyle]),this._renderSubView(babelHelpers.extends({},e,{style:r}),'right',this._renderRightComponent,this.props.rightInterpolator)}},{key:"_renderModularSubView",value:function(e,t,r,n,i){var o=this,s=e.scene,d=s.index,u=s.isStale,p=s.key;if(0!==d){var f=this.props.navigation.state.index-d;if(Math.abs(f)>2)return null;var c=r(e,function(t){var r=t.children;return a.default.createElement(l.Animated.View,{style:[i(babelHelpers.extends({},o.props,e))]},r)},function(t){var r=t.children;return a.default.createElement(l.Animated.View,{style:[n(babelHelpers.extends({},o.props,e))]},r)});if(null===c)return c;var h=0!==f||u?'none':'box-none';return a.default.createElement(l.View,{key:t+"_"+p,pointerEvents:h,style:[x.item,x[t],e.style]},c)}}},{key:"_renderSubView",value:function(e,t,r,n){var i=e.scene,o=i.index,s=i.isStale,d=i.key,u=this.props.navigation.state.index-o;if(Math.abs(u)>2)return null;var p=r(e);if(null==p)return null;var f=0!==u||s?'none':'box-none';return a.default.createElement(l.Animated.View,{pointerEvents:f,key:t+"_"+d,style:[x.item,x[t],e.style,n(babelHelpers.extends({},this.props,e))]},p)}},{key:"_renderHeader",value:function(e){var t=e.scene.descriptor.options;if(null===t.header)return null;var r=this._renderLeft(e),n=this._renderRight(e),i=this._renderTitle(e,{hasLeftComponent:!!r,hasRightComponent:!!n,headerTitleContainerStyle:t.headerTitleContainerStyle}),o=this.props,s=(o.isLandscape,o.transitionPreset,{style:x.header,key:"scene_"+e.scene.key});return t.headerLeft||t.headerBackImage,a.default.createElement(l.View,s,i,r,n)}},{key:"render",value:function(){var e=this,t=void 0,r=this.props,n=r.mode,i=r.scene;r.isLandscape;if('float'===n){var o={};this.props.scenes.forEach(function(e){o[e.index]=e}),t=Object.values(o).map(function(t){return{position:e.props.position,progress:e.props.progress,scene:t}}).map(this._renderHeader,this)}else t=this._renderHeader({position:new l.Animated.Value(this.props.scene.index),progress:new l.Animated.Value(0),scene:this.props.scene});var s=i.descriptor.options,u=s.headerStyle,p=void 0===u?{}:u,f=l.StyleSheet.flatten(p),c=(f.alignItems,f.justifyContent,f.flex,f.flexDirection,f.flexGrow,f.flexShrink,f.flexBasis,f.flexWrap,f.position,f.padding,f.paddingHorizontal,f.paddingRight,f.paddingLeft,f.top,f.right,f.bottom,f.left,babelHelpers.objectWithoutProperties(f,["alignItems","justifyContent","flex","flexDirection","flexGrow","flexShrink","flexBasis","flexWrap","position","padding","paddingHorizontal","paddingRight","paddingLeft","top","right","bottom","left"])),h=[s.headerTransparent?x.transparentContainer:x.container,{height:56},c],b=s.headerForceInset||{top:'always',bottom:'never'};return a.default.createElement(l.Animated.View,{style:[this.props.layoutInterpolator(this.props),null]},a.default.createElement(d.default,{forceInset:b,style:h},a.default.createElement(l.View,{style:l.StyleSheet.absoluteFill},s.headerBackground),a.default.createElement(l.View,{style:x.flexOne},t)))}}],[{key:"HEIGHT",get:function(){return 56}}]),t})(a.default.PureComponent);C.defaultProps={layoutInterpolator:y.default.forLayout,leftInterpolator:y.default.forLeft,leftButtonInterpolator:y.default.forLeftButton,leftLabelInterpolator:y.default.forLeftLabel,titleFromLeftInterpolator:y.default.forCenterFromLeft,titleInterpolator:y.default.forCenter,rightInterpolator:y.default.forRight};var S;S={shadowColor:'black',shadowOpacity:.1,shadowRadius:l.StyleSheet.hairlineWidth,shadowOffset:{height:l.StyleSheet.hairlineWidth},elevation:4};var x=l.StyleSheet.create({container:babelHelpers.extends({backgroundColor:'#FFF'},S),transparentContainer:babelHelpers.extends({position:'absolute',top:0,left:0,right:0},S,{borderBottomWidth:0,borderBottomColor:'transparent',elevation:0}),header:babelHelpers.extends({},l.StyleSheet.absoluteFillObject,{flexDirection:'row'}),item:{backgroundColor:'transparent'},iconMaskContainer:{flex:1,flexDirection:'row',justifyContent:'center'},iconMaskFillerRect:{flex:1,backgroundColor:'#d8d8d8',marginLeft:-3},iconMask:{height:21,width:12,marginLeft:9,marginTop:-.5,alignSelf:'center',resizeMode:'contain',transform:[{scaleX:l.I18nManager.isRTL?-1:1}]},title:{bottom:0,top:0,position:'absolute',alignItems:'center',flexDirection:'row'},left:{left:0,bottom:0,top:0,position:'absolute',alignItems:'center',flexDirection:'row'},right:{right:0,bottom:0,top:0,position:'absolute',flexDirection:'row',alignItems:'center'},flexOne:{flex:1}});n.default=(0,v.default)(C)},656,[13,20,657,660,661,664,665,667,668]);
__d(function(e,t,n,r,a){Object.defineProperty(r,"__esModule",{value:!0});var o=t(a[0]),i=babelHelpers.interopRequireDefault(o),l=t(a[1]),s=t(a[2]),u=babelHelpers.interopRequireDefault(s),c=t(a[3]),d=babelHelpers.interopRequireDefault(c),f=t(a[4]),h=babelHelpers.interopRequireDefault(f),p=t(a[5]),m=babelHelpers.interopRequireWildcard(p),g=t(a[6]),b=t(a[7]),w=babelHelpers.interopRequireDefault(b),y=t(a[8]),v=babelHelpers.interopRequireDefault(y),x=t(a[9]),C=babelHelpers.interopRequireDefault(x),k=t(a[10]),T=(babelHelpers.interopRequireDefault(k),l.Dimensions.get('window')),E=T.width,D=(T.height,(function(e){function t(e){var n=this;babelHelpers.classCallCheck(this,t);var r=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.clickGetVerCode=function(){var e=r.data.mobile.trim();11==e.length&&(r.isEmptyPhone(e)&&r.GetImageCode(e))},r.clickGetImageAgain=function(){r.setState({imageCodeUrl:m.baseurl+'/homeschoolsever/lg/creatvercode?v='+Math.random()})},r.readUserAgreement=function(){},r.checkAgreement=function(){r.setState({checked:!r.state.checked})},r.clickNext=function(){var e,t,a,o;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:if(g.EasyLoading.show('\u52a0\u8f7d\u4e2d...',3e3,'type'),e=r.data.mobile.trim(),!r.isEmptyPhone(e)){n.next=24;break}if(null!=(t=r.data.verCode.trim())&&''!=t){n.next=8;break}return r.refs.toast.show('\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801',1e3),n.abrupt("return");case 8:if(a=r.data.pwd.trim(),o=r.data.newpwd.trim(),null!=a&&''!=a){n.next=13;break}return r.refs.toast.show('\u8bf7\u8bbe\u7f6e\u767b\u5f55\u5bc6\u7801',1e3),n.abrupt("return");case 13:if(null!=o&&''!=o){n.next=16;break}return r.refs.toast.show('\u8bf7\u8bbe\u7f6e\u65b0\u5bc6\u7801',1e3),n.abrupt("return");case 16:if(o===a){n.next=19;break}return r.refs.toast.show('\u5bc6\u7801\u4e0d\u4e00\u81f4',1e3),n.abrupt("return");case 19:if(!(a.length<6)){n.next=22;break}return r.refs.toast.show('\u5bc6\u7801\u957f\u5ea6\u4e0d\u80fd\u5c0f\u4e8e6\u4f4d',1e3),n.abrupt("return");case 22:r.interval&&clearInterval(r.interval),r.registusr(e,a,t);case 24:case"end":return n.stop()}},null,n)},r.clickGetMsgCode=function(){var e=r.data.mobile.trim();r.isEmptyPhone(e)&&(r.countDownTimer(),r.verifycode())},r.nav=r.props.navigation,r.data={mobile:'',verCode:'',pwd:'',newpwd:'',invitCode:'',imageCode:'',isSubmiting:!1},r.state={imageCodeUrl:m.baseurl+'/homeschoolsever/lg/creatvercode?v='+Math.random(),hasImage:!0,showBtn:!0,countDownValue:d.default.CountDownTime,phoneChanged:!1,checked:!0,msg:'',status:0},r}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"isEmptyPhone",value:function(e){return null==e||''==e?(this.refs.toast.show('\u8bf7\u8f93\u5165\u624b\u673a\u53f7',1e3),!1):!!u.default.isPhoneNumber(e)||(this.refs.toast.show('\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7',1e3),!1)}},{key:"componentDidMount",value:function(){}},{key:"cameraAction",value:function(){var e=this;C.default.showImagePicker({title:'\u8bf7\u9009\u62e9',cancelButtonTitle:'\u53d6\u6d88',takePhotoButtonTitle:'\u62cd\u7167',chooseFromLibraryButtonTitle:'\u9009\u62e9\u76f8\u518c',quality:.75,allowsEditing:!0,noData:!1,storageOptions:{skipBackup:!0,path:'images'}},function(t){if(console.log('Response = ',t),t.didCancel)console.log('User cancelled image picker');else if(t.error)console.log('ImagePicker Error: ',t.error);else if(t.customButton)console.log('User tapped custom button: ',t.customButton);else{var n={uri:t.uri};e.setState({avatarSource:n});var r=t.uri,a=[{mime:'',path:""+r}],o=r.split('.');o.length>1&&(a.mime="."+o[o.length-1],e.fileUpload(a))}})}},{key:"registusr",value:function(e,t,n){var r=this,a=new FormData;a.append("phone",e),a.append("password",t),a.append("verifyCode",n);var o=m.baseurl+'/user/updateUserPassword';return g.EasyLoading.show('\u52a0\u8f7d\u4e2d...',3e3,'type'),fetch(o,{method:"POST",headers:{ContentType:'application/x-www-form-urlencoded'},body:a}).then(function(e){return e.json()}).then(function(e){g.EasyLoading.dismis(),r.setState({status:e.status,msg:e.msg},function(){this.refs.toast.show(this.state.msg,1e3),1==this.state.status&&this.props.navigation.navigate('workerset',{name:'Lucy'})})}).catch(function(e){g.EasyLoading.dismis(),r.refs.toast.show('\u8fde\u63a5\u670d\u52a1\u5668\u8d85\u65f6',1e3),console.log(e.message)})}},{key:"msgCodeButtonView",value:function(){return this.state.showBtn?i.default.createElement(l.Text,{style:{color:h.default.tint,fontSize:14}},"\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801"):i.default.createElement(l.Text,{style:{color:h.default.tint,fontSize:14}},this.state.countDownValue,"s\u540e\u91cd\u65b0\u83b7\u53d6")}},{key:"getMessageCode",value:function(e,t){var n;return regeneratorRuntime.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(net.ApiPost('verification','GetCode',{mobile:e,imgcode:t}));case 2:if(n=r.sent,console.log(n),null!=n&&void 0!==n.status){r.next=8;break}return r.abrupt("return",{ok:!1,msg:'\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801\u65f6\u53d1\u751f\u9519\u8bef,\u8bf7\u7a0d\u540e\u91cd\u8bd5'});case 8:if(0!=n.status){r.next=12;break}return r.abrupt("return",{ok:!1,msg:n.error});case 12:if(1!=n.status){r.next=16;break}return r.abrupt("return",{ok:!0,msg:n.data});case 16:if(-100!=n.status){r.next=20;break}return r.abrupt("return",{ok:!1,msg:'\u83b7\u53d6\u592a\u8fc7\u9891\u7e41\uff0c\u8bf7\u91cd\u65b0\u518d\u8bd5'});case 20:return r.abrupt("return",{ok:!1,msg:'\u53d1\u751f\u672a\u77e5\u9519\u8bef'});case 21:case"end":return r.stop()}},null,this)}},{key:"verifycode",value:function(){var e=this,t=m.baseurl+"/user/sendPhoneVerifyCode?phone="+this.data.mobile;return fetch(t,{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({status:t.status,msg:t.msg},function(){1==this.state.status?this.refs.toast.show('\u77ed\u4fe1\u9a8c\u8bc1\u7801\u83b7\u53d6\u6210\u529f',1e3):this.refs.toast.show(this.state.msg)})}).catch(function(t){console.log(t.message),e.refs.toast.show('\u8fde\u63a5\u670d\u52a1\u5668\u8d85\u65f6',1e3)})}},{key:"countDownTimer",value:function(){var e=this;this.setState({showBtn:!1}),this.interval=setInterval(function(){var t=e.state.countDownValue-1;0===t?(e.interval&&clearInterval(e.interval),e.setState({showBtn:!0,countDownValue:d.default.CountDownTime})):e.setState({countDownValue:t})},1e3)}},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return i.default.createElement(l.View,{style:{flexDirection:'column',flex:1,paddingTop:20,justifyContent:'flex-start',backgroundColor:h.default.background}},i.default.createElement(l.View,{style:V.inputView},i.default.createElement(l.Text,{style:V.text},"\u624b\u673a\u53f7"),i.default.createElement(l.TextInput,{style:V.textinput,maxLength:11,keyboardType:"numeric",clearButtonMode:"while-editing",returnKeyType:"done",underlineColorAndroid:"transparent",placeholderTextColor:h.default.subtitle,placeholder:"\u8f93\u5165\u624b\u673a\u53f7",onChangeText:function(t){e.data.mobile=t}})),i.default.createElement(l.View,{style:V.inputView},i.default.createElement(l.Text,{style:V.text},"\u5bc6\u7801"),i.default.createElement(l.TextInput,{style:V.textinput,clearButtonMode:"while-editing",returnKeyType:"done",maxLength:16,underlineColorAndroid:"transparent",secureTextEntry:!0,placeholderTextColor:h.default.subtitle,placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff086-16\u4f4d\uff09",onChangeText:function(t){e.data.pwd=t}})),i.default.createElement(l.View,{style:V.inputView},i.default.createElement(l.Text,{style:V.text},"\u65b0\u5bc6\u7801"),i.default.createElement(l.TextInput,{style:V.textinput,clearButtonMode:"while-editing",returnKeyType:"done",maxLength:16,underlineColorAndroid:"transparent",secureTextEntry:!0,placeholderTextColor:h.default.subtitle,placeholder:"\u8bf7\u8f93\u5165\u65b0\u5bc6\u7801\uff086-16\u4f4d\uff09",onChangeText:function(t){e.data.newpwd=t}})),i.default.createElement(l.View,{style:V.inputView},i.default.createElement(l.Text,{style:V.text},"\u77ed\u4fe1\u9a8c\u8bc1\u7801"),i.default.createElement(l.TextInput,{ref:"msgCode",style:V.textinput,clearButtonMode:"while-editing",returnKeyType:"done",keyboardType:"numeric",underlineColorAndroid:"transparent",placeholderTextColor:h.default.subtitle,placeholder:"\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",onChangeText:function(t){e.data.verCode=t}}),i.default.createElement(l.TouchableHighlight,{onPress:this.clickGetMsgCode,activeOpacity:1,underlayColor:h.default.transparentColor,style:{flexDirection:'row',marginRight:10,borderRadius:5}},i.default.createElement(l.View,{style:{backgroundColor:1==this.state.showBtn?h.default.activeRemind:h.default.inactiveRemind,justifyContent:'center',alignItems:'center',width:110,height:40,borderRadius:5}},i.default.createElement(l.View,null,this.msgCodeButtonView())))),i.default.createElement(l.View,{style:{flexDirection:'column',marginTop:20,alignItems:'center'}},i.default.createElement(v.default,{underlayColor:"#00000000",underlayTxtColor:"#FFFFFF",txtStyle:{color:'#FFFFFF',fontSize:18,textAlign:'center'},style:{height:40,width:E-80,padding:0,backgroundColor:h.default.main,borderRadius:4,marginTop:25},onPress:function(){return e.clickNext()}},"\u4fee\u6539\u5bc6\u7801")),i.default.createElement(g.Loading,null),i.default.createElement(w.default,{ref:"toast",position:"top"}))}}]),t})(o.Component));D.navigationOptions={title:'\u6ce8\u518c'},r.default=D;var V=l.StyleSheet.create({container:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:h.default.background},inputView:{flexDirection:'row',alignItems:'center',borderBottomWidth:1,marginLeft:15,marginRight:15,borderColor:h.default.chatBackground},text:{color:h.default.subtitle,fontSize:14,flex:3,width:85},textinput:{color:h.default.subtitle,marginHorizontal:10,flex:3,height:50,fontSize:13,padding:0}})},773,[13,20,580,579,577,568,569,570,567,566,574]);
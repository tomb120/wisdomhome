__d(function(e,t,n,a,o){Object.defineProperty(a,"__esModule",{value:!0});var r=t(o[0]),l=babelHelpers.interopRequireDefault(r),i=t(o[1]),c=t(o[2]),s=babelHelpers.interopRequireDefault(c),d=t(o[3]),u=babelHelpers.interopRequireDefault(d),m=t(o[4]),f=babelHelpers.interopRequireDefault(m),h=t(o[5]),g=babelHelpers.interopRequireWildcard(h),p=t(o[6]),b=babelHelpers.interopRequireWildcard(p),y=t(o[7]),x=t(o[8]),S=babelHelpers.interopRequireDefault(x),w=t(o[9]),E=(babelHelpers.interopRequireDefault(w),i.Dimensions.get('window')),v=E.width,T=(E.height,null),C='',F=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._separator=function(){return l.default.createElement(i.View,{style:{height:50,backgroundColor:'#7b7b7b'}})},n.handlePressLocal=function(e){'ios'===C?OpenFile.openDoc([{url:n.state.picpath,fileNameOptional:n.state.picpath}],function(e,t){e||console.log(t)}):OpenFile.openDoc([{url:n.state.picpath,fileName:e.split('.')[0],cache:!0,fileType:e.split('.')[1]}],function(e,t){e?console.log(e):(console.log(t),alert(t))})},n.state={noticecomment:[],inputcon:'',rowdata:[],progressNum:.15},n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentWillMount",value:function(){var e=this,t=new Array;t=this.props.navigation.state.params.keydata,this.setState({rowdata:this.props.navigation.state.params.keydata}),i.AsyncStorage.getItem('logininfo',function(n,a){T=JSON.parse(a),void 0!==t.noticecomment&&e.setState({noticecomment:JSON.parse(e.state.rowdata.noticecomment)})}),C="android"}},{key:"componentWillUnmount",value:function(){}},{key:"sendcom",value:function(){var e=this.state.noticecomment,t={};t.commentname=this.state.rowdata.bak1,t.commentcontent=this.state.inputcon,t.commenttime=(0,f.default)().format('YYYY/MM/DD HH:MM'),e.push(t),this.setState({noticecomment:e}),this.addnotice()}},{key:"addnotice",value:function(){var e=this;this.state.rowdata.noticecomment=JSON.stringify(this.state.noticecomment);var t=new FormData;t.append("transdata",JSON.stringify(this.state.rowdata));var n=b.baseurl+"/homeschoolsever/class/addnotice?Username="+T.Username;return y.EasyLoading.show('\u6b63\u5728\u63d0\u4ea4...',3e3),fetch(n,{method:"POST",headers:{'Content-Type':'multipart/form-data'},body:t}).then(function(e){return e.json()}).then(function(t){y.EasyLoading.dismis(),e.setState({status:t.status,msg:t.msg},function(){this.refs.toast.show(this.state.msg,1e3),this.state.status})}).catch(function(e){y.EasyLoading.dismis(),console.log(e.message)})}},{key:"filedownload",value:function(e,t){var n=this,a=b.baseurl+"/homeschoolsever/hs/Download?filename="+e,o=g.ExternalStorageDirectoryPath+"/1/"+e,r={fromUrl:a,toFile:o,background:!0,begin:function(e){console.log('begin',e),console.log('contentLength:',e.contentLength/1024/1024,'M')},progress:function(e){var t=e.bytesWritten/e.contentLength;n.setState({progressNum:t})}};g.exists(o).then(function(t){if(console.log(t),t)n.setState({picpath:'file://'+o}),n.handlePressLocal(e);else try{g.downloadFile(r).promise.then(function(t){200==t.statusCode&&(console.log('file://'+o),n.refs.toast.show("\u4e0b\u8f7d\u5b8c\u6210\uff0c\u8def\u5f84\u4e3a"+o),n.setState({picpath:'file://'+o}),n.handlePressLocal(e))}).catch(function(e){console.log('err',e)})}catch(e){console.log(error)}})}},{key:"render",value:function(){var e=this;return l.default.createElement(i.View,{style:D.containernotice},l.default.createElement(i.View,{style:D.containerbox},l.default.createElement(i.Text,{style:D.contitle},this.state.rowdata.noticetopic),l.default.createElement(i.View,{style:{flexDirection:'column'}},l.default.createElement(i.TouchableOpacity,{onPress:function(){e.props.navigation.navigate('readnamelist',{name:'Lucy'})}},l.default.createElement(i.Image,{source:{uri:'icon_list'},style:D.Icon})),l.default.createElement(i.Text,{style:{alignSelf:'center',fontSize:18,color:'blue'}},"\u5df2\u8bfb\u7edf\u8ba1"))),l.default.createElement(i.View,{style:{flexDirection:'column'}},l.default.createElement(i.View,{style:D.containerbox},l.default.createElement(i.Text,{style:{alignSelf:'center',fontSize:15,color:'gray'}},"\u53d1\u8868\u65f6\u95f4:"),l.default.createElement(i.Text,{style:{alignSelf:'center',fontSize:18,color:'gray'}},this.state.rowdata.noticetime)),l.default.createElement(i.View,{style:D.containerbox},l.default.createElement(i.Text,{style:{alignSelf:'center',fontSize:15,color:'gray'}},"\u53d1\u8d77\u4eba:"),l.default.createElement(i.Text,{style:{alignSelf:'center',fontSize:18,color:'gray'}},this.state.rowdata.bak1)),l.default.createElement(i.View,{style:D.containerbox},l.default.createElement(i.Text,{style:{alignSelf:'center',fontSize:15,color:'gray'}},"\u901a\u77e5\u8303\u56f4:"),l.default.createElement(i.Text,{style:{alignSelf:'center',fontSize:18,color:'gray'}},this.state.rowdata.noticerange))),l.default.createElement(i.Text,{style:{alignSelf:'center',fontSize:15,color:'gray',margin:15}},this.state.rowdata.noticecontent),l.default.createElement(s.default,{initialPage:0,renderTabBar:function(){return l.default.createElement(c.ScrollableTabBar,null)},tabBarBackgroundColor:"#fff",tabBarActiveTextColor:"#b4282d",tabBarInactiveTextColor:"#333",tabBarUnderlineStyle:D.tabBarUnderline},l.default.createElement(i.View,{tabLabel:"\u67e5\u770b\u9644\u4ef6"},l.default.createElement(i.FlatList,{data:JSON.parse(this.state.rowdata.noticeattchment),extradata:this.state,renderItem:function(t){var n=t.item,a=t.index;return l.default.createElement(i.TouchableOpacity,{onPress:e.filedownload.bind(e,n,a)},l.default.createElement(i.View,{style:D.comment},l.default.createElement(i.Text,{style:D.item},n)))}})),l.default.createElement(i.View,{tabLabel:"\u8bc4\u8bba\u533a"},l.default.createElement(i.FlatList,{data:this.state.noticecomment,extradata:this.state,renderItem:function(e){var t=e.item;e.index;return l.default.createElement(i.View,{style:D.comment},l.default.createElement(i.View,{style:[D.containerbox,{marginLeft:0}]},l.default.createElement(i.Text,{style:D.item},t.commentname),l.default.createElement(i.Text,{style:D.item},t.commenttime)),l.default.createElement(i.Text,{style:D.item},t.commentcontent))}}))),l.default.createElement(i.View,{style:D.searchBox},l.default.createElement(i.TextInput,{style:D.inputText,autoCapitalize:"none",underlineColorAndroid:"transparent",placeholderTextColor:'#aaa',placeholder:"\u53d1\u8868\u8bc4\u8bba",onChangeText:function(t){return e.setState({inputcon:t})}}),l.default.createElement(u.default,{underlayColor:"#00000000",underlayTxtColor:"#FFFFFF",txtStyle:{color:'#FFFFFF',fontSize:18,textAlign:'center'},style:{height:50,width:80,padding:0,backgroundColor:'peru',borderRadius:15},onPress:function(){return e.sendcom()}},"\u53d1\u8868")),l.default.createElement(S.default,{ref:"toast",position:"center"}))}}]),t})(r.Component);a.default=F;var D=i.StyleSheet.create({containernotice:{flexDirection:'column',flex:1,paddingTop:27,paddingBottom:5,marginBottom:5,backgroundColor:'#fff',borderBottomWidth:i.StyleSheet.hairlineWidth,borderBottomColor:'#cdcdcd'},contitle:{fontSize:25,width:v-100},containerbox:{marginLeft:15,flexDirection:'row',alignItems:'stretch',backgroundColor:'#fff'},contentViewStyle:{alignItems:'center',borderBottomWidth:1,borderBottomColor:'gray'},Icon:{alignSelf:'center',marginLeft:7,marginRight:7,width:50,height:50},comment:{borderBottomWidth:1,borderBottomColor:'gray',flexDirection:'column'},searchBox:{height:50,marginLeft:20,marginRight:20,marginBottom:5,flexDirection:'row',backgroundColor:'#E6E7E8',borderRadius:15},inputText:{alignSelf:'center',height:50,marginLeft:5,flex:1,marginRight:5,fontSize:16,textAlignVertical:'center',textDecorationLine:'none'},item:{marginLeft:20,padding:5,fontSize:15,color:'#FF7F00'}})},799,[13,20,800,567,578,764,568,569,570,37]);
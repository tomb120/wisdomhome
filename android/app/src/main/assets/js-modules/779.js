__d(function(e,t,n,r,a){Object.defineProperty(r,"__esModule",{value:!0});var i=t(a[0]),l=babelHelpers.interopRequireDefault(i),o=t(a[1]),s=t(a[2]),d=babelHelpers.interopRequireDefault(s),u=t(a[3]),c=babelHelpers.interopRequireDefault(u),f=t(a[4]),h=babelHelpers.interopRequireDefault(f),m=t(a[5]),p=babelHelpers.interopRequireWildcard(m),y=t(a[6]),g=babelHelpers.interopRequireDefault(y),b=t(a[7]),w=babelHelpers.interopRequireDefault(b),S=t(a[8]),x=babelHelpers.interopRequireDefault(S),E=t(a[9]),k=babelHelpers.interopRequireDefault(E),C=t(a[10]),T=(t(a[11]),t(a[12])),v=(babelHelpers.interopRequireDefault(T),t(a[13])),I=babelHelpers.interopRequireDefault(v),j=[],D=o.Dimensions.get('window'),F=D.width,R=D.height,B=o.NativeModules.EventEmitterManager,V=new o.NativeEventEmitter(B),O=new o.ListView.DataSource({rowHasChanged:function(e,t){return e!=t}}),L=[{type:1}],P=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={dataSource:O.cloneWithRows(j),visible:!1,visible1:!1,builtSiteAddress:'',workFee:0,workerlist:[],reason:'',projectid:''},n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentWillUnmount",value:function(){this.listener.remove()}},{key:"componentDidMount",value:function(){var e=this;o.AsyncStorage.getItem('logininfo',function(t,n){L=JSON.parse(n),e.findUserWorkOrderListByType()}),this.listener=d.default.addListener('noticedata',function(t){e.queryorder("")}),this.remoteNoti=V.addListener('RemoteNoti',function(t){return e.androidComeFrom(t)})}},{key:"androidComeFrom",value:function(e){console.log(e)}},{key:"showdialog",value:function(e){this.setState({visible1:!0,projectid:e})}},{key:"cancelUserWorkOrder",value:function(){var e=this,t=new FormData;t.append('cancelUserIdFk',L.userId),t.append('workOrderId',this.state.projectid.workOrderId),t.append('cancelContent',this.state.reason);var n=p.baseurl+"/buildProject/cancelUserWorkOrder";return C.EasyLoading.show('\u6b63\u5728\u63d0\u4ea4...',3e3),fetch(n,{method:"POST",headers:{ContentType:'application/x-www-form-urlencoded'},body:t}).then(function(e){return e.json()}).then(function(t){C.EasyLoading.dismis(),e.setState({status:t.resultFlag,msg:t.msg},function(){this.refs.toast.show(this.state.msg,1e3),1==this.state.status&&this.setState({visible1:!0})})}).catch(function(e){C.EasyLoading.dismis(),console.log(e.message)})}},{key:"cancelBuildProjectInfo",value:function(e){var t=this,n=new FormData;n.append('builtProjectId',e.builtProjectId);var r=p.baseurl+"/buildProject/cancelBuildProjectInfo";return C.EasyLoading.show('\u6b63\u5728\u63d0\u4ea4...',3e3),fetch(r,{method:"POST",headers:{ContentType:'application/x-www-form-urlencoded'},body:n}).then(function(e){return e.json()}).then(function(e){C.EasyLoading.dismis(),t.setState({status:e.resultFlag,msg:e.msg},function(){this.refs.toast.show(this.state.msg,1e3),this.state.status})}).catch(function(e){C.EasyLoading.dismis(),console.log(e.message)})}},{key:"fetchfilterData",value:function(e,t,n,r){var a=this,i=p.baseurl+"";return fetch(i,{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a.setState({status:e.status,msg:e.msg},function(){this.refs.toast.show(this.state.msg),1==this.state.status&&null!==j&&'undefined'!==j&&(j.splice(n,1),this.setState({dataSource:O.cloneWithRows(j)}),parseInt(n)!==L.length&&r[""+t+n].closeRow())})}).catch(function(e){console.log(e.message)})}},{key:"findBuildProjectById",value:function(e){var t=this,n='';return n=2===L.type?p.baseurl+"/buildProject/findBuildProjectById?builtProjectId="+e:p.baseurl+"/buildProject/findUserWorkOrderById?workOrderId="+e,fetch(n,{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t.setState({status:e.resultFlag,msg:e.msg},function(){if(1==this.state.status)try{var t=e.data;if(2===L.type){var n=t.buildProjectInfoTable,r=t.userWorkOrderInfoTableList;null!==n&&void 0!==n&&'[]'!==e.data&&(this.setState({builtSiteAddress:n.builtSiteAddress}),this.setState({visible:!0})),null!==r&&void 0!==r&&'[]'!==e.data&&this.setState({workerlist:r})}else{var a=t.userWorkOrderInfoTable;null!==a&&void 0!==a&&'[]'!==e.data&&(this.setState({workFee:a.workFee}),this.setState({visible:!0}))}}catch(e){}})}).catch(function(e){console.log(e.message)})}},{key:"findUserWorkOrderListByType",value:function(){var e=this,t='';return t=1===L.type?p.baseurl+"/buildProject/findUserWorkOrderListByType?userIdFk="+L.userId+"&queryType=1":p.baseurl+"/buildProject/findBuildProjectList?userIdFk="+L.userId+"&queryType=1",fetch(t,{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({status:t.resultFlag,msg:t.msg},function(){if(1==this.state.status){var e=t.data,n=[];null!==(n=1===L.type?e.userWorkOrderInfoTableList:e.buildProjectInfoTableList)&&void 0!==n&&'[]'!==t.data&&this.setState({dataSource:O.cloneWithRows(n)})}})}).catch(function(e){console.log(e.message)})}},{key:"render",value:function(){var e=this;return l.default.createElement(o.View,{style:W.container},l.default.createElement(h.default,{visible:this.state.visible,onTouchOutside:function(){e.setState({visible:!1})}},l.default.createElement(f.DialogTitle,{titleStyle:{backgroundColor:x.default.main,height:40},titleTextStyle:{fontSize:16},title:"\u8be6\u60c5"}),l.default.createElement(f.DialogContent,null,l.default.createElement(o.View,{style:W.containerlist},l.default.createElement(o.View,{style:W.roleContainer},l.default.createElement(o.Text,{style:{color:x.default.subtitle,fontSize:17}},1===L.type?'\u8d39\u7528':'\u8be6\u7ec6\u5730\u5740:'),l.default.createElement(o.Text,{style:{color:x.default.subtitle,fontSize:17}},1===L.type?this.state.workFee:this.state.builtSiteAddress)),2===L.type?l.default.createElement(o.FlatList,{data:this.state.workerlist,extradata:this.state,renderItem:function(e){var t=e.item;e.index;return l.default.createElement(o.View,{style:W.itemStyleall},l.default.createElement(o.View,{style:{flexDirection:'row',width:F,justifyContent:'space-between',padding:5}},l.default.createElement(o.Text,{style:W.name},"\u63a5\u5355\u4eba\u5458:",t.name),l.default.createElement(o.Text,{style:W.name},"\u5de5\u79cd\uff1a",t.typeName)),l.default.createElement(o.View,{style:{flexDirection:'row',width:F,justifyContent:'space-between',padding:5}},l.default.createElement(o.Text,{style:W.name},"\u8d39\u7528:",t.workFee),l.default.createElement(o.Text,{style:W.name},t.builtSiteAddress)))}}):null))),l.default.createElement(h.default,{visible:this.state.visible1,onTouchOutside:function(){e.setState({visible1:!1})}},l.default.createElement(f.DialogTitle,{titleStyle:{backgroundColor:x.default.main,height:40},titleTextStyle:{fontSize:16},title:"\u64a4\u6d88"}),l.default.createElement(f.DialogContent,null,l.default.createElement(o.View,{style:W.containerlist},1===L.type?l.default.createElement(o.View,{style:W.inputView},l.default.createElement(o.Text,{style:W.text},"\u64a4\u6d88\u539f\u56e0"),l.default.createElement(o.TextInput,{style:W.textinput,maxLength:50,multiline:!0,clearButtonMode:"while-editing",returnKeyType:"done",underlineColorAndroid:"transparent",placeholderTextColor:x.default.subtitle,placeholder:"\u8bf7\u8f93\u5165\u539f\u56e0",onChangeText:function(t){e.state.reason=t}}),l.default.createElement(k.default,{underlayColor:"#00000000",underlayTxtColor:"#FFFFFF",txtStyle:{color:'#FFFFFF',fontSize:18,textAlign:'center'},style:{height:40,width:F-80,padding:0,backgroundColor:'pink',borderRadius:4,marginTop:50},onPress:function(){return e.cancelUserWorkOrder()}},"\u786e\u5b9a\u64a4\u6d88")):null))),l.default.createElement(o.View,{style:W.containerbox},l.default.createElement(o.View,{style:W.searchBox},l.default.createElement(o.Image,{source:{uri:'icon_2_23'},style:W.searchIcon}),l.default.createElement(o.TextInput,{style:W.inputText,autoCapitalize:"none",underlineColorAndroid:"transparent",placeholderTextColor:'#aaa',placeholder:"\u8f93\u5165\u4e3b\u9898\u8fdb\u884c\u68c0\u7d22",onChangeText:function(t){return e.findUserWorkOrderListByType()}}))),l.default.createElement(c.default,{dataSource:this.state.dataSource,renderHiddenRow:function(t,n,r,a){return l.default.createElement(o.View,{style:W.rowBack},l.default.createElement(o.View,{style:W.leftView},l.default.createElement(o.Text,{style:{backgroundColor:'red'}},"Right")),l.default.createElement(o.TouchableOpacity,{onPress:function(){return 1===L.type?e.showdialog(t):e.cancelBuildProjectInfo(t)}},l.default.createElement(o.View,{style:W.leftView},l.default.createElement(o.Text,{style:{color:'white',fontSize:17}},"\u64a4\u6d88"))))},leftOpenValue:75,rightOpenValue:-75,renderRow:this.renderRow.bind(this),disableLeftSwipe:!1,disableRightSwipe:!0}),l.default.createElement(g.default,{ref:"toast",position:"bottom"}))}},{key:"_pressitem",value:function(e){this.findBuildProjectById(1===L.type?e.workOrderId:e.builtProjectId)}},{key:"renderRow",value:function(e,t,n,r){var a=this;return l.default.createElement(o.View,{style:W.contentViewStyle},l.default.createElement(o.TouchableOpacity,{style:W.itemStyleall,onPress:function(){a._pressitem(e)}},l.default.createElement(o.View,{style:W.itemStyleall},l.default.createElement(o.View,{style:W.itemStyle},l.default.createElement(o.Text,{style:{fontSize:14,textColor:'black',flexWrap:'wrap'}},1===L.type?e.name:e.projectName),l.default.createElement(o.Text,{style:{fontSize:13,textColor:'gray'}},(0,w.default)(e.projectDayStartTime).format('YYYY-MM-DD HH:MM'))),l.default.createElement(o.View,{style:W.itemStyle},l.default.createElement(o.Text,{style:{fontSize:14,textColor:'black',flexWrap:'wrap'}},e.typeName),l.default.createElement(o.Text,{style:{fontSize:13,textColor:'gray'}},1===L.type?e.builtSiteAddress:e.employeeNum)),l.default.createElement(o.View,{style:W.itemStyle},l.default.createElement(o.Text,{style:{fontSize:14,textColor:'black',flexWrap:'wrap'}},'\u8ba2\u5355\u72b6\u6001\uff1a'+(1===L.type?I.default.Getworkorderstatus(e.workOrderStatus):I.default.Getmasterorderstatus(e.buildProjectStatus))),l.default.createElement(o.Text,{style:W.name},"\u8d39\u7528:",e.workFee)))))}}]),t})(i.Component);r.default=P;var W=o.StyleSheet.create({container:{flexDirection:'column',flex:1,paddingTop:27,paddingBottom:5,marginBottom:5,alignItems:'center',backgroundColor:'#fff',borderBottomWidth:o.StyleSheet.hairlineWidth,borderBottomColor:'#cdcdcd'},containerlist:{flexDirection:'column',width:F,height:R/2-50,paddingTop:27,paddingBottom:5,marginBottom:5,alignItems:'center'},name:{fontSize:14,color:'gray'},containerbox:{flexDirection:'row',alignItems:'center',backgroundColor:'#fff'},searchBox:{height:40,flex:1,marginLeft:10,marginBottom:5,flexDirection:'row',backgroundColor:'#E6E7E8',borderRadius:20},searchIcon:{alignSelf:'center',marginLeft:7,marginRight:7,width:25,height:25},inputText:{alignSelf:'center',height:40,flex:1,marginLeft:5,fontSize:16,textAlignVertical:'center',textDecorationLine:'none'},contentViewStyle:{alignItems:'center',backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'gray'},itemStyleall:{flexDirection:'column',justifyContent:'flex-start',backgroundColor:'white',alignItems:'center',width:F},itemStyle:{paddingRight:12,paddingLeft:15,flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',alignItems:'center',width:F,height:30},rowBack:{alignItems:'center',backgroundColor:'#DDD',flexDirection:'row',justifyContent:'space-between',flex:1},leftView:{width:75,alignItems:'center',backgroundColor:'red',height:70,justifyContent:'center',borderRadius:5},roleContainer:{width:F,flexDirection:'row',paddingLeft:15,paddingRight:15,alignItems:'center',height:60,borderWidth:.5,borderColor:x.default.subtitle,justifyContent:'space-between'},inputView:{flexDirection:'column',alignItems:'center',width:F,paddingLeft:15,paddingRight:15,justifyContent:'space-around'},textinput:{color:x.default.title,marginHorizontal:10,height:50,width:2*F/3,fontSize:13,padding:0}})},779,[13,20,37,780,782,568,570,578,577,567,569,308,766,798]);
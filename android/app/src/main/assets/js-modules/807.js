__d(function(e,t,i,a,n){Object.defineProperty(a,"__esModule",{value:!0});var o=t(n[0]),r=babelHelpers.interopRequireDefault(o),l=t(n[1]),s=t(n[2]),u=babelHelpers.interopRequireDefault(s),d=t(n[3]),c=babelHelpers.interopRequireDefault(d),f=t(n[4]),h=babelHelpers.interopRequireDefault(f),p=t(n[5]),m=(babelHelpers.interopRequireDefault(p),t(n[6])),g=(babelHelpers.interopRequireDefault(m),t(n[7])),y=(babelHelpers.interopRequireDefault(g),t(n[8])),b=babelHelpers.interopRequireDefault(y),v=t(n[9]),S=babelHelpers.interopRequireDefault(v),w=(t(n[10]),t(n[11])),C=(babelHelpers.interopRequireWildcard(w),t(n[12])),k=babelHelpers.interopRequireDefault(C),x=t(n[13]),T=babelHelpers.interopRequireWildcard(x),E=t(n[14]),D=t(n[15]),L=babelHelpers.interopRequireDefault(D),I=l.Dimensions.get('window'),R=I.width,A=I.height,_=t(n[16]),P=null,j=null,B=null,H=[],N=[],F=(function(e){function i(e){babelHelpers.classCallCheck(this,i);var a=babelHelpers.possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e));return a._onPOISearchDone=function(e){console.log('----_onPOISearchDone----:',e),e.searchResultList.length>0&&a.setState({dataArray:e.searchResultList,postionlist:e.searchResultList[0],builtSiteAddress:e.searchResultList[0].address})},a._onLocationResult=function(e){console.log("_onLocationResult...result",e),a.setState({searchArray:e.searchResultList})},a._onDidMoveByUser=function(e){a.setState({longitude:e.nativeEvent.data.centerCoordinate.longitude,latitude:e.nativeEvent.data.centerCoordinate.latitude}),a._searchNearBy(e.nativeEvent.data.centerCoordinate.latitude,e.nativeEvent.data.centerCoordinate.longitude)},a.cameraAction=function(e){t(n[17]).showImagePicker({title:'\u8bf7\u9009\u62e9',cancelButtonTitle:'\u53d6\u6d88',takePhotoButtonTitle:'\u62cd\u7167',chooseFromLibraryButtonTitle:'\u9009\u62e9\u76f8\u518c',quality:.75,allowsEditing:!0,noData:!1,storageOptions:{skipBackup:!0,path:'images'}},function(t){if(console.log('Response = ',t),t.didCancel)console.log('User cancelled image picker');else if(t.error)console.log('ImagePicker Error: ',t.error);else if(t.customButton)console.log('User tapped custom button: ',t.customButton);else{t.uri;1===e?a.setState({avatarSourcesite1:t.uri}):2===e?a.setState({avatarSourcesite2:t.uri}):3===e&&a.setState({avatarSourcesite3:t.uri});var i=t.uri,n=[{mime:'',path:""+i}],o=i.split('.');o.length>1&&(n.mime="."+o[o.length-1],a.fileUpload(n,e))}})},a.state={swichvalue:!0,inputcon:'',inputtitle:'',inputtime:'',acessname:'',createDateTime:(0,u.default)().format('YYYY-MM-DD HH:MM'),iscontainworkleaf:!1,postionlist:[],builtSiteAddress:'\u8bf7\u9009\u62e9\u5730\u70b9',longitude:110.381077,latitude:33.931822,avatarSourcesite1:'icon_102',avatarSourcesite2:'icon_102',avatarSourcesite3:'icon_102',typeall:[],workpostion:[],builtSiteName:'',builtSiteSpecification:'',workpostionname:'',userid:''},a}return babelHelpers.inherits(i,e),babelHelpers.createClass(i,[{key:"componentWillUnmount",value:function(){c.default.emit('noticedata',{text:'\u901a\u77e5'})}},{key:"findBuildSiteList",value:function(){var e=this,t=T.baseurl+"/buildProject/findBuildSiteList?userIdFk="+this.state.userid;return fetch(t,{method:"get",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({status:t.resultFlag,msg:t.msg},function(){if('1'===this.state.status){var e=t.data.buildSiteInfoTableList;if(null!==e&&void 0!==e&&'[]'!==e){var i=[],a=e,n=Array.isArray(a),o=0;for(a=n?a:a["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var r;if(n){if(o>=a.length)break;r=a[o++]}else{if((o=a.next()).done)break;r=o.value}var l=r;i.push(l.builtSiteName),N[l.builtSiteName]=l.builtSiteId}this.setState({workpostion:i})}}})}).catch(function(e){console.log(e.message)})}},{key:"findAllWorkTypen",value:function(){var e=this,t=T.baseurl+"/workType/findAllWorkType";return fetch(t,{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({status:t.resultFlag,msg:t.msg},function(){if('1'===this.state.status){var e=t.data.workTypeList;if(null!==e&&void 0!==e&&'[]'!==e){var i=[],a=e,n=Array.isArray(a),o=0;for(a=n?a:a["function"==typeof Symbol?Symbol.iterator:"@@iterator"]();;){var r;if(n){if(o>=a.length)break;r=a[o++]}else{if((o=a.next()).done)break;r=o.value}var l=r;i.push(l.typeName),H[l.typeName]=l.typeId}this.setState({typeall:i})}}})}).catch(function(e){console.log(e.message)})}},{key:"componentDidMount",value:function(){var e=this;l.AsyncStorage.getItem('logininfo',function(t,i){var a=JSON.parse(i);e.setState({userid:a.userId}),e.findAllWorkTypen(),e.findBuildSiteList()}),l.NativeAppEventEmitter.addListener('amap.onPOISearchDone',this._onPOISearchDone),l.NativeAppEventEmitter.addListener('amap.location.onLocationResult',this._onLocationResult),this.getCurrentPosition(),k.default.requestMultiplePermission()}},{key:"getCurrentPosition",value:function(){var e=this;_.getCurrentPosition(function(t){console.log('---location----:',t);var i={latitude:t.coords.latitude,longitude:t.coords.longitude};void 0!=t.coords.latitude&&null!=t.coords.latitude&&e._amap.setCenterCoordinate(i),e.setState({longitude:t.coords.longitude,latitude:t.coords.latitude,loaded:!0},function(){setTimeout(function(){e.setState({isHidden:!1})},200)})},function(e){alert("\u83b7\u53d6\u4f4d\u7f6e\u5931\u8d25")})}},{key:"_onstartbarcode",value:function(){this.setState({viewAppear:!0})}},{key:"_searchNearBy",value:function(e,t){var i={page:1,coordinate:{latitude:e,longitude:t},keywords:this.state.keywords};this._amap.searchPoiByCenterCoordinate(i)}},{key:"addBuildSiteInfo",value:function(){var e=this,t=this.state.builtSiteName;if(null!==t&&void 0!==t&&''!==t){if(null!==P&&void 0!==P&&''!==P){var i=new FormData,a={};a.builtSiteName=this.state.builtSiteName,a.builtSiteAddress=this.state.builtSiteAddress,a.longitude=this.state.longitude,a.latitude=this.state.latitude,a.userIdFk=this.state.userid,a.builtSiteSpecification=this.state.builtSiteSpecification,a.builtSiteStatus=0,i.append('buildSiteInfoTableStr',JSON.stringify(a));var n=[],o={};if(o.imagePath='http://image.hjninan.com/'+P,o.imageType=2,n.push(o),null!==j||void 0!==j||''!==j){var r={};r.imagePath='http://image.hjninan.com/'+j,r.imageType=2,n.push(r)}if(null!==B||void 0!==B||''!==B){var s={};s.imagePath='http://image.hjninan.com/'+B,s.imageType=2,n.push(s)}i.append('imageList',JSON.stringify(n));var u=T.baseurl+"/buildProject/addBuildSiteInfo";return E.EasyLoading.show('\u6b63\u5728\u63d0\u4ea4...',3e3),fetch(u,{method:"POST",headers:{ContentType:'application/x-www-form-urlencoded'},body:i}).then(function(e){return e.json()}).then(function(t){E.EasyLoading.dismis(),e.setState({status:t.status,msg:t.msg},function(){this.refs.toast.show(this.state.msg,1e3),1==this.state.status&&l.NativeModules.IntentModule.finishpage()})}).catch(function(e){E.EasyLoading.dismis(),console.log(e.message)})}this.refs.toast.show("\u81f3\u5c11\u4e0a\u4f20\u4e00\u5f20\u56fe\u7247",1e3)}else this.refs.toast.show("\u5de5\u5730\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a",1e3)}},{key:"fileUpload",value:function(e,t){var i=this;try{var a=new FormData;if(!e.length)return{success:!1,message:'\u672a\u9009\u62e9\u6587\u4ef6'};for(var n=0;n<e.length;n++){var o=e[n].path,r=o.split('/'),s={uri:o,type:'application/octet-stream',name:escape(r[r.length-1])};a.append("file",s),a.append("key",escape(r[r.length-1])),a.append("token",T.uploadtoken)}console.log(a);E.EasyLoading.show('\u4e0a\u4f20\u4e2d...',3e3);fetch('https://up.qiniup.com',{method:'POST',headers:{},body:a,contentType:!1,processData:!1}).then(function(e){return e.json()}).then(function(e){E.EasyLoading.dismis(),i.refs.toast.show(e.key,1e3),1===t?P=e.key:2===t?j=e.key:3===t&&(B=e.key),l.AsyncStorage.setItem('picinfo',fileName)}).catch(function(e){E.EasyLoading.dismis(),console.log(e.message)})}catch(e){console.log(e)}}},{key:"render",value:function(){var e=this;return r.default.createElement(l.ScrollView,{scrollsToTop:!1,style:{flex:1,backgroundColor:b.default.background}},r.default.createElement(l.View,{style:q.containersentn},r.default.createElement(l.View,{style:q.inputView},r.default.createElement(l.Text,{style:q.text},"\u5de5\u5730\u540d\u79f0"),r.default.createElement(l.TextInput,{style:q.textinput,maxLength:11,clearButtonMode:"while-editing",returnKeyType:"done",underlineColorAndroid:"transparent",placeholderTextColor:b.default.subtitle,placeholder:"\u8bf7\u8f93\u5165\u5de5\u5730\u540d\u79f0",onChangeText:function(t){e.state.builtSiteName=t}})),r.default.createElement(l.View,{style:q.exercisemap},r.default.createElement(l.View,{style:q.classContainer},r.default.createElement(l.View,{style:q.smsmessage},r.default.createElement(l.Text,{style:q.name},"\u7528\u5de5\u5730\u5740"),r.default.createElement(l.Image,{style:q.arrow,source:{uri:'icon_104'}})),r.default.createElement(l.Text,{style:q.name},this.state.builtSiteAddress)),r.default.createElement(l.View,{style:{flexDirection:'column',height:120}},r.default.createElement(S.default,{ref:function(t){return e._amap=t},style:{width:R,height:A/4,marginTop:5},options:{frame:{width:R,height:A/3},showsUserLocation:!0,userTrackingMode:null,centerCoordinate:{latitude:this.state.latitude,longitude:this.state.longitude},zoomLevel:18.1,centerMarker:'icon_104'},onLayout:this._onLayout,onDidMoveByUser:this._onDidMoveByUser}))),r.default.createElement(l.Text,{style:q.text},"\u5de5\u5730\u63cf\u8ff0"),r.default.createElement(l.View,{style:[q.divContainer,{width:R-50,height:80}]},r.default.createElement(l.TextInput,{style:q.textinput,maxLength:50,multiline:!0,clearButtonMode:"while-editing",returnKeyType:"done",underlineColorAndroid:"transparent",placeholderTextColor:b.default.subtitle,placeholder:"",onChangeText:function(t){e.state.builtSiteSpecification=t}})),r.default.createElement(l.View,{style:q.divContainer},r.default.createElement(l.TouchableOpacity,{onPress:function(){return e.cameraAction(1)}},r.default.createElement(l.Text,{style:q.name},"\u5de5\u5730\u56fe\u72471"),r.default.createElement(l.Image,{style:{marginTop:10,width:R-50,height:220},source:{uri:this.state.avatarSourcesite1}}))),r.default.createElement(l.View,{style:q.divContainer},r.default.createElement(l.TouchableOpacity,{onPress:function(){return e.cameraAction(2)}},r.default.createElement(l.Text,{style:q.name},"\u5de5\u5730\u56fe\u72472"),r.default.createElement(l.Image,{style:{marginTop:10,width:R-50,height:220},source:{uri:this.state.avatarSourcesite2}}))),r.default.createElement(l.View,{style:q.divContainer},r.default.createElement(l.TouchableOpacity,{onPress:function(){return e.cameraAction(3)}},r.default.createElement(l.Text,{style:q.name},"\u5de5\u5730\u56fe\u72473"),r.default.createElement(l.Image,{style:{marginTop:10,width:R-50,height:220},source:{uri:this.state.avatarSourcesite3}}))),r.default.createElement(l.View,{style:{flexDirection:'row',alignItems:'center',marginTop:20,width:R,justifyContent:'space-around'}},r.default.createElement(h.default,{underlayColor:"blue",underlayTxtColor:"gray",txtStyle:{color:'white',fontSize:15,textAlign:'left'},style:[q.btnc,{marginLeft:20}],onPress:function(){return e.addBuildSiteInfo()}},"\u786e\u5b9a\u63d0\u4ea4")),r.default.createElement(E.Loading,null),r.default.createElement(L.default,{ref:"toast",position:"bottom"})))}}]),i})(o.Component);a.default=F;var q=l.StyleSheet.create({containersentn:{flex:1,padding:10,flexDirection:'column',justifyContent:'flex-start',alignItems:'center',backgroundColor:'#fff'},inputText:{height:50,width:.6666666666666666*R,fontSize:16,textAlign:'right',textAlignVertical:'center',textDecorationLine:'none'},containerbox:{marginLeft:15,flexDirection:'row',justifyContent:'space-around',backgroundColor:'#fff'},roleContainer:{flexDirection:'row',paddingLeft:15,paddingRight:15,alignItems:'center',height:60,borderWidth:.5,borderColor:b.default.subtitle,justifyContent:'space-between'},cousename:{fontSize:16,color:'gray'},dropbutton:{width:60,backgroundColor:'#F5FCFF'},cousearrow:{width:25,height:25},upload:{width:100,height:50},btnc:{height:45,width:200,padding:0,backgroundColor:b.default.activeTint,borderRadius:4},name:{fontSize:16,color:'gray'},exercisemap:{flexDirection:'column',justifyContent:'flex-start',backgroundColor:'#fff',paddingLeft:15,paddingRight:15},dropdown:{fontSize:15,color:'gray'},text:{color:b.default.title,fontSize:14},inputView:{flexDirection:'row',borderBottomWidth:.5,alignItems:'center',width:R,paddingLeft:50,paddingRight:15,justifyContent:'space-around',borderColor:b.default.gray},smsmessage:{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'},classContainer:{paddingLeft:15,paddingRight:15,flexDirection:'row',width:R,alignItems:'center',borderBottomWidth:.5,borderBottomColor:b.default.gray,height:40,justifyContent:'space-around'},arrow:{height:30,width:30},divContainer:{flexDirection:'column',justifyContent:'flex-start',backgroundColor:'#FFFFFF',alignItems:'center',marginTop:10,height:220,width:R-50,borderWidth:.5,borderColor:b.default.gray,borderRadius:5},textinput:{color:b.default.subtitle,marginHorizontal:10,height:50,width:R/2,fontSize:13,padding:0}})},807,[13,20,578,37,567,18,776,766,577,571,308,286,580,568,569,570,92,566]);
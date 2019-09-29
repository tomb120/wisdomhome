/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Button,
    Alert,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    FlatList,
    View,
    Modal, ScrollView, AsyncStorage,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import FirstPage from "./FirstPage"
import Zhikong from "./Zhikong"
import Linli from "./Linli"
import Shangchen from "./Shangchen"
import My from "./My"
import register from "../wisdomcell/Login"
import ConfirmButton from '../wisdomcell/ConfirmButton'
import SideMenu from 'react-native-side-menu'
import ModalDropdown from "react-native-modal-dropdown";
import * as RequestUrl from "../wisdomcell/RequestUrl";
import RCTDeviceEventEmitter from "react-native/Libraries/EventEmitter/RCTDeviceEventEmitter";
import {Loading,EasyLoading} from "react-native-easy-loading";
import Toast from "react-native-easy-toast";
import Barcode from 'react-native-smart-barcode'
import * as BackHandler from "react-native/Libraries/Utilities/BackHandler.android";
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
const deviceW = Dimensions.get('window').width
const basePx = 375

type Props = {};
function px2dp(px) {
    return px *  deviceW / basePx
}
const uri_image_menu = 'http://image18-c.poco.cn/mypoco/myphoto/20160605/09/17351665220160605093956066.png';
const{width,height} = Dimensions.get('window')
let _this = null;
var obj=null;
var navigation = null;
export default class MainTab extends Component<Props> {
    constructor(props){
        super(props);
        this.state = { selectedTab: 'FirstPage',hbbbb:'123',isOpen : false,invitecod:'',studentname:'',  viewAppear: false, referee:'',
            selectedItem:'About',show:false,role:'家长',relation:'爸爸',studentclassname:'一年二班',lassall:[]};
        navigation = this.props.navigation;
    }
        static navigationOptions = ({ navigation }) => {
            const params = navigation.state.params || {};
            return {
                headerTitle: <Text style={{ flex: 1, textAlign: 'center',fontSize:16,color:'#F5FCFF' }}>{params.increaseCount}</Text>,
                headerLeft: <View/>,
                headerRight: (
                    <TouchableOpacity onPress={() => _this.toggle()}>
                        <Image
                            source={{uri:'icon_103'}}
                            style={{ marginLeft:5,width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                ),
            };
        };
    componentWillMount() {
        this.props.navigation.setParams({ increaseCount: '生活家智慧小区'});
        BackHandler.removeEventListener('hardwareBackPress',
            this.onBackButtonPressAndroid);
    }
    componentDidMount(){
        _this = this;
        AsyncStorage.getItem('logininfo', (err, result) => {
            obj = JSON.parse(result);
        });
        // this.queryclassall();
        BackHandler.addEventListener('hardwareBackPress',
            this.onBackButtonPressAndroid);
    }
    componentWillUnmount () {
        this.timer && clearTimeout(this.timer);
        BackHandler.removeEventListener('hardwareBackPress',
            this.onBackButtonPressAndroid);
    }
    onBackButtonPressAndroid = () => {
        if(this.state.viewAppear===true){
            this._stopScan();
            this.setState({viewAppear:false})
            return true
        }
        return false
    }
    _onBarCodeRead = (e) => {
        // console.log(`e.nativeEvent.data.type = ${e.nativeEvent.data.type}, e.nativeEvent.data.code = ${e.nativeEvent.data.code}`)
        this._stopScan();
        this.setState({viewAppear:false})
        this.setState({referee:e.nativeEvent.data.code})
        // Alert.alert("二维码", e.nativeEvent.data.code, [
        //     {text: '确认', onPress: () => this._startScan()},
        // ])
    };

    _startScan = (e) => {
        this._barCode.startScan()
    };

    _stopScan = (e) => {
        this._barCode.stopScan()
    }
    queryclassall(){
        let url=RequestUrl.baseurl+"/homeschoolsever/class/queryclassall?";
        return fetch(url, {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    status: responseJson.status,
                    msg: responseJson.msg,
                }, function () {
                    // this.refs.toast.show(this.state.msg);
                    if (this.state.status == 1) {
                        let newData=JSON.parse(responseJson.data)
                        if(newData!==null&&newData!==undefined&&responseJson.data!=='[]'){
                            let map=[];
                             for(let name of newData){
                                map.push(name.classname)
                            }
                            this.setState ({classall:map});
                        }
                    }
                });
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    toggle(){
        // Alert.show('toggle');
        // this.setState({
        //     isOpen: !this.state.isOpen,
        // });
        // this._onstartbarcode.bind(this)
        this.setState({viewAppear:true})
    }
    // _onstartbarcode(){
    //     this.setState({viewAppear:true})
    // }
    updateMenuState(isOpen){
        this.setState({isOpen : isOpen
        });
        if(isOpen){

            RCTDeviceEventEmitter.emit('menuisopen', {text:'通知'});
        }
    }
    //menu侧滑栏按键监听
    onMenuItemSelected = (item) =>{
        this.setState({
            isOpen :false,
            selectedItem:item,
        });
        if('修改密码'===item){
            this.props.navigation.navigate('register', {name: 'Lucy'})
        }
        else if('班级设置'===item){
            this.props.navigation.navigate('classset', {name: 'Lucy'})
        }
        else if('添加班级'===item){
            this._setModalVisible();
        }
        else if('注销登录'===item){
            this.props.navigation.navigate('Login', {name: 'Lucy'})
        }
    };

    // 显示/隐藏 modal
    _setModalVisible() {
        let isShow = this.state.show;
        this.setState({
            show:!isShow,
        });
    }
    addclass() {
        let invitecod=this.state.invitecod;
        let studentname=this.state.studentname;
        if (invitecod === null || invitecod === undefined || invitecod === '') {
            this.refs.toast.show("邀请码不能为空",1000);
            return
        }
        if (studentname === null || studentname === undefined || studentname === '') {
            this.refs.toast.show("学生名字不能为空",1000);
            return
        }
        let map={};
        map['invitecod']=this.state.invitecod;
        map['studentname']=this.state.studentname;
        map['role']=this.state.role;
        map['relation']=this.state.relation;
        map['studentclassname']=this.state.studentclassname;
        map['bak1']=obj.Username;
        let formData = new FormData();
        formData.append("transdata", JSON.stringify(map));
        let url=RequestUrl.baseurl+"/homeschoolsever/class/addclass?Username="+obj.Username;
        EasyLoading.show('加载中...', 3000);
        return fetch(url, {
            method: "POST",
            headers: {
                'Content-Type':'multipart/form-data',
            },
            body: formData

        }).then((response) => response.json())
            .then((responseJson) => {
                EasyLoading.dismis()
                this.setState({
                    status: responseJson.status,
                    msg: responseJson.msg,
                }, function () {
                    this.refs.toast.show(this.state.msg,1000);
                    if (this.state.status == 1) {
                        let isShow = this.state.show;
                        this.setState({
                            show:!isShow,
                        });
                    }
                });
            })
            .catch((error) => {
                EasyLoading.dismis()
                console.log(error.message);
            });
    }
    render() {
        // const menu = <Menu onItemSelected = {this.onMenuItemSelected}/>
        return (
            <View style={{flex: 1}}>
                {this.state.viewAppear ?
                    <Barcode style={{flex: 1,}} ref={component => this._barCode = component}
                             onBarCodeRead={this._onBarCodeRead}
                    />
                    :
                <TabNavigator style={styles.containertab}>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'FirstPage'}
                            title="首页"
                            selectedTitleStyle={{color: "#3496f0"}}
                            // renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
                            renderIcon={() => <Image style={styles.icon} source={require("../img/icon-index.png")} />}
                            renderSelectedIcon={() => <Image style={styles.icon} source={require("../img/icon-index1.png")} />}
                            // badgeText="1"
                            onPress={() => {this.setState({selectedTab: 'FirstPage'});this.props.navigation.setParams({ increaseCount: '生活家智慧小区'})}}>
                            <FirstPage  navigation={navigation}/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            screenProps={{ rootNavigation: this.props.navigation }}
                            selected={this.state.selectedTab === 'banWu'}
                            title="智控"
                            selectedTitleStyle={{color: "#3496f0"}}
                            renderIcon={() => <Image style={styles.icon} source={require("../img/icon-zhikong.png")} />}
                            renderSelectedIcon={() => <Image style={styles.icon} source={require("../img/icon-zhikong1.png")} />}
                            onPress={() => {this.setState({selectedTab: 'banWu'});this.props.navigation.setParams({ increaseCount: '智控'})}}>
                            <Zhikong navigation={navigation}/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'KeTang'}
                            title="商城"
                            selectedTitleStyle={{color: "#3496f0"}}
                            renderIcon={() => <Image style={styles.icon} source={require("../img/icon-index.png")} />}
                            renderSelectedIcon={() => <Image style={styles.icon} source={require("../img/icon-index.png")} />}
                            // badgeText="1"
                            onPress={() => {this.setState({selectedTab: 'KeTang'});this.props.navigation.setParams({ increaseCount: '商城'})}}>
                            <Linli navigation={navigation}/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'KuoZhan'}
                            title="邻里"
                            selectedTitleStyle={{color: "#3496f0"}}
                            renderIcon={() => <Image style={styles.icon} source={require("../img/icon-linli.png")} />}
                            renderSelectedIcon={() => <Image style={styles.icon} source={require("../img/icon-linli1.png")} />}
                            // badgeText="1"
                            onPress={() => {this.setState({selectedTab: 'KuoZhan'});this.props.navigation.setParams({ increaseCount: '邻里'})}}>
                            <Shangchen navigation={navigation}/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'FenXiang'}
                            title="我的"
                            selectedTitleStyle={{color: "#3496f0"}}
                            renderIcon={() => <Image style={styles.icon} source={require("../img/icon-my.png")} />}
                            renderSelectedIcon={() => <Image style={styles.icon} source={require("../img/icon-my1.png")} />}
                            // badgeText="1"
                            onPress={() => {this.setState({selectedTab: 'FenXiang'});this.props.navigation.setParams({ increaseCount: '我的'})}}>
                            <My navigation={navigation}/>
                        </TabNavigator.Item>
                    </TabNavigator>
                }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    containerside: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    containertab: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width:deviceW
        //   backgroundColor: '#25b6ed',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    btn:{
        margin:20,
        backgroundColor:'white',
        borderColor:'red',
        borderRadius:5,
        borderWidth:2,
    },
    btntext:{
        color:'red',
        fontSize:20,
    },
    // modal的样式
    modalStyle: {
        // backgroundColor:'#ccc',
        alignItems: 'center',
        justifyContent:'center',
        position: 'absolute',
        height:height*2/3,
        marginTop:height/3
    },
    // modal上子View的样式
    subView:{
        width:width,
        height:height*2/3,
        backgroundColor:'#fff',
        alignItems:'center',
        // alignSelf: 'stretch',
        justifyContent:'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor:'#ccc',
    },
    // 标题
    titleText:{
        marginTop:10,
        marginBottom:5,
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
    },
// 按钮
    buttonView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStyle:{
        flex:1,
        height:44,
        alignItems: 'center',
        justifyContent:'center',
    },
    // 竖直的分割线
    verticalLine:{
        width:0.5,
        height:44,
        backgroundColor:'#ccc',
    },
    buttonText:{
        fontSize:16,
        color:'#3393F2',
        textAlign:'center',
    },
    roleContainer: {
        flexDirection: 'row',
        alignItems : 'center',
        width:width,
        height:30,
        justifyContent: 'flex-start',
        marginTop: 15,
        marginLeft:20
    },
    arrow: {
        position: 'absolute',
        left: 230,
    },
    dropbutton: {
        width:150,
        backgroundColor: '#F5FCFF',
    },
    name: {
        marginLeft: 5,
        fontSize: 16,
        color:'gray'
    },
    icon: {
        width: px2dp(30),
        height: px2dp(32),
    },
});
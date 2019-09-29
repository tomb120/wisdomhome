
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];
//
console.disableYellowBox = true // 关闭全部黄色警告
import { AppRegistry } from 'react-native';
import {View, Text, StyleSheet, Button, TextInput, Dimensions} from 'react-native';
import {StackNavigator, createStackNavigator} from 'react-navigation';
import App from './App';
import App1 from './App1';
import MyTest from './MyTest';
import Login from './wisdomcell/Login'
import MainTab from './tab/MainTab'
// import Wxpay from './gongyou/Wxpay';
// AppRegistry.registerComponent('MainTab', () => MainTab);
AppRegistry.registerComponent('App', () => App);
AppRegistry.registerComponent('RNApp', () => App1);
AppRegistry.registerComponent('MyTest', () => MyTest);
AppRegistry.registerComponent('Login', () => Login);
// Wxpay.WxpayModule.registerApp('wx618ec85b2a875625'); //向微信注册
const stackOption = {
    navigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#6495ED',//矢车菊蓝kr
        }
    }
}
const RootNavigator = createStackNavigator({
    MainTab: {
        screen: MainTab,
        StackNavigatorConfig:{
            headerLayoutPreset:'center',
        },
        navigationOptions: {
            title: `智慧生活小区`,
            headerBackTitle: '返回',
            headerTruncatedBackTitle: `333`,
            headerBackImage:null,
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerTitle: '登录',
        },
    },
}, stackOption);
export default RootNavigator;

AppRegistry.registerComponent('gongyou', () => RootNavigator);
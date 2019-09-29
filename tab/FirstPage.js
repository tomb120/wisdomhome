import React, {Component} from "react";
import {
    Dimensions,
    FlatList,
    Image,
    Alert,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ListView,
    ScrollView
} from "react-native";
import Swiper from 'react-native-swiper';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import * as basestyles from "../wisdomcell/basestyles";
const { width , height} = Dimensions.get('window');
var navigation = null;
var newData = [
    {"title": "公告", "img": 'gonggao'},
    {"title": "管家", "img": 'guanjia'},
    {"title": "缴费", "img": 'jiaofei'},
    {"title": "开锁", "img": 'kaishuo'},
    {"title": "报修", "img": 'baoxiu'},
    {"title": "投诉", "img": 'toushu'},
    {"title": "访客", "img": 'fangke'}];
var newData1 = [
    { "img": 'service1'},
    { "img": 'service2'},
    { "img": 'service3'},
    { "img": 'service4'},
    { "img": 'service5'},
    { "img": 'service6'},
    { "img": 'service7'}];
export default class FirstPage extends Component {
    state: any;  state1: any;
    constructor(props) {
        super(props);
        navigation = this.props.navigation;
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});
        this.state = { dataSource: ds.cloneWithRows(newData)};
        var ds1 = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});
        this.state1 = { dataSource: ds1.cloneWithRows(newData1)};
    }

    render() {
        return (
            <ScrollView scrollsToTop={true} style={styles.containerfirst}>
                <View style={styles.containerStyle}>
                    <Swiper
                        horizontal={true}
                        autoplay={true}
                        loop={true}
                        paginationStyle={{ bottom: 10 }}
                        showsPagination={true}
                        autoplayTimeout={2.5}
                        index={1}
                        dotStyle={{ backgroundColor: 'rgba(0,0,0,.2)', width: 6, height: 6 }}
                        activeDotStyle={{ backgroundColor: 'rgba(0,0,0,.5)', width: 6, height: 6 }}>

                        <Image source={require("../img/banner.png")}  style={{ width: width, height:160}}/>
                        <Image source={require("../img/banner1.png")}  style={{ width: width, height: 160 }}/>
                        <Image source={require("../img/banner2.png")}  style={{ width: width, height: 160 }}/>
                        <Image source={require("../img/banner3.png")}  style={{ width: width, height: 160 }}/>
                        <Image source={require("../img/banner5.png")}  style={{ width: width, height: 160 }}/>
                    </Swiper>
                </View>
                <Text style={{marginTop: 5, fontSize: 14}}>{'  小区公告:没有新消息'}</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    removeClippedSubviews={false}
                    contentContainerStyle={styles.listStyle}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={true}
                />
                <Text style={{marginTop: 5, fontSize: 14}}>{'  生活服务'}</Text>
                <ListView
                    dataSource={this.state1.dataSource}
                    renderRow={this.renderRow1.bind(this)}
                    removeClippedSubviews={false}
                    contentContainerStyle={styles.listStyle1}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={true}
                />
                <View style={{alignItems:'center'}}>
                <Text style={basestyles.red}>{'精 / 品 / 专 / 题'}</Text>
                </View>
                    <FlatList
                        data={[
                            {key: '',key1:'img_banner'},
                            {key: '',key1:'img_banner1'},
                            {key: '',key1:'img_banner2'},
                            {key: '',key1:'img_banner3'},
                        ]}
                        renderItem={({item}) => <View style={styles.itemall}>
                            <Image  source={{uri:item.key1}} style={{ margin:8,width: width, height: 160 }}/>
                        </View>}
                    />
            </ScrollView>
        )
    }
    renderRow(rowData,sectionId,rowId,hItemId){
        return(
            <TouchableOpacity
                style={styles.itemViewStyle}
                onPress={() => {
                    // Alert.alert(rowId+"-----"+typeof(rowData)+'  '+typeof (rowData.img))
                    // this._pressitem(rowId);
                }}
            >
                <View style={styles.itemStyle}>
                    <Image  source={{uri:rowData.img}} style={styles.imageStyle}/>
                    <View style={styles.subItemStyle}>
                        <Text style={{marginTop: 5, fontSize: 14}}>{rowData.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    renderRow1(rowData,sectionId,rowId,hItemId){
        return(
            <TouchableOpacity
                style={styles.itemViewStyle1}
                onPress={() => {
                    // Alert.alert(rowId+"-----"+typeof(rowData)+'  '+typeof (rowData.img))
                    this._pressitem(rowId);
                }}
            >
                <View style={styles.itemStyle1}>
                    <Image  source={{uri:rowData.img}} style={styles.imageStyle1}/>
                  {/*  <View style={styles.subItemStyle}>
                        <Text style={{marginTop: 5, fontSize: 14}}>{rowData.title}</Text>
                    </View>*/}
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    containerfirst: {
        backgroundColor: '#F5FCFF',
        //   backgroundColor: '#25b6ed',
    },
    containerbanwu: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        //   backgroundColor: '#25b6ed',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
    },
    containerStyle:{
        backgroundColor:"#F5FCFF",
        // //旋转90度
        // transform:[{rotate: "90deg"}],
        // alignItems: 'center',
        justifyContent: 'center',
        height:160,
        width:width,
    },
    pageStyle:{
        height:160,
        width:width,
        // //旋转-90度
        // transform:[{rotate: "-90deg"}]
    },
    itemall: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // alignItems: 'left',
        backgroundColor: '#F5FCFF',
    },
    item1: {
        padding: 5,
        fontSize: 17,
        color:'#FF7F00'
    },
    item: {
        padding: 5,
        fontSize: 14,
    },
    imageStyle: {
        // 尺寸
        width:30,
        height:30,
        // 边距
        marginLeft:5,
        margin:5
    },
    imageStyle1: {
        // 尺寸
        width:width/3-15,
        height:50,
        // 边距
        marginLeft:5,
        margin:5
    },

    subItemStyle: {
        // 对齐方式
        justifyContent:'space-around'
    },
    listStyle:{
        flexDirection:'row', //改变ListView的主轴方向
        // flexWrap:'wrap', //换行
    },
    listStyle1:{
        flexDirection:'row', //改变ListView的主轴方向
        flexWrap:'wrap', //换行
    },
    itemViewStyle:{
        alignItems:'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width / 7,
        height:70
    },
    itemViewStyle1:{
        alignItems:'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width / 3,
        height:70
    },
    itemIconStyle:{
        width:30,
        height:70
    },
    itemTitleStyle:{
        marginTop:8
    },
   itemStyle: {
       // 对齐方式
       justifyContent:'center',
           // 尺寸
           alignItems:'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
           width: width /7,
           height:70
   },
    itemStyle1: {
        // 对齐方式
        justifyContent:'center',
        // 尺寸
        alignItems:'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width /3,
        height:70
    },
});
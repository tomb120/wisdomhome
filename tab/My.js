import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, Alert, ListView, View, Dimensions, Image,img} from "react-native";
import skin from "../wisdomcell/style";

var newData = [
    {"title": "待付款", "img": 'icon_index_bw02'},
    {"title": "待发货", "img": 'icon_index_bw02'},
    {"title": "待收货", "img": 'icon_index_bw02'},
    {"title": "待评论", "img": 'icon_index_bw02'},
    {"title": "售后服务", "img": 'icon_index_bw02'}];
var newData1 = [
    {"title": "中奖记录", "img": 'icon_index_bw02'},
    {"title": "缴费记录", "img": 'icon_index_bw02'},
    {"title": "我的活动", "img": 'icon_index_bw02'},
    {"title": "我的消息", "img": 'icon_index_bw02'},
    {"title": "我的房源", "img": 'icon_index_bw02'},
    {"title": "我的发票", "img": 'icon_index_bw02'},
    {"title": "商务合作", "img": 'icon_index_bw02'}];
const {width,height} = Dimensions.get('window');
var navigation = null;
export default class My extends Component<Props> {
    state: any;  state1: any;

    constructor(props) {
        super(props);
        navigation = this.props.navigation;
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});
        this.state = { dataSource: ds.cloneWithRows(newData)};
        var ds1 = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});
        this.state1 = { dataSource: ds1.cloneWithRows(newData1)};
    }
//行间分割线
    _separator = () => {
        return <View style={{height:1, backgroundColor:'#7b7b7b',width:width}}/>
    };
    render(){

        return (
            <View style={styles.avatarContainer}>
                <View style={styles.arrowContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri:'resources_timg' }}/>
                    <Text style={styles.bigname}>{'18011401935'}</Text>
                </View>
                <Text style={styles.bigname}>{'我的订单'}</Text>
                <View style={{height:1, backgroundColor:'#7b7b7b',width:width}}/>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                removeClippedSubviews={false}
                contentContainerStyle={styles.listStyle}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
                <View style={{height:1, backgroundColor:'#7b7b7b',width:width}}/>
                <ListView
                    dataSource={this.state1.dataSource}
                    renderRow={this.renderRow1.bind(this)}
                    removeClippedSubviews={false}
                    contentContainerStyle={styles.listStyle1}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
//    返回Item试图
    renderRow(rowData,sectionId,rowId,hItemId){
        return(
            <TouchableOpacity
                style={styles.itemViewStyle}
                onPress={() =>{
                    // this._onPressGoto(rowId);
                }}
            >
                <View style={styles.itemStyle}>
                    <Image  source={{uri:rowData.img}} style={styles.imageStyle}/>
                    <View style={styles.subItemStyle}>
                        <Text style={{marginTop: 5, fontSize: 13}}>{rowData.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    renderRow1(rowData,sectionId,rowId,hItemId){
        return(
            <TouchableOpacity
                style={styles.itemViewStyle1}
                onPress={() =>{
                    // this._onPressGoto(rowId);
                }}
            >
                <View style={styles.itemStyle1}>
                    <Image  source={{uri:rowData.img}} style={styles.imageStyle}/>
                    <View style={styles.subItemStyle}>
                        <Text style={{marginTop: 5, fontSize: 13}}>{rowData.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    _onPressGoto(rowId){
        if(rowId==0){
            this.props.navigation.navigate('TeachingExperience', {name: 'Lucy'});
        }
        else if(rowId==1){

        }
        else if(rowId==2){


        }
        else if(rowId==3){

        }
        else if(rowId==4){
        }
    }
}



const styles = StyleSheet.create({
    contentViewStyle: {
        // 主轴方向
        flexDirection:'row',
        // 换行
        flexWrap:'wrap'
    },
    itemStyle: {
        // 对齐方式
        justifyContent:'center',
        // 尺寸
        alignItems:'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width / 5,
        height:60
    },
    itemStyle1: {
        // 对齐方式
        justifyContent:'center',
        // 尺寸
        alignItems:'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width / 4,
        height:70
    },
    itemImageStyle: {
        // 尺寸
        width:30,
        height:30,
        // 间距
        marginBottom:5
    },
    imageStyle: {
        // 尺寸
        width:30,
        height:30
    },

    subItemStyle: {
        // 对齐方式
        justifyContent:'space-around'
    },
    listStyle:{
        flexDirection:'row', //改变ListView的主轴方向
        // flexWrap:'wrap', //换行
        marginTop:10,
    },
    listStyle1:{
        flexDirection:'row', //改变ListView的主轴方向
        flexWrap:'wrap', //换行
        marginTop:10,
    },
    itemViewStyle:{
        alignItems:'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width / 5,
        height:60
    },
    itemViewStyle1:{
        alignItems:'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width / 4,
        height:70
    },
    itemIconStyle:{
        width:30,
        height:30
    },
    itemTitleStyle:{
        marginTop:8
    },
    avatarContainer: {
        width:width,
        backgroundColor:skin.background,
        flexDirection: 'column',
        marginTop: 10,
    },
    roleContainer: {
        paddingLeft:15,
        paddingRight:15,
        flexDirection: 'row',
        alignItems : 'center',
        height:26,
        width:width,
        justifyContent: 'space-between',
        marginTop: 20,
    },
    divContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF',
    },
    arrowContainer: {
        marginLeft:10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height:50,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    bigname: {
        marginTop:10,
        marginLeft:10,
        fontSize: 14,
        color:'gray'
        // position: 'absolute',
        // top: 20,
    },
    name: {
        fontSize: 16,
        color:'gray'
        // position: 'absolute',
        // top: 20,
    },
});
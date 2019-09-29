import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, Alert, ListView, View, Dimensions, Image,img} from "react-native";
var newData = [
    {"title": "公告", "img": 'xiaoli'},
    {"title": "管家", "img": 'icon_index_bw02'},
    {"title": "缴费", "img": 'icon_index_bw03'},
    {"title": "开门", "img": 'icon_index_bw04'},
    {"title": "报修", "img": 'icon_index_bw05'},
    {"title": "投诉", "img": 'icon_index_bw05'},
    {"title": "访客", "img": 'icon_index_bw05'}];
const {width,height} = Dimensions.get('window');
var navigation = null;
export default class Zhikong extends Component<Props> {
    state: any;

    constructor(props) {
        super(props);
        navigation = this.props.navigation;
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});
        this.state = { dataSource: ds.cloneWithRows(newData)};
    }

    render(){
        return (
            <Image  source={{uri:'resources_timg'}} style={{width: width, height: height }}/>
        )
    }
    _pressitem(rowId){
        if(rowId==0){
            this.props.navigation.navigate('xiaoli', {name: 'Lucy'})
        }
        else if(rowId==1){
            this.props.navigation.navigate('notice', {name: 'Lucy'})
        }
        else if(rowId==3){
            this.props.navigation.navigate('investigation', {name: 'Lucy'})
        }
        else if(rowId==4){
            this.props.navigation.navigate('banfeimanage', {name: 'Lucy'})
        }
        if(rowId==2){
            this.props.navigation.navigate('Roster', {name: 'Lucy'})
        }
    }
//    返回Item试图
    renderRow(rowData,sectionId,rowId,hItemId){
        return(
            <TouchableOpacity
                style={styles.itemViewStyle}
                onPress={() => {
                    // Alert.alert(rowId+"-----"+typeof(rowData)+'  '+typeof (rowData.img))
                    this._pressitem(rowId);
                }}
            >
                <View style={styles.itemStyle}>
                    <Image  source={{uri:rowData.img}} style={styles.imageStyle}/>
                    <View style={styles.subItemStyle}>
                        <Text style={{marginTop: 5, fontSize: 17}}>{rowData.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
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
        width: width / 3,
        height:100
    },

    itemImageStyle: {
        // 尺寸
        width:80,
        height:80,
        // 间距
        marginBottom:5
    },
    imageStyle: {
        // 尺寸
        width:80,
        height:80,
        // 边距
        marginLeft:10,
        margin:10
    },

    subItemStyle: {
        // 对齐方式
        justifyContent:'space-around'
    },
    listStyle:{
        flexDirection:'row', //改变ListView的主轴方向
        flexWrap:'wrap', //换行
        marginTop:20,
    },
    itemViewStyle:{
        alignItems:'center', //这里要注意，如果每个Item都在外层套了一个 Touchable的时候，一定要设置Touchable的宽高
        width: width / 3,
        height:120
    },
    itemIconStyle:{
        width:80,
        height:80
    },
    itemTitleStyle:{
        marginTop:8
    }
});
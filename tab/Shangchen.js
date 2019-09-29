import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, Alert, ListView, View, Dimensions, Image,img} from "react-native";

var newData = [
    {"title": "读书计划", "img": 'icon_index_kz01'},
    {"title": "运动打卡", "img": 'icon_index_kz02'},
    {"title": "体能训练", "img": 'icon_index_kz03'},
    {"title": "活动", "img": 'icon_index_kz03'}];
const {width,height} = Dimensions.get('window');
var navigation = null;
var _this=null;
export default class Shangchen extends Component<Props> {
    state: any;

    constructor(props) {
        super(props);
        navigation = this.props.navigation;
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});
        this.state = { dataSource: ds.cloneWithRows(newData)};
    }
    componentDidMount(){
         _this=this;
    }

    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                removeClippedSubviews={false}
                contentContainerStyle={styles.listStyle}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        )
    }
    _onPressGoto(rowId){
        if(rowId==0){
            console.log(rowId+'---------------'+this.props.navigation);
            this.props.navigation.navigate('ReadPlan', {name: 'Lucy'});
        }
        else if(rowId==1){
            this.props.navigation.navigate('sportscard', {name: 'Lucy'});

        }
        else if(rowId==2){
            Alert.alert(rowId+"-----");

        }
        else if(rowId==3){
            this.props.navigation.navigate('exercise', {name: 'Lucy'})
        }
    }
//    返回Item试图
    renderRow(rowData,sectionId,rowId,hItemId){
        return(
            <TouchableOpacity
                style={styles.itemViewStyle}
                onPress={() =>{
                    this._onPressGoto(rowId);
                }
                }
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
    listStyle:{
        flexDirection:'row', //改变ListView的主轴方向
        flexWrap:'wrap', //换行
        marginTop:20,
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
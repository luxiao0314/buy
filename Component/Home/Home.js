/**
 * Created by lucio on 02/06/2017.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Platform, Image, ScrollView
} from 'react-native';

let HomeDetail = require("../Home/HomeDetail");
let MiddleView = require("../Home/MiddleView");
const TopView = require('../Home/TopView');

const Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*首页的导航条*/}
                {this.renderNavBar()}
                {/*内容部分*/}
                <ScrollView>
                    {/*头部view*/}
                    <TopView/>
                    {/*中间的内容*/}
                    <MiddleView/>
                </ScrollView>
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <TouchableOpacity onPress={() => {
                    this.pushToDetail();
                }}>
                    <Text style={{color: 'white'}}>广州</Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    style={styles.topInputStyle}
                    placeholder={"输入商家,品类,商圈"}/>
                {/*右边*/}
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={() => {
                        alert("icon_homepage_message");
                    }}>
                        <Image source={{uri: 'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        alert("icon_homepage_scan");
                    }}>
                        <Image source={{uri: 'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //跳转到二级详情页面
    pushToDetail() {
        this.props.navigator.push({
            component: HomeDetail,
            title: '详情'
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    topInputStyle: {
        width: width * 0.7,
        backgroundColor: 'white',
        marginTop: Platform.OS === 'ios' ? 18 : 0,
        marginBottom: Platform.OS === 'ios' ? 18 : 0,
        // 设置圆角
        borderRadius: 14,
        // 内左边距
        paddingLeft: 15,
        alignItems:'center'
    },
    navBarStyle: {
        marginTop: Platform.OS === 'ios' ? 18 : 0,
        height: Platform.OS === 'ios' ? 64 : 48,
        backgroundColor: 'rgba(255,96,0,1.0)',
        //设置主轴方向
        flexDirection: 'row',
        //设置侧轴对其方式
        alignItems: 'center',
        //设置主轴的对齐方向
        justifyContent: 'space-around'
    },
    navRightImgStyle: { // 设置图片的大小
        width: Platform.OS === 'ios' ? 28 : 24,
        height: Platform.OS === 'ios' ? 28 : 24
    },
    rightNavViewStyle:{
        flexDirection:'row',
        height:64,
        alignItems:'center'
    }
});

module.exports = Home;

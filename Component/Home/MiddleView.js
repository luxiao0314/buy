/**
 * Created by lucio on 02/06/2017.
 */

import React, {Component} from 'react';
import {
    AppRegistry, Image,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';

// 引入外部数据
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

const CommonView = require('../Home/CommonView');

export default class MiddleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    }

    renderLeftView() {
        var data = TopMiddleData.dataLeft[0];
        return (
            <TouchableOpacity onPress={() => {
            }}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: data.img1}} style={styles.leftImageStyle}/>
                    <Image source={{uri: data.img2}} style={styles.leftImageStyle}/>
                    <Text style={{color: 'gray'}}>{data.title}</Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                        <Text style={{color: 'blue', marginRight: 5}}>{data.price}</Text>
                        <Text tyle={{color: 'orange', backgroundColor: 'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    renderRightView() {
        const itemArr = [];
        const rightData = TopMiddleData.dataRight;
        for (let i = 0; i < rightData.length; i++) {
            // 取出单独的数据
            var data = rightData[i];

            itemArr.push(
                <CommonView
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
                    key={i}
                />
            );
        }
        return itemArr;
    }

}

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
        marginTop:15,
    },
    leftViewStyle: {
        width: width * 0.5,
        height: 119,
        backgroundColor: 'white',
        marginRight: 1,

        // 水平居中
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftImageStyle: {
        width: 120,
        height: 30,

        // 内容模式
        resizeMode: 'contain'
    }
});

module.exports = MiddleView;

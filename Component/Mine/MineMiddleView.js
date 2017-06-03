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

var middleData = require('./MiddleData.json');
export default class MineMiddleView extends Component {

    render() {
        return (
            <View style={styles.container}>
                {this.renderAllItem()}
            </View>
        );
    }

    renderAllItem() {
        // 定义组件数组
        const itemArr = [];
        for (let i = 0; i < middleData.length; i++) {
            const data = middleData[i];
            itemArr.push(
                <InnerView style={styles.innerViewStyle}
                           key={i}
                           iconName={data.iconName}
                           title={data.title}
                />
            )
        }
        return itemArr;
    }
}

class InnerView extends Component {

    //设置props的默认属性
    static defaultProps = {
        iconName: '',
        title: ''
    };

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.5} onPress={() => alert(this.props.title)}>
                <View>
                    <Image source={{uri: this.props.iconName}} style={{width: 40, height: 30, marginBottom: 3}}/>
                    <Text style={{color: 'gray'}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // 设置主轴的方向
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        // 设置主轴的对齐方式
        justifyContent: 'space-around'
    },

    innerViewStyle: {
        width: 70,
        height: 70,

        // 水平和垂直居中
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = MineMiddleView;

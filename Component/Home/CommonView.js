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

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var CommonView = React.createClass({

    getDefaultProps(){
        return {
            title: '',
            subTitle: '',
            rightIcon: '',
            titleColor: '',
            tplurl: '', //下级界面的URL路径
            // 回调函数
            callBackClickCell: null
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)}>
                {/*左边*/}
                <View style={styles.container}>
                    <View>
                        <Text style={[{color: this.props.titleColor}, styles.titleStyle]}>
                            {this.props.title}
                        </Text>
                        <Text style={styles.subTitleStyle}>
                            {this.props.subTitle}
                        </Text>
                    </View>
                    <Image source={{uri: this.props.rightIcon}} style={{width: 64, height: 43, resizeMode: 'contain'}}/>
                </View>
            </TouchableOpacity>
        );
    },

    // 点击了cell
    clickCell(data){
        // 判断处理
        if (this.props.callBackClickCell === null) return;
        // 执行回调函数
        this.props.callBackClickCell(data);
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: width * 0.5 - 1,
        height: 59,
        marginBottom: 1,
        marginRight: 1,

        // 改变主轴的方向
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subTitleStyle: {
        color: 'gray'
    }
});

module.exports = CommonView;

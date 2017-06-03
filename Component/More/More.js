/**
 * Created by lucio on 02/06/2017.
 */

import React, {Component} from 'react';
import {
    AppRegistry, Image,
    StyleSheet,
    Text, TouchableOpacity,
    View, Platform, ScrollView
} from 'react-native';

const CommonCell = require("../More/CommonCell");

export default class More extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}

                <ScrollView>
                    <View style={{marginTop: 20}}>
                        <CommonCell title="扫一扫"/>
                    </View>
                </ScrollView>
            </View>
        );
    }

    // 导航条
    renderNavBar() {
        return (
            <View style={styles.navOutViewStyle}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>更多</Text>
                <TouchableOpacity onPress={() => {
                    alert('点了!')
                }} style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    navImageStyle: {
        width: Platform.OS === 'ios' ? 28 : 24,
        height: Platform.OS === 'ios' ? 28 : 24,
    },

    rightViewStyle: {
        // 绝对定位
        position: 'absolute',
        right: 10,
        bottom: Platform.OS === 'ios' ? 15 : 13
    },
    navOutViewStyle: {
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection: 'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems: 'center',
        // 主轴方向居中
        justifyContent: 'center'
    },
});

module.exports = More;

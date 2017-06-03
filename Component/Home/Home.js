/**
 * Created by lucio on 02/06/2017.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

let HomeDetail = require("../Home/HomeDetail");

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    this.pushToDetail()
                }}>
                    <Text style={styles.welcome}>
                        首页
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    // 跳转到二级界面
    pushToDetail() {
        this.props.navigator.push({
            component: HomeDetail,
            title: '详情页'
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
});

module.exports = Home;

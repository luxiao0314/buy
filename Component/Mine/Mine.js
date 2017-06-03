/**
 * Created by lucio on 02/06/2017.
 */

import React, {Component} from 'react';
import {
    AppRegistry, ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

const MyCell = require("../Mine/CommonMyCell");
const MineMiddleView = require("../Mine/MineMiddleView");
const HeaderView = require("../Mine/HeaderView");
export default class Mine extends Component {
    render() {
        return (
            <ScrollView
                contentInset={{top: -200}}
                contentOffset={{y: 200}}
                style={{marginTop: 20, backgroundColor: '#e8e8e8'}}>
                {/*头部的View*/}
                <HeaderView />
                <View>
                    <MyCell
                        leftIconName="collect"
                        leftTitle="我的订单"
                        rightTitle="查看全部订单"/>
                    <MineMiddleView />
                </View>

                <View style={{marginTop: 20}}>
                    <MyCell
                        leftIconName="draft"
                        leftTitle="小码哥钱包"
                        rightTitle="账户余额:¥100"/>

                    <MyCell
                        leftIconName="like"
                        leftTitle="抵用券"
                        rightTitle="10张"/>
                </View>


                <View style={{marginTop: 20}}>
                    <MyCell
                        leftIconName="card"
                        leftTitle="积分商城"/>
                </View>

                <View style={{marginTop: 20}}>
                    <MyCell
                        leftIconName="new_friend"
                        leftTitle="今日推荐"
                        rightIconName="me_new"/>
                </View>

                <View style={{marginTop: 20}}>
                    <MyCell
                        leftIconName="pay"
                        leftTitle="我要合作"
                        rightTitle="轻松开店,招财进宝"/>
                </View>
            </ScrollView>
        );
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

module.exports = Mine;

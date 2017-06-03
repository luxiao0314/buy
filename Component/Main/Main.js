/**
 * Created by lucio on 02/06/2017.
 */

import React, {Component} from 'react';
import {
    AppRegistry, Image,
    StyleSheet,
    Text,
    View,
    Platform, Navigator
} from 'react-native';
import TabNavigator from "react-native-tab-navigator";

var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');

export default class Main extends Component {


    constructor() {
        super();
        this.state={
            selectedTab:'home'
        }
    }

    render() {
        return (
            <TabNavigator>
                {/*首页*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() =>
                        <Image source={{uri: 'icon_tabbar_homepage_selected'}}
                               style={styles.iconStyle}/>}
                    badgeText="2"
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Navigator
                        initialRoute={{name:'首页',component:Home}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>
                {/*商家*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="商家"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() =>
                        <Image source={{uri: 'icon_tabbar_merchant_selected'}}
                               style={styles.iconStyle}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: 'shop'})}>
                    <Navigator
                        initialRoute={{name:'商家',component:Shop}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>
                {/*我的*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() =>
                        <Image source={{uri: 'icon_tabbar_mine_selected'}}
                               style={styles.iconStyle}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: 'mine'})}>
                    <Navigator
                        initialRoute={{name:'我的',component:Mine}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>
                {/*更多*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="更多"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() =>
                        <Image source={{uri: 'icon_tabbar_misc_selected'}}
                               style={styles.iconStyle}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: 'more'})}>
                    <Navigator
                        initialRoute={{name:'更多',component:More}}
                        configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    }
});

module.exports = Main;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Navigator
} from 'react-native';

let LaunchPage = require("./Component/Main/LaunchPage");

export default class buy extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: '启动页', component: LaunchImage}}
                configureScene={() => {
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}
            />
        );
    }
}

AppRegistry.registerComponent('buy', () => buy);

/**
 * Created by lucio on 02/06/2017.
 */

import React, {Component} from 'react';
import {
    AppRegistry, Image,
    StyleSheet,
    Text,
    View
} from 'react-native';


let Main = require("../Main/Main");
export default class LaunchPage extends Component {
    render() {
        return (
            <Image source={{uri: "launchimage"}} style={styles.launchImageStyle}/>
        );
    }


    componentDidMount() {
        setTimeout(() => {
            this.props.navigator.replace({
                component: Main
            });
        }, 1500)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    launchImageStyle: {
        flex: 1
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

module.exports = LaunchPage;

/**
 * Created by lucio on 02/06/2017.
 */

import React, {Component} from 'react';
import {
    AppRegistry, Image,
    StyleSheet, Switch,
    Text, TouchableOpacity,
    View, Platform
} from 'react-native';

class CommonCell extends Component {

    constructor() {
        super();
        this.state = {
            title: '',  // 标题
            isSwitch: false, // 是否展示开关
            rightTitle: '',
            isOn: false,
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                alert('点了')
            }}>
                <View style={styles.container}>
                    {/*左边*/}
                    <Text style={{marginLeft: 8}}>{this.props.title}</Text>
                    {/*右边*/}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    }

    renderRightView() {
        if (this.state.isSwitch) {
            return (
                <Switch value={this.state.isOn}
                        style={{marginRight: 8}}
                        onValueChange={() => {
                            this.setState({
                                isOn: !this.state.isOn
                            });
                        }}/>
            );
        } else {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 8}}/>
                </View>

            );
        }
    }

    rightTitle() {
        if (this.state.rightTitle.length === 0) {
            return (
                <Text style={{color: 'gray', marginRight: 3}}>
                    {this.state.rightTitle}
                </Text>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 40 : 30,
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,

        flexDirection: 'row',
        // 主轴的对齐方式
        justifyContent: 'space-between',
        // 垂直居中
        alignItems: 'center'
    }
});

module.exports = CommonCell;

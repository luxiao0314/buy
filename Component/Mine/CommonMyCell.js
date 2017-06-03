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

class CommonMyCell extends Component {

    //设置props的默认属性
    static defaultProps = {
        leftIconName: '',
        leftTitle: '',
        rightIconName: '',
        rightTitle: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            isOn: false,
        }
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
                alert(this.props.leftTitle)
            }}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri: this.props.leftIconName}} style={styles.leftImgStyle}/>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    {/*右边*/}
                    {this.rightSubView()}
                </View>
            </TouchableOpacity>
        );
    }

    rightSubView() {
        return (
            <View style={styles.rightViewStyle}>
                {this.renderRightContent()}
                <Image source={{uri: 'icon_cell_rightArrow'}}
                       style={{width: 8, height: 13, marginRight: 8, marginLeft: 5}}/>
            </View>
        )
    }

    renderRightContent() {
        if (this.props.rightIconName.length === 0) {
            return ( //不返回图片
                <Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>
            )
        } else {
            return (
                <Image source={{uri: this.props.rightIconName}} style={{width: 24, height: 13}}/>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        // 主轴的方向
        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 背景颜色
        backgroundColor:'white',
        // 垂直居中
        alignItems:'center',
        // 高度
        height:Platform.OS === 'ios' ? 40 : 36,

        // 下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftImgStyle: {
        marginLeft:6,
        width: 24,
        height: 24,
        marginRight: 6,
        // 圆角
        borderRadius: 12
    },
    leftTitleStyle: {
        fontSize: 16
    },
    rightViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

module.exports = CommonMyCell;

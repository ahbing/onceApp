/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  DeviceEventEmitter,
  NativeModules
} from 'react-native';

import './UserAgent';

import io from 'socket.io-client/socket.io';

// 安卓消息通知接口
var Notification = require('./message.js');

// 封装的 原生模块

NativeModules.Ibeacon.BlueToothEnable();

NativeModules.Ibeacon.IbInit('aa',res => {
  // 接收  ibeacon 信息
  DeviceEventEmitter.addListener("IbeaconInfo",(e)=>{
    console.log("iBeacon信息：",e);
  });
})

Notification.create({ subject: 'Hey', message: 'Yo! Hello world.' });

NativeModules.Ibeacon.MySensorInit(res => {
  // 接收  磁仰角 方位角 信息
  DeviceEventEmitter.addListener("SensorInfo",(e)=>{
    console.log("磁仰角等：",e);
  });
})

class onceApp extends Component {
  constructor(props){
    super(props);
    // this.socket = io('localhost:3001', {jspon: false});
  }
  componentDidMount() {
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
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

AppRegistry.registerComponent('onceApp', () => onceApp);

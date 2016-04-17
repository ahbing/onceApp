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


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import App from './containers/App';

import './userAgent';
import io from 'socket.io-client/socket.io';

const createStoreWithMW = applyMiddleware(thunk)(createStore);
const store = createStoreWithMW(rootReducer);

//// 安卓消息通知接口
//const Notification = require('./message.js');
//
//// 封装的 原生模块
//NativeModules.Ibeacon.BlueToothEnable();
//NativeModules.Ibeacon.IbInit('aa',res => {
//  // 接收  ibeacon 信息
//  DeviceEventEmitter.addListener("IbeaconInfo",(e)=>{
//    //console.log("iBeacon信息：",e);
//  });
//});
//
//Notification.create({ subject: 'Hey', message: 'Yo! Hello world.' });
//
//NativeModules.Ibeacon.MySensorInit(res => {
//  // 接收  磁仰角 方位角 信息
//  DeviceEventEmitter.addListener("SensorInfo",(e)=>{
//    //console.log("磁仰角等：",e);
//  });
//});



class Root extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root;

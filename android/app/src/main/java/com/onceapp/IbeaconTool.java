package com.onceapp;

import android.app.Application;
import android.bluetooth.BluetoothAdapter;
import android.content.Context;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.sensoro.beacon.kit.Beacon;
import com.sensoro.beacon.kit.BeaconManagerListener;
import com.sensoro.cloud.SensoroManager;

import java.util.ArrayList;


/**
 * Created by ctyloading on 16/4/9.
 */
public class IbeaconTool extends Application {
    public static final int REQUEST_ENABLE_BT = 1;
    BluetoothAdapter bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();

    ReactContext reactContext;

    public int IbInit(Context context){
        reactContext = (ReactContext) context;
        /**
         * 检查蓝牙是否开启
         **/
        SensoroManager sensoroManager = SensoroManager.getInstance(context);
        if (sensoroManager.isBluetoothEnabled()) {
            /**
             * 设置启用云服务 (上传传感器数据，如电量、UMM等)。如果不设置，默认为关闭状态。
             **/
            sensoroManager.setCloudServiceEnable(true);
            /**
             * 启动 SDK 服务
             **/
            try {
                sensoroManager.startService();
                this.BeaconsListener(sensoroManager);
            } catch (Exception e) {
                e.printStackTrace(); // 捕获异常信息
                return 102;
            }

        }else{
            return 101;
        }

        return 200;
    }

    // 开启蓝牙
    public int BlueToothEnable() {
        // 检查是否支持蓝牙
        if(bluetoothAdapter == null) {
            return 100;
        }
        if(!bluetoothAdapter.isEnabled()){
            bluetoothAdapter.enable();
        }
        return 200;
    }

    // 关闭蓝牙
    public int BlueToothDisable() {
        // 检查是否支持蓝牙
        if(bluetoothAdapter == null) {
            return 100;
        }
        if(bluetoothAdapter.isEnabled()){
            bluetoothAdapter.disable();
        }
        return 200;
    }

    // 蓝牙是否已经打开
    public boolean BlueToothIsEnable() {
        // 检查是否支持蓝牙
        if(bluetoothAdapter == null) {
            return false;
        }
        if(!bluetoothAdapter.isEnabled()){
            return false;
        }
        return true;
    }

    // 监听云子
    public void BeaconsListener(SensoroManager sensoroManager) {

        BeaconManagerListener beaconManagerListener = new BeaconManagerListener() {

            @Override
            public void onUpdateBeacon(ArrayList<Beacon> beacons) {
                // 传感器信息更新
                // 检查串码为"0117C5456A36"的云子，运动状态是否有变化
                WritableMap tempList = Arguments.createMap();
                for(Beacon beacon:beacons){
                    if (beacon.getSerialNumber().equals("0117C59620F9")){
                        WritableMap temp = Arguments.createMap();
                        temp.putString("measuredPower", String.valueOf(beacon.getMeasuredPower()));
                        temp.putString("rssi", String.valueOf(beacon.getRssi()));
                        temp.putString("accuracy", String.valueOf(beacon.getAccuracy()));
                        temp.putString("proximity", String.valueOf(beacon.getProximity()));
                        temp.putString("_MAC",beacon.getMacAddress());
                        temp.putString("_SN",beacon.getSerialNumber());
                        tempList.putMap(temp.getString("_SN"),temp);
                    }

                }
                sendEvent(reactContext,"IbeaconInfo",tempList);
            }

            @Override
            public void onNewBeacon(Beacon beacon) {
                // 发现一个新的传感
            }

            @Override
            public void onGoneBeacon(Beacon beacon) {
                // 一个传感器消失
            }
        };
        sensoroManager.setBeaconManagerListener(beaconManagerListener);
    }

    // 发送
    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}

package com.onceapp;

import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class Ibeacon extends ReactContextBaseJavaModule {

    IbeaconTool tool = new IbeaconTool();
    MySensor MySensor = new MySensor();
    ReactApplicationContext reactContext = getReactApplicationContext();


    public Ibeacon(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Ibeacon";
    }


    public String change(String input){
        input = "asdasdadadas,Goodbye";
        return input;
    }

    // Available as NativeModules.MyCustomModule.processString

    // 蓝牙是否已经打开
    @ReactMethod
    public boolean BlueToothIsEnable(){
        return tool.BlueToothIsEnable();
    }

    //开启蓝牙
    @ReactMethod
    public int BlueToothEnable(){
        return tool.BlueToothEnable();
    }

    //关闭蓝牙
    @ReactMethod
    public int BlueToothDisable(){
        return tool.BlueToothDisable();
    }

    @ReactMethod
    public void IbInit(String input, Callback callback) {
        if(tool.IbInit(reactContext) == 200){
            input += " 初始化成功!";
        }
        else {
            input += " 初始化失败!";
        }
        callback.invoke(input);
    }

    @ReactMethod
    public void MySensorInit(Callback callback){
        MySensor.MySensorInit(reactContext);
        callback.invoke("传感器初始化成功!");
    }

}

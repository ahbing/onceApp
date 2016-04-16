package com.onceapp;

import android.app.Application;
import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;


/**
 * Created by ctyloading on 16/4/12.
 */
public class MySensor extends Application implements SensorEventListener {
    private  SensorManager mSensorManager;
    private boolean mRegisteredSensor;

    private float[] accelValues = new float[3], compassValues = new float[3];
    private boolean ready = false; //检查传感器是否正常工作，即是否同时具有加速传感器和磁场传感器。
    private float[] inR = new float[9];
    private float[] inclineMatrix = new float[9];
    private float[] prefValues = new float[3];
    private double mInclination;
    private int count = 1;
    ReactContext reactContext;

    public MySensor() {

    }

    public void MySensorInit(Context context){
        reactContext = (ReactContext) context;
//        Log.i("count:::","初始化传感器");
        mRegisteredSensor = false;
        mSensorManager = (SensorManager)context.getSystemService(SENSOR_SERVICE);
        mSensorManager.registerListener( this, mSensorManager.getDefaultSensor(Sensor.TYPE_MAGNETIC_FIELD), SensorManager.SENSOR_DELAY_FASTEST);
        mSensorManager.registerListener( this, mSensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER), SensorManager.SENSOR_DELAY_FASTEST);
//        Log.i("count:::", String.valueOf(mRegisteredSensor));
//        Log.i("count:::","传感器开启:"+mRegisteredSensor);
    }
    protected void MySensorPause() {

        if(mRegisteredSensor) {

            mSensorManager.unregisterListener(this);

            mRegisteredSensor = false;
        }
//        Log.i("count:::","传感器注销成功");
    }

    @Override
    public void onAccuracyChanged(Sensor sensor, int accuracy) {
//        Log.i("count:::","传感器改变1111111");
    }
    @Override
    public void onSensorChanged(SensorEvent event) {
//        Log.i("count:::","传感器数据改变");

        switch (event.sensor.getType()){
            case Sensor.TYPE_ACCELEROMETER:
                for(int i = 0 ; i < 3 ; i ++){
                    accelValues[i] = event.values[i];
                }
                if(compassValues[0] != 0) //如果accelerator和magnetic传感器都有数值，设置为真
                    ready = true;
                break;
            case Sensor.TYPE_MAGNETIC_FIELD:
                for(int i = 0 ; i < 3 ; i ++){
                    compassValues[i] = event.values[i];
                }
                if(accelValues[2] != 0) //检查accelerator和magnetic传感器都有数值，只是换一个轴向检查
                    ready = true;
                break;
        }
        if(SensorManager.getRotationMatrix(inR, inclineMatrix, accelValues, compassValues)){
            /* 【2.2】根据rotation matrix计算设备的方位。，范围数组：
            values[0]: azimuth, rotation around the Z axis.
            values[1]: pitch, rotation around the X axis.
            values[2]: roll, rotation around the Y axis.*/
            SensorManager.getOrientation(inR, prefValues);
            //【2.2】根据inclination matrix计算磁仰角，地球表面任一点的地磁场总强度的矢量方向与水平面的夹角。
            mInclination = SensorManager.getInclination(inclineMatrix);

            //【3】显示测量值
            if(count++ % 100 == 0){
//                Log.i("count:::", "磁仰角:"+String.valueOf(mInclination));
//                Log.i("count:::", "X::"+String.valueOf(prefValues[0]));
//                Log.i("count:::", "Y::"+String.valueOf(prefValues[1]));
//                Log.i("count:::", "Z::"+String.valueOf(prefValues[2]));
                count = 1;
                WritableMap temp = Arguments.createMap();
                temp.putString("X", String.valueOf(Math.toDegrees(prefValues[0])));
                temp.putString("Y", String.valueOf(Math.toDegrees(prefValues[1])));
                temp.putString("Z", String.valueOf(Math.toDegrees(prefValues[2])));
                temp.putString("ACCELEROMETER", String.valueOf(Math.toDegrees(mInclination)));
                sendEvent(reactContext,"SensorInfo",temp);
            }

        }else{

        }
    }

    // 发送
    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
//    public void doUpdate(View v){
//        if(!ready)
//            return;
//        //preValues[0]是方位角，单位是弧度，范围是-pi到pi，通过Math.toDegrees()转换为角度
//        float mAzimuth = (float)Math.toDegrees(prefValues[0]);
//        /*//纠正为orientation的数值。
//         * if(mAzimuth < 0)
//            mAzimuth += 360.0;*/
//
//        String msg = String.format("推荐方式：\n方位角：%7.3f\npitch: %7.3f\nroll: %7.3f\n地磁仰角：%7.3f\n",
//                mAzimuth,Math.toDegrees(prefValues[1]),Math.toDegrees(prefValues[2]),
//                Math.toDegrees(mInclination));
//        nowOne.setText(msg);
//
//        msg = String.format("老方式：\n方位角：%7.3f\npitch: %7.3f\nroll: %7.3f",
//                orientValues[0],orientValues[1],orientValues[2]);
//        oldOne.setText(msg);
//    }
}

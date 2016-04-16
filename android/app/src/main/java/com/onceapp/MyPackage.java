package com.onceapp;


import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by ctyloading on 16/4/9.
 */
public class MyPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>(1);
        // 将我们自定义模块添加一个集合中，这样React组件就会在合适的时机将我们引用的模块加载进去，这样后面才能愉快地玩耍~
        modules.add(new Ibeacon(reactContext));
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        //现在不需要用到，不要传null，否则报错
        return Collections.emptyList();
    }

    @Override
    public List<com.facebook.react.uimanager.ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        //现在不需要用到，不要传null，否则报错
        return Collections.emptyList();
    }
}

// 注册模块  先见一个package
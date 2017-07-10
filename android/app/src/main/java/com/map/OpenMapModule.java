package com.map;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Administrator on 2017/7/10.
 */
public class OpenMapModule extends ReactContextBaseJavaModule {
    public OpenMapModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "OpenMap";
    }

    /*打开 地图  ltg 经纬*/
    @ReactMethod
    public void openMap(String str) {
        OpenMap.setUpBaiduAPPByMine(getCurrentActivity(), str);
    }
}

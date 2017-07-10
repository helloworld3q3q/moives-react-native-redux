package com.map;

/**
 * Created by Administrator on 2017/7/10.
 */
import android.app.Activity;
import android.content.Intent;
import java.io.File;
import android.util.Log;
import java.net.URISyntaxException;
import java.util.Arrays;


public class OpenMap {
    private static final String TAG = "MAP";

    public static void setUpBaiduAPPByMine(final Activity activity, String str){
        try {
            Intent intent = Intent.parseUri("intent://map/direction?origin=我的位置&"+
                    "destination="+str+"&mode=driving&src=yourCompanyName|yourAppName#Intent;scheme=bdapp;package=com.baidu.BaiduMap;end",
                    0);
            if(isInstallByread("com.baidu.BaiduMap")){
               //startActivity(intent);
                activity.startActivity(intent);
                System.err.print("23122432");
                Log.e(TAG, "百度地图客户端已经安装") ;
            }else {
                Log.e(TAG, "没有安装百度地图客户端") ;
            }
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
    }

    /**
     * 判断是否安装目标应用
     * @param packageName 目标应用安装后的包名
     * @return 是否已安装目标应用
     */
    private static boolean isInstallByread(String packageName) {
        return new File("/data/data/" + packageName).exists();
    }

}

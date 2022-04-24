package com.nativemoduleworkshop;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ToastModule extends ReactContextBaseJavaModule {
    ToastModule(ReactApplicationContext context){
        super(context);
    }

//    여기서 정한 이름은 나중에 자바스크립트 코드에서 네이티브 모듈을 불러오는 과정에 사용됩니다
    @Override
    public String getName(){
        return "ToastModule";
    }

//    메서드 위에 @ReactMethod를 붙이면 추후에 자바스크립트에서 호출 가능
    @ReactMethod
    public void show(String message, double duration){
        ReactApplicationContext context=getReactApplicationContext();
        Toast toast = Toast.makeText(context, message, (int) duration);
        toast.show();
    }
}

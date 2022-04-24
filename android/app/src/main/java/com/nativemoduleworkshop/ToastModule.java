package com.nativemoduleworkshop;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

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
    public void show(String message, int duration){
        ReactApplicationContext context=getReactApplicationContext();
        Toast toast = Toast.makeText(context, message, duration);
        toast.show();
    }

//    상수 생성
    @Override
    public Map<String, Object> getConstants(){
        final Map<String, Object> constants = new HashMap<>();
        constants.put("SHORT", Toast.LENGTH_SHORT);
        constants.put("LONG", Toast.LENGTH_LONG);
        return constants;
    }
}

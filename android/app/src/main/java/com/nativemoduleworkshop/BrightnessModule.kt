package com.nativemoduleworkshop

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

// ReactApplicationContext 상속
class BrightnessModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext){

//    모듈 이름 설정
        override fun getName():String{
            return "BrightnessModule"
        }

//    상수 선언
        override fun getConstants():MutableMap<String, Any>{
            val constants = HashMap<String, Any>()
            constants.put("SAMPLE_VALUE", "Hello World")
            return constants
        }

//    메서드 내보내기
        @ReactMethod
        fun getBrightness(promise: Promise){
            val activity = currentActivity!!
            val lp = activity.window.attributes
//    RN 모듈에서 값을 반환할 때는 비동기적으로 반환해야 함
            promise.resolve(lp.screenBrightness)
        }

        @ReactMethod
        fun setBrightness(brightness: Float){
            val activity = currentActivity!!
            activity.runOnUiThread {
                val lp = activity.window.attributes
                lp.screenBrightness = brightness
                activity.window.attributes = lp
            }
        }
    }

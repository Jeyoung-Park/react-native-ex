package com.nativemoduleworkshop

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class CounterManager: SimpleViewManager<CounterView>() {
//    React Native 컴포넌트 이름을 반
    override fun getName(): String {
        return REACT_CLASS
    }

//    View를 반환하는 메서드
    override fun createViewInstance(reactContext: ThemedReactContext): CounterView {
//         CounterView.kt 인스턴스를 만들어 반환
        return CounterView(reactContext)
    }

    @ReactProp(name = "leftButtonText")
    fun setLeftButtonText(view: CounterView, text: String){
        view.setLeftButtonText(text)
    }

    @ReactProp(name = "rightButtonText")
    fun setRightButtonText(view: CounterView, text: String){
        view.setRightButtonText(text)
    }

    @ReactProp(name = "value")
    fun setValue(view: CounterView, value: Int){
        view.setValue(value)
    }

    companion object{
        const val REACT_CLASS = "Counter"
    }
}
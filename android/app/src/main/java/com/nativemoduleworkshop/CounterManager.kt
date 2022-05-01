package com.nativemoduleworkshop

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

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

    companion object{
        const val REACT_CLASS = "Counter"
    }
}
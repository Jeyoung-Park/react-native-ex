package com.nativemoduleworkshop

import android.view.View
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactContext

class CounterView(val context: ReactContext):FrameLayout(context) {
    init{
//        레이아웃을 불러와 화면에 그려
        View.inflate(context, R.layout.counter_view, this)
    }
}
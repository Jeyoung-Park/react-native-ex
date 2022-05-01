package com.nativemoduleworkshop

import android.view.LayoutInflater
import android.view.View
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactContext
import com.nativemoduleworkshop.databinding.CounterViewBinding

class CounterView(val context: ReactContext):FrameLayout(context) {
    private val binding: CounterViewBinding

    fun setLeftButtonText(text: String){
        binding.button.text=text
    }

    fun setRightButtonText(text: String){
        binding.button2.text=text
    }

    fun setValue(value: Int){
        binding.textView.text=value.toString()
    }

    init{
        val inflater = LayoutInflater.from(context)
        binding = CounterViewBinding.inflate(inflater, this, true)
        binding.button.text="+1"
    }
}
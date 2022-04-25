import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import AlertModule from './Alert';
import {getBrightness, setBrightness} from './Brightness';
import ToastModule from './Toast';

const App = () => {
  const [value, setValue] = useState(0);
  const onPress = async () => {
    const brightness = await getBrightness();
    console.log('brightness, ', brightness);
    setValue(brightness);
  };

  const onPressLow = () => {
    setBrightness(0.25);
  };

  const onPressHigh = () => {
    setBrightness(1);
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>밝기:{value}</Text>
      <Button title="값 갱신" onPress={onPress} />
      <Button title=".25" onPress={onPressLow} />
      <Button title="1" onPress={onPressHigh} />
    </SafeAreaView>
  );
};

export default App;

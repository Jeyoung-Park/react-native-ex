/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import AlertModule from './Alert';
import ToastModule from './Toast';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="토스트 생성"
        onPress={() => {
          ToastModule.show('Hello World!', ToastModule.SHORT);
        }}
      />
      <Button
        title="Alert 생성"
        onPress={() => {
          AlertModule.alert('Hello World!');
        }}
      />
    </SafeAreaView>
  );
};

export default App;

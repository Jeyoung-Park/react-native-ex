import React from 'react';
import {StyleSheet} from 'react-native';
import Counter from './src/nativeUI/Counter';

const App = () => {
  return (
    <Counter
      style={styles.block}
      value={1}
      leftButtonText="+1"
      rightButtonText="-1"
    />
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default App;

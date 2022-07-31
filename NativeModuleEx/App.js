import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Counter from './src/nativeUI/Counter';

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <Counter
      style={styles.block}
      value={value}
      leftButtonText="+1"
      rightButtonText="-1"
      onPressLeftButton={() => setValue(v => v + 1)}
      onPressRightButton={() => setValue(v => v - 1)}
    />
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default App;

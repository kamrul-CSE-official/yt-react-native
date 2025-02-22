import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.continer}>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  continer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dadada',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

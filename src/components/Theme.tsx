import {View, Text, useColorScheme, StyleSheet} from 'react-native';
import React from 'react';
import Btn from './Btn';

const App = () => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  console.log('Theme: ', theme);
  return (
    <View
      style={[styles.container, {backgroundColor: isDark ? 'black' : 'white'}]}>
      <Text>App</Text>
      <Text style={[styles.text, {color: isDark ? 'white' : 'black'}]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        doloribus quisquam neque quaerat harum, consectetur, inventore saepe
        illo sed vero id. Saepe, veritatis! Asperiores voluptates necessitatibus
        quia laudantium, ut numquam.
      </Text>
      <Text>Kamrul</Text>
      <Btn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;

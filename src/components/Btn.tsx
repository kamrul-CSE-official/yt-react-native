import {
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React from 'react';

const Btn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Bismillah.</Text>

      <Image
        style={{width: 200, height: 300}}
        source={{
          uri: 'https://images.unsplash.com/photo-1739761613270-a48d0d1190ba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />

      <Button title="Press Me" />

      <TouchableOpacity
        onPress={() => Alert.alert('Pressed!')}
        style={{padding: 10, backgroundColor: 'green'}}>
        <Text>Button Opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        onPress={() => Alert.alert('Pressed!')}
        style={{padding: 10, backgroundColor: 'purple'}}>
        <Text>Button Highlight</Text>
      </TouchableHighlight>

      <Pressable style={styles.button}>
        <Text style={styles.btnText}>Button</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
    gap: 10,
  },
  text: {
    color: 'orange',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    width: 120,
    marginTop: 10,
    // padding: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    //  borderWidth: 6,
    //  borderColor: "pink"
  },
  btnText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
  },
});

export default Btn;

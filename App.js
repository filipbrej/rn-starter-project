import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Filip');

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput keyboardType='name-phone-pad' style={styles.input} placeholder="enter a name" onChangeText={(val) => setName(val)}/>
      <Text>His name is {name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 20,
    padding: 10,
    width: 200
  }
});

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [number, setNumber] = useState('');
  const [text, setText] = useState('Guess a number between 1-100');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guesses, setGuesses] = useState(0); 

  function Guess(){
    if (number == randomNumber) {
      Alert.alert('You guessed the number in ' + guesses + ' guesses');
      setRandomNumber(Math.floor(Math.random() * 100) + 1);
      setGuesses(0);
    }else if (number < randomNumber){
      setText('Your guess ' + number + ' is too low');
      setGuesses(guesses + 1);
    }else if (number > randomNumber){
      setText('Your guess ' + number + ' is too high');
      setGuesses(guesses + 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
      keyboardType='numeric'
      style={styles.input}
      onChangeText={number => setNumber(number)}  
      value={number}
      />
      <Button onPress={Guess} title="Make guess" />
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
  input : {
    width:200 ,
    borderColor: 'gray',
    borderWidth:1
  }
});

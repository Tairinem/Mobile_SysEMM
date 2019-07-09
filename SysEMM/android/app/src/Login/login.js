import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { yellow } from 'ansi-colors';


// import { Container } from './styles';

export default class Login extends Component {
  state = {
    title: 'Meu app',
    description: 'Uma descrição'
  };
  render() {
    return (
      <View style={styles.container}>
        <Input style={styles.body}
          placeholder='Login'
          errorStyle={{ color: 'red' }}
        // errorMessage='ENTER A VALID ERROR HERE'
        />
        <Input
          placeholder='Senha'
          errorStyle={{ color: 'red' }}
        // errorMessage='ENTER A VALID ERROR HERE'
        />
      </View>
    )
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

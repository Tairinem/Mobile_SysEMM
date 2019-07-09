import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { yellow } from 'ansi-colors';


import { withFormik } from 'formik';

// import { Container } from './styles';

export default class Login extends Component {
  render() {
    const Form = (props) => (
      <Input
      value={props.values.email}
      onChangeText={text => props.setFieldValue('email', text)}
    />
    );
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 150, height: 150, borderRadius: 100, marginBottom: 30 }}
          source={require('../Image/Logo_SysEMM.jpg')}
        />
        <Input style={styles.body}
          placeholder='                               Login'
          errorStyle={{ color: 'red' }}
        // errorMessage='ENTER A VALID ERROR HERE'
        />
        <Input
          placeholder='                               Senha'
          errorStyle={{ color: 'red' }}
          secureTextEntry={true}
          password={true}
        // errorMessage='ENTER A VALID ERROR HERE'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text
            style={{ textAlign: 'center', marginTop: 13 }}
          > Login </Text>
        </TouchableOpacity>
        <View style={{ position: 'absolute', left: 5, right: 1, bottom: 2 }}>
          <Text>Caso tenha esquecido sua senha contate a direção da escola ou ligue: 3543-9900.
           </Text>
        </View>
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
  button: {
    marginTop: 20,
    width: 90,
    height: 50,
    textAlign: 'center',
    backgroundColor: 'orange',
    borderRadius: 3
  }
});

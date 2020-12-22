/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.logo}>Grnder</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E131F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '80%',
    // backgroundColor: '#1e2a42',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fafafa',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#fafafa',
  },
  forgot: {
    color: 'white',
    fontSize: 13,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#00CEE0',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  logo: {
    height: 100,
    fontSize: 40,
    color: '#00CEE0',
  },
  signupText: {
    color: '#fafafa',
  },
  loginText: {
    color: '#0E131F',
    fontWeight: 'bold',
  },
});

export default Login;

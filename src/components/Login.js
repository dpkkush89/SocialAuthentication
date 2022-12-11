import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Background from './Background';
import {Colors} from '../../Constants/Colors';
import InputText from '../UI/InputText';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';
import { deviceWidth } from '../../Constants/WindowDimension';


const Login = ({navigation}) => {
  console.log('deviceWidth',deviceWidth)
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.innerText}>Welcome Back</Text>
          <Text style={[styles.textInfo, {margin: 7}]}>
            Login to your account
          </Text>
          <InputText
            placeholder="Email or Username"
            keyboardType="email-address"
          />
          <InputText placeholder="Password" secureTextEntry={true} />
          <View style={styles.forgotPwd}>
            <Text style={[styles.innerText, {fontSize: 16}]}>
              Forgot Password ?
            </Text>
          </View>
          <Button
            color={Colors.maroon}
            textColor={'#fff'}
            onTap={() => {
              Alert.alert('Logged In', 'Welcome back');
            }}>
            Login
          </Button>

          <Text style={[styles.textInfo]}>Or Login With</Text>
          <View style={[styles.iconButton]}>
            <IconButton source={require('../assets/google48.png')} />
            <IconButton source={require('../assets/facebook48.png')} />
            <IconButton source={require('../assets/google48.png')} />
          </View>

          <View style={styles.signupView}>
            <Text style={styles.textInfo}>Don't have an account ? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text style={[styles.textInfo, {color: Colors.maroon}]}>
                Signup{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 70,
  },
  innerContainer: {
    backgroundColor: 'white',
    width: deviceWidth <415 ? 400 : 410, 
    height: 750,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 75,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 54,
    fontWeight: 'bold',
  },
  innerText: {
    fontSize: 40,
    color: Colors.maroon,
    fontWeight: 'bold',
  },
  textInfo: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
    // margin: 7,
  },
  forgotPwd: {
    alignItems: 'flex-end',
    // backgroundColor: 'grey',
    width: '80%',
    paddingRight: 16,
    marginBottom: 30,
  },
  signupView: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconButton: {
    flexDirection: 'row',
    // backgroundColor: 'grey',
    width: '80%',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});

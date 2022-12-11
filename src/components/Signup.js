import {StyleSheet, Text, Alert, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Colors} from '../../Constants/Colors';
import Background from './Background';
import Button from '../UI/Button';
import InputText from '../UI/InputText';
import IconButton from '../UI/IconButton';

const Signup = ({navigation}) => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Register</Text>
        <Text style={[styles.textInfo, {color: 'white'}]}>
          Create an account
        </Text>
        <View style={styles.innerContainer}>
          {/* <Text style={styles.innerText}>Welcome Back</Text>
          <Text style={styles.textInfo}>Login to your account</Text> */}
          <InputText placeholder="First Name" />
          <InputText placeholder="Last Name" />
          <InputText placeholder="Email" keyboardType="email-address" />
          <InputText placeholder="Password" secureTextEntry={true} />
          <View style={styles.buttonContainer}>
            <Button
              color={Colors.maroon}
              textColor={'#fff'}
              onTap={() => {
                Alert.alert('Hurray!', 'Account created');
                navigation.navigate('Login');
              }}>
              Signup
            </Button>
            <Text style={[styles.textInfo]}>Or Signup With</Text>
            <View style={[styles.iconButton]}>
              <IconButton source={require('../assets/google48.png')} />
              <IconButton source={require('../assets/facebook48.png')} />
              <IconButton source={require('../assets/twitter48.png')} />
            </View>
            <View style={styles.signupView}>
              <Text style={styles.textInfo}>Already have an account ?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={[styles.innerText, {fontSize: 16}]}>Login </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 50,
    // justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: 'white',
    width: 400,
    height: 650,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 70,
    alignItems: 'center',
    marginTop: 10,
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
    marginLeft: 4,
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
    marginBottom: 90,
  },
  signupView: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconButton: {
    flexDirection: 'row',
    // backgroundColor: 'grey',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 40,
    width: '80%',
    // height: '30%',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    alignContent: 'flex-end',
  },
});

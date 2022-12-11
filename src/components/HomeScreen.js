import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Background from './Background';
import Button from '../UI/Button';
import {Colors} from '../../Constants/Colors';

const HomeScreen = ({navigation}) => {
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Home Screen</Text>
        </View>

        <Button
          color={Colors.maroon}
          textColor={'#fff'}
          onTap={() => {
            navigation.navigate('Login');
          }}>
          Login
        </Button>
        <Button
          color={'#ffffe0'}
          textColor={Colors.maroon}
          onTap={() => {
            navigation.navigate('Signup');
          }}>
          Signup
        </Button>
        {/* <View style={styles.textContainer}>
          <Text style={[styles.text, {fontSize: 16}]}>Or</Text>
        </View> */}
      </View>
    </Background>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 80,
    marginHorizontal: 70,
  },
  infoContainer: {
    marginHorizontal: 15,
    marginVertical: 20,
    marginBottom: 180,
  },
  text: {
    color: 'white',
    fontSize: 64,
  },
  textContainer: {
    alignItems: 'center',
  },
});

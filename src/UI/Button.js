import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../Constants/Colors';

const Button = ({onTap, children, textColor, color}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {backgroundColor: color},
        styles.button,
        pressed && styles.pressed,
      ]}
      onPress={onTap}>
      <Text style={[{color: textColor}, styles.text]}>{children}</Text>
    </Pressable>
  );
};
//
export default Button;

const styles = StyleSheet.create({
  button: {
    margin: 12,
    alignItems: 'center',
    padding: 6,
    elevation: 1,
    width: 325,
    // justifyContent: 'center',
    shadowColor: Colors.maroon,
    shadowOpacity: 0.7,
    shadowOffset: {
      width: -1,
      height: 1,
    },
    shadowRadius: 2,
    borderRadius: 18,
  },
  pressed: {
    opacity: 0.2,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    // color: 'white',
    fontWeight: 'bold',
  },
});

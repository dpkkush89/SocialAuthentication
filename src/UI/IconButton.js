import {Pressable, StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../Constants/Colors';

const IconButton = ({onTap, source, textColor, color}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onTap}>
      <Image style={styles.image} source={source} />
    </Pressable>
  );
};
//
export default IconButton;

const styles = StyleSheet.create({
  button: {
    // margin: 7,
    marginVertical: 7,
    alignItems: 'center',
    // padding: 6,
    elevation: 1,
    width: 80,
    // justifyContent: 'space-around',
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

  image: {
    width: 35,
    height: 35,
  },
});

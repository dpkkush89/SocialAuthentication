import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../../Constants/Colors';

const InputText = props => {
  return <TextInput {...props} style={styles.input} />;
};

export default InputText;

const styles = StyleSheet.create({
  input: {
    color: Colors.maroon,
    paddingHorizontal: 30,
    borderRadius: 100,
    width: '80%',
    backgroundColor: 'rgb(220,220,220)',
    margin: 10,
  },
});

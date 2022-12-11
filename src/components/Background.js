import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/Leaf.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <View>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  image: {
    height: screenHeight,
    width: screenWidth,
    alignItems: 'center',
  },
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

function CategoryListLayout (props) {
  return (
    <ImageBackground
     source={require('app/assets/background.png')}
     style={styles.container}
    >
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 8,
  }
})
export default CategoryListLayout;


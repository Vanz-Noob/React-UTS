import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const Button = ({onPress, text, type = 'PRIMARY'}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles['container_$(type)']]}>
      <Text style={[styles.text, styles['text_$(type)']]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4982C1',
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#4982C1',
  },

  container_SECONDARY: {},

  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },

  text_SECONDARY: {
    color: 'black',
  },
});

export default Button;

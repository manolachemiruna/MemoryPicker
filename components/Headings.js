import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';


export default function Headings({style, ...props}) {
    return (
      <TextInput
        {...props}
        style={[styles.input, style]}
        placeholderTextColor={'darkgray'}
      />
    );
  }
  
  const styles = StyleSheet.create({
    headings: {
      type:italic,
    },
  });
  
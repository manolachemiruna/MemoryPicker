import React , {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  FlatList,
  Button,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default function Input({style, ...props}) {
    return (
      <TextInput
        {...props}
        style={[styles.input, style]}
        placeholderTextColor={'darkgray'}
      />
    );
  }
  
  const styles = StyleSheet.create({
    input: {
      backgroundColor: '#e8e8e8',
      width: '100%',
      padding: 20,
      borderRadius: 8,
      color: 'black',
    },
  });
  
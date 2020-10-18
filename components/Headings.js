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
  
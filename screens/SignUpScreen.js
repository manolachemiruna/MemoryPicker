import React , {useState} from 'react';
import Input from '../components/Input'
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

const styles = StyleSheet.create({
    Input: {
      padding:15,
      borderRadius:8,
      marginVertical:8,
    },
  });
export default function SignUpScreen() {
    return (
        <View>
        <Input style={styles.Input} placeholder='Email'></Input>
        <Input  style={styles.Input} placeholder='Password'></Input>
        <Input  style={styles.Input} placeholder='Confirm Password'></Input>
        </View>
      );
}
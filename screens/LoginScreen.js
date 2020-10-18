import React , {useState} from 'react';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
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


const styles = StyleSheet.create({
    Input: {
      padding:15,
      borderRadius:8,
      marginVertical:8,
    },
    text:{
        textAlign:"center",
        fontStyle:'italic',
        textDecorationStyle:'solid',
        fontSize: 30,
        fontWeight: "bold",
    },
    textView:
    {
      backgroundColor:'rgba(226, 231, 226, 0.1);',
      opacity:0.7,
      borderRadius:20,
      marginBottom:50,
      marginTop:20,
    },
    view:
    {
        alignContent:"center",
    },
   
  });

export default function LoginScreen() {
  return (
    <View>
    <View style={styles.textView}><Text style={styles.text}>Memory Picker</Text></View>
    <Input style={styles.Input} placeholder='Email' required></Input>
    <Input  style={styles.Input} placeholder='Password'></Input>
    <CustomButton title="Login"></CustomButton>
    </View>
  );
}
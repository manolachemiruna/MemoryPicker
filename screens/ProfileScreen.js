import React , {useState} from 'react';
import Input from '../components/Input'
import CustomButton from '../components/CustomButton'
import Register from '../auth/Register';
import ErrorMessage from '../components/ErrorMessage';
import {
  
  StyleSheet,
  View,
  Text,
  When,
  Choose,
} from 'react-native';


const styles = StyleSheet.create({
    Input: {
      padding:15,
      borderRadius:8,
      marginVertical:8,
      borderColor:'black',
      borderStyle:'solid',
    },
    text:{
      textAlign:"center",
      fontStyle:"italic",
      textDecorationStyle:'solid',
      fontSize: 30,
      fontWeight: "bold",
      color:"#009688",
  },
  textView:
  {
      backgroundColor: '#FFFFFF50',
      opacity:0.5,
      borderRadius:20,
      marginBottom:60,
      marginTop:20,
      color:'black',
  },
  view:
  {
      alignContent:"center",
  },
  });
export default function SignUpScreen() {
  
    return (
        <View>
        <Text>Profile Page</Text>
        </View>
      );
}
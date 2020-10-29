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
    backgroundColor:'rgba(226, 231, 226, 0.6);',
    opacity:0.6,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    borderRadius:5,
    marginBottom:50,
    marginTop:20,
    marginLeft:50,
    marginRight:50,
  },
  textViewInput:
  {
    backgroundColor:'rgba(226, 231, 226, 0.6);',
    opacity:0.6,
    borderRadius:5,
    marginBottom:50,
  },
  view:
  {
      alignContent:"center",
  },
  });
export default function ForgotPassword() {
  
    return (
        <View>
        <Text>Ana</Text>
        </View>
      );
}
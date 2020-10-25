import React , {useState} from 'react';
import Input from '../components/Input'
import CustomButton from '../components/CustomButton'
import Register from '../auth/Register';

import {
  
  StyleSheet,
  View,
  Text,
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
export default function SignUpScreen() {
  
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [confirmPassword,setConfirmPassword]=useState('');

   function registerUser() {
  
      Register.register(email,password);
  }

    return (
        <View>
        <View style={styles.textView}><Text style={styles.text}>Sign Up</Text></View>
        <View>
        <Input onChangeText={email => setEmail(email)}  style={styles.Input} placeholder='Email*'></Input>
        <Input onChangeText={password => setPassword(password)}  style={styles.Input} placeholder='Password*'></Input>
        <Input onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} style={styles.Input} placeholder='Confirm Password*'></Input>
        <CustomButton title="Sign Up" onPress={registerUser}></CustomButton>
        </View>
        </View>
      );
}
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
  
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [confirmPassword,setConfirmPassword]=useState('');
   const error=false;

   const verify=()=>{

     if(password!=confirmPassword)
        error=true;
     else error=false;};

   function registerUser() {
  
      Register.register(email,password);
  }


    return (
        <View>
        <View style={styles.textView}><Text style={styles.text}>Memory Picker</Text></View>
        <View>
        <Input onChangeText={email => setEmail(email)}  style={styles.Input} placeholder='Email*'></Input>
        <Input onChangeText={password => setPassword(password)}  style={styles.Input} placeholder='Password*'></Input>
        <Input onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} style={styles.Input} placeholder='Confirm Password*'></Input>
        <CustomButton title="Register" onPress={registerUser}></CustomButton>
        </View>
        </View>
      );
}
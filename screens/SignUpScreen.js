import React , {useState} from 'react';
import CustomButton from '../components/CustomButton'
import Register from '../auth/Register';
import {Icon,Input,Header} from 'react-native-elements';
import ErrorMessage from '../components/ErrorMessage';
import AsyncStorage from '@react-native-community/async-storage';
import {
  
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SuccessMessage from '../components/SuccessMessage';



const styles = StyleSheet.create({
    Input: {
      padding:5,
      borderRadius:8,
      marginVertical:6,
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
   const [message,setMessage]=useState('');
   const [passwordNotMatch,setPasswordNotMatch]=useState('');
   const [messageSuccess,setMessageSuccess]=useState('');

  

   function registerUser() {
  
    if(password == confirmPassword)
      {
        Register.register(email,password);
        AsyncStorage.getItem('message').then(value=>setMessage(value));
        console.log(message);
      }
    else setPasswordNotMatch('Your password do not match,please try again!');
  }


    return (
        <View>
        <Header
          backgroundColor='rgba(123, 239, 178, 1)'
          size='20'
          leftComponent={{ icon: 'picture',type:'fontisto',color: '#fff' }}
          centerComponent={{ text: 'Memory Picker', style: { color: '#fff',fontStyle:'italic',fontSize:18, } }}
          />
        <View style={styles.textView}></View>
        <View>
        <Input onChangeText={email => setEmail(email)}  style={styles.Input} placeholder='Email*'></Input>
        <Input onChangeText={password => setPassword(password)}  style={styles.Input} placeholder='Password*'
        secureTextEntry={true} >
        </Input>
        <Input onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} style={styles.Input} placeholder='Confirm Password*'
        secureTextEntry={true} >
        </Input>
        <CustomButton title="Register" onPress={registerUser}></CustomButton>
        <ErrorMessage error={passwordNotMatch}></ErrorMessage>
        <SuccessMessage message={message}></SuccessMessage>
        <ErrorMessage error={message}></ErrorMessage>
        </View>
        </View>
      );
}
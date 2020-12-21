import React , {useState} from 'react';
import CustomButton from '../components/CustomButton';
import Login from '../auth/Login'
import {Icon,Input,Header} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import ErrorMessage from '../components/ErrorMessage';
import {

  StyleSheet,
  View,
  Text,
 
} from 'react-native';



const styles = StyleSheet.create({
    Input: {
      padding:10,
      borderRadius:8,
      marginVertical:5,
    },
    text:{
        textAlign:"center",
        fontStyle:'italic',
        textDecorationStyle:'solid',
        fontSize: 30,
        color:"#009688",
        fontWeight: "bold",
        marginBottom:10,
    },
    textView:
    {
      backgroundColor: '#FFFFFF50',
      opacity:0.5,
      borderRadius:20,
      marginBottom:50,
      marginTop:25,
      color:'black',
    },
    view:
    {
        alignContent:"center",
    },
   
  });

  const LoginScreen=props =>  {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [message,setMessage]=useState('');

  function loginUser()
  {
    Login.login(props,email,password);
    setTimeout(() =>{ AsyncStorage.getItem("message").then((value) => { setMessage(value);
      console.log(message);
      }).done();}, 1000);
   
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
    <Input
    leftIcon={
      <Icon raised name='email' type='fontisto' color='grey' size={20}/>
    }
     onChangeText={email => setEmail(email)}  style={styles.Input} placeholder='Email*' required></Input>
    <Input
    leftIcon={
      <Icon raised name='locked' type='fontisto' color='grey' size={20}/>
    }
    secureTextEntry={true} 
     onChangeText={password => setPassword(password)} style={styles.Input} placeholder='Password*'></Input>
    <CustomButton title="Login" onPress={loginUser}></CustomButton>
    <ErrorMessage error={message}></ErrorMessage>
    </View> 
    </View>
  );
}
export default LoginScreen;
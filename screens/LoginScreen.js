import React , {useState} from 'react';
import CustomButton from '../components/CustomButton';
import Login from '../auth/Login'
import {Icon,Input} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
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
import ErrorMessage from '../components/ErrorMessage';


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
        color:"#009688",
        fontWeight: "bold",
        marginBottom:10,
    },
    textView:
    {
      backgroundColor: '#FFFFFF50',
      opacity:0.5,
      borderRadius:20,
      marginBottom:20,
      marginTop:20,
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
    <View style={styles.textView}><Text style={styles.text}>Memory Picker</Text></View>
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
import React , {useState} from 'react';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import Login from '../auth/Login'
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
        marginBottom:10,
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

  const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');

  function loginUser()
  {
    Login.login(email,password);
  }
  return (
    <View>
    <View style={styles.textView}><Text style={styles.text}>Memory Picker</Text></View>
    <Input onChangeText={email => setEmail(email)}  style={styles.Input} placeholder='Email' required></Input>
    <Input onChangeText={password => setPassword(password)} style={styles.Input} placeholder='Password'></Input>
    <CustomButton title="Login" onPress={loginUser}></CustomButton>
    </View>
  );
}
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
const users = firestore().collection('users');

export default class Login extends Component{

   constructor(){
     super();
   }

    static login(props,email,password){
    
        AsyncStorage.removeItem('message').then
        (
          auth().signInWithEmailAndPassword(email, password)
          .catch(error => {
            console.log(error.code);
            
            if(error.code==='auth/invalid-email')
            {
              AsyncStorage.setItem("message",'Please enter a valid email address!');
            }
            else if (error.code ==='auth/user-not-found')
            {
              AsyncStorage.setItem("message",'There is no user coresponding to this identifier!');
            }
            else if (error.code === 'auth/wrong-password') {
              AsyncStorage.setItem("message",'The password is invalid or the user does not have a password!');
            }
        
          })
          .then(userCredential => {
            if (userCredential) {
              console.log("You are logged in");
              AsyncStorage.setItem('user',email);
              AsyncStorage.setItem('message', '');
              props.navigation.navigate('Home');
            }
          })
        );
  
        
}
}


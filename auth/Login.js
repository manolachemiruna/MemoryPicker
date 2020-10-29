import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Component } from 'react';

const users = firestore().collection('users');

export default class Login extends Component{

   constructor(){
     super();
   }

    static login(props,email,password){
    
        auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
          console.log(error);
        })
        .then(userCredential => {
          if (userCredential) {
            console.log("You are logged in");
            props.navigation.navigate('Home');
          }
        });
  
        
}
}


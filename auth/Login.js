import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Component } from 'react';

const users = firestore().collection('users');

export default class Register extends Component{

   constructor(){
     super();
   }

    static login(email,password){
    
        auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
          this.eventAuthError.next(error);
        })
        .then(userCredential => {
          if (userCredential) {
            console.log("You are logged in");
          }
        });
  
        
}
}


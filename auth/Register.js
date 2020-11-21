import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Component } from 'react';

const users = firestore().collection('users');

export default class Register extends Component{

   constructor(){
     super();
   }

    static register(email,password){
    
        auth().createUserWithEmailAndPassword(email,password)
          .then( userCredential => {
            console.log(userCredential.user.email);
    
            return users.add({
                email: userCredential.user.email});
          }) 

          .catch( error => {
            console.log(error.code);
            if(error.code==='auth/email-already-in-use')
             AsyncStorage.setItem('message','Email address already in use!');
          });
}
}


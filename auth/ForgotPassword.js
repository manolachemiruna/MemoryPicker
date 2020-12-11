import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
const users = firestore().collection('users');


export default class ForgotPasswordFunction extends Component{

   constructor(){
     super();
   }

   static forgotPassword(email)
   {
       auth().sendPasswordResetEmail(email).then(
        () => {
            AsyncStorage.setItem('emailMessage', "Email successfully sent!");
            console.log("Email sent");
        },
         error => {
            console.log(error);
            AsyncStorage.setItem('emailMessage', "An error occured while trying to send you the email.Please try again later!");
        }
      );
   }
}
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Component } from 'react';
import User from '../models/User.js';
import React , {useState} from 'react';



 export default class Find extends Component{

   constructor(){
     super();
   }

   static find(){
        
    firestore()
    .collection('users')
    .get()
    .then(snapshot => {
    snapshot
        .docs
        .forEach(doc => {    
         console.log(doc.data().email);
        });
    });

    return users;
    
    } 
          
}


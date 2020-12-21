import firestore from '@react-native-firebase/firestore';
import { Component } from 'react';
const users = firestore().collection('users');
export default class ChangeProfileType extends Component{

    constructor(){
        super();
      }

    static change(email,isEnabled){
    
        let visible;
        if(isEnabled==true) visible='public';
        else visible='private';
        firestore()
        .collection('users')
        .where('email', '==', email)
        .get()
        .then(snapshot => snapshot.forEach(doc => {
            users.doc(doc.id).update({profile: visible});
          }));
    }

}


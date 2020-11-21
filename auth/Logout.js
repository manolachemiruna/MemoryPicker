import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Component } from 'react';


export default class Logout extends Component{

   constructor(){
     super();
   }

    static logout(props){
    
    console.log("Logout");
     auth().signOut();
}

}


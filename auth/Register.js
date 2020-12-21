import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Component} from 'react';

const users = firestore().collection('users');

export default class Register extends Component {

    static register(email, password, callbackAlert) {
        auth().createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log(userCredential.user.email);
                callbackAlert('Your account has been created!');
                return users.add({
                    email: userCredential.user.email,
                    profile: 'private'
                });
            }).catch(error => {
            console.log(error.code);
            if (error.code === 'auth/email-already-in-use') {
                callbackAlert('Email address already in use!');
            }
        });
    }
}


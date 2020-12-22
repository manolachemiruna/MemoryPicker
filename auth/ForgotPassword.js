import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const users = firestore().collection('users');


export default class ForgotPasswordFunction extends Component {

    static forgotPassword(email, messageHandler) {
        auth().sendPasswordResetEmail(email).then(
            () => {
                messageHandler("Email successfully sent!");
                console.log("Email sent");
            },
            error => {
                console.log(error);
                messageHandler("An error occured while trying to send you the email.Please try again later!");
            }
        );
    }
}
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import {Icon, Input} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import ForgotPasswordFunction from '../auth/ForgotPassword';
import SuccessMessage from '../components/SuccessMessage';
import {
    StyleSheet,
    View,

} from 'react-native';


const styles = StyleSheet.create({
    Input: {
        marginVertical: 10,
        marginLeft: 30,
        marginRight: 40,
    },
    form:
        {
            marginVertical: 100,
        }
});

const ForgotPassword = props => {

    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState('');


    function send() {
        if (email != null) {
            ForgotPasswordFunction.forgotPassword(email);
            setTimeout(() => {
                AsyncStorage.getItem("emailMessage").then((value) => {
                    setEmailMessage(value);
                    console.log(emailMessage);
                }).done();
            }, 2000);
        }
    }

    return (
        <View>
            <View style={styles.form}>
                <Input
                    leftIcon={
                        <Icon raised name='mail' type='entypo' color='grey' size={20}/>
                    }
                    onChangeText={email => setEmail(email)} style={styles.Input} placeholder='Email*' required/>
                <CustomButton title="Send" onPress={send}/>
                <SuccessMessage message={emailMessage}/>
            </View>
        </View>
    );
}
export default ForgotPassword;
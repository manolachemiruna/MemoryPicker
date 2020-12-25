import React, {useState} from 'react';
import CustomButton from '../components/CustomButton'
import Register from '../auth/Register';
import {Input} from 'react-native-elements';
import {
    StyleSheet,
    View,
    Alert, Text, ImageBackground
} from 'react-native';

import CoolInput from '../components/CoolInput';

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontStyle: "italic",
        textDecorationStyle: 'solid',
        fontSize: 30,
        fontWeight: "bold",
        color: "#009688",
    },
    textView:
        {
            backgroundColor: '#FFFFFF50',
            opacity: 0.5,
            borderRadius: 20,
            marginBottom: 60,
            marginTop: 20,
            color: 'black',
        },
    view:
        {
            alignContent: "center",
        },
    container: {
        borderRadius: 20,
        opacity: 0.8,
        borderColor: 'black',
        backgroundColor: '#ECE3E3',
        marginLeft: 15,
        marginRight: 15,
        paddingBottom: 30
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    },
});
export default function SignUpScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function registerUser() {

        if (password === confirmPassword) {
            Register.register(email, password, createButtonAlert);
        } else setPasswordNotMatch('Your password do not match,please try again!');
    }

    const createButtonAlert = (message) => {
        console.log(message);
        Alert.alert(
            "Register",
            message,
            [
                {text: "OK", onPress: () => console.log("OK Pressed")}
            ],
            {cancelable: false}
        );
    };

    return (
        <ImageBackground style={styles.imgBackground}
                         resizeMode='cover'
                         source={require('../assets/background.jpg')}>
            <View>
                <View style={styles.textView} />
                <View style={styles.container}>
                    <View>
                        <CoolInput onChangeText={email => setEmail(email)} placeholder='Email*' value={email}/>
                        <CoolInput onChangeText={password => setPassword(password)} placeholder='Password*'
                                   secureTextEntry={true} value={password}>
                        </CoolInput>
                        <CoolInput onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                                   placeholder='Confirm Password*'
                                   secureTextEntry={true} value={confirmPassword}>
                        </CoolInput>
                        <CustomButton title="Register" onPress={registerUser}/>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};
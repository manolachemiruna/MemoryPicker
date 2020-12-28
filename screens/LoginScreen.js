import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text, Alert, ImageBackground
} from 'react-native';

import CustomButton from '../components/CustomButton';
import Login from '../auth/Login'
import CoolInput from '../components/CoolInput';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
        imgBackground: {
            width: '100%',
            height: '100%',
            flex: 1
        },
        Input: {
            margin: 15,
            height: 50,
            borderColor: '#888888',
            borderWidth: 2.5,
            borderRadius: 15,
            backgroundColor: 'rgba(196,196,196,0.4)',
            color: '#000',
            fontFamily: 'OpenSans-Bold',
        },
        text: {
            textAlign: "center",
            fontStyle: 'italic',
            textDecorationStyle: 'solid',
            fontSize: 30,
            color: "#009688",
            fontWeight: "bold",
            marginBottom: 10,
        },
        textView:
            {
                backgroundColor: '#FFFFFF50',
                opacity: 0.5,
                borderRadius: 20,
                marginBottom: 50,
                marginTop: 25,
                color: 'black',
                justifyContent: 'center'
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
        },
        bigTitle: {
            textAlign: 'center',
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'Italic',
            color: '#00FF85'
        },
        signUpContainer: {
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 20,
            justifyContent: 'center'
        },
        signUpSpacer: {
            flex: 0.2
        },
        signUpText: {
            fontWeight: "bold",
            fontSize: 20
        },
        textRed: {
            color: 'red'
        },
        textGreen: {
            color: 'green'
        },
    }
);

const LoginScreen = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('userData').then(data => {
            const userData = JSON.parse(data);
            console.log('User data effect: ', userData);

            if (userData !== null) {
                props.navigation.navigate('Main');
            }

        }).catch(err => {
            console.log('Error to fetch data: ', err);
        });
    }, []);

    function loginUser() {
        Login.login(props, email, password, completed, errorCompleted);
    }

    const completed = (data) => {
        console.log(data);
        const strUserData = JSON.stringify(data.user);
        AsyncStorage.setItem('userData', strUserData).then(res => {
            console.log('User data login: ', res);
        }).catch(err => {
            console.log('User data login err: ', err);
        });
        props.navigation.navigate('Main');
    };

    const errorCompleted = (err) => {
        console.log('Error: ', err);
        Alert.alert(
            "Login",
            err,
            [
                {text: "OK", onPress: () => console.log("OK Pressed")}
            ],
            {cancelable: false}
        );
    };

    const goToSignUp = () => {
        // console.log(props.navigation);
        props.navigation.navigate('Register');
    };

    const resetPass = () => {
        // console.log(props.navigation);
        props.navigation.navigate('ForgotPass');
    };

    return (
        <ImageBackground style={styles.imgBackground}
                         resizeMode='cover'
                         source={require('../assets/background.jpg')}>
            <View style={{flex: 1}}>
                <View style={{flex: 0.6}}>
                    <View style={styles.textView}>
                        <Text style={styles.bigTitle}>
                            Memory Picker
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <CoolInput
                            placeholderTextColor="black"
                            allowFontScaling={true}
                            onChangeText={email => setEmail(email)} placeholder='Email*' required/>
                        <CoolInput
                            placeholderTextColor="black"
                            secureTextEntry={true}
                            allowFontScaling={true}
                            onChangeText={password => setPassword(password)} placeholder='Password*'/>
                        <CustomButton title="Login" onPress={loginUser}/>
                        <View style={styles.signUpContainer}>
                            <Text style={styles.signUpText}>Don’t have an account?</Text>
                            <View style={styles.signUpSpacer}/>
                            <Text
                                style={{...styles.signUpText, ...styles.textGreen}}
                                onPress={goToSignUp}>Sign Up</Text>
                        </View>
                    </View>
                </View>

                <View style={{flex: 0.24}}/>

                <View style={{flex: 0.06}}>
                    <View style={styles.container}>
                        <View style={styles.signUpContainer}>
                            <Text style={styles.signUpText}>Forgat your password?</Text>
                            <View style={styles.signUpSpacer}/>
                            <Text
                                style={{...styles.signUpText, ...styles.textRed}}
                                onPress={resetPass}>Reset Pass</Text>
                        </View>
                    </View>
                </View>

            </View>
        </ImageBackground>
    );
};

export default LoginScreen;
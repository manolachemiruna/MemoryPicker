import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text, Alert
} from 'react-native';

import CustomButton from '../components/CustomButton';
import Login from '../auth/Login'
import CoolInput from '../components/CoolInput';


const styles = StyleSheet.create({
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

    function loginUser() {
        Login.login(props, email, password, completed, errorCompleted);
    }

    const completed = (data) => {
        console.log(data);
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
    );
};

export default LoginScreen;
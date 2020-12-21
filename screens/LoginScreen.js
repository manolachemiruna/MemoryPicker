import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import Login from '../auth/Login'
import AsyncStorage from '@react-native-community/async-storage';
import ErrorMessage from '../components/ErrorMessage';
import {
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';


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
    }
});

const LoginScreen = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function loginUser() {
        Login.login(props, email, password);
        setTimeout(() => {
            AsyncStorage.getItem("message").then((value) => {
                setMessage(value);
                console.log(message);
            }).done();
        }, 1000);

    }

    return (
        <View>
            <View style={styles.textView}>
                <Text style={styles.bigTitle}>
                   Memory Picker
                </Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    placeholderTextColor="black"
                    allowFontScaling={true}
                    theme={{ fonts: { bold: 'Apple Color Emoji'} }}
                    onChangeText={email => setEmail(email)} style={styles.Input} placeholder='Email*' required/>
                <TextInput
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    allowFontScaling={true}
                    theme={{ fonts: { bold: 'Apple Color Emoji'}}}
                    onChangeText={password => setPassword(password)} style={styles.Input} placeholder='Password*'/>
                <CustomButton title="Login" onPress={loginUser}/>
                <ErrorMessage error={message}/>
            </View>
        </View>
    );
}
export default LoginScreen;
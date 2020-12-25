import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import {Icon, Input} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import ForgotPasswordFunction from '../auth/ForgotPassword';
import SuccessMessage from '../components/SuccessMessage';
import {
    Alert, ImageBackground,
    StyleSheet,
    View,
} from 'react-native';

import CoolInput from '../components/CoolInput';

const styles = StyleSheet.create({
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

const ForgotPassword = props => {

    const [email, setEmail] = useState('');

    function send() {
        if (email != null) {
            ForgotPasswordFunction.forgotPassword(email, messageHandler);
        }
    }

    const messageHandler = (mess) => {
        Alert.alert(
            "Reset Pass",
            mess,
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
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={{...styles.container, width: '90%', marginTop: 50}}>
                    <CoolInput
                        onChangeText={email => setEmail(email)} placeholder='Email*' required/>
                    <CustomButton title="Send" onPress={send}/>
                    {/*<SuccessMessage message={emailMessage}/>*/}
                </View>
            </View>
        </ImageBackground>
    );
};
export default ForgotPassword;
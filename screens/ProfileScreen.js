import React, {useState} from 'react';
import CustomButton from '../components/CustomButton'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import ChangeProfileType from '../functions/ChangeProfileType.js';
import SuccessMessage from '../components/SuccessMessage';
import Logout from '../auth/Logout';
import {Card, ListItem, Button, Icon, Header, Input} from 'react-native-elements';

const users = firestore().collection('users');
import {
    StyleSheet,
    View,
    Text,
    Switch,
} from 'react-native';


const styles = StyleSheet.create({
    Input: {
        padding: 15,
        borderRadius: 8,
        marginVertical: 8,
        borderColor: 'black',
        borderStyle: 'solid',
    },
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
    switch:
        {
            alignItems: "center",
            marginRight: 270,
            marginTop: 50,
            transform: [{scaleX: 2.7}, {scaleY: 2.5}],

        },
    picture:
        {
            alignSelf: "center",
            marginBottom: 50,
            marginTop: 70,
        }
});

let profile;
let email;
let isEnabled;
let profileBefore;
let message;

class ProfileScreen extends React.Component {


    constructor(props) {
        super(props);
        this.navig = this.navig.bind(this);
        this.change = this.change.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            data: ' '
        }
    }

    UNSAFE_componentWillMount() {

        console.log("willMount");
    }


    componentDidMount() {

        AsyncStorage.getItem('user').then(user => {
            email = user;
            console.log(email);
            firestore()
                .collection('users')
                .where('email', '==', email)
                .get()
                .then(snapshot => snapshot.forEach(doc => {
                    const data = doc.data();
                    profileBefore = data.profile;
                    if (profileBefore === 'public') isEnabled = true;
                    else isEnabled = false;
                    this.setState({
                        data: 'Your profile is ' + profileBefore + '!'
                    })
                }));
        });
    }

    logout() {
        AsyncStorage.removeItem('userData').then( _ => {
            Logout.logout(this.props);
            console.log('User data removed');
        }).catch(err => {
            console.log('User data remove error: ', err);
        });
    }

    navig() {
        this.props.navigation.navigate('FindPeople');
    }

    change() {

        console.log(email);
        console.log(profileBefore);
        if (profileBefore === 'public') isEnabled = true;
        else isEnabled = false;
        console.log(isEnabled);
        ChangeProfileType.change(email, !isEnabled);
        this.componentDidMount();
    }

    render() {
        return (
            <View>
                <Header
                    backgroundColor='rgba(123, 239, 178, 1)'
                    leftComponent={{
                        icon: 'person-search',
                        type: 'material-icons',
                        color: '#fff',
                        accessibilityRole: 'button',
                        onPress: this.navig
                    }}
                    centerComponent={{
                        text: 'Memory Picker',
                        style: {color: '#fff', fontStyle: 'italic', fontSize: 18,}
                    }}
                    rightComponent={{
                        icon: 'logout',
                        type: 'ant-design',
                        color: '#fff',
                        accessibilityRole: 'button',
                        onPress: this.logout
                    }}
                />
                <Text style={styles.picture}>Here will be a profile picture!</Text>
                <SuccessMessage message={this.state.data}/>
                <Switch
                    style={styles.switch}
                    trackColor={{false: "gray", true: "rgba(0, 177, 106, 1)"}}
                    thumbColor={isEnabled ? "green" : "black"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.change}
                    value={isEnabled}
                />
            </View>
        );
    }
}

export default ProfileScreen;

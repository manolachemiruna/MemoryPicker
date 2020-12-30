import React, {useState} from 'react';
import {Icon,Header} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import CustomCard from '../components/CustomCard';
import DelayInput from "react-native-debounce-input";
import Logout from '../auth/Logout';
import AsyncStorage from '@react-native-community/async-storage';
import {

    StyleSheet,
    View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { onChange } from 'react-native-reanimated';


const styles = StyleSheet.create({
    Input: {
        padding: 15,
        borderRadius: 8,
        marginVertical: 30,
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
    search:
        {
            flex: 0.95,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            fontSize:18,
        },
    view: {
        flexDirection: 'row',
        alignContent: 'stretch',
    },
});
const FindPeople = props => {

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [show, setShow] = useState('');
    const [message, setMessage] = useState('');
    const [u, setU] = useState([]);

    function find() {

        const e = email.replace(/\s/g, '');

        console.log("email" + e);
        firestore()
            .collection('users')
            .get()
            .then(snapshot => {
                snapshot
                    .forEach(doc => {
                        users.push(doc.data());
                    });
                setShow('ceva');
                setU(users.filter(user => user.email.includes(e)));
                console.log(u);
                setMessage('');
                setUsers([]);
                if (email == '') {
                    setShow('');
                    setMessage('');
                    setU([]);
                    setUsers([]);
                }
                if (u.length == 0) {
                    setMessage('There is no match for your search');
                    setUsers([]);
                }
            });

    }

    function logout() {
        AsyncStorage.removeItem('userData').then( _ => {
            Logout.logout(props);
            console.log('User data removed');
        }).catch(err => {
            console.log('User data remove error: ', err);
        });
    }

    return (
        <ScrollView>
            <Header
                    backgroundColor='rgba(250, 190, 88, 1)'
                    centerComponent={{
                        text: 'Find people',
                        style: {color: '#fff', fontStyle: 'italic', fontSize: 18,}
                    }}
                    rightComponent={{
                        icon: 'logout',
                        type: 'ant-design',
                        color: '#fff',
                        accessibilityRole: 'button',
                        onPress: logout
                    }}
                />
            <View style={styles.view}>
                <Icon raised name='search' type='fontisto' color='black' size={18}/>
                <DelayInput
                    onChangeText={email => {
                        setEmail(email);
                        find();
                    }} placeholder="Search*"
                    style={styles.search}
                    delayTimeout={100}
                />
            </View>

            <CustomCard show={show} name='People that can match your search' list={u} message={message} props={props}/>
        </ScrollView>
    );
}
export default FindPeople;
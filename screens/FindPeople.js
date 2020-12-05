import React , {useState} from 'react';
import {Icon,Input,ListItem} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import CustomCard from '../components/CustomCard';
import DelayInput from "react-native-debounce-input";
import {
  
  StyleSheet,
  View,
  Text,
  When,
  Choose,
  FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
    Input: {
      padding:15,
      borderRadius:8,
      marginVertical:8,
      borderColor:'black',
      borderStyle:'solid',
    },
    text:{
      textAlign:"center",
      fontStyle:"italic",
      textDecorationStyle:'solid',
      fontSize: 30,
      fontWeight: "bold",
      color:"#009688",
  },
  textView:
  {
      backgroundColor: '#FFFFFF50',
      opacity:0.5,
      borderRadius:20,
      marginBottom:60,
      marginTop:20,
      color:'black',
  },
  search:
  {
      flex:0.95,
      borderBottomColor:'black',
      borderBottomWidth:1,
  },
  view:{
    flexDirection: 'row',
    alignContent:'stretch',
  },
  });
export default function FindPeople() {

    const [users,setUsers]=useState([]);
    const [email,setEmail]=useState('');
    const [show,setShow]=useState('');
    const [message,setMessage]=useState('');
    const [u,setU]=useState([]);
    
     function find(){
        
      e = email.replace(/\s/g, '');
      const regex = new RegExp("^" + e + ".*");
      console.log("email"+e);
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
              if(email=='')
              {
                setShow('');
                setMessage('');
                setU([]);
                setUsers([]);
              }
              if(u.length==0)
              {
                setMessage('There is no match for your search');
                setUsers([]);
              }
            });
        
        }
  
    return (
      <ScrollView>
        <View style={styles.view}>
        <Icon raised name='search' type='fontisto' color='black' size={15}/>
        <DelayInput
         onChangeText={email => {setEmail(email);find()}} placeholder="Search*"
         style={styles.search}
         delayTimeout={600}
         ></DelayInput>
        </View>

        <CustomCard show={show} name='People that can match your search' list={u} message={message} ></CustomCard>
      </ScrollView>
      );
}
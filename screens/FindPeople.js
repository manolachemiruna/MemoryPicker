import React , {useState} from 'react';
import CustomButton from '../components/CustomButton';
import {Icon,Input,ListItem} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import Find from '../functions/Find'
import {
  
  StyleSheet,
  View,
  Text,
  When,
  Choose,
  FlatList,
} from 'react-native';


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
      marginVertical:20,
  },
  });
export default function FindPeople() {

    const [user,setUser]=useState([]);
    const users=[];
    let regex='^{user}.*'
    
     function find(){
        
          
            firestore()
            .collection('users')
            .get()
            .then(snapshot => {
            snapshot
                .docs
                .forEach(doc => {    
                setUser(doc.data().email);
                users.push({id:doc.data().email,email:doc.data().email});
                console.log(users);
                });
            });
        
        }

        const Item = ({ email }) => (
            <View>
              <Text>{email}</Text>
            </View>
          );
        
        const renderItem = ({ item }) => (
            <Item email={item.email} />
          );
  
    return (
        <View>
        <Input
        leftIcon={
            <Icon raised name='search' type='fontisto' color='black' size={20}/>
          }
         onChangeText={user => setUser(user)} placeholder="Search*"
         style={styles.search}
         ></Input>
        <CustomButton title="show" onPress={find}></CustomButton>
        <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

        </View>
      );
}
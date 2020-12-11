import React  from 'react';
import CustomButton from '../components/CustomButton'

import {
  
  StyleSheet,
  View,
  Text,
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
  view:
  {
      alignContent:"center",
  },
  });

  const ProfileScreen=props => {

  function navig()
  {
    props.navigation.navigate('FindPeople');
  }
    return (
        <View>
        <Text>Profile Page</Text>
        <CustomButton title="search people" onPress={navig}></CustomButton>
        </View>
      );
  }
export default ProfileScreen;

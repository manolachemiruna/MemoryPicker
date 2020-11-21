import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,

} from 'react-native';

const ErrorMessage = ({error}) =>{
      
       if(error)
       return <Text style={styles.appText}>{error}</Text>
       else 
       return <Text></Text>
}
  
  const styles = StyleSheet.create({
    
    appText: {
      marginTop:80,
      borderRadius:10,
      fontSize: 16,
      color: "#2F4F4F",
      fontStyle:'italic',
      backgroundColor:'#FFB6C1',
      fontWeight: "bold",
      textAlign:"center",
      paddingVertical: 20,
    }
  });
export default ErrorMessage;
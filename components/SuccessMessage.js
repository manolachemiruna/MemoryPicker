import React from 'react';
import {

  StyleSheet,
  Text,

} from 'react-native';

const SuccessMessage = ({message}) =>{
      
       if(message)
       return <Text style={styles.appText}>{message}</Text>
       else 
       return <Text></Text>
}
  
  const styles = StyleSheet.create({
    
    appText: {
      marginTop:50,
      borderRadius:10,
      fontSize: 16,
      color: 'rgba(46, 49, 49, 1)',
      fontStyle:'italic',
      backgroundColor:'rgba(200, 247, 197, 1)',
      fontWeight: "bold",
      textAlign:"center",
      paddingVertical: 20,
    }
  });
export default SuccessMessage;
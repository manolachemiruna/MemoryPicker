import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,

} from 'react-native';

const ErrorMessage = ({error}) => (

      <Text style={styles.appText}>{error}</Text>
  );
  
  const styles = StyleSheet.create({
    
    appText: {
      fontSize: 16,
      color: "red",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });
export default ErrorMessage;
import React  from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,

} from 'react-native';




const CustomButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "rgba(123, 239, 178, 1)",
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginTop:40,
      marginRight:100,
      marginLeft:100,
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      fontStyle:'italic',
    }
  });
export default CustomButton;
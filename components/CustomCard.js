import React, {useState} from 'react';
import { Card, ListItem, Icon} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,

} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const CustomCard = ({show,name,list,message,props}) =>{
     

       if(show=='ceva' && message=='')
       {
         return <ScrollView>
          <Card>
         <Card.Title style={styles.title}>{name}</Card.Title>
         <View>
            {
            list.map((item, i) => (
            <ListItem key={i} topDivider bottomDivider
            Component={TouchableScale}
            friction={70} //
            tension={80} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.55} //
            linearGradientProps={{
              marginBottom:10,
              colors: ['#FFF233', '#F44336'],
              start: { x: 0.9, y: 0 },
              end: { x: 0.2, y: 0 },
            }}
            ViewComponent={LinearGradient}
            onPress={() =>{AsyncStorage.setItem('email',item.email);
            if(item.profile=='public')props.navigation.navigate('UserProfile');
            else Alert.alert(
              "Private profile",
              'This user has a private profile!',
              [
                  {text: "OK", onPress: () => console.log("OK Pressed")}
              ],
              {cancelable: false}
          );
          }}
            >
                 <Icon raised name='user' type='ant-design'/>
                <ListItem.Content>
                <ListItem.Title>User: {item.email}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            ))
           }
         </View>
         </Card>
         </ScrollView>
           
       }
       else if(show!='' && message!='')
       {
           return <ScrollView>
            <Card>
        <Card.Title style={styles.title}>{name}</Card.Title>
        <View>
            <Text style={styles.text}>{message}</Text>
        </View>
        </Card>
        </ScrollView>
       }

       else
       {
           return <Text></Text>
       }
      
}
  
  const styles = StyleSheet.create({
    
    title:{
        textAlign:"center",
        fontStyle:'italic',
        elevation: 40,
        fontSize: 20,
        backgroundColor:'rgba(250, 190, 88, 1)',
        borderRadius:10,
        fontWeight: "bold",
        marginBottom:20,
        marginTop:20,
        marginLeft:5,
    },
    text:{
        textAlign:"center",
        fontStyle:'italic',
        elevation: 40,
        fontSize: 15,
        fontWeight: "bold",
        marginBottom:10,
        marginTop:20,
        marginLeft:20,
    }
  });
export default CustomCard;
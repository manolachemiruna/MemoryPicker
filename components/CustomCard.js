import React from 'react';
import { Card, ListItem, Icon} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,

} from 'react-native';

const CustomCard = ({show,name,list,message}) =>{
      
       if(show=='ceva' && message=='')
       {
         return <ScrollView>
          <Card>
         <Card.Title style={styles.title}>{name}</Card.Title>
         <View>
            {
            list.map((item, i) => (
            <ListItem key={i} bottomDivider>
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
        backgroundColor:'rgba(41, 241, 195, 1)',
        borderRadius:10,
        fontWeight: "bold",
        marginBottom:10,
        marginTop:20,
        marginLeft:20,
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
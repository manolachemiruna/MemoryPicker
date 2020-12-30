import React, {useState, useEffect} from "react";
import {View, Text, Button, FlatList, ImageBackground, StyleSheet, Image } from "react-native";
import {Card,Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';

const firebaseRef = firestore();
let email;

const UserScreen = (props) => {

    const [listOfPictures, setListOfPictures] = useState([]);
    const [userId,setUserId]=useState('');

    useEffect(() => {
        fetchPicutresFromServer();
        const subscriptionWillFocus = props.navigation.addListener('didFocus', () => {
            fetchPicutresFromServer();
        });

        return () => {
            subscriptionWillFocus.remove();
        };
    }, []);

    const fetchPicutresFromServer = () => {
        AsyncStorage.getItem('email').then(data =>
        {
            email=data;
            firestore()
            .collection('users')
            .where('email','==',data)
            .get()
            .then(snapshot => {
                snapshot
                    .forEach(doc => {
                        console.log(doc.id);
                        setUserId(doc.id);
        
            firebaseRef.collection(`users/${doc.id}/pictures`)
                .get()
                .then(snapshot => {
                    const dataSnap = [];
                    snapshot.forEach(element => {
                        dataSnap.push(element.data());
                    });
                    console.log('Data from server:', dataSnap);

                    const firstList = dataSnap.slice(0, Math.ceil(dataSnap.length / 2));
                    const secondList = dataSnap.slice(Math.ceil(dataSnap.length / 2));

                    const firstLength = firstList.length;
                    const secondLength = secondList.length;

                    const dataList = [];

                    for (let i = 0; i < firstLength; i++) {
                        if (i > (secondLength - 1)) {
                            dataList.push([firstList[i]]);
                        } else {
                            dataList.push([firstList[i], secondList[i]]);
                        }
                    }
                    console.log('Data: ', dataList);

                    setListOfPictures(_ => {
                        return dataList;
                    });
                })
                .catch(err => {
                    console.log('Error fetch data: ', err);
                })
            });
                })
               
            });
        };

    return <LinearGradient 
    colors={['rgba(253, 227, 167, 1)','rgba(252, 214, 112, 1)', 'rgba(250, 190, 88, 1)', 'rgba(235, 149, 50, 1)','rgba(248, 148, 6, 1)','rgba(230, 126, 34, 1)']} 
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        >   
        <View style={styles.containerList}>     
        
        <Card containerStyle={styles.card}>
        <View style={styles.card}>
           <Icon  color='rgba(232, 126, 4, 1)' raised name='user' type='ant-design'/>
            <Text style={styles.cardText}>{email}</Text>
        </View>
        </Card>
            <FlatList
                data={listOfPictures}
                renderItem={(props) => (<ListItem elements={props.item} />)}
                keyExtractor={data => data[0].downloadURL}
            />
        
        </View>
        </LinearGradient>
};

const ListItem = ({elements}) => {
    const isLength2 = elements.length === 2;

    if (isLength2) {

        const element1 = elements[0];
        const element2 = elements[1];

        return <ScrollView>
         <View style={styles.containerElement}>
            <Image source={{uri: element1.downloadURL}} style={{...styles.imagePreview, ...styles.imageOne}}/>
            <View style={styles.spacer} />
            <Image source={{uri: element2.downloadURL}} style={{...styles.imagePreview, ...styles.imageTwo}}/>
        </View>
        </ScrollView>;
    } else {
        const element1 = elements[0];

        return <ScrollView>
        <View style={styles.containerElement}>
            <Image source={{uri: element1.downloadURL}} style={{...styles.imagePreview, ...styles.imageOne}}/>
            <View style={styles.spacer} />
            <View style={{...styles.imagePreview, ...styles.imageTwo}} />
        </View>
        </ScrollView>;
    }
}

const styles = StyleSheet.create({
    imagePreview: {
        height: 200,
        width: 170,
    },
    imageOne: {
        alignSelf: 'flex-start',
    },
    imageTwo: {
        alignSelf: 'flex-end',
    },
    container: {
        flex: 1,
        alignItems: 'center',
       // backgroundColor:'rgba(250, 190, 88, 1)',
    },
    containerElement: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    spacer: {
        width: 10,
    },
    containerList: {
        marginBottom: 20
    },
    card:
    {
        opacity:0.8,
        color:'rgba(238, 238, 238, 1)',
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        borderRadius:8,
        marginBottom:15,
        height:80,
        marginTop:10,
    },
    cardText:
    {
        fontWeight:'bold',
        color:'black',
    },
    icons:
    {
        backgroundColor:'rgba(253, 227, 167, 1)',
    },
    gradient:
    {
        flex:1,
        alignItems: 'center',
    }
});

export default UserScreen;
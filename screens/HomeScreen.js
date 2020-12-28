import React, {useState, useEffect} from "react";
import {View, Text, Button, FlatList, ImageBackground, StyleSheet} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';

const firebaseRef = firestore();

const homeScreen = (props) => {

    const [listOfPictures, setListOfPictures] = useState( []);

    useEffect(() => {
        AsyncStorage.getItem('userData').then(data => {
            const userData = JSON.parse(data);
            firebaseRef.collection(`users/${userData.uid}/pictures`)
                .get()
                .then(snapshot => {
                    const dataSnap = [];
                    snapshot.forEach(element => {
                        dataSnap.push(element.data());
                    });
                    console.log('Data from server:', dataSnap);
                    setListOfPictures(_ => {
                        return dataSnap;
                    });
                })
                .catch(err => {
                    console.log('Error fetch data: ', err);
                });
        }).catch(err => {
            console.log('Error user data: ', err);
        });
    }, []);

    return <View style={styles.container}>
        <FlatList
            data={listOfPictures}
            renderItem={(props) => (<ListItem title={props.item.title} downloadURL={props.item.downloadURL}/>)}
            keyExtractor={data => data.downloadURL}
        />
    </View>
};

const ListItem = ({title, downloadURL}) => {
    return <View style={styles.containerElement}>
        <Text style={styles.title}>{title}</Text>
        <ImageBackground source={{uri: downloadURL}} style={styles.imagePreview}/>
    </View>;
}

const styles = StyleSheet.create({
    imagePreview: {
        width: 310,
        height: 170,
    },
    container: {
        flex: 1,
        backgroundColor: 'gold',
        alignItems: 'center',
    },
    containerElement: {
        marginTop: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold'
    }
});

export default homeScreen;
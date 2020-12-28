import React, {useState, useEffect} from "react";
import {View, Text, Button, FlatList, ImageBackground, StyleSheet, Image } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';

const firebaseRef = firestore();

const homeScreen = (props) => {

    const [listOfPictures, setListOfPictures] = useState([]);

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
                });
        }).catch(err => {
            console.log('Error user data: ', err);
        });
    }

    return <View style={styles.container}>
        <View style={styles.containerList}>
            <FlatList
                data={listOfPictures}
                renderItem={(props) => (<ListItem elements={props.item} />)}
                keyExtractor={data => data[0].downloadURL}
            />
        </View>
    </View>
};

const ListItem = ({elements}) => {
    const isLength2 = elements.length === 2;

    if (isLength2) {

        const element1 = elements[0];
        const element2 = elements[1];

        return <View style={styles.containerElement}>
            <Image source={{uri: element1.downloadURL}} style={{...styles.imagePreview, ...styles.imageOne}}/>
            <View style={styles.spacer} />
            <Image source={{uri: element2.downloadURL}} style={{...styles.imagePreview, ...styles.imageTwo}}/>
        </View>;
    } else {
        const element1 = elements[0];

        return <View style={styles.containerElement}>
            <Image source={{uri: element1.downloadURL}} style={{...styles.imagePreview, ...styles.imageOne}}/>
            <View style={styles.spacer} />
            <View style={{...styles.imagePreview, ...styles.imageTwo}} />
        </View>;
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
        backgroundColor: 'gold',
        alignItems: 'center',
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
    }
});

export default homeScreen;
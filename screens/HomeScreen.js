import React, {useState, useEffect} from "react";
import {View, FlatList, TouchableHighlight, StyleSheet, Image,ScrollView } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
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

    const showFullImage = (image) => {
        if (!!image) {
            props.navigation.navigate('FullImage', { imageData: image }); 
        }
    }

    const fetchPicutresFromServer = () => {
        AsyncStorage.getItem('userData').then(data => {
            const userData = JSON.parse(data);
            firebaseRef.collection(`users/${userData.uid}/pictures`)
                .get()
                .then(snapshot => {
                    const dataSnap = [];
                    snapshot.forEach(element => {
                        dataSnap.push({...element.data(), pid: element.id});
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

    return <LinearGradient style={styles.container}
            colors={['rgba(254, 250, 212, 1)','rgba(255, 255, 204, 1)','rgba(255, 246, 143, 1)','rgba(254, 241, 96, 1)','rgba(245, 229, 27, 1)','rgba(247, 202, 24, 1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
           >
        <View style={styles.containerList}>
            <FlatList
                data={listOfPictures}
                renderItem={(props) => (<ListItem elements={props.item} action={showFullImage} />)}
                keyExtractor={data => data[0].pid}
            />
        </View>
    </LinearGradient>
};

const ListItem = ({elements, action}) => {
    const isLength2 = elements.length === 2;

    if (isLength2) {

        const element1 = elements[0];
        const element2 = elements[1];

        return <ScrollView>
         <View style={styles.containerElement}>
            <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => { action(element1); }}>
                <Image source={{uri: element1.downloadURL}} style={{...styles.imagePreview, ...styles.imageOne}}/>
            </TouchableHighlight>
            <View style={styles.spacer} />
            <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => { action(element2); }}>
                <Image source={{uri: element2.downloadURL}} style={{...styles.imagePreview, ...styles.imageTwo}}/>
            </TouchableHighlight>
        </View>
        </ScrollView>;
    } else {
        const element1 = elements[0];

        return <ScrollView>
         <View style={styles.containerElement}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => { action(element1); }}>
                <Image source={{uri: element1.downloadURL}} style={{...styles.imagePreview, ...styles.imageOne}}/>
            </TouchableHighlight>
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
        marginTop:20,
        marginLeft:10,
        marginRight:10,
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
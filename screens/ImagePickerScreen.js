import React, {useState, useContext} from "react";
import {View, ImageBackground, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from "react-native-loading-spinner-overlay";
import LinearGradient from 'react-native-linear-gradient';

import {placeHolderImage} from '../lib/Constants';
import CustomButton from "../components/CustomButton";

const fireStoreRef = firestore();

const imagePickerScreen = (props) => {

    const [imagePath, setImagePath] = useState(placeHolderImage);
    const [imageTitle, setImageTitle] = useState('');
    const [pictureMade, setPictureMade] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    const openCamera = () => {
        ImagePicker.openCamera({
            width: 400,
            height: 540,
            cropping: true,
        }).then(image => {
            console.log(image.path);
            setImagePath(_ => {
                setPictureMade(true);
                return image.path;
            });
        }).catch(err => {
            console.log(err);
            console.log('Camera error');
        });
    };

    const postImage = () => {
        setShowSpinner(true);
        const currentDate = new Date();
        const nowInMillis = currentDate.getTime();

        AsyncStorage.getItem('userData').then(data => {
            const userData = JSON.parse(data);
            console.log('User data: ', userData);
            // setShowSpinner(false);
            const newName = `userImages/${nowInMillis}-${userData.uid}.jpg`;
            console.log('New name: ', newName);
            uploadImageToStorage(imagePath, newName, userData);
        }).catch(err => {
            console.log('User data err: ', err);
            setShowSpinner(false);
        });
    };

    const uploadImageToStorage = (path, imageName, userdata) => {
        let reference = storage().ref(imageName);
        let task = reference.putFile(path);
        task.then((data) => {
            reference.getDownloadURL().then(url => {
                // setShowSpinner(false);
                console.log('Download url: ', url);
                const markerPosition = props.navigation.getParam('markerPosition', null);
                // console.log('Params: ', markerPosition);
                fireStoreRef.collection(`users/${userdata.uid}/pictures`).add({
                    downloadURL: url,
                    title: imageTitle !== '' ? imageTitle : null,
                    markerPosition: markerPosition
                }).then(_ => {
                    setShowSpinner(false);
                    console.log('Added Success');
                    clearScreen();
                }).catch(err => {
                    console.log('Error to load picture: ', err);
                    setShowSpinner(false);
                });
            }).catch(err => {
                setShowSpinner(false);
                console.log('Error get url: ', err);
            })
        }).catch((e) => {
            setShowSpinner(false);
            console.log('uploading image error => ', e);
        });
    }

    const clearScreen = () => {

        console.log(props.navigation.state);

        setImagePath(placeHolderImage);
        setImageTitle('');
        setPictureMade(false);
        props.navigation.setParams({ markerPosition: null });

        clearCompleted();
        
    }

    const clearCompleted = () => {
        Alert.alert(
            'Post Image',
            'Your image has been posted. Check your home screen',
            [
                {text: "OK", onPress: () => console.log("OK Pressed")}
            ],
            {cancelable: false}
        );
    };

    const buttonTappedHandler = () => {
        if (!pictureMade) {
            openCamera();
        } else {
            postImage();
        }
    };

    const goToMap = () => {
        console.log('Go To MAPS')
        props.navigation.navigate('ShowMap');
    }

    return <LinearGradient style={styles.containerScreen}
                colors={['rgba(254, 250, 212, 1)','rgba(255, 255, 204, 1)','rgba(255, 246, 143, 1)','rgba(254, 241, 96, 1)','rgba(245, 229, 27, 1)','rgba(247, 202, 24, 1)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
        <Spinner
            visible={showSpinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
        />
        <View style={styles.contentView}>
            <View style={styles.containerElement}>
                <ImageBackground source={{uri: imagePath}} style={styles.imagePreview}/>
            </View>
            <View style={styles.containerElement}>
                <TextInput style={{...styles.input, ...styles.element}} value={imageTitle} onChangeText={setImageTitle}/>
            </View>
            <View style={styles.containerElement}>
                <TouchableOpacity activeOpacity={0.5} onPress={goToMap}>
                    {!props.navigation.getParam('markerPosition', null) ? 
                    <Image style={styles.locationButton} source={require('../assets/locationButton.png')} />
                        :
                    <Image style={styles.locationButton} source={require('../assets/location-map-flat.png')} />}
                </TouchableOpacity>
            </View>
            <View style={styles.containerElement}>
                <CustomButton title={ !pictureMade ? 'Open Camera' : 'Post' } onPress={buttonTappedHandler}/>
            </View>
        </View>
    </LinearGradient>
};

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
    },
    input: {
        margin: 15,
        height: 50,
        borderColor: '#888888',
        borderWidth: 2.5,
        borderRadius: 15,
        backgroundColor: 'rgba(196,196,196,0.4)',
        color: '#000',
        fontFamily: 'OpenSans-Bold',
    },
    containerElement: {
        alignItems: 'center',
    },
    containerScreen: {
        marginTop: 20,
        // marginBottom: 20,
        flex: 1,
        justifyContent: 'center'
    },
    locationButton: {
        width: 150,
        height: 150,
    },
    imagePreview: {
        width: 360,
        height: 200
    },
    element: {
        width: '90%'
    },
    contentView: {
        // marginTop: 10
        justifyContent: 'center'
        // alignItems: 'center',
    }
});

export default imagePickerScreen;
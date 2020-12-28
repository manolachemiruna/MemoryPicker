import React, {useState} from "react";
import {View, Text, Button, ImageBackground, TextInput, StyleSheet, Image} from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from "react-native-loading-spinner-overlay";

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
            width: 360,
            height: 200,
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
                fireStoreRef.collection(`users/${userdata.uid}/pictures`).add({
                    downloadURL: url,
                    title: imageTitle !== '' ? imageTitle : null
                }).then(_ => {
                    setShowSpinner(false);
                    console.log('Added Success');
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

    const buttonTappedHandler = () => {
        if (!pictureMade) {
            openCamera();
        } else {
            postImage();
        }
    };

    return <View style={styles.containerScreen}>
        <Spinner
            visible={showSpinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
        />
        <View style={styles.containerElement}>
            <ImageBackground source={{uri: imagePath}} style={styles.imagePreview}/>
        </View>
        <View style={styles.containerElement}>
            <TextInput style={{...styles.input, ...styles.element}} value={imageTitle} onChangeText={setImageTitle}/>
        </View>
        <View style={styles.containerElement}>
            <Image style={styles.locationButton} source={require('../assets/locationButton.png')}/>
        </View>
        <View style={styles.containerElement}>
            <CustomButton title={ !pictureMade ? 'Open Camera' : 'Post' } onPress={buttonTappedHandler}/>
        </View>
    </View>
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
        marginBottom: 20,
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
    }
});

export default imagePickerScreen;
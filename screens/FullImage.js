import React, { useState } from 'react';
import { Image, StyleSheet, View, TouchableWithoutFeedback, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

import CustomCoolButton from '../components/CustomCoolButton';

const firebaseRef = firestore();

const fullImage = (props) => {

    const [showControls, setShowControls] = useState(false);

    const goToShowPositionOnMap = (position) => {
        if (!!position) {
            props.navigation.navigate('ProfileMap', { markerPosition: position }); 
        }
    }

    const deletePost = () => {
        AsyncStorage.getItem('userData').then(data => {
            const userData = JSON.parse(data);
            firebaseRef.collection('users')
                .doc(userData.uid)
                .collection('pictures')
                .doc(props.navigation.getParam('imageData').pid)
                .delete()
                .then(() => {
                    props.navigation.navigate('ProfileHome');
                })
                .catch(err => {
                    console.log('Error delete post: ', err);
                });
        })
        .catch(err => {
            console.log('Error fetch user data: ', err);
        });
    }

    const ControllButtons = () => {
        
        return <View>
            {!!props.navigation.getParam('imageData').title ? <View style={styles.textContainer} >
                <Text style={styles.innerText}>{props.navigation.getParam('imageData').title}</Text>
            </View> : null}
            <View style={styles.buttonsContainer}>
                <CustomCoolButton title={"Delete Picture"} color={'red'} onPress={deletePost} />
                {!! props.navigation.getParam('imageData').markerPosition ? 
                    <CustomCoolButton title={"Check Location"}  onPress={() => { goToShowPositionOnMap(props.navigation.getParam('imageData').markerPosition) }}/>
                    : 
                    null
                }
            </View>
        </View>
    }

    return <View style={styles.container} >
        <TouchableWithoutFeedback onPress={()=> {setShowControls(prevState => {return !prevState})}} >
            <Image 
                source={{ uri: props.navigation.getParam('imageData').downloadURL }}
                style={styles.imageView}/>
        </TouchableWithoutFeedback>
        {showControls ?  <ControllButtons /> : null}
    </View>
}



const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      imageView: {
        ...StyleSheet.absoluteFillObject,
      },
      buttonsContainer: {
        justifyContent: 'flex-start',
        marginBottom: 20,
        flexDirection: 'row'
      },
      innerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
      },
      textContainer: {
        borderRadius: 20,
        opacity: 0.8,
        borderColor: '#999281',
        borderWidth: 2,
        backgroundColor: '#ECE3E3',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
      }
});


export default fullImage;
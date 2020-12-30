import React, { useState, useEffect, useContext } from 'react';
import {View, StyleSheet, PermissionsAndroid, Button, TouchableOpacity, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const locationPicker = (props) => {

    const [currentRegion, setCurrentRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const [markerPosotion, setMarkerPosition] = useState(currentRegion);

    useEffect(() => {
        // Geolocation.requestAuthorization();
        requestLocationPermission();
    }, []);

    const findCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
              console.log('My location: ', position);
              const coords = position.coords;
              const {latitude, longitude} = coords;
              setCurrentRegion(_ => {
                    setMarkerPosition({
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    });

                    return {
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    };
                })
            },
            (error) => {
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }

    const resetMarkerInCenter = () => {
        setMarkerPosition(currentRegion);
    }

    const requestLocationPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Location Permission",
              message:"We Need Location Permission To Find You",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location");
            // findCurrentLocation()
          } else {
            console.log("Location permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };

      const pickCurrentMarkedLocation = () => {
          props.navigation.navigate('ImagePicker', {markerPosition: markerPosotion});
      }

    return <View style={styles.container}> 
            <MapView
                region={currentRegion}
                style={styles.map}
                showsUserLocation={true}
                onRegionChangeComplete={setCurrentRegion}
                >
                     <Marker
                        draggable
                        coordinate={markerPosotion}
                        title={"You Are Here"}
                        onDragEnd={setMarkerPosition} >
                     </Marker>
            </MapView>
            <View style={styles.buttonsContainer}>
                <CustomCoolButton title={"Pick Location"} onPress={pickCurrentMarkedLocation} />
                <CustomCoolButton title={"Focus Marker"} onPress={resetMarkerInCenter} />
                <CustomCoolButton title={"Focus Location"} onPress={findCurrentLocation} />
            </View>
        </View>
};

const CustomCoolButton = (props) => {
    return <View style={styles.button} >
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.innerText}>{props.title}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      buttonsContainer: {
        justifyContent: 'flex-start',
        marginBottom: 20,
        flexDirection: 'row'
      },
      button: {
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 20,
          backgroundColor: "rgba(123, 239, 178, 1)",
          marginLeft: 10,
          marginRight: 10
      },
      innerText: {
          padding: 3,
          paddingLeft: 13,
          paddingRight: 13,
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 14
      },
});

export default locationPicker;
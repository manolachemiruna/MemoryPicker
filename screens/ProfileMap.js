import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const profileMap = (props) => {
    
    const [currentRegion, setCurrentRegion] = useState(props.navigation.getParam('markerPosition', {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }));
    
    const [markerPosotion, setMarkerPosition] = useState(currentRegion);

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
});

export default profileMap;
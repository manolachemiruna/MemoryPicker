import React from 'react';
// import {} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";

import ImagePicker from '../screens/ImagePickerScreen';
import LocationPicker from '../screens/LocationPicker';

const stackPicture = createStackNavigator({
        ImagePicker: {
            screen: ImagePicker,
            navigationOptions: () => ({
                headerShown: false,
                headerStyle: {backgroundColor: 'orange'},
                title: 'Take a picture',
            })
        },
        ShowMap: {
            screen: LocationPicker,
            navigationOptions: () => ({
                headerShown: true,
                headerStyle: {backgroundColor: 'orange'},
                title: 'Show map'
            })
        }
    },
    {
        initialRouteName: 'ImagePicker',
    }
);

export default createAppContainer(stackPicture);

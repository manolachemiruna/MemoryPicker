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
                headerShown: true,
                headerStyle: {backgroundColor: 'orange'},
                title: 'Forgot Password',
            })
        },
        ShowMap: {
            screen: LocationPicker,
            navigationOptions: () => ({
                headerShown: true,
                headerStyle: {backgroundColor: 'orange'},
                title: 'Forgot Password'
            })
        }
    },
    {
        initialRouteName: 'ImagePicker',
    }
);

export default createAppContainer(stackPicture);

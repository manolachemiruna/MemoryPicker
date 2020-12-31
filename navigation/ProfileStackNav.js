import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";

import ProfileMap from '../screens/ProfileMap';
import HomeScreen from '../screens/HomeScreen';
import FullImage from '../screens/FullImage';

const stackPicture = createStackNavigator({
    ProfileHome: {
        screen: HomeScreen,
        navigationOptions: () => ({
            headerShown: false,
            headerStyle: {backgroundColor: 'orange'},
            title: 'Take a picture',
        })
    },
    ProfileMap: {
        screen: ProfileMap,
        navigationOptions: () => ({
            headerShown: true,
            headerStyle: {backgroundColor: 'orange'},
            title: 'Show map'
        })
    },
    FullImage: {
        screen: FullImage,
        navigationOptions: () => ({
            headerShown: true,
            headerStyle: {backgroundColor: 'orange'},
            title: 'Full image'
        })
    }
},
{
    initialRouteName: 'ProfileHome',
}
);

export default createAppContainer(stackPicture);

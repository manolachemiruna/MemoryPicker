import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";

import ProfileMapUser from '../screens/ProfileMapUser';
import FullImageUser from '../screens/FullImageUser';
const stackPictureUser = createStackNavigator({
    UserProfile: {
        screen: UserScreen,
        navigationOptions: () => ({
            headerShown: false,
            headerStyle: {backgroundColor: 'orange'},
        })
    },
    ProfileMapUser: {
        screen: ProfileMapUser,
        navigationOptions: () => ({
            headerShown: true,
            headerStyle: {backgroundColor: 'orange'},
            title: 'Show map'
        })
    },
    FullImageUser: {
        screen: FullImageUser,
        navigationOptions: () => ({
            headerShown: true,
            headerStyle: {backgroundColor: 'orange'},
            title: 'Full image'
        })
    },
},
{
    initialRouteName: 'UserProfile',
}
);

export default createAppContainer(stackPictureUser);

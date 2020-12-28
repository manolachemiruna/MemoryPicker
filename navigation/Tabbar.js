import {createBottomTabNavigator} from "react-navigation-tabs";
import {Icon} from "react-native-elements";
import {createAppContainer} from "react-navigation";
import React from "react";

import HomeScreen from '../screens/HomeScreen';
import ImagePickerScreen from '../screens/ImagePickerScreen';
import FindPeople from "../screens/FindPeople";
import ProfileScreen from "../screens/ProfileScreen";

const tabBar = createBottomTabNavigator({
        Home: {
                screen: HomeScreen,
                navigationOptions: () => ({
                    tabBarIcon: () => {
                        return <Icon raised name='home' type='entypo' color='black'/>;
                    }
                })
            },
        Photo: {
                screen: ImagePickerScreen,
                navigationOptions: () => ({
                    tabBarIcon: () => {
                        return <Icon raised name='camera' type='entypo' color='black'/>;
                    }
                })
            },
        FindPeople: {
                screen: FindPeople,
                navigationOptions: () => ({
                    tabBarIcon: () => {
                        return <Icon raised name='person' type='ionicons' color='black'/>;
                    },
                }),
            },
        Profile: {
                screen: ProfileScreen,
                navigationOptions: () => ({
                    tabBarIcon: () => {
                        return <Icon raised name='people' type='ionicons' color='black'/>;
                    },
                }),
            }
    },
    {
        tabBarOptions: {
            activeTintColor: 'black',
        }
    }
);

export default createAppContainer(tabBar);
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Icon} from "react-native-elements";
import {createAppContainer} from "react-navigation";
import React from "react";


import FindPeople from "../screens/FindPeople";
import ProfileScreen from "../screens/ProfileScreen";
import PhotoNav from './StackPicture';
import ProfileStackNav from './ProfileStackNav';

const tabBar = createBottomTabNavigator({
        Home: {
                screen: ProfileStackNav,
                navigationOptions: () => ({
                    tabBarIcon: () => {
                        return <Icon raised name='home' type='entypo' color='black'/>;
                    }
                })
            },
        Photo: {
                screen: PhotoNav,
                navigationOptions: () => ({
                    tabBarIcon: () => {
                        return <Icon raised name='camera' type='entypo' color='black'/>;
                    }
                })
            },
        Profile: {
                screen: ProfileScreen,
                navigationOptions: () => ({
                    tabBarIcon: () => {
                        return <Icon raised name='person' type='ionicons' color='black'/>;
                    },
                }),
            },
        FindPeople: {
                screen: FindPeople,
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
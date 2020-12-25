import {createBottomTabNavigator} from "react-navigation-tabs";
import {Icon} from "react-native-elements";
import {createAppContainer} from "react-navigation";
import React from "react";

import Work1 from '../screens/mock/Work1';
import Work2 from '../screens/mock/Work2';
import FindPeople from "../screens/FindPeople";
import ProfileScreen from "../screens/ProfileScreen";

const tabBar = createBottomTabNavigator({
        Work1: {
                screen: Work1,
                navigationOptions: () => ({
                    tabBarIcon: () => {
                        return <Icon raised name='home' type='entypo' color='black'/>;
                    }
                })
            },
        Work2: {
                screen: Work2,
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
import { createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import { createAppContainer} from "react-navigation";
import {createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPassword from '../screens/ForgotPassword'
import {Icon} from 'react-native-elements';
import React , {useState} from 'react';
import { color } from 'react-native-reanimated';
import ProfileScreen from '../screens/ProfileScreen';
import FindPeople from '../screens/FindPeople';
import AsyncStorage from '@react-native-community/async-storage';
import Logout from '../auth/Logout';


const Navigator=createStackNavigator(
    {
    
      Login:{
        screen:LoginScreen,
        navigationOptions: () => (
          {
            headerTitleStyle:{alignSelf:'center'},
            headerShown:false,
            headerStyle:{backgroundColor:'blackalmond'},
          }
        )
      },
      Home:
      {
        screen:ProfileScreen,
        navigationOptions: () => (
          {
            headerTitleStyle:{alignSelf:'auto'},
            headerShown:false,
            headerStyle:{backgroundColor:'blackalmond'},
          }
        )
      },
      FindPeople:
      {
        screen:FindPeople,
      }
      
    },
    
);


const BottomTabs=createBottomTabNavigator(
  {
      Login:
      {
          screen:Navigator,
          navigationOptions: () => ({
            tabBarIcon: () => {
             return <Icon raised name='login' type='entypo' color='black'/>;
            }
        })
      },
     'Don t have an accout?':{
       screen:SignUpScreen,
       navigationOptions: () => ({
        tabBarIcon: () => {
         return <Icon raised name='account-circle' type='material-community' color='black'/>;
        }
    })
     },
    'Forgot Password?':
    {
      screen:ForgotPassword,
      navigationOptions: () => ({
        tabBarIcon: () => {
         return <Icon raised name='settings' type='ionicons' color='black'/>;
        },
    }),
    }
  },
  
  {
    tabBarOptions:{
      activeTintColor:'black',
      
    }
  }
);

export default createAppContainer(BottomTabs);


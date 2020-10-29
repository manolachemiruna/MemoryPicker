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
const Navigator=createStackNavigator(
    {
    
      Login:{
        screen:LoginScreen,
        navigationOptions: () => (
          {
            headerTitleStyle:{alignSelf:'center'},
            title:'Login',
            headerStyle:{backgroundColor:'blackalmond'},
          }
        )
      },
      Home:
      {
        screen:ProfileScreen,
        navigationOptions: () => (
          {
            headerTitleStyle:{alignSelf:'center'},
            title:'Home',
            headerStyle:{backgroundColor:'blackalmond'},
          }
        )
      }
      ,
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


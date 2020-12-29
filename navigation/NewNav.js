import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPassword from "../screens/ForgotPassword";
import TabBar from './Tabbar';
import UserScreen from '../screens/UserScreen';

const Navigator = createStackNavigator({
        Login: {
            screen: LoginScreen,
            navigationOptions: () => (
                {
                    headerTitleStyle: {alignSelf: 'center'},
                    headerShown: true,
                    headerStyle: {backgroundColor: 'orange'},
                    title: 'Welcome'
                }
            )
        },
        Register: {
            screen: SignUpScreen,
            navigationOptions: () => (
                {
                    // headerTitleStyle: {alignSelf: 'center'},
                    headerShown: true,
                    headerStyle: {backgroundColor: 'orange'},
                    title: 'Sign Up'
                }
            )
        },
        ForgotPass: {
            screen: ForgotPassword,
            navigationOptions: () => ({
                    // headerTitleStyle: {alignSelf: 'center'},
                    headerShown: true,
                    headerStyle: {backgroundColor: 'orange'},
                    title: 'Forgot Password'
                }
            )
        },
        UserProfile:{
            screen:UserScreen,
            navigationOptions: () => ({
                // headerTitleStyle: {alignSelf: 'center'},
                headerShown: true,
                headerStyle: {backgroundColor: 'orange'},
                title: 'User Profile'
            }
        )
            
        },

        Main: {
            screen: TabBar,
            navigationOptions: () => ({
                    headerShown: false,
                }
            )
        },
    },
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(Navigator);
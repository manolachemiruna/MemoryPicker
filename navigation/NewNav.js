import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPassword from "../screens/ForgotPassword";
import TabBar from './Tabbar';

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
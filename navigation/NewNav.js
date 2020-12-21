import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

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
        Register: { screen: SignUpScreen },
        // ForgotPass: {},
        // Main: {},
    },
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(Navigator);
import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";

const work1 = (props) => {

    useEffect(() => {
        console.log(props.navigation);
    }, []);

    return <View>
        <Text>Work1</Text>
        <Button title={"Logout"} onPress={() => {
            props.navigation.navigate('Login');
        }} />
    </View>
};

export default work1;
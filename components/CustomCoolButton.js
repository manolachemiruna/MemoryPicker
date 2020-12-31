import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const customCoolButton = (props) => {
    return <View style={{...styles.button, backgroundColor: !!props.color ? props.color : "rgba(123, 239, 178, 1)" }} >
        <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.innerText}>{props.title}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
    innerText: {
        padding: 3,
        paddingLeft: 13,
        paddingRight: 13,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    },
})

export default customCoolButton;
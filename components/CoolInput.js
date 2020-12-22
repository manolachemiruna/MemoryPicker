import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Input: {
        margin: 15,
        height: 50,
        borderColor: '#888888',
        borderWidth: 2.5,
        borderRadius: 15,
        backgroundColor: 'rgba(196,196,196,0.4)',
        color: '#000',
        fontFamily: 'OpenSans-Bold',
    },
});

const coolInput = (props) => {
    return <TextInput style={styles.Input} {...props} />
};

export default coolInput;
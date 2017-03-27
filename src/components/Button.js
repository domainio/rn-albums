import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity style={Styles.button} onPress={() => props.onPress()}>
            <Text style={Styles.text}>Click me!</Text>
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#007aff',
    },
    button: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,

    }
});

export default Button;
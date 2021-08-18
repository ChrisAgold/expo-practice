import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from "../app/config/colors";


function AppButton({title,onPress,color = "primary"}) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: '#fff'}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fc5c65',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        width: '100%',
        marginVertical: 10,
        marginBottom: 40,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppButton;

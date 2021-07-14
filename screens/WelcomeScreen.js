import React from 'react';
import {ImageBackground, StyleSheet, View,Image,Text} from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../app/assets/tea.jpeg")}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../app/assets/icon.png')}/>
                <Text style={styles.tagline}>Hello</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login"/>
                <AppButton title="Register" color="secondary"/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    tagline: {
        fontSize:25,
        fontWeight: "600",
        paddingVertical: 20,

    }
})

export default WelcomeScreen;

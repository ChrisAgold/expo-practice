import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header'
import CarList from './components/CarList'

export default function App() {
    return (
        <View>
            <Header title={'Cars'}/>
            <CarList/>
        </View>

    );
}


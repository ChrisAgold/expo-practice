import React, {useState} from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import AppButton from './components/AppButton'
import ViewImageScreen from './screens/ViewImageScreen'
import {View} from "react-native";

import Card from './components/Card';

export default function App() {
    // const [focusSubject, setFocusSubject] = useState(null)

    return (

        <View style={{
            backgroundColor: '#f8f4f4',
            padding: 20,
            paddingTop: 100
        }}>
            <Card
                title="Red jacket for sale"
                subTitle="$40"
                image="./app/assets/greenTea.jpeg"/>
        </View>

    );
}

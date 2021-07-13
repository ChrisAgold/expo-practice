import React, {useState} from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import AppButton from './components/AppButton'
import ViewImageScreen from './screens/ViewImageScreen'
import {View} from "react-native";

export default function App() {
    // const [focusSubject, setFocusSubject] = useState(null)

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {/*<ViewImageScreen/>*/}
            <AppButton title="Login"  onPress={() => console.log("Pressed")}/>
        </View>
    );
}

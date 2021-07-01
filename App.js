import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Focus} from "./features/focus/Focus";

export default function App() {
    const [focusSubject, setFocusSubject] = useState(null)

    return (
        <View style={styles.container}>
            <Text>{focusSubject} ? (
                <Text>Here is where Im going to build a timer</Text>
                ) : (
                <Focus/>
                )}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: '#252250',
    }
})

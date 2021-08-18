import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from './AppText';

function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View styles.detailsContainer>
                <AppText style={styles.title}>{title}</AppText>
                <AppText>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        card: {
            borderRadius: 15,
            backgroundColor: '#fff',
            marginBottom: 20
        },
        detailsContainer: {
            padding: 20,
        },
        image: {
            width: "100%",
            height: 200,
        }
    }
)

export default Card;

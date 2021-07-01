import React, {Component} from 'react'
import {View, Text} from 'react-native'

// Class Based Component
class CarList extends Component {
    componentDidMount() {
        console.log('console from car list component')
    }

    render () {
        return (
            <View>
                <Text>Car List</Text>
            </View>
        )
    }
}

export default CarList;


import React from 'react';
import {View, Button, Text} from 'react-native';


const button = (props) => (
    <View>
        <Button style={props.style} title={props.title} onPress={props.press}/>
    </View>
)

export default button;
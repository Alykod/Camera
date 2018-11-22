import React from 'react';
import { View, Text} from 'react-native';
import Styles from '../../Styles';
 
const styles = Styles;

const listItem = (props) => (
    <View style={styles.listItem}>
        <Text style={styles.txt}>Item: {props.item}</Text>
        <Text style={styles.txt}>Amount: {props.amount}</Text>
    </View>

);

export default listItem;
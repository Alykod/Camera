import React from 'react';
import { View, FlatList, Text, alert, TouchableHighlight } from 'react-native';

import ListItem from './ListItem';
import Styles from '../../Styles';



const fullList = props => {
    if (props.items.length === 0)
        return null;

    console.log(props.items)
    const dataDisplay = props.items;
    return dataDisplay.map((x, index) =>{
        return(
            <TouchableHighlight style={styles.listItem} onPress={props.pressed(x.id)}>
                <ListItem key={x.id} item={x.itemName} amount={x.amount} />
            </TouchableHighlight>
        );
    })


}

const styles = Styles;


export default fullList;
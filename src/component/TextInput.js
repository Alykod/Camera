import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const textInput = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <TextInput style={props.style} onChangeText={props.onChangeText} value={props.value} clearTextOnFocus={true}/>
        <Text style={styles.title}>Amount</Text>
        <TextInput style={props.style} onChangeText={props.onChangeAmount} value={props.amount} clearTextOnFocus={true}/>
    </View>

)

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      flexDirection: 'row',
    },
    title: {
      textAlign: 'center',
      color: '#333333',
      margin: 10,
    },
  });


export default textInput;
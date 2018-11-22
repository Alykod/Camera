/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './src/component/Button';
import ListItem from './src/component/ListItem';
import TextField from './src/component/TextInput';
import FullList from './src/component/FullList';
import Styles from './Styles';
import { RNCamera } from 'react-native-camera';



type Props = {};
export default class App extends Component<Props> {
  state = {
    itemName: '',
    items: [],
    amount: '',
    displayCamera: false,
  }


  itemNameChangedHandler = val => {
    this.setState({
      itemName: val
    });

  }

  valueChangedHandler = val => {
    this.setState({
      amount: val
    })
  }

  deleteHandler = (itemIndex) => {
    const items = [...this.state.items]
    items.splice(itemIndex, 1);
    this.setState({ items: items });

  }

  // itemSubmitHandler = () => {
  //   this.setState(prevState => {
  //     return {
  //       items: prevState.items.concat(prevState.itemName),
  //       itemName: '',
  //       amount: ''
  //     };
  //   });
  // }
  cameraDisplayHandler = () => {
    let display = !this.state.displayCamera;
    this.setState({
      displayCamera: display
    });
  }


  itemSubmitHandler = () => {

    let newItems = [...this.state.items];

    let itemName = this.state.itemName;
    let amount = this.state.amount;
    let id = Math.random();
    if (newItems.find((x) => x.id == id))
      return id = Math.random();

    newItems.push({
      itemName,
      amount,
      id
    });

    this.setState({
      items: newItems,
      itemName: '',
      amount: ''
    });
  }

  takePicture = async function (camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  }

  getCamera = () => {

    if(this.state.displayCamera)
    return (
      <View>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
      >
        {({ camera, status }) => {
          if (status == 'READY')
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
        }}
      </RNCamera>
      {/* <TouchableOpacity onPress={this.cameraDisplayHandler} style={styles.capture}>
      <Text style={{ fontSize: 14 }}> Esc </Text>
      </TouchableOpacity> */}
      </View>
    )
  }

  getHomePage = () => {
    if(!this.state.displayCamera)
    return (
      <View>
      <TextField title='Item name' style={styles.textField}
        value={this.state.itemName} onChangeText={this.itemNameChangedHandler} amount={this.state.amount} onChangeAmount={this.valueChangedHandler} />
      <Button style={styles.buts} title='Add' press={this.itemSubmitHandler} />
      <Button style={styles.buts}  title='Camera' press={this.cameraDisplayHandler} />
      <View style={styles.itemsContainer}>
        <FullList items={this.state.items} pressed={() => this.deleteHandler} />
      </View>
      </View>
    )

  }

  render() {


    return (

      <View style={styles.container}>
        {/* <TakePicture> </TakePicture> */}
        {this.getHomePage()}
        <View>
          {this.getCamera()}
        </View>
      </View>
    );
  }
}

const styles = Styles;

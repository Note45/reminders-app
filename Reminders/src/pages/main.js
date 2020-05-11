import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

import circleAddIcon from '../../assets/icon-add-circle.png'

export default function Main() {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonAdd}>
        <Image source={circleAddIcon} style={styles.iconSize}></Image>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonAdd: {
    position: 'absolute',
    bottom: 60,
    alignItems: 'flex-end',
    padding: 30,
    width: '100%',
    height: 80
  },
  iconSize: {
    height: 70,
    width: 70,
  }  
})
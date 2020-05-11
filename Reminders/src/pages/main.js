import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

import circleAddIcon from '../../assets/icon-add-circle.png'

export default function Main({ navigation }) {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonAdd} onPress={() => navigation.navigate('AddReminder')}>
        <Image source={circleAddIcon} style={styles.iconSize}></Image>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
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
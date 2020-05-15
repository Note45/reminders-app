import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native'

import ReminderList from '../components/ReminderList'

import circleAddIcon from '../../assets/icon-add-circle.png'

export default function Main({ navigation }) {
  const [savedData, setSavedData] = useState([ ])

  async function getDataSaved() {
    try {
      let keys = await AsyncStorage.getAllKeys()
      
      if(keys !== null) {
        setSavedData(keys)
      }
    }catch(error) {
      alert('Error showing reminders')
    }
  }
  
  useEffect(() => {
    getDataSaved()
  })

  return(
    <View style={styles.container}>
      <ReminderList Reminders={savedData} />

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
    backgroundColor: '#F0F0F0',
    width: '100%'
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
    height: 85,
    width: 85,
  }  
})
import React from 'react'
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image} from 'react-native'

import trashIcon from '../../assets/icon-trash.png'

export default function ReminderList({ Reminders }) {
return(
    <ScrollView styles={styles.container}>
      {
        Reminders.map(item => {
          <View style={styles.containerReminder}>
            <Text>{item}</Text>
          
            <TouchableOpacity>
              <Image source={trashIcon} style={styles.trashIcon}/>
            </TouchableOpacity>
          </View>
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
    margin: 10
  },
  containerReminder:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#707070',
    borderWidth: 2,
    borderRadius: 13,
    width: '98%',
    height: 100
  },
  trashIcon: {
    position:'relative',
    right: 0,
    width: 35,
    height: 35
  },
})
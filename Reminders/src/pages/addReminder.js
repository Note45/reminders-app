import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function AddReminder({ navigation }) {
  return(
    <View style={styles.container}>
      <Text>Page AddReminder</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0'
  }
})
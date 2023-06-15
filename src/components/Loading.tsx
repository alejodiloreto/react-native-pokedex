import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Loading = () => {
  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator size={50} color='grey' style={styles.activityContainer} />
    </View>
  )
}

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Loading
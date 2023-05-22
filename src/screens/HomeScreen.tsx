import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Pokemon')}>
        <Text>Go to Pokémon</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
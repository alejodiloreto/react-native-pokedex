import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigator'

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'> { }

const PokemonScreen = ({ navigation, route }: Props) => {

  const { pokemon, color } = route.params;
  return (
    <View>
      <Text style={{ color }}>{pokemon.name}</Text>
    </View>
  )
}

export default PokemonScreen
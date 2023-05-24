import React from 'react'
import { Image, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'

const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokeball.png')}
        style={styles.pokeballBG}
      />
      <Text style={
        [styles.title, styles.globalMargin, { top: top + 20 }]
      } >Pokédex</Text>
    </>
  )
}

export default HomeScreen
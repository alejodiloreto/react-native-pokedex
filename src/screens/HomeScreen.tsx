import React from 'react'
import { ActivityIndicator, FlatList, Image } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { FadeInImage } from '../components/FadeInImage'

const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokeball.png')}
        style={styles.pokeballBG}
      />

      <FlatList
        data={simplePokemonList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FadeInImage
            uri={item.picture}
            style={{
              width: 100,
              height: 100
            }}
          />
        )}
        keyExtractor={pokemon => pokemon.id}
        onEndReached={loadPokemons}
        onEndReachedThreshold={.4}
        ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20} color='grey' />}
      />

      {/* <Text style={
        [styles.title, styles.globalMargin, { top: top + 20 }]
      } >Pokédex</Text> */}
    </>
  )
}

export default HomeScreen
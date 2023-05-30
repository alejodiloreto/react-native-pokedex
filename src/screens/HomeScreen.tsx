import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import PokemonCard from '../components/PokemonCard'

const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokeball.png')}
        style={styles.pokeballBG}
      />
      <View style={{ alignItems: 'center' }} >
        <FlatList
          ListHeaderComponent={(
            <Text style={[styles.title, styles.globalMargin, { top: top + 20, marginBottom: top + 20, paddingBottom: 15 }]
            } >Pokédex</Text>
          )}
          data={simplePokemonList}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
          keyExtractor={pokemon => pokemon.id}
          onEndReached={loadPokemons}
          onEndReachedThreshold={.4}
          ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20} color='grey' />}
        />
      </View>
    </>
  )
}

export default HomeScreen
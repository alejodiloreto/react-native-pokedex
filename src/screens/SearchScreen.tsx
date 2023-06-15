import React from 'react'
import { View, Text, Platform, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles as globalStyles } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';

const SearchScreen = () => {

  const { isFetching, simplePokemonList } = usePokemonSearch()
  const { top } = useSafeAreaInsets();

  if (isFetching) {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <ActivityIndicator size={50} color='grey' style={styles.activityContainer} />
      </View>
    )
  }

  return (
    <View style={{
      flex: 1,
      marginTop: (Platform.OS === 'ios') ? top : top + 10,
      marginHorizontal: 20
    }} >
      <SearchInput />

      <FlatList
        ListHeaderComponent={(
          <Text style={[globalStyles.title, globalStyles.globalMargin]
          } >Pokédex</Text>
        )}
        data={simplePokemonList}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
        keyExtractor={pokemon => pokemon.id}
      />
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

export default SearchScreen
import React, { useEffect, useState } from 'react'
import { View, Text, Platform, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import { Pokemon } from '../interfaces/pokemonInterfaces';

const width = Dimensions.get('window').width

const SearchScreen = () => {
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const { top } = useSafeAreaInsets();
  const [term, setTerm] = useState('')
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([])

  useEffect(() => {
    if (term.length === 0) {
      setFilteredPokemon([]);
    }

    if (isNaN(Number(term))) {
      setFilteredPokemon(
        simplePokemonList.filter(pokemon => pokemon.name.toLocaleLowerCase()
          .includes(term.toLocaleLowerCase()))
      )
    } else {
      const pokemonById = simplePokemonList.find(pokemon => pokemon.id === term);
      setFilteredPokemon(pokemonById ? [pokemonById] : [])
    }

  }, [term])


  if (isFetching) {
    return <Loading />
  }

  return (
    <View style={{
      flex: 1,
      marginHorizontal: 20
    }} >
      <SearchInput
        onDebounce={(value: string) => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: width - 40,
          top: (Platform.OS === 'ios') ? top : top + 10
        }}
      />

      <FlatList
        data={filteredPokemon}
        ListHeaderComponent={(
          <Text style={[
            styles.title,
            styles.globalMargin,
            {
              marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80,
              marginBottom: 10
            },
          ]} >{term}</Text>
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
        keyExtractor={pokemon => pokemon.id}
      />
    </View>
  )
}

export default SearchScreen
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TouchableOpacity, View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'> { }

const PokemonScreen = ({ navigation, route }: Props) => {

  const { top } = useSafeAreaInsets();
  const { pokemon, color } = route.params;
  const { id, name, picture } = pokemon;
  const { isLoading, fullPokemon } = usePokemon(id);

  return (

    <View style={{ flex: 1 }} >
      <View style={
        [styles.headerContainer, { backgroundColor: color }]
      }>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={.8}
          style={[styles.backButton, { top: top + 10 }]}
        >
          <Icon
            name='arrow-back-outline'
            color='white'
            size={35}
          />
        </TouchableOpacity>
        <Text
          style={[styles.pokemonName, { top: top + 40 }]}
        >
          {name + '\n'}#{id}
        </Text>
        <Image
          source={require('../assets/white-pokeball.png')}
          style={styles.pokeball}
        />
        <FadeInImage
          uri={picture}
          style={styles.pokemonImage}
        />
      </View>

      {isLoading ?
        <View style={styles.loading} >
          <ActivityIndicator
            size={50}
            color={color}
          />
        </View>
        : <PokemonDetails pokemon={fullPokemon} />
      }

    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -15,
    opacity: .7
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PokemonScreen
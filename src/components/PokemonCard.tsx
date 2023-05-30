import React, { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Pokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage'
import ImageColors from 'react-native-image-colors'
import { useRef } from 'react';

const screenWidth = Dimensions.get('window').width

interface Props {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {
      fallback: 'grey',
      cache: true,
      key: pokemon.id,
    })
      .then(colors => {
        if (!isMounted.current) return;
        colors.platform === 'ios'
          ? setBgColor(colors.background || 'grey')
          : setBgColor(colors.dominant || 'grey')
      });

    return () => {
      isMounted.current = false;
    }

  }, [])


  return (
    <TouchableOpacity activeOpacity={.5}>
      <View style={[
        styles.cardContainer,
        {
          width: screenWidth * .4,
          backgroundColor: bgColor
        }
      ]} >
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokeballContainer} >
          <Image
            source={require('../assets/white-pokeball.png')}
            style={styles.pokeball}
          />
        </View>
        <FadeInImage
          uri={pokemon.picture}
          style={styles.pokemonImage}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'grey',
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -5,
    bottom: -10
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: .5,
  }

})

export default PokemonCard
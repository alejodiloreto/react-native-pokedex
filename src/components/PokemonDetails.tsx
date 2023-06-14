import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { FullPokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: FullPokemon;
}

const calculateWeight = (weight: number) => {
  const weightAsString = weight.toString();
  return `${weightAsString.slice(0, -1)},${weightAsString.slice(-1)}`;
}

const PokemonDetails = ({ pokemon }: Props) => {

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={StyleSheet.absoluteFillObject}
    >
      <View
        style={[styles.container, { marginTop: 370 }]}
      >
        <Text style={styles.title}>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.types.map(({ type }) => (
            <Text key={type.name} style={[styles.regularText, { marginRight: 10 }]}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Weight</Text>
        <Text style={styles.regularText}>{calculateWeight(pokemon.weight)}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginLeft: 10 }}
      >
        <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprite} />
        <FadeInImage uri={pokemon.sprites.back_default} style={styles.basicSprite} />
        <FadeInImage uri={pokemon.sprites.front_shiny} style={styles.basicSprite} />
        <FadeInImage uri={pokemon.sprites.back_shiny} style={styles.basicSprite} />
      </ScrollView>

      <View
        style={styles.container}
      >
        <Text style={styles.title}>Base abilities</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon.abilities.map(({ ability }) => (
            <Text key={ability.name} style={[styles.regularText, { marginRight: 10 }]}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      <View
        style={styles.container}
      >
        <Text style={styles.title}>Moves</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {pokemon.moves.map(({ move }) => (
            <Text key={move.name} style={[styles.regularText, { marginRight: 10 }]}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View >
          {pokemon.stats.map((stat, index) => (
            <View key={stat.stat.name + index} style={{ flexDirection: 'row' }} >
              <Text style={[styles.regularText, { width: 150 }]}>
                {stat.stat.name}
              </Text>
              <Text style={[styles.regularText, { fontWeight: 'bold' }]}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>

        <View style={{ marginBottom: 60, alignItems: 'center' }} >
          <FadeInImage uri={pokemon.sprites.front_default} style={styles.basicSprite} />
        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
  },
  regularText: {
    fontSize: 19,
    color: 'black'
  },
  basicSprite: {
    width: 100,
    height: 100
  }
})

export default PokemonDetails
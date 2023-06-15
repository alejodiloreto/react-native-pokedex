import { useEffect, useRef, useState } from "react"
import { pokeApi } from "../api/pokeApi"
import { Pokemon, PokemonPaginatedResponse, Result } from "../interfaces/pokemonInterfaces"

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true)
  const [simplePokemonList, setSimplePokemonList] = useState<Pokemon[]>([]);

  const loadPokemons = async () => {
    const resp = await pokeApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1281');
    mapPokemonList(resp.data.results);
  }

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: Pokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2]
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      return { name, id, picture }
    })
    setSimplePokemonList(newPokemonList);
    setIsFetching(false);
  }

  useEffect(() => {
    loadPokemons();
  }, [])

  return {
    isFetching,
    simplePokemonList,
  };

}
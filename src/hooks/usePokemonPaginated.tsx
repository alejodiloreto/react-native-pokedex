import { useEffect, useRef, useState } from "react"
import { pokeApi } from "../api/pokeApi"
import { Pokemon, PokemonPaginatedResponse, Result } from "../interfaces/pokemonInterfaces"

export const usePokemonPaginated = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<Pokemon[]>([])
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

  const loadPokemons = async () => {
    const resp = await pokeApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);
  }

  const mapPokemonList = (pokemonList: Result[]) => {
    pokemonList.forEach(poke => console.log(poke.url))
  }

  useEffect(() => {
    loadPokemons();
  }, [])

  return {
    simplePokemonList
  };

}
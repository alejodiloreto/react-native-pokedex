import { useEffect, useRef, useState } from "react"
import { pokeApi } from "../api/pokeApi"
import { Pokemon, PokemonPaginatedResponse, Result } from "../interfaces/pokemonInterfaces"

export const usePokemonPaginated = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [simplePokemonList, setSimplePokemonList] = useState<Pokemon[]>([])
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await pokeApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);
  }

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: Pokemon[] = pokemonList.map(({ name, url }) => {

      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2]
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      return { name, id, picture }
    })
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  }

  useEffect(() => {
    loadPokemons();
  }, [])

  return {
    simplePokemonList,
    isLoading,
    loadPokemons
  };

}
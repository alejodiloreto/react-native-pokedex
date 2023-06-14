import { useState, useEffect } from 'react';
import { FullPokemon } from '../interfaces/pokemonInterfaces';
import { pokeApi } from '../api/pokeApi';


const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fullPokemon, setFullPokemon] = useState<FullPokemon>({} as FullPokemon);

  const loadPokemon = async () => {
    const res = await pokeApi.get<FullPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setFullPokemon(res.data);
    setIsLoading(false);
  }

  useEffect(() => {
    loadPokemon();
  }, [])


  return {
    isLoading,
    fullPokemon
  }
}

export default usePokemon
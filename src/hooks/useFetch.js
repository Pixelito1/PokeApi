import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        console.log(data);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}

export function useAbilities() {
  const API_ABILITIES = (NAME) => `https://pokeapi.co/api/v2/pokemon/${NAME}`;
  const API_SPECIES = (ID) =>
    `https://pokeapi.co/api/v2/pokemon-species/${ID}/`;
  const [pokemonData, setPokemonData] = useState();
  const [pokemonLore, setPokemonLore] = useState();
  const [id, setId] = useState(1);
  const [input, setInput] = useState(1);

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    setInput(selectedId);
  };

  useEffect(() => {
    fetch(API_ABILITIES(input))
      .then((response) => response.json())
      .then((data) => {
        setId(data.id);
        setPokemonData(data);
      });
    fetch(API_SPECIES(input))
      .then((response) => response.json())
      .then((data) => {
        setId(data.id);
        setPokemonLore(data);
      });
  }, [input, id]);

  return { pokemonData, pokemonLore, setInput, id, handleSelectChange };
}

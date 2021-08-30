import pokemonApi from '../api/pokemonApi';

// crear el arreglo
const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));
  return pokemonsArr.map((_, index) => index + 1);
};

// mezcla el arreglo de numero de pokemons
const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));
  return pokemons;
};

// recibe 4 pokemons aleatorios y consulta los nombres
const getPokemonNames = async ([a, b, c, d] = []) => {
  // const resp = await pokemonApi.get(`/1`);
  // console.log(resp.data.name);
  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const [poka, pokb, pokc, pokd] = await Promise.all(promiseArr);
  return [
    { name: poka.data.name, id: poka.data.id },
    { name: pokb.data.name, id: pokb.data.id },
    { name: pokc.data.name, id: pokc.data.id },
    { name: pokd.data.name, id: pokd.data.id },
  ];
};

export default getPokemonOptions;

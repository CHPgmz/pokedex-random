
async function getPokemons(isLoading, setPokemon, setIsloading, random) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);

    if (response.ok) {
      const data = await response.json();
      const { id, name, height, stats, types, weight } = await data;
      const [slot] = types;

      const pokemonData = {
        id: id,
        name: name,
        height: height,
        weight: weight,
        attack: stats[1].base_stat,
        defense: stats[2].base_stat,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
        type: slot.type.name,
      };
      console.log(pokemonData);

      setPokemon(pokemonData);
      if (isLoading == true) { 
        setIsloading(false);
        console.log('Se desactivo')
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export { getPokemons };

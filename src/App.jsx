import React, { useEffect, useState } from "react";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard";
import { getPokemons } from "./components/GetPokemons";

function App() {
  const [isLoading, setIsloading] = useState(true);
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    height: "",
    weight: "",
    attack: "",
    defense: "",
    img: "",
    type: "",
  });


  const idRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  useEffect(() => {
    if (isLoading) {
      const random = idRandom(1, 500);
      getPokemons(isLoading, setPokemon, setIsloading, random);
    }

    return () => {
      setInterval(() => {
        const random = idRandom(1, 500);
        getPokemons(isLoading, setPokemon, setIsloading, random);
      }, 5000);
    };
  }, [pokemon]);

  if (isLoading) {
    return (
      <div className='App'>
        <h1>Cargando...</h1>
      </div>
    );
  } else {
    return (
      <div className='App'>
        <div className='header'>
          <h1>PokeDex</h1>
        </div>
        <div className='container'>
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            abilities={pokemon.abilities}
            img={pokemon.img}
            peso={pokemon.weight}
            altura={pokemon.height}
            tipo={pokemon.type}
            ataque={pokemon.attack}
            defensa={pokemon.defense}
          />
        </div>
      </div>
    );
  }
}

export default App;

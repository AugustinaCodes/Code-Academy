import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonForm from "./components/PokemonForm/PokemonForm";
import { useState } from "react";

function App() {
  const [pokemonData, setPokemonData] = useState();

  return (
    <div>
      <PokemonForm setPokemonData={setPokemonData} />
      {pokemonData && <PokemonCard pokemonData={pokemonData} />}
    </div>
  );
}

export default App;

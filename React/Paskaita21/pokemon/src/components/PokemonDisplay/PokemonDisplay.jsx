import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function PokemonDisplay({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get(`${API_URL}/${pokemonName.toLowerCase()}`)
      .then((response) => {
        setPokemonData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Pokémon not found");
        setLoading(false);
      });
  }, [pokemonName]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Card variant="outlined" sx={{ mt: 4, maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemonData.name}
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image={pokemonData.sprites.front_default}
          alt={pokemonData.name}
        />
        <Typography variant="body2" color="text.secondary">
          Types:{" "}
          {pokemonData.types.map((typeInfo) => typeInfo.type.name).join(", ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Abilities:{" "}
          {pokemonData.abilities
            .map((abilityInfo) => abilityInfo.ability.name)
            .join(", ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Base Stats:
        </Typography>
        <ul>
          {pokemonData.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

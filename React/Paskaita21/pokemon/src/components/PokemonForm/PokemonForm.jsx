import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import "@fontsource/roboto/400.css";

export default function PokemonForm() {
  const [pokemonName, setPokemonName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setPokemonName(pokemonName);
  }

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <h1>Pokemon Search</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
        }}
      >
        <TextField
          label="Pokemon Name"
          variant="outlined"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          sx={{ mb: 2, width: "100%" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
}

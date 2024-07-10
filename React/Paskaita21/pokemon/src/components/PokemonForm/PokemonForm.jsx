import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import PokemonDisplay from "../PokemonDisplay/PokemonDisplay";

export default function PokemonForm() {
  const [pokemonName, setPokemonName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedName(pokemonName);
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
      {submittedName && <PokemonDisplay pokemonName={submittedName} />}
    </Box>
  );
}

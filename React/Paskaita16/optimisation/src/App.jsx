import "./App.css";
import { useMemo, useState } from "react";
import TodosContainer from "./components/TodosContainer/TodosContainer";

function App() {
  const [number, setNumber] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  function hardCalculation() {
    console.log("hard calculation");
    let sum = 1;
    for (let i = 1; i < 99999999; i++) {
      sum = (sum + i) * i;
    }
    return sum * multiplier;
  }

  const hardCalculationResult = useMemo(hardCalculation, [multiplier]);

  return (
    <div>
      <TodosContainer />
      <h5>{number}</h5>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>
        Increase multiplier
      </button>
      <p>{hardCalculationResult}</p>
    </div>
  );
}

export default App;

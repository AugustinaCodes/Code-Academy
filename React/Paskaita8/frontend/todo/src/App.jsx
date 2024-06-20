import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TodosContainer from "./components/TodosContainer/TodosContainer";

function App() {
  const [todos, setTodos] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/todo`)
      .then((response) => {
        setTodos(response.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>
    <TodosContainer todos={todos} />
  </div>;
}

export default App;

import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import { useWindowDimensions } from "./hooks/useWindowDimensions";

function App() {
  const dimensions = useWindowDimensions();

  return (
    <div>
      <Card title={"Pirma"}>
        <Card.Header text={"Header dalis"} />
        <h4>sfjghkjf</h4>
        <p>ajkdndajn</p>
        <a href="">sfgsf</a>
      </Card>
      <Card title={"Antra"} />
      <Form />
      <p>
        width: {dimensions.width}
        height: {dimensions.height}
      </p>
    </div>
  );
}

export default App;

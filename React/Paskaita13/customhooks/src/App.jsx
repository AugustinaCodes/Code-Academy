import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import useHover from "./hooks/useHover";
import { useWindowDimensions } from "./hooks/useWindowDimensions";

function App() {
  const dimensions = useWindowDimensions();
  const [h1Ref, isH1Hovered] = useHover();
  const [pRef, isPHovered] = useHover();

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
      <h1 ref={h1Ref} style={{ color: isH1Hovered ? "red" : "black" }}>
        Custom hooks - changes colours
      </h1>
      <p ref={pRef} style={{ fontSize: isPHovered ? "40px" : "16px" }}>
        Custom hooks - font size changes to 40px
      </p>
    </div>
  );
}

export default App;

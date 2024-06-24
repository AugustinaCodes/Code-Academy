import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Link to={"/"}>Go to home page</Link>
      <h1>About</h1>
      <p>About page</p>
    </div>
  );
}

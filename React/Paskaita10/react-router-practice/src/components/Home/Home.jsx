import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to home page</h1>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/users"}>Users</Link>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <Link to={"/"}>Go to home page</Link>
      <h1>Contacts</h1>
      <ul>
        <li>Tel: 07936284710</li>
        <li>email: hello@gmail.com</li>
        <li>address: vilnius 202</li>
      </ul>
    </div>
  );
}

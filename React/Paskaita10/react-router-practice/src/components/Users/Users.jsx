import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const API_LINK = "https://jsonplaceholder.typicode.com/users";

export default function Users() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_LINK)
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Link to={"/"}>Go to home page</Link>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={() => navigate(`/users/${user.id}`)}>
              More info on the user
            </button>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

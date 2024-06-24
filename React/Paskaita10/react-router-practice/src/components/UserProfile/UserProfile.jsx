import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API_LINK = "https://jsonplaceholder.typicode.com/users";

export default function UserProfile() {
  const [user, setUser] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_LINK}/${params.id}`)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  function handleBackButton() {
    navigate(-1);
  }

  function renderObject(obj) {
    return Object.entries(obj).map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return (
          <div key={key}>
            <strong>{key}:</strong>
            <div>{renderObject(value)}</div>
          </div>
        );
      } else {
        return (
          <p key={key}>
            <strong>{key}:</strong> {value}
          </p>
        );
      }
    });
  }

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button onClick={handleBackButton}>Go back</button>
      {renderObject(user)}
      {/* {user.id ? (
        <>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <h1>User address: </h1>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
          <p>{user.address.geo.lat}</p>
          <p>{user.address.geo.lng}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <h1>User company</h1>
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )} */}
    </div>
  );
}

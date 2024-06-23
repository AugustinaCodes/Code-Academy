import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserListContainer from "./components/UserListContainer/UserListContainer";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import PostsForm from "./components/PostsForm/PostsForm";

function App() {
  // const [userlists, setUserList] = useState([])

  // useEffect(() => {
  //   axios
  //   .get("http://127.0.0.1:4000/userlist")
  //   .then((response) => {
  //     setUserList(response.data)
  //   })
  //   .catch((err) => console.log(err))
  // }, [])

  return (
    <div>
      {/* <UserListContainer userlists={userlists} /> */}
      <PostsForm />
      <DisplayPosts />
    </div>
  );
}

export default App;

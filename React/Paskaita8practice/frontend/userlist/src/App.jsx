import { useEffect, useState } from "react"
import './App.css'
import axios from "axios"
import UserListContainer from "./components/UserListContainer/UserListContainer"

function App() {
  const [userlists, setUserList] = useState([])

  useEffect(() => {
    axios
    .get("http://127.0.0.1:4000/userlist")
    .then((response) => {
      setUserList(response.data)
    })
    .catch((err) => console.log(err))
  }, [])
  

  return (
    <div>
      <UserListContainer userlists={userlists} />
    </div>
  )
}

export default App

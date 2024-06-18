import UserList from "../UserList/UserList"

export default function UserListContainer({ userlists }) {
  return (
    <div>
        {userlists.map((userlist) => (
            <UserList key={userlist._id} userlist={userlist} />
        ))}
    </div>
  )
}

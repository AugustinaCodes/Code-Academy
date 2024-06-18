import styles from "./UserList.module.css"

export default function UserList({ userlist }) {
  return (
    <div className={styles.card}>
        <h5>Name: {userlist.name}</h5>
        <h5>Email: {userlist.email}</h5>
        <h5>Username: {userlist.username}</h5>
    </div>
  )
}

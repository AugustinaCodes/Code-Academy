import { useSettingsContext } from "../Context/SettingsContextProvider";
import styles from "./Header.module.css";

export default function Header() {
  const { setShow } = useSettingsContext();

  function handleChange(e) {
    setShow(e.target.value);
  }
  return (
    <div className={styles.header}>
      <img
        src="https://i.pinimg.com/736x/c0/e5/8a/c0e58a8822f16eedf09fa0a29d57ccc0.jpg"
        alt=""
      />
      <select onChange={handleChange}>
        <option value="show">Show</option>
        <option value="no">Dont show</option>
      </select>
    </div>
  );
}

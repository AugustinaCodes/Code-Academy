import { useSettingsContext } from "../Context/SettingsContextProvider";
import "../Styles/styles.css";

export default function Footer() {
  const { theme } = useSettingsContext();
  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <h1>Footer section</h1>
      <p>Testing</p>
      <a href="">Link 1</a>
      <br />
      <a href="">Link 2</a>
    </div>
  );
}

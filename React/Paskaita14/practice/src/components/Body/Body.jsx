import { useSettingsContext } from "../Context/SettingsContextProvider";
import "../Styles/styles.css";

export default function Body() {
  const { theme } = useSettingsContext();
  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <h1>Main Section</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur,
        fuga.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi
        quibusdam pariatur expedita repudiandae hic obcaecati similique facilis
        debitis, dolores voluptatem aut autem, vero in? Quos expedita
        dignissimos architecto corporis, assumenda repudiandae cupiditate, sed,
        itaque veritatis veniam quam enim fugiat optio asperiores corrupti
        nesciunt mollitia? Unde debitis possimus officiis asperiores.
      </p>
    </div>
  );
}

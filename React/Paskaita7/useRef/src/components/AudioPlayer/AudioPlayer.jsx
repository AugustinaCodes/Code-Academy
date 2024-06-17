import { useEffect, useRef, useState } from "react";
import styles from "./ToggleButton.module.css";

export default function AudioPlayer() {
  const [isChecked, setIsChecked] = useState(false);
  const audioPlayerRef = useRef();

  useEffect(() => {
    if (isChecked) {
        audioPlayerRef.current.play();
    } else {
        audioPlayerRef.current.pause();
    }
  }, [isChecked])

const handleToggle = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked)
}

  return (
    <div>
      <audio ref={audioPlayerRef} src="/src/assets/audioplayback.mp3"></audio>
      <br />
      <div className={styles.toggleContainer}>
        <input
          type="checkbox"
          id="toggle"
          className={styles.toggleCheckbox}
          checked={isChecked}
          onChange={handleToggle}
        />
        <label htmlFor="toggle" className={styles.toggleLabel}>
          <span className={styles.toggleButton}></span>
        </label>
      </div>
    </div>
  );
}

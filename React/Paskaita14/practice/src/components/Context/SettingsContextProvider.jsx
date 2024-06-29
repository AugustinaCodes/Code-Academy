import { createContext, useState, useContext } from "react";

const SettingsContext = createContext();

export default function SettingsContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <SettingsContext.Provider value={{ theme, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettingsContext should be inside SettingsContext provider"
    );
  }

  return context;
}

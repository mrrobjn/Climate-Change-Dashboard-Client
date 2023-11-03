import { useEffect, useState } from "react";
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import getInitialTheme from "../utility/getInitialTheme";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(theme));
  }, [theme]);
  const handleChange = (item) => {
    localStorage.setItem("darkTheme", JSON.stringify(item));
    setTheme(item);
    const storageEvent = document.createEvent("StorageEvent");
    storageEvent.initStorageEvent(
      "storage",
      false,
      false,
      "darkTheme",
      theme,
      !theme,
      null,
      localStorage
    );
    window.dispatchEvent(storageEvent);
  };
  return (
    <>
      <DarkModeToggle
        size={50}
        onChange={(e) => handleChange(e)}
        isDarkMode={theme}
      />
    </>
  );
};

export default ThemeToggle;

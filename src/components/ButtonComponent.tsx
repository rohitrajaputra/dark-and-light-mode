import React from "react";
import { useTheme } from "../theme-context";

const ButtonComponent = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button onClick={() => toggleTheme()}>
      Toggle to {theme === "light-mode" ? "Dark" : "Light"}
    </button>
  );
};

export default ButtonComponent;

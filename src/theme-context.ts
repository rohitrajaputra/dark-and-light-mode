import { createContext, useContext } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: Function;
};

const defaultContext: ThemeContextType = {
  theme: "light-mode",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const useTheme = () => {
  return useContext(ThemeContext);
};

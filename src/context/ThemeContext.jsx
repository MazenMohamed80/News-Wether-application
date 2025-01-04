import { createContext, useReducer } from "react";

export const ThemeContext = createContext(null);
function ThemeReducer(state, action = null) {
  if (state == "light") {
    return "dark";
  } else {
    return "light";
  }
}

function ThemeProvider({ children }) {
  const [theme, toggleTheme] = useReducer(ThemeReducer, "dark");
  const values = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}
export default ThemeProvider;

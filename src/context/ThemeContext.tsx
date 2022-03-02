import { createContext, Dispatch, useContext, useReducer, ReactNode } from "react";
import { Style } from "../component/style/Style";
import Dark from "../component/style/Dark";
import Light from "../component/style/Light";

const ThemeContext = createContext<{ theme: Style,  setTheme?: Dispatch<string> }>({ theme: Dark });

const ThemeReducer = (_: Style, toUpdate: string) => {
  switch (toUpdate) {
    case 'dark': return Dark;
    default: return Light;
  }
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useReducer(ThemeReducer, Dark);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
}
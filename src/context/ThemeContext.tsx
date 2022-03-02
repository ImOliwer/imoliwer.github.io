import { createContext, Dispatch, useContext, useReducer, ReactNode, useEffect } from "react";
import { Style } from "../component/style/Style";
import Dark from "../component/style/Dark";
import Light from "../component/style/Light";

const ThemeContext = createContext<{ theme: Style,  setTheme?: Dispatch<string> }>({ theme: Dark });

const ThemeReducer = (_: Style, toUpdate: string) => {
  switch (toUpdate) {
    case 'dark': {
      localStorage.setItem("theme", toUpdate);
      return Dark;
    }
    default: {
      localStorage.setItem("theme", toUpdate);
      return Light;
    }
  }
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useReducer(ThemeReducer, Dark);

  useEffect(() => {
    let theme = localStorage.getItem("theme") || "dark";
    
    if (theme !== "dark" && theme !== "light") {
      theme = "dark";
    }

    setTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
}
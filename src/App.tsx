import React from "react";
import Navigation from "./component/Navigation";
import { Style } from "./component/style/Style";
import { useLang } from "./context/LangContext";
import { useTheme } from "./context/ThemeContext";
import { Lang } from "./lang/Lang";

export type ChildDownProps = {
  theme: { 
    current: Style;
    set?: React.Dispatch<string>;
  };
  lang: {
    current: Lang;
    set?: React.Dispatch<string>;
  }
}

export default function App() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();

  if (true) {
    return (
      <theme.maintenanceContainer>
        <h2>{lang.maintenance.title}</h2>
        <h2 style={{ fontSize: "26px" }}>{lang.maintenance.subtitle}</h2>
      </theme.maintenanceContainer>
    );
  }

  return (
    <theme.container>
      <Navigation downProps={{ 
        theme: { 
          current: theme, 
          set: setTheme
        },
        lang: {
          current: lang,
          set: setLang
        }
      }} />
    </theme.container>
  );
}
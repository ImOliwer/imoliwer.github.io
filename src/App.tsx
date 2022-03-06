import React, { useState } from "react";
import Navigation from "./component/Navigation";
import { Style } from "./component/style/Style";
import { useTheme } from "./context/ThemeContext";

export type ChildDownProps = {
  theme: { 
    current: Style;
    set?: React.Dispatch<string>;
  };
  page: {
    active: any | undefined;
    set: React.Dispatch<any | undefined>;
  };
}

export default function App() {
  const { theme, setTheme } = useTheme();
  const [activePage, setActivePage] = useState<any | undefined>();

  if (true) {
    return (
      <theme.maintenance.container>
        <h2>This site is currently undergoing maintenance.</h2>
        <h2 style={{ fontSize: "26px" }}>Follow the repository to be kept in the loop.</h2>
      </theme.maintenance.container>
    );
  }

  return (
    <theme.main.container>
      <Navigation downProps={{ 
        theme: { 
          current: theme, 
          set: setTheme
        },
        page: {
          active: activePage,
          set: setActivePage
        }
      }} />
      {activePage}
    </theme.main.container>
  );
}
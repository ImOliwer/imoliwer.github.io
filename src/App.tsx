import React, { useEffect, useState } from "react";
import Navigation from "./component/Navigation";
import { Style } from "./component/style/Style";
import { useTheme } from "./context/ThemeContext";

export type ChildDownProps = {
  theme: { 
    current: Style;
    set?: React.Dispatch<string>;
  };
  page: {
    activeItem: any | undefined;
    setItem: React.Dispatch<any | undefined>;

    activeSection: any | undefined;
    setSection: React.Dispatch<any | undefined>;
  };
}

export default function App() {
  const { theme, setTheme } = useTheme();
  const [activePage, setActivePage] = useState<any | undefined>();
  const [activeSection, setActiveSection] = useState<any | undefined>();

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
          activeItem: activePage,
          setItem: setActivePage,

          activeSection,
          setSection: setActiveSection
        }
      }} />
      {activePage}
    </theme.main.container>
  );
}
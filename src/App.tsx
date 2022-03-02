import { useLang } from "./context/LangContext";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();

  if (true) {
    return (
      <theme.maintenanceContainer>
        <h2>{lang.maintenanceHeadline}</h2>
        <h2 style={{ fontSize: "26px" }}>{lang.maintenanceSubline}</h2>
      </theme.maintenanceContainer>
    );
  }

  return (<></>);
}
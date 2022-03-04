import { ChildDownProps } from "../App";

export default function Navigation({ downProps }: { downProps: ChildDownProps }) {
  const {
    theme: {
      current: theme,
      set: setTheme
    },
    lang: {
      current: lang,
      set: setLang
    }
  } = downProps;

  return (
    <theme.navigationContainer>
      
    </theme.navigationContainer>
  );
}
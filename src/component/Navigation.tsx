import { ChildDownProps } from "../App";
import { returnWith } from "../util/ValueHelper";

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

  return returnWith(theme.navigation, nav => (
    <nav.container>
      {returnWith(nav.header, header => (
        <header.container>
          <header.title>ImOliwer</header.title>
          <header.subtitle>{lang.navbar.subtitle}</header.subtitle>
        </header.container>
      ))}
      <nav.body>
        <nav.divider/>
        {returnWith(nav.content, content => (
          <content.container>
            
          </content.container>
        ))}
        <nav.divider/>
      </nav.body>
      {returnWith(nav.footer, footer => (
        <footer.container>

        </footer.container>
      ))}
    </nav.container>
  ));
}
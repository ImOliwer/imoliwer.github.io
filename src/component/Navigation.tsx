import { useState } from "react";
import { ChildDownProps } from "../App";
import Group from "../data/docs/NavigationData";
import { returnWith } from "../util/ValueHelper";

export default function Navigation({ downProps }: { downProps: ChildDownProps }) {
  const {
    theme: {
      current: theme,
      set: setTheme
    },
    page: {
      set: setActivePage
    }
  } = downProps;
  const [activeItem, setActiveItem] = useState<string | undefined>();

  return returnWith(theme.navigation, nav => (
    <nav.container>
      <nav.header.container>
        <nav.header.title>ImOliwer</nav.header.title>
        <nav.header.subtitle>Repository Documentation</nav.header.subtitle>
      </nav.header.container>
      <nav.body>
        <nav.divider/>
        <nav.content.container>
          {Group.map(category => (
            <nav.content.category.container>
              <nav.content.category.title>
                {category.name}
              </nav.content.category.title>
              {category.items.map(item => (
                <nav.content.category.item.container>
                  <nav.content.category.item.navigator onClick={() => {
                    if (activeItem === item.id) {
                      return;
                    }  
                    setActiveItem(item.id);
                    setActivePage(item.page);
                  }}>
                    {(activeItem === item.id && item.sections.length > 0 ? "+ " : "") + item.name}
                  </nav.content.category.item.navigator>
                  {activeItem === item.id && item.sections.map(section => (
                    <nav.content.category.item.section>
                      {section.displayName}
                    </nav.content.category.item.section>
                  ))}
                </nav.content.category.item.container>
              ))}
            </nav.content.category.container>
          ))}
        </nav.content.container>
        <nav.divider/>
      </nav.body>
      <nav.footer.container>

      </nav.footer.container>
    </nav.container>
  ));
}
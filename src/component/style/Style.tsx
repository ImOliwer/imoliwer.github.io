import { StyledComponent } from "styled-components";

type DivComponent = StyledComponent<"div", any, {}, never>;
type H2Component = StyledComponent<"h2", any, {}, never>;
type PComponent = StyledComponent<"p", any, {}, never>;

export type Style = {
  name: string;

  // maintenance
  maintenance: {
    container: DivComponent;
  }

  // main
  main: {
    container: DivComponent;
  }

  // navigation
  navigation: {
    container: DivComponent;
    header: {
      container: DivComponent;
      title: H2Component;
      subtitle: H2Component;
    };
    body: DivComponent;
    content: {
      container: DivComponent;
      category: {
        container: DivComponent;
        title: PComponent;
        item: {
          container: DivComponent;
          navigator: PComponent;
          section: PComponent;
        }
      };
    };
    divider: DivComponent;
    footer: {
      container: DivComponent;
    };
  }
}
import { StyledComponent } from "styled-components";

type DivComponent = StyledComponent<"div", any, {}, never>;
type H2Component = StyledComponent<"h2", any, {}, never>;

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
    };
    divider: DivComponent;
    footer: {
      container: DivComponent;
    };
  }
}
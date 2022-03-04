import { StyledComponent } from "styled-components";

export type Style = {
  name: string;
  maintenanceContainer: StyledComponent<"div", any, {}, never>;
  container: StyledComponent<"div", any, {}, never>;
  navigationContainer: StyledComponent<"div", any, {}, never>;
}
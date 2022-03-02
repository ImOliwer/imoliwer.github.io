import { StyledComponent } from "styled-components";

export type Style = {
  name: string;
  maintenanceContainer: StyledComponent<"div", any, {}, never>;
}
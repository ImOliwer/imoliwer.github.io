import { ForumAPINavigator, ForumInstallationNavigator } from "./Forum";

export type Section = {
  displayName: string;
  target: string;
};

export type Navigable = {
  id: string;
  name: string;
  sections: Section[];
  page: any;
};

export type Category = {
  name: string;
  items: Navigable[];
};

const Group: Category[] = [
  {
    name: "Setup & Installation",
    items: [
      ForumInstallationNavigator
    ]
  },
  {
    name: "API(s)",
    items: [
      ForumAPINavigator
    ]
  }
];

export default Group;
import APIForumPage from "../../component/docs/api/Forum";
import InstallationForumPage from "../../component/docs/installation/Forum";
import { Navigable } from "./NavigationData";

export const ForumInstallationNavigator: Navigable = {
  id: "installation_forum",
  name: "Forum",
  page: InstallationForumPage,
  sections: []
}

export const ForumAPINavigator: Navigable = {
  id: "api_forum",
  name: "Forum",
  page: APIForumPage,
  sections: [
    {
      id: "el_api_accounts/register",
      displayName: "POST /accounts/register",
      target: "#account-register"
    },
    {
      id: "el_api_accounts/login",
      displayName: "POST /accounts/login",
      target: "#account-login"
    },
    {
      id: "el_api_accounts/{id}",
      displayName: "GET /accounts/{id}",
      target: "#account-fetch"
    }
  ]
}
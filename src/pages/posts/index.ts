import { chainAuthorized } from "@shared/chainAuthorized";
import { currentRoute } from "./model";
import { Posts } from "./ui";

export const PostsRoute = {
  view: Posts,
  route: chainAuthorized(currentRoute),
};

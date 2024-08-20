import { chainAuthorized } from "@shared/chainAuthorized";
import { currentRoute } from "./model";
import { Post } from "./ui";

export const PostRoute = {
  view: Post,
  route: chainAuthorized(currentRoute),
};

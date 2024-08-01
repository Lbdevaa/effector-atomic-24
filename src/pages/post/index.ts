import { currentRoute } from "./model";
import { Post } from "./ui";

export const PostRoute = {
  view: Post,
  route: currentRoute,
};

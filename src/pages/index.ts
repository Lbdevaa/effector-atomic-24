import { createRoutesView } from "atomic-router-react";
import { SignUpRoute } from "./sign-up";
import { SignInRoute } from "./sign-in";
import { PostRoute } from "./post";
import { PostsRoute } from "./posts";

export const Pages = createRoutesView({
  routes: [SignUpRoute, SignInRoute, PostRoute, PostsRoute],
});

import { createHistoryRouter, createRoute } from "atomic-router";
import { sample } from "effector";
import { createBrowserHistory } from "history";
import { appStarted } from "./init";

export const routes = {
  auth: {
    signIn: createRoute(),
    signUp: createRoute(),
  },
  private: {
    posts: createRoute(),
    post: createRoute<{ postId: string }>(),
  },
};

export const mappedRoutes = [
  {
    route: routes.auth.signIn,
    path: "/sign-in",
  },
  {
    route: routes.auth.signUp,
    path: "/sign-up",
  },
  {
    route: routes.private.posts,
    path: "/posts",
  },
  {
    route: routes.private.post,
    path: "/posts/:postId",
  },
];

export const router = createHistoryRouter({
  routes: mappedRoutes,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});

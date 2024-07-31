import { createHistoryRouter, createRoute } from "atomic-router";

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
    path: "/auth/sign-in",
  },
  {
    route: routes.auth.signUp,
    path: "/auth/sign-up",
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

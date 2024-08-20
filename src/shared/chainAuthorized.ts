import {
  chainRoute,
  redirect,
  RouteInstance,
  RouteParams,
  RouteParamsAndQuery,
} from "atomic-router";
import { createEvent, sample } from "effector";
import { $isAuth } from "./auth";
import { routes } from "./config/router";

export const chainAuthorized = <
  Params extends RouteParams & Record<string, unknown>
>(
  route: RouteInstance<Params>
) => {
  const checkSessionStarted = createEvent<RouteParamsAndQuery<Params>>();

  const alreadyAuthorized = sample({
    clock: checkSessionStarted,
    filter: $isAuth,
  });

  const forbidden = sample({
    clock: checkSessionStarted,
    filter: $isAuth.map((isAuth) => !isAuth),
  });

  redirect({
    clock: forbidden,
    route: routes.auth.signIn,
  });

  return chainRoute({
    route,
    beforeOpen: checkSessionStarted,
    openOn: [alreadyAuthorized], // пускать
    cancelOn: [forbidden], // не пускать
  });
};

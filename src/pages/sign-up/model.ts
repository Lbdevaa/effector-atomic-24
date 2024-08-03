import { signUp } from "@shared/api/auth";
import { tokenReceived } from "@shared/auth";
import { routes } from "@shared/config/router";
import { showErrorMessageFx } from "@shared/notification";
import { redirect } from "atomic-router";
import { createEffect, sample } from "effector";

export const currentRoute = routes.auth.signUp;

export const signUpFx = createEffect(signUp);

sample({
  clock: signUpFx.doneData,
  fn: (clk) => clk.accessToken,
  target: tokenReceived,
});

redirect({
  clock: signUpFx.done,
  route: routes.private.posts,
});

sample({
  clock: signUpFx.failData,
  target: showErrorMessageFx,
});

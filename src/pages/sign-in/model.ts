import { signIn } from "@shared/api/auth";
import { tokenReceived } from "@shared/auth";
import { routes } from "@shared/config/router";
import { showErrorMessageFx } from "@shared/notification";
import { redirect } from "atomic-router";
import { createEffect, sample } from "effector";

export const currentRoute = routes.auth.signIn;

// эффект
export const signInFx = createEffect(signIn);

sample({
  clock: signInFx.doneData,
  fn: (clk) => clk.accessToken, // response sign In
  target: tokenReceived, // передаем в store tokenReceived
});

redirect({
  clock: signInFx.done,
  route: routes.private.posts,
});

sample({
  clock: signInFx.failData,
  target: showErrorMessageFx,
});

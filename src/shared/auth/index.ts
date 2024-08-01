import { routes } from "@shared/config/router";
import { redirect } from "atomic-router";
import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";

// работа с токеном: store + events
const $token = createStore("");
export const tokenReceived = createEvent<string>();
export const tokenExpired = createEvent();

// привязка эвентов
// src/shared/config/router.ts#L40, иной подход:
$token
  .on(tokenReceived, (_, token) => token) // запись при tokenReceived
  .reset(tokenExpired); // очистка стора при эвенте tokenExpired

// стор скопированное значение из $token string -> boolean
// всегда свежее значение
export const $isAuth = $token.map((token) => !!token);

// при обновлении страницы
// token будет в lstorage
// авторизация не будет теряться
persist({
  key: "token",
  store: $token,
  serialize: (value) => value,
  deserialize: (value) => value,
});

// аналог sample, сделает сразу редирект в зависимости от tokenExpired
redirect({
  clock: tokenExpired,
  route: routes.auth.signIn,
});

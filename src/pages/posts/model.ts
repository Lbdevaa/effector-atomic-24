import { getPosts } from "@shared/api/posts";
import { chainAuthorized } from "@shared/chainAuthorized";
import { routes } from "@shared/config/router";
import { showErrorMessageFx } from "@shared/notification";
import { chainRoute } from "atomic-router";
import { combine, createEffect, createEvent, restore, sample } from "effector";

export const currentRoute = routes.private.posts;

export const getPostsFx = createEffect(getPosts);
// триггер getPostsFx будет наполнять массив постов, [] - init
export const $posts = restore(getPostsFx, []);

export const paginationChanged = createEvent<number>();
export const queryChanged = createEvent<string>();
const $pagination = restore(paginationChanged, 1);
const $query = restore(queryChanged, "");

// когда query store или pagination store меняется, будет реагировать paramsStore
export const $paramsStore = combine({ _q: $query, _page: $pagination });

sample({
  clock: $paramsStore,
  target: getPostsFx,
});

chainRoute({
  route: chainAuthorized(currentRoute),
  beforeOpen: {
    effect: getPostsFx,
    mapParams: () => ({ _page: 1 }),
  },
});

sample({
  clock: getPostsFx.failData,
  target: showErrorMessageFx,
});

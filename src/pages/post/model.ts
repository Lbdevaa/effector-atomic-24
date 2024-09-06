import { getPostById, updatePost } from "@shared/api/posts";
import { chainAuthorized } from "@shared/chainAuthorized";
import { routes } from "@shared/config/router";
import { showErrorMessageFx, showSuccessMessageFx } from "@shared/notification";
import { chainRoute } from "atomic-router";
import { createEffect, restore, sample } from "effector";

export const currentRoute = routes.private.post;

export const getPostFx = createEffect(getPostById);
export const $post = restore(getPostFx, null);

export const updatePostFx = createEffect(updatePost);

export const routePostLoaded = chainRoute({
  route: chainAuthorized(currentRoute),
  beforeOpen: {
    effect: getPostFx,
    mapParams: (params) => params.params.postId, // url params
  },
});


// after upd post get fresh
sample({
  clock: updatePostFx.doneData,
  source: routePostLoaded.$params, // get params store
  fn: (src) => src.postId, // use params
  target: getPostFx, // run
})

sample({
  clock: updatePostFx.doneData,
  fn: () => "Post updated",
  target: showSuccessMessageFx
})

// errors
sample({
  clock: getPostFx.failData,
  target: showErrorMessageFx
})
sample({
  clock: updatePostFx.failData,
  target: showErrorMessageFx
})
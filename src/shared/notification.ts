import { message } from "antd";
import { createEffect } from "effector";

export const showErrorMessageFx = createEffect((error: Error) => {
  message.error(error.message);
});

export const showSuccessMessageFx = createEffect((text: string) => {
  message.success(text);
});

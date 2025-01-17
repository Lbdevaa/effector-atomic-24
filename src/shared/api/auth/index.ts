import { api, errorHandler } from "../api";
import { BodyAuth, ResponseAuth } from "./model";

export const signIn = async (json: BodyAuth) => {
  try {
    const res = await api.post("login", { json }).json<ResponseAuth>();

    return res;
  } catch (e) {
    return await errorHandler(e);
  }
};

export const signUp = async (json: BodyAuth) => {
  try {
    const res = await api.post("register", { json }).json<ResponseAuth>();

    return res;
  } catch (error) {
    return await errorHandler(error);
  }
};
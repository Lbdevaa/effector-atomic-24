import { api } from "../api";
import { ParamsPosts, ResponsePosts } from "./model";

const getToken = () => `Bearer ${localStorage.getItem("token")}`;

export const getPosts = async (params?: ParamsPosts) =>
  api
    .get("posts", {
      searchParams: params,
      headers: { Authorization: getToken() },
    })
    .json<ResponsePosts[]>();

export const getPostById = async (id: string) =>
  api
    .get(`posts/${id}`, {
      headers: { Authorization: getToken() },
    })
    .json<ResponsePosts>();

export const updatePost = (body: ResponsePosts) =>
  api
    .put(`posts/${body.id}`, {
      json: body,
      headers: { Authorization: getToken() },
    })
    .json<ResponsePosts>();

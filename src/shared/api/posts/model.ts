export type ResponsePosts = {
  userId: number;
  id: number;
  title: string;
  body: string;
  total: number;
};

export type ParamsPosts = {
  _q?: string;
  _page?: number;
};

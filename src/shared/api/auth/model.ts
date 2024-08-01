export type BodyAuth = {
  email: string;
  password: string;
};

export type ResponseAuth = {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
};

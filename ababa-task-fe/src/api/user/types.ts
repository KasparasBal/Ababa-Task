export type LoginAuthorization = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export type SingUpAuthorization = {
  name: string;
  email: string;
  password: string;
};

export type SignUpResponse = {
  id: string;
  name: string;
  email: string;
};

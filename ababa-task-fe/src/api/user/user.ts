import { post } from "../shared/methods";
import {
  LoginResponse,
  LoginAuthorization,
  SignUpResponse,
  SingUpAuthorization,
} from "./types";

export async function postLogin(
  authorization: LoginAuthorization
): Promise<LoginResponse> {
  const { data } = await post<LoginAuthorization, LoginResponse>(
    "auth/login",
    authorization
  );
  return data;
}

export async function postSignUp(
  authorization: SingUpAuthorization
): Promise<SignUpResponse> {
  const { data } = await post<SingUpAuthorization, SignUpResponse>(
    "auth/signup",
    authorization
  );
  return data;
}

import { UserModel } from "../models/user";
import jwt from "jsonwebtoken";
import { sha256 } from "js-sha256";

type UserSignIn = {
  name: string;
  email: string;
  password: string;
};

type UserLogin = {
  email: string;
  password: string;
};

const signUp = async (userData: UserSignIn) => {
  const user = new UserModel({
    ...userData,
    password: sha256(userData.password),
  });
  await user.save();
};

const login = async (userLogin: UserLogin): Promise<string> => {
  const user = await UserModel.findOne({
    email: userLogin.email.toLowerCase(),
  });
  if (!user) {
    throw new Error("User not found");
  }
  if (sha256(userLogin.password) === user.password) {
    const token = jwt.sign(
      {
        email: user.email,
      },
      `${process.env.API_SECRET_KEY}`,
      {
        expiresIn: process.env.EXPIRE_TIME,
      }
    );
    return token;
  } else {
    throw new Error("Invalid password");
  }
};

export { signUp, login };

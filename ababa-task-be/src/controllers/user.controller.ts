import express from "express";
import * as userServices from "../services/user.service";

const signUp = async (req: express.Request, res: express.Response) => {
  await userServices.signUp(req.body);
  res.send({ status: "success" });
};

const login = async (req: express.Request, res: express.Response) => {
  const token = await userServices.login(req.body);
  res.send({ token: token });
};

export { signUp, login };

import User from "../models/userdb.js";
import { registerUser, loginUser } from "./commonOperations.js";

// Login - POST Request
export const postRegisterUser = async (req, res) => {
  const registerResponse = await registerUser(User, req.body);

  if(registerResponse && registerResponse.cookie) res.cookie("x-access-token", registerResponse.cookie);

  res.json(registerResponse);
};

// Register - POST Request
export const postLoginUser = async (req, res) => {
  const loginResponse = await loginUser(User, req.body);
  
  if(loginResponse && loginResponse.cookie) res.cookie("x-access-token", loginResponse.cookie);

  res.set('Access-Control-Allow-Origin', "http://localhost:3000");
  res.json(loginResponse);
};

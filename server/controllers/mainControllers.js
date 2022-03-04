import User from "../models/userdb.js";
import { registerUser, loginUser } from "./commonOperations.js";

// Login - POST Request
export const postRegisterUser = async (req, res) => {
  const registerResponse = await registerUser(User, req.body);

  if(registerResponse && registerResponse.cookie) res.cookie("x-access-token", registerResponse.cookie);

  res.json(registerResponse);
};

// Register - POST Request
export const postLoginUser = (req, res) => {
  const loginResponse = loginUser(User, req.body);
  
  if(loginResponse && loginResponse.cookie) res.cookie("x-access-token", loginResponse.cookie);

  res.json(loginResponse);
};


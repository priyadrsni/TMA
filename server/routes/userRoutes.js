import express from "express";
import { postLoginUser, postRegisterUser } from "../controllers/userControllers.js";

console.log(express.Router());

const router = express.Router();

router.post('/signup', postRegisterUser);
router.post('/login', postLoginUser);

export default router;
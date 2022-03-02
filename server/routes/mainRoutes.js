import express from "express";
import controllers from "./controllers/mainControllers";

console.log(express.Router());

const router = express.Router();

router.get('/', controllers.getHomePage);
router.post('/login', controllers.postLoginPage);
router.post('/signup', controllers.postSignupPage);
import express from "express";
const router = express.Router();

import signupController from "./controllers/signupController";

import loginController from "./controllers/loginController";

import getCurrentUserController from "./controllers/getCurrentUserController";

import userInfoController from "./controllers/userInfoController";

import logoutController from "./controllers/logoutController";

import editUserController from "./controllers/editUser";
import deleteUserController from "./controllers/deleteUser";

// Auth Routes
router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.get("/getcurusr", getCurrentUserController);
router.post("/getuserinfo", userInfoController);
router.patch("/user/edit", editUserController);
router.delete("/user/delete", deleteUserController);

export default router;

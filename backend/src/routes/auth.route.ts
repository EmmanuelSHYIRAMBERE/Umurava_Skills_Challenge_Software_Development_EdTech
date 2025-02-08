import express from "express";
import AuthController from "../controllers/auth.controller";
import AuthService from "../services/auth.service";

const authRouter = express.Router();

const authService = new AuthService();
const authController = new AuthController(authService);

// In your routes file
authRouter.post("/login", authController.logIn);
authRouter.post("/verifyEmail", authController.verifyEmail);
authRouter.post("/change-password", authController.changePassword);
authRouter.post("/forgot-password", authController.forgotPassword);
authRouter.post("/reset-password", authController.resetPassword);
authRouter.post("/logout", authController.logout);

export default authRouter;

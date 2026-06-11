import express from "express";
import { register, login, getAllUsers, verifyEmail, resendVerificationOTP, forgotPassword, resetPassword } from "../controllers/authController.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/register", register);
router.post("/login", login);
router.post("/verify-email", verifyEmail);
router.post("/resend-verification",resendVerificationOTP);
router.post("/forgot-password",forgotPassword);
router.post( "/reset-password",resetPassword);
export default router;
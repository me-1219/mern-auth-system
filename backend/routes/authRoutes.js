import express from "express";
import { register, login, getAllUsers } from "../controllers/authController.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/register", register);
router.post("/login", login);
export default router;
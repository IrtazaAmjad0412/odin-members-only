import express from "express";
import { renderLoginForm, loginUser, logoutUser } from "../controllers/authController.js";
import { loginValidation } from "../validators/authValidators.js";

const router = express.Router();

router.get("/login", renderLoginForm);
router.post("/login", loginValidation, loginUser);
router.get("/logout", logoutUser);

export default router;

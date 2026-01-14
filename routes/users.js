import express from "express";
import { renderSignUpForm, createUser } from "../controllers/usersController.js";
import { signUpValidation } from "../validators/userValidators.js";

const router = express.Router();

router.get("/signup", renderSignUpForm);
router.post("/signup", signUpValidation, createUser);

export default router;

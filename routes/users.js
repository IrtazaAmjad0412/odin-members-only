import express from "express";
import { renderSignUpForm } from "../controllers/usersController.js";

const router = express.Router();

router.get("/signup", renderSignUpForm);

export default router;

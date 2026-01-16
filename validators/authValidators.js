import { body } from "express-validator";

export const loginValidation = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email")
    .normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
];

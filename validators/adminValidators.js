import { body } from "express-validator";

export const adminValidation = [
  body("passcode").isString().notEmpty().withMessage("Passcode is required"),
];

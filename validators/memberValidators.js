import { body } from "express-validator";

export const memberValidation = [
  body("passcode").notEmpty().withMessage("Passcode is required"),
];

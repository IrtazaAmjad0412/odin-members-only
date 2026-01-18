import express from "express";
import {
  renderAdminForm,
  upgradeUserMembershipToAdmin,
} from "../controllers/adminController.js";
import { adminValidation } from "../validators/adminValidators.js";

const router = express.Router();

router.get("/join", renderAdminForm);
router.post("/join", adminValidation, upgradeUserMembershipToAdmin);

export default router;

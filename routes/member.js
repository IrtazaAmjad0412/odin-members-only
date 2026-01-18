import express from "express";
import {
  renderMemberForm,
  upgradeUserMembershipToMember,
} from "../controllers/memberController.js";
import { memberValidation } from "../validators/memberValidators.js";

const router = express.Router();

router.get("/join", renderMemberForm);
router.post("/join", memberValidation, upgradeUserMembershipToMember);

export default router;

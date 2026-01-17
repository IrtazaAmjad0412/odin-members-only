import express from "express";
import {
  renderMemberForm,
  upgradeUserMembership,
} from "../controllers/memberController.js";
import { memberValidation } from "../validators/memberValidators.js";

const router = express.Router();

router.get("/join", renderMemberForm);
router.post("/join", memberValidation, upgradeUserMembership);

export default router;

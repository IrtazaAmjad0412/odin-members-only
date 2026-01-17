import dotenv from "dotenv";
import { validationResult } from "express-validator";
import { updateMembershipStatus } from "../db/queries.js";

dotenv.config();

export const renderMemberForm = (req, res) => {
  try {
    res.render("memberForm", {
      appTitle: "Odin Clubhouse",
      pageTitle: "Member Form",
      errors: [],
      oldInput: [],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const upgradeUserMembership = async (req, res) => {
  try {
    const { passcode } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("memberForm", {
        appTitle: "Odin Clubhouse",
        pageTitle: "Member Form",
        errors: errors.array(),
        oldInput: req.body,
      });
    }
    if (!req.user || req.user.membership_status !== "basic") {
      return res.redirect("/");
    }
    if (passcode !== process.env.SECRET_PASSCODE) {
      return res.status(400).render("memberForm", {
        appTitle: "Odin Clubhouse",
        pageTitle: "Member Form",
        errors: [{ msg: "Incorrect passcode" }],
        oldInput: req.body,
      });
    }
    await updateMembershipStatus("member", req.user.id);
    req.user.membership_status = "member";
    req.logIn(req.user, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Server Error");
      }
      res.redirect("/");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

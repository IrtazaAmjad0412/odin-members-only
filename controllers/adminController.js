import dotenv from "dotenv";
import { validationResult } from "express-validator";
import { updateMembershipStatus } from "../db/queries.js";

dotenv.config();

export const renderAdminForm = (req, res) => {
  try {
    res.render("adminForm", {
      appTitle: "Odin Clubhouse",
      pageTitle: "Admin Form",
      errors: [],
      oldInput: [],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const upgradeUserMembershipToAdmin = async (req, res) => {
  try {
    const { passcode } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("adminForm", {
        appTitle: "Odin Clubhouse",
        pageTitle: "Admin Form",
        errors: errors.array(),
        oldInput: req.body,
      });
    }
    if (!req.user || req.user.membership_status === "admin") {
      return res.redirect("/");
    }
    if (passcode !== process.env.ADMIN_SECRET_PASSCODE) {
      return res.status(400).render("adminForm", {
        appTitle: "Odin Clubhouse",
        pageTitle: "Admin Form",
        errors: [{ msg: "Incorrect passcode" }],
        oldInput: req.body,
      });
    }
    await updateMembershipStatus("admin", req.user.id);
    req.user.membership_status = "admin";
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

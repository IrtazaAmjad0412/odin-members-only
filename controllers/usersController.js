export const renderSignUpForm = (req, res) => {
  try {
    res.render("signUpForm", { appTitle: "Odin Clubhouse", pageTitle: "Sign Up Form" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

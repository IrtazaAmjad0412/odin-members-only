export const renderSignUpForm = (req, res) => {
  try {
    res.render("signUpForm", { title: "Sign-In Form" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

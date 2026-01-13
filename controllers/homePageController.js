export const renderHomePage = (req, res) => {
  try {
    res.render("homePage", { title: "Odin Clubhouse" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

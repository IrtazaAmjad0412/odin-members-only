import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import path from "path";
import { fileURLToPath } from "url";
import homePageRouter from "./routes/homePage.js";
import userRouter from "./routes/users.js";
import { initializeLocalStrategy } from "./config/passport.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false })
);
initializeLocalStrategy();
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use("/", homePageRouter);
app.use("/users", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(`Express App launched successfully! Server running on port ${PORT}.`);
});

const { Router } = require("express");
const User = require("../models/user");
const {createTokenForUser} = require("../services/authentication") 

const router = Router();




router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});
router.get("/contact", (req, res) => {
  return res.render("contact");
});
router.get("/about", (req, res) => {
  return res.render("about");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);

    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect Email or Password",
    });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("/");
});

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  
  try {
    const user = new User({
      fullName: fullName,
      email: email,
      password: password
    });

    await user.save();

    // Generate token for the newly signed-up user
    const token = await createTokenForUser(user);

    // Set token as a cookie
    return res.cookie("token", token).redirect("/");

  } catch (error) {
    console.error("Error signing up:", error);
    return res.render("signup", {
      error: "An error occurred while signing up. Please try again later.",
    });
  }
});


module.exports = router;

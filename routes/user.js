const { Router } = require("express");
const User = require("../models/user");

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
  console.log("/signup :: req.body:: " ,req.body);
  //  const User = {
  //   email: email,
  //   fullName:fullName,
  //   password: password
  //   // Add other user properties as needed
  // };
  // await User.create({
  //   fullName: fullName,
  //   email: email,
  //   password: password,
  // });  
  
  const user= new User({
    fullName: fullName,
    email: email,
    password: password
  })

  await user.save()
  return res.redirect("/signin");
});


module.exports = router;

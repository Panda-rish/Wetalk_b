
const dotenv=require("dotenv");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookiePaser = require("cookie-parser");
const Blog = require("./models/blog");
const commentRoutes=require("./routes/comment");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const {checkForAuthenticationCookie,} = require("./middlewares/authentication");
const connectDB=require("./db/index.js")



dotenv.config({
  path:'./env'
})

const app = express();
mongoose.set("strictQuery", true);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));


app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
  
});
app.get("/user/about", async (req, res) => {
  
  res.render("about", {
    user: req.user,
  })
  });
  app.get("/user/contact", async (req, res) => {
   
    res.render("contact", {
      user: req.user,
      
    });
  
});


app.use("/comments", commentRoutes);
app.use("/user", userRoute);

app.use("/blog", blogRoute);
 
connectDB()
.then(()=>{

  app.listen(process.env.PORT, ()=>{
    console.log(`server is running at http://localhost:${process.env.PORT}`)});
}).catch((err)=>{
   console.error("failed to connect db",err)
   process.exit(1)
});
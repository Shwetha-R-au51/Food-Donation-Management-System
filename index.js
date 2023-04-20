const express = require("express");
const app = express();
const passport= require("passport");
const flash= require("connect-flash");
const session=require("express-sessions");

const homeRoutes = require("./routes/home");
const authRoutes = require("./routes/auth");
const adminRoutes= require("./routes/admin");
const agentRoutes = require("./routes/agent");
const donorRoutes = require("./routes/donor");

require("dotenv").config();
require("./config/dbconnection")();
require("./config/passport")(passport);

app.use(homeRoutes);
app.use(authRoutes);
app.use(agentRoutes);
app.use(donorRoutes);
app.use(adminRoutes);
app.use((req,res)=>{
    res.status(404).render("404 page",{
        title: "page not found"
    })
})

app.get("/login",(req,res)=>{
    res.render("login.ejs")
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("server running on port 3000");
});
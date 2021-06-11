const express = require("express");
const cors = require("cors");
// upload file image
const fileUpload = require("express-fileupload");

const mongooseConfig = require("./config/mongooseConfig");
const router = require("./routes/index");
const Cookies = require("cookies");
const cookieParser = require("cookie-parser");

const app = express();

mongooseConfig.connect();

// upload file image
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(cookieParser());

var session = require("express-session");
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "1234567abc",
    cookie: { maxAge: 60000 },
  })
);

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("http://localhost:3000"));

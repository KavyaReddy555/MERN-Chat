const express = require("express");
const app = express();

const dotenv = require("dotenv");

const databaseConnect = require("./config/database");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const messengerRoute = require("./routes/messengerRoute");

dotenv.config({
  path: "backend/config/config.env",
});

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Referrer-Policy", "no-referrer");
  next();
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/messenger", authRouter);
app.use("/api/messenger", messengerRoute);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("This is from backend Sever");
});

databaseConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

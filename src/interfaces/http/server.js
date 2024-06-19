const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes");
const middleware = require("../../middleware/index");

const server = express();
const middlewareClass = new middleware();

server.get("/integration", middlewareClass.decodeToken, (req, res) => {
  res.json({ message: "Hello World" });
});

server.use(cors());
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,  Authorization, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use(mainRouter);

module.exports = server;

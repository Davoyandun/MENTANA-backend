const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

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

module.exports = server;

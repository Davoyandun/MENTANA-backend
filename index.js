const server = require("./src/interfaces/http/server.js");
const dotenv = require("dotenv");
dotenv.config();
let PORT = 3001;

if (process.env.PORT) {
  PORT = process.env.PORT;
}

server.listen(PORT, async () => {
  try {
    // await sequelize.sync({ force: false });
    console.log("server listen on port", PORT);
  } catch (error) {
    console.error(error.message);
  }
});

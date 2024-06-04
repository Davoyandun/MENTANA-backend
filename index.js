const server = require("./src/interfaces/http/server.js");
const dotenv = require("dotenv");
dotenv.config();
const { PORT } = process.env;

server.listen(PORT, async () => {
  try {
    // await sequelize.sync({ force: false });
    console.log("server listen on port", PORT);
  } catch (error) {
    console.error(error.message);
  }
});
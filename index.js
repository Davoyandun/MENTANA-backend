const server = require("./src/interfaces/http/server.js");
const { sequelize } = require("./src/infrastructure/database/sequelize.js");
const dotenv = require("dotenv");
dotenv.config();
let PORT = 3001;

if (process.env.PORT) {
  PORT = process.env.PORT;
}

server.listen(PORT, async () => {
  try {
    await sequelize.sync({ force: false });
    // eslint-disable-next-line no-console
    console.log("server listen on port", PORT);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
  }
});

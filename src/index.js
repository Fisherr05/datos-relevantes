import app from "./app.js";
import { sequelize } from "./database/database.js";
import { sequelize2 } from "./database/database2.js";

import "./models/user.js";
import "dotenv/config.js";


async function main() {
  try {
    await sequelize.authenticate();
    await sequelize2.sync();
    console.log("Connection has been established successfully.");
    var port = 4000; //Cambiarlo por el puerto que se use
    app.listen(port);
    console.log("Listening on port", port);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();

const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  host: process.env["DB_HOST"],
  database: process.env["DB_NAME"],
  username: process.env["DB_USER"],
  password: process.env["DB_PASS"] !== "" ? process.env["DB_PASS"] : null,
  port: process.env["DB_PORT"] !== "" ? process.env["DB_PORT"] : null,
  dialect: "postgres"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;

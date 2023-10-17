const cron = require("node-cron");
const { Pool } = require("./db/dbconnection");
const { logdataFile, sqlData } = require("./middlewares/upload");

/* ---------------------- Database connection ---------------------- */
Pool.getConnection(function (err) {
  if (err) {
    console.error(
      "Database connection error: " + JSON.stringify(err.message, undefined, 2)
    );
  } else {
    console.log("Database connection successfully!");
  }
});

/* -------------- Cron job for the log file in every 5 seconds -------------- */
cron.schedule("*/5 * * * * *", function () {
  /** Create file and upload the file using the node-cron */
  console.log("Scheduler started");
  logdataFile();

  /** Create file and overwrite the file using the MYSQL data */
  console.log("Running cron job");
  sqlData();
});

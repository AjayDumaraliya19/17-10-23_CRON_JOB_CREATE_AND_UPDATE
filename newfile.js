// // // Require the node-cron and fs modules
// // const cron = require("node-cron");
// // const fs = require("fs");
// // const path = require("path");

// // /** Created the log path directory based on the current date */
// // function logDirectory() {
// //   /** Get the current date */
// //   const currentDate = new Date();

// //   /** Get the current date based on the year, month & hour */
// //   const currentYear = currentDate.getFullYear();
// //   const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
// //   const currentDay = currentDate.getDate().toString().padStart(2, "0");
// //   const currentHour = currentDate.getHours().toString().padStart(2, "0");

// //   /** Created the folder in YYYYMMDD format */
// //   const folderName = `${currentYear}${currentMonth}${currentDay}`;

// //   /** Create the folder path */
// //   const folderPath = path.join(__dirname, "./LogFile/", folderName);

// //   /** Create the folder if it doesn't exist */
// //   if (!fs.existsSync(folderPath)) {
// //     fs.mkdirSync(folderPath, { recursive: true });
// //   }

// //   /** Define the file name using the current hour and second */
// //   const currentSecond = currentDate.getSeconds().toString().padStart(2, "0");
// //   const fileName = `${currentHour}${currentSecond}.txt`;

// //   /** Construct the full file path */
// //   const filePath = path.join(folderPath, fileName);
// //   return filePath;
// // }

// // // Schedule a task to run every 5 seconds
// // cron.schedule("*/5 * * * * *", function () {
// //   logdata();
// // });

// // const logdata = async () => {
// //   const logMsg = `This file was created by a node-cron job \n`;

// //   /** Get the log directory */
// //   const logDir = await logDirectory();
// //   console.log(logDir);

// //   /** Append the log message to the log file */
// //   fs.appendFile(logDir, logMsg, (err) => {
// //     if (err) {
// //       console.error("Error writing to log file:", err);
// //     }
// //   });
// // };

// // Require the node-cron and fs modules
// const cron = require("node-cron");
// const fs = require("fs");
// const path = require("path");

// /** Created the log path directory based on the current date */
// function logDirectory(baseDir) {
//   /** Get the current date */
//   const currentDate = new Date();

//   /** Get the current date based on the year, month & hour */
//   const currentYear = currentDate.getFullYear();
//   const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
//   const currentDay = currentDate.getDate().toString().padStart(2, "0");
//   const currentHour = currentDate.getHours().toString().padStart(2, "0");

//   /** Created the folder in YYYYMMDD format */
//   const folderName = `${currentYear}${currentMonth}${currentDay}`;

//   /** Create the folder path */
//   const folderPath = path.join(baseDir, folderName);

//   /** Create the folder if it doesn't exist */
//   if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath, { recursive: true });
//   }

//   /** Define the file name using the current hour */
//   const fileName = `${currentHour}.txt`;

//   /** Construct the full file path */
//   const filePath = path.join(folderPath, fileName);
//   return filePath;
// }

// // Function to create update folder
// function createUpdateFolder(baseDir) {
//   const updateFolder = path.join(baseDir, 'UpdateFolder');

//   if (!fs.existsSync(updateFolder)) {
//     fs.mkdirSync(updateFolder);
//   }

//   return updateFolder;
// }

// // Schedule a task to run every 5 seconds
// cron.schedule("*/5 * * * * *", function () {
//   logdata();
// });

// const logdata = async () => {
//   const logMsg = `This file was created by a node-cron job \n`;

//   // Get the log directory
//   const logDir = await logDirectory(__dirname);
//   console.log(logDir);

//   // Get the update folder
//   const updateFolder = createUpdateFolder(__dirname);

//   // Append the log message to the log file
//   fs.appendFile(logDir, logMsg, (err) => {
//     if (err) {
//       console.error("Error writing to log file:", err);
//     }
//   });
// };

// const cron = require("node-cron");
// const fs = require("fs");
// const path = require("path");

// function logDirectory(baseDir) {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
//   const currentDay = currentDate.getDate().toString().padStart(2, "0");
//   const currentHour = currentDate.getHours().toString().padStart(2, "0");
//   const folderName = `${currentYear}${currentMonth}${currentDay}`;
//   const folderPath = path.join(baseDir, "./LogFile/", folderName);

//   if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath, { recursive: true });
//   }

//   const fileName = `${currentHour}.txt`;
//   const filePath = path.join(folderPath, fileName);
//   return filePath;
// }

// function createUpdateFolder(baseDir) {
//   const updateFolder = path.join(baseDir, 'UpdateFolder');

//   if (!fs.existsSync(updateFolder)) {
//     fs.mkdirSync(updateFolder);
//   }

//   return updateFolder;
// }

// cron.schedule("*/5 * * * * *", function () {
//   logdata();
// });

// const logdata = async () => {
//   const logMsg = `This file was created by a node-cron job \n`;
//   const logDir = await logDirectory(__dirname);
//   console.log(logDir);
//   const updateFolder = createUpdateFolder(__dirname);

//   fs.writeFile(logDir, logMsg, (err) => {
//     if (err) {
//       console.error("Error writing to log file:", err);
//     }
//   });

//   const updateFileName = `update_${Date.now()}.txt`;
//   const updateFilePath = path.join(updateFolder, updateFileName);
//   fs.writeFile(updateFilePath, logMsg, (err) => {
//     if (err) {
//       console.error("Error writing to update file:", err);
//     }
//   });
// };

// const fs = require("fs");
// const path = require("path");

// function logDirectory(baseDir) {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
//   const currentDay = currentDate.getDate().toString().padStart(2, "0");
//   const currentHour = currentDate.getHours().toString().padStart(2, "0");
//   const folderName = `${currentYear}${currentMonth}${currentDay}`;
//   const folderPath = path.join(baseDir, "../../Public/LogFile/", folderName);

//   if (!fs.existsSync(folderPath)) {
//     fs.mkdirSync(folderPath, { recursive: true });
//   }

//   const fileName = `${currentHour}.txt`;
//   const filePath = path.join(folderPath, fileName);
//   return filePath;
// }

// function createUpdateFolder(baseDir) {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
//   const currentDay = currentDate.getDate().toString().padStart(2, "0");
//   const folderName = `${currentYear}${currentMonth}${currentDay}`;
//   const updateFolder = path.join(baseDir, "../../Public/UpdateFolder", folderName);

//   if (!fs.existsSync(updateFolder)) {
//     fs.mkdirSync(updateFolder, { recursive: true });
//   }

//   return updateFolder;
// }

// const logdataFile = async () => {
//   const logMsg = `This file was created by a node-cron job\n`;

//   const logDir = await logDirectory(__dirname);
//   console.log(logDir);

//   const updateFolder = createUpdateFolder(__dirname);
//   console.log(updateFolder);

//   fs.appendFile(logDir, logMsg, (err) => {
//     if (err) {
//       console.error("Error writing to log file:", err);
//     }
//   });

//   const updateFileName = `update_${Date.now()}.txt`;
//   const updateFilePath = path.join(updateFolder, updateFileName);
//   fs.writeFile(updateFilePath, logMsg, (err) => {
//     if (err) {
//       console.error("Error writing to update file:", err);
//     }
//   });
// };

// module.exports = { logdataFile };

var mysql = require("mysql2");
var cron = require("node-cron");
var fs = require("fs");
const path = require("path");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin",
  database: "practics",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database");
});

cron.schedule("*/5 * * * * *", function () {
  console.log("Running cron job");

  connection.query("SELECT * FROM practics.employee", function (err, result) {
    if (err) throw err;

    var data = JSON.stringify(result);

    // Define the file path
    const filePath = path.join(__dirname, "public/data.json");

    // Check if the directory exists, if not, create it
    const directory = path.dirname(filePath);
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }

    fs.writeFile(filePath, data, function (err) {
      if (err) throw err;
      console.log("Data written to file");
    });
  });
});

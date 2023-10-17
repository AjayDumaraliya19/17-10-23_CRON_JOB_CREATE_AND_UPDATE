const fs = require("fs");
const path = require("path");

/** Get the curent data */
const currentDate = new Date();

/** Get the current data base on the year, month & hour */
const currentYear = currentDate.getFullYear();
const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const currentDay = currentDate.getDate().toString().padStart(2, "0");
const currentHour = currentDate.getHours().toString().padStart(2, "0");

/** Created the folder in YYYYMMDD formate */
const folderName = `${currentYear}${currentMonth}${currentDay}`;

/** Crearted the log path dierectory based on the current data */
function logDirectory(baseDir) {
  /** Create the folder path */
  const folderPath = path.join(baseDir, "../../Public/Creaetfile/", folderName);

  /** Create the folder exist and create it if it doesn't */
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  /** Defined the file name using the current hour */
  const fileName = `${currentHour}.txt`;

  /** Construct the full fiel path */
  const filePath = path.join(folderPath, fileName);
  return filePath;
}

/** update the log file function */
function createUpdateFolder(baseDir) {
  const updateFolder = path.join(
    baseDir,
    "../../Public/UpdateFolder",
    folderName
  );

  if (!fs.existsSync(updateFolder)) {
    fs.mkdirSync(updateFolder, { recursive: true });
  }

  return updateFolder;
}

const logdataFile = async () => {
  const logMsg = `This file was created by a node-cron job\n`;

  /** Get the log directory */
  const logDir = await logDirectory(__dirname);
  console.log(logDir);

  /** Update the log file */
  const updateFolder = createUpdateFolder(__dirname);
  console.log(updateFolder);

  /** Append the log message to the log file */
  fs.appendFile(logDir, logMsg, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });

  /** Updatet the log message to the log file */
  const updateFileName = `update_${Date.now()}.txt`;
  const updateFilePath = path.join(updateFolder, updateFileName);
  fs.writeFile(updateFilePath, logMsg, (err) => {
    if (err) {
      console.error("Error writing to update file:", err);
    }
  });
};

/** Exports all data module here */
module.exports = { logdataFile };

/*
 * Title: Data Storage
 * Description: Data Store in local device
 * Author: MD Arif Islam
 * Date: 12 Nov 2022
 */

// dependencies
const fs = require("fs");
const path = require("path");

// lib object - module scaffolding
const lib = {};

// base directory of data folder
lib.basedir = path.join(__dirname, "/../.data/");

// write data to file
lib.create = (dir, file, data, callback) => {
  // open file for writting
  fs.open(
    lib.basedir + dir + "/" + file + ".json",
    "wx",
    (err, fileDescriptor) => {
      if (!err && fileDescriptor) {
        // convert data to string
        const stringData = JSON.stringify(data);

        // write data to file and then close it
        fs.writeFile(fileDescriptor, stringData, (err) => {
          if (!err) {
            fs.close(fileDescriptor, (err) => {
              if (!err) {
                callback(false);
              } else {
                callback("Error closing the new file!");
              }
            });
          } else {
            callback("Error writting to new file");
          }
        });
      } else {
        callback("Couldn't create new file, it may already exists!");
      }
    }
  );
};

module.exports = lib;

const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = "/home/cron";
const MAX_AGE = 30 * 24 * 60 * 60 * 1000;

fs.readdir(OUTPUT_DIR, (err, files) => {
  if (err) {
    return console.error("ERROR read folder:", err.message);
  }

  files.forEach((file) => {
    const filePath = path.join(OUTPUT_DIR, file);

    fs.stat(filePath, (err, stats) => {
      if (err) return;

      const age = Date.now() - stats.mtimeMs;

      if (age > MAX_AGE) {
        fs.unlink(filePath, (err) => {
          if (!err) {
            console.log(`DELETED: ${file}`);
          }
        });
      }
    });
  });
});
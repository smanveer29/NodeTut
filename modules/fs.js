// const { readFileSync, writeFileSync } = require("fs");
const { readFile, writeFile } = require("fs");
const path = require("path");

const filePAth = path.resolve(__dirname, "../lodash.js");
const read = readFile(filePAth, "utf8", (err, res) => {
  if (err) {
    console.log(err, "err");
    return;
  }
  console.log(res);
});

console.log(read);

const path = require("path");
console.log(path.sep);

// const filePath = path.join("/modules/", "os.js");

const absolutePath = path.resolve(__dirname, __filename);
console.log(absolutePath);

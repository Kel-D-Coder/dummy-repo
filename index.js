const { readFileSync, writeFileSync,  } = require("fs");

const first = readFileSync("./files/first.txt", "utf-8");
const second = readFileSync("./files/second.txt", "utf-8");

console.log(first, second);

writeFileSync('./files/result.txt', "Hello world")

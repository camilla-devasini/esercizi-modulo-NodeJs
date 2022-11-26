const fs = require("fs");

let data = "This is the data i want to write";
fs.writeFile("text.txt", data, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File successfully written");
  console.log(fs.readFileSync("text.txt", "utf8"));
});

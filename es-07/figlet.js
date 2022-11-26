var figlet = require("figlet");

figlet("Hello", (error, data) => {
  if (error) {
    console.log("something went wrong");
    console.dir(err);
    return;
  }
  console.log(data);
});

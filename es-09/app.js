const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    console.log("request received");

    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    response.body = "Welcome to the World Wide Web!";

    response.end(response.body);
  });
}

module.exports = createApp;

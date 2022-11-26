import express from "express";
import "express-async-errors";

const myApp = express();
myApp.get("/cities", (request, response) => {
  response.json([{ city: "Roma" }, { city: "Paris" }]);
});

export default myApp;

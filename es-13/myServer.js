"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const myApp_1 = __importDefault(require("./myApp"));
require("dotenv/config");
const port = process.env.PORT;
myApp_1.default.listen(port, () => {
    console.log(`Server runs at localhost:${port}`);
});

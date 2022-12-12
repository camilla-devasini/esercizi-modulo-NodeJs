"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const client_1 = __importDefault(require("./src/lib/prisma/client"));
const validation_1 = require("./src/lib/validation");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// API get all cities
app.get("/cities", async (request, response) => {
    const cities = await client_1.default.city.findMany();
    response.json(cities);
});
// API get one single city
app.get("/cities/:id(\\d+)", async (request, response, next) => {
    const cityId = Number(request.params.id);
    const city = await client_1.default.city.findUnique({
        where: { id: cityId },
    });
    if (!city) {
        response.status(404);
        return next(`Cannot GET /cities/${cityId}`);
    }
    response.json(city);
});
//API post
app.post("/cities", (0, validation_1.validate)({ body: validation_1.citySchema }), async (request, response) => {
    const cityData = request.body;
    const city = await client_1.default.city.create({
        data: cityData,
    });
    response.status(201).json(city);
});
// API put - modify a city record
app.put("/cities/:id(\\d+)", (0, validation_1.validate)({ body: validation_1.citySchema }), async (request, response, next) => {
    const cityId = Number(request.params.id);
    const cityData = request.body;
    try {
        const city = await client_1.default.city.update({
            where: { id: cityId },
            data: cityData,
        });
        response.status(200).json(city);
    }
    catch (error) {
        response.status(404);
        next(`Cannot PUT /cities/${cityId}`);
    }
});
// API delete a city record
app.delete("/cities/:id(\\d+)", async (request, response, next) => {
    const cityId = Number(request.params.id);
    try {
        await client_1.default.city.delete({
            where: { id: cityId },
        });
        response.status(204).end();
    }
    catch (error) {
        response.status(404);
        next(`Cannot DELETE /cities/${cityId}`);
    }
});
app.use(validation_1.validationErrorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map
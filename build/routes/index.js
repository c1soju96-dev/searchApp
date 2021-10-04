"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const express = require("express");
const http = require("http");
const swaggerUi = require("swagger-ui-express");
const searchRouter_1 = require("./searchRouter");
var swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");
/**
 * @export
 * @param {express.Application} app
 */
function init(app) {
    const router = express.Router();
    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Search API with Swagger",
                version: "0.8.0",
                description: "This is a simple Search API application made with Express and documented with Swagger",
                license: {
                    name: "Whowhoe",
                    url: "https://blog.whowhoe.site",
                },
                contact: {
                    name: "Whowhoe",
                    url: "https://blog.whowhoe.site",
                    email: "c1soju96@gmail.com",
                },
            },
            servers: [
                {
                    url: process.env.URL + ":" + process.env.PORT,
                },
            ],
        },
        apis: [path.join(__dirname, "./*.ts")],
    };
    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    app.use("/v1/search", searchRouter_1.default);
    /**
     * @description
     *  If swagger.json file exists in root folder, shows swagger api description
     *  else send commands, how to get swagger.json file
     * @constructs
     */
    app.use("/docs", swaggerUi.serve);
    app.get("/docs", swaggerUi.setup(swaggerJsdoc(options)));
    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req, res, next) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });
    /**
     * @constructs all routes
     */
    app.use(router);
}
exports.init = init;
//# sourceMappingURL=index.js.map
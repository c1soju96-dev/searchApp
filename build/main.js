"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./app/index");
const app_config_1 = require("./app/app.config");
index_1.default.listen(app_config_1.APP_PORT, () => {
    console.log("Start Port : " + app_config_1.APP_PORT);
});
//# sourceMappingURL=main.js.map
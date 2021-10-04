"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const postServer_1 = require("./postServer");
const index = (request, response, next) => {
    //   if (request.headers.authorization !== "SECRET") {
    //     return next(new Error());
    //   }
    const posts = (0, postServer_1.getPosts)();
    response.send(posts);
};
exports.index = index;
//# sourceMappingURL=postController.js.map
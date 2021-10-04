"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const components_1 = require("@/components");
/**
 * @constant {express.Router}
 */
const router = (0, express_1.Router)();
/**
 * GET method route
 * @example http://yoursite:yourport/v1/search/queryString
 *
 * @swagger
 * /v1/search/{query}:
 *   get:
 *     description: Get all stored users in Database
 *     tags: ["search"]
 *     parameters:
 *      - in: path
 *        name: query
 *        description: the query string
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: An array of users
 *         content:
 *           application/json:
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 */
router.get("/:query", components_1.searchComponent.search);
/**
 * @export {express.Router}
 */
exports.default = router;
//# sourceMappingURL=searchRouter.js.map
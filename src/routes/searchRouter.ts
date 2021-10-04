import { Router } from "express";
import { searchComponent } from "@/components";

/**
 * @constant {express.Router}
 */
const router: Router = Router();

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
router.get("/:query", searchComponent.search);

/**
 * @export {express.Router}
 */
export default router;

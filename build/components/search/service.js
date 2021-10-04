"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppSearchClient = require("@elastic/app-search-node");
const searchFields = { name: {} };
const resultFields = {
    name: { raw: {} },
    brand: { raw: {} },
    categories: { raw: {} },
    colors: { raw: {} },
};
const options = {
    search_fields: searchFields,
    result_fields: resultFields,
};
/**
 * @export
 * @implements {ISearchService}
 */
const SearchService = {
    /**
     * @returns {Promise < any >}
     * @memberof SearchService
     */
    search(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const baseUrlFn = () => process.env.APP_SEARCH_URL;
                const client = new AppSearchClient(undefined, process.env.APP_SEARCH_KEY, baseUrlFn);
                return yield client
                    .search(process.env.APP_SEARCH_ENGINE_NAME, query, options)
                    .then((response) => {
                    //console.log(response.results[0].name.raw);
                    return response.results;
                })
                    .catch((error) => console.log(error.errorMessages));
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    },
};
exports.default = SearchService;
//# sourceMappingURL=service.js.map
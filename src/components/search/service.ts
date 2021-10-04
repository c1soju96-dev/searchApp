import { ISearchService } from "./interface";

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
const SearchService: ISearchService = {
  /**
   * @returns {Promise < any >}
   * @memberof SearchService
   */
  async search(query: string): Promise<any> {
    try {
      const baseUrlFn = () => process.env.APP_SEARCH_URL;
      const client = new AppSearchClient(
        undefined,
        process.env.APP_SEARCH_KEY,
        baseUrlFn
      );

      return await client
        .search(process.env.APP_SEARCH_ENGINE_NAME, query, options)
        .then((response: any) => {
          //console.log(response.results[0].name.raw);
          return response.results;
        })
        .catch((error: { errorMessages: any }) =>
          console.log(error.errorMessages)
        );
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
export default SearchService;

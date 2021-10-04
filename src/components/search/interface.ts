/**
 * @export
 * @interface IUserService
 */
export interface ISearchService {
  /**
   * @returns {Promise<IUserModel[]>}
   * @memberof IUserService
   */
  search(query: string): Promise<any>;
}

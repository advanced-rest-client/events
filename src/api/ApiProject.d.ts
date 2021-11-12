export interface ApiProject {
  /**
   * The definition of API specification.
   * This is not the spec itself but rather a pointer where to find the specification.
   */
  spec?: any;
  /**
   * The list of environments.
   */
  environments?: any[];
  /**
   * The identifier of the default environment to use.
   * When not set the first environment is used.
   */
  defaultEnvironment?: any;
  /**
   * The list of collections related to this project.
   * A collection is an ordered list of requests.
   */
  collections?: any[];
  /**
   * The definition of test scenarios for the API.
   */
  tests?: any[];
  /**
   * The list of schemas used in this API project.
   */
  schemas?: any[];
}

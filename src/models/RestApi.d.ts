import { Entity } from './base';

export declare interface ARCRestApiIndex extends Entity {
  /**
   * API title
   */
  title: string;
  /**
   * API media type
   */
  type: string;
  /**
   * API order on the list
   */
  order: number;
  /**
   * List of version names stored with this API.
   */
  versions: string[];
  /**
   * The latest added version name.
   */
  latest: string;
}

export declare interface ARCRestApi extends Entity {
  /**
   * The ID of the index item that this entry refers to.
   */
  indexId: string;
  /**
   * Version name of the API
   */
  version: string;
  /**
   * API data model. It is the output of the AMF parser run on the API.
   */
  data: string;
  /**
   * The AMF parser version used to parse this document.
   */
  amfVersion?: string;
}

import { Entity } from './base';

export declare class ApiHttpUrl {
  /**
   * The value of the URL.
   */
  path?: string;
  /**
   * The host value of the URL
   */
  host?: string;
  /**
   * The protocol value of the URL
   */
  protocol?: string;
  /**
   * The query parameters.
   */
  query?: ApiType[];
}

export declare interface EntityTiming {
  /**
   * Timestamp when the project was last updated.
   */
  updated?: number;
  /**
   * Timestamp when the project was created.
   */
  created?: number;
  /**
   * A timestamp of the midnight when the object was updated or created
   * (depending on the object).
   */
  midnight?: number;
}

export declare interface ApiServerVariable {
  /**
   * The variable name.
   */
  name: string;
  /**
   * The description of the variable
   */
  description?: string;
  /**
   * List of possible values.
   */
  enum: string[];
  /**
   * The default value of selected variable.
   */
  default: string;
}

/**
 * A definition of an API server. This is used in the API project to define a base URI for each request.
 */
export declare interface ApiServer {
  /**
   * The base URI value. The server can contain variables in form
   * `https://{region}.api.domain.com`. By default each variable is a required string until
   * `variables` property is set.
   */
  url: string;
  /**
   * A list of variables in the url value.
   */
  variables?: ApiServerVariable[];
}

/**
 * The definition of a project folder structure.
 */
export declare interface ARCProjectFolder extends EntityTiming {
  /**
   * The name of the project or a folder
   */
  name: string;
  /**
   * The description of the project or a folder
   */
  description?: string;
  /**
   * List of folders in this project / folder
   */
  folders?: ARCProjectFolder[];
  /**
   * The list of request ids associated with the API project.
   * The requests are stored in the `api-request` data store.
   */
  requests?: string[];
  /**
   * List of tags added to the project.
   */
  tags?: string[];
}

/**
 * The new definition of the ARC project that is an API project.
 */
export declare interface ARCApiProject extends Entity, ARCProjectFolder {
  /**
   * True when the project is starred by the user.
   */
  starred?: boolean;
  /**
   * Definition of base servers to be used with the request editor.
   */
  servers?: ApiServer[];
}

export declare interface ApiType {
  /**
   * Property name
   */
  name: string;
  /**
   * Property value
   */
  value: any;
  /**
   * Property type
   */
  type?: 'string' | 'integer' | 'float' | 'nil' | 'boolean' | 'date' | 'datetime' | 'time' | 'enum';
  /**
   * Whether the property is enabled. If not set it is assumed the property is enabled.
   */
  enabled?: boolean;
  /**
   * The default value for the property
   */
  default?: any;
  /**
   * Enum values for the property.
   */
  enum?: any|any[];
  /**
   * The description of the property
   */
  description?: string;
  /**
   * Whether the value id required to be provided. This is used with validation.
   */
  required?: boolean;
}

/**
 * The definition of the API request HTTP properties.
 */
export declare interface ApiHttpRequest {
  /**
   * HTTP method name
   */
  method: string;
  /**
   * The list of headers on the request
   */
  headers?: ApiType[];
  /**
   * Definition of the API request URL.
   */
  url: ApiHttpUrl;
}

/**
 * An API request object is an entity that only exists inside an API project.
 * The reference is created in an API folder.
 */
export declare interface APIRequest extends EntityTiming, Entity {
  /**
   * The request definition for the request editor.
   */
  http: ApiHttpRequest;
  /**
   * The name of the request
   */
  name: string;
  /**
   * The description of the request
   */
  description?: string;
}
import { MultipartBody } from "./RequestBody";

/**
 * Schema definition for ARC request timings. This is mostly consistent with HAR timings.
 */
export declare interface RequestTime {
  connect: number;
  receive: number;
  send: number;
  wait: number;
  blocked: number;
  dns: number;
  ssl?: number;
}

/**
 * ARC transforms response body from ArrayBuffer or Buffer
 * to this structure to store it in the data store.
 */
export declare interface TransformedPayload {
  /**
   * The type of the original data typ
   */
  type: string;
  /**
   * Array of integers to be restored to its original form defined in the `type`.
   */
  data: number[];
}

export declare interface HTTPResponse {
  /**
   * The response status code
   */
  status: number;
  /**
   * The reason part of the status message
   */
  statusText?: string;
  /**
   * The response headers
   */
  headers?: string;
  /**
   * The response message
   */
  payload?: string|Buffer|ArrayBuffer|TransformedPayload;
}

/**
 * An information about a redirect
 */
export declare interface ResponseRedirect {
  /**
   * Redirection response
   */
  response: HTTPResponse;
  /**
   * Redirection timings, if available.
   */
  timings?: RequestTime;
  /**
   * The timestamp when the request was started (before the connection is made)
   */
  startTime: number;
  /**
   * The timestamp of when the response ended.
   */
  endTime: number;
  /**
   * The URL the request was redirected to
   */
  url: string;
}

export declare interface RequestsSize {
  /**
   * The size of the request in bytes
   */
  request: number;
  /**
   * The size of the response in bytes
   */
  response: number;
}

export declare interface BaseResponse extends HTTPResponse {
  /**
   * The ID of the request object used to trigger the response.
   */
  id?: string;
}

/**
 * ARC response object.
 */
export declare interface Response extends BaseResponse {
  /**
   * The request timings. 
   * Some HTTP clients may not give this information.
   */
  timings?: RequestTime;
  /**
   * The total loading time (from sending the request to receive last byte)
   */
  loadingTime: number;
  /**
   * The list of redirects, if any.
   */
  redirects?: ResponseRedirect[];
  /**
   * Request and response size. Some HTTP clients may not give this information.
   */
  size?: RequestsSize;

  /**
   * ARCs internal transformation of a native FormData into a structure that
   * can be stored in the data store. This is used internally by their model
   * and when requesting ARC request object this is restored to the original
   * format.
   */
  multipart?: MultipartBody[];

  /**
   * When a file is the request payload then in the data store it is transformed into a 
   * string and the payload is emptied. This is used internally by the data store
   * to restore the original format
   */
  blob?: string;

  /**
   * The authentication request from the server.
   */
  auth?: ResponseAuth;
}

export declare interface ErrorResponse extends BaseResponse {
  /**
   * An error associated with the response
   */
  error: Error;
}

export declare interface ResponseAuth {
  /**
   * The requested by the authorization server authentication method
   */
  method: string;
  /**
   * The current state if the authorization process. This is used by NTLM authorization helper.
   */
  state?: number;
  /**
   * The headers association with the response.
   */
  headers?: string;
  challengeHeader?: string;
}

import { AuthorizationSettingsUnion } from '../authorization/Authorization';
import { HostRule } from '../models/HostRule';
import { Entity } from '../models/base';
import { ErrorResponse, Response } from './ArcResponse';
import { LegacyResponse, LegacyResponseMeta } from './Legacy';
import { ApiType } from '../models/ApiTypes';
import { BodyMeta, MultipartBody } from './RequestBody';
import { RunnableAction } from '../actions/Actions';
import { Variable } from '../models/Variable';
import { RequestCertificate } from '../models/ClientCertificate';

/**
 * This interface was used in a few components, this is left for compatibility
 * @deprecated Use RequestBody.MultipartBody instead
 */
export declare interface MultipartTransformer extends MultipartBody {}

/**
 * The definition of the ARC base HTTP request object
 */
export declare interface HTTPRequest {
  /**
   * The request URL
   */
  url: string;
  /**
   * HTTP method name
   */
  method: string;
  /**
   * HTTP headers string
   */
  headers?: string;
  /**
   * The request payload
   */
  payload?: string|File|Blob|Buffer|ArrayBuffer|FormData;
}

/**
 * An interface describing a request made by the HTTP transport.
 * Each transport used by ARC must return this structure in the response event.
 * This is not a replacement for the editor request that also has to be returned.
 * 
 * Another difference is that this headers contains a final list of headers sent to the 
 * server, including default headers, content-length, authorization, and so on.
 */
export declare interface TransportRequest extends HTTPRequest {
  /**
   * The HTTP message sent to the server (full message).
   * Some HTTP clients may not give this information.
   */
  httpMessage: string;
  /**
   * The timestamp when the request was started (before the connection is made)
   */
  startTime: number;
  /**
   * The timestamp of when the response ended.
   */
  endTime: number;
}

/**
 * ARC request `config` object.
 */
export declare interface RequestConfig {
  /**
   * Whether the processor should use this configuration.
   */
  enabled: boolean;
  /**
   * The request timeout.
   * Default no timeout.
   */
  timeout?: number;
  /**
   * Whether or not the request should follow redirects.
   */
  followRedirects?: boolean;
  /**
   * Does not set session (saved) cookies to this request
   */
  ignoreSessionCookies?: boolean;
  /**
   * Hosts table configuration.
   */
  hosts?: HostRule;
  /**
   * Whether the processor should validate certificates.
   */
  validateCertificates?: boolean;
  /**
   * Whether the native (Node's) transport should be used.
   */
  nativeTransport?: boolean;
  /**
   * Whether to put a "default" headers (accept and user agent)
   */
  defaultHeaders?: true;
  /**
   * A list of variables to use with the request.
   * Note, request variables override application and workspace variables.
   */
  variables?: Variable[];
}

/**
 * Authorization configuration for the request.
 */
export declare interface RequestAuthorization {
  /**
   * Authorization configuration
   */
  config: AuthorizationSettingsUnion;
  /**
   * The name of the authorization
   */
  type: string;
  /**
   * Whether the authorization is enabled.
   */
  enabled: boolean;
  /**
   * Whether the authorization is reported to be valid.
   * The application should take action when the authorization is invalid but possibly allow the request.
   */
  valid: boolean;
}

/**
 * URL editor meta data.
 */
export declare interface UrlMeta {
  /**
   * The model generated for the URL parameters.
   */
  model?: ApiType[];
  /**
   * The query params delimiter. By default it is `&`.
   */
  delimiter?: string;
}

/**
 * Headers editor meta data.
 */
export declare interface HeadersMeta {
  /**
   * The model generated for the headers editor.
   */
  model?: ApiType[];
  /**
   * Whether the source editor is opened.
   */
  source?: boolean;
}

export declare interface AuthMeta {
  /**
   * The index of the selected authorization method.
   */
  selected?: number;
}

export declare interface ActionsMeta {
  /**
   * The index of the selected arc actions view.
   */
  selected?: number;
}

/**
 * UI configuration for the request.
 */
export declare interface RequestUiMeta {
  /**
   * Body editor metadata.
   */
  body?: BodyMeta;
  /**
   * URL editor metadata.
   */
  url?: UrlMeta;
  /**
   * Headers editor metadata.
   */
  headers?: HeadersMeta;
  /**
   * Authorization editor meta.
   */
  authorization?: AuthMeta;
  /**
   * ARC request actions editor UI config.
   */
  actions?: ActionsMeta;

  /**
   * The currently selected editor in the request editor UI.
   */
  selectedEditor?: number;
  /**
   * Optional configuration of the response view
   */
  response?: ResponseUiMeta;
}

export declare interface ResponseUiMeta {
  /**
   * The list of activated panels in the response view.
   */
  activePanels?: string[];
  /**
   * The name of the selected response panel.
   */
  selectedPanel?: string;
}

export declare interface RequestActions {
  /**
   * Actions to be executed before the request is sent to the transport library.
   */
  request?: RunnableAction[];
  /**
   * Actions to be executed after the response is fully received but before it is reported back to the UI.
   */
  response?: RunnableAction[];
}

/**
 * The definition of the ARC request that is shared in different contexts.
 */
export declare interface ArcBaseRequest extends HTTPRequest {
  /**
   * The kind of the object. In ARC by default a request object is an HTTP request object.
   */
  kind?: string;
  /**
   * Request processing configuration.
   */
  config?: RequestConfig;
  /**
   * The old authorization system that allowed only single request to be used.
   * @deprecated
   */
  auth?: AuthorizationSettingsUnion;
  /**
   * Request authorization configuration
   */
  authorization?: RequestAuthorization[];
  /**
   * The last response made with this request. This is always set with the history object.
   * May not be set with others.
   */
  response?: Response | ErrorResponse;
  /**
   * Set together with `response` property. Describes a request sent by the transport.
   */
  transportRequest?: TransportRequest,
  /**
   * Old ARC's response declaration. This is kept for internal data model processing. 
   * @deprecated Do not use.
   */
  _response?: LegacyResponse;
  /**
   * Old ARC's response meta declaration. This is kept for internal data model processing. 
   * @deprecated Do not use.
   */
  _responseMeta?: LegacyResponseMeta;
  /**
   * @deprecated Do not use.
   */
  _isErrorResponse?: boolean;
  /**
   * The UI configuration for the request.
   * Each part of the UI has its own default state so this is optional and 
   * always updated when the UI change.
   */
  ui?: RequestUiMeta;
  /**
   * Actions to be performed when the request is executed.
   */
  actions?: RequestActions;

  clientCertificate?: RequestCertificate;
}

/**
 * A model of an ARC request that has been stored in the data store
 */
export declare interface ArcStoredRequest extends ArcBaseRequest {
  /**
   * The type of the request stored in the data store.
   * Can be either `saved` or `history` which corresponds
   * to `SavedRequest` and `HistoryRequest` definitions respectively.
   */
  type?: string;
  /**
   * Timestamp when the request was last updated.
   */
  updated?: number;
  /**
   * Timestamp when the request was created.
   */
  created?: number;
  /**
   * An ID of Google Drive object where this request is stored.
   */
  driveId?: string;
  /**
   * A timestamp of the midnight when the request object was updated
   */
  midnight?: number;
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
}

/**
 * The definition of the ARC request history data entity.
 */
export declare interface ARCHistoryRequest extends ArcStoredRequest, Entity {}

export declare interface ARCSavedRequest extends ArcStoredRequest, Entity {
  /**
   * The name of the request
   */
  name: string;
  /**
   * The description of the request
   */
  description?: string;
  /**
   * A list of projects this request is assigned to.
   */
  projects?: string[];
}

/**
 * The definition of the ARC request in the request editor.
 */
export declare interface ArcEditorRequest {
  /**
   * The auto generated ID of the request in the editor.
   */
  id: string;
  /**
   * The ARC request object
   */
  request: ArcBaseRequest | ARCSavedRequest | ARCHistoryRequest;
}

export declare interface ARCRequestRestoreOptions {
  /**
   * When set the payload is ignored from the request and the model returns `undefined.
   * This is used to optimize queries to the data store.
   */
  ignorePayload?: boolean;
  /**
   * When performing a bulk read operation it preserves order
   * or requested items by key by adding `undefined` to the indexes that
   * failed to read
   */
  preserveOrder?: boolean;
}

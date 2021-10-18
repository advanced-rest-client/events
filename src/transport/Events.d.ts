import { ArcRequest, ArcResponse } from '../../';
import { WebsocketEditorRequest } from "../request/WebSocket";

/**
 * An event dispatched when requesting to make a HTTP request
 * with the current data.
 * 
 * All properties are located in the detail object.
 */
export declare class ApiRequestEvent extends CustomEvent<ArcRequest.ArcEditorRequest> {
  /**
   * @param request The request configuration to transport.
   */
  constructor(request: ArcRequest.ArcEditorRequest);
}

export declare interface ApiTransportEventDetail {
  id: string;
  request: ArcRequest.ArcBaseRequest;
  config: ArcRequest.RequestConfig;
}

/**
 * An event dispatched by when the request is ready to be send by the HTTP transport.
 */
export declare class ApiTransportEvent extends CustomEvent<ApiTransportEventDetail> {
  /**
   * @param {string} id The id of the request
   * @param {ArcBaseRequest} request The request configuration to transport.
   * @param {RequestConfig} config The transport configuration to use. Request configuration overrides the values.
   */
  constructor(id: string, request: ArcRequest.ArcBaseRequest, config?: ArcRequest.RequestConfig);
}

export declare interface ApiAbortEventDetail {
  id: string;
}

/**
 * An event dispatched when the processor should abort making the request.
 */
export class ApiAbortEvent extends CustomEvent<ApiAbortEventDetail> {
  /**
   * @param id The id of the request to abort
   */
  constructor(id: string);
}


export declare interface ApiResponseEventDetail {
  id: string;
  request: ArcRequest.TransportRequest;
  response: ArcResponse.Response|ArcResponse.ErrorResponse;
  source: ArcRequest.ArcBaseRequest;
}

/**
 * An event dispatched when the response is ready to be processed by the UI.
 * 
 * All properties are located in the detail object.
 */
export declare class ApiResponseEvent extends CustomEvent<ApiResponseEventDetail> {
  /**
   * @param type The event type
   * @param id The id of the request
   * @param source The source request from the request editor
   * @param request Information about the request that has been transported
   * @param response The response object
   */
  constructor(type: string, id: string, source: ArcRequest.ArcBaseRequest, request: ArcRequest.TransportRequest, response: ArcResponse.Response|ArcResponse.ErrorResponse);
}

/**
 * Events used by the web socket transport. Used to initialize the connection, to inform to send the data, and to close the connection.
 */
export declare class WebsocketRequestEvent extends CustomEvent<WebsocketEditorRequest> {
  /**
   * @param type The type of the event
   * @param editorRequest The editor web socket request associated with the event
   */
  constructor(type: string, editorRequest: WebsocketEditorRequest);
}

export interface HttpTransportEventDetail {
  /**
   * The request configuration to make.
   */
  request: ArcRequest.ArcBaseRequest;
  /**
   * When handled the event returns the response object.
   */
  result?: Promise<ArcResponse.HTTPResponse>;
}

/**
 * An event dispatched when requesting an HTTP transport from the backend
 * to mitigate CORS restrictions. This request is made outside ARC's HTTP processing engine.
 * Also, unlike other ARC's transport events, this event returns the response on the detail, 
 * via the `detail.result` property.
 */
export class HttpTransportEvent extends CustomEvent<HttpTransportEventDetail> {
  /**
   * @param request The request configuration to transport.
   */
  constructor(request: ArcRequest.ArcBaseRequest);
}

/**
 * @param target A target on which to dispatch the event
 * @param request The request configuration to transport.
 */
export declare function sendAction(target: EventTarget, request: ArcRequest.ArcEditorRequest): void;

/**
 * @param target A target on which to dispatch the event
 * @param id The id of the request
 * @param source The source request from the request editor
 * @param request Information about the request that has been transported
 * @param response The response object
 */
export declare function responseAction(target: EventTarget, id: string, source: ArcRequest.ArcBaseRequest, request: ArcRequest.TransportRequest, response: ArcResponse.Response|ArcResponse.ErrorResponse): void;

/**
 * @param target A target on which to dispatch the event
 * @param id The id of the request
 * @param request The request configuration to transport.
 * @param config The transport configuration to use. Request configuration overrides the values.
 */
export declare function transportAction(target: EventTarget, id: string, request: ArcRequest.ArcBaseRequest, config?: ArcRequest.RequestConfig): void;

/**
 * @param target A target on which to dispatch the event
 * @param id The id of the request
 * @param source The source request from the request editor
 * @param request Information about the request that has been transported
 * @param response The response object
 */
export declare function processResponseAction(target: EventTarget, id: string, source: ArcRequest.ArcBaseRequest, request: ArcRequest.TransportRequest, response: ArcResponse.Response|ArcResponse.ErrorResponse): void;

/**
 * @param target A target on which to dispatch the event
 * @param id The id of the request to abort
 */
export declare function abortAction(target: EventTarget, id: string): void;

/**
 * Dispatches an event to make a web socket connection
 * @param target A node on which to dispatch the event
 * @param editorRequest The editor web socket request associated with the event
 */
export function informConnectAction(target: EventTarget, editorRequest: WebsocketEditorRequest): void;

/**
 * Dispatches an event to close a web socket connection
 * @param target A node on which to dispatch the event
 * @param editorRequest The editor web socket request associated with the event
 */
export function informDisconnectAction(target: EventTarget, editorRequest: WebsocketEditorRequest): void;

/**
 * Dispatches an event to close a web socket connection
 * @param target A node on which to dispatch the event
 * @param editorRequest The editor web socket request associated with the event
 */
export function informWebSocketSendAction(target: EventTarget, editorRequest: WebsocketEditorRequest): void;

/**
 * Performs an HTTP request on the backend to mitigate CORS restrictions.
 * 
 * @param target A target on which to dispatch the event
 * @param request The request configuration to transport.
 */
export function httpTransportAction(target: EventTarget, request: ArcRequest.ArcBaseRequest): Promise<ArcResponse.HTTPResponse>;

import { ArcRequest, ArcResponse } from '@advanced-rest-client/arc-types';
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


export declare interface ApiResponseEventDetail {
  id: string;
  request: ArcRequest.TransportRequest;
  response: ArcResponse.Response|ArcResponse.ErrorResponse;
}

declare class ResponseEvent extends CustomEvent<ApiResponseEventDetail> {
  /**
   * @param type The event type
   * @param id The id of the request
   * @param request Information about the request that has been transported
   * @param response The response object
   * @param cancelable Whether the event is cancelable
   */
  constructor(type: string, id: string, request: ArcRequest.TransportRequest, response: ArcResponse.Response|ArcResponse.ErrorResponse, cancelable?: boolean);
}

/**
 * An event dispatched when the response is ready to be processed by the UI.
 * 
 * All properties are located in the detail object.
 */
export declare class ApiResponseEvent extends ResponseEvent {
  /**
   * @param id The id of the request
   * @param request Information about the request that has been transported
   * @param response The response object
   */
  constructor(id: string, request: ArcRequest.TransportRequest, response: ArcResponse.Response|ArcResponse.ErrorResponse);
}

/**
 * An event dispatched by the HTTP transport to be handler by the request 
 * logic to run actions and then dispatch response event.
 */
export declare class ApiProcessResponseEvent extends ResponseEvent {
  /**
   * @param id The id of the request
   * @param request Information about the request that has been transported
   * @param response The response object
   */
  constructor(id: string, request: ArcRequest.TransportRequest, response: ArcResponse.Response|ArcResponse.ErrorResponse);
}

/**
 * @param target A target on which to dispatch the event
 * @param request The request configuration to transport.
 */
export declare function sendAction(target: EventTarget, request: ArcRequest.ArcEditorRequest): void;

/**
 * @param target A target on which to dispatch the event
 * @param id The id of the request
 * @param request Information about the request that has been transported
 * @param response The response object
 */
export declare function responseAction(target: EventTarget, id: string, request: ArcRequest.TransportRequest, response: ArcResponse.Response|ArcResponse.ErrorResponse): void;

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
 * @param request Information about the request that has been transported
 * @param response The response object
 */
export declare function processResponseAction(target: EventTarget, id: string, request: ArcRequest.TransportRequest, response: ArcResponse.Response|ArcResponse.ErrorResponse): void;

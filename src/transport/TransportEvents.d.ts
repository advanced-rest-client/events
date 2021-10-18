import { ArcRequest, ArcResponse } from '../../';
import { WebsocketEditorRequest } from "../request/WebSocket";

declare interface TransportEvents {
  /**
   * @param target A target on which to dispatch the event
   * @param request The request configuration to transport.
   */
  request(target: EventTarget, request: ArcRequest.ArcEditorRequest): void;
  /**
   * @param target A target on which to dispatch the event
   * @param id The id of the request
   * @param source The source request from the request editor
   * @param request Information about the request that has been transported
   * @param response The response object
   */
  response(target: EventTarget, id: string, source: ArcRequest.ArcBaseRequest, request: ArcRequest.TransportRequest, response: ArcResponse.Response|ArcResponse.ErrorResponse): void;
  /**
   * @param target A target on which to dispatch the event
   * @param id The id of the request
   * @param request The request configuration to transport.
   * @param config The transport configuration to use. Request configuration overrides the values.
   */
  transport(target: EventTarget, id: string, request: ArcRequest.ArcBaseRequest, config?: ArcRequest.RequestConfig): void;
  /**
   * @param target A target on which to dispatch the event
   * @param id The id of the request
   * @param source The source request from the request editor
   * @param request Information about the request that has been transported
   * @param response The response object
   */
  processResponse(target: EventTarget, id: string, source: ArcRequest.ArcBaseRequest, request: ArcRequest.TransportRequest, response: ArcResponse.Response|ArcResponse.ErrorResponse): void;
  /**
   * @param target A target on which to dispatch the event
   * @param id The id of the request to abort
   */
  abort(target: EventTarget, id: string): void;

  /**
   * Dispatches an event to make a web socket connection
   * @param target A node on which to dispatch the event
   * @param editorRequest The editor web socket request associated with the event
   */
  connect(target: EventTarget, editorRequest: WebsocketEditorRequest): void;
  /**
   * Dispatches an event to close a web socket connection
   * @param target A node on which to dispatch the event
   * @param editorRequest The editor web socket request associated with the event
   */
  disconnect(target: EventTarget, editorRequest: WebsocketEditorRequest): void;
  /**
   * Dispatches an event to close a web socket connection
   * @param target A node on which to dispatch the event
   * @param editorRequest The editor web socket request associated with the event
   */
  connectionSend(target: EventTarget, editorRequest: WebsocketEditorRequest): void;
  /**
   * Performs an HTTP request on the backend to mitigate CORS restrictions.
   * 
   * @param target A target on which to dispatch the event
   * @param request The request configuration to transport.
   */
  httpTransport(target: EventTarget, request: ArcRequest.ArcBaseRequest): Promise<ArcResponse.HTTPResponse>;
}

export const TransportEvents: TransportEvents;

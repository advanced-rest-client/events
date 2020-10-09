import { ArcRequest, ArcResponse } from '@advanced-rest-client/arc-types';

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
}

export const TransportEvents: TransportEvents;
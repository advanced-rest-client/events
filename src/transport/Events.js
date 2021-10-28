/* eslint-disable max-classes-per-file */
import { EventTypes } from '../EventTypes.js';

/** @typedef {import('../../').ArcRequest.ArcEditorRequest} ArcEditorRequest */
/** @typedef {import('../../').ArcRequest.TransportRequest} TransportRequest */
/** @typedef {import('../../').ArcRequest.ArcBaseRequest} ArcBaseRequest */
/** @typedef {import('../../').ArcRequest.RequestConfig} RequestConfig */
/** @typedef {import('../../').ArcResponse.Response} Response */
/** @typedef {import('../../').ArcResponse.ErrorResponse} ErrorResponse */
/** @typedef {import('../../').ArcResponse.HTTPResponse} HTTPResponse */
/** @typedef {import('../../').WebSocket.WebsocketEditorRequest} WebsocketEditorRequest */

/**
 * An event dispatched by the UI when requesting to make a HTTP request
 * with the current data.
 * 
 * All properties are located in the detail object.
 */
export class ApiRequestEvent extends CustomEvent {
  /**
   * @param {ArcEditorRequest} request The request configuration to transport.
   */
  constructor(request) {
    super(EventTypes.Transport.request, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: request,
    });
  }
}

/**
 * An event dispatched when the request is ready to be send by the HTTP transport.
 */
export class ApiTransportEvent extends CustomEvent {
  /**
   * @param {string} id The id of the request
   * @param {ArcBaseRequest} request The request configuration to transport.
   * @param {RequestConfig=} config The transport configuration to use. Request configuration overrides the values.
   */
  constructor(id, request, config={enabled: false}) {
    super(EventTypes.Transport.transport, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        id, request, config,
      },
    });
  }
}

/**
 * An event dispatched when the processor should abort making the request.
 */
export class ApiAbortEvent extends CustomEvent {
  /**
   * @param {string} id The id of the request to abort
   */
  constructor(id) {
    super(EventTypes.Transport.abort, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        id
      },
    });
  }
}

/**
 * Base event for API response events
 */
export class ApiResponseEvent extends CustomEvent {
  /**
   * @param {string} type The event type
   * @param {string} id The id of the request
   * @param {ArcBaseRequest} source The source request from the request editor
   * @param {TransportRequest} request Information about the request that has been transported
   * @param {Response|ErrorResponse} response The response object
   * @param {boolean=} [cancelable=true] Whether the event is cancelable
   */
  constructor(type, id, source, request, response, cancelable=true) {
    super(type, {
      bubbles: true,
      composed: true,
      cancelable,
      detail: {
        id, source, request, response,
      },
    });
  }
}

/**
 * Events used by the web socket transport. Used to initialize the connection, to inform to send the data, and to close the connection.
 */
export class WebsocketRequestEvent extends CustomEvent {
  /**
   * @param {string} type The type of the event
   * @param {WebsocketEditorRequest} editorRequest The editor web socket request associated with the event
   */
  constructor(type, editorRequest) {
    super(type, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: editorRequest,
    });
  }
}

/**
 * An event dispatched when requesting an HTTP transport from the backend
 * to mitigate CORS restrictions. This request is made outside ARC's HTTP processing engine.
 * Also, unlike other ARC's transport events, this event returns the response on the detail, 
 * via the `detail.result` property.
 */
export class HttpTransportEvent extends CustomEvent {
  /**
   * @param {ArcBaseRequest} request The request configuration to transport.
   */
  constructor(request) {
    super(EventTypes.Transport.httpTransport, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        request,
        result: undefined,
      },
    });
  }
}

/**
 * @param {EventTarget} target A target on which to dispatch the event
 * @param {ArcEditorRequest} request The request configuration to transport.
 */
export function sendAction(target, request) {
  const e = new ApiRequestEvent(request);
  target.dispatchEvent(e);
}

/**
 * @param {EventTarget} target A target on which to dispatch the event
 * @param {string} id The id of the request
 * @param {ArcBaseRequest} source The source request from the request editor
 * @param {TransportRequest} request Information about the request that has been transported
 * @param {Response|ErrorResponse} response The response object
 */
export function responseAction(target, id, source, request, response) {
  const e = new ApiResponseEvent(EventTypes.Transport.response, id, source, request, response);
  target.dispatchEvent(e);
}

/**
 * @param {EventTarget} target A target on which to dispatch the event
 * @param {string} id The id of the request
 * @param {ArcBaseRequest} request The request configuration to transport.
 * @param {RequestConfig=} config The transport configuration to use. Request configuration overrides the values.
 */
export function transportAction(target, id, request, config) {
  const e = new ApiTransportEvent(id, request, config);
  target.dispatchEvent(e);
}

/**
 * @param {EventTarget} target A target on which to dispatch the event
 * @param {string} id The id of the request
 * @param {ArcBaseRequest} source The source request from the request editor
 * @param {TransportRequest} request Information about the request that has been transported
 * @param {Response|ErrorResponse} response The response object
 */
export function processResponseAction(target, id, source, request, response) {
  const e = new ApiResponseEvent(EventTypes.Transport.processResponse, id, source, request, response);
  target.dispatchEvent(e);
}

/**
 * @param {EventTarget} target A target on which to dispatch the event
 * @param {string} id The id of the request to abort
 */
export function abortAction(target, id) {
  const e = new ApiAbortEvent(id);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event to make a web socket connection
 * @param {EventTarget} target A node on which to dispatch the event
 * @param {WebsocketEditorRequest} editorRequest The editor web socket request associated with the event
 */
export function informConnectAction(target, editorRequest) {
  const e = new WebsocketRequestEvent(EventTypes.Transport.connect, editorRequest);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event to close a web socket connection
 * @param {EventTarget} target A node on which to dispatch the event
 * @param {WebsocketEditorRequest} editorRequest The editor web socket request associated with the event
 */
export function informDisconnectAction(target, editorRequest) {
  const e = new WebsocketRequestEvent(EventTypes.Transport.disconnect, editorRequest);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event to close a web socket connection
 * @param {EventTarget} target A node on which to dispatch the event
 * @param {WebsocketEditorRequest} editorRequest The editor web socket request associated with the event
 */
export function informWebSocketSendAction(target, editorRequest) {
  const e = new WebsocketRequestEvent(EventTypes.Transport.connectionSend, editorRequest);
  target.dispatchEvent(e);
}

/**
 * Performs an HTTP request on the backend to mitigate CORS restrictions.
 * 
 * @param {EventTarget} target A target on which to dispatch the event
 * @param {ArcBaseRequest} request The request configuration to transport.
 * @returns {Promise<HTTPResponse>}
 */
export async function httpTransportAction(target, request) {
  const e = new HttpTransportEvent(request);
  target.dispatchEvent(e);
  return e.detail.result;
}

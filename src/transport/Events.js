/* eslint-disable max-classes-per-file */
import { TransportEventTypes } from './TransportEventTypes.js';

/** @typedef {import('@advanced-rest-client/arc-types').ArcRequest.ArcEditorRequest} ArcEditorRequest */
/** @typedef {import('@advanced-rest-client/arc-types').ArcRequest.TransportRequest} TransportRequest */
/** @typedef {import('@advanced-rest-client/arc-types').ArcRequest.ArcBaseRequest} ArcBaseRequest */
/** @typedef {import('@advanced-rest-client/arc-types').ArcRequest.RequestConfig} RequestConfig */
/** @typedef {import('@advanced-rest-client/arc-types').ArcResponse.Response} Response */
/** @typedef {import('@advanced-rest-client/arc-types').ArcResponse.Response} ErrorResponse */

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
    super(TransportEventTypes.request, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: request,
    });
  }
}

/**
 * An event dispatched by when the request is ready to be send by the HTTP transport.
 */
export class ApiTransportEvent extends CustomEvent {
  /**
   * @param {string} id The id of the request
   * @param {ArcBaseRequest} request The request configuration to transport.
   * @param {RequestConfig=} config The transport configuration to use. Request configuration overrides the values.
   */
  constructor(id, request, config={enabled: false}) {
    super(TransportEventTypes.transport, {
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
  const e = new ApiResponseEvent(TransportEventTypes.response, id, source, request, response);
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
  const e = new ApiResponseEvent(TransportEventTypes.processResponse, id, source, request, response);
  target.dispatchEvent(e);
}

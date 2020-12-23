import { WebsocketEditorRequest } from "@advanced-rest-client/arc-types/src/request/WebSocket";

export const propertyValue: unique symbol;
export const valueValue: unique symbol;

/**
 * Dispatches when a request property changed.
 * Note, this is only for select number of properties that are globally interesting
 * (like URL or content type header). 
 * 
 * Use `changedProperty` and `changedValue` to read the values.
 */
export declare class RequestChangeEvent extends Event {
  /**
   * The name of the property that changed used to initialize this event
   */
  readonly changedProperty: string;

  /**
   * The value of the property that changed used to initialize this event
   */
  readonly changedValue: string;

  /**
   * @param type The type of the event
   * @param property The name of the property that changed
   * @param value The value of the property that changed
   */
  constructor(type: string, property: string, value: any);
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

/**
 * Dispatches an event to inform the request logic to send current request.
 * @param target A node on which to dispatch the event
 */
export declare function informSendAction(target: EventTarget): void;

/**
 * Dispatches an invent to inform about request URL change
 * @param target A node on which to dispatch the event
 * @param value The new URL value
 */
export declare function stateUrlChangeAction(target: EventTarget, value: string): void;

/**
 * Dispatches an invent to inform about request URL change
 * @param target A node on which to dispatch the event
 * @param value The new content-type value
 */
export function stateContentTypeAction(target: EventTarget, value: string): void;

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
